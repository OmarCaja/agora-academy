# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

Static Astro 7 site (Spanish, `lang="es"`) for Ágora Academy, a math tutoring academy in Cuenca, Spain. Content is data-driven JSON; pages are generated at build time. Deploys to GitHub Pages on push to `main` via `.github/workflows/deploy.yml`. Live site: `https://www.agoraacademy.es` (from `public/CNAME`). The sitemap (`@astrojs/sitemap` in `astro.config.mjs`) skips `/buscar/` and takes each page's `<lastmod>` from the last commit that touched its source, which is why CI checks out the full git history.

**Language:** code, identifiers, file/folder names, comments, CLI messages and project docs (including `.claude/skills/*`) are in English. Student-facing content (topic JSON, exam Markdown, PDFs, URLs and so the route folders under `src/pages`, and `public/ejercicios/...` paths) stays in Spanish. The site moved from `/theory`, `/exercises`, `/books` to `/teoria`, `/ejercicios`, `/libros`; `astro.config.mjs` redirects the old URLs.

## Commands

```bash
pnpm dev      # dev server at localhost:4321
pnpm build    # production build to ./dist/ (fails on any broken KaTeX formula)
pnpm preview  # preview production build
pnpm check    # scripts/check-exercises.ts (titles, ordering, override keys) + astro check (types)
pnpm books    # rebuild every book PDF listed in scripts/books.json
```

Validate changes with `pnpm check && pnpm build`; CI runs exactly that before deploying. Package manager is pnpm (see `pnpm-workspace.yaml`). TypeScript stays on 6.x: `astro check` doesn't support TypeScript 7 yet.

### Pull requests

**Remote/cloud sessions:** whenever the user requests a change to the repo, finish by creating a pull request for it, without waiting to be asked. Then run the `review-pr` skill (`.claude/skills/review-pr/SKILL.md`) on it right away. It reviews the PR with a subagent and squash-merges it into `main` if the review is clean, which deploys the site.

