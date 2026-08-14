# TOG Website Rebuild — Handoff Notes for Claude Code

This prototype locks the look and layout of every page. Build the production site from these files. All styling is inline per element; treat the repeated literals as tokens (below).

## Tokens
- Ink `#2B2440` · Body text `#3D3654` / muted `#6E6784` / `#514A66`
- Purple `#6B46E5` (hover `#4C2FB8`) · Purple-200 `#E6DEFB`
- Coral `#F1705B` (hover `#E85F48`)
- Cream bg `#F5EEE5` · Cream-100 `#FBF6EF` · Hairline `rgba(43,36,64,0.14)`
- Type: Space Grotesk (display), Instrument Sans (body), IBM Plex Mono (tags/meta), Caveat (handwritten accents)
- Cards: 16-20px radius, 2px ink border + hard offset ink shadow (4-6px 0-blur). Sticky-note metric cards get a slight rotation + tape strip. Tags: purple-200 bg, mono caption.
- Cursor: cookie SVG cursor site-wide (see body style), inherits on links/buttons.
- Client marquee on Home scrolls (CSS keyframes); global reduced-motion kill switch is in the helmet style.
- Focus: 3px coral outline on :focus-visible, everywhere.

## Signature element
Pencil underline (see Squiggle.dc.html): inline SVG coral squiggle under one pivotal word per page headline. Draws left-to-right ~600ms on scroll into view (IntersectionObserver, threshold 0.5). Under prefers-reduced-motion it renders fully drawn, no animation. One per page. Do not add more.

## Nav
Sticky pill nav, cream bg + hairline border, 18px offset from viewport top (padding on the sticky wrapper; pages pull the hero up under it with a negative margin where full-bleed). Links: Work, Blog, About, Compare + coral "Book a call" CTA far right → https://calendly.com/theotherguyss/let-s-talk-about-your-content-marketing
**Mobile (<720px): collapse links to a hamburger drawer.** The prototype wraps pills instead (no media queries available in this format); the production build must implement the drawer.

## CMS — blog + pillar architecture
The blog needs a CMS. Two options, our lean stated:

**1. Git-based markdown (recommended).** Posts as `.md` files in the repo, rebuild on commit. Cheapest, most durable, we own the content, on-brand for a "human-made" studio. Fits two technical partners at low post volume.

**2. Headless CMS (Sanity, fallback).** Nicer writing UI, handles image uploads, friendlier if a non-technical writer joins. But another service, another bill, content on someone else's platform again.

We lean git-based markdown; final decision stays with TOG. Structure so either wires in without redesign:
- Post schema (see `posts.js`): id/slug, title, pillar (`buyer` | `ai` | `craft`), optional `type: 'report'` (renders a REPORT badge in index + author lists), blurb, author, date, minutes, illustration description (used as alt text). `AUTHORS` in the same file drives `Author.dc.html?a=tim|nelson` (bio, role, photo slot, LinkedIn, byline list — filter POSTS by author name).
- Blog index (`Blog.dc.html`) renders lead story + numbered index from that list, filterable by pillar. Filters should be URL-addressable in production (`/blog?pillar=ai`) so hub pages and filters share logic.
- Pillar hubs are landing pages (intro + spoke list) driven by the same post collection filtered by pillar. Each spoke row carries a small illustration thumbnail (`thumb-<pillar>-<nn>` slots).
- Blog post template: sticky side TOC ("THE MAP") from the post's h2 anchors; author byline + footer box both link to the author page.
- Empty state (filter/pillar with no posts): "No posts here yet. The kitchen's warming up."

## Quality floor (from the brief — enforce)
- Responsive to 320px (prototype uses wrap/auto-fit grids; verify at 320px).
- Visible keyboard focus (coral) on everything interactive.
- prefers-reduced-motion respected (squiggle, any transitions).
- Alt text on every pencil illustration; the placeholder frames carry the intended alt text already.
- Color never the only signal: links underlined, errors carry text.
- No em dashes in copy. Voice: conversational, dry, confident, no AI texture.

## Assets to swap in
Every `image-slot` placeholder describes the intended pencil illustration, photo, or screenshot. IDs are stable; the descriptions double as alt text. Real numbers in case studies are realistic stand-ins; TOG will supply final figures.

## Services + Compare (added pages)
- `services.js` holds the 9-item SERVICES list (slug, name, quip, blurb, bullets, need, proof link). Home renders it as "The menu"; `Service.dc.html?s=<slug>` is the detail template with a next-item chain. Production: one route per slug.
- `Compare.dc.html`: category → competitor archetype → "tale of the tape" (4 rounds + an honest "when they're the right call" box). Data lives in the page's logic class; production can keep it static.
- Case study detail pages each carry an inline-SVG "WE HOP ON → TODAY" analytics chart; numbers are stand-ins, swap with real GA4 exports if available.
- Case-Studies index ends with a 15-quote "wall of love" (CSS columns, taped notes). Quotes are drafted placeholders except Synthesia/iGotAnOffer-derived ones — TOG to supply real reviews.
- Home intentionally has NO footer; every other page keeps `Footer.dc.html`.

## Links
- Calendly (primary CTA everywhere): https://calendly.com/theotherguyss/let-s-talk-about-your-content-marketing
- Newsletter: https://deotherguys.substack.com/
- Email: hello@deotherguys.com
- Tim LinkedIn: https://www.linkedin.com/in/timothy-agbola-7092571b5/
- Nelson LinkedIn: https://www.linkedin.com/in/thenelsonansah/
- Company LinkedIn / X: URLs TBD from TOG.
- Copy rule: the word "actually" is banned site-wide (client request).

## Images
- Logo: https://cdn.prod.website-files.com/67041549a38a6939e8db05d2/67041549a38a6939e8db063d_webclip.png (in Nav)
- Headshots: assets/tim.png, assets/nelson.png, assets/tim-and-nelson.png (About, Contact, Author, Blog-Post bylines)

## Blog pillars (Aug 2026)
Six pillars, defined in posts.js PILLARS (single data-driven Pillar.dc.html?p=<key>):
1. seo - SEO (traditional search fundamentals)
2. ai - AI Search (found + cited in AI answers)
3. content - Content Marketing (growth channel, owned audience)
4. craft - The Craft (writing, voice, editing)
5. notice - Did You Notice (observation series; each piece framed as a "did you notice..." moment)
6. us - Between Us (candid industry musings; every piece opens with "Between us, ...")
Old Pillar-Buyer-First/AI-Search/Craft pages were replaced by Pillar.dc.html.
