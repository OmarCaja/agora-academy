---
name: generate-theory-topic
description: Creates or extends an Ágora Academy theory topic page (/teoria/<slug>) as a JSON file in src/content/topics, with KaTeX formulas, worked examples and optional matplotlib graphs. Use it whenever the user asks to create, write, add or expand theory, a topic, notes, a summary or a "tema" for a math subject (e.g. «crea el tema de integrales», «añade teoría de vectores para 1º Bach», «amplía matrices con determinantes»), even if they don't mention JSON or the website.
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
- **`levels`**: the courses the topic is taught in, as `levelOrder` keys from `src/data/exercises.ts` (`["4-eso", "1-bach"]`). They go into the page title, so list only where it is really taught.
- **`description`**: it is the meta description Google shows; keep it under ~160 characters.
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
- `kind` (required): `definicion` (a concept is introduced, formally), `teorema` (a statement that needs proof or is a named result), `propiedad` (a rule that follows from definitions), `procedimiento` (a method, with steps), `observacion` (a warning or remark, e.g. a common mistake), `ejemplo` (a worked example that has no statement of its own and applies the cards above it). It is shown as a label on the card.
- **Definitions come first.** Never use a term before its `definicion` card, and never put an example before the statement it illustrates: the card order is `description` → `formula` → `example`. State definitions formally (hypotheses, conditions such as $b \neq 0$, quantifiers) and give at least one example with intermediate steps after every definition. Justify properties briefly (a one-line proof or reason) when it is within reach of the level.
- `title`: the concept or rule. It may contain inline math (`Elementos de una matriz: $a_{ij}$`).
- `description`: the statement and its explanation, addressed to the student, clear and plain (for a `definicion`, the definition itself). Bold key terms with `<strong>`, break lines with `<br>`. Explain the *why* and the common mistake when there is one.
- `formula`: the rule or definition alone, usually as `$$…$$`.
- `example`: a worked example with numbers and intermediate steps, never just the result. Several short cases separated by `<br>` and `•` are fine.
- Every item except `ejemplo` cards has `description` or `formula` (`pnpm check` fails otherwise), and almost every item has an `example`. Procedures (Gauss, solving an equation) get step-by-step examples.

**Summary** (`summary[]`, hand-written): the key points and formulas of the topic, printed in the «Resumen» at the end of every book PDF that includes it. Each point has a short `title`, an optional one-line `text` and an optional `formula`. Keep it a revision sheet: the formulas and criteria a student needs, without examples or explanations (4–8 points). Write it for every new topic and update it when the topic changes.

**Math**
- All math, however small (`$x$`, `$A$`), in KaTeX LaTeX: `$…$` inline, `$$…$$` display.
- Each formula on one line; backslashes doubled in JSON (`\\dfrac`, matrix row break `\\\\`).
- Highlight with `\\textcolor{#d46a6a}{…}` (red) or `\\textcolor{#4fa66e}{…}` (green), never `\\color`.
- Absolute values with `\\lvert … \\rvert`, not bare `|…|`.

**Level**: match depth and notation to the course per the Spanish curriculum, but never mention the course or level in the topic text. Write in Spain Spanish.

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

The build fails on schema errors (missing `title`, wrong types) and on broken LaTeX, including undefined commands («Broken KaTeX formulas in: teoria/<slug>/index.html»). To see which formulas, `grep -o 'katex-error[^>]*>[^<]*' dist/teoria/<slug>/index.html` (the `title` holds KaTeX's message); in `pnpm dev` they show as red source text.

Optionally look at the page with `pnpm dev` at `/teoria/<slug>`, in light and dark theme.

### Check the topic's links on the concept map

The concept map (`/mapa`, built by `src/utils/conceptGraph.ts`) is rebuilt from the topic JSON on every build. A definition or theorem card becomes a node, and its names come from its title (the part before a colon, without formulas). A card that names a concept in its `description`/`example` gets a link: card to concept inside one topic, **topic to topic** when the concept belongs to another topic. So the topic's links depend on its wording. After `pnpm build`, list every link between the topic and other topics:

```bash
node -e 'const s=process.argv[1],m=require("./dist/mapa.json"),n=Object.fromEntries(m.nodes.map(x=>[x.id,x])),t="t:"+s,top=x=>x.startsWith("c:")?"t:"+x.slice(2).replace(/-\d+-\d+$/,""):x,own=x=>top(x)===t;for(const[a,b]of m.links){if(own(a)===own(b))continue;const[i,o]=own(a)?[a,b]:[b,a];if(!(n[i].type==="topic"&&n[o].type==="group"))console.log(n[i].label,"—",n[o].label)}' <slug>
```

Check the list both ways:
- **Every link makes sense**: the other topic really is a prerequisite or a use of this one. A link that comes from the same word with another meaning (as «límite superior» in statistics is not the limit of a function) is wrong.
- **No prerequisite is missing**: each topic the content builds on (derivatives on limits, plane equations on vectors…) should appear. Also check the reverse: topics that use the new concepts should link to it.

Fix wrong or missing links at the root, in this order:
1. **Wording**: name the prerequisite concept in the card text as its definition card calls it, and give definition cards titles that are the name students read (`Determinante`, not a long sentence). A card titled with a formula alone goes by its section title.
2. **Tables in `src/utils/conceptGraph.ts`**, each with its comment explaining the rule: `SHORT_NAMES` (the short name other topics use for a long title), `BRANCH_ONLY` / `OWN_TOPIC` (a name that means something else outside its group/topic), `GENERIC` (too common to mean one concept), `IDIOMS` (phrases such as «en función de»).
3. `src/data/searchAliases.ts`, only for true synonyms (it also drives the site search).

Then rebuild and run the command again. Changes to the tables also affect other topics' links, so look at `/mapa` (`pnpm dev`) to make sure nothing else broke.

Once the build passes, every topic must have a book PDF. If no book in `scripts/books.json` lists the topic, create one for it alone (the build records it in `books.json`):

```bash
node scripts/build-book.mjs --topics <slug> --title "<Título>" --out public/libros/<slug>.pdf
```

Then regenerate all book PDFs so every book containing the topic matches the site:

```bash
pnpm books
```

## 7. Report to the user

Reply briefly with the file path, the URL (`/teoria/<slug>`), the sections created, the topics it links to on the concept map (and any link fixed) and the decisions made without asking (level, group, order, graphs).

Don't commit or push unless the user asks.
