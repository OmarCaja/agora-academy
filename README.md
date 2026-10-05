# Ágora - Academia de matemáticas

Website of Ágora, a math academy in Cuenca, Spain: theory topics with KaTeX formulas, downloadable exercise sheets and theory books. Static **Astro 7** site, deployed to GitHub Pages on every push to `main`. Live at [www.agoraacademy.es](https://www.agoraacademy.es).

## Commands

| Command        | Action                                                     |
| -------------- | ---------------------------------------------------------- |
| `pnpm dev`     | Start the dev server at `localhost:4321`                   |
| `pnpm build`   | Build the site to `./dist/` (fails on broken formulas)     |
| `pnpm preview` | Preview the production build                               |
| `pnpm check`   | Exercise-data self-check + type check (CI runs it too)     |
| `pnpm books`   | Rebuild every book PDF listed in `scripts/books.json`      |

## Where things live

- Theory topics: `src/content/topics/*.json`, one page each at `/theory/<slug>`.
- Exercise PDFs: `public/ejercicios/<level>/<topic>/`, Markdown sources in `exercises-src/`.
- Books: `public/libros/`, built by `scripts/build-book.mjs`.
- Site name, contact details and address: `src/data/site.ts`.

Architecture, conventions and how to add content are documented in [CLAUDE.md](CLAUDE.md).

© 2026 Ágora - Academia de matemáticas
