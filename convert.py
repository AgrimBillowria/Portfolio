import os
try:
    from PIL import Image
except ImportError:
    import sys
    import subprocess
    subprocess.check_call([sys.executable, "-m", "pip", "install", "Pillow"])
    from PIL import Image

def convert_to_webp(filepath):
    if not os.path.exists(filepath):
        print(f"Not found: {filepath}")
        return
    name, ext = os.path.splitext(filepath)
    if ext.lower() == '.webp': return
    outpath = name + '.webp'
    im = Image.open(filepath).convert("RGB")
    im.save(outpath, "webp", quality=85)
    print(f"Converted {filepath} to {outpath}")

convert_to_webp("public/Professional Picture/IMG_8085.jpeg")
convert_to_webp("public/projects/resume_classifier.png")
