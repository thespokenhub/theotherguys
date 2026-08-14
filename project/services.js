// The menu. Used by Home.dc.html and Service.dc.html
export const SERVICES = [
  { slug: 'content-strategy', no: '01', name: 'Content strategy', quip: 'The plan before the words.', blurb: 'Where you can win, what to publish, what to skip, and how each piece earns its keep. We build the map before anyone touches a keyboard, so your content compounds instead of accumulating.',
    bullets: ['A pillar map built on what your buyers ask and what answer engines cite', 'A publishing cadence your team can sustain', 'A kill list: the content you should stop making, with reasons'],
    how: 'Strategy here is not a slide deck you file away. It is a working map: which questions your buyers ask, which ones you deserve to answer, and the order to answer them in. We build it in your first month, then revise it every quarter against real performance instead of defending it.',
    subs: [
      { t: 'Buyer and query research', d: 'We mine sales calls, support tickets, review sites, and search data for the questions your buyers ask, phrased the way they ask them. Demand first, topic ideas second.' },
      { t: 'Pillar and cluster architecture', d: 'Every piece gets a job and a home. Pillar pages own the big questions, spokes go deep on the specifics, and internal links make the whole library legible to readers, crawlers, and LLMs alike.' },
      { t: 'Cadence and sequencing', d: 'A publishing rhythm your team can hold for quarters, not weeks, sequenced so each piece sets up the next one. Compounding beats volume.' },
      { t: 'The kill list', d: 'The bravest deliverable: which content to prune, merge, or delete, with reasons attached. Thin pages drag whole domains down. We cut them.' }
    ],
    quote: { text: 'They handed us a kill list of 41 posts in week three. Deleting them felt insane. Traffic went up.', who: 'HEAD OF CONTENT \u00b7 PLG SAAS' },
    need: 'You publish regularly, traffic is flat, and nobody can say why any given post exists.', proof: { label: 'How this played out at ClickUp', href: 'Case-ClickUp.dc.html' } },
  { slug: 'thought-leadership', no: '02', name: 'Thought leadership', quip: 'Your smartest people, in print.', blurb: 'Your founders and operators know things nobody else does. We interview them, steal their scars, and turn it into pieces a competitor could never publish, because they were never in the room.',
    bullets: ['Interview-driven essays under your experts\u2019 names', 'Opinions somebody would argue with', 'Ghostwritten, but only from real conversations. No invented wisdom.'],
    how: 'Nobody buys \u201cinsights.\u201d They buy the sense that a real person, with real scars, is on the other side of the page. Our job is extraction: getting what your smartest people know out of their heads and into print without flattening it into content.',
    subs: [
      { t: 'Expert interviews', d: 'An hour with your founder or operators, recorded. We arrive with a thesis and leave with decisions, mistakes, numbers, and the opinions nobody has published yet.' },
      { t: 'Ghostwriting with receipts', d: 'Every essay is written from the transcript, in their voice. If they would not say it on a call, it does not go in the draft.' },
      { t: 'A point of view worth arguing with', d: 'Agreeable content is invisible content. We help your experts stake claims a competitor cannot copy, because the claims come from rooms only you were in.' },
      { t: 'Bylines that build authority', d: 'Published under real names, on your blog and beyond. Buyers trust people. So do answer engines. The authority should accrue to yours.' }
    ],
    quote: { text: 'Our CTO read his own ghostwritten essay and said \u201cyeah, that is what I meant.\u201d Highest compliment he gives.', who: 'VP MARKETING \u00b7 DEV TOOLS' },
    need: 'Your category is crowded and everyone\u2019s blog says the same five things.', proof: { label: 'Why anti-generic is the bar', href: 'About.dc.html' } },
  { slug: 'gen-ai-strategy', no: '03', name: 'Generative AI strategy', quip: 'Get recommended by the machines.', blurb: 'ChatGPT, Perplexity, and AI Overviews now stand between you and your buyer. We structure your content so answer engines cite you: clear claims, named authors, stated methods, original data.',
    bullets: ['An audit of what AI engines currently say about you and your rivals', 'Content structured to be quoted, not just crawled', 'Citation tracking, so you can watch yourself become the answer'],
    how: 'When a buyer asks ChatGPT or Perplexity who to shortlist, the answer is assembled from content somebody wrote. Generative engine optimization is making sure that somebody is you: pages structured so machines can quote you, attribute you, and recommend you with confidence.',
    subs: [
      { t: 'AI visibility audit', d: 'We ask ChatGPT, Perplexity, Claude, and Google AI Mode the questions your buyers ask, then log every answer and citation, for you and your rivals. Baseline before strategy.' },
      { t: 'Citation engineering', d: 'Clear claims, named authors, stated methods, answer-shaped structure. We format pages the way answer engines like to quote them, without making them worse for humans.' },
      { t: 'Original data, the citation magnet', d: 'LLMs cite sources that say something new. We build the surveys, benchmarks, and product-data pieces that give them a reason to point at you.' },
      { t: 'Citation tracking', d: 'We re-run the same buyer questions monthly, so you can watch yourself become the answer, and catch it early when a competitor takes it back.' }
    ],
    quote: { text: 'Three prospects in one quarter opened with \u201cChatGPT suggested you.\u201d That had never happened before this work.', who: 'GROWTH LEAD \u00b7 FINTECH SAAS' },
    need: 'Prospects say \u201cChatGPT recommended someone else\u201d and you\u2019d like that to stop.', proof: { label: 'How Synthesia became the citation', href: 'Case-Synthesia.dc.html' } },
  { slug: 'content-design', no: '04', name: 'Content design', quip: 'Words and layout, engineered together.', blurb: 'A great piece read as a wall of text is a wasted piece. We design content for the way people read: skimmers get the argument, readers get the depth, and the forwarded-to CFO gets it in two paragraphs.',
    bullets: ['Page structures built around the forwarded read', 'Diagrams and visuals where prose is the wrong tool', 'Templates your team can reuse without us'],
    how: 'Nobody reads B2B content start to finish. They skim it, jump between headings, and forward it to the person who signs. We design every piece for all three readers at once, so the argument lands no matter how someone moves through the page.',
    subs: [
      { t: 'Reading-path architecture', d: 'Headings that carry the argument on their own, pull quotes that hold the thesis, and a summary the forwarded-to CFO can clear in two paragraphs.' },
      { t: 'Diagrams where prose fails', d: 'Some arguments are a picture. We build the comparison tables, flows, and annotated screenshots that say in one glance what four paragraphs could not.' },
      { t: 'Layout engineered with the words', d: 'Writer and designer are the same team here, so structure and copy get decided together, not bolted on after the draft.' },
      { t: 'Templates your team keeps', d: 'Reusable page patterns, documented well enough that your next piece looks this good without us in the room.' }
    ],
    quote: { text: 'Same content, redesigned. Average read time doubled. I did not believe layout mattered this much.', who: 'CONTENT LEAD \u00b7 B2B PLATFORM' },
    need: 'Your content is good but everyone says \u201cit\u2019s a lot\u201d and bounces halfway.', proof: { label: 'See it on our own blog', href: 'Blog.dc.html' } },
  { slug: 'seo-content', no: '05', name: 'SEO content', quip: 'Rankings that survive the next update.', blurb: 'We do SEO the way it works now: fewer pieces, deeper coverage, real expertise on every page. The stuff that ranks after every update, because it deserved to rank before it.',
    bullets: ['Keyword strategy anchored to buying intent, not volume vanity', 'Pillar pages with real expert input, not paraphrased SERPs', 'Refreshes that recover rankings you already paid for'],
    how: 'SEO did not die; the lazy version did. What survives every core update is the same thing that earns AI citations: pages with real expertise, matched to real buying intent, kept fresh. We write fewer pieces than the volume shops and get more out of each one.',
    subs: [
      { t: 'Intent-first keyword strategy', d: 'We rank keywords by their distance to revenue, not their search volume. A hundred visits from buyers beats ten thousand from students.' },
      { t: 'Expert-sourced pillar pages', d: 'Deep pages built from interviews with your practitioners, not paraphrased search results. The kind of depth that deserves to rank, which is why it keeps ranking.' },
      { t: 'Refreshes and reclamation', d: 'Rankings you already earned decay quietly. We audit, update, merge, and redirect so the equity you paid for keeps working.' },
      { t: 'Technical and structural hygiene', d: 'Internal linking, schema, crawlable structure, clean heading hierarchies. Unglamorous, and checked on every piece anyway.' }
    ],
    quote: { text: 'They cut our publishing volume nearly in half and organic signups went up 64%. Explain that to a volume shop.', who: 'HEAD OF GROWTH \u00b7 IGOTANOFFER' },
    need: 'You\u2019ve been burned by a volume shop and traffic drops every core update.', proof: { label: 'iGotAnOffer: signups +64%', href: 'Case-iGotAnOffer.dc.html' } },
  { slug: 'reports', no: '06', name: 'Reports', quip: 'Original data nobody can paraphrase.', blurb: 'The single most defensible content asset: research only you could run. We design the study, run it, and write it up so journalists cite it, AI engines quote it, and sales sends it.',
    bullets: ['Study design and data collection, from survey to product data', 'A flagship report plus the satellite content it spawns', 'A distribution kit: charts, quotes, and snippets ready to travel'],
    how: 'One original study outworks fifty blog posts. Journalists need a number to cite, AI engines need a source to quote, and sales needs a chart to send. We run the research end to end, then wring every drop of distribution out of it.',
    subs: [
      { t: 'Study design', d: 'We find the question your market keeps arguing about without data, then design the survey or product-data study that settles it credibly.' },
      { t: 'Collection and analysis', d: 'Fieldwork, cleaning, and analysis with the method stated in plain sight. Stated methods are what make journalists and LLMs comfortable citing you.' },
      { t: 'The flagship write-up', d: 'A report written like journalism, not a data dump: a headline finding, a narrative, and charts people screenshot.' },
      { t: 'The distribution kit', d: 'Every stat cut into charts, quotes, and social-ready snippets, so the report travels for quarters instead of trending for a day.' }
    ],
    quote: { text: 'Our report got cited by two industry newsletters and, weirdly, by Perplexity. Links we used to beg for.', who: 'CMO \u00b7 HR TECH' },
    need: 'You want links and citations that don\u2019t require begging.', proof: { label: 'Our own reports live on the blog', href: 'Blog.dc.html' } },
  { slug: 'social-content', no: '07', name: 'Social content', quip: 'Posts people don\u2019t scroll past.', blurb: 'We turn your long-form into native social, not links with a caption. Founder posts, teardowns, and receipts, written in a human voice because it literally is one.',
    bullets: ['LinkedIn ghostwriting from real interviews', 'Every flagship piece atomized into a week of posts', 'Zero \u201cAgree?\u201d bait. We have standards.'],
    how: 'The feed does not reward company pages posting links. It rewards people saying specific things in a recognizable voice. We ghostwrite from real interviews and atomize your long-form into posts that stand on their own, native to the platform they live on.',
    subs: [
      { t: 'Founder ghostwriting', d: 'Twenty minutes of interview becomes a month of posts in their voice, about decisions they made. No hustle-bait, no \u201cAgree?\u201d' },
      { t: 'Atomization with standards', d: 'Every flagship piece becomes a week of native posts: the argument, the data point, the story, the contrarian take. Not four links with captions.' },
      { t: 'Native formats', d: 'Text posts, carousels, and teardowns built for how each platform gets read, not exported from the blog and cropped.' },
      { t: 'A cadence that survives busy weeks', d: 'Batched, scheduled, and approved in one sitting a month, so the founder stays visible when the quarter gets loud.' }
    ],
    quote: { text: 'My LinkedIn drafts used to sit in my head for weeks. Now I approve a month of them over one coffee.', who: 'FOUNDER \u00b7 SERIES A SAAS' },
    need: 'Your company page posts into the void and your founder \u201cdoesn\u2019t have time.\u201d', proof: { label: 'Watch us do it for ourselves', href: 'https://deotherguys.substack.com/' } },
  { slug: 'newsletters', no: '08', name: 'Newsletters', quip: 'The inbox is the last quiet channel.', blurb: 'No algorithm sits between a newsletter and its reader. We build editions people open: one sharp idea, told well, sent on schedule, sounding like a person.',
    bullets: ['Editorial format and voice designed around one job', 'Written and shipped end to end, or coached into your team', 'Open and reply rates as the scoreboard, not list size'],
    how: 'Email is the only channel where nobody stands between you and the reader. No algorithm, no ad auction, no answer engine. Which means the writing has to do all the work: one sharp idea per edition, in a voice people recognize by the second paragraph.',
    subs: [
      { t: 'Format and voice design', d: 'One job per newsletter, decided up front: keep buyers warm, feed the community, or make the case slowly. Format, length, and voice follow from the job.' },
      { t: 'Written and shipped, end to end', d: 'We draft, edit, build, and send on schedule. Or we coach your team into doing it and get out of the way.' },
      { t: 'Growth without gimmicks', d: 'Subscribers earned by the content, cross-pollinated from your best pieces and posts. No purchased lists, no popup ambushes.' },
      { t: 'Opens and replies as the scoreboard', d: 'List size is vanity. We track opens, replies, and the pipeline that mentions the newsletter on the first call.' }
    ],
    quote: { text: 'People reply to our newsletter now. Real replies, with questions. It used to be a changelog nobody read.', who: 'MARKETING LEAD \u00b7 SERIES B SAAS' },
    need: 'You \u201chave a newsletter\u201d that\u2019s really a product changelog with feelings.', proof: { label: 'We write our own, in public', href: 'https://deotherguys.substack.com/' } },
  { slug: 'case-studies', no: '09', name: 'Case studies', quip: 'Proof, written like a story.', blurb: 'Most case studies are press releases wearing a trench coat. We write yours like the reader is deciding whether to trust you with money, because they are: real numbers, real context, real tension.',
    bullets: ['Customer interviews done by writers, not a form', 'Numbers with context attached, so they\u2019re believable', 'Versions cut for sales, social, and the homepage'],
    how: 'A buyer reading a case study is doing risk math: will this work for us, or will I look stupid for signing? Most case studies dodge that question with adjectives. Ours answer it with numbers in context, told as a story with real tension in it.',
    subs: [
      { t: 'Interviews done by writers', d: 'We interview your customer like journalists, not a form. That is where the tension, the doubts, and the quotable lines live.' },
      { t: 'Numbers with context', d: '\u201c+64% signups\u201d means nothing on its own. From what baseline, over what period, against what effort. Context is what makes a number believable.' },
      { t: 'Story structure', d: 'Stakes, false starts, the turn, the result. Buyers finish stories. Nobody finishes a press release.' },
      { t: 'The cut-down kit', d: 'Each study shipped in every size sales needs: the full story, the one-pager, the social version, the homepage stat.' }
    ],
    quote: { text: 'They interviewed our customers better than our own research team. The case study closed two deals in its first month.', who: 'SALES LEAD \u00b7 B2B PLATFORM' },
    need: 'You have happy customers and nothing to show for it.', proof: { label: 'Read ours. This is the product.', href: 'Case-Studies.dc.html' } }
];
