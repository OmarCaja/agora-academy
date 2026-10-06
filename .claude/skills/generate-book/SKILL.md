---
name: generate-book
description: Generates an Ágora Academy theory book as a PDF (cover, table of contents with page numbers, running header and footer) from the existing theory topics, saves it to public/libros and lists it on the website's /books page. Use it whenever the user asks to create, generate, update or regenerate a book, a PDF book, a dossier, a compilation or downloadable notes/theory of one or more topics or a course (e.g. «hazme un libro de límites y derivadas», «libro de 2º de Bachillerato», «regenera el libro de matrices»), even if they don't mention PDF or the website.
---

# Generate Ágora theory books

Flow: pick topics from `src/content/topics/*.json` → `scripts/build-book.mjs` lays them out (site's `renderMath` for KaTeX, Paged.js from `node_modules` for pagination, headless Chrome for the PDF) → the PDF lands in `public/libros/` → `/books` lists it automatically.

Requirements: `pnpm install` done and Google Chrome or Chromium installed (found automatically; override with `CHROME=/path/to/chrome`). No network needed. The book only reuses existing theory; it never writes new content. If a topic the user asks for doesn't exist, say so and offer the `generate-theory-topic` skill first.

Book text (title) is Spanish (Spain); this skill and the code are English.

## 1. Understand the request

You need the **topics** (or a course to derive them from), and a **title**. Never mention a course or level (ESO, Bachillerato…) in the book.

List the available topics with their group and order:

```bash
for f in src/content/topics/*.json; do node -e "const d=require('./$f');console.log('$f'.slice(19,-5),'|',d.title,'|',d.menuGroup,'|',d.menuOrder)"; done
```

- **Topics named by the user**: map them to slugs (e.g. «límites» → `limites`).
- **A whole course or group**: topic JSON has no course field. Propose the topic list from the content (or a `menuGroup`) and confirm it with the user before building.
- **Title**: if the user gives none, build it from the topic titles («Matrices y determinantes»). For many topics, use the group («Álgebra»).
- Don't ask about anything else: decide it and mention it at the end.

## 2. Order the chapters

Chapters follow the `--topics` order. Unless the user orders them, use the site's order: `menuGroup` by `GROUP_ORDER` (`src/data/topics.ts`), then `menuOrder`.

## 3. Name the file

`public/libros/<topic-slugs-joined-by-hyphens>.pdf`, e.g. `matrices-determinantes.pdf`. **Never** add a `libro-` prefix. For a group or course book use a short slug of the title (`algebra.pdf`). Check first with `ls public/libros`: same name means regenerating that book, which is fine when asked.

## 4. Build

```bash
node scripts/build-book.mjs --topics matrices,determinantes --title "Matrices y determinantes" --out public/libros/matrices-determinantes.pdf
```

It takes a few seconds and records the book (topics, title, out) in `scripts/books.json`, replacing any entry with the same `--out`. To regenerate existing books after topics change («regenera el libro de matrices», or every book), run `pnpm books`, which rebuilds everything in that list.

A `Warning: N formula(s) failed to render` means broken LaTeX in a topic: rerun with `--html` (keeps `<out>.html` next to the PDF), find `katex-error`, fix the topic JSON (see the KaTeX gotchas in `CLAUDE.md`), rebuild, and delete the `.html`.

## 5. Check the PDF

Render the cover, the table of contents and one content page and look at them:

```bash
python3 -c "
import fitz; d = fitz.open('public/libros/matrices-determinantes.pdf'); print(d.page_count, 'pages')
for i in (0, 1, d.page_count // 2): d[i].get_pixmap(dpi=60).save(f'<scratchpad>/book-p{i+1}.png')"
```

Check: the title fits the cover without awkward breaks, every chapter and section is in the index with a page number, and the header shows the right chapter name.

## 6. Check it on the website

`/books` reads `scripts/books.json`: each book shows under its `--title`, with its chapters, in the site's topic order. Each theory page links to the book that contains it («Descargar en PDF»). Nothing to edit: run `pnpm build` and confirm the book appears in `dist/books/index.html`.

## 7. Report

One short message (in Spanish): file path, page count, the chapters included and any decision you made (order, title). Send the PDF to the user. Don't commit unless asked.
