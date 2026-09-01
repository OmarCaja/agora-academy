# AGENTS.md

Static Astro 7 site (Spanish) for Ágora Academy. Content is data-driven JSON; pages are generated at build. Deploys to GitHub Pages on push to `main` via `.github/workflows/deploy.yml`. Site: `https://www.agoraacademy.es` (from `public/CNAME`).

## Commands

```bash
pnpm dev      # dev server at localhost:4321
pnpm build    # production build to ./dist/
pnpm preview  # preview production build
```

No lint, test, or typecheck scripts exist. Run `pnpm build` to validate changes and regenerate `.astro/types.d.ts`.

## Adding a theory topic

1. Create `src/content/topics/<slug>.json` (schema in `src/content.config.ts`; all content in Spanish).
   - Set `menuGroup` (e.g. `"Álgebra"`) and `menuOrder` (e.g. `1`) directly in the JSON to control navigation placement.
2. The topic is auto-generated at `/theory/<slug>` and auto-registered in the menu.

## Exercise PDFs

PDFs live in `public/ejercicios/<level>/<topic>/`. They are auto-discovered at build time by `src/utils/discoverExercises.ts` and rendered at `/exercises/<level>`.
- To override default auto-derived names/titles, add entries to `pdfNameOverrides` or `topicTitleOverrides` in `src/data/exercises.ts`.

## Math graphs

`scripts/generate-math-graphs.py` (matplotlib + numpy, must be installed) renders images to `public/ejemplos/<folder>/`, referenced from topic JSON as `"/ejemplos/<folder>/file.png"`. Run from the project root. Full usage in `scripts/README.md`; use `draw_axes`, `save`, and the BLUE/RED/GREEN/ORANGE palette.

## Notes

- Math fields (`formula`, `example`) render via KaTeX; reference images inside JSON with an `<img>` tag (see `scripts/README.md`).
- Content is fully self-contained in `src/content/topics/*.json` and `public/ejercicios/`.
