import urllib.request
import sys
import subprocess
try:
    import pypdf
except ImportError:
    subprocess.check_call([sys.executable, "-m", "pip", "install", "pypdf"])
    import pypdf

reader = pypdf.PdfReader("/Users/agrimbillowria/Desktop/Portfolio/public/CV/Agrim_Billowria_Resume_v6.docx.pdf")
text = ""
for page in reader.pages:
    text += page.extract_text() + "\n"
print(text)
