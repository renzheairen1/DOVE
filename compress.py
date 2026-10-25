from pathlib import Path
from PIL import Image

for image_path in Path("assets").rglob("*"):
    if image_path.suffix.lower() in (".png", ".jpg", ".jpeg"):
        webp_path = image_path.with_suffix(".webp")
        img = Image.open(image_path).convert("RGB")
        img.save(webp_path, "WEBP", quality=85, method=6)
        old_kb = image_path.stat().st_size // 1024
        new_kb = webp_path.stat().st_size // 1024
        print(f"{image_path.name}: {old_kb}KB -> {new_kb}KB")
