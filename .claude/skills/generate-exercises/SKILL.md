---
name: generate-exercises
description: Generates Ágora Academy math exams and exercise sheets (ESO and Bachillerato) as PDFs rendered locally in the academy template and saves them to the website's public/ejercicios folder. Use it whenever the user asks to create, generate or prepare an exam, exercises, an exercise sheet, problems or material for a topic and course (e.g. «examen de matrices para 2º de Bachillerato» or «ejercicios de fracciones de 1º ESO»), even if they don't mention the template or the PDF.
---

# Generate Ágora exams and exercises

Full flow: write the content in Markdown with LaTeX formulas → `scripts/render.mjs` turns it into HTML in the academy template (header «Academia Ágora - Cuenca» + logo, A4, Arial 11pt), renders the formulas with KaTeX (the site's own dependency) and prints it to PDF with headless Google Chrome → the PDF lands in `public/ejercicios/…`.

Everything is local: no network, no keys. Requirements: `pnpm install` done (for `katex`) and Google Chrome installed (override its path with `CHROME=/path/to/chrome`). The PDFs live only in the repo; nothing goes to Google Drive.

The material itself (titles, statements, solutions) is written in Spanish (Spain); only this skill and its code are in English.

## 1. Understand the request

You need:
- **Course** (1º–4º ESO, 1º–2º Bachillerato).
- **Topic** and **content** (which exercises, how many, difficulty).
- **Type**: exam (with points) or exercise sheet (no points).
- **Solutions**: included by default unless the user says otherwise.

If the course or topic is missing, ask. Decide the rest with judgement and mention it at the end.

## 2. Pick the destination folder in `public/`

General rule: `public/ejercicios/<course>/<topic>/`, with the topic lowercase, without accents and hyphenated.

| Course | Folder in public |
|---|---|
| 1 ESO / 2 ESO / 3 ESO / 4 ESO | `1-eso` / `2-eso` / `3-eso` / `4-eso` |
| 1 Bachillerato / 2 Bachillerato | `1-bach` / `2-bach` |

Before deciding, look at what already exists:

```bash
find public/ejercicios -name "*.pdf" | sort
```

- If there are already PDFs for the same topic in a differently named folder, use that folder. Known case: 1º Bachillerato exams → `1-bach/examenes/`.
- If a PDF with the same base name exists in another folder of the same course, follow that folder.
- If it's unclear, ask.

## 3. Pick the file name

The PDF is named `<base>-<number>.pdf` (e.g. `matrices-3.pdf`). The script takes the next number after the PDFs already in `--out` and, without `--base`, infers the base when that folder holds a single one.

Pass `--base` when the folder is new or mixes bases (e.g. `1-bach/examenes/`). The base is lowercase, without accents and hyphenated; for multi-topic exams it describes the topics, as in `funciones-limites-derivadas-1`.

## 4. Write the content

Write the document to a temporary file (in the scratchpad if there is one) following these rules exactly, because the generator parses them for layout. Headings and labels below are literal Spanish text the generator expects.

**Structure**
- First line: the title with `# `. E.g. `# Examen de matrices` or `# Ejercicios de números enteros`.
- Each exercise with `### `. Exams: `### Ejercicio N (X puntos) - Tema breve`. Exercise sheets: `### Ejercicio N - Tema breve` (no points).
- Sub-questions as a list: `- **a) (0,75p)** statement` in exams, `- **a)** statement` in exercise sheets.
- Exams total 10 points unless told otherwise. Use a decimal comma (0,75) and check the points add up.

**Solutions**
- After the last statement, a line containing only `---` (page break) and then `## Resolución`.
- Each solution with `### Solución Ejercicio N` and each sub-question starting with `**a)**`.
- Show the intermediate steps.

**Math**
- Every math expression, however small (including single variables like `$x$` or `$A$`), in KaTeX-compatible LaTeX.
- Inline: `$...$`. Display: `$$...$$` alone on its own line.
- Don't use `\( \)`, `\[ \]`, `align`, `equation` or Markdown tables. Use `pmatrix`/`vmatrix` for matrices and `cases` for systems.
- Absolute values with `\lvert … \rvert`, never bare `|…|`: with `|-5|` KaTeX treats the minus as a subtraction and renders «| − 5|».
- Don't write `$` outside formulas (use `\$` if needed).

**Format**
- One idea per line. No double blank lines, no code blocks, no images, no emojis.
- For numbered steps start the line with `1. `, `2. `.

**Level**: match difficulty and notation to the course per the Spanish curriculum. Write in Spain Spanish.

## 5. Check the calculations

Students will rely on the solutions, so they must be correct. Before rendering, verify every non-trivial result by running code (e.g. `node -e` for matrix products, determinants, inverses, systems, derivatives at specific points or probabilities). If you find a mistake, fix the statement or the solution.

## 6. Render the PDF

```bash
node .claude/skills/generate-exercises/scripts/render.mjs \
  --file <path-to-md> \
  --out public/ejercicios/2-bach/matrices \
  [--base matrices] [--html]
```

It prints a JSON summary (`name`, `pdfPath`, `failedEquations`) and never overwrites: it always picks the next free number. `--html` keeps the intermediate HTML next to the PDF for debugging (delete it afterwards, it must not be published).

If `failedEquations` is not empty (exit code 2), those formulas show as red code in the PDF: fix the LaTeX, delete the PDF and render again.

Then check the layout by turning every page into a PNG and looking at them (run it from the scratchpad, it writes `pg1.png`, `pg2.png`… in the current directory):

```bash
swift <repo>/.claude/skills/generate-exercises/scripts/preview.swift <pdf>
```

## 7. Report to the user

Reply briefly with the PDF path and the decisions you made without asking (type, number of exercises, folder).

Don't commit or push unless the user asks.

## Troubleshooting

- `Cannot find package 'katex'`: run `pnpm install`.
- `Chrome not found`: install Google Chrome or set `CHROME=/path/to/chrome`.
