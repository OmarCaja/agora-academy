---
name: Ágora Academy
description: A monochrome risograph system for a maths academy in Cuenca. Flat colour, hard edges, zero blur.
colors:
  ink: "#1f1f1f"
  ink-soft: "#3a3a3a"
  ink-tertiary: "#4a4a4a"
  ink-muted: "#5a5a5a"
  paper: "#f4f4f4"
  paper-shade: "#e8e8e8"
  paper-raised: "#fdfdfd"
  slate: "#161616"
  slate-shade: "#202020"
  slate-raised: "#262626"
  chalk: "#f2f2f2"
  chalk-soft: "#dedede"
  chalk-tertiary: "#cccccc"
  chalk-muted: "#a8a8a8"
typography:
  display:
    fontFamily: "Space Mono, ui-monospace, SFMono-Regular, Menlo, monospace"
    fontSize: "clamp(2.3rem, 1.6rem + 3.4vw, 4.1rem)"
    fontWeight: 700
    lineHeight: 1.08
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Space Mono, ui-monospace, SFMono-Regular, Menlo, monospace"
    fontSize: "clamp(1.95rem, 1.5rem + 2.2vw, 3.1rem)"
    fontWeight: 700
    lineHeight: 1.08
    letterSpacing: "-0.035em"
  title:
    fontFamily: "Space Mono, ui-monospace, SFMono-Regular, Menlo, monospace"
    fontSize: "clamp(1.5rem, 1.28rem + 1.1vw, 2.1rem)"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.015em"
  body:
    fontFamily: "Space Mono, ui-monospace, SFMono-Regular, Menlo, monospace"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.65
    letterSpacing: "normal"
  label:
    fontFamily: "Space Mono, ui-monospace, SFMono-Regular, Menlo, monospace"
    fontSize: "0.78rem"
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: "0.08em"
rounded:
  none: "0px"
spacing:
  xs: "10px"
  sm: "15px"
  md: "20px"
  lg: "40px"
  xl: "60px"
  2xl: "88px"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "13px 20px"
  button-primary-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "13px 20px"
  card:
    backgroundColor: "{colors.paper-shade}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "22px"
  card-accent:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.none}"
    padding: "22px"
  input-search:
    backgroundColor: "{colors.paper-raised}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "12px 68px 12px 42px"
  chip-level:
    backgroundColor: "{colors.paper-shade}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "7px 15px"
  nav-bar:
    backgroundColor: "rgba(250, 250, 250, 0.82)"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    height: "48px"
---

# Design System: Ágora Academy

## Overview

**Creative North Star: "The Riso Problem Set"**

The whole system behaves like a single-ink risograph print, and the ink is black. One plate of ink laid over paper stock, printed slightly out of register. That single idea explains every decision in this file: why nothing is rounded, why no shadow is ever blurred, why there is no chromatic accent, and why colour is used as flat fill rather than as light. A risograph cannot render a gradient, a soft shadow, or a second colour without a second plate. Neither can this system, and this system chose not to load one.

The character is **precise and unfussy**, and **serious but not cold**. Nothing on the page is decorative. Every rule, border, offset and fill is doing a job: separating, marking, or indicating state. The restraint is not minimalism for its own sake but the honesty the product demands, because this academy has no photographs, no prices, no named staff and no testimonials to lean on. Credibility has to come from the accuracy and clarity of the material itself, so the system never performs warmth it cannot back up. It respects a fourteen-year-old revising at eleven at night without talking down to them.

The system is fully dual-mode. Light is ink on paper; dark is chalk on slate. These are the same plate printed on different stock, not two designs. Every token has a counterpart, and hierarchy, contrast and accent behaviour are identical in both.

**Key Characteristics:**
- One ink: black on paper, no chromatic accent anywhere on the site
- Zero radius everywhere, on every element
- Hard offset shadows with no blur, tinted to the ink, never black
- Monospace throughout, in the only two weights the family actually ships
- Flat fills only: no gradients, no glows, no translucency except the nav
- Light and dark are equal citizens, both meeting WCAG AA
- Print is a real output, not an afterthought

## Colors

A one-ink palette: neutral stock, neutral ink, with a dark-mode counterpart for each. There is no second, chromatic plate — the accent that used to carry meaning (the primary button, the theory tile) is drawn in the same ink as the body text and borders, so it registers as tone and weight rather than as colour calling attention to itself.

### Accent

