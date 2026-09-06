---
name: Ágora Academy
description: A single-ink risograph system for a maths academy in Cuenca. Flat colour, hard edges, zero blur.
colors:
  press-marine: "#0d5c8c"
  press-marine-strong: "#0a4a70"
  on-marine: "#f5f9fb"
  ink: "#1f1f1f"
  ink-soft: "#3a3a3a"
  ink-tertiary: "#4a4a4a"
  ink-muted: "#5a5a5a"
  paper: "#f4f4f4"
  paper-shade: "#e8e8e8"
  paper-raised: "#fdfdfd"
  press-marine-dark: "#5aa8d6"
  press-marine-dark-strong: "#7cc0e8"
  on-marine-dark: "#0e1a22"
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
    backgroundColor: "{colors.press-marine}"
    textColor: "{colors.on-marine}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "13px 20px"
  button-primary-hover:
    backgroundColor: "{colors.press-marine}"
    textColor: "{colors.on-marine}"
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
    backgroundColor: "{colors.press-marine}"
    textColor: "{colors.on-marine}"
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

The whole system behaves like a single-ink risograph print. One marine blue plate laid over paper stock, printed slightly out of register. That single idea explains every decision in this file: why nothing is rounded, why no shadow is ever blurred, why there is exactly one accent hue, and why colour is used as flat fill rather than as light. A risograph cannot render a gradient, a soft shadow, or a second accent without a second plate. Neither can this system.

The character is **precise and unfussy**, and **serious but not cold**. Nothing on the page is decorative. Every rule, border, offset and fill is doing a job: separating, marking, or indicating state. The restraint is not minimalism for its own sake but the honesty the product demands, because this academy has no photographs, no prices, no named staff and no testimonials to lean on. Credibility has to come from the accuracy and clarity of the material itself, so the system never performs warmth it cannot back up. It respects a fourteen-year-old revising at eleven at night without talking down to them.

The system is fully dual-mode. Light is ink on paper; dark is chalk on slate. These are the same plate printed on different stock, not two designs. Every token has a counterpart, and hierarchy, contrast and accent behaviour are identical in both.

**Key Characteristics:**
- One ink: a single marine blue accent across the entire site, no exceptions
- Zero radius everywhere, on every element
- Hard offset shadows with no blur, tinted to the ink, never black
- Monospace throughout, in the only two weights the family actually ships
- Flat fills only: no gradients, no glows, no translucency except the nav
- Light and dark are equal citizens, both meeting WCAG AA
- Print is a real output, not an afterthought

## Colors

A two-ink palette: one neutral stock and one marine blue plate, with a dark-mode counterpart for each.

### Primary

- **Press Marine Blue** (`#0d5c8c` light, `#5aa8d6` dark): the single ink plate. Used for fills that carry meaning (the primary button, the theory tile, the PDF icon block), for rules that mark a heading, for icons, and for the left edge of a level chip. It is the only chromatic colour in the system.
- **Press Marine Blue Strong** (`#0a4a70` light, `#7cc0e8` dark): the same ink, adjusted purely so small text clears WCAG AA against page surfaces. Used for link text, card call-to-action labels, and pager direction labels.
- **On Marine Blue** (`#f5f9fb` light, `#0e1a22` dark): the only colour permitted for text sitting on a marine blue fill.

### Neutral

- **Ink** (`#1f1f1f`) / **Chalk** (`#f2f2f2`): primary text, and every 2px border in the system. Text colour and border colour are deliberately the same value.
- **Ink Soft** (`#3a3a3a`) / **Chalk Soft** (`#dedede`): secondary text, subheadings.
- **Ink Tertiary** (`#4a4a4a`) / **Chalk Tertiary** (`#cccccc`): body paragraphs and long-form description text.
- **Ink Muted** (`#5a5a5a`) / **Chalk Muted** (`#a8a8a8`): captions, counts, metadata, placeholder text. Tuned to clear AA at small sizes, roughly 5.5:1 on the shaded surface.
- **Paper** (`#f4f4f4`) / **Slate** (`#161616`): the page ground.
- **Paper Shade** (`#e8e8e8`) / **Slate Shade** (`#202020`): cards, chips, boxed content. The default raised surface.
- **Paper Raised** (`#fdfdfd`) / **Slate Raised** (`#262626`): inputs and the table of contents. Reads as the freshest sheet in the stack.

### Named Rules

**The Single Plate Rule.** One accent hue for the entire site. A teal badge, a green success state, or an orange link is a second plate, and a second plate means this is no longer the same print. If a new state needs distinguishing, use ink weight, border, or fill, not a new hue.

**The Two Inks Rule.** `press-marine` is the graphic colour: fills, rules, icons, and large type. `press-marine-strong` is the only accent permitted on text below 18px against a page surface. Never swap them. Using the graphic colour for small body text fails contrast; using the strong colour for a large fill dulls the plate.

**The Ink Equals Border Rule.** Border colour and primary text colour are the same token value in both themes. Borders in this system are drawn ink, not a lighter separator.

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

Borders are the primary form-defining device: a 2px solid stroke in the ink colour on anything that is a discrete object, and a 1px `--rule-color` hairline (ink at 18% opacity, chalk at 22%) for dividers inside content. The level chip adds a 4px marine blue left edge, which is the system's one recurring silhouette detail and is echoed at card scale on the social card.

