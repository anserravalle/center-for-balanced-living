# CFBL Brand Family — Canva Brand System

> The Canva-side companion to this design system. It documents the three Brand
> Kits, the account folder taxonomy, and the **size matrix** for producing
> on-brand collateral (Instagram, LinkedIn, website) from a single canonical
> template per content type.
>
> Source of truth for tokens is `colors_and_type.css`. This file translates
> those tokens into a Canva operating manual so the workspace stays consistent
> as the team builds.

---

## 1. Brand Kits — target state & verification checklist

Canva hosts three Brand Kits, one per property:

| Brand Kit (Canva name) | Property | Use on |
|---|---|---|
| **Center for Balanced Living** | Parent · clinical practice | CFBL collateral only |
| **cfbl institute** | Teaching arm · CE for clinicians | Institute collateral only |
| **MUSA** | Author platform · books & essays | MUSA collateral only |

> ⚠️ The Canva Connect API is **read-only** for Brand Kits — colors, fonts, and
> logos must be set in the Canva UI (Brand → Brand Kits). Use the tables below
> to audit each kit and fix anything that drifts. Never mix one brand's palette,
> fonts, or logo into another brand's collateral.

### 1a. Center for Balanced Living — colors

| Role | Name | Hex |
|---|---|---|
| Primary / anchor (headlines, primary buttons) | Deep Navy | `#2B5275` |
| Secondary (accent, links) | Sky Blue | `#4E9FBF` |
| Default background ground | Sand | `#EED9C5` |
| Light tint | Sand Light | `#F5E7D6` |
| Lighter tint (variation) | Sand Pale | `#FAF1E6` |
| Earth accent (sparing) | Terracotta | `#9D654E` |
| Body text (never pure black) | Ink | `#1F2A33` |

**Fonts:** Display **Cormorant SC** · Body **Montserrat**.
**Logo:** `assets/cfbl-logo-rainbow.png` (rainbow tree). CFBL **only**.

### 1b. CFBL Institute — colors

| Role | Name | Hex |
|---|---|---|
| Anchor (buttons, rules, key ink) | Forest | `#3D5A52` |
| Primary chromatic accent | Sage | `#6F8F7A` |
| Soft section fields | Sage Mist | `#B8C9BC` |
| Sparing variation accent | Soft Sky | `#C2D7E9` |
| Default background ground | Cream | `#EAE2D0` |
| Lighter variation ground | Paper | `#F0EAE0` |
| Body text (never pure black) | Ink | `#2A3530` |

**Fonts:** Display **Cormorant SC** · Body **Lora** · Utility **Inter** (CE hours, dates, prices in `UPPERCASE`, tightly tracked).
**Logo:** `assets/institute-logo.png` (official lockup — Deep Navy type on Sage Mist ground). Never the rainbow CFBL mark.

> ⚠️ **Brand-kit tension (carried over from `README.md`).** The official Institute
> lockup uses Deep Navy `#2B5275` + Cormorant Garamond, while the Institute UI
> system uses Forest `#3D5A52` + Cormorant SC. Keep the lockup as supplied; the
> rest of the Institute kit follows Forest. Decide once and keep it consistent.

### 1c. MUSA — colors

| Role | Name | Hex |
|---|---|---|
| Signature accent (drop caps, links, pull quotes) | Oxblood | `#6E1F23` |
| Secondary accent / section rules | Ochre | `#C5A572` |
| Subheads, bylines, hairline rules | Walnut | `#4A4036` |
| Default paper ground | Bone | `#F1E8D8` |
| Archive / variation ground | Parchment | `#EDE0C8` |
| Body text (warmer than black) | Ink | `#1F1A16` |

**Fonts:** Display **DM Serif Display** · Body **EB Garamond** · Utility **Inter** (bylines `UPPERCASE`, very tightly tracked).
**Logo:** `MUSA` wordmark in DM Serif Display, Ink. No rainbow mark, no marketing CTAs.

### 1d. Verification checklist (do this in the Canva UI)

For **each** of the three kits, confirm:

- [ ] **Colors** match the hex tables above exactly (delete any stray/off-brand swatches).
- [ ] **Fonts** loaded are exactly this brand's set — no fonts from the other two brands present.
- [ ] **Logo** is the correct mark for this brand (and the rainbow CFBL mark appears in the CFBL kit *only*).
- [ ] Kit **name** is unambiguous (recommend renaming `cfbl institute` → `CFBL Institute` for title-case consistency).
- [ ] No leftover/test swatches from earlier exploration remain.

---

## 2. Folder taxonomy

The account already uses a deliberate **per-brand parent → numbered content-type
subfolder** scheme. Keep it. The canonical (populated) parents are:

| Parent folder | Folder ID | Status |
|---|---|---|
| `01 CFBL` | `FAHNlVt_qlM` | **Empty** — see cleanup note |
| `02 CFBL Team` | `FAHNlUMdOrk` | Team assets |
| `02 CFBL Institute` | `FAHNkwAfYlY` | **Canonical** (12 subfolders) |
| `03 CFBL Musa` | `FAHNk7YBgjE` | **Canonical** (10 subfolders) |

**Institute subfolders:** 01 Templates · 02 Courses · 03 Workshops · 04 Clinical
Pearls · 05 Presentations · 06 Speaking · 07 Blog Graphics · 08 Reels · 09
Photography · 10 Logo & Brand Assets · 11 Archive · 12 Quotes

