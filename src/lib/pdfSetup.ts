// src/lib/pdfSetup.ts
import * as pdfjs from 'pdfjs-dist';

// Switched from cdnjs to unpkg to support the newly released 6.1.200 version
pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

export default pdfjs;