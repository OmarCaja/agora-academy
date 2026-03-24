# Scripts

## `generate-math-graphs.py`

Generates mathematical graph images with **matplotlib** and saves them directly
to `public/ejemplos/<folder>/` so Astro serves them in production.

### Install dependencies (first time only)

```bash
pip3 install matplotlib numpy
```

### Run

Always from the **project root**:

```bash
python3 scripts/generate-math-graphs.py
```

### How to add a new graph

1. Open the script and go to the bottom, just before the `↑ ADD YOUR NEW GRAPHS HERE` comment.
2. Create a new block following this pattern:

```python
# ── Descriptive title ────────────────────────────────────────────────────────
fig, ax = plt.subplots(figsize=(5, 5))
draw_axes(ax, (-4, 4), (-4, 4))   # ← adjust X and Y axis limits

x = np.linspace(-3, 3, 400)
ax.plot(x, np.sin(x), color=BLUE, lw=2.5, zorder=4, label=r'$f(x)=\sin(x)$')

# ... add whatever you need: points, annotations, fills, tangent lines...

ax.set_title('My new graph')
ax.legend(fontsize=9, framealpha=0.8)
save(fig, 'my-graph.png')          # ← output filename
```

3. Change the `OUT` variable at the top of the script if you want to save to a
   different folder (e.g. `public/ejemplos/limits`).

4. Reference the image in the JSON with:

```json
"<img src='/ejemplos/<folder>/my-graph.png' style='max-width:300px'>"
```

### Available utilities

| Element | Description |
|---------|-------------|
| `draw_axes(ax, xlim, ylim)` | Cartesian axes with arrows and base style |
| `save(fig, 'name.png')` | Saves to `OUT/` at 150 dpi and closes the figure |
| `BLUE` `RED` `GREEN` `ORANGE` | Project color palette |
| `np.linspace(a, b, n)` | Array of `n` evenly spaced points between `a` and `b` |
| `plt.Circle((x,y), r, ...)` | Circle patch (useful for hollow points at discontinuities) |

### AI workflow

When asking the AI to generate a new graph, give it this context:

> *"Using the script `scripts/generate-math-graphs.py` as a template,
> add a new graph for [description]. Save it as
> `public/ejemplos/[folder]/[name].png` and update the corresponding JSON."*
