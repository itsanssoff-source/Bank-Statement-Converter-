// src/lib/tableExtractor.ts
import { ParsedRow, PdfExtractionResult } from './pdfParser';
import { detectBank, BankFormat } from './bankFormats';

export interface Transaction {
  id: string;
  date: string;
  description: string;
  amount: number;
  type: 'DEBIT' | 'CREDIT';
  balance: string;
  category?: string;
  originalDescription?: string;
}

// More comprehensive date and amount patterns
const DATE_REGEX = /^(0?[1-9]|[12]\d|3[01])[\/\-\. ](?:0?[1-9]|1[0-2]|[A-Z]{3,4})[\/\-\. ]?(?:\d{4}|\d{2})?$/i;
const AMOUNT_REGEX = /^-?[\(]?\s*\$?\s*\d{1,3}(?:[,\s]\d{3})*(?:\.\d{2})?[\)]?$/;

function cleanAmount(amountStr: string): number {
  let cleaned = amountStr.replace(/[$,\s]/g, '');
  const isNegative = cleaned.startsWith('-') || (cleaned.startsWith('(') && cleaned.endsWith(')'));
  cleaned = cleaned.replace(/[\(\)]/g, '');
  const val = parseFloat(cleaned);
  return isNegative ? -Math.abs(val) : val;
}

export function parseTransactions(extraction: PdfExtractionResult): { transactions: Transaction[], bank: BankFormat | null } {
  const transactions: Transaction[] = [];
  if (extraction.isScanned || extraction.rows.length === 0) {
    return { transactions, bank: null };
  }

  const bank = detectBank(extraction.firstPageText);
  let lastTransaction: Transaction | null = null;

  for (let i = 0; i < extraction.rows.length; i++) {
    const row = extraction.rows[i];
    const items = row.items;

    if (items.length < 2) {
      if (lastTransaction && items.length === 1 && !DATE_REGEX.test(items[0].text)) {
        // Multi-line description heuristic
        if (items[0].x > 50 && items[0].x < 300) {
           lastTransaction.description += ' ' + items[0].text;
           lastTransaction.originalDescription = lastTransaction.description;
        }
      }
      continue;
    }

    const firstText = items[0].text.trim();
    if (DATE_REGEX.test(firstText) || (bank && firstText.length >= 5 && firstText.length <= 12 && /\d/.test(firstText))) {
      // Possible transaction
      let date = firstText;
      let description = '';
      let debit = 0, credit = 0, amount = 0;
      let balance = '';
      let type: 'DEBIT' | 'CREDIT' = 'DEBIT';

      const amountItems = items.slice(1).filter(item => AMOUNT_REGEX.test(item.text));
      const descItems = items.slice(1).filter(item => !AMOUNT_REGEX.test(item.text));

      description = descItems.map(d => d.text).join(' ');

      if (amountItems.length > 0) {
        if (bank && bank.separateDebitCredit && amountItems.length >= 1) {
           // Basic logic: if 2 amounts, likely debit/credit. If 3, debit/credit/balance.
           // This is a simplified heuristic; real implementation would map by X coordinates.
           if (amountItems.length >= 2) {
               const a1 = cleanAmount(amountItems[0].text);
               const a2 = cleanAmount(amountItems[1].text);
               if (a1 !== 0) {
                  amount = -Math.abs(a1);
                  type = 'DEBIT';
                  balance = amountItems.length >= 3 ? amountItems[2].text : amountItems[1].text;
               } else {
                  amount = Math.abs(a2);
                  type = 'CREDIT';
                  balance = amountItems.length >= 3 ? amountItems[2].text : '';
               }
           } else {
               amount = cleanAmount(amountItems[0].text);
               type = amount < 0 ? 'DEBIT' : 'CREDIT';
           }
        } else {
           amount = cleanAmount(amountItems[0].text);
           type = amount < 0 ? 'DEBIT' : 'CREDIT';
           if (amountItems.length >= 2) {
               balance = amountItems[amountItems.length - 1].text;
           }
        }

        if (description.trim().length > 0) {
            const tx: Transaction = {
              id: `${i}-${Date.now()}`,
              date,
              description: description.trim(),
              originalDescription: description.trim(),
              amount,
              type,
              balance,
            };
            transactions.push(tx);
            lastTransaction = tx;
        }
      }
    } else if (lastTransaction) {
       // Multi-line description heuristic
       const descItems = items.filter(item => !AMOUNT_REGEX.test(item.text));
       if (descItems.length > 0 && descItems[0].x > 50 && descItems[0].x < 300) {
           lastTransaction.description += ' ' + descItems.map(d => d.text).join(' ');
           lastTransaction.originalDescription = lastTransaction.description;
       }
    }
  }

  return { transactions, bank };
}