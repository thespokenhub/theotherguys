# Chat

_Started 2026-07-22 13:29 UTC_

---

## User

Continuing from "Design decisions and content questions".

## Assistant

We've been rebuilding The Other Guys' site from scratch with a focus on creative, on-brand design—especially for the blog view. The core USP shifted to "We make content for the buyer, and for the machines that now recommend you" (not the two-partners angle).

Key decisions made:
- Purple hero (original brand color) with journey CTAs that feel fun and lead visitors deeper
- Floating cream nav bar with ink borders + hard shadows, tano-style typography (Space Grotesk)
- Client logo strip as a scrolling marquee (contained, not full-screen static)
- Three hanging sticky-note case results below the hero (borrowed from Tano's approach)
- Bold, bordered design language throughout—no flat soft shadows; 2px ink borders + offset hard shadows instead
- Cookie cursor site-wide for personality
- Blog with pillar filters in a manila folder concept (working filters, in-voice empty state)
- Case study pages now end with three paths (book, read blog, meet us) instead of dead-ending
- Newsletter reframed as building-the-agency-in-public, not blog-by-email
- About page: added a signed letter from the desk pinned to the "4 clients max" stat
- Footer: purple with cream text, matches the brand instead of feeling out of place

Current state: full 14-page site built and live for review (Home, Case Studies ×3, Blog, Pillar hubs ×3, About, Contact, 404, Blog-Post template, plus Blog-Options.dc.html with alt directions). Recently fixed rendering issues with the Squiggle animation and nav logo fallback.

Open: verifier agent has flagged multiple issues in recent passes—currently working through the fixes. Once stable, site is ready for real content swaps (logo, photos, pencil illustrations are all drop-zones with descriptions).

Files: 20+ .dc.html pages, posts.js, image-slot.js, support.js, Squiggle.dc.html, HANDOFF.md (CMS spec).

## User

there's no space between the nav bar and the top of the pages. it's like it's hooked to the top. let's give it some b reathing room.

can we give a small animation to the B2B SaaS content studio. maybe a small lioght that goes around the backgorund when the person first lands on the page. can be anything

thge squiggle under the "good" on the hero page seems to cover the leg og the G in good so we vcan fix that.

can we say something before the case studies on the homepage come. it's like the person justy scrolls on the homepage and sees some stuff.

remove the footer from the homepage. keep it on the other pages but remove it from here. 

and let's always lead the visitor's direction. so we should always have optios that help progress their time on the page. and be creative and small about it

on the case study pages, the  container for each one just lies flat. let's give it some light  animations. at the end of the case stues, instead of just "Or just meet the two of us first", we can create a "This could be your team starting tomorrow" style thing.

the about section too reads bland. it doesnt mean anything to the read. two guys and thats the whole org chart? yeah, no. make that more creative and better. the profile containers can pop more to. you can even add arrows to connect one profile to anothr or some creative. love the letter section though. also, Nelson is more executiin and tim is more strategy.

also, in the about section, you can add an us verse them style thing so visitors know what they're getting. it should not be anyhting boring like the 2 boxes against each other showing the difference like a pricing page. that's boring and not on brand.

oh and some numbers for you so you can use whether it fits:
2.6M+ - The number of registered users attributed directly to the work of our team, from our foundation to the end of july 2026. 

helped move startups from series a to 500m valuation.

200+ sales interactions for multiple companies

280% revenue growth

4 - The maximum number of clients we onboard per year.

we've built our own product and marketed so we arent just shooting  from an agency perspective too.

let's have a whole wall of love of like 15 rreviews (maybe on the case study page after all the case studies).

also, let the  case studies have a sort of GA4 type analytics bar showing where we hop on and the increase from there to today.

we can have a "what we do" style section on the homepage too. some thing creative design wise. we can then list: 
- Content strategy
- Thought leadership
- Generative AI strategy
- content Design
- SEO content
- Reports
- Social content
- Newsletters
- Case studies

we can make them clickable. so you click and it takes you to it's own page describing each one. it should be on brand and have creative design too. 

we can also have a cheeky compare us section. when you get in there, you'll find categories you can come us in with other companies. eg: when you click, compare us, you can choose between seo agecnies, design agencies, ai, etc. then when you choose compare to other SEO agencies, you find maybe 5 options of seo agencies. when you click one, it'll take you to a section where you can compare us to them. 

on the blog view page,  remove the "12 POSTS · THREE PILLARS · ZERO FILLER". if you have to put something there, it should be more descriptive.  

in the pillar view, can you give each article a small image section so iot's not just texts packed together?

also, in the blog post, when you click on the author, you should see all the articles written by him. a small bio section with image too. then maybe linkedin too. maybe a fun little table of contents on the side. but with a creative design.

we'll also write reports  on the blog so have that in mind.

## Assistant

_[tool: list_files]_

_[tool: update_todos]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: read_file]_

Reading done — now building. Batch 1: quick fixes + data files + new homepage.

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: write_file]_

_[tool: dc_write]_

Now the Service and Compare pages:

_[tool: dc_write]_

_[tool: dc_write]_

Now the Case Studies page (animations, wall of love, new ending):

_[tool: dc_write]_

About page rewrite, plus reading the two remaining case pages for the analytics-bar insert:

_[tool: dc_write]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: dc_html_str_replace]_

_[tool: dc_html_str_replace]_

_[tool: dc_html_str_replace]_

_[tool: dc_html_str_replace]_

_[tool: dc_js_str_replace]_

_[tool: dc_js_str_replace]_

_[tool: str_replace_edit]_

Pillar thumbnails + the new Author page:

_[tool: run_script]_

_[tool: dc_write]_

_[tool: update_todos]_

_[tool: snip]_

_[tool: ready_for_verification]_

All done — the full batch is in:

- **Nav** now floats 18px off the top everywhere, and gained a "Compare" link
- **Hero badge** gets an orbiting light on landing; squiggle moved below the descenders so the "g" leg is clear
- **Homepage**: intro copy before the sticky notes, a dark "The menu" board with 9 clickable services, footer removed, and a cheeky "Pick an exit" ending so nobody dead-ends
- **Service pages** — one template (`Service.dc.html?s=…`) drives all 9, each with deliverables, "you need this when", proof link, and a next-item chain
- **Compare us** (`Compare.dc.html`): pick a category → pick an archetype → "tale of the tape" with an honest "when they're the right call" round
- **Case studies**: scroll-in + hover animations, GA4-style "we hop on → today" charts on all three detail pages (ClickUp's shows both lines), a 15-note wall of love, and a "This could be your team, starting tomorrow" ending with a calendar sticky
- **About**: brief-commute org chart (theirs vs ours), Tim = strategy / Nelson = execution with tape + "argue daily, ship weekly" badge, billboard-numbers section (2.6M+, Series A→$500M, 280%, 200+), and an itemized agency receipt vs our sticky-note receipt
- **Blog**: descriptive masthead line, REPORT badges, pillar pages got illustration thumbnails, blog post has a "THE MAP" side TOC, and authors now link to `Author.dc.html?a=tim|nelson` with bio, LinkedIn, and their full byline list

One thing to swap: the LinkedIn URLs are placeholders (`linkedin.com/`) — send me the real profile links. The wall-of-love quotes beyond the two real ones are drafted placeholders; replace with real reviews when you have them.

## User

Found issues — fixing…

## Assistant

_[tool: str_replace_edit]_

_[tool: dc_html_str_replace]_

_[tool: dc_html_str_replace]_

_[tool: run_script]_

_[tool: ready_for_verification]_

All three fixed: the TOC wrapper is wider (sticky now engages beside the article), the "Proof," and "compare us." headlines no longer break after the squiggle, and the pillar thumbnails use a short "Pencil sketch" placeholder (full description kept in alt text). Out for re-review.

## User

Found issues — fixing…

## Assistant

_[tool: dc_html_str_replace]_

_[tool: dc_html_str_replace]_

_[tool: ready_for_verification]_

_[tool: update_todos]_

Fixed by moving the comma/word into the Squiggle prop itself (`word="Proof,"` and `word="compare us."` with a non-breaking space) — no wrapper span, so the mount keeps its inline-block. Out for re-review; todos are up to date with the remaining follow-ups (real LinkedIn URLs, real reviews, optional HANDOFF.md refresh). Safe stopping point reached.

## User

Found issues — fixing…

## Assistant

_[tool: run_script]_

## Assistant

_[tool: run_script]_

_[tool: read_file]_

_[tool: str_replace_edit]_

_[tool: ready_for_verification]_

_[tool: update_todos]_

Continued and wrapped up: the inline-squiggle wrapping fix is now applied site-wide (16 pages patched), and HANDOFF.md is updated with the new Services/Compare/Author architecture, analytics charts, wall of love, and the no-footer homepage rule. Out for re-review.

Still waiting on you for two things: real LinkedIn profile URLs (Tim + Nelson) and real reviews to replace the drafted wall-of-love quotes.

