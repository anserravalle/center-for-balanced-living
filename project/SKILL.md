---
name: cfbl-brand-design
description: Use this skill to generate well-branded interfaces and assets for the CFBL brand family — Center for Balanced Living (clinical practice), CFBL Institute (continuing education for clinicians), and MUSA (author and essays by Dr. Angela Serravalle). Contains essential design guidelines, three discrete color palettes, three typographic systems, brand voice rules, logos, and UI kit components for prototyping or production work.
user-invocable: true
---

# CFBL Brand Family — Design Skill

This skill contains the design system for three connected but distinct properties of Dr. Angela (Niki) Serravalle:

1. **Center for Balanced Living** — trauma-informed clinical practice (parent brand)
2. **CFBL Institute** — continuing education for licensed clinicians
3. **MUSA** — author platform for books, essays, and publications

## How to use this skill

1. **Read `README.md` first.** It has the full brand context, content fundamentals, visual foundations, and theme architecture plan.
2. **Use `colors_and_type.css`** as the source of truth for tokens. It scopes everything to `.brand-cfbl`, `.brand-institute`, and `.brand-musa` — set the class on `<body>` (or any container) and the right palette / type / button styles cascade automatically.
3. **Use `assets/`** for the real brand marks:
   - `cfbl-logo-rainbow.png` — CFBL parent only. Never on Institute or MUSA materials.
   - `institute-logo.png` — the official Institute lockup.
   - `cfbl-tree-portrait.jpeg` — CFBL hero image.
   - `musa-book-icon.png` — MUSA visual signature still-life.
4. **Use `ui_kits/`** as high-fidelity references when building new screens. Each kit has well-factored JSX components.
5. **Use `preview/`** to remind yourself how tokens look in context — these are the small specimen cards.

## Cross-brand rules — load-bearing

- Never mix palettes across brands within one piece of collateral.
- Never use the rainbow CFBL logo on Institute or MUSA materials.
- Never use the CFBL warmth-and-healing voice on Institute or MUSA copy.
- MUSA has no marketing CTAs. Readers self-subscribe.
- No emoji. No journey metaphors. No wellness clichés.

## When the user invokes without guidance

Ask which brand they're working in (CFBL / Institute / MUSA), what they want to build (page mock, section, full prototype, production Shopify section), and whether it's a throwaway mock or production code. Then act as an expert designer who outputs HTML artifacts or production code accordingly. If creating a static artifact, copy assets out of this folder into the artifact and use real images, not placeholders.
