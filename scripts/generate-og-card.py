"""
generate-og-card.py
===================
Generates the Open Graph / Twitter social card (1200x630).

USAGE
------
    python3 scripts/generate-og-card.py

DEPENDENCIES
-------------
    pip3 install pillow fonttools

NOTES
------
Uses the site's real brand font. @fontsource ships woff/woff2 only, so the
latin woff (zlib-compressed, unlike woff2's brotli) is converted to a TTF in a
temp dir at run time. Nothing is written into the repo except the card itself.

The composition deliberately mirrors the homepage hero: wordmark and headline
on the left, the same parabola figure on the right, vermilion accent, sharp
corners. A shared link should look like the page it opens.
"""

import os
import tempfile
from PIL import Image, ImageDraw, ImageFont
from fontTools.ttLib import TTFont

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
FONT_DIR = os.path.join(ROOT, "node_modules", "@fontsource", "space-mono", "files")
FIGURE = os.path.join(ROOT, "public", "ejemplos", "hero", "parabola-tangente.png")
OUT_DIR = os.path.join(ROOT, "public", "og")
OUT = os.path.join(OUT_DIR, "agora-og.png")

W, H = 1200, 630
BG = (244, 244, 244)
INK = (31, 31, 31)
MUTED = (90, 90, 90)
ACCENT = (194, 67, 30)

REQUIRED = set("ÁGORAcademiteásnCu PrimoBhlrES.")


def load_font(weight: str, size: int, tmp: str) -> ImageFont.FreeTypeFont:
    """Convert the packaged woff to ttf once per weight, then load at size."""
    ttf = os.path.join(tmp, f"space-mono-{weight}.ttf")
    if not os.path.exists(ttf):
        src = os.path.join(FONT_DIR, f"space-mono-latin-{weight}-normal.woff")
        f = TTFont(src)
        f.flavor = None          # drop woff wrapper, emit plain TTF
        f.save(ttf)
        cmap = f.getBestCmap()
        missing = {c for c in REQUIRED if ord(c) not in cmap}
        if missing:
            raise SystemExit(f"font is missing glyphs: {sorted(missing)}")
    return ImageFont.truetype(ttf, size)


def text_w(draw, s, font, tracking=0):
    w = draw.textlength(s, font=font)
    return w + tracking * max(0, len(s) - 1)


def draw_tracked(draw, xy, s, font, fill, tracking):
    x, y = xy
    for ch in s:
        draw.text((x, y), ch, font=font, fill=fill)
        x += draw.textlength(ch, font=font) + tracking


def main():
    os.makedirs(OUT_DIR, exist_ok=True)
    tmp = tempfile.mkdtemp(prefix="agora-fonts-")

    bold = lambda s: load_font("700", s, tmp)
    regular = lambda s: load_font("400", s, tmp)

    card = Image.new("RGB", (W, H), BG)
    d = ImageDraw.Draw(card)

    # Brand signature: the level-tag's vermilion left edge, at card scale.
    d.rectangle([0, 0, 15, H], fill=ACCENT)

    # ── Figure, right side ────────────────────────────────────────────────
    fig = Image.open(FIGURE).convert("RGBA")
    fig_h = 384
    fig_w = round(fig.width * fig_h / fig.height)
    fig = fig.resize((fig_w, fig_h), Image.LANCZOS)
    fig_x = W - 64 - fig_w
    card.paste(fig, (fig_x, (H - fig_h) // 2), fig)

    x = 92
    # ── Wordmark ──────────────────────────────────────────────────────────
    f_mark = bold(76)
    mark, track = "ÁGORA", 10
    y = 132
    draw_tracked(d, (x, y), mark, f_mark, INK, track)
    mark_w = text_w(d, mark, f_mark, track)
    d.rectangle([x, y + 104, x + mark_w, y + 110], fill=ACCENT)

    # ── Headline ──────────────────────────────────────────────────────────
    f_head = bold(44)
    for i, line in enumerate(["Academia de", "matemáticas en Cuenca"]):
        d.text((x, 288 + i * 60), line, font=f_head, fill=INK)

    # ── Level chips, echoing LevelTags ────────────────────────────────────
    f_chip = bold(24)
    cx, cy, ch = x, 452, 52
    for label in ["Primaria", "E.S.O.", "Bachillerato"]:
        tw = d.textlength(label, font=f_chip)
        cw = tw + 44
        d.rectangle([cx, cy, cx + cw, cy + ch], outline=INK, width=3)
        d.rectangle([cx, cy, cx + 6, cy + ch], fill=ACCENT)
        d.text((cx + 24, cy + ch / 2 - 16), label, font=f_chip, fill=INK)
        cx += cw + 16

    # ── Domain, quiet, bottom left ────────────────────────────────────────
    d.text((x, 552), "agoraacademy.es", font=regular(24), fill=MUTED)

    card.save(OUT, optimize=True)
    print(f"saved {OUT} ({card.width}x{card.height}, {os.path.getsize(OUT)//1024} KB)")


if __name__ == "__main__":
    main()