Fills, rules and icons that once took a chromatic hue now take **Ink** (`#1f1f1f` light, `#f2f2f2` dark) directly — the same value as body text and every border. Text sitting on that fill takes **Paper** (`#f4f4f4` light) or **Slate** (`#161616` dark), the page ground colour, giving maximum contrast without introducing a colour. Nothing distinguishes "accent" from "neutral" anymore, by design: hierarchy comes from fill versus outline, weight, and position, never from hue.

### Neutral

- **Ink** (`#1f1f1f`) / **Chalk** (`#f2f2f2`): primary text, and every 2px border in the system. Text colour and border colour are deliberately the same value.
- **Ink Soft** (`#3a3a3a`) / **Chalk Soft** (`#dedede`): secondary text, subheadings.
- **Ink Tertiary** (`#4a4a4a`) / **Chalk Tertiary** (`#cccccc`): body paragraphs and long-form description text.
- **Ink Muted** (`#5a5a5a`) / **Chalk Muted** (`#a8a8a8`): captions, counts, metadata, placeholder text. Tuned to clear AA at small sizes, roughly 5.5:1 on the shaded surface.
- **Paper** (`#f4f4f4`) / **Slate** (`#161616`): the page ground.
- **Paper Shade** (`#e8e8e8`) / **Slate Shade** (`#202020`): cards, chips, boxed content. The default raised surface.
- **Paper Raised** (`#fdfdfd`) / **Slate Raised** (`#262626`): inputs and the table of contents. Reads as the freshest sheet in the stack.

### Named Rules

**The Single Plate Rule.** No chromatic hue anywhere on the site. A teal badge, a green success state, a red accent, or an orange link is a second plate, and this print only has one. If a new state needs distinguishing, use ink weight, border, or fill, never a hue.

**The Ink Equals Border Rule.** Border colour, primary text colour, and the accent fill are the same token value in both themes. Borders, emphasis and calls to action are all drawn ink, not a lighter or chromatic separator.

## Typography

**Display Font:** Space Mono (with `ui-monospace, SFMono-Regular, Menlo, monospace`)
**Body Font:** Space Mono, the same family
**Label/Mono Font:** Space Mono, the same family

**Character:** One monospace family does everything. Space Mono's slab-ish terminals and wide, even rhythm suit a subject made of symbols, and the fixed advance width makes formulas, level names and counts line up without effort. Using one family for display and body is a deliberate constraint, not an omission: the system has no second voice to fall back on, so hierarchy has to be earned by size, case, tracking and colour.

### Hierarchy

- **Display** (700, `clamp(2.3rem, 1.6rem + 3.4vw, 4.1rem)`, line-height 1.08, tracking -0.035em): the homepage hero headline only. Tight negative tracking keeps a monospace headline from sprawling.
- **Headline** (700, `clamp(1.95rem, 1.5rem + 2.2vw, 3.1rem)`, line-height 1.08, tracking -0.035em): the page title on theory, exercise and 404 pages. Left-aligned, over a 2px rule.
- **Title** (700, `clamp(1.5rem, 1.28rem + 1.1vw, 2.1rem)`, line-height 1.2, tracking -0.015em): section headings and card titles.
- **Body** (400, 1rem, line-height 1.65): all running text. Constrained to roughly 46-52ch in lead paragraphs; the reading column caps at 820px.
- **Label** (700, 0.78rem, tracking 0.08em, uppercase): counts, metadata, pager direction. Used sparingly, and never as a decorative eyebrow above a section headline.

**Documented exceptions:** the footer wordmark (`.footer-logo`, "ÁGORA") sits outside this ramp at `1.3rem` with 3px tracking and an accent underline — a small logotype treatment, not running text. The full-screen mobile menu's top-level items (`.menu-item`, `.menu-group-title`) run `1.125rem`, growing to `1.25rem` above 768px — sized for a touch-target list, not the reading column, so they sit a half-step above Body rather than on it. Nested (second-level) menu items step back down to Body's `1rem`.

### Named Rules

**The Two Weights Rule.** Space Mono ships 400 and 700, roman and italic, and nothing else. Any value between them is a browser-synthesised fake that renders differently on every engine. Weights such as 500, 560 or 600 are forbidden; so are variable-font axes, which this family does not have.