**MUSA subfolders:** 01 Templates · 02 Essays · 03 Books · 04 Newsletter · 05
Website · 06 Reels · 07 Photography · 08 Logo & Brand Assests *(typo)* · 09
Archive · 10 Blog

### 2a. Cleanup checklist (UI — there is no delete-folder API)

- [ ] **Delete empty duplicate folders** created after the originals:
  - `02 CFBL Institute` **empty dupe** `FAHNla7vtZQ` (keep `FAHNkwAfYlY`)
  - `03 CFBL Musa` **empty dupe** `FAHNk-qaX1o` (keep `FAHNk7YBgjE`)
  - Old `CFBL Institute` `FAHJ1uIkQN4` — merge its contents into the canonical Institute parent, then delete.
- [ ] **Populate or remove** the empty `01 CFBL` parent (`FAHNlVt_qlM`). Recommended:
      make it the CFBL parent and give it the same content-type subfolders as the
      others (Templates, Service Pages, Evaluations, Quotes, Blog Graphics, …).
- [ ] **Fix the typo:** `08 Logo & Brand Assests` → `Logo & Brand Assets` (MUSA).
- [ ] **Normalize parent numbering** so the prefixes read cleanly, e.g.
      `01 Center for Balanced Living` · `02 CFBL Institute` · `03 MUSA`, with Team
      nested under CFBL. (Renames are UI-only.)

### 2b. Channel subfolders for sizing

Content-type subfolders answer "what is this post about." Sizing needs a second
axis — "what channel/dimension." Add these channel folders per brand (MUSA
already has `05 Website`):

- `LinkedIn` — square, portrait, link, and banner variants
- `Website` — hero, featured/OG, and card variants

> Today the `01 Templates` folders hold 20–30 **draft** variations each, all at
> Instagram portrait (4:5). They are not yet a curated one-per-type set — see §4.

---

## 3. Size matrix (LinkedIn + Website + Instagram)

Canonical export dimensions. The **1200×630** size is reused as both the
LinkedIn link-share image and the website `og:image`, so build it once.

### Instagram (already the working size)
| Use | Pixels | Ratio |
|---|---|---|
| Square post | 1080 × 1080 | 1:1 |
| Portrait post | 1080 × 1350 | 4:5 |
| Story / Reel cover | 1080 × 1920 | 9:16 |

### LinkedIn
| Use | Pixels | Ratio |
|---|---|---|
| Square feed post | 1080 × 1080 | 1:1 |
| Portrait feed post | 1080 × 1350 | 4:5 |
| Link / landscape post (also `og:image`) | 1200 × 627 | 1.91:1 |
| Article / newsletter cover | 1280 × 720 | 16:9 |
| Personal profile banner (Dr. Serravalle) | 1584 × 396 | 4:1 |
| Company page banner | 1128 × 191 | ~5.9:1 |

### Website (balancedlivingde.com — 1200px container)
| Use | Pixels | Ratio |
|---|---|---|
| Full-width hero | 1920 × 1080 | 16:9 |
| Section / inline banner | 1600 × 900 | 16:9 |
| Featured image / social share `og:image` | 1200 × 630 | 1.91:1 |
| Card / thumbnail (landscape) | 800 × 600 | 4:3 |
| Card / thumbnail (square) | 600 × 600 | 1:1 |
| Sidebar / portrait promo | 800 × 1000 | 4:5 |

---

## 4. Building size variants — the SOP

**Principle:** size *curated canonical* templates, not every draft. Resizing all
20–30 drafts × every dimension produces hundreds of low-quality auto-reflows.

For each content type (per brand):

1. **Pick one canonical master** from `01 Templates` (the best on-brand draft).
   Keep it at Instagram portrait 1080×1350 as the source of truth.
2. **Resize into the target dimensions** for the channels that content type
   needs (most need: LinkedIn link 1200×627, website featured 1200×630, website
   hero 1920×1080; add square/portrait as needed).
3. **Re-touch each variant** — Canva's auto-resize reflows layout; every variant
   needs a quick manual pass for safe margins, focal point, and type scale.
   Auto-resize is a starting point, never the finished asset.
4. **File** the variant in the brand's `LinkedIn` / `Website` channel folder.
5. Keep names channel-tagged, e.g. `Workshops — LinkedIn Link 1200x627`.

### Recommended canonical set (one per content type)
- **CFBL:** Service/Practice intro · Pathway/Community · Quote/Clinical pearl · Event/Speaking
- **Institute:** Course promo · Workshop announcement · Clinical Pearl · Quote
- **MUSA:** Essay cover · Book feature · Pull-quote · Newsletter cover

---

## 5. Cross-brand rules (load-bearing — same as `README.md`)

- Never mix palettes, fonts, or logos across brands in one piece of collateral.
- Rainbow CFBL logo on CFBL **only** — never Institute or MUSA.
- Never use CFBL's warmth-and-healing voice on Institute or MUSA copy.
- MUSA has **no marketing CTAs**; readers self-subscribe.
- No emoji. No exclamation points in headlines/CTAs. No journey metaphors or
  wellness clichés. Restraint, generous whitespace, clean alignment.

---

## 6. What was done programmatically vs. what needs the UI

**Done / doable via the Canva API (MCP):** create folders, move designs between
folders, copy designs, and **resize** a design into a new dimension.

**UI-only (no API):** editing Brand Kit colors/fonts/logos, deleting folders,
and renaming designs/folders. These are captured as checklists in §1d, §2a.

---

_Companion to `README.md` (brand context + rules) and `colors_and_type.css`
(token source of truth)._
