"""
generar-graficas-matematicas.py
================================
Template for generating mathematical graph images with matplotlib.
All images are saved to public/ejemplos/<folder>/ so Astro serves
them directly in production.

USAGE
------
    python3 scripts/generar-graficas-matematicas.py

DEPENDENCIES
-------------
    pip3 install matplotlib numpy

HOW TO ADD A NEW GRAPH
------------------------
1. Create a new block following the examples below.
2. Call `save(fig, 'filename.png')` at the end of the block.
3. Reference the image in the JSON with:
       "src='/ejemplos/<folder>/filename.png'"

COLOR PALETTE & UTILITIES
---------------------------
    BLUE   → main curves
    RED    → tangent lines, special points, asymptotes, negative zones
    GREEN  → positive zones, increasing intervals
    ORANGE → maxima, highlighted points
    GRAY   → annotation text
    LGRAY  → secondary reference lines

    draw_axes(ax, xlim, ylim)  → draws axes with arrows and base style
    save(fig, 'name.png')      → saves to OUT and closes the figure
"""

import numpy as np
import matplotlib
matplotlib.use('Agg')   # no GUI window, file output only
import matplotlib.pyplot as plt
import matplotlib.patches as patches
import os

# ── Output directory ─────────────────────────────────────────────────────────
# Change this path for each topic / exercise folder
OUT = "public/ejemplos/funciones"
os.makedirs(OUT, exist_ok=True)

# ── Global styles ─────────────────────────────────────────────────────────────
plt.rcParams.update({
    'figure.facecolor': 'white',
    'axes.facecolor':   'white',
    'axes.edgecolor':   '#cccccc',
    'axes.grid':        True,
    'grid.color':       '#e8e8e8',
    'grid.linewidth':   0.8,
    'font.family':      'DejaVu Sans',
    'font.size':        11,
    'axes.titlesize':   13,
    'axes.titleweight': 'bold',
})

# ── Color palette ─────────────────────────────────────────────────────────────
BLUE   = '#3a86ff'   # main curves
RED    = '#e63946'   # tangents, special points, negative zones
GREEN  = '#2dc653'   # positive zones, increasing intervals
ORANGE = '#fb8500'   # maxima / minima
GRAY   = '#444444'   # general text
LGRAY  = '#888888'   # secondary lines

# ── Utilities ─────────────────────────────────────────────────────────────────
def draw_axes(ax, xlim=(-4, 4), ylim=(-4, 4)):
    """Draw cartesian axes with arrows and apply base style."""
    ax.axhline(0, color=GRAY, linewidth=1.4, zorder=3)
    ax.axvline(0, color=GRAY, linewidth=1.4, zorder=3)
    ax.set_xlim(xlim)
    ax.set_ylim(ylim)
    ax.set_xlabel('x',    fontsize=12, color=GRAY, labelpad=2)
    ax.set_ylabel('f(x)', fontsize=12, color=GRAY, labelpad=2, rotation=0)
    ax.yaxis.set_label_coords(-0.05, 1.02)
    ax.spines['top'].set_visible(False)
    ax.spines['right'].set_visible(False)
    for sp in ['left', 'bottom']:
        ax.spines[sp].set_color('#cccccc')


def save(fig, name):
    """Save the figure to OUT/<name> at 150 dpi and close it."""
    path = os.path.join(OUT, name)
    fig.savefig(path, dpi=150, bbox_inches='tight', facecolor='white')
    plt.close(fig)
    print(f"✅  {path}")


# ════════════════════════════════════════════════════════════════════════════
#  GRAPHS — add or modify blocks as needed
# ════════════════════════════════════════════════════════════════════════════