**The No Em-Dash Rule.** Zero em-dashes (`—`) and zero en-dashes (`–`) in any visible string: headings, body, buttons, labels, alt text, and meta tags included. Use a comma, a full stop, parentheses, or a plain hyphen. This is verified across all built pages, not a preference.

**The Earned Eyebrow Rule.** Small uppercase tracked labels are not section decoration. At most one per three sections, and never merely to announce a heading that already announces itself. Numbered section eyebrows (`01`, `02`) are banned outright.

## Layout

The page runs on two fixed widths. **Shell** (1120px) governs composition: the homepage, and the fixed navigation bar, which aligns to the same edges so the logo and controls sit flush with the content column. **Measure** (820px) governs reading: theory pages, exercise pages and the 404, centred inside the shell.

The spacing scale is 10 / 15 / 20 / 40 / 60 / 88px. Section rhythm is 40px on mobile and 88px from 768px up; cards use 22px internal padding, boxed content 25px rising to 35px on desktop.

Composition is deliberately asymmetric. The hero is a 1.25fr / 0.75fr split from 900px, with the figure nudged 8px off the vertical centre. The "why" list uses a progressive indent (0, 8%, 16%, 24%) to give a stack of four items a diagonal edge instead of four identical rows. Every one of these asymmetries collapses to a single flat column below 900px; asymmetry is a desktop affordance, never a mobile one.

Breakpoints in use: 480, 600, 640, 768, 900, 960px. The navigation is a fixed 48px bar at all sizes and must always render on one line.

### Named Rules

**The Two Widths Rule.** Compose at 1120, read at 820. A page is one or the other, never an arbitrary third width, and the nav always aligns to the shell.

**The Collapse Rule.** Every asymmetric layout declares its sub-768px fallback in the same component. Indents flatten to zero, splits become one column, and no page may scroll horizontally at 375px.

## Elevation & Depth

This system has no lighting model. It has registration.

The signature shadow is a hard offset with **zero blur radius**: `5px 5px 0`, tinted to the foreground ink at low opacity (`rgba(31,31,31,0.32)` on light, `rgba(242,242,242,0.26)` on dark). It is not a shadow at all, conceptually. It is the second pass of the press, printed a few points out of register. That is why it never softens, never spreads, and is never black.

Depth is otherwise carried entirely by tonal layering: ground, shaded surface, raised surface. Three steps, no more.

### Shadow Vocabulary

- **Offset heavy** (`box-shadow: 5px 5px 0 var(--shadow-color)`): boxed content, the table of contents, PDF cards, level chips at rest.
- **Offset standard** (`box-shadow: 3px 3px 0 var(--shadow-color)`): buttons and bento cells at rest.
- **Offset light** (`box-shadow: 2px 2px 0 var(--shadow-color)`): the search input and other inline controls.
- **Offset pressed** (`box-shadow: 1px 1px 0 var(--shadow-color)`): the active/pressed state of any interactive element.

### Named Rules

**The Registration Rule.** Shadow blur is always `0`. A blurred, spread, or black shadow breaks the print metaphor instantly and is the single fastest way to make this system look like generic web UI.

**The Three Surface Rule.** Ground, shade, raised. If a design needs a fourth elevation step, the layout is wrong, not the palette.

## Shapes

Every corner in the system is square. `--radius` is `0px` and applies to buttons, cards, inputs, chips, icon blocks, the nav and the scroll-to-top control alike. There are no exceptions, not even for circular avatars or pill badges, because neither exists here.

Borders are the primary form-defining device: a uniform 2px solid stroke in the ink colour on every edge of a discrete object (chips included — no side is ever weighted differently from the others), and a 1px `--rule-color` hairline (ink at 18% opacity, chalk at 22%) for dividers inside content.

The only translucency in the entire system is the fixed navigation bar, which uses a `saturate(170%) blur(18px)` backdrop filter over an 82% opaque ground. It is deliberately the sole exception.

### Named Rules

**The Zero Radius Rule.** `--radius` is `0px` and stays `0px`. Do not introduce a rounded variant for a single component, and do not soften corners to make an element feel friendlier.

## Components

### Buttons

