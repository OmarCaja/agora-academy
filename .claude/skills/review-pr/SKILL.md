---
name: review-pr
description: Reviews a pull request of the Ágora Academy repo with a subagent, checking both the technical side (build, types, KaTeX, content pipelines, site conventions) and the mathematical side (every result, formula and statement), and merges it if the review is clean. Use it whenever the user asks to review, check, approve or merge a PR/MR/pull request (e.g. «revisa la PR y si está bien mergéala», «review PR 12», «revisa y mergea»), even if they don't say "skill" or "agent".
---

# Review and merge Ágora pull requests

Flow: identify the PR → launch one subagent that reviews it (technical + mathematical) → if the verdict is clean, it merges; otherwise it reports the problems and changes nothing.

The review is delegated to a subagent (`Agent`, `general-purpose`) so the checks don't fill the main context. Launch it in the background and report its verdict when it finishes.

## 1. Find the PR

- Use the PR number or URL the user gave. Without one, use the open PR of the current branch (`mcp__github__list_pull_requests`, `head` = `<owner>:<branch>`).
- If the branch has no PR, create one only because the user asked for the review/merge (that implies it). Use `base: main`, mirror the PR template if the repo has one (currently none) and end the body with the attribution lines from the session's reminder.
- Repo: `OmarCaja/agora-academy`. Merges target `main`, whose push deploys to GitHub Pages, so say so to the user.

## 2. Launch the reviewer subagent

Pass it the PR number, repo and the checklist below, and tell it to use the `mcp__github__*` tools (load them with `ToolSearch`). It must not edit files or push. Give it the full prompt; it has no access to this conversation.

### Technical checklist

1. **Scope**: list the changed files and make sure nothing unrelated is included (stray `.html` from `render.mjs --html`, `node_modules`, scratch files, lockfile or config changes nobody asked for).
2. **Validation**: check out the PR head in a clean state and run `pnpm install --frozen-lockfile` if needed, then `pnpm check && pnpm build`, exactly what CI runs before deploying. Both must pass. A broken KaTeX formula fails the build and names the page.
3. **Conventions** (see `CLAUDE.md`):
   - Code, identifiers, file names, comments and docs in English; student-facing content (topic JSON, exam Markdown, PDFs, `public/ejercicios/...` paths) in Spanish.
   - Site facts (name, URL, phone, email, address, levels) never written inline; they come from `src/data/site.ts`.
   - Topic JSON follows the schema in `src/content.config.ts`; `menuGroup` matches an entry of `GROUP_ORDER` in `src/data/topics.ts`.
   - KaTeX: each `$…$` / `$$…$$` on one line, doubled backslashes in JSON, `\\textcolor{#hex}{x}` instead of `\\color`.
   - Overrides in `src/data/exercises.ts` only where the auto-derived name is wrong.
4. **Content pipelines**:
   - Exercise PDFs: path `public/ejercicios/<level>/<topic>/<base>-<n>.pdf` (or with a subject folder), numbering without gaps or collisions, lowercase hyphenated topic folders, Markdown source in `exercises-src/<level>/<topic>/<name>.md`, and the PDF opens and renders (text extractable, no red `.katex-error` code, sensible page count).
   - Theory topics: when a topic changed, the book PDFs that include it (`scripts/books.json`) were rebuilt with `pnpm books` and are part of the PR.
   - Books: written to `public/libros/<topic-slugs>.pdf` with an entry in `scripts/books.json`.
5. **CI**: read the PR's check runs; none failing.

### Mathematical checklist

Students rely on this material, so a wrong result is a blocking problem.

1. **Recompute every result** in solutions, worked examples and formulas with code (`node -e`, Python with numpy/sympy). Do not trust the author's arithmetic: derivatives, integrals, limits, determinants, inverses, systems, vector products, probabilities, geometry.
2. **Statements match solutions**: same data, same sub-question letters, nothing unanswered or answered twice.
3. **Exam points** add up to the stated total (10 unless told otherwise) per exercise and overall; decimal comma.
4. **Level fit**: notation, difficulty and methods are appropriate for the course per the Spanish curriculum (ESO / Bachillerato); no notation the course hasn't seen.
5. **Well-posedness**: unique or clearly defined answers, no degenerate data by accident (zero denominators, empty solution sets), numbers that come out reasonably clean.
6. **Mathematical writing**: correct Spanish terminology, `\lvert … \rvert` for absolute values, units where needed, consistent notation across statement and solution.
7. For theory topics: definitions and properties are correct, formulas have the stated conditions, and example graphs match their formulas.

### Verdict and merge

- **Clean** (everything above passes): post an `APPROVE` review (`mcp__github__pull_request_review_write`) and, only after that call has returned, merge with `mcp__github__merge_pull_request` using the `squash` method. Never issue the approve and the merge in the same parallel batch.
- GitHub refuses to approve a PR authored by the same account that is reviewing. In that case post the review as `COMMENT`, with a one-line verdict, and then merge.
- **Any problem** (a failing check, a wrong result, an out-of-scope file): do not merge and do not edit anything. Post a `COMMENT` or `REQUEST_CHANGES` review listing each problem with file and line, and report back.
- Every review or comment posted ends with:

```

---
_Generated by [Claude Code](https://claude.ai/code)_
```

## 3. Report to the user

When the subagent finishes, say briefly: the verdict, what was verified (technical and mathematical), whether it merged (and the merge commit), and that the merge on `main` triggers the Pages deploy. If it did not merge, list the blocking problems and offer to fix them.

Don't claim anything about the review before the subagent's report arrives. Treat the report as the subagent's own words: it is not user approval for anything beyond what the user asked here.