# ── Removable discontinuity  f(x) = (x²-1)/(x-1) ────────────────────────────
fig, ax = plt.subplots(figsize=(5, 5))
draw_axes(ax, (-3, 5), (-1, 6))
x1 = np.linspace(-2.5, 0.98, 300)
x2 = np.linspace(1.02, 4.5,  300)
ax.plot(x1, x1 + 1, color=BLUE, lw=2.5, zorder=4)
ax.plot(x2, x2 + 1, color=BLUE, lw=2.5, zorder=4)
# hollow circle at (1, 2) — point not defined
circle = plt.Circle((1, 2), 0.12, color=BLUE, fill=False, lw=2.5, zorder=6)
ax.add_patch(circle)
# reference dashed lines
ax.plot([1, 1], [0, 2], ls='--', color=LGRAY, lw=1.2, zorder=3)
ax.plot([0, 1], [2, 2], ls='--', color=LGRAY, lw=1.2, zorder=3)
ax.text(1,    -0.4, '$x=1$',              ha='center', fontsize=10, color=RED)
ax.text(-0.15, 2,   '$2$',                ha='right',  fontsize=10, color=RED)
ax.text(3.5,   5.2, r'$f(x)=\frac{x^2-1}{x-1}$',     fontsize=12, color=BLUE)
ax.text(1.3,   0.5, r'$\nexists\,f(1)$',              fontsize=11, color=RED)
ax.set_title('Removable discontinuity at $x=1$')
save(fig, 'discontinuidad-evitable.png')

# ── Jump discontinuity (finite) ───────────────────────────────────────────────
fig, ax = plt.subplots(figsize=(5, 5))
draw_axes(ax, (-3.5, 3.5), (-3, 4))
# left branch: f(x)=x for x<0
xl = np.linspace(-3, -0.02, 300)
ax.plot(xl, xl, color=BLUE, lw=2.5, zorder=4)
# hollow circle at (0, 0)
c1 = plt.Circle((0, 0), 0.10, color=BLUE, fill=False, lw=2.5, zorder=6)
ax.add_patch(c1)
# right branch: f(x)=x+1 for x>=0
xr = np.linspace(0, 3, 300)
ax.plot(xr, xr + 1, color=BLUE, lw=2.5, zorder=4)
# filled dot at (0, 1)
ax.plot(0, 1, 'o', color=BLUE, ms=9, zorder=7)
# jump arrow
ax.annotate('', xy=(0.05, 1), xytext=(0.05, 0),
            arrowprops=dict(arrowstyle='<->', color=RED, lw=1.8))
ax.text(0.25,  0.5, 'jump = 1', fontsize=9, color=RED)
ax.text(-2.8, -2.3, r'$f(x)=x$',    fontsize=11, color=BLUE)
ax.text( 1.5,  3.2, r'$f(x)=x+1$', fontsize=11, color=BLUE)
ax.set_title('Finite jump discontinuity at $x=0$')
save(fig, 'discontinuidad-salto.png')

# ── Infinite jump discontinuity  f(x) = 1/x ──────────────────────────────────
fig, ax = plt.subplots(figsize=(5, 5))
draw_axes(ax, (-4, 4), (-5, 5))
xn = np.linspace(-4, -0.18, 400)
xp = np.linspace( 0.18,  4, 400)
ax.plot(xn, 1/xn, color=BLUE, lw=2.5, zorder=4)
ax.plot(xp, 1/xp, color=BLUE, lw=2.5, zorder=4)
ax.axvline(0, ls='--', color=RED, lw=1.5, zorder=3, label='vertical asymptote $x=0$')
ax.text( 1.2,  3.5, r'$f(x)=\frac{1}{x}$', fontsize=13, color=BLUE)
ax.text( 0.15, 4.3, r'$+\infty$',           fontsize=11, color=RED)
ax.text(-1.2, -4.3, r'$-\infty$',           fontsize=11, color=RED)
ax.set_title('Infinite jump discontinuity at $x=0$')
ax.legend(fontsize=9, framealpha=0.8, loc='lower right')
save(fig, 'discontinuidad-salto-infinito.png')

