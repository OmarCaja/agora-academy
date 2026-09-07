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

Colors and shadow follow DESIGN.md verbatim: single ink, zero blur, offset
shadows never black. There is no chromatic accent anywhere on the site, so
none is introduced here either. The composition mirrors the homepage: a
paper-raised card (the same surface as the table of contents) on the paper
ground, wordmark and headline on the left, the brand parabola figure on the
right.
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

    card = Image.new("RGB", (W, H), PAPER)
    d = ImageDraw.Draw(card)

    # ── Card surface: the same paper-raised + offset-heavy shadow used by
    # the table of contents, so the social preview reads as a piece of the
    # actual site rather than a bare background. Offset shadow doubled from
    # the site's 5px token since this canvas renders at roughly 2x scale.
    margin, offset, border = 18, 10, 4
    x0, y0, x1, y1 = margin, margin, W - margin, H - margin
    d.rectangle([x0 + offset, y0 + offset, x1 + offset, y1 + offset],
                fill=blend(INK, PAPER, SHADOW_ALPHA))
    d.rectangle([x0, y0, x1, y1], fill=PAPER_RAISED, outline=INK, width=border)

    # ── Figure, right side ────────────────────────────────────────────────
    fig = Image.open(FIGURE).convert("RGBA")
    fig_h = 360
    fig_w = round(fig.width * fig_h / fig.height)
    fig = fig.resize((fig_w, fig_h), Image.LANCZOS)
    fig_x = x1 - 56 - fig_w
    card.paste(fig, (fig_x, (H - fig_h) // 2), fig)

    x = x0 + 74
    # ── Wordmark ──────────────────────────────────────────────────────────
    f_mark = bold(76)
    mark, track = "ÁGORA", 10
    y = 122
    draw_tracked(d, (x, y), mark, f_mark, INK, track)
    mark_w = text_w(d, mark, f_mark, track)
    d.rectangle([x, y + 104, x + mark_w, y + 110], fill=INK)

    # ── Headline ──────────────────────────────────────────────────────────
    f_head = bold(44)
    for i, line in enumerate(["Academia de", "matemáticas en Cuenca"]):
        d.text((x, 278 + i * 60), line, font=f_head, fill=INK)

    # ── Level chips: DESIGN.md's Chip spec (shaded surface, uniform 2px ink
    # border, offset-heavy shadow), same three levels as LevelTags.astro.
    f_chip = bold(24)
    chip_border, chip_shadow = 3, 8
    cx, cy, ch = x, 442, 52
    for label in ["Primaria", "E.S.O.", "Bachillerato"]:
        tw = d.textlength(label, font=f_chip)
        cw = tw + 44
        d.rectangle([cx + chip_shadow, cy + chip_shadow, cx + cw + chip_shadow, cy + ch + chip_shadow],
                    fill=blend(INK, PAPER_RAISED, SHADOW_ALPHA))
        d.rectangle([cx, cy, cx + cw, cy + ch], fill=PAPER_SHADE, outline=INK, width=chip_border)
        d.text((cx + 22, cy + ch / 2 - 16), label, font=f_chip, fill=INK)
        cx += cw + 16 + chip_shadow

    # ── Domain, quiet, bottom left ────────────────────────────────────────
    d.text((x, 546), "agoraacademy.es", font=regular(24), fill=INK_MUTED)

    card.save(OUT, optimize=True)
    print(f"saved {OUT} ({card.width}x{card.height}, {os.path.getsize(OUT)//1024} KB)")


if __name__ == "__main__":
    main()
