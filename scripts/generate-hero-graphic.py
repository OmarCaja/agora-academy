"""
generate-hero-graphic.py
========================
Generates the homepage hero figure.

USAGE
------
    python3 scripts/generate-hero-graphic.py

DEPENDENCIES
-------------
    pip3 install matplotlib numpy

NOTES
------
Follows the same conventions as generate-math-graphs.py (Agg backend, save to
public/ejemplos/<folder>/), but uses the site's brand palette instead of the
teaching palette, and renders on a transparent background so a single file
reads correctly on both the light and dark themes. Colours are therefore
picked to hold contrast against #f4f4f4 and #161616 alike.
"""

import os
import numpy as np
import matplotlib
matplotlib.use('Agg')   # no GUI window, file output only
import matplotlib.pyplot as plt

OUT = "public/ejemplos/hero"
os.makedirs(OUT, exist_ok=True)

# Brand palette. VERMILION sits between the light and dark theme accents so the
# one file works on both. NEUTRAL is a mid grey that stays legible either way.
VERMILION = '#d9542a'
NEUTRAL = '#8c8c8c'

fig, ax = plt.subplots(figsize=(6.4, 5.2), dpi=200)
fig.patch.set_alpha(0)
ax.patch.set_alpha(0)

xlim, ylim = (-3.4, 3.4), (-1.6, 5.4)


def f(x):
    return 0.62 * x ** 2 + 0.35


# Light reference grid, kept faint so it never competes with the curve.
for gx in np.arange(-3, 3.1, 1):
    ax.axvline(gx, color=NEUTRAL, lw=0.6, alpha=0.20, zorder=0)
for gy in np.arange(-1, 5.1, 1):
    ax.axhline(gy, color=NEUTRAL, lw=0.6, alpha=0.20, zorder=0)

# Axes with arrow heads.
ax.annotate('', xy=(xlim[1], 0), xytext=(xlim[0], 0),
            arrowprops=dict(arrowstyle='-|>', color=NEUTRAL, lw=1.4))
ax.annotate('', xy=(0, ylim[1]), xytext=(0, ylim[0]),
            arrowprops=dict(arrowstyle='-|>', color=NEUTRAL, lw=1.4))

# The parabola.
x = np.linspace(-2.75, 2.75, 400)
ax.plot(x, f(x), color=VERMILION, lw=3.4, solid_capstyle='round', zorder=3)

# A straight line cutting the parabola: the intersection picture students
# meet as a quadratic system. Two real solutions, both marked.
def g(x):
    return 0.9 * x + 2.2


lx = np.linspace(-2.15, 3.05, 2)
ax.plot(lx, g(lx), color=NEUTRAL, lw=1.8, dashes=(7, 5), zorder=2)

# Intersections of 0.62x^2 + 0.35 = 0.9x + 2.2
roots = np.roots([0.62, -0.9, -1.85])
for r in roots:
    ax.plot([r], [g(r)], marker='o', ms=10, mfc='none',
            mec=VERMILION, mew=3.0, zorder=4)

# Vertex.
ax.plot([0], [f(0)], marker='o', ms=7, color=VERMILION, zorder=4)

ax.set_xlim(*xlim)
ax.set_ylim(*ylim)
ax.set_aspect('equal', adjustable='box')
ax.axis('off')

fig.savefig(os.path.join(OUT, 'parabola-tangente.png'),
            transparent=True, bbox_inches='tight', pad_inches=0.08)
plt.close(fig)
print(f"saved {OUT}/parabola-tangente.png")
