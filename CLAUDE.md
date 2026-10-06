# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

Static Astro 7 site (Spanish, `lang="es"`) for Ágora Academy, a math tutoring academy in Cuenca, Spain. Content is data-driven JSON; pages are generated at build time. Deploys to GitHub Pages on push to `main` via `.github/workflows/deploy.yml`. Live site: `https://www.agoraacademy.es` (from `public/CNAME`).

**Language:** code, identifiers, file/folder names, comments, CLI messages and project docs (including `.claude/skills/*`) are in English. Student-facing content (topic JSON, exam Markdown, PDFs and `public/ejercicios/...` paths) stays in Spanish.

## Commands

```bash
pnpm dev      # dev server at localhost:4321
pnpm build    # production build to ./dist/ (fails on any broken KaTeX formula)
pnpm preview  # preview production build
pnpm check    # scripts/check-exercises.ts (titles, ordering, override keys) + astro check (types)
pnpm books    # rebuild every book PDF listed in scripts/books.json
```

Validate changes with `pnpm check && pnpm build`; CI runs exactly that before deploying. Package manager is pnpm (see `pnpm-workspace.yaml`). TypeScript stays on 6.x: `astro check` doesn't support TypeScript 7 yet.

### Site facts

The site name (`Ágora - Academia de matemáticas`), URL, levels, phone, email, Instagram and address live only in `src/data/site.ts`. Pages, SEO/JSON-LD, the web app manifest (`src/pages/favicon/site.webmanifest.ts`), `astro.config.mjs` and both PDF generators import them; never write them inline.

## Architecture

### Two content pipelines, both auto-discovered at build

1. **Theory topics** (`/theory/<slug>`) — driven by `src/content/topics/*.json`, validated by the Zod schema in `src/content.config.ts`. Each JSON file becomes a topic via `getStaticPaths()` in `src/pages/theory/[slug].astro`. Adding a file is enough to register a new page; no manual routing needed.
2. **Exercise PDFs** (`/exercises/<level>`) — driven by the filesystem. `src/utils/discoverExercises.ts` walks `public/ejercicios/<level>/<topic>/*.pdf` at build time and builds the page data consumed by `src/pages/exercises/[level].astro`. Level order, title casing, and per-PDF/topic name overrides live in `src/data/exercises.ts` (`levelOrder`, `levelTitleOverrides`, `topicTitleOverrides`, `pdfNameOverrides`) — only needed when the auto-derived Spanish title (via `SPANISH_ACCENT_WORDS` accent-restoration map) is wrong.

### Navigation is derived, not hand-maintained