- **Shape:** square (0px radius), 2px solid border, `13px 20px` padding, label never wrapping to a second line at desktop.
- **Primary:** ink fill with paper (light) / slate (dark) text and a matching ink border, offset standard shadow (`3px 3px 0`).
- **Ghost:** transparent fill, ink text, ink border, same padding and shadow.
- **Hover:** the button lifts *toward* the cursor, `translate(-2px, -2px)`, and its offset grows to `5px 5px 0`, as though the sheet has shifted further out of register. Any trailing arrow icon slides 3px right.
- **Active:** the button presses into the page, `translate(1px, 1px)`, offset shrinks to `1px 1px 0`.
- **Transition:** 0.28s on `cubic-bezier(0.16, 1, 0.3, 1)`, transform and box-shadow only.

### Chips

- **Style:** shaded surface, uniform 2px ink border on all four sides. `7px 15px` padding, 0.9rem at weight 700.
- **State:** static. The level chips are labels, not controls. They carry no pointer cursor and no hover lift, because they are not keyboard reachable and must not signal interactivity they do not offer.

### Cards / Containers

- **Corner Style:** square (0px).
- **Background:** shaded surface by default; the accent variant takes a full ink fill with paper/slate text; a tinted variant uses ink at 9% (light) or chalk at 12% (dark).
- **Shadow Strategy:** offset standard at rest, growing to `6px 6px 0` on hover with a `translate(-3px, -3px)` lift.
- **Border:** 2px solid ink on every variant, including the accent variant.
- **Internal Padding:** 22px for grid cells; 25px rising to 35px above 768px for boxed content.

### Inputs / Fields

- **Style:** raised surface, 2px solid ink border, square corners, offset light shadow (`2px 2px 0`). Native search decorations are stripped.
- **Focus:** the border switches to ink-weight emphasis (unchanged colour) and the offset grows to `4px 4px 0`. Focus is never indicated by colour alone.
- **Placeholder:** Ink Muted at full opacity, never a lighter grey, so it clears AA against the raised surface.
- **Global focus ring:** 3px solid ink with a 3px offset on every `:focus-visible` element in the system.

### Navigation

- **Style:** fixed 48px bar, aligned to the shell width, with the system's only backdrop blur over an 82% opaque ground and a 1px hairline base.
- **Contents:** theme toggle, centred logo glyph, menu trigger. Three items, one line, at every viewport.
- **Overlay menu:** full-screen accordion. While open, the body scroll locks, the main content blurs 10px, and the overlay drops `inert` for correct focus containment.
- **Active state:** current page marked with `aria-current="page"` and ink-weight change, not colour alone.

### Signature Component: the bento tile

The homepage grid is the clearest expression of the world. Five items produce exactly five cells, never a padded blank. One cell spans two columns and takes the full ink plate; one takes the 9% tint; the rest sit on the shaded surface. Each carries a title, a description, a small uppercase count, and a call-to-action pinned to the bottom whose arrow slides right on hover. The grid runs 1 column, then 2 at 640px, then 3 at 960px.

## Do's and Don'ts

### Do:

- **Do** keep every corner square. `--radius` is `0px` system-wide.
- **Do** keep shadow blur at exactly `0` and tint the offset to the ink colour, never black.
- **Do** keep the accent monochrome: fills, rules and icons all draw from the same ink token as text and borders.
- **Do** carry hierarchy with size, case, tracking and colour, using only Space Mono 400 and 700.
- **Do** make interactive elements lift toward the cursor on hover and press into the page on click, with transform and box-shadow only.
- **Do** design both themes at once and verify WCAG AA in each before shipping.
- **Do** gate every animation behind `prefers-reduced-motion`, and never let content visibility depend on an animation completing.
- **Do** state a grid's mobile collapse in the same component that defines it.
- **Do** treat print as a real output: keep the print stylesheet working and prevent formula cards from breaking across pages.

### Don't:

- **Don't** drift toward childish school branding: no primary-colour palettes, no mascots, no cartoon pencils or notebooks, no comic typefaces, no exclamation marks. The audience includes sixteen-year-olds studying for Bachillerato.
- **Don't** introduce any chromatic hue for any reason, including success, warning, category colour, or a brand accent.
- **Don't** use font weights between 400 and 700. They do not exist in this family.
- **Don't** put an em-dash or en-dash in any visible string.
- **Don't** add a rounded corner, a blurred shadow, a gradient, or a glow to any component.
- **Don't** use backdrop blur anywhere except the fixed navigation bar.
- **Don't** give a non-interactive element a pointer cursor or a hover lift.
- **Don't** put a numbered or decorative eyebrow above a section heading.
- **Don't** fabricate photography, prices, staff names, testimonials or outcome statistics. None exist; their absence is the honest state of the product.
