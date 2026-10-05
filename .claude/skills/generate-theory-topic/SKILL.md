---
name: generate-theory-topic
description: Creates or extends an Ágora Academy theory topic page (/theory/<slug>) as a JSON file in src/content/topics, with KaTeX formulas, worked examples and optional matplotlib graphs. Use it whenever the user asks to create, write, add or expand theory, a topic, notes, a summary or a "tema" for a math subject (e.g. «crea el tema de integrales», «añade teoría de vectores para 1º Bach», «amplía matrices con determinantes»), even if they don't mention JSON or the website.
---

# Generate Ágora theory topics

A topic is one JSON file in `src/content/topics/<slug>.json`. Astro picks it up at build time: page, menu entry and prev/next pagination are automatic. The mechanics (schema, `menuGroup`/`GROUP_ORDER`, KaTeX gotchas) are in `CLAUDE.md`; this skill covers what to write and how to check it.

The content is in Spanish (Spain); only this skill is in English.

## 1. Understand the request

You need the **topic** and the **course level** (ESO or Bachillerato, it sets depth and notation). If the topic is missing, ask. If the level is missing, infer it from the topic and mention it at the end.

Check what already exists first, and extend an existing topic rather than creating an overlapping one:

```bash
ls src/content/topics
grep -h '"menuGroup"\|"menuOrder"' src/content/topics/*.json | sort | uniq -c
```

## 2. Pick slug, group and order

- **Slug**: the file name, lowercase, no accents, hyphenated, in Spanish (`estadistica-bidimensional`). It becomes the URL.
- **`menuGroup`**: one of the strings in `src/data/topics.ts` (`GROUP_ORDER`), copied exactly, accents included. A new group only if nothing fits; then add it to `GROUP_ORDER` too.
- **`menuOrder`**: position inside the group in teaching order (prerequisites first). If it slots between existing topics, bump the `menuOrder` of the ones after it.

## 3. Write the content

Use `src/content/topics/matrices.json` as the reference for tone and depth. Read it before writing.

**Top level**
- `title`: short, the name of the topic (`Matrices`, `Límites`).
- `description`: one or two sentences listing what the page covers. It is also the SEO meta description.

**Sections** (`sections[]`)
- Usually 3–8, from the basic concept to the advanced procedures, in the order a student learns them.
- Section titles are short, sometimes phrased as questions (`¿Qué es una matriz?`).

**Items** (`items[]`, each rendered as one card)
- `title`: the concept or rule. It may contain inline math (`Elementos de una matriz: $a_{ij}$`).
- `description`: the explanation, addressed to the student, clear and plain. Bold key terms with `<strong>`, break lines with `<br>`. Explain the *why* and the common mistake when there is one.
- `formula`: the rule or definition alone, usually as `$$…$$`.
- `example`: a worked example with numbers and intermediate steps, never just the result. Several short cases separated by `<br>` and `•` are fine.
- Every item has at least `description` or `formula`, and almost every item has an `example`. Procedures (Gauss, solving an equation) get step-by-step examples.

**Math**
- All math, however small (`$x$`, `$A$`), in KaTeX LaTeX: `$…$` inline, `$$…$$` display.
- Each formula on one line; backslashes doubled in JSON (`\\dfrac`, matrix row break `\\\\`).
- Highlight with `\\textcolor{#d46a6a}{…}` (red) or `\\textcolor{#4fa66e}{…}` (green), never `\\color`.
- Absolute values with `\\lvert … \\rvert`, not bare `|…|`.

**Level**: match depth and notation to the course per the Spanish curriculum. Write in Spain Spanish.

## 4. Check the maths

Students study from this page, so every example must be correct. Verify each non-trivial result by running code (`node -e` or `python3 -c`: products, determinants, limits at points, derivatives, probabilities). Fix whatever doesn't match.

## 5. Graphs (only when they help)

Use graphs for things that are visual (function shapes, asymptotes, limits, tangent lines, distributions), not decoration.

1. Add a block before `↑ ADD YOUR NEW GRAPHS HERE` in `scripts/generate-math-graphs.py`, following `scripts/README.md`. Before your block set the folder: `OUT = "public/ejemplos/<slug>"` and `os.makedirs(OUT, exist_ok=True)`.
2. Run `python3 scripts/generate-math-graphs.py` from the project root.
3. Get the size with `sips -g pixelWidth -g pixelHeight <png>` and embed it in `formula` or `example` like the existing ones:

```html
<img src='/ejemplos/<slug>/<name>.png' alt='<descripción en español>' width='<w>' height='<h>' loading='lazy' decoding='async' style='max-width:300px; height:auto;'>
```

Inside JSON strings use single quotes for the attributes. `alt` is required.

## 6. Validate

```bash
pnpm build
```

The build fails on schema errors (missing `title`, wrong types) and on broken LaTeX, including undefined commands («Broken KaTeX formulas in: theory/<slug>/index.html»). To see which formulas, `grep -o 'katex-error[^>]*>[^<]*' dist/theory/<slug>/index.html` (the `title` holds KaTeX's message); in `pnpm dev` they show as red source text.

Optionally look at the page with `pnpm dev` at `/theory/<slug>`, in light and dark theme.

## 7. Report to the user

Reply briefly with the file path, the URL (`/theory/<slug>`), the sections created and the decisions made without asking (level, group, order, graphs).

Don't commit or push unless the user asks.
