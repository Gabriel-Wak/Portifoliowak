"""Chroma-key magenta pixel sprites and export transparent frames."""

from pathlib import Path

from PIL import Image

ASSETS = Path(r"C:\Users\wak\.cursor\projects\c-Users-wak-Desktop-portifolio\assets")
OUT = Path(r"C:\Users\wak\Desktop\portifolio\project\public")
TARGET_H = 96


def chroma(img: Image.Image) -> Image.Image:
    rgba = img.convert("RGBA")
    px = rgba.load()
    w, h = rgba.size
    for y in range(h):
        for x in range(w):
            r, g, b, a = px[x, y]
            magenta = r > 180 and b > 180 and g < 90
            hot_pink = r > 200 and b > 90 and g < 70 and r - g > 110
            if magenta or hot_pink:
                px[x, y] = (0, 0, 0, 0)
    return rgba


def crop_alpha(img: Image.Image, pad: int = 4) -> Image.Image:
    bbox = img.getbbox()
    if not bbox:
        return img
    l, t, r, b = bbox
    l = max(0, l - pad)
    t = max(0, t - pad)
    r = min(img.width, r + pad)
    b = min(img.height, b + pad)
    return img.crop((l, t, r, b))


def pixelize(img: Image.Image, height: int = TARGET_H) -> Image.Image:
    ratio = height / img.height
    width = max(1, round(img.width * ratio))
    small = img.resize((width, height), Image.Resampling.NEAREST)
    return small


def save(img: Image.Image, name: str) -> None:
    path = OUT / name
    img.save(path, "PNG")
    print(f"wrote {path} {img.size}")


idle = pixelize(crop_alpha(chroma(Image.open(ASSETS / "pixel-gabriel-idle.png"))))
save(idle, "pixel-idle.png")

sheet = chroma(Image.open(ASSETS / "pixel-gabriel-sheet.png"))
col_w = sheet.width // 4
frames = []
for i in range(4):
    col = sheet.crop((i * col_w, 0, (i + 1) * col_w, sheet.height))
    frame = pixelize(crop_alpha(col))
    names = ["pixel-stand.png", "pixel-smile.png", "pixel-wave.png", "pixel-walk.png"]
    save(frame, names[i])
    frames.append(frame)

max_w = max(f.width for f in frames)
max_h = max(f.height for f in frames)
atlas = Image.new("RGBA", (max_w * 4, max_h), (0, 0, 0, 0))
for i, frame in enumerate(frames):
    x = i * max_w + (max_w - frame.width) // 2
    y = max_h - frame.height
    atlas.paste(frame, (x, y), frame)
save(atlas, "pixel-sheet.png")
print("atlas cell", max_w, max_h)
