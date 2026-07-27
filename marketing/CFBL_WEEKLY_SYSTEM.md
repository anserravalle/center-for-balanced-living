# CFBL Weekly Content System
_One repeatable pipeline → a Metricool bulk upload every week, across all 3 brands._
_Pairs with `CFBL_SOCIAL_PLAYBOOK.md` (the brand brain: voice, colors, logos, facts, routing)._

## The tools & who does what
| Stage | Tool | Job |
|---|---|---|
| Brand brain | **Playbook** (this repo) | Voice, colors, logos, standing facts, brand→page routing. Everything references it. |
| 1. Plan | **You + ChatGPT/Claude** | Fill the weekly plan (7 rows). Keep the content-mix rhythm below. |
| 2. Copy | **ChatGPT/Claude** | Draft captions + hashtags in brand voice (reusable prompt below). |
| 3. Design | **Canva** (templates) + **Gamma** (occasional) | Build slides from the photo-frame + bolder templates, per brand palette. |
| 4. Photos | **Your photo apps** | Fix/prep real photos → drop into the Canva frames. |
| 5. Assemble | **Claude (this repo)** | Host finished images → generate the **Metricool bulk CSV**. |
| 6. Schedule | **You + Metricool** | Import CSV → add IG Collab + Google versions → schedule. |

## Weekly cadence (repeatable)
- **Thu/Fri:** fill next week's **plan** (template) → generate **captions** (ChatGPT prompt below).
- **Weekend:** **design** in Canva (drop in photos). Gamma for any educational carousel/newsletter.
- **Monday:** hand finished PNGs to Claude → get the **bulk CSV** → **import to Metricool** → schedule.

## Content mix (community + marketing, every week)
Balance so it's not all promotion — this is what builds community *and* enrollment:
- **3 Educational / authority** (build trust): tips, "how to tell the difference," clinical insight.
- **2 Community / relational** (build connection): normalize, encourage, invite conversation.
- **2 Promotional** (enrollment, soft): a training, group, or service with a clear CTA.

Route by brand → page:
- **Center for Balanced Living** (practice: evaluations, therapy, groups, community) → **CFBL page**, navy/white, CFBL logo.
- **CFBL Institute** (trainings/workshops) → **Dr. Niki page**, green/cream, Institute logo.
- **MUSA** (blog, essays, newsletter) → **Dr. Niki page**, gold/red, MUSA styling.
- On CFBL-page Instagram posts, add **Dr. Niki as a Collaborator**.

## The one technical fix that makes bulk work
Metricool bulk import needs each image at a **public, permanent URL.** Canva/Google Drive share links do NOT work. Pick ONE permanent home:
- **Shopify Files** (you already have Shopify) — upload finished PNGs, copy the CDN URLs, or Claude uploads them for you. **Recommended.**
- **This GitHub repo** — attach finished PNGs to Claude; they're committed and get permanent raw URLs.

Weekly hand-off = **drop finished PNGs in one spot → Claude hosts them + builds the CSV.**

## Reusable ChatGPT / Claude caption prompt (paste this, then add your plan)
```
You are the social media copywriter for Center for Balanced Living (practice), CFBL Institute
(clinician trainings), and MUSA (writing). Voice: warm, authentic, emotionally safe, professional.
Educate and build trust — never clickbait, never manipulative, never invent dates/prices/credentials.
Institute posts are peer-to-peer (clinicians); practice posts are warm and relational.

For each row I give you (date, brand, format, topic, objective, CTA), write:
1) A caption in that brand's voice (don't shorten educational content).
2) 5–6 relevant hashtags (no invented trending tags) for the FIRST COMMENT.
3) A short 1–2 sentence Google Business Profile version (no hashtags) + a CTA button label.
Keep all facts exactly as I provide them. Ask me if anything required (fee, link, credential) is missing.

Here is this week's plan:
[paste rows]
```

## What Claude produces each week
- Renders/QCs the designed slides if needed, hosts the finished images, and outputs:
  - `METRICOOL_bulk-upload_<week>.csv` (date, time, brand, networks, caption, first comment, link, image URL)
  - A per-post schedule sheet (captions, IG Collab flags, Google short versions, times)
- Updates the Playbook with anything new we learn.
