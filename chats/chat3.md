# Nelson and Tim design feedback

_Started 2026-07-23 14:26 UTC_

---

## User

Continuing from "Chat".

## Assistant

We've been building The Other Guys' site from scratch with a bold, on-brand creative direction—purpose is to sell their "content for buyers and the machines that recommend you" angle to mid-market B2B SaaS teams.

Key decisions made:
- Purple hero with journey CTAs, floating cream nav (18px breathing room), cookie cursor, hard shadows + 2px ink borders throughout
- Homepage now has intro copy before case results, a "The menu" board with 9 clickable services, no footer, and a "Pick an exit" ending to keep visitors moving
- Service pages (one template) chain to each other; Compare us lets visitors pick category → archetype → see a "tale of the tape" breakdown
- Case study pages got scroll-in animations, GA4-style "we hop on → today" charts, a 15-note wall of love, and a "This could be your team, starting tomorrow" ending
- About page: org chart (theirs vs ours), Tim = strategy / Nelson = execution with badges, billboard stats (2.6M+, Series A→$500M, 280%, 200+), and an itemized receipt visual
- Blog: descriptive masthead, REPORT badges, pillar pages have illustration thumbnails, blog posts have a "THE MAP" side TOC, authors link to their byline page with bio + LinkedIn
- Inline-squiggle wrapping fixed site-wide (16 pages) so punctuation doesn't break across lines

Current state: 16+ pages live and passing verifier checks. HANDOFF.md updated with full architecture.

Open: Need real LinkedIn URLs for Tim and Nelson, plus real wall-of-love reviews to replace drafted placeholders.

Files: Service.dc.html, Compare.dc.html, Author.dc.html, Home.dc.html, About.dc.html, Case-Studies.dc.html, Blog-Post.dc.html, all Pillar pages, HANDOFF.md, services.js, posts.js.

## User

real linked profile:

nelson - https://www.linkedin.com/in/thenelsonansah/



tim - https://www.linkedin.com/in/timothy-agbola-7092571b5/on the hero page, raise the squiggly line under the good just a tad bit higher. i think it cuts across everwhere actually.



also, cut the world "actually" from from all copy.



bring the nav bar  just a tad lower.  you can extend the lenght a bit more too. just a lil bit.



the links from some of the content menu pages dont go to the right places.



add the brand names and testimonials to the individual content menu pages too. also, when you click "head back to the full menu" it goes to the home page hero, not the menu itself.



i'm attaching two screenshots so you can see some of the content Omnius does for their service pages which is esentially the same as our menu pages. i'm not saying copy their design. nope. this should mgive you an idea of the actually writing you can do on the individual menu pages so that we're covering on page seo too. and as always, be go creative with it. 



it seems the whole about page revolves around "Two guys. That’s the whole org chart.". let's try somethign else. i love everything on that page. just dont line doesnt land for me. 



also, let's change the "US VS. THEM, ITEMIZED. What your retainer actually buys." we're not just teo senior people writing. it looks like our whole whole is writing when the service is more holistic than that.

## User

real linked profile:

nelson - https://www.linkedin.com/in/thenelsonansah/



tim - https://www.linkedin.com/in/timothy-agbola-7092571b5/on the hero page, raise the squiggly line under the good just a tad bit higher. i think it cuts across everwhere actually.



also, cut the world "actually" from from all copy.



bring the nav bar  just a tad lower.  you can extend the lenght a bit more too. just a lil bit.



the links from some of the content menu pages dont go to the right places.



add the brand names and testimonials to the individual content menu pages too. also, when you click "head back to the full menu" it goes to the home page hero, not the menu itself.



i'm attaching two screenshots so you can see some of the content Omnius does for their service pages which is esentially the same as our menu pages. i'm not saying copy their design. nope. this should mgive you an idea of the actually writing you can do on the individual menu pages so that we're covering on page seo too. and as always, be go creative with it. 



it seems the whole about page revolves around "Two guys. That’s the whole org chart.". let's try somethign else. i love everything on that page. just dont line doesnt land for me. 



also, let's change the "US VS. THEM, ITEMIZED. What your retainer actually buys." we're not just teo senior people writing. it looks like our whole whole is writing when the service is more holistic than that.

## Assistant

_[tool: update_todos]_

_[tool: list_files]_

_[tool: read_file]_

_[tool: grep]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: grep]_

_[tool: read_file]_