**Local sessions (the user's own machine):** do not create a branch, commit, push, open a PR or run `review-pr`. Leave the changes uncommitted in the working tree on `main`, after running `pnpm check && pnpm build`; the user tests them locally and commits them. Only commit, push or open a PR locally if the user asks.

### Site facts

The site name (`Ágora - Academia de matemáticas`), URL, levels, phone, email, Instagram, address and opening hours live only in `src/data/site.ts`. Pages, SEO/JSON-LD, the web app manifest (`src/pages/favicon/site.webmanifest.ts`), `astro.config.mjs` and both PDF generators import them; never write them inline.

## Architecture

### Two content pipelines, both auto-discovered at build

1. **Theory topics** (`/teoria/<slug>`) — driven by `src/content/topics/*.json`, validated by the Zod schema in `src/content.config.ts`. Each JSON file becomes a topic via `getStaticPaths()` in `src/pages/teoria/[slug].astro`. Adding a file is enough to register a new page; no manual routing needed.
2. **Exercise PDFs** (`/ejercicios/<level>`) — driven by the filesystem. `src/utils/discoverExercises.ts` walks `public/ejercicios/<level>/<topic>/*.pdf` (maths) and `public/ejercicios/<subject>/<level>/<topic>/*.pdf` (other subjects, listed in `subjects` in `src/data/exercises.ts`, e.g. `fisica-y-quimica`) at build time and builds the page data consumed by `src/pages/ejercicios/[...level].astro` (`/ejercicios/2-eso`, `/ejercicios/fisica-y-quimica/2-eso`). The menu groups exercise levels by subject. Level order, title casing, and per-PDF/topic name overrides live in `src/data/exercises.ts` (`levelOrder`, `levelTitleOverrides`, `topicTitleOverrides`, `pdfNameOverrides`) — only needed when the auto-derived Spanish title (via `SPANISH_ACCENT_WORDS` accent-restoration map) is wrong.

Both pipelines have an index page that lists everything they generate: `/teoria` (`src/pages/teoria/index.astro`, topics by `menuGroup`) and `/ejercicios` (`src/pages/ejercicios/index.astro`, levels by subject). Generic "Teoría"/"Ejercicios" links (breadcrumbs, footer, home, 404, menu) point there, never at one specific topic or level. They render internal links with `src/components/LinkCards.astro`; `PdfList.astro` is the counterpart for PDFs, which open in a new tab.

### Navigation is derived, not hand-maintained

`src/components/Menu.astro` builds the full nav tree at render time by calling `getCollection("topics")` and `discoverExercises()` directly — there is no static menu config file. Topics are grouped by `entry.data.menuGroup` and ordered by `entry.data.menuOrder` (set inside each topic's JSON).

The topic order lives in `src/data/topics.ts`: `GROUP_ORDER` (group display order) and `sortTopics()` (group, then `menuOrder`, then title), used by both `src/components/Menu.astro` and `src/pages/teoria/[slug].astro` (prev/next pagination). Add a new `menuGroup` value to `GROUP_ORDER` and both pick it up; groups missing from the array are appended last. "Known order first, then the rest" sorting anywhere uses `byRank` from `src/utils/sort.ts`.

### Layout & theming

- `src/layouts/BaseLayout.astro` is the single page shell: sets SEO/OpenGraph/Twitter meta, JSON-LD (`LocalBusiness` + `WebSite`, plus an optional per-page `schema` prop), wires up `astro:transitions` (`ClientRouter`), and inlines the dark/light theme script (reads `localStorage`, applies `data-theme` on `<html>` before/after view transitions to avoid flicker).
- Persistent chrome (`GlobalNav`, `Menu`, `ScrollToTop`, and optionally `ReadingProgressBar`) uses `transition:persist` so it survives Astro view transitions across pages.
- All design tokens (colors, spacing, shadows, the neo-brutalist border/shadow-offset look, `Space Mono` font) are CSS custom properties in `src/styles/global.css`, themed via `[data-theme="dark"]` overrides.

### Math content JSON shape

Topic JSON files (`src/content/topics/*.json`) follow: `title`, `description` (the meta description: keep it under ~160 characters), `levels` (courses it is taught in, `levelOrder` keys such as `"2-bach"`; shown in the page title as «Matrices (2º Bachillerato)» via `formatLevels` and in the `educationalLevel` schema), optional `menuGroup`/`menuOrder`, and `sections[]`, each with `title` and `items[]` (`title`, `kind`, optional `description`, `formula`, `example`).

Rigour rules, enforced by `pnpm check`: every item declares its `kind` (`definicion`, `teorema`, `propiedad`, `procedimiento`, `observacion`, `ejemplo`; labels in `src/data/itemKinds.ts`), shown as a badge above the title (definitions and theorems also get a heavy left rule). A card renders `description` (the statement) → `formula` → `example`, so a card always states before it exemplifies, and only `kind: "ejemplo"` cards (worked examples that apply the cards above) may have no statement. Within a section, a concept is defined (`definicion`) before any card that uses it. `formula`/`example` render through **KaTeX** and support raw `<img>` tags for embedded graphs. `PropertyBox.astro` is the shared card component rendering each item. See `scripts/README.md` for the KaTeX/image conventions in more detail.

### Math graph images

`scripts/generate-math-graphs.py` (Python, requires `matplotlib`/`numpy`) generates the images referenced from topic JSON (`public/ejemplos/<folder>/*.png`). Run from the project root: `python3 scripts/generate-math-graphs.py`. New graphs are added as new blocks near the bottom of the script, using the shared `draw_axes`/`save` helpers and `BLUE`/`RED`/`GREEN`/`ORANGE` palette — see `scripts/README.md` for the exact pattern.

### Client-side search

`teoria/[slug].astro` and `ejercicios/[level].astro` share one in-page, no-dependency filter: `src/components/SearchBox.astro` (markup + styles, count wording via props) and `src/scripts/search.js` (logic, using `src/utils/normalizeText.ts` for accent/case-insensitive matching), driven by `astro:page-load` (fires on both full loads and view transitions) rather than `DOMContentLoaded`.

To make a page filterable, render `<SearchBox />` and mark up the content with `data-search-section` / `data-search-item` plus a `data-search-text` attribute holding the text to match (an item also matches on its rendered `textContent`). Optional `#tocWrapper` is hidden while filtering; render `<NoResults message="..." />` (`src/components/NoResults.astro`) for the empty state, which is shown when nothing matches and has a button that clears the query.

Matching is shared (`src/utils/searchMatch.js`): every word of the query must be found, in any order, ignoring case, accents and dots (`m.c.d.` = `mcd`); plurals fold to singular; synonyms come from `src/data/searchAliases.ts` (add a group there when students use another name for a concept); there is no typo tolerance (a fuzzy match such as «bayes» → «bases» was judged worse than a miss). A word matches at the start of a word of the text ("inecuacion" finds "inecuaciones" but "ecuacion" does not find "inecuaciones"), and words of up to 3 letters must match whole. Keep synonyms strict: a loose one brings unrelated topics into the results. Items with `data-search-title` (the books) are reordered by relevance. The site-wide search page `/buscar` (`src/pages/buscar.astro`, `src/scripts/global-search.js`) reads `/search-index.json` (`src/pages/search-index.json.ts`, one entry per theory card) and links each result to the web (`#<section>-<n>` anchors on theory pages) and to the book page; Cmd/Ctrl+K opens it from pages without a search box. Search is text only: no filters, no «coincide en» lists.

## Adding a theory topic

The `generate-theory-topic` skill (`.claude/skills/generate-theory-topic/SKILL.md`) covers content conventions, graphs and validation. The mechanics:

1. Create `src/content/topics/<slug>.json` (schema in `src/content.config.ts`, all content in Spanish).
   - Set `levels` (see the JSON shape above).
   - Set `menuGroup` (must match one of the `GROUP_ORDER` strings — see above — to sort correctly) and `menuOrder` directly in the JSON.
2. The topic is auto-generated at `/teoria/<slug>` and auto-registered in the menu and in theory prev/next pagination. No other file needs editing.
3. Whenever a topic is created or changed, run `pnpm books` so every book PDF that includes it (`scripts/books.json`) stays in sync with the site.

KaTeX gotchas (`src/utils/math.ts` turns every failed formula, including undefined commands, into a `.katex-error` span):
- Each `$$…$$` / `$…$` must stay on one line — the regex doesn't cross newlines.
- In JSON, LaTeX backslashes are doubled (`\\cdot`), so a matrix row break is `\\\\`.
- Use `\\textcolor{#hex}{x}`, never `\\color{…}{x}` — `\color` is a switch that tints everything after it in the group. Pastel palette in use: red `#d46a6a`, green `#4fa66e`.
- A broken formula fails `pnpm build` (`fail-on-katex-errors` in `astro.config.mjs`), naming the page; in `pnpm dev` it shows as red source text.

## Adding exercise PDFs

New exams/exercise sheets are written in Markdown and rendered locally to PDF by the `generate-exercises` skill (`.claude/skills/generate-exercises/scripts/render.mjs`: KaTeX + headless Chrome). The PDF goes to `public/ejercicios/<level>/<topic>/`, where `discoverExercises.ts` picks it up for `/ejercicios/<level>`; its Markdown is kept as `exercises-src/<level>/<topic>/<name>.md`. To change a sheet, edit that file and run `render.mjs --file exercises-src/...md`, which overwrites the PDF. A PDF named after its folder (`interes-simple-compuesto-1.pdf` in `interes-simple-compuesto/`) is listed as its topic title plus its number, so a `topicTitleOverrides` entry also names its PDFs. Only touch `src/data/exercises.ts` to override an auto-derived name/title or to place a new topic in `topicOrder`. Sheets that need a graph embed a PNG kept next to their source (`![alt](file.png)`).

## Adding a book PDF

The `generate-book` skill (`.claude/skills/generate-book/SKILL.md`) covers topic selection, ordering, naming and checks. The mechanics:

`scripts/build-book.mjs` turns theory topics into a book PDF (cover, TOC with page numbers, running header/footer) using the site's `renderMath`, Paged.js (the `pagedjs` dev dependency) and headless Chrome. Write it to `public/libros/<topic-slugs>.pdf` (no `libro-` prefix). Each build is recorded in `scripts/books.json` (topics, title, out), so after editing topics `pnpm books` rebuilds them all. The build also writes the PDF's own metadata with `pdf-lib` (title, author, subject, keywords from chapter and section titles, language) and PDF bookmarks (a chapter per topic, a child per section, found from the page each heading lands on after Paged.js lays the book out) and records the page count in `books.json` (`pnpm check` requires it). The site reads that file through `src/data/books.ts`: `/libros` (`src/pages/libros.astro` + `src/components/BookList.astro`, linked from the menu) lists each book with its size, description and chapters with their sections, in topic order, plus `Book` JSON-LD. Each book ends with an alphabetical «Índice de conceptos» (definitions and theorems, linked, with page numbers), and `books.json` records the page of every chapter, section and card (`at`, keyed by `<slug>`, `<slug>-<section>`, `<slug>-<section>-<card>`), which `/libros` and `/buscar` use to open the PDF at the exact page (`#page=N`). Every section and concept title of a book is searchable on `/libros` (not shown). Each theory page links to the book containing it. When a topic is renamed, add it to `RENAMED_TOPICS` in `src/data/topics.ts` so the old URLs redirect.

Both PDF generators share `scripts/pdf.mjs` (Chrome lookup for macOS/Linux/Windows, HTML escaping); override the browser with `CHROME=/path/to/chrome`.

```bash
node scripts/build-book.mjs --topics matrices,determinantes --title "Matrices y determinantes" --out public/libros/matrices-determinantes.pdf
```