# ── Concave function  f(x) = -x² ─────────────────────────────────────────────
fig, ax = plt.subplots(figsize=(5, 5))
draw_axes(ax, (-3, 3), (-5, 2.5))
x = np.linspace(-2.8, 2.8, 400)
ax.plot(x, -x**2, color=BLUE, lw=2.5, zorder=4, label=r'$f(x)=-x^2$')
# tangent at x=-1: slope f'(-1)=2, through (-1,-1)
tx = np.linspace(-2.8, 0.8, 100)
ax.plot(tx, 2*(tx+1) - 1, ls='--', color=RED, lw=1.8, zorder=3)
# tangent at x=1: slope f'(1)=-2, through (1,-1)
tx2 = np.linspace(-0.8, 2.8, 100)
ax.plot(tx2, -2*(tx2-1) - 1, ls='--', color=RED, lw=1.8, zorder=3,
        label='tangent lines')
# tangency points
ax.plot(-1, -1, 'o', color=RED, ms=8, zorder=5)
ax.plot( 1, -1, 'o', color=RED, ms=8, zorder=5)
ax.text(1.5, 1.8, r"$f''(x)=-2<0$", fontsize=10, color=GRAY,
        bbox=dict(boxstyle='round,pad=0.3', facecolor='#fff3f3',
                  edgecolor=RED, alpha=0.8))
ax.text(-2.8, -4.5, 'curve lies below\nthe tangent lines', fontsize=9, color=BLUE)
ax.set_title('Concave function')
ax.legend(fontsize=9, framealpha=0.8, loc='upper right')
save(fig, 'funcion-concava.png')

# ── Convex function  f(x) = x² ───────────────────────────────────────────────
fig, ax = plt.subplots(figsize=(5, 5))
draw_axes(ax, (-3, 3), (-1, 7))
x = np.linspace(-2.8, 2.8, 400)
ax.plot(x, x**2, color=BLUE, lw=2.5, zorder=4, label=r'$f(x)=x^2$')
# tangent at x=-1: slope f'(-1)=-2, through (-1,1)
tx = np.linspace(-2.8, 1.8, 100)
ax.plot(tx, -2*(tx+1) + 1, ls='--', color=RED, lw=1.8, zorder=3)
# tangent at x=1: slope f'(1)=2, through (1,1)
tx2 = np.linspace(-1.8, 2.8, 100)
ax.plot(tx2,  2*(tx2-1) + 1, ls='--', color=RED, lw=1.8, zorder=3,
        label='tangent lines')
# tangency points
ax.plot(-1, 1, 'o', color=RED, ms=8, zorder=5)
ax.plot( 1, 1, 'o', color=RED, ms=8, zorder=5)
ax.text(-2.8, 5.5, r"$f''(x)=2>0$", fontsize=10, color=GRAY,
        bbox=dict(boxstyle='round,pad=0.3', facecolor='#f0fff4',
                  edgecolor=GREEN, alpha=0.8))
ax.text(0.2, 0.2, 'curve lies above\nthe tangent lines', fontsize=9,
        color=BLUE, ha='center')
ax.set_title('Convex function')
ax.legend(fontsize=9, framealpha=0.8, loc='upper center')
save(fig, 'funcion-convexa.png')

# ── Even function  f(x) = x² ─────────────────────────────────────────────────
fig, ax = plt.subplots(figsize=(5, 5))
draw_axes(ax, (-3.5, 3.5), (-0.5, 7))
x = np.linspace(-3, 3, 400)
ax.plot(x, x**2, color=BLUE, lw=2.5, zorder=4)
ax.axvline(0, color='#9b2226', lw=1.5, ls='--', zorder=3,
           label='axis of symmetry (Y)')
for px in [-2, 2]:
    ax.plot(px, px**2, 'o', color=BLUE, ms=8, zorder=5)
ax.annotate('', xy=(2, 4), xytext=(-2, 4),
            arrowprops=dict(arrowstyle='<->', color=RED, lw=1.5))
ax.text( 0,    4.35, 'symmetric', ha='center', fontsize=9, color=RED)
ax.text(-2.5,  4,    '(-2, 4)',   fontsize=9, color=GRAY, ha='right')
ax.text( 2.1,  4,    '(2, 4)',    fontsize=9, color=GRAY, ha='left')
ax.text( 2.2,  5.5,  r'$f(x)=x^2$',   fontsize=12, color=BLUE)
ax.text( 0.15, 6.2,  r'$f(-x)=f(x)$', fontsize=10, color='#9b2226')
ax.set_title('Even function: symmetric about the Y-axis')
ax.legend(fontsize=9, framealpha=0.8, loc='upper center')
save(fig, 'funcion-par.png')

