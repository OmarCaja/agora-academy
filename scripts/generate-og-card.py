"""
generate-og-card.py
===================
Generates the Open Graph / Twitter social card (1200x630).

USAGE
------
    python3 scripts/generate-og-card.py [--dark]

DEPENDENCIES
-------------
    pip3 install pillow fonttools

NOTES
------
Uses the site's real brand font. @fontsource ships woff/woff2 only, so the
latin woff (zlib-compressed, unlike woff2's brotli) is converted to a TTF in a
temp dir at run time. Nothing is written into the repo except the card itself.

Colors and shadow follow DESIGN.md verbatim: single ink, zero blur, offset
shadows never black. There is no chromatic accent anywhere on the site, so
none is introduced here either. The composition mirrors the homepage: a
paper-raised card (the same surface as the table of contents) on the paper
ground, wordmark and headline on the left, the brand parabola figure on the
right. --dark swaps in the dark-theme tokens from global.css; the parabola
figure PNG is ink-on-transparent for the light theme, so it's recolored to
the dark theme's ink at paste time instead of shipping a second PNG.
"""

import os
import sys
import tempfile
from PIL import Image, ImageDraw, ImageFont
from fontTools.ttLib import TTFont

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
FONT_DIR = os.path.join(ROOT, "node_modules", "@fontsource", "space-mono", "files")
OUT_DIR = os.path.join(ROOT, "public", "og")
OUT = os.path.join(OUT_DIR, "agora-og.png")

W, H = 1200, 630

DARK = "--dark" in sys.argv[1:]

if DARK:
    # DESIGN.md dark-theme tokens ([data-theme="dark"] in global.css).
    INK = (242, 242, 242)          # text-primary / border-color
    INK_MUTED = (168, 168, 168)    # text-muted
    PAPER = (22, 22, 22)           # bg-primary
    PAPER_SHADE = (32, 32, 32)     # bg-secondary
    PAPER_RAISED = (38, 38, 38)    # bg-raised
    SHADOW_ALPHA = 0.26            # rgba(242,242,242,0.26)
else:
    # DESIGN.md light-theme tokens (see colors: in the frontmatter).
    INK = (31, 31, 31)         # ink / border / accent, all one token
    INK_MUTED = (90, 90, 90)   # ink-muted
    PAPER = (244, 244, 244)    # paper, the page ground
    PAPER_SHADE = (232, 232, 232)   # paper-shade, chips and cards
    PAPER_RAISED = (253, 253, 253)  # paper-raised, the freshest surface
    SHADOW_ALPHA = 0.32        # rgba(31,31,31,0.32), the registration shadow

REQUIRED = set("ÁGORAcademiteásnCu PrimoBhlrES.")


def blend(fg, bg, alpha):
    """Flatten an rgba(ink, alpha) shadow onto a background, since PIL's
    ImageDraw has no alpha compositing for plain RGB canvases."""
    return tuple(round(f * alpha + b * (1 - alpha)) for f, b in zip(fg, bg))


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

    # Minimal card: paper ground, the nav's "A" mark (same path as
    # GlobalNav.astro), wordmark, one tagline line and the domain.
    card = Image.new("RGB", (W, H), PAPER)
    d = ImageDraw.Draw(card)

    # Logo path (units of the nav SVG), drawn 4x then downsampled for AA.
    outer = [(5.64, -14.22), (9.38, -14.22), (14.95, 0), (0.16, 0)]
    hole = [(7.52, -10.30), (4.74, -2.64), (10.36, -2.64)]
    k, ss = 19, 4                       # logo scale (px per unit), supersample
    lw, lh = round(14.8 * k), round(14.22 * k)
    logo = Image.new("L", (lw * ss, lh * ss), 0)
    ld = ImageDraw.Draw(logo)
    pt = lambda p: ((p[0] - 0.16) * k * ss, (p[1] + 14.22) * k * ss)
    ld.polygon([pt(p) for p in outer], fill=255)
    ld.polygon([pt(p) for p in hole], fill=0)
    logo = logo.resize((lw, lh), Image.LANCZOS)

    x = 130
    top = (H - lh) // 2
    card.paste(Image.new("RGB", logo.size, INK), (x, top), logo)

    # Wordmark + tagline to the right of the mark.
    tx = x + lw + 64
    draw_tracked(d, (tx, top - 22), "ÁGORA", bold(104), INK, 14)
    d.text((tx + 4, top + 112), "Academia de matemáticas en Cuenca", font=regular(28), fill=INK_MUTED)
    d.text((tx + 4, top + 160), "agoraacademy.es", font=regular(24), fill=INK_MUTED)

    card.save(OUT, optimize=True)
    print(f"saved {OUT} ({card.width}x{card.height}, {os.path.getsize(OUT)//1024} KB)")


if __name__ == "__main__":
    main()