`src/components/Menu.astro` builds the full nav tree at render time by calling `getCollection("topics")` and `discoverExercises()` directly — there is no static menu config file. Topics are grouped by `entry.data.menuGroup` and ordered by `entry.data.menuOrder` (set inside each topic's JSON).

The topic order lives in `src/data/topics.ts`: `GROUP_ORDER` (group display order) and `sortTopics()` (group, then `menuOrder`, then title), used by both `src/components/Menu.astro` and `src/pages/theory/[slug].astro` (prev/next pagination). Add a new `menuGroup` value to `GROUP_ORDER` and both pick it up; groups missing from the array are appended last. "Known order first, then the rest" sorting anywhere uses `byRank` from `src/utils/sort.ts`.

### Layout & theming

- `src/layouts/BaseLayout.astro` is the single page shell: sets SEO/OpenGraph/Twitter meta, JSON-LD (`LocalBusiness` + `WebSite`, plus an optional per-page `schema` prop), wires up `astro:transitions` (`ClientRouter`), and inlines the dark/light theme script (reads `localStorage`, applies `data-theme` on `<html>` before/after view transitions to avoid flicker).
- Persistent chrome (`GlobalNav`, `Menu`, `ScrollToTop`, and optionally `ReadingProgressBar`) uses `transition:persist` so it survives Astro view transitions across pages.
- All design tokens (colors, spacing, shadows, the neo-brutalist border/shadow-offset look, `Space Mono` font) are CSS custom properties in `src/styles/global.css`, themed via `[data-theme="dark"]` overrides.

### Math content JSON shape

Topic JSON files (`src/content/topics/*.json`) follow: `title`, `description`, optional `menuGroup`/`menuOrder`, and `sections[]`, each with `title` and `items[]` (`title`, optional `formula`, `example`, `description`). `formula`/`example` render through **KaTeX** and support raw `<img>` tags for embedded graphs. `PropertyBox.astro` is the shared card component rendering each item. See `scripts/README.md` for the KaTeX/image conventions in more detail.

### Math graph images

`scripts/generate-math-graphs.py` (Python, requires `matplotlib`/`numpy`) generates the images referenced from topic JSON (`public/ejemplos/<folder>/*.png`). Run from the project root: `python3 scripts/generate-math-graphs.py`. New graphs are added as new blocks near the bottom of the script, using the shared `draw_axes`/`save` helpers and `BLUE`/`RED`/`GREEN`/`ORANGE` palette — see `scripts/README.md` for the exact pattern.

### Client-side search

`theory/[slug].astro` and `exercises/[level].astro` share one in-page, no-dependency filter: `src/components/SearchBox.astro` (markup + styles, count wording via props) and `src/scripts/search.js` (logic, using `src/utils/normalizeText.ts` for accent/case-insensitive matching), driven by `astro:page-load` (fires on both full loads and view transitions) rather than `DOMContentLoaded`.

To make a page filterable, render `<SearchBox />` and mark up the content with `data-search-section` / `data-search-item` plus a `data-search-text` attribute holding the text to match (an item also matches on its rendered `textContent`). Optional `#tocWrapper` is hidden while filtering and `#noResults` is shown when nothing matches.

## Adding a theory topic

The `generate-theory-topic` skill (`.claude/skills/generate-theory-topic/SKILL.md`) covers content conventions, graphs and validation. The mechanics:

1. Create `src/content/topics/<slug>.json` (schema in `src/content.config.ts`, all content in Spanish).
   - Set `menuGroup` (must match one of the `GROUP_ORDER` strings — see above — to sort correctly) and `menuOrder` directly in the JSON.
2. The topic is auto-generated at `/theory/<slug>` and auto-registered in the menu and in theory prev/next pagination. No other file needs editing.

KaTeX gotchas (`src/utils/math.ts` turns every failed formula, including undefined commands, into a `.katex-error` span):
- Each `$$…$$` / `$…$` must stay on one line — the regex doesn't cross newlines.
- In JSON, LaTeX backslashes are doubled (`\\cdot`), so a matrix row break is `\\\\`.
- Use `\\textcolor{#hex}{x}`, never `\\color{…}{x}` — `\color` is a switch that tints everything after it in the group. Pastel palette in use: red `#d46a6a`, green `#4fa66e`.
- A broken formula fails `pnpm build` (`fail-on-katex-errors` in `astro.config.mjs`), naming the page; in `pnpm dev` it shows as red source text.

## Adding exercise PDFs

New exams/exercise sheets are written in Markdown and rendered locally to PDF by the `generate-exercises` skill (`.claude/skills/generate-exercises/scripts/render.mjs`: KaTeX + headless Chrome). The PDF goes to `public/ejercicios/<level>/<topic>/`, where `discoverExercises.ts` picks it up for `/exercises/<level>`; its Markdown is kept as `exercises-src/<level>/<topic>/<name>.md`. To change a sheet, edit that file and run `render.mjs --file exercises-src/...md`, which overwrites the PDF. PDFs made before October 2026 have no source. Only touch `src/data/exercises.ts` to override an auto-derived name/title.

## Adding a book PDF

The `generate-book` skill (`.claude/skills/generate-book/SKILL.md`) covers topic selection, ordering, naming and checks. The mechanics:

`scripts/build-book.mjs` turns theory topics into a book PDF (cover, TOC with page numbers, running header/footer) using the site's `renderMath`, Paged.js (the `pagedjs` dev dependency) and headless Chrome. Write it to `public/libros/<topic-slugs>.pdf` (no `libro-` prefix). Each build is recorded in `scripts/books.json` (topics, title, out), so after editing topics `pnpm books` rebuilds them all. The site reads that file through `src/data/books.ts`: `/books` (`src/pages/books.astro`, linked from the menu) lists each book by title with its chapters, in topic order, and each theory page links to the book containing it.

Both PDF generators share `scripts/pdf.mjs` (Chrome lookup for macOS/Linux/Windows, HTML escaping); override the browser with `CHROME=/path/to/chrome`.

```bash
node scripts/build-book.mjs --topics matrices,determinantes --title "Matrices y determinantes" --out public/libros/matrices-determinantes.pdf
```
