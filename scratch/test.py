import sys
from pypdf import PdfReader

reader = PdfReader(r"C:\Users\j\Downloads\Documents\02-Simplex.pdf")
for i, page in enumerate(reader.pages):
    print(f"--- Page {i+1} ---")
    print(page.extract_text())
