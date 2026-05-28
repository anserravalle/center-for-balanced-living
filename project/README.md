# CFBL Brand Family — Design System

> A design system for the three connected properties of Dr. Angela (Niki) Serravalle, Psy.D., LPCMH, NCC: **Center for Balanced Living**, **CFBL Institute**, and **MUSA**.

This system supports the development of a custom Shopify 2.0 theme at **www.balancedlivingde.com** that hosts all three brand experiences under one site while keeping their visual, verbal, and editorial treatments distinct.

---

## The Brand Family

| Property | Role | Audience | Primary Color | Display Font | Body Font |
|---|---|---|---|---|---|
| **Center for Balanced Living** | Parent · clinical practice | Therapy clients, parents, community | Deep Navy `#2B5275` | Cormorant SC | Montserrat |
| **CFBL Institute** | Teaching arm · CE for clinicians | Licensed clinicians, supervisees | Forest `#3D5A52` | Cormorant SC | Lora |
| **MUSA** | Author platform · books & essays | General readers, clinicians | Oxblood `#6E1F23` | DM Serif Display | EB Garamond |

**Family resemblance principle.** CFBL and the Institute share Cormorant SC because they're clinically integrated. They diverge in palette and body type because their audiences differ. MUSA breaks both because it's intellectually independent from clinical service. What unites all three is design philosophy: **restraint, generous whitespace, clean alignment, never decorative**.

**Cross-brand rules — load-bearing.** Never mix palettes within one piece of collateral. Never use the rainbow CFBL logo on Institute or MUSA materials. Never use the CFBL warmth-and-healing voice on Institute or MUSA copy.

---

## Sources

This system was built from the **Brand Kit Master Reference (Version 1.0)** authored by Dr. Serravalle, plus three brand assets supplied by the user:

- `assets/cfbl-logo-rainbow.png` — primary CFBL tree mark
- `assets/cfbl-hero-path-to-healing.webp` — hero banner ("Your Path to Healing Starts Here")
- `assets/cfbl-tree-portrait.jpeg` — full-bleed brand image
- `assets/institute-logo.png` — official CFBL Institute lockup (Sage Mist ground, Deep Navy type)
- `assets/musa-book-icon.png` — MUSA visual signature still-life (books, candle, leaves, ink and pen)

No existing codebase or Figma file was provided. The current www.balancedlivingde.com site is referenced only for content continuity and SEO; **its design is not replicated** per the brief.

---

## Content Fundamentals

Each brand has its own voice. Treat the boundaries as load-bearing.

### CFBL — Warm, accessible, hopeful, clinically grounded
- **Pronouns.** "We" when referring to the practice as a team. Speak directly to the reader ("you").
- **Casing.** Title Case for headlines (Cormorant SC enforces this visually). Sentence case for body and CTAs.
- **Healing language is appropriate here.** This is the one place in the family where it belongs.
- **Avoid:** wellness clichés ("journey," "holistic" used loosely), guaranteed outcomes, motivational tone, casual or trendy register.
- **Tone reference:** an experienced licensed psychologist who is also a businesswoman — not an influencer.
- **CTAs:** *Schedule a consultation* · *Meet the team* · *Contact us*
- **Anchor lines from the brand:** "Healing happens in relationship." · "We pair evidence-based care with warmth, attunement, and a holistic approach to mind, body, spirit."

### CFBL Institute — Peer-to-peer, restrained, intellectually serious
- **Pronouns.** First-person when Dr. Serravalle authors; otherwise "CFBL Institute" with attribution. **Never** "we" as a vague collective.
- **Casing.** Title Case for course names. Utility text (CE hours, dates, prices) in `UPPERCASE` Inter, tightly tracked.
- **Assume competence.** Write toward clinicians who already know the material. Use clinical vocabulary without translating it. Cite when relevant.
- **Reject entirely:** healing language, journey metaphors, "holistic," "safe space," wellness phrasing, marketing CTAs, motivational tone.
- **Tone reference:** PESI catalog copy, EMDRIA continuing-education descriptions, Psychotherapy Networker — but more disciplined and less promotional.
- **CTAs:** *Register* · *Apply for CE credit* · *View prerequisites* — never *Begin your journey*.

