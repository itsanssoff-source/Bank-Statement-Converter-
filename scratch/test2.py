import fitz # PyMuPDF
doc = fitz.open(r"C:\Users\j\Downloads\Documents\dummy_statement.pdf")
for i, page in enumerate(doc):
    print(f"Page {i+1}:")
    text = page.get_text()
    if text.strip():
        print("Text found:", len(text), "chars")
    else:
        print("No text found.")
    
    images = page.get_images()
    if images:
        print("Images found:", len(images))
    else:
        print("No images found.")
