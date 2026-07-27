# CFBL Social Media Playbook
_Living document — read this first each week, then update it with anything new we learn._
_Last updated: 2026-07-26_

## Purpose
Produce the weekly social assets from the planning spreadsheet while preserving CFBL's
strategy, voice, and branding. This file is the memory between weeks — decisions, preferences,
and workflow live here so each week starts smarter.

---

## Brands & color mapping (confirmed by Dr. Serravalle)
| Content | Brand | Palette | Fonts |
|---|---|---|---|
| Practice: evaluations, therapy, groups, staff, events, community | **CFBL** | **Navy + white** (navy `#2B5275`, white, warm sand accent `#EED9C5`, terracotta `#9D654E`) | Cormorant SC + Montserrat |
| Courses & trainings (Institute) | **CFBL Institute** | **Green + cream** (forest `#3D5A52`, sage `#6F8F7A`, cream `#EAE2D0`) | Cormorant SC + Lora + Inter |
| Writing: blog, newsletter (MUSA) | **MUSA** | **Gold + red** (oxblood `#6E1F23`, ochre `#C5A572`, bone `#F1E8D8`) | DM Serif Display + EB Garamond |

## Voice
Warm, authentic, emotionally safe, professional. Educate and build trust — never clickbait,
never manipulative, never invent workshops/dates/prices/credentials. Institute posts are
peer-to-peer (clinician audience); practice posts are warm and relational.

## Logos (keep sub-brands distinct — confirmed & fixed this week)
- **Practice posts** (evaluations, therapy, groups, community) → **Center for Balanced Living** logo.
- **Institute posts** (trainings/workshops) → **CFBL Institute** circular tree emblem.
- Never put the Institute emblem on a practice post (or vice versa).

## Look & feel (what she likes)
- The **Nature-Based EMDR** graphic is the north star: real photo integrated, warm, finished.
- Prefers **photo-forward + bolder** designs over plain typographic slides.
- **Real photography only — no AI-generated people.** AI portraits read as off for a clinical/trust brand; her real portrait + genuine session photos are the standard.
- Style system (v2): magazine-cover **photo frames** on title/closer slides (transparent window
  so a real photo drops in via Canva), **bolder content slides** (color fields, big watermark
  numerals, botanical leaf accent). Generator: `2026-07-27_week-*/src-v2/build.py`.
- Never cheesy stock. Prefer her own photos (portrait, office, Brianna, parent–child) or nature.

## Accounts & scheduling (Metricool — two brands)
- Two Metricool brands: **CFBL** (practice) and **Dr. Niki** (Institute + MUSA / "everything else").
- Each brand has its own Facebook, Instagram, LinkedIn (personal profile), TikTok, Google Business Profile.
- **Routing:** Institute/training/writing → Dr. Niki page. Practice (evaluations, groups, community) → CFBL page.
- **Instagram Collab:** on CFBL posts, add the Dr. Niki account as an IG Collaborator (appears on both feeds).
- **Google Business Profile:** single image only (no carousels/reels), no hashtags, short caption + CTA button + event dates. Best for local/event posts.
- Registration links all live on **balancedlivingde.com** (Shopify).

## Standing facts (verify each week; correct if changed)
- **Nature-Based EMDR:** Fri Aug 21, 2026, 12:00–3:00 PM ET, live Zoom, 3 EMDRIA credits.
- **Foundations of Trauma Therapy:** Sep 18–19, 2026, 9:00 AM–5:00 PM ET, 12 NBCC CE hours, beta cohort $200.
- **Parenting With Purpose:** begins **Fri Aug 21**, 5:00–6:00 PM, virtual, monthly, **free**, facilitated by **Brianna, Associate Counselor**. (Was Aug 14 in the sheet — corrected to Aug 21.)

## Production pipeline (repeatable)
1. Read the weekly planning `.xlsx` (every column) → map each row to brand + format.
2. Generate slides with `build.py` (HTML → Playwright `render.mjs` → 1080×1080 / 1080×1920 PNGs).
   Photo-frame slides render with a transparent window (`data-omit="true"`).
3. Build contact sheets, review, fix.
4. Commit to `marketing/<week>/` and open a draft PR.
5. Upload to a Canva folder (repo is public → raw GitHub URLs work with Canva upload).
   Nest the folder under **CFBL Templates — Spotlights & Brand Assets**.
6. Produce the Metricool scheduling sheet + bulk CSV (per-brand, first-comment hashtags, GBP short versions).

## Workflow rules
- Process one row at a time; read all columns before creating.
- Captions verbatim from the sheet (minor readability edits only); don't shorten educational copy.
- Use provided hashtags only. Never invent trending tags.
- If required info is missing (fee, facilitator, links), ask — don't invent.
- Nothing is auto-published; prepare for scheduling only.

## Open threads / next up
- MUSA **newsletter announcement** (gold/red) — newsletter drops ~mid-August; build when topic/date given.
- Consider a weekly Routine to auto-start production when a new planning sheet arrives.
- She adds real photos to the Canva frames herself (files too large to send to chat).
- No real "teaching/in-session" photos of Dr. Niki yet — use her portrait or nature stills in Institute covers/reels until a real training photo exists.
