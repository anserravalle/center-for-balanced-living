# CFBL Weekly Social — Source (Week of Jul 27–Aug 2, 2026)

These are the source templates used to render the week's social assets. Each `rowN.html`
holds one post's slides as fixed `.canvas` frames (1080×1080 squares, 1080×1920 reel frames),
styled with the CFBL brand system.

## Files
- `rowN.html` — slide templates (row2 = Mon carousel … row8 = Sun comparison carousel)
- `brand.css` — social asset system derived from `project/colors_and_type.css`
- `warm.css` — warm sand/botanical composition for the CFBL photo-free graphics
- `render.mjs` — Playwright script; screenshots every `.canvas` to `out/`
- `assets/branch.svg` — botanical sprig motif

## Rebuild
Two build inputs are **not** committed (they are large and regenerable):

1. **`fonts/fonts-embedded.css`** — brand webfonts (Cormorant SC, Montserrat, Lora, Inter)
   inlined as base64. Regenerate by downloading the Google Fonts CSS for those families and
   embedding each `.woff2` as a `data:` URI.
2. **`assets/cfbl-tree-logo.png`** — copy from `project/assets/cfbl-logo-rainbow.png`.

Then:
```bash
npm install playwright-core
node render.mjs row2.html row2   # → out/row2-*.png
```
Rendered PNGs live in `../deliverables/`.

## Brand mapping
- **CFBL Clinical** → `.brand-cfbl` (navy #2B5275 / sand #EED9C5 / terracotta #9D654E)
- **CFBL Institute** → `.brand-institute` (forest #3D5A52 / sage #6F8F7A / cream #EAE2D0)