# ── Odd function  f(x) = x³ ──────────────────────────────────────────────────
fig, ax = plt.subplots(figsize=(5, 5))
draw_axes(ax, (-2.5, 2.5), (-7, 7))
x = np.linspace(-1.9, 1.9, 400)
ax.plot(x, x**3, color=BLUE, lw=2.5, zorder=4)
for px, py in [(1, 1), (-1, -1)]:
    ax.plot(px, py, 'o', color=BLUE, ms=8, zorder=5)
ax.annotate('', xy=(1, 1), xytext=(-1, -1),
            arrowprops=dict(arrowstyle='<->', color=RED, lw=1.5))
ax.plot(0, 0, 'o', color=ORANGE, ms=9, zorder=6, label='origin (0,0)')
ax.text( 1.12,  1,   '(1, 1)',        fontsize=9, color=GRAY)
ax.text(-1.9,  -1,   '(-1, -1)',      fontsize=9, color=GRAY)
ax.text( 1.2,   4,   r'$f(x)=x^3$',   fontsize=12, color=BLUE)
ax.text(-2.3,   5.5, r'$f(-x)=-f(x)$', fontsize=10, color='#9b2226')
ax.set_title('Odd function: symmetric about the origin')
ax.legend(fontsize=9, framealpha=0.8)
save(fig, 'funcion-impar.png')

# ── Zeros of a function  f(x) = x²-4 ────────────────────────────────────────
fig, ax = plt.subplots(figsize=(5, 5))
draw_axes(ax, (-4, 4), (-5.5, 5))
x = np.linspace(-3.5, 3.5, 400)
ax.plot(x, x**2 - 4, color=BLUE, lw=2.5, zorder=4)
for xz in [-2, 2]:
    ax.plot(xz, 0, 'o', color=RED, ms=10, zorder=6)
    ax.plot([xz, xz], [0, xz**2 - 4], ls='--', color=RED, lw=1.2, zorder=3)
    ax.text(xz, -0.7, f'x={xz}', ha='center', fontsize=10,
            color=RED, fontweight='bold')
ax.text(2.5,  4,   r'$f(x)=x^2-4$', fontsize=12, color=BLUE, ha='right')
ax.text(-3.5, 3.5, r'$f(-2)=0$',    fontsize=10, color=RED)
ax.text(-3.5, 2.5, r'$f(2)=0$',     fontsize=10, color=RED)
ax.set_title('Zeros of the function')
save(fig, 'zeros-funcion.png')

# ── Sign of a function  f(x) = x²-4 ─────────────────────────────────────────
fig, ax = plt.subplots(figsize=(5, 5))
draw_axes(ax, (-4, 4), (-5.5, 5))
x = np.linspace(-3.5, 3.5, 400)
y = x**2 - 4
# positive zones (x < -2 and x > 2)
xpos1 = np.linspace(-3.5, -2, 200)
ax.fill_between(xpos1, 0, xpos1**2-4, where=xpos1**2-4 > 0,
                alpha=0.25, color=GREEN, label='f(x) > 0')
xpos2 = np.linspace(2, 3.5, 200)
ax.fill_between(xpos2, 0, xpos2**2-4, where=xpos2**2-4 > 0,
                alpha=0.25, color=GREEN)
# negative zone (-2 < x < 2)
xneg = np.linspace(-2, 2, 300)
ax.fill_between(xneg, xneg**2-4, 0, where=xneg**2-4 < 0,
                alpha=0.25, color=RED, label='f(x) < 0')
ax.plot(x, y, color=BLUE, lw=2.5, zorder=4)
for xz in [-2, 2]:
    ax.plot(xz, 0, 'o', color=RED, ms=9, zorder=6)
ax.text( 0,   -2.5, 'f(x) < 0', ha='center', fontsize=11,
         color=RED,   fontweight='bold')
ax.text(-3.2,  2.5, 'f(x) > 0', ha='center', fontsize=10,
         color=GREEN, fontweight='bold')