The only translucency in the entire system is the fixed navigation bar, which uses a `saturate(170%) blur(18px)` backdrop filter over an 82% opaque ground. It is deliberately the sole exception.

### Named Rules

**The Zero Radius Rule.** `--radius` is `0px` and stays `0px`. Do not introduce a rounded variant for a single component, and do not soften corners to make an element feel friendlier.

## Components

### Buttons

- **Shape:** square (0px radius), 2px solid border, `13px 20px` padding, label never wrapping to a second line at desktop.
- **Primary:** marine blue fill with On Marine Blue text and a matching marine blue border, offset standard shadow (`3px 3px 0`).
- **Ghost:** transparent fill, ink text, ink border, same padding and shadow.
- **Hover:** the button lifts *toward* the cursor, `translate(-2px, -2px)`, and its offset grows to `5px 5px 0`, as though the sheet has shifted further out of register. Any trailing arrow icon slides 3px right.
- **Active:** the button presses into the page, `translate(1px, 1px)`, offset shrinks to `1px 1px 0`.
- **Transition:** 0.28s on `cubic-bezier(0.16, 1, 0.3, 1)`, transform and box-shadow only.

### Chips

- **Style:** shaded surface, 2px ink border, plus a 4px Press Marine Blue left edge. `7px 15px` padding, 0.9rem at weight 700.
- **State:** static. The level chips are labels, not controls. They carry no pointer cursor and no hover lift, because they are not keyboard reachable and must not signal interactivity they do not offer.

### Cards / Containers

- **Corner Style:** square (0px).
- **Background:** shaded surface by default; the accent variant takes a full marine blue fill with On Marine Blue text; a tinted variant uses marine blue at 9% (light) or 12% (dark).
- **Shadow Strategy:** offset standard at rest, growing to `6px 6px 0` on hover with a `translate(-3px, -3px)` lift.
- **Border:** 2px solid ink, or 2px solid marine blue on the accent variant.
- **Internal Padding:** 22px for grid cells; 25px rising to 35px above 768px for boxed content.

### Inputs / Fields

- **Style:** raised surface, 2px solid ink border, square corners, offset light shadow (`2px 2px 0`). Native search decorations are stripped.
- **Focus:** the border switches to Press Marine Blue and the offset grows to `4px 4px 0`. Focus is never indicated by colour alone.
- **Placeholder:** Ink Muted at full opacity, never a lighter grey, so it clears AA against the raised surface.
- **Global focus ring:** 3px solid Press Marine Blue with a 3px offset on every `:focus-visible` element in the system.

### Navigation

- **Style:** fixed 48px bar, aligned to the shell width, with the system's only backdrop blur over an 82% opaque ground and a 1px hairline base.
- **Contents:** theme toggle, centred logo glyph, menu trigger. Three items, one line, at every viewport.
- **Overlay menu:** full-screen accordion. While open, the body scroll locks, the main content blurs 10px, and the overlay drops `inert` for correct focus containment.
- **Active state:** current page marked with `aria-current="page"` and ink-weight change, not colour alone.

### Signature Component: the bento tile

The homepage grid is the clearest expression of the world. Five items produce exactly five cells, never a padded blank. One cell spans two columns and takes the full marine blue plate; one takes the 9% tint; the rest sit on the shaded surface. Each carries a title, a description, a small uppercase count, and a call-to-action pinned to the bottom whose arrow slides right on hover. The grid runs 1 column, then 2 at 640px, then 3 at 960px.

## Do's and Don'ts

### Do:

- **Do** keep every corner square. `--radius` is `0px` system-wide.
- **Do** keep shadow blur at exactly `0` and tint the offset to the ink colour, never black.
- **Do** use one accent hue across the whole page, and pick between the two marine blue tokens by text size, per The Two Inks Rule.
- **Do** carry hierarchy with size, case, tracking and colour, using only Space Mono 400 and 700.
- **Do** make interactive elements lift toward the cursor on hover and press into the page on click, with transform and box-shadow only.
- **Do** design both themes at once and verify WCAG AA in each before shipping.
- **Do** gate every animation behind `prefers-reduced-motion`, and never let content visibility depend on an animation completing.
- **Do** state a grid's mobile collapse in the same component that defines it.
- **Do** treat print as a real output: keep the print stylesheet working and prevent formula cards from breaking across pages.

### Don't:

- **Don't** drift toward childish school branding: no primary-colour palettes, no mascots, no cartoon pencils or notebooks, no comic typefaces, no exclamation marks. The audience includes sixteen-year-olds studying for Bachillerato.
- **Don't** introduce a second accent hue for any reason, including success, warning, or category colour.
- **Don't** use font weights between 400 and 700. They do not exist in this family.
- **Don't** put an em-dash or en-dash in any visible string.
- **Don't** add a rounded corner, a blurred shadow, a gradient, or a glow to any component.
- **Don't** use backdrop blur anywhere except the fixed navigation bar.
- **Don't** give a non-interactive element a pointer cursor or a hover lift.
- **Don't** put a numbered or decorative eyebrow above a section heading.
- **Don't** fabricate photography, prices, staff names, testimonials or outcome statistics. None exist; their absence is the honest state of the product.
