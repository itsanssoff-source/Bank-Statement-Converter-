// src/lib/bankFormats.ts

export interface BankFormat {
  id: string;
  name: string;
  /** Strings to search for in the first page text to identify this bank */
  identifiers: string[];
  /** Expected date format hint */
  dateFormat: string;
  /** Column layout: which columns appear and in what order */
  columns: ('date' | 'valueDate' | 'description' | 'cheque' | 'deposit' | 'withdrawal' | 'debit' | 'credit' | 'amount' | 'balance')[];
  /** Header keywords that identify the transaction table header row */
  headerKeywords: string[];
  /** Whether this bank uses separate Deposit/Withdrawal columns instead of a single Amount */
  separateDebitCredit: boolean;
}

export const BANK_FORMATS: BankFormat[] = [
  {
    id: 'chase',
    name: 'JPMorgan Chase',
    identifiers: ['JPMorgan Chase', 'JPMORGAN CHASE', 'Chase Bank'],
    dateFormat: 'MM/DD/YYYY',
    columns: ['date', 'description', 'amount', 'balance'],
    headerKeywords: ['Date', 'Description', 'Amount', 'Balance'],
    separateDebitCredit: false,
  },
  {
    id: 'bofa',
    name: 'Bank of America',
    identifiers: ['Bank of America', 'BANK OF AMERICA', 'BofA'],
    dateFormat: 'MM/DD/YYYY',
    columns: ['date', 'description', 'amount', 'balance'],
    headerKeywords: ['Date', 'Description', 'Amount', 'Balance'],
    separateDebitCredit: false,
  },
  {
    id: 'wellsfargo',
    name: 'Wells Fargo',
    identifiers: ['Wells Fargo', 'WELLS FARGO'],
    dateFormat: 'MM/DD',
    columns: ['date', 'description', 'debit', 'credit', 'balance'],
    headerKeywords: ['Date', 'Description', 'Deposits', 'Withdrawals', 'Balance'],
    separateDebitCredit: true,
  },
  {
    id: 'citi',
    name: 'Citibank',
    identifiers: ['Citibank', 'CITIBANK', 'Citi'],
    dateFormat: 'MM/DD',
    columns: ['date', 'description', 'debit', 'credit', 'balance'],
    headerKeywords: ['Date', 'Description', 'Debit', 'Credit', 'Balance'],
    separateDebitCredit: true,
  },
  {
    id: 'scb',
    name: 'Standard Chartered',
    identifiers: ['Standard Chartered', 'STANDARD CHARTERED', 'SCB'],
    dateFormat: 'DD MMM YY',
    columns: ['date', 'valueDate', 'description', 'cheque', 'deposit', 'withdrawal', 'balance'],
    headerKeywords: ['Date', 'Value', 'Description', 'Cheque', 'Deposit', 'Withdrawal', 'Balance'],
    separateDebitCredit: true,
  },
  {
    id: 'hsbc',
    name: 'HSBC',
    identifiers: ['HSBC'],
    dateFormat: 'DD MMM YYYY',
    columns: ['date', 'description', 'amount', 'balance'],
    headerKeywords: ['Date', 'Description', 'Amount', 'Balance'],
    separateDebitCredit: false,
  },
  {
    id: 'sbi',
    name: 'State Bank of India',
    identifiers: ['State Bank of India', 'STATE BANK OF INDIA', 'SBI'],
    dateFormat: 'DD/MM/YYYY',
    columns: ['date', 'description', 'cheque', 'debit', 'credit', 'balance'],
    headerKeywords: ['Txn Date', 'Description', 'Chq', 'Debit', 'Credit', 'Balance'],
    separateDebitCredit: true,
  },
  {
    id: 'icici',
    name: 'ICICI Bank',
    identifiers: ['ICICI Bank', 'ICICI BANK'],
    dateFormat: 'DD/MM/YYYY',
    columns: ['date', 'description', 'debit', 'credit', 'balance'],
    headerKeywords: ['Date', 'Transaction', 'Withdrawal', 'Deposit', 'Balance'],
    separateDebitCredit: true,
  },
  {
    id: 'hdfc',
    name: 'HDFC Bank',
    identifiers: ['HDFC Bank', 'HDFC BANK'],
    dateFormat: 'DD/MM/YY',
    columns: ['date', 'description', 'debit', 'credit', 'balance'],
    headerKeywords: ['Date', 'Narration', 'Withdrawal', 'Deposit', 'Balance'],
    separateDebitCredit: true,
  },
];

/**
 * Detect which bank format matches the given text from the first page of a PDF.
 * Returns the matched BankFormat or null for generic/unknown.
 */
export function detectBank(firstPageText: string): BankFormat | null {
  const upperText = firstPageText.toUpperCase();
  for (const format of BANK_FORMATS) {
    for (const id of format.identifiers) {
      if (upperText.includes(id.toUpperCase())) {
        return format;
      }
    }
  }
  return null;
}
