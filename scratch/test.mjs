import fs from 'fs';
import * as pdfjs from 'pdfjs-dist/legacy/build/pdf.mjs';

const pdfPath = 'C:\\Users\\j\\Downloads\\Documents\\dummy_statement.pdf';
const fileBuffer = fs.readFileSync(pdfPath);
const uint8Array = new Uint8Array(fileBuffer);

async function extractTextFromPdf() {
  const loadingTask = pdfjs.getDocument({ data: uint8Array });
  const pdf = await loadingTask.promise;
  const structuredPages = [];

  for (let i = 1; i <= pdf.numPages; i++) {
    const page = await pdf.getPage(i);
    const textContent = await page.getTextContent();
    
    const items = textContent.items;
    console.log(`Page ${i} items count:`, items.length);
    const rowMap = {};

    items.forEach((item) => {
      const x = item.transform[4];
      let y = Math.round(item.transform[5]);
      
      const existingYs = Object.keys(rowMap).map(Number);
      const closeY = existingYs.find(existingY => Math.abs(existingY - y) <= 3);
      if (closeY !== undefined) {
        y = closeY;
      }

      if (!rowMap[y]) rowMap[y] = [];
      rowMap[y].push({ str: item.str, x });
    });

    const sortedY = Object.keys(rowMap)
      .map(Number)
      .sort((a, b) => b - a);

    const pageRows = sortedY.map((y) => {
      return rowMap[y]
        .sort((a, b) => a.x - b.x)
        .map(item => item.str);
    });
    structuredPages.push(...pageRows);
  }

  return structuredPages;
}

extractTextFromPdf().then(pages => {
  pages.forEach((row, i) => {
    console.log(`Row ${i}: ${row.join(' ')}`);
  });
}).catch(console.error);