Everything located. Making the mechanical fixes in one script, then expanding the service pages.

_[tool: run_script]_

_[tool: write_file]_

_[tool: dc_html_str_replace]_

_[tool: dc_html_str_replace]_

_[tool: dc_html_str_replace]_

_[tool: dc_js_str_replace]_

_[tool: ready_for_verification]_

All done, out for review:

- Real LinkedIn URLs wired into author pages and post bylines
- Squiggle raised (bottom offset -0.32em → -0.18em, applies site-wide)
- "actually" cut from all copy — 19 instances across 18 files ("The Boutique That's Actually Good" became "Genuinely Good" to keep the joke)
- Nav sits 10px lower and 80px wider
- "Back to the full menu" / breadcrumb now land on the menu itself (Home scrolls to #menu once it loads); the Reports proof link no longer sent you to an unrelated blog post
- Each menu page now gets: a client-brand strip, a "How we cook it" long-form section (intro + 4 sub-capabilities per service, written fresh for on-page SEO), and a taped wall-of-love testimonial matched to that service
- About headline is now "Nothing between you and the work." and the receipt reads "Strategy, research, writing, design, distribution — every line, by the people you hired" under "Where your retainer goes."

The nine testimonial quotes on service pages are drafted placeholders like the wall of love — swap in real ones when you have them.

## User

some images so you can embed them where needed:

our logo: https://cdn.prod.website-files.com/67041549a38a6939e8db05d2/67041549a38a6939e8db063d_webclip.png

profile images attached

## User

some images so you can embed them where needed:

our logo: https://cdn.prod.website-files.com/67041549a38a6939e8db05d2/67041549a38a6939e8db063d_webclip.png

profile images attached

## Assistant

_[tool: list_files]_

_[tool: view_image]_

_[tool: view_image]_

_[tool: view_image]_

_[tool: copy_files]_

_[tool: grep]_

_[tool: read_file]_

_[tool: grep]_

_[tool: read_file]_

_[tool: grep]_

_[tool: run_script]_

_[tool: ready_for_verification]_

The logo was already in the nav from your earlier link; the new headshots are now wired everywhere — Tim and Nelson's cards on About, the byline avatar and author box on blog posts, the Author profile pages, and the duo shot on Contact. All paths point to clean `assets/` copies and HANDOFF.md lists them for the dev handoff.

## User

for the blog, the topics we'll write about should be the main pillars. keep the folder designs but the pillars should be:

1. SEO — Traditional search: how to rank in Google. Technical fixes, on-page optimization, and the fundamentals that still drive organic traffic.

2. AI Search — Getting found and cited in AI answers — ChatGPT, Perplexity, Google's AI Overviews. How brands show up when a machine does the recommending.

3. Content Marketing — Content as a growth channel: strategy, distribution, and building an owned audience that turns writing into pipeline.

4. The Craft — Content as a craft: writing, voice, and editing. What makes a piece good enough that both people and machines want to cite it.

5. Did You Notice — An observation series spotting the small, clever, or overlooked details on real websites. We'll notice, critique if need be, and show what might have worked better. Each piece is framed as a "did you notice..." moment.

6. Between Us — Candid, opinionated musings on the industry. Every piece opens with "Between us, ..." — the category's signature device.

-  
also, make the "Start with a pillar" "Or start with a pillar" and make it more visible so they can click if they dont want to waddle through so many articles.

## Assistant

_[tool: read_file]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: grep]_

Converting the three hardcoded pillar pages into one data-driven `Pillar.dc.html` (same folder design, now 6 pillars), rewiring posts.js, Blog, Footer, and the post breadcrumb.

_[tool: write_file]_

_[tool: dc_write]_

_[tool: str_replace_edit]_

_[tool: run_script]_

_[tool: delete_file]_

_[tool: ready_for_verification]_

Blog restructured around the six pillars:

- posts.js now defines SEO, AI Search, Content Marketing, The Craft, Did You Notice, and Between Us — existing posts refiled, plus one starter post for each new pillar (a "Did you notice..." piece, a "Between us, ..." piece, and an SEO one; drafts, swap when you have real ones)
- The three hardcoded pillar pages are replaced by one data-driven `Pillar.dc.html?p=<key>` — same folder design, each with its own headline, intro, and post list
- Filter tabs on the blog now cover all six pillars
- The pillar section is now "Or start with a pillar." — a big headline with the squiggle, "SIX FOLDERS. NO WADDLING THROUGH THE ARCHIVE." kicker, and six cards
- Footer, breadcrumbs, and HANDOFF.md all point at the new pillar URLs

## User

texts to delete:
- Numbers included, context attached.(on work page).
- Lightly trimmed, never embellished (on work page)
- That’s the whole operating model.  (on about page)
- NO ACCOUNT LAYER · NO JUNIORS
NO MYSTERY LINE ITEMS (on about page)

## User

texts to delete:
- Numbers included, context attached.(on work page).
- Lightly trimmed, never embellished (on work page)
- That’s the whole operating model.  (on about page)
- NO ACCOUNT LAYER · NO JUNIORS
NO MYSTERY LINE ITEMS (on about page)

## User

give me image prompts for the placeholders

## Assistant

_[tool: grep]_

Here are prompts for every empty slot, matched to the site's hand-drawn/pencil style. Prepend this **style prefix** to each illustration prompt so the set stays consistent:

> *Loose graphite pencil illustration on warm cream paper (#FBF6EF), hand-drawn editorial style, confident sketchy linework, light cross-hatching for shade, tiny accents in muted purple (#6B46E5) and coral (#F1705B), lots of white space, no text, 4:3.*

**Blog post thumbnails** (used on Blog, Pillar pages, and as each post's hero):
1. *Between Us, Most Retainers Are Rent* — Two wooden chairs leaned toward each other as if mid-gossip, one "whispering" behind a raised armrest; a small receipt labeled with a blank line drifting between them.
2. *What AI Search Cites* (report) — A trench-coat detective holding a magnifying glass up to a friendly robot; under the lens, the robot's footnotes are visible as tiny numbered scribbles.
3. *Did You Notice What Stripe Hides…* — A giant magnifying glass hovering over the bottom corner of a sketched browser window, revealing a tiny smiling doodle hidden there.
4. *Good Writing Was Always This Much Work* — A writer at a desk buried to the shoulders in crumpled drafts, grandfather clock behind showing a late hour, one clean page held up in triumph.
5. *AI Didn't Kill Good Writing…* — A friendly robot holding a paintbrush, hesitating over a conveyor belt of identical framed listicles.
6. *The Unsexy SEO Fixes…* — A plumber on their back tightening pipes underneath a giant search bar; a small pressure gauge needle ticking upward.
7. *Write for the Person Who Signs…* — Two readers sharing one broadsheet newspaper, each absorbed in a different page; one holds a pen ready to sign.
8. *What We Do When a Client Hires Us* — Three figures huddled over a table map labeled with a winding route; one pins a flag at day 30.
9. *It's January. Please Don't Publish…* — A typewriter tangled in bare winter branches, a single page in the roller; a small "hold" hand gesture from off-frame.
10. *The Content Cyborg* — Side profile of a head with visible gears meshing with a pencil where the brain would be.
11. *AEO Is Just SEO With Better Manners* — A robot butler politely holding a door open for a marching stack of documents wearing tiny name tags.
12. *The Other Way: Our Content Strategy* — A winding path up a hill with three signposts; two figures walking it while a crowded highway runs the other direction below.
13. *Between Us, Here's the Case Against…* — A robot lawyer at a podium pointing dramatically at a jury box of confused doodle-people.
14. *The One Content Marketing Tweak…* — A stone tablet of rules cracking down the middle, a stream of tiny user figures pouring out of the crack.
15. *Why The &#!$ Are We Here?* — Two figures on ladders nailing a hand-painted "OPEN" sign above a door, tools and coffee cups scattered below.

**Other illustration slots:**
- **404 page** (3:2) — A paper airplane circling a signpost whose arrows are all blank, leaving a dotted flight trail loop.
- **Case card: iGotAnOffer** — A candidate shaking hands across a desk, offer letter in the other hand, small confetti dots in coral.
- **Case card: Synthesia** — A friendly robot presenter holding a film clapperboard in front of a sketched video player frame.
- **Case card: ClickUp** — A gardener pruning a hedge sculpted into a rising bar chart, clippings labeled as tiny pages on the ground.

**Not AI-image jobs** (flagging so you don't generate these): the six slots on the case-study detail pages want real screenshots — rebuilt pillar pages, GA/Search Console charts, an AI answer citing the client — and the Author/About/Contact slots are already filled with the real photos.

Want me to drop any generated images straight into the slots when you have them?

