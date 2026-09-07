---
target: "Whole site: home, theory, exercises pages"
total_score: 31
max_score: 40
na_heuristics: 
p0_count: 1
p1_count: 2
target_identity: "file:/Users/omarcaja/p/agora-academy/Whole site: home page, theory page, exercises page"
timestamp: 2026-09-07T10-33-15Z
slug: whole-site-home-page-theory-page-exercises-page
---
Method: dual-agent (A: a36758509098b1bd7 · B: a419029e9e4660d88)

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3 | Search result count, TOC scrollspy work well; menu/accordion open state is never exposed via ARIA (see P1) |
| 2 | Match System / Real World | 3 | Correct E.S.O./Bachillerato vocabulary and theory-topic order; exercise topics are alphabetized, not taught order (P2) |
| 3 | User Control and Freedom | 4 | `/` and Cmd/Ctrl+K focus search, Escape closes, menu overlay is properly `inert`-gated, print is a real escape hatch |
| 4 | Consistency and Standards | 2 | DESIGN.md's own "focus ring on every `:focus-visible` element" rule is broken by `GlobalNav.astro` while `HeroTangent.astro` implements it correctly in the same codebase; a second, undocumented bounce-easing curve appears only in `GlobalNav.astro`'s accordion icon |
| 5 | Error Prevention | 4 | No forms by design, `rel="noopener noreferrer"` everywhere, PDFs open in a new tab |
| 6 | Recognition Rather Than Recall | 3 | Breadcrumbs/TOC/meta pills orient well; the always-expanded TOC substitutes a wall of text for the recall it avoids |
| 7 | Flexibility and Efficiency | 3 | `/` and Cmd/Ctrl+K work well on theory/exercises; no fuzzy matching or result-to-result keyboard nav in search |
| 8 | Aesthetic and Minimalist Design | 3 | Individual components are restrained; theory/exercise pages stack breadcrumbs + 3 meta pills + search + a fully-open TOC before any content |
| 9 | Error Recovery | 3 | Clear "no results" empty state next to a visible Clear button (largely n/a scope — static site, no error-prone flows) |
| 10 | Help and Documentation | 3 | The `/` kbd hint is adequate just-in-time help for a feature this simple |
| **Total** | | **31/40** | **Good** |

Both assessments scored all 10 heuristics (none genuinely inapplicable across a site that mixes Persuade and Read surfaces); no `n/a` heuristics this run.

## Design Specificity Verdict

**LLM assessment:** This does not read as a generic tutoring-site template. The strongest evidence is `src/components/HeroTangent.astro`: a hand-built, mathematically exact (quadratic-Bézier) interactive parabola with a real draggable tangent point, a live slope readout, full keyboard operability, and a spring-in entrance that performs its own subject matter instead of a generic fade. The single-ink risograph system (zero radius, zero-blur hard offset shadows, Space Mono throughout) is applied with real discipline across all three surfaces and both themes, and the pi-digit easter egg on a level-tag click is a genuinely on-brand, restrained flourish. Copy voice on `/theory/derivadas/` is plain and factual, matching PRODUCT.md's "no marketing filler" commitment. The one place specificity slips is structural: exercise topics are alphabetized by filesystem happenstance rather than taught in curriculum order — a generic-CMS behavior inside an otherwise bespoke system.

**Deterministic scan:** `impeccable detect --json src/pages src/components src/layouts` exited 2 with 22 findings: 20 `design-system-font-size` advisories and 2 `bounce-easing` warnings (both in `GlobalNav.astro`, lines 104 and 113 — an overshoot curve with no counterpart anywhere in DESIGN.md's single documented easing). One of the 20 font-size findings is a **false positive**: `LevelTags.astro:20` (`0.9rem`) is explicitly documented in DESIGN.md's Chips component spec ("`7px 15px` padding, 0.9rem at weight 700"). The other 19 (spread across `Footer.astro`, `Menu.astro`, `SearchBox.astro`, `TopicPager.astro`, `Breadcrumbs.astro`, `404.astro`, and a few spots already partially cleaned up in `index.astro`/theory/exercises this session) have no documented exception anywhere in DESIGN.md — real, if low-severity, type-ramp drift.

**Visual overlays:** No script-injection overlay was used this run — Assessment B inspected the live dev server directly (console, network, DOM/ARIA, computed contrast, real keyboard-Tab focus state) across all 3 pages × 2 widths × 2 themes rather than through the static `detect.js` browser overlay, which is the more informative path when a live server is already running. See Run Notes for what that substitution means for the "user-visible overlay" invariant.

## Overall Impression

The site is more deliberately crafted than the median generated site — the interactive parabola, the disciplined single-ink system, and the honest, filler-free copy all show real authorship, and this session's own work this conversation (uniform borders, one shared Label role, the desktop rhythm fix, the mobile hero peek) has already tightened several rough edges. But the two assessments converged, independently, on the same gap: the persistent navigation — the one piece of chrome present on literally every page — has no visible keyboard focus indicator and no ARIA state for its own open/closed toggles, which directly contradicts a rule DESIGN.md itself states as mandatory ("every `:focus-visible` element"). The single biggest opportunity is closing that gap in `GlobalNav.astro`, followed by getting mobile theory/exercise pages to show real content (a formula, a PDF) before a full screen of breadcrumb-and-TOC chrome, since that's the exact moment PRODUCT.md names as the priority use case.

## What's Working

1. **`HeroTangent.astro`'s interactive parabola** — a genuine ARIA `role="slider"` with synced `aria-valuenow`/`aria-valuetext` on both pointer drag and arrow keys, and the codebase's only fully-correct `:focus` vs `:focus-visible` split. Proof the team knows how to build this correctly; the nav's gap below is an inconsistency, not a skill gap.
2. **The single-ink shadow/border system in both themes** — Assessment B measured contrast ratios of 6.27:1–16.46:1 across every text/background pair tested, in both light and dark, on all three pages. Nothing came close to failing AA.
3. **Client-side search** — live-tested: typing "cadena" on `/theory/derivadas/` correctly surfaced matches with instant filtering, an `aria-live` count, and the TOC auto-hiding while filtering (search and TOC never fight for the same space).

## Priority Issues

**[P0] Primary nav controls have no visible keyboard focus indicator**
- **Why it matters**: `.nav-btn` (theme toggle, menu toggle) and `.nav-logo` in `src/components/GlobalNav.astro` are the first thing any keyboard user's Tab key lands on, on every single page (GlobalNav persists via `transition:persist`). Verified with real Tab presses, not scripted `.focus()`: all three report `outlineStyle: "none"` and `boxShadow: "none"` while focused, in both themes. This directly violates DESIGN.md's own rule ("Global focus ring: 3px solid ink... on every `:focus-visible` element") and PRODUCT.md's accessibility commitment to "visible keyboard focus."
- **Fix**: Delete the unconditional `outline: none` on `.nav-btn` (line 90) and `.nav-logo` (line 167) in `GlobalNav.astro`, or explicitly add the pattern already correct elsewhere in this codebase (`HeroTangent.astro`'s `.tangent-hit:focus-visible { outline: 3px solid var(--accent); outline-offset: 3px; }`) — the global `:focus-visible` rule in `global.css:165-167` should just be allowed to apply; something in `GlobalNav.astro` is overriding it.
- **Suggested command**: `$impeccable audit` (or a direct fix — this is a one-file, few-line change)

**[P1] Mobile theory/exercise pages bury content under chrome**
- **Why it matters**: On `/exercises/1-bach/` at 375px, breadcrumbs + 3 meta pills + search + a fully-expanded, non-collapsible `TableOfContents.astro` push the first PDF link to ~900px down the page against an ~812px viewport — over a full scroll before the thing the student came for appears. This directly contradicts PRODUCT.md's Product Principle #1 ("reach a single formula in seconds, on a phone") at exactly the moment it names as priority: exam night, on mobile. Compounding evidence: `TableOfContents.astro` has no `@media print` rule and isn't in `global.css`'s print block's hidden-selector list either — confirmed by grep — so it also prints, unlike every other piece of chrome (nav, search, breadcrumbs, pager, scroll-to-top all correctly hide in print).
- **Fix**: Default the TOC to a collapsed `<details>`-style disclosure on narrow viewports (e.g. "Índice (7 secciones) ▾"), and add it to the print-hidden list alongside the other chrome.
- **Suggested command**: `$impeccable layout` (mobile TOC collapse) + `$impeccable harden` (print stylesheet gap)

**[P1] Menu, accordion, and theme-toggle state is invisible to assistive tech**
- **Why it matters**: `grep -rn "aria-expanded\|aria-pressed" src` returns zero matches anywhere in the codebase. `#menuToggle` and every `.accordion-trigger` in `Menu.astro` (7 on the Bachillerato exercises menu alone) toggle CSS classes and open/close real content, but never set `aria-expanded`; `#themeToggle` never sets `aria-pressed`. A screen-reader user gets no programmatic signal that these controls are toggles, or what state they're in — confirmed by clicking each and re-reading the attribute (stayed `null` before and after in every case).
- **Fix**: Toggle `aria-expanded` alongside the existing `.active` class in `src/scripts/menu.js`'s `toggleMenu()` and `handleAccordionToggle()`; add `aria-pressed` to the theme toggle (it already correctly updates its sr-only label text, so the toggle logic exists — this just needs one more attribute write next to it).
- **Suggested command**: `$impeccable audit`

**[P2] Exercise topics are ordered alphabetically instead of how the subject is taught**
- **Why it matters**: `src/utils/discoverExercises.ts` sorts topics with `localeCompare`, producing "Estadística, Estadística bidimensional, Estadística unidimensional, Exámenes, Funciones, Límites, Probabilidad" on `/exercises/1-bach/` — alphabetical, not curricular. Theory topics already get a curated `menuOrder` field for exactly this reason; exercises don't, so the surface students use under the most time pressure has the least intentional ordering, and it undermines the "clean, well-organized" trust signal the rest of the site earns.
- **Fix**: Extend `src/data/exercises.ts` (which already has `topicTitleOverrides`) with an explicit order field per level, mirroring the theory pattern.
- **Suggested command**: `$impeccable clarify` or a direct fix (small, contained change)

**[P3] Scattered off-ramp type/easing values, and one stale design-doc claim**
- **Why it matters**: 19 real (non-false-positive) `design-system-font-size` findings sit outside DESIGN.md's 5-step type ramp, concentrated in `Footer.astro` (4 values), `Menu.astro` (5 values), plus one-offs in `SearchBox.astro`, `TopicPager.astro`, `Breadcrumbs.astro`, and `404.astro` — the same class of drift already cleaned up for the "Label" role elsewhere this session, just not yet in these files. Separately, `GlobalNav.astro`'s accordion-icon transition uses an overshoot/bounce curve (`cubic-bezier(0.175, 0.885, 0.32, 1.275)`) that appears nowhere else and isn't DESIGN.md's documented system curve (`cubic-bezier(0.16, 1, 0.3, 1)`). Separately again: DESIGN.md still describes the level-tag chip as carrying "a 4px ink left edge... the system's one recurring silhouette detail" — but this session deliberately removed that edge at your request, so the doc is now stale against a change you approved, not a defect to reverse.
- **Fix**: A `$impeccable typeset` pass on `Footer.astro`/`Menu.astro`/`404.astro` to fold their sizes onto the Label/Body/Title ramp (same pattern as the earlier `.meta-label` consolidation); align `GlobalNav.astro`'s accordion easing to the documented curve; update DESIGN.md's chip description to match the plain 2px border the chip now ships with.
- **Suggested command**: `$impeccable typeset`

## Persona Red Flags

**Riley (keyboard/stress-tester)**: Hits the missing focus ring within 1-3 Tab presses on *every* page — theme toggle, logo, and menu button all fail silently, in both themes. The single most reproducible failure in this review.

**Casey (distracted mobile student, exam night)**: On `/exercises/1-bach/`, has to scroll past ~900px of breadcrumb/pills/search/TOC before the first PDF link. Combined with the reveal-on-scroll animation's up-to-2-second failsafe timer, a slow phone could show a near-blank screen for a beat right when Casey needs the fastest possible path to a file.

**Jordan (a parent skimming for quality signals, first time on the site)**: Lands on an exercises page and sees topics in an order that doesn't match how the subject is actually taught — a small but real dent in the "clean, well-organized" trust signal the rest of the site works to earn.

## Minor Observations

- `Header.astro`'s `<h1>` has `user-select: none`, which blocks copying the page title text — an unusual choice with no stated reason.
- Nav/menu touch targets measured below the 44×44px guideline at mobile width: `.nav-btn` (theme/menu toggle) at 40px wide, `.nav-logo` at 20px wide, and two sampled `.accordion-trigger` rows at 31–38px tall. PDF cards and CTA buttons are all comfortably above 44px.
- The reveal-on-scroll pattern hides above-the-fold hero copy until an `IntersectionObserver` fires; bounded by a 2s failsafe, but worth a spot-check on a real low-power device.
- `SearchBox.astro`'s `/` kbd badge correctly hides at ≤480px, but its `aria-label` ("pulsa / para enfocar") still references the `/` key in that same mobile/touch context.
- KaTeX renders both MathML and HTML for every formula (standard practice) — worth one real screen-reader spot-check to confirm formulas aren't announced twice.
- Console errors, failed network requests, horizontal overflow, and missing `alt` text: all clean, zero findings, across all 12 page/width/theme combinations tested.
- Heading structure (h1→h2→h3, no skips) is correct on all three pages.

## Questions to Consider

- What if the TOC defaulted to a single collapsed line on mobile ("Índice (7 secciones) ▾") — would that alone close most of the gap between "student opens the page" and "student sees a formula," without touching the desktop layout at all?
- The interactive hero parabola proves the team can build fully-correct focus/ARIA states when it matters to them — what made the persistent nav, the one component on every page, the exception?
- Now that exercise topics have the same kind of curated-order need theory topics already solved, is there a shared "ordering" concept worth extracting once, rather than solving it twice?
