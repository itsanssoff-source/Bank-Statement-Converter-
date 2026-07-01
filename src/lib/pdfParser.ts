// src/lib/pdfParser.ts
import './pdfSetup';
import * as pdfjs from 'pdfjs-dist';

export interface TextItem {
  text: string;
  x: number;
  y: number;
  width: number;
}

export interface ParsedRow {
  items: TextItem[];
  /** The full row text joined left-to-right with spaces */
  text: string;
  /** The Y coordinate of this row */
  y: number;
}

export interface PdfExtractionResult {
  rows: ParsedRow[];
  /** True if the PDF appears to be scanned/image-based (no extractable text) */
  isScanned: boolean;
  /** Total number of pages in the PDF */
  pageCount: number;
  /** Raw full text of the first page (for bank detection) */
  firstPageText: string;
}

/**
 * Extract text from a PDF file with full positional information.
 * Groups text items into rows by Y-coordinate and sorts left-to-right by X.
 */
export async function extractTextFromPdf(file: File, password?: string): Promise<PdfExtractionResult> {
  const arrayBuffer = await file.arrayBuffer();
  const loadingTask = pdfjs.getDocument({
    data: arrayBuffer,
    password: password,
  });

  const pdf = await loadingTask.promise;
  const allRows: ParsedRow[] = [];
  let totalTextItems = 0;
  let firstPageText = '';

  for (let i = 1; i <= pdf.numPages; i++) {
    const page = await pdf.getPage(i);
    const textContent = await page.getTextContent();
    const items = textContent.items as any[];

    totalTextItems += items.length;

    // Group items by Y-coordinate with a tolerance of ±4px
    const rowMap: Map<number, TextItem[]> = new Map();

    items.forEach((item) => {
      if (!item.str || item.str.trim() === '') return;

      const x = item.transform[4];
      const y = Math.round(item.transform[5]);
      const width = item.width || 0;

      // Find an existing row within tolerance
      let targetY = y;
      for (const existingY of rowMap.keys()) {
        if (Math.abs(existingY - y) <= 4) {
          targetY = existingY;
          break;
        }
      }

      if (!rowMap.has(targetY)) {
        rowMap.set(targetY, []);
      }
      rowMap.get(targetY)!.push({
        text: item.str.replace(/\n/g, '').trim(),
        x,
        y: targetY,
        width,
      });
    });

    // Sort rows top-to-bottom (higher Y = higher on page in PDF coords)
    const sortedYs = [...rowMap.keys()].sort((a, b) => b - a);

    const pageRows: ParsedRow[] = sortedYs.map((y) => {
      const rowItems = rowMap.get(y)!.sort((a, b) => a.x - b.x);
      const text = rowItems.map((item) => item.text).join(' ');
      return { items: rowItems, text, y };
    });

    if (i === 1) {
      firstPageText = pageRows.map((r) => r.text).join('\n');
    }

    allRows.push(...pageRows);
  }

  return {
    rows: allRows,
    isScanned: totalTextItems === 0,
    pageCount: pdf.numPages,
    firstPageText,
  };
}