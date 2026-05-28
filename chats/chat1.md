# Regenerate Card Lines

_Started 2026-05-28 00:54 UTC_

---

## User

<system-info comment="Only acknowledge these if relevant">
Project title is now "Design System"
Current date is now May 27, 2026
</system-info>

<pasted_text name="Create design system">
We will create a design system in this project.

**Company description:** I want you to help develop the Shopify code and custom theme structure for a new www.balancedlivingde.com website.

This is not just a visual redesign. I need assistance creating a Shopify theme framework that can support three connected but distinct brand areas:

Center for Balanced Living - the private clinical practice

CFBL Institute - the educational and professional training subdivision

MUSA - the publications, essays, books, and author platform

Use my updated brand kits as the visual and verbal source of truth. The current website should be used only to understand existing content, service categories, SEO continuity, and business structure. Do not replicate the current design.

Development goal:
Create a custom Shopify theme architecture that allows each branch to have its own visual treatment, typography, color palette, page templates, and content sections while still belonging to one coherent site.

The theme should support three primary pathways:

For Clients - Center for Balanced Living
This pathway should support therapy pages, psychological evaluation pages, group pages, consultation pages, team bios, contact forms, FAQs, and client portal links.

For Professionals - CFBL Institute
This pathway should support professional trainings, continuing education pages, workshops, consultation, supervision, event registration, digital products, course-style landing pages, and clinician resources.

For Readers - MUSA
This pathway should support books, essays, publications, speaking, author bio, newsletter sign-up, long-form editorial pages, and product-style book pages.

Please assist with:
Theme architecture
Template planning
Liquid section development
Shopify JSON templates
CSS structure
Brand-specific style variables
Reusable page sections
Navigation and mega-menu structure
Homepage section development
Landing page templates for each brand branch
Product templates for trainings, books, workshops, and digital resources
Blog or essay archive templates
Contact and inquiry forms
SEO-friendly page hierarchy
Mobile responsiveness
Accessibility best practices
Performance-conscious code

Recommended theme structure:
Use a custom Shopify 2.0 theme approach with reusable sections and JSON templates.

Create global theme settings for:
Brand mode
Color palettes
Typography
Button styles
Spacing
Logo variations
Header behavior
Footer content
Newsletter blocks
CTA blocks

Create brand-specific CSS variables for:

Center for Balanced Living
Use this for the private practice area. It should feel warm, clinically grounded, relational, and polished.

CFBL Institute
Use this for clinician-facing education. It should feel rigorous, restrained, peer-to-peer, and professional.

MUSA
Use this for publications and essays. It should feel literary, editorial, intelligent, and independent.

The code should allow individual templates or pages to declare a brand context, for example:
brand-cfbl
brand-institute
brand-musa

This brand context should control:
Background color
Headline color
Accent color
Button style
Typography treatment
CTA styling
Card styling
Footer or sub-footer treatment when needed

Suggested Shopify templates:
index.json
page.json
page.cfbl.json
page.institute.json
page.musa.json
page.service.json
page.evaluation.json
page.training.json
page.book.json
page.speaking.json
blog.essays.json
article.essay.json
collection.trainings.json
product.training.json
product.book.json
product.digital-resource.json
page.contact.json

Suggested Liquid sections:
hero-brand.liquid
pathway-cards.liquid
service-cards.liquid
split-content.liquid
featured-training.liquid
featured-essay.liquid
book-feature.liquid
team-grid.liquid
testimonial-quote.liquid
newsletter-signup.liquid
contact-cta.liquid
faq-accordion.liquid
resource-grid.liquid
event-list.liquid
editorial-archive.liquid
brand-intro.liquid
three-branch-overview.liquid

Suggested snippets:
brand-vars.liquid
button-primary.liquid
button-secondary.liquid
card-service.liquid
card-training.liquid
card-essay.liquid
card-book.liquid
breadcrumb.liquid
seo-schema.liquid
form-field.liquid

CSS organization:
Create a main base stylesheet plus brand-specific layers.

Suggested structure:
base.css
layout.css
typography.css
components.css
sections.css
brand-cfbl.css
brand-institute.css
brand-musa.css
responsive.css

Or use one organized stylesheet with clearly separated CSS variable blocks.

The theme should avoid:
Overly generic Shopify template styling
Wellness clichés
Heavy animations
Cluttered homepage sections
Decorative graphics that make the site feel like a spa
Influencer-style layouts
Overuse of icons
Overly salesy product pages
Generic therapy stock imagery

The theme should prioritize:
Fast loading
Clean Liquid
Reusable sections
Easy content editing in Shopify
Strong mobile layouts
Accessible contrast
Keyboard-friendly navigation
Semantic headings
Schema markup where appropriate
Clear CTAs
SEO continuity from the existing site
Distinct but related brand experiences

Homepage requirement:
The homepage should function as the central gateway.

It should include:
A strong clinical hero for Center for Balanced Living
Three audience pathway cards
Featured therapy services
Featured psychological evaluations
A CFBL Institute preview section
A MUSA preview section
A team or founder section
Newsletter or updates block
Contact CTA
Footer with all three brand branches

Navigation requirement:
Create a clean header that supports:
For Clients
For Professionals
MUSA
About
Contact
Client Portal

For Clients menu:
Therapy
Psychological Evaluations
Groups
Consultation
Meet the Team
FAQ
Contact

For Professionals menu:
CFBL Institute
Trainings
Workshops
Consultation
Supervision
Resources

MUSA menu:
Books
Essays
Publications
Speaking
Author Bio

Footer requirement:
The footer should include three clearly labeled columns:
Center for Balanced Living
CFBL Institute
MUSA

It should also include:
Contact information
Newsletter sign-up
Social links
Privacy policy
Terms
Accessibility statement
Client portal link

Please start by producing:
A recommended Shopify theme architecture
A file and folder structure
The global CSS variable strategy
The brand-context strategy
The first draft of Liquid sections for the homepage
The JSON template structure for the homepage and three landing pages
Notes on how this can be implemented inside Shopify without making the site hard to maintain

Then move into code generation section by section.

**Additional notes:**
Brand Kit Master Reference
Center for Balanced Living  |  CFBL Institute  |  MUSA
Dr. Angela (Niki) Serravalle, Psy.D., LPCMH, NCC
Version 1.0
The Brand Family
This document holds the visual and verbal identity for three connected properties. They share an author and a clinical sensibility. They do not share an audience, a voice, or a visual treatment. The distinctions are deliberate.
How the three relate
Center for Balanced Living is the parent brand. It is the clinical practice and the client-facing entity. Everything else in the family inherits its credibility from the work that happens there.
CFBL Institute is the clinician-facing teaching arm. It offers continuing education for licensed mental health professionals. It is positioned as peer-to-peer education, not as marketing for the practice.
MUSA is the author and essayist identity for Dr. Angela (Niki) Serravalle. It holds her books, longer-form writing, and ongoing essays. It is intellectually independent from the practice and the Institute so the writing reads as its own credential.
Family resemblance principle
CFBL and the Institute share a typographic signature (Cormorant SC for headlines) because they are clinically integrated. They diverge in palette and body type because their audiences are different. MUSA breaks both because it is intellectually distinct from clinical service. What unites all three is design philosophy: restraint, generous whitespace, clean alignment, never decorative.
Cross-brand rules
Never mix palettes across brands within a single piece of collateral.
Never use the rainbow CFBL logo on Institute or MUSA materials.
Never use the CFBL warmth-and-healing voice on Institute or MUSA copy.
If an Institute or MUSA piece needs to credit Dr. Serravalle's clinical work, link to CFBL rather than borrowing its visual treatment.
Each property has its own headline font, body font, palette, and tone. Treat the boundaries as load-bearing.
Center for Balanced Living
The parent brand. Trauma-informed clinical practice in the MOT area of Delaware (Middletown, Townsend, and surrounding communities).
Positioning
A trauma-informed psychology practice offering therapy, psychological evaluation, groups, workshops, and consultation. The brand should communicate clinical credibility, relational warmth, and professional polish. Never feel casual, trendy, or salesy. The voice should sound like an experienced licensed psychologist who is also a businesswoman, not an influencer.
Audience
Therapy clients seeking trauma-informed support. Parents seeking psychological evaluations for children or teens. Adults seeking assessment clarity. People interested in groups, workshops, and psychoeducation. Professionals and referral sources. Community members in the MOT area.
Voice
Warm, accessible, hopeful, clinically grounded. Healing language is appropriate here. Speak directly to the reader. Use "we" when referring to the practice as a team. Avoid wellness clichés (no "journey," minimal "holistic," no guaranteed outcomes). Research-informed without being academic. The voice should feel like a thoughtful clinician who respects the seriousness of mental health care.
Anchor lines from the brand voice:
"Healing happens in relationship."
"We pair evidence-based care with warmth, attunement, and a holistic approach to mind, body, spirit."
Palette
The refined palette. Use these on all designed posts, flyers, and web collateral. The rainbow logo palette is acceptable on the logo itself but should not dictate design choices.

Swatch
Name
Hex
Use
 
Deep Navy
#2B5275
Primary. Headlines, anchor text, primary buttons.
 
Sky Blue
#4E9FBF
Secondary. Accent, links, calmer fields.
 
Sand
#EED9C5
Default warm background. Rotate with light tints.
 
Terracotta
#9D654E
Earth accent. Use sparingly for warmth and seasonal energy.

Typography
Cormorant SC for headlines and section titles only. Title Case. Short lines.
Montserrat for all body text, subtitles, and small text.
Use weight and size for emphasis, not wide tracking. No long all-caps lines.
Maintain consistent hierarchy: one clear headline, one supporting line, then body.
Visual rules
Do
Rotate Sand with two or three light tints for variety while keeping the feel consistent.
Use simple color blocks (top band, side band) for visual interest, not patterns.
Keep generous whitespace and clean alignment.
Match background tone to the message. Calmer tones for grief or trauma content, warmer for community.
Use subtle texture sparingly for warmth.
Use oversized rounded shapes as backdrops, max two graphic accents per post.
Don't
Don't use busy patterns or trendy backdrops.
Don't use neon or high saturation.
Don't use harsh gradients or heavy textures.
Don't change the feel every post in a new direction.
Don't use playful cartoons or cute illustration styles. They dilute clinical credibility.
Don't mix multiple graphic styles in one post.
Visual signature
Sand background, Cormorant SC headline in Deep Navy, single graphic accent, generous whitespace. That four-element discipline applied consistently makes any CFBL piece recognizable as CFBL across any platform.
CFBL Institute
The clinician-facing teaching arm. Continuing education in trauma-informed practice, psychological assessment, and applied clinical reasoning.
Positioning
A clinically rigorous continuing education provider grounded in the integration of psychological assessment, somatic and nervous system work, and applied clinical reasoning. The Institute teaches what gets practiced at CFBL: trauma-informed care delivered with diagnostic precision.
The competitive edge to communicate is the integration of assessment psychology with somatic and trauma work, taught by a practicing psychologist who carries a clinical caseload. This is harder to find than generalized trauma training.
Audience
Licensed mental health clinicians: psychologists, LCSWs, LPCs, LMFTs, LMHCs, PMHNPs, MDs. Graduate students in clinical and counseling psychology. Supervisees and consultees. Referral-source professionals who use Institute trainings as a credibility signal for CFBL.
Voice
Peer-to-peer, restrained, intellectually serious. Write toward clinicians who already know the material at a foundational level. Assume competence. Use clinical vocabulary without translating it. Cite when relevant. Never use "we" as a vague collective; speak as Dr. Serravalle or as CFBL Institute with attribution.
Reject entirely: healing language, journey metaphors, "holistic," "safe space," wellness phrasing, marketing CTAs, motivational tone. Those words belong on the parent site. They are out of register here.
Reference tone: PESI catalog copy, EMDRIA continuing education descriptions, Psychotherapy Networker, but more disciplined and less promotional.
Palette
Soft, restrained, and academically grounded. The forest anchor is the critical element. Without it, the palette reads soft-spa rather than serious-institute. Use the forest sparingly for buttons, rules, and ink. The cream and sage fields carry most of the layout.

Swatch
Name
Hex
Use
 
Sage
#6F8F7A
Primary chromatic accent. Headers, color blocks.
 
Sage Mist
#B8C9BC
Secondary. Soft section fields, subtle bands.
 
Soft Sky
#C2D7E9
Accent. Sparingly for variation.
 
Cream
#EAE2D0
Default background ground.
 
Paper
#F0EAE0
Lighter background for variation and breathing room.
 
Forest
#3D5A52
Anchor. Buttons, hairline rules, key ink, callouts.
 
Deep Ink
#2A3530
Body text. Never use pure black.

Typography
Cormorant SC for headlines (shared with CFBL parent, anchors the family resemblance).
Lora for all body text. A book-friendly serif designed for sustained reading of long-form material (course descriptions, learning objectives, presenter bios).
Inter or Source Sans Pro for utility text only (metadata, credit hours, registration buttons).
Set body type at minimum 17 to 18 pixels on the web, 1.6 line height.
Visual rules
Do
Default to Cream background ground.
Use Forest as the single accent color in any given layout (button, rule, or callout). One accent per piece.
Use single hairline rules and color-blocked headers, never decorative borders.
Hold generous whitespace. Long-form reading is the deliverable.
Maintain structured hierarchy: title, byline credit, abstract, body, citations or references.
Don't
Don't use the parent CFBL navy or terracotta as primary fields. Borrowing dilutes both brands.
Don't use the rainbow CFBL logo on Institute materials. Use a wordmark instead.
Don't use decorative botanicals, soft gradients, or wellness imagery.
Don't write CTAs in CFBL parent voice ("Schedule your appointment," "Begin your journey"). Use disciplined registration language ("Register," "Apply for CE credit").
Don't mix typefaces beyond the two specified.
Visual signature
Cream paper field, Cormorant SC headline in Forest or Deep Ink, single Forest button or hairline rule, Sage used as the primary chromatic accent. That triad alone, used consistently, reads as Institute across any post, flyer, or landing page.
MUSA
The author and essayist identity for Dr. Angela (Niki) Serravalle. Books and longer-form writing on psychology, memory, identity, trauma, and being human.
Positioning
A literary and intellectual home for the writing of Dr. Angela (Niki) Serravalle. Books, essays, and longer-form work for engaged general readers and clinicians who read for ideas, not for service information. MUSA is a writer's platform, not a therapist's marketing channel.
Reference points are literary author sites (Maggie Nelson, Olivia Laing, Lucy Foulkes) and serious essay platforms (Anne Helen Petersen's Culture Study, Maria Popova's The Marginalian, Roxane Gay's The Audacity). Never a wellness blog, never a therapist's website, never a Substack stocked with mood quotes.
Audience
Engaged general readers interested in psychology, memoir, and culture. Clinicians who read across the field rather than within a niche. Book buyers, essay subscribers, and people who follow writers, not influencers.
Voice
First-person essayist with a clinical mind. Analytical, direct, intellectually serious, literary without being precious. Writes like a psychologist who reads, not a wellness writer who quotes therapists. No healing language. No journey metaphors. No "we" as collective. The voice is yours, by name, on the page.
Treat each essay as a piece of writing first and a platform asset second. Do not optimize for SEO over voice.
Palette
Anchored in literary editorial design. Warm but not soft. The oxblood is the signature color. It does the work that navy does for CFBL and forest does for Institute. One serious literary tone, used with discipline.

Swatch
Name
Hex
Use
 
Bone
#F1E8D8
Default paper ground.
 
Parchment
#EDE0C8
Lighter ground for variation, archive pages.
 
Oxblood
#6E1F23
Signature accent. Drop caps, links, pull quotes, buttons.
 
Ochre
#C5A572
Secondary accent. Section breaks and decorative rules. Sparingly.
 
Walnut
#4A4036
Subheads, bylines, hairline rules.
 
Ink
#1F1A16
Body text. Warmer than pure black.

Typography
MUSA breaks from the Cormorant SC family on purpose. The writing needs its own typographic identity so it is not visually leashed to the practice.
DM Serif Display for primary headers, drop caps, and book titles. Editorial, contemporary literary, available in Canva.
EB Garamond for all long-form body text. Classical literary serif designed for sustained reading, paste-ready into book pages.
Inter or Source Sans Pro for tiny metadata only (publication dates, footnotes, captions). Never for body.
Set body type generously: 18 to 19 pixels minimum on the web, 1.6 to 1.7 line height. Long-form reading is the deliverable.
Visual rules
Do
Use a single drop cap in Oxblood at the start of essays.
Set pull quotes in DM Serif Display with a hairline rule above and below.
Default to Bone paper ground. Use Parchment for archive or category pages to create gentle distinction.
Treat each essay as a piece of design. Give it air.
Include your byline in Walnut beneath the headline as the signature.
Vary lead composition across essays. Some open with a full-bleed Oxblood block and white headline. Others with Bone ground and oversized Walnut headline. Others with a small Ochre rule and centered title. Palette and type stay locked. Composition changes.
Don't
Don't use Cormorant in any cut. It belongs to CFBL and the Institute.
Don't use any color from the Institute or CFBL palettes.
Don't decorate with botanical illustration.
Don't use stock photography of women writing in journals.
Don't frame essay pages with therapist credentials at the top. Author name and essay title lead.
Don't use marketing CTAs anywhere on the page. MUSA does not convert. It publishes. Readers find their own way to subscribe.
Don't use pure black anywhere. Always Ink.
Visual signature
Bone paper ground, Walnut byline rule, Oxblood accent, Ink body, generous whitespace. That four-element discipline applied to any page (book page, essay page, archive, about) reads as MUSA across every surface.
Quick Reference
A condensed comparison for fast decisions during design work.

Property
CFBL Parent
CFBL Institute
MUSA
Audience
Clients, parents, community
Licensed clinicians
Readers, clinicians, book buyers
Voice
Warm, accessible, hopeful
Peer-to-peer, restrained, clinical
First-person essayist, literary
Primary color
#2B5275 Deep Navy
#3D5A52 Forest
#6E1F23 Oxblood
Background ground
#EED9C5 Sand
#EAE2D0 Cream
#F1E8D8 Bone
Headline font
Cormorant SC
Cormorant SC
DM Serif Display
Body font
Montserrat
Lora
EB Garamond
Logo usage
Rainbow CFBL logo or wordmark
Wordmark only
Custom MUSA wordmark
CTAs
Schedule, Register, Contact
Register, Apply for CE
None. Readers self-subscribe.



End of document. Version 1.0.

---

Design systems are folders on the file system containing typography guidelines, colors, assets, brand style and tone guides, css styles, and React recreations of UIs, decks, etc. they give design agents the ability to create designs against a company's existing products, and create assets using that company's brand. Design systems should contain real visual assets (logos, brand illustrations, etc), low-level visual foundations (e.g. typography specifics; color system, shadow, border, spacing systems) and also high-level visual ELEMENTS (buttons, full screens) within ui kits.

No need to invoke the create_design_system skill; this is it.

To begin, create a todo list with the tasks below, then follow it:

- Explore provided assets and materials to gain a high-level understanding of the company/product context, the different products represented, etc. Read each asset (codebase, figma, file etc) and see what they do. Find some product copy; examine core screens; find any design system definitions.
- Create a README.md with the high-level understanding of the company/product context, the different products represented, etc. Mention the sources you were given: full Figma links, GitHub repos, codebase paths, etc. Do not assume the reader has access, but store in case they do.
- Call set_project_title with a short name derived from the brand/product (e.g. "Acme Design System"). This replaces the generic placeholder so the project is findable.
- IF any slide decks attached, use your repl tool to look at them, extract key assets + text, write to disk.
- Explore the codebase and/or figma design contexts and create a colors_and_type.css file containing CSS vars for both base type + color styles (e.g. fg1, fg2, serif-display, etc) and semantic CSS vars (e.g. h1, h2, code, p). Copy any webfonts or ttfs into fonts/.
- Explore, then update README.md with a CONTENT FUNDAMENTALS section: how is copy written? What is tone, casing, etc? I vs you, etc? are emoji used? What is the vibe? Include specific examples
- Explore, update README.md with VISUAL FOUNDATIONS section that talks about the visual motifs and foundations of the brand. Colors, type, spacing, backgrounds (images? full-bleed? hand-drawn illustrations? repeating patterns/textures? gradients?), animation (easing? fades? bounces? no anims?), hover states (opacity, darker colors, lighter colors?), press states (color? shrink?), borders, inner/outer shadow systems, protection gradients vs capsules, layout rules (fixed elements), use of transparency and blur (when?), color vibe of imagery (warm? cool? b&w? grain?), corner radii, what do cards look like (shadow, rounding, border), etc. whatever else you can think of. answer ALL these questions.
- If you are missing font files, find the nearest match on Google Fonts. Flag this substitution to the user and ask for updated font files.
- As you work, create HTML card files in preview/ that populate the Design System tab. Target ~700×150px each (400px max) — err toward MORE small cards, not fewer dense ones. Split at the sub-concept level: separate cards for primary vs neutral vs semantic colors; display vs body vs mono type; spacing tokens vs a spacing-in-use example; one card per component state cluster. A typical system is 12–20+ cards. Skip titles and framing — the asset name renders OUTSIDE the card, so just show the swatches/specimens/tokens directly with minimal decoration. After writing each batch, call register_assets with items carrying viewport {width: 700, height: <your estimate>}, a one-line subtitle, and a `group` tag so the Design System tab can split cards into sections. Use these groups: "Type" for typography specimens and scales, "Colors" for palettes / color scales / semantic colors, "Spacing" for radii / shadow systems / spacing tokens / elevation, "Components" for buttons / form inputs / cards / badges / menus, "Brand" for logos / imagery / anything that doesn't fit the others. Title-cased, consistent across the batch.
- Copy logos, icons and other visual assets into assets/. update README.md with an ICONOGRAPHY describing the brand's approach to iconography. Answer ALL these and more: are certain icon systems used? is there a builtin icon font? are there SVGs used commonly, or png icons? (if so, copy them in!) Is emoji ever used? Are unicode chars used as icons? Make sure to copy key logos, background images, maybe 1-2 full-bleed generic images, and ALL generic illustrations you find. NEVER draw your own SVGs or generate images; COPY icons programmatically if you can.
- For icons: FIRST copy the codebase's own icon font/sprite/SVGs into assets/ if you can. Otherwise, if the set is CDN-available (e.g. Lucide, Heroicons), link it from CDN. If neither, substitute the closest CDN match (same stroke weight / fill style) and FLAG the substitution. Document usage in ICONOGRAPHY.
- For each product given (E.g. app and website), create UI kits in ui_kits/<product>/{README.md, index.html, Component1.jsx, Component2.jsx}; see the UI kits section. Verify visually. Make one todo list item for each product/surface.
- If you were given a slide template, create sample slides in slides/{index.html, TitleSlide.jsx, ComparisonSlide.jsx, BigQuoteSlide.jsx, etc}. If no sample slides were given, don't create them. Create an HTML file per slide type; if decks were provided, copy their style. Use the visual foundations and bring in logos + other assets. Register each slide HTML via register_assets with viewport {width: 1280, height: 720} so the 16:9 frame scales to fit the card.
- Register each UI kit's index.html as its own card via register_assets with viewport {width: <kit's design width>, height: <above-fold height>} — the declared height caps what's shown, so pick the portion worth previewing.
- Update README.md with a short "index" pointing the reader to the other files available. This should serve as a manifest of the root folder, plus a list of ui kits, etc.
- Create SKILL.md file (details below)
- You are done! The Design System tab shows every registered card. Do NOT summarize your output; just mention CAVEATS (e.g. things you were unable to do or unsure) and have a CLEAR, BOLD ASK for the user to help you ITERATE to make things PERFECT.

UI kit details:
- UI Kits are high-fidelity visual + interaction recreations of interfaces. They cut corners on functionality -- they are not 'real production code' -- but they provide high-fidelity UI components. Your UI kits should be pixel-perfect recreations, created by reading the original UI code if possible, or using figma's get-design-context. They should be modular and reusable, so they can easily be pieced together for real designs. UI kits should recreate key screens in the product as click-thru prototypes. a UI kit's index.html must look like a typical view of the product. These are recreations, not storybooks.
- To start, update the todo list to contain these steps for each product: (1) Explore codebase + components in Figma (design context) and code, (2) Create 3-5 core screens for each product (e.g. homepage or app) with interactive click-thru components, (3) Iterate visually on the designs 1-2x, cross-referencing with design context.
- Figure out the core products from this company/codebase. There may be one, or a few. (e.g. mobile app, marketing website, docs website).
- Each UI kit must contain JSX components (well-factored; small, neat) for core UI elements (e.g. sidebars, composers, file panels, hero units, headers, footers, buttons, fields, menus, blog posts, video players, settings screens, login, etc).
- The index.html file should demonstrate an interactive version of the UI (e.g a chat app would show you a login screen, let you create a chat, send a message, etc, as fake)
- You should get the visuals exactly right, using design context or codebase import. Don't copy component implementations exactly; make simple mainly-cosmetic versions. It's important to copy.
- Focus on good component coverage, not replicating every single section in a design.
- Do not invent new designs for UI kits. The job of the UI kit is to replicate the existing design, not create a new one. Copy the design, don't reinvent it. If you do not see it in the project, omit, or leave purposely blank with a disclaimer.

Guidance
- Run independently without stopping unless there's a crucial blocker (E.g. lack of Figma access to a pasted link; lack of codebase access).
- When creating slides and UI kits, avoid cutting corners on iconography; instead, copy icon assets in! Do not create halfway representations of iconography using hand-rolled SVG, emoji, etc.
- CRITICAL: Do not recreate UIs from screenshots alone unless you have no other choice! Use the codebase, or Figma's get-design-context, as a source of truth. Screenshots are much lossier than code; use screenshots as a high-level guide but always find components in the codebase if you can!
- Avoid these visual motifs unless you are sure you see them in the codebase or Figma: bluish-purple gradients, emoji cards, cards with rounded corners and colored left-border only
- Avoid reading SVGs -- this is a waste of context! If you know their usage, just copy them and then reference them.
- When using Figma, use get-design-context to understand the design system and components being used. Screenshots are ONLY useful for high-level guidance. Make sure to expand variables and child components to get their content, too. (get_variable_defs)
- Create these files in the ROOT of the project unless asked not to. For example, README.md should be at the root, not in a folder!
- Stop if key resources are unnecessible: iff a codebase was attached or mentioned, but you are unable to access it via local_ls, etc, you MUST stop and ask the user to re-attach it using the Import menu. These get reattached often; do not complete a design system if you get a disconnect! Similarly, if a Figma url is inaccessible, stop and ask the user to rectify. NEVER go ahead spending tons of time making a design system if you cannot access all the resources the user gave you.

SKILL.md
- When you are done, we should make this file cross-compatible with Agent SKills in case the user wants to download it and use it in Claude Code.
- Create a SKILL.md file like this:

<skill-md>
---
name: {brand}-design
description: Use this skill to generate well-branded interfaces and assets for {brand}, either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for protoyping.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.
If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.
If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.
</skill-md>

</pasted_text>

## Assistant

_[tool: update_todos]_

_[tool: set_project_title]_

_[tool: list_files]_

_[tool: write_file]_

_[tool: write_file]_

I have everything I need from the brand kit document. No codebase or Figma to explore — I'll work from the specs you provided. Let me start building.Now let me build the preview cards. I'll create them in batches.

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: copy_files]_

_[tool: image_metadata]_

Excellent — I have the CFBL rainbow tree logo and two hero images. Let me copy them into assets and continue.

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

Now let me add brand-mark cards (CFBL logo + Institute and MUSA wordmark treatments since they should be wordmark-only per brand rules).Now cards for cards/forms, plus voice samples. Then I'll register everything.

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

Now let me register all the cards and quickly verify they look right, then move to README and UI kits.

_[tool: register_assets]_

_[tool: show_html]_

_[tool: write_file]_

Now the README and UI kits. I'll write the README first, then build the three UI kits.

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

Now the three UI kits. I'll use React+Babel so each ships proper component files.

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

Now the CFBL kit's stylesheet and index.html.

_[tool: write_file]_

_[tool: write_file]_

_[tool: copy_files]_

_[tool: write_file]_

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

Got it — the actual Institute logo. Interesting: it's set in **Deep Navy** (matching CFBL parent) on a **Sage Mist** ground, not Forest, and the "CFBL Institute" wordmark uses Cormorant *Garamond* (not SC) while "CENTER FOR BALANCED LIVING" above it is in Cormorant SC. Let me copy it in, update the wordmark card to match the real lockup, and note this in the README.Now the Institute UI kit.

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

## Assistant

_[tool: write_file]_

## Assistant

_[tool: write_file]_

_[tool: write_file]_

Now MUSA.

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

Now MUSA styles + index.

_[tool: write_file]_

_[tool: write_file]_

## Assistant

_[tool: write_file]_

_[tool: write_file]_

_[tool: update_todos]_

_[tool: done]_

_[tool: fork_verifier_agent]_

Done. The design system is built — three brand palettes, six typefaces, all preview cards registered, three UI kits, README, SKILL.md, and the official CFBL + Institute logos are wired in.

**Caveats and things to flag:**

1. **Institute logo vs. brand kit color tension.** The official Institute lockup you sent uses **Deep Navy `#2B5275`** on **Sage Mist `#B8C9BC`**, but the written brand kit specifies **Forest `#3D5A52`** as the Institute anchor. I honored the real logo in the lockup card and used Forest everywhere else (buttons, body, rules) — flagged in the README. Tell me which you'd like to lead with and I'll align them.
2. **Institute headline font in the logo is Cormorant Garamond (not SC),** but the brand kit calls for Cormorant SC for headlines. I kept SC for site headlines and used Garamond only for the wordmark lockup. Same question — do you want the site to follow the logo's choice?
3. **No MUSA or Institute imagery yet.** MUSA uses a typographic book-cover placeholder (oxblood block with title); the CFBL "About" portrait is a placeholder frame. Institute uses the lockup itself as the hero anchor. Drop photography into `assets/musa/` and `assets/institute/` and I'll wire it up.
4. **Icons are CDN substitutes (Lucide), not part of the original kit.** I'd actually prefer to use icons sparingly or not at all per the design philosophy — flag if you want a different set or none.
5. **The CFBL homepage uses your "rainbow tree" image as the hero.** The other hero image you sent ("Your Path To Healing Starts Here") is in `assets/` but not currently displayed — let me know if you'd prefer it as the hero instead.

**The clear ask:**

Please open the **Design System tab** and the three UI kits (CFBL, Institute, MUSA). Tell me:

- **Which brands feel right and which feel off?** Especially the Institute (Forest vs Navy?), and whether MUSA reads "literary editorial" or still feels too clinical.
- **Are the voice samples and CTAs landing?** Particularly for Institute (peer-to-peer) and MUSA (no CTAs).
- **What's the next priority** — a specific Shopify section, more screens (psychological-eval landing, contact form, book product page), or a tweakable variations doc to explore directions?

## User

Regenerate "Cards": I would like the solid line on the cards for institute and musa to be the length of the left side of the card. And

## Assistant

_[tool: str_replace_edit]_

_[tool: show_to_user]_

Got it — moving the Institute and MUSA accent rules from top to left edge, full card height.

_[tool: write_file]_

_[tool: show_to_user]_

Got it — let me use the actual uploaded Institute logo image as the wordmark card instead of recreating the type.

Updated — the Institute Wordmark card now shows the actual uploaded lockup (with the lotus/blurred imagery on the right side) on the left, and a clean type-only reconstruction on the right for reference.

_[tool: list_files]_

_[tool: write_file]_

_[tool: register_assets]_

_[tool: show_to_user]_

Two flags. Let me handle the Imagery one (make it more detailed), then ask you about the MUSA image since it isn't in uploads yet.Imagery card is now three columns — each with a real treatment example and a do/don't rule list per brand.

**On the MUSA wordmark — I need your help.** You mentioned an image of "a book, magazine and article" from the webpage, but the only files in `uploads/` are the four images you've already sent (CFBL logo, two CFBL hero shots, and the Institute lockup). There's no MUSA image yet.

**Could you attach the MUSA image?** Once you upload it, I'll swap it into the MUSA Wordmark card the same way I did for Institute.

## User

https://balancedlivingde.com/cdn/shop/files/book_icon_276c3c41-c348-4c21-abf9-f78a7d8f5f96.png?v=1779633537&width=800

## Assistant

_[tool: run_script]_

Let me grab that and store it locally.

_[tool: view_image]_

_[tool: image_metadata]_

Got it. Let me see what it looks like.

_[tool: write_file]_

_[tool: show_to_user]_

Now let me update the MUSA wordmark card with this image alongside the wordmark.Updated — the MUSA Wordmark card now has the books/candle/leaves/ink-pen still-life on the left and the MUSA wordmark on the right. The image has also been saved to `assets/musa-book-icon.png` so the UI kit can pick it up.

## User

<attached_files>
- uploads/pasted-1779932387811-0.png
</attached_files>

## Assistant

_[tool: copy_files]_

_[tool: delete_file]_

Better-resolution Institute lockup — let me swap it in.

_[tool: grep]_

Now updating references.

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: show_to_user]_

Higher-res Institute lockup is now wired in everywhere — the Wordmark card, the README, SKILL.md, and the Institute UI kit masthead all point at `assets/institute-logo.png`.

## User

What do I do now

## Assistant

Great question. Here's a clean menu of next steps — pick whichever feels most useful:

### 1. Review what's been built
Open the tabs that already exist:
- **Design System tab** — scroll through the cards by section (Brand · Colors · Type · Spacing · Components). Flag anything off; right-click any card to send me notes.
- **`ui_kits/cfbl/index.html`** — the CFBL homepage mock.
- **`ui_kits/institute/index.html`** — toggle between Catalog and Course Detail at the top.
- **`ui_kits/musa/index.html`** — toggle between Essays / Current Essay / Books / Author.

### 2. Resolve the two open brand questions
These will affect every screen we build next:
- **Institute color anchor — Forest (per brand kit) or Deep Navy (per actual logo)?** Right now the lockup is Navy and everything else is Forest. Tell me which one wins.
- **MUSA imagery direction.** The "books + candle + leaves + ink pen" still-life from your site is now in `assets/`. Want me to use it as the MUSA hero/header background too, or keep it reserved for the wordmark only?

### 3. Pick what to build next
A few options, in roughly increasing scope:

- **Add missing screens to the UI kits** — psychological evaluation page, contact form, supervision page, single book product page, an essay archive year page, an inquiry form.
- **Build a few more design-system cards** — section-header patterns, navigation states, footer variations, a long-form article template.
- **Variation explorations** — pick one screen (e.g. the CFBL hero or the MUSA essay lead) and I'll generate 3–4 directions side-by-side as Tweaks so you can compare.
- **Start the Shopify Liquid pass** — translate the React UI kits into actual Liquid sections + JSON templates so a developer can drop them into a theme.
- **A handoff packet for a developer** — README + tokens + asset zip ready to hand off to a Shopify dev.

### 4. Or just send me feedback
Even a casual "the MUSA archive feels too cold, the Institute hero needs imagery, the CFBL pathway cards are too tall" is enough — I'll iterate from there.

**My recommendation:** answer #2 first (those two questions take 30 seconds), then point me at one item from #3. I'd suggest **variation explorations on the CFBL homepage hero** as the highest-leverage next move — it's the most visible surface and will pressure-test the brand-context strategy.

## User

I like the forest, word mark only. Is there a way to have an overall brand voice that is professional, psychologist, that communicates safety, comforting, healing, nature based, minimal, and trust

## Assistant