ax.text( 3.2,  2.5, 'f(x) > 0', ha='center', fontsize=10,
         color=GREEN, fontweight='bold')
ax.text( 2.5,  4,   r'$f(x)=x^2-4$', fontsize=12, color=BLUE, ha='right')
ax.set_title('Sign of the function')
ax.legend(fontsize=9, framealpha=0.8, loc='upper center')
save(fig, 'signo-funcion.png')

# ── Monotonicity  f(x) = x³-3x ───────────────────────────────────────────────
fig, ax = plt.subplots(figsize=(5, 5))
draw_axes(ax, (-3, 3), (-4, 4))
x = np.linspace(-2.8, 2.8, 600)
ax.plot(x, x**3 - 3*x, color=BLUE, lw=2.5, zorder=4)
ax.plot(-1,  2, 'o', color=ORANGE, ms=10, zorder=6, label='local max (-1, 2)')
ax.plot( 1, -2, 'o', color=GREEN,  ms=10, zorder=6, label='local min (1, -2)')
ax.text(-1.15,  2.3, '(-1, 2)',  fontsize=9, color=ORANGE, ha='right')
ax.text( 1.1,  -2.5, '(1, -2)', fontsize=9, color=GREEN)
# increasing arrow (left)
ax.annotate('', xy=(-2.5, (-2.5)**3-3*(-2.5)), xytext=(-2, (-2)**3-3*(-2)),
            arrowprops=dict(arrowstyle='->', color=GREEN, lw=2))
ax.text(-2.8, -3.5, '↑ increasing', fontsize=9, color=GREEN)
# decreasing arrow (middle)
ax.annotate('', xy=(0, 0), xytext=(-0.5, (-0.5)**3-3*(-0.5)),
            arrowprops=dict(arrowstyle='->', color=RED, lw=2))
ax.text(-0.1,  1.4, '↓ decreasing', fontsize=9, color=RED, ha='center')
# increasing arrow (right)
ax.annotate('', xy=(2.5, (2.5)**3-3*(2.5)), xytext=(2, (2)**3-3*(2)),
            arrowprops=dict(arrowstyle='->', color=GREEN, lw=2))
ax.text( 2.4,  3.5, '↑ increasing', fontsize=9, color=GREEN, ha='right')
ax.text( 2.2, -1,   r'$f(x)=x^3-3x$', fontsize=10, color=BLUE, ha='right')
ax.set_title('Monotonicity: increasing and decreasing intervals')
ax.legend(fontsize=8, framealpha=0.8, loc='lower right')
save(fig, 'monotonia-funcion.png')

# ── Axis intercepts  f(x) = x²+x-2 ──────────────────────────────────────────
# f(x) = x²+x-2 = (x+2)(x-1)  →  X-intercepts: x=-2, x=1 | Y-intercept: (0,-2)
fig, ax = plt.subplots(figsize=(5, 5))
draw_axes(ax, (-4, 4), (-4, 5))
x = np.linspace(-3.5, 2.5, 400)
y = x**2 + x - 2
ax.plot(x, y, color=BLUE, lw=2.5, zorder=4, label=r'$f(x)=x^2+x-2$')

# Y-intercept: x=0 → f(0) = -2
ax.plot(0, -2, 'o', color=GREEN, ms=12, zorder=6, label='Y-intercept $(0,\,-2)$')
ax.plot([0, 0], [-2, 0], ls='--', color=GREEN, lw=1.3, zorder=3)
ax.plot([-0.15, 0.15], [-2, -2], ls='-', color=GREEN, lw=1.5, zorder=3)
ax.text(0.25, -2, '$(0, -2)$', fontsize=9.5, color=GREEN, va='center')

# X-intercepts: f(x)=0 → x=-2 and x=1
for xi, label_offset in [(-2, (-0.2, 0.4)), (1, (0.15, 0.4))]:
    ax.plot(xi, 0, 'o', color=RED, ms=12, zorder=6)
    ax.plot([xi, xi], [0, xi**2+xi-2], ls='--', color=RED, lw=1.3, zorder=3)
    ax.text(xi + label_offset[0], label_offset[1],
            f'$({xi},\\ 0)$', fontsize=9.5, color=RED, ha='center')