### MUSA — First-person essayist with a clinical mind
- **Pronouns.** "I" — first-person, by name, on the page. Never "we."
- **Casing.** Sentence case for essay titles is acceptable; Title Case for book titles. Bylines `UPPERCASE` Inter, very tightly tracked.
- **Analytical, direct, intellectually serious, literary without being precious.** No healing language. No journey metaphors. No CTAs.
- **Reference points:** literary author sites (Maggie Nelson, Olivia Laing, Lucy Foulkes); serious essay platforms (Anne Helen Petersen's *Culture Study*, Maria Popova's *The Marginalian*, Roxane Gay's *The Audacity*).
- **Anti-references:** wellness blogs, therapist websites, Substacks with mood quotes.
- **No marketing CTAs.** MUSA publishes; readers find their own way to subscribe.

### Universal
- **No emoji.** Not in CFBL, not in Institute, not in MUSA.
- **No exclamation points** in headlines or CTAs.
- **No ALL-CAPS body copy.** Reserved for short utility text (tags, metadata, byline labels) with letter-spacing.
- **No em-dashes as decoration.** Use them as Dr. Serravalle does — in service of a clause.

---

## Visual Foundations

### Colors
Three discrete palettes — see `colors_and_type.css` and the Colors cards in the Design System tab. **Never mix palettes across brands** in a single piece of collateral. Each palette has one default *paper ground* (Sand / Cream / Bone) and one *anchor color* (Deep Navy / Forest / Oxblood) that does most of the typographic and CTA work.

### Type
Three pairings, locked. Body-text targets are large because long-form reading is the deliverable, especially for Institute and MUSA:
- CFBL — 17px body, 1.6 line height
- Institute — 18px body, 1.6 line height
- MUSA — 19px body, 1.65 line height

### Spacing
An 8-pixel base scale: 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96 / 128. Body content stays inside a 64ch (`--measure-prose`) measure for comfortable reading; the page container caps at 1200px.

### Backgrounds
**Paper grounds**, not gradients. Each brand has one default ground and one lighter variation (Sand → Sand Light; Cream → Paper; Bone → Parchment). No full-bleed photographic backgrounds behind text. No repeating patterns. No textures (Institute and MUSA in particular need this discipline). CFBL may use a single warm photographic hero per page; Institute and MUSA do not.

### Animation
**Minimal.** 120–320ms transitions on color/opacity only, easing `cubic-bezier(0.4, 0, 0.2, 1)`. No parallax. No scroll-driven animation. No bounce. No spring physics. No animated hero text. Reduced-motion users see no motion at all.

### Hover & press states
- **Hover** — primary buttons darken ~15% in lightness; outline buttons fill with their accent color and invert text. Links underline-thicken or shift to a darker shade — never change color hue.
- **Press** — no scale shrink. No haptic-style movement. Brief darken only.
- **Focus** — 2px solid outline in the current text color, 3px offset. Always visible for keyboard users.

### Borders & rules
**Single-weight hairlines only.** Brand-tinted (`--cfbl-rule`, `--inst-rule`, `--musa-rule`). No double borders, no dashed rules. MUSA has an Ochre rule reserved for essay-section breaks.

### Shadows
Three tokens (`shadow-sm/md/lg`) reserved for floating UI: dropdowns, modals. **Cards and sections sit flat.** Hierarchy comes from typography, whitespace, and color-blocked headers, not elevation.

### Transparency & blur
Used sparingly. CFBL hero text may sit over a 50–60% Sand veil on photographic imagery. Institute and MUSA never blur or overlay imagery — type leads.

### Corner radii
2–4 px maximum on inputs and buttons. **Never pill-shaped. Never `border-radius: 16px+`.** Cards are flat rectangles or have a 2px radius at most.

### Cards
- **CFBL service cards.** Sand-Light fill, Cormorant SC headline, Terracotta kicker, Sky-Blue arrow link. No shadow.
- **Institute training cards.** Paper fill, 2-px Forest top border, Inter kicker (`UPPERCASE`), Cormorant SC title, Lora abstract. No shadow.
- **MUSA essay cards.** No fill. Ochre 1-px top rule. DM Serif Display title, Walnut byline (`UPPERCASE`), EB Garamond lede.

### Imagery direction
- **CFBL** — soft, warm photography with painterly color (the rainbow tree is the visual signature). One image per page maximum.
- **Institute** — **no stock therapy/wellness photography.** Editorial portraits of presenters, paper textures, single hero images. Type-led otherwise.
- **MUSA** — **no stock photography of women writing in journals.** Book covers, editorial portraits, type-led essay leads. Vary lead composition across essays (some full-bleed Oxblood block; some bone ground with oversized Walnut headline; some small Ochre rule with centered title). Palette and type stay locked; composition changes.

### Layout rules (fixed elements)
- **Header** — sticky, brand-aware, 64–72 px tall. Background flips to the page's brand ground when scrolled past the hero.
- **Footer** — three labelled columns (CFBL, Institute, MUSA) + utility row. Always Cream-or-darker neutral so it sits below any brand context above it.
- **Page container** — `1200px` max, 24px gutter mobile / 48–96px desktop.

### The four-element discipline
Each brand has a "visual signature" — four elements that, applied consistently, make any piece instantly recognizable:

- **CFBL signature** — Sand ground · Cormorant SC headline in Deep Navy · single graphic accent · generous whitespace
- **Institute signature** — Cream paper field · Cormorant SC headline in Forest · single Forest button or hairline rule · Sage as primary chromatic accent
- **MUSA signature** — Bone paper ground · Walnut byline rule · Oxblood accent · Ink body · generous whitespace

---

## Iconography

The brand kit specifies no icon system. **The disciplined choice is to use icons sparingly and consistently** — clinical and editorial sites both suffer from icon clutter.

**Recommended approach:**
- **Use [Lucide](https://lucide.dev) icons via CDN.** Stroke-based, restrained, no fills. Stroke width `1.5` for Institute and MUSA (lighter weight feels editorial); `1.75` for CFBL (slightly warmer presence).
  ```html
  <script src="https://unpkg.com/lucide@latest"></script>
  ```
- **Never use emoji.** Not in any brand.
- **Never use unicode glyphs as decoration** (✓, ★, ♥, etc.). Build the indicator with a Lucide icon if one is needed.
- **Where icons are appropriate** — pathway cards (CFBL homepage), credential / CE-hours tags (Institute), social-link rail in footer. Never in headlines.
- **Where icons are inappropriate** — essay body (MUSA), service-page hero (CFBL), training-page abstract (Institute), inline with running text anywhere.
- **Color** — icons inherit the brand anchor color (Deep Navy / Forest / Oxblood) at full weight, or Walnut/Deep-Ink at 70% for utility.

> ⚠️ **Substitution flagged:** Lucide is a closest-match substitute, not part of the original brand kit. If the team prefers a different set (Phosphor, Tabler, custom), swap globally and update this README.

**Logos provided:**
- `assets/cfbl-logo-rainbow.png` — the rainbow CFBL tree mark. Use on the parent brand only. Never on Institute or MUSA materials.
- Institute uses the **official lockup** supplied by the user (`assets/institute-logo.png`): "Center for Balanced Living" set in Cormorant SC small caps above "CFBL Institute" in Cormorant Garamond regular, with an italic Cormorant tagline below. All type is **Deep Navy `#2B5275`** on a **Sage Mist `#B8C9BC`** ground. The MUSA wordmark is `MUSA` set in DM Serif Display in Ink.

> ⚠️ **Brand-kit tension flagged.** The Institute brand kit specifies **Forest `#3D5A52`** as the anchor color and Cormorant *SC* for headlines, but the official Institute lockup uses **Deep Navy `#2B5275`** and Cormorant *Garamond* (no small caps). We've honored the actual logo for the lockup itself; the rest of the Institute UI follows the brand kit (Forest anchor, Cormorant SC headlines). If you'd prefer the Institute site to lean Deep Navy to match the logo, that's a single variable swap in `colors_and_type.css` — say the word.

**Brand imagery provided:**
- `assets/cfbl-hero-path-to-healing.webp` — existing hero banner from the current site (kept for SEO/content continuity reference; not required to reuse visually).
- `assets/cfbl-tree-portrait.jpeg` — the brand image (rainbow tree in field). Use as full-bleed CFBL hero.

> ⚠️ **No Institute or MUSA imagery has been supplied.** If/when editorial photography is commissioned (presenter portraits for Institute; book covers and author photo for MUSA), drop them in `assets/institute/` and `assets/musa/` and the UI kits will pick them up.

---

## Font Substitutions

All five brand typefaces are loaded from Google Fonts via `@import` in `colors_and_type.css`:
- **Cormorant SC** — Google Fonts ✓ (exact match, no substitution needed)
- **Montserrat** — Google Fonts ✓
- **Lora** — Google Fonts ✓
- **DM Serif Display** — Google Fonts ✓
- **EB Garamond** — Google Fonts ✓
- **Inter** — Google Fonts ✓ (utility text on Institute & MUSA)

> No font file substitutions were necessary. If the production Shopify theme self-hosts fonts for performance, the same six families are available from Google Fonts as WOFF2.

---

## Shopify Theme Architecture (recommended)

Although this design system is presentational (HTML/CSS UI kits, not Liquid), it is structured to slot directly into a Shopify 2.0 theme.

### Folder structure (target Shopify theme)
```
theme/
├─ assets/
│  ├─ base.css                  # global resets, layout, type defaults
│  ├─ brand-cfbl.css            # CFBL-specific variable block + overrides
│  ├─ brand-institute.css       # Institute-specific block
│  ├─ brand-musa.css            # MUSA-specific block
│  ├─ components.css            # buttons, forms, cards, nav
│  ├─ sections.css              # section-level layouts
│  └─ logos / hero imagery
├─ config/
│  └─ settings_schema.json      # global theme settings (brand mode, palettes, logos)
├─ layout/
│  └─ theme.liquid              # injects brand class on <body> from page metafield
├─ sections/
│  ├─ hero-brand.liquid
│  ├─ pathway-cards.liquid
│  ├─ service-cards.liquid
│  ├─ split-content.liquid
│  ├─ featured-training.liquid
│  ├─ featured-essay.liquid
│  ├─ book-feature.liquid
│  ├─ team-grid.liquid
│  ├─ testimonial-quote.liquid
│  ├─ newsletter-signup.liquid
│  ├─ contact-cta.liquid
│  ├─ faq-accordion.liquid
│  ├─ resource-grid.liquid
│  ├─ event-list.liquid
│  ├─ editorial-archive.liquid
│  ├─ brand-intro.liquid
│  └─ three-branch-overview.liquid
├─ snippets/
│  ├─ brand-vars.liquid         # outputs <body class="brand-{{ brand }}">
│  ├─ button-primary.liquid
│  ├─ button-secondary.liquid
│  ├─ card-service.liquid
│  ├─ card-training.liquid
│  ├─ card-essay.liquid
│  ├─ card-book.liquid
│  ├─ breadcrumb.liquid
│  ├─ seo-schema.liquid
│  └─ form-field.liquid
└─ templates/
   ├─ index.json
   ├─ page.json
   ├─ page.cfbl.json
   ├─ page.institute.json
   ├─ page.musa.json
   ├─ page.service.json
   ├─ page.evaluation.json
   ├─ page.training.json
   ├─ page.book.json
   ├─ page.speaking.json
   ├─ page.contact.json
   ├─ blog.essays.json
   ├─ article.essay.json
   ├─ collection.trainings.json
   ├─ product.training.json
   ├─ product.book.json
   └─ product.digital-resource.json
```

### Brand-context strategy
1. Each page or product template carries a `brand` metafield (`cfbl`, `institute`, or `musa`).
2. `layout/theme.liquid` reads the metafield and emits `<body class="brand-{{ brand | default: 'cfbl' }}">`.
3. All CSS variables in `colors_and_type.css` are scoped to `.brand-cfbl`, `.brand-institute`, `.brand-musa` — so the same section markup re-skins automatically.
4. Section schemas can additionally override brand context for hybrid pages (e.g. the homepage shows CFBL hero + an Institute preview block — the Institute block wraps in `<div class="brand-institute">` locally).

This means **one set of Liquid sections** serves all three brands. There is no per-brand section duplication.

### Maintainability notes for Shopify
- Keep all brand variables in `colors_and_type.css` (a single file the team can audit and version).
- Section schemas should expose only **content** fields, not visual ones — visual treatment comes from the brand context.
- Use Shopify metafields for `brand`, `pathway`, and `cta_label` on products so merchandisers don't need theme access.
- Use `{% liquid %}` blocks and avoid nested `{% if %}` spaghetti. Prefer snippets for any branch repeated more than once.
- Use `<picture>` with WebP + JPEG fallback for hero imagery. Lazy-load below-the-fold images.
- Inline critical CSS (the brand-active block only) and async-load the rest.

---

## Index — what lives where

| File / Folder | Purpose |
|---|---|
| `README.md` | This file. Brand context, content rules, visual foundations, theme plan. |
| `colors_and_type.css` | All CSS variables (palettes, type, spacing, radii, shadows) and brand-scoped defaults. The single source of truth. |
| `SKILL.md` | Agent-skill frontmatter so this design system can be invoked by Claude or Claude Code. |
| `assets/` | Logos, hero imagery, brand photography. |
| `preview/` | Small HTML cards that populate the **Design System** tab. Read these to see tokens in context. |
| `ui_kits/cfbl/` | High-fidelity homepage + service-page mock for Center for Balanced Living. |
| `ui_kits/institute/` | Training catalog + course detail mock for CFBL Institute. |
| `ui_kits/musa/` | Essay archive + single-essay reading mock for MUSA. |

Each UI kit has its own `README.md` listing the components it ships and the screens it demonstrates.

---

## Version

Design system v0.1 · derived from Brand Kit Master Reference v1.0.
