"""Generate looping transparent pixel-art cloud GIFs."""

from pathlib import Path

from PIL import Image

OUT = Path(r"C:\Users\wak\Desktop\portifolio\project\public")
SCALE = 5
KEY = (255, 0, 255)

PALETTE = {
    "outline": (90, 86, 110),
    "fill": (236, 232, 244),
    "mid": (214, 206, 232),
    "hi": (252, 250, 255),
    "shade": (186, 176, 214),
}


def canvas(w: int, h: int) -> Image.Image:
    return Image.new("RGBA", (w, h), (0, 0, 0, 0))


def plot(img: Image.Image, pixels: list[tuple[int, int, str]]) -> None:
    px = img.load()
    for x, y, tone in pixels:
        if 0 <= x < img.width and 0 <= y < img.height:
            r, g, b = PALETTE[tone]
            px[x, y] = (r, g, b, 255)


def puff(cx: int, cy: int, w: int, h: int, bump: int = 0) -> list[tuple[int, int, str]]:
    dots: list[tuple[int, int, str]] = []
    for y in range(h):
        for x in range(w):
            nx = (x + 0.5) / w * 2 - 1
            ny = (y + 0.5) / h * 2 - 1
            extra = 0.18 if 0.15 < x / w < 0.55 and y < h * 0.45 else 0
            if nx * nx + (ny * ny) * 1.35 - extra > 0.92:
                continue
            tone = "fill"
            if y == 0 or x == 0 or x == w - 1 or y == h - 1:
                tone = "outline"
            elif y <= 1 + bump and abs(nx) < 0.7:
                tone = "hi"
            elif y >= h - 2:
                tone = "shade"
            elif ny < -0.15:
                tone = "mid" if x % 3 == 0 else "fill"
            dots.append((cx + x, cy + y - bump, tone))
    return dots


def cloud_a(frame: int) -> Image.Image:
    img = canvas(28, 14)
    b = [0, 1, 1, 0][frame]
    plot(img, puff(1, 5, 11, 7, b))
    plot(img, puff(8, 3, 14, 9, 1 - b))
    plot(img, puff(16, 6, 10, 6, b))
    return img


def cloud_b(frame: int) -> Image.Image:
    img = canvas(22, 12)
    b = [0, 0, 1, 0][frame]
    plot(img, puff(1, 4, 9, 6, b))
    plot(img, puff(7, 2, 13, 8, 1 - b))
    return img


def cloud_c(frame: int) -> Image.Image:
    img = canvas(18, 10)
    b = [1, 0, 0, 1][frame]
    plot(img, puff(1, 3, 8, 6, b))
    plot(img, puff(6, 2, 11, 7, 0))
    return img


def to_gif_frame(src: Image.Image) -> Image.Image:
    big = src.resize((src.width * SCALE, src.height * SCALE), Image.Resampling.NEAREST)
    bg = Image.new("RGB", big.size, KEY)
    bg.paste(big.convert("RGB"), mask=big.getchannel("A"))
    return bg.convert("P", palette=Image.ADAPTIVE, colors=16)


def save_gif(maker, name: str, duration: int = 220) -> None:
    frames = [to_gif_frame(maker(i)) for i in range(4)]
    first = frames[0]
    pal = first.getpalette() or []
    trans = 0
    best = 10**9
    for i in range(256):
        if i * 3 + 2 >= len(pal):
            break
        r, g, b = pal[i * 3 : i * 3 + 3]
        dist = (r - 255) ** 2 + g**2 + (b - 255) ** 2
        if dist < best:
            best = dist
            trans = i
    first.save(
        OUT / name,
        save_all=True,
        append_images=frames[1:],
        loop=0,
        duration=duration,
        disposal=2,
        transparency=trans,
        optimize=False,
    )
    print(f"wrote {name} trans={trans}")


save_gif(cloud_a, "cloud-a.gif", 260)
save_gif(cloud_b, "cloud-b.gif", 300)
save_gif(cloud_c, "cloud-c.gif", 240)
