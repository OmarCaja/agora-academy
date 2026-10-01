---
name: generate-exercises
description: Generates Ágora Academy math exams and exercise sheets (ESO and Bachillerato) from the Google Docs template and saves the PDF to the website's public/ejercicios folder. Use it whenever the user asks to create, generate or prepare an exam, exercises, an exercise sheet, problems or material for a topic and course (e.g. «examen de matrices para 2º de Bachillerato» or «ejercicios de fracciones de 1º ESO»), even if they don't mention Google Docs, the template or the PDF.
---

# Generate Ágora exams and exercises

Full flow: write the content in Markdown with LaTeX formulas → send it to the Google Apps Script generator, which copies the template into the matching Drive folder, lays out the document and renders the formulas → receive the PDF and save it under `public/ejercicios/…`.

Everything goes through `scripts/generate.mjs` (Node 18+, no dependencies). It reads `GENERADOR_URL` and `GENERADOR_KEY` from `.env` at the repo root. That file is secret: never show its contents, never copy it elsewhere, and check it is still in `.gitignore`.

The material itself (titles, statements, solutions) is written in Spanish (Spain); only this skill and its code are in English.

## 1. Understand the request

You need:
- **Course** (1º–4º ESO, 1º–2º Bachillerato).
- **Topic** and **content** (which exercises, how many, difficulty).
- **Type**: exam (with points) or exercise sheet (no points).
- **Solutions**: included by default unless the user says otherwise.

If the course or topic is missing, ask. Decide the rest with judgement and mention it at the end.

## 2. Pick the Drive folder

List the available folders:

```bash
node .claude/skills/generate-exercises/scripts/generate.mjs folders
```

Pick the one matching the course and topic (e.g. `2 Bachillerato / Matrices`). 1º Bachillerato exams go in `1 Bachillerato / Exámenes`. If no suitable folder exists, ask the user before creating it (with `--create-folders`).

## 3. Pick the destination folder in `public/`

General rule: `public/ejercicios/<course>/<topic>/`, with the topic lowercase, without accents and hyphenated.

| Course in Drive | Folder in public |
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

## 4. Pick the file name

The document is named `<base>-<number>` (e.g. `matrices-3`). The generator computes the next number in the Drive folder and, without `--base`, infers the base from the files already there.

Compare with the existing PDFs in the chosen `public` folder. If a different base is used there (e.g. Drive has «Ejercicios números enteros 2» but `public` uses `numeros-enteros-2.pdf`), pass `--base` with the `public` one. For multi-topic exams the base describes the topics, as in `funciones-limites-derivadas-1`.

## 5. Write the content

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
- Don't write `$` outside formulas (use `\$` if needed).

**Format**
- One idea per line. No double blank lines, no code blocks, no images, no emojis.
- For numbered steps start the line with `1. `, `2. `.

**Level**: match difficulty and notation to the course per the Spanish curriculum. Write in Spain Spanish.

## 6. Check the calculations

Students will rely on the solutions, so they must be correct. Before sending, verify every non-trivial result by running code (e.g. `node -e` for matrix products, determinants, inverses, systems, derivatives at specific points or probabilities). If you find a mistake, fix the statement or the solution.

## 7. Create the document and save the PDF

```bash
node .claude/skills/generate-exercises/scripts/generate.mjs create \
  --folder "2 Bachillerato / Matrices" \
  --file <path-to-md> \
  --out public/ejercicios/2-bach/matrices \
  [--base matrices] [--create-folders]
```

The script creates the Google Doc, downloads the PDF into `--out` with the same name as the Doc and prints a JSON summary. It never overwrites an existing PDF: if one exists, it stops and warns.

## 8. Report to the user

Reply briefly with: the document name, the Google Doc link, the PDF path and, if `failedEquations` is not empty, which formulas didn't render (they stay as `$$…$$` in the Doc and the user can render them with their plugin and re-export). Mention the decisions you made without asking (type, number of exercises, folder).

Don't commit or push unless the user asks.

## Troubleshooting

- `Clave no válida`: the key in `.env` doesn't match the one in the Google script. Ask the user to check it; don't try to guess it.
- `No existe la carpeta …`: check the `folders` list or ask whether to create it.
- Network errors or HTML instead of JSON: the URL in `.env` must be the «API Cowork» deployment's (access «Cualquier usuario») and end in `/exec`.