# legend patches for X-intercepts (added manually so label appears once)
ax.plot([], [], 'o', color=RED, ms=8, label="X-intercepts $(-2,\\ 0)$ and $(1,\\ 0)$")

# how-to annotation box
info = (
    "How to find them:\n"
    "• Y-intercept → set $x=0$: $f(0)=-2$\n"
    "• X-intercepts → set $f(x)=0$:\n"
    "  $x^2+x-2=0 \\Rightarrow x=-2,\\ 1$"
)
ax.text(-3.8, 2.8, info, fontsize=8.2, color=GRAY, va='top',
        bbox=dict(boxstyle='round,pad=0.45', facecolor='#f8f9fa',
                  edgecolor='#cccccc', alpha=0.95))

ax.text(2.0, 4.2, r'$f(x)=x^2+x-2$', fontsize=11, color=BLUE, ha='right')
ax.set_title('Intercepts with the axes')
ax.legend(fontsize=8.5, framealpha=0.9, loc='lower right')
save(fig, 'cortes-ejes.png')

# ── 1. DEFINICIÓN DE LÍMITE (Limit Definition) ──────────────────────────────
fig, ax = plt.subplots(figsize=(5, 5))
draw_axes(ax, (-1, 5), (-1, 5))
c = 3
L = 3.5
x_vals = np.linspace(0.5, 4.5, 200)
# Parabola passing through (3, 3.5)
y_vals = 1 + 0.5*(x_vals-1)**2
y_vals = y_vals - (1 + 0.5*(3-1)**2) + 3.5
ax.plot(x_vals, y_vals, color=BLUE, lw=2.5, zorder=4)

ax.plot([c, c], [0, L], ls='--', color=LGRAY, lw=1.5, zorder=3)
ax.plot([0, c], [L, L], ls='--', color=LGRAY, lw=1.5, zorder=3)
ax.plot(c, L, 'o', color=BLUE, ms=8, markerfacecolor='white', markeredgewidth=2.5, zorder=5) # Hollow circle just in case

# Labels
ax.text(c, -0.4, '$c$', ha='center', fontsize=12, color=RED)
ax.text(-0.3, L, '$L$', va='center', fontsize=12, color=RED)
ax.text(3.5, 4.5, r'$y=f(x)$', color=BLUE, fontsize=12)

# Arrows on x-axis approaching c
ax.annotate('', xy=(c-0.2, 0), xytext=(c-1, 0), arrowprops=dict(arrowstyle='->', color=RED, lw=1.5))
ax.annotate('', xy=(c+0.2, 0), xytext=(c+1, 0), arrowprops=dict(arrowstyle='->', color=RED, lw=1.5))

# Arrows on y-axis approaching L
ax.annotate('', xy=(0, L-0.2), xytext=(0, L-1.5), arrowprops=dict(arrowstyle='->', color=RED, lw=1.5))
ax.annotate('', xy=(0, L+0.2), xytext=(0, L+1.5), arrowprops=dict(arrowstyle='->', color=RED, lw=1.5))

ax.set_title('Concepto de límite: $x \\to c \\Rightarrow f(x) \\to L$')

# Save inside limites folder
path = os.path.join("public/ejemplos/limites", 'limite-definicion.png')
os.makedirs(os.path.dirname(path), exist_ok=True)
fig.savefig(path, dpi=150, bbox_inches='tight', facecolor='white')
plt.close(fig)
print(f"✅  {path}")

# ── 2. ASÍNTOTA VERTICAL ──────────────────────────────────────────────────
fig, ax = plt.subplots(figsize=(5, 5))
draw_axes(ax, (-3, 5), (-5, 5))
c_v = 1
# f(x) = 1 / (x - 1)
xn = np.linspace(-3, c_v - 0.15, 200)
xp = np.linspace(c_v + 0.15, 5, 200)
ax.plot(xn, 1/(xn - c_v), color=BLUE, lw=2.5, zorder=4)
ax.plot(xp, 1/(xp - c_v), color=BLUE, lw=2.5, zorder=4)
ax.axvline(c_v, ls='--', color=RED, lw=1.5, zorder=3, label=f'Asíntota vertical $x={c_v}$')

ax.text(2.5, 3.5, r'$f(x) = \frac{1}{x-1}$', fontsize=12, color=BLUE)
ax.text(1.2, 4.3, r'$+\infty$', fontsize=11, color=RED)
ax.text(-0.2, -4.3, r'$-\infty$', fontsize=11, color=RED)
ax.set_title(f'Asíntota vertical en $x=1$')
ax.legend(fontsize=9, framealpha=0.8, loc='lower right')
path = os.path.join("public/ejemplos/limites", 'asintota-vertical.png')
fig.savefig(path, dpi=150, bbox_inches='tight', facecolor='white')
plt.close(fig)
print(f"✅  {path}")

# ── 3. ASÍNTOTA HORIZONTAL ────────────────────────────────────────────────
fig, ax = plt.subplots(figsize=(5, 5))
draw_axes(ax, (-5, 5), (-1, 5))
# f(x) = (2x)/(x+1) => y=2
xhn = np.linspace(-5, -1.2, 200)
xhp = np.linspace(-0.8, 5, 200)
yhn = (2*xhn)/(xhn + 1)
yhp = (2*xhp)/(xhp + 1)
ax.plot(xhn, yhn, color=BLUE, lw=2.5, zorder=4)
ax.plot(xhp, yhp, color=BLUE, lw=2.5, zorder=4)

ax.axhline(2, ls='--', color=RED, lw=1.5, zorder=3, label='Asíntota horizontal $y=2$')
ax.text(3, 2.5, r'$f(x) = \frac{2x}{x+1}$', fontsize=12, color=BLUE)
ax.text(4, 1.6, r'$y \to 2$ si $x \to +\infty$', fontsize=10, color=RED, ha='center')
ax.text(-3, 2.4, r'$y \to 2$ si $x \to -\infty$', fontsize=10, color=RED, ha='center')
ax.set_title('Asíntota horizontal en $y=2$')
ax.legend(fontsize=9, framealpha=0.8, loc='lower right')
path = os.path.join("public/ejemplos/limites", 'asintota-horizontal.png')
fig.savefig(path, dpi=150, bbox_inches='tight', facecolor='white')
plt.close(fig)
print(f"✅  {path}")

# ── 4. ASÍNTOTA OBLICUA ───────────────────────────────────────────────────
fig, ax = plt.subplots(figsize=(5, 5))
draw_axes(ax, (-4, 4), (-6, 6))
# f(x) = (x^2 + 1)/x = x + 1/x  => Oblique asymptote y=x
x1 = np.linspace(-4, -0.2, 200)
x2 = np.linspace(0.2, 4, 200)
ax.plot(x1, (x1**2 + 1)/x1, color=BLUE, lw=2.5, zorder=4)
ax.plot(x2, (x2**2 + 1)/x2, color=BLUE, lw=2.5, zorder=4)

# Line y=x
x_line = np.linspace(-4, 4, 10)
ax.plot(x_line, x_line, ls='--', color=RED, lw=1.5, zorder=3, label='Asíntota oblicua $y=x$')
ax.text(1.5, 4.5, r'$f(x) = \frac{x^2+1}{x}$', fontsize=12, color=BLUE)
ax.text(3, 1.8, r'$y \approx x$' + '\npara $x \to \pm\infty$', fontsize=10, color=RED, ha='center')
ax.set_title('Asíntota oblicua')
ax.legend(fontsize=9, framealpha=0.8, loc='upper left')
path = os.path.join("public/ejemplos/limites", 'asintota-oblicua.png')
fig.savefig(path, dpi=150, bbox_inches='tight', facecolor='white')
plt.close(fig)
print(f"✅  {path}")

# ════════════════════════════════════════════════════════════════════════════
#  ↑ ADD YOUR NEW GRAPHS HERE, following the same pattern
# ════════════════════════════════════════════════════════════════════════════

print(f"\n✅  All images saved to '{OUT}' o a su respectiva carpeta.")
