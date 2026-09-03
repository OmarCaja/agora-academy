# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

Static Astro 7 site (Spanish, `lang="es"`) for Ágora Academy, a math tutoring academy in Cuenca, Spain. Content is data-driven JSON; pages are generated at build time. Deploys to GitHub Pages on push to `main` via `.github/workflows/deploy.yml`. Live site: `https://www.agoraacademy.es` (from `public/CNAME`).

## Commands

```bash
pnpm dev      # dev server at localhost:4321
pnpm build    # production build to ./dist/
pnpm preview  # preview production build
```

No lint or typecheck scripts exist. Run `pnpm build` to validate changes (it also regenerates `.astro/types.d.ts`). `pnpm check` runs a self-check on `discoverExercises.ts`'s title-formatting logic. Package manager is pnpm (see `pnpm-workspace.yaml`).

## Architecture

### Two content pipelines, both auto-discovered at build

1. **Theory topics** (`/theory/<slug>`) — driven by `src/content/topics/*.json`, validated by the Zod schema in `src/content.config.ts`. Each JSON file becomes a topic via `getStaticPaths()` in `src/pages/theory/[slug].astro`. Adding a file is enough to register a new page; no manual routing needed.
2. **Exercise PDFs** (`/exercises/<level>`) — driven by the filesystem. `src/utils/discoverExercises.ts` walks `public/ejercicios/<level>/<topic>/*.pdf` at build time and builds the page data consumed by `src/pages/exercises/[level].astro`. Level order, title casing, and per-PDF/topic name overrides live in `src/data/exercises.ts` (`levelOrder`, `levelTitleOverrides`, `topicTitleOverrides`, `pdfNameOverrides`) — only needed when the auto-derived Spanish title (via `SPANISH_ACCENT_WORDS` accent-restoration map) is wrong.

### Navigation is derived, not hand-maintained

`src/components/Menu.astro` builds the full nav tree at render time by calling `getCollection("topics")` and `discoverExercises()` directly — there is no static menu config file. Topics are grouped by `entry.data.menuGroup` and ordered by `entry.data.menuOrder` (set inside each topic's JSON).

The canonical group display order lives in `src/data/topics.ts` (`GROUP_ORDER`) and is imported by both `src/components/Menu.astro` and `src/pages/theory/[slug].astro` (used there for prev/next topic pagination). Add a new `menuGroup` value there and both the nav and the pagination pick it up; groups missing from the array are appended last.

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

1. Create `src/content/topics/<slug>.json` (schema in `src/content.config.ts`, all content in Spanish).
   - Set `menuGroup` (must match one of the `GROUP_ORDER` strings — see above — to sort correctly) and `menuOrder` directly in the JSON.
2. The topic is auto-generated at `/theory/<slug>` and auto-registered in the menu and in theory prev/next pagination. No other file needs editing.

## Adding exercise PDFs

Drop the PDF into `public/ejercicios/<level>/<topic>/`; it's auto-discovered by `discoverExercises.ts` and rendered at `/exercises/<level>`. Only touch `src/data/exercises.ts` to override an auto-derived name/title.
