/**
 * Blog data, ported from project/posts.js. This is the schema the eventual CMS
 * (git-markdown, per HANDOFF.md) replaces: until then the posts live here.
 *
 * Only one post has its full body written (`good-writing-work`, the article
 * the Blog-Post prototype was designed around). The rest render a stub body
 * until their content is moved over from the old blog.
 */

export type PillarKey = 'seo' | 'ai' | 'content' | 'craft' | 'notice' | 'us';

export type Pillar = {
  key: PillarKey;
  no: string;
  label: string;
  /** Card blurb on the blog index. */
  card: string;
  /** Headline: t1 + squiggled word + t2. */
  t1: string;
  word: string;
  t2: string;
  desc: string;
};

export const PILLARS: Record<PillarKey, Pillar> = {
  seo: {
    key: 'seo',
    no: '01',
    label: 'SEO',
    card: 'Technical fixes, on-page work, and the fundamentals that still drive organic traffic.',
    t1: 'Rank where they ',
    word: 'still',
    t2: ' search.',
    desc: 'Google still sends more buyers than every other channel combined, and most of what wins there is unglamorous: clean structure, intent-matched pages, titles written for the click. This folder holds the technical fixes, on-page optimization, and fundamentals that keep organic traffic compounding.',
  },
  ai: {
    key: 'ai',
    no: '02',
    label: 'AI Search',
    card: 'How brands show up when a machine does the recommending.',
    t1: 'Be the answer the ',
    word: 'machine',
    t2: ' gives.',
    desc: 'Your next buyer may never see your homepage. They’ll see what ChatGPT, Perplexity, and Google’s AI Overviews say about you, built from whatever those systems chose to cite. This folder is about getting found, quoted, and recommended when a machine assembles the answer.',
  },
  content: {
    key: 'content',
    no: '03',
    label: 'Content Marketing',
    card: 'Strategy, distribution, and an owned audience that turns writing into pipeline.',
    t1: 'Content that turns into ',
    word: 'pipeline',
    t2: '.',
    desc: 'Content as a growth channel, not a calendar to feed. Strategy, distribution, and building an owned audience, written for the person who signs and the person who forwards it to them.',
  },
  craft: {
    key: 'craft',
    no: '04',
    label: 'The Craft',
    card: 'Writing, voice, and editing. Good enough that people and machines want to cite it.',
    t1: 'The ',
    word: 'craft',
    t2: ' of it.',
    desc: 'Content as a craft: the writing, voice, and editing underneath everything else we publish. What makes a piece good enough that people finish it and machines cite it.',
  },
  notice: {
    key: 'notice',
    no: '05',
    label: 'Did You Notice',
    card: 'Small, clever, overlooked details on real websites, noticed out loud.',
    t1: 'Did you ',
    word: 'notice',
    t2: '...?',
    desc: 'An observation series. We spot the small, clever, or overlooked details on real websites, critique where it’s earned, and sketch what might have worked better. Every piece starts as a “did you notice...” moment, because that’s how we talk to each other anyway.',
  },
  us: {
    key: 'us',
    no: '06',
    label: 'Between Us',
    card: 'Candid, opinionated musings on the industry. Every piece opens the same way.',
    t1: 'Between ',
    word: 'us',
    t2: ',',
    desc: 'Candid, opinionated musings on the industry we work in. Every piece opens with “Between us, ...” and then says the thing agencies usually save for the second drink.',
  },
};

export const PILLAR_KEYS = Object.keys(PILLARS) as PillarKey[];

export type AuthorKey = 'tim' | 'nelson';

export type Author = {
  key: AuthorKey;
  name: string;
  role: string;
  photo: string;
  linkedin: string;
  bio: string;
  /** One-liner for the author box at the foot of a post. */
  shortBio: string;
  /** Handwritten note on the author page. */
  beat: string;
};

export const AUTHORS: Record<AuthorKey, Author> = {
  tim: {
    key: 'tim',
    name: 'Timothy Agbola',
    role: 'Partner · Strategy',
    photo: '/images/tim.png',
    linkedin: 'https://www.linkedin.com/in/timothy-agbola-7092571b5/',
    bio: 'One half of The Other Guys. Sets the strategy, carries the heavy ideas, and argues for the reader in every draft. Before this he built content at iGotAnOffer and Launchspace, where he got obsessed with one question: why does distribution get all the credit when the writing does the work?',
    shortBio:
      'One half of The Other Guys. Writes the words, carries the heavy ideas, previously built content at iGotAnOffer and Launchspace.',
    beat: 'Writes mostly about AI search, answer engines, and what earns a citation.',
  },
  nelson: {
    key: 'nelson',
    name: 'Nelson Ansah',
    role: 'Partner · Execution',
    photo: '/images/nelson.png',
    linkedin: 'https://www.linkedin.com/in/thenelsonansah/',
    bio: 'The other half. Turns the plan into published work, on time, at the bar. Has shipped for Sprig, ClickUp, Skillzy, and Synthesia, mostly turning product roadmaps into stories buyers finish.',
    shortBio:
      'The other half of The Other Guys. Turns the plan into published work, on time, at the bar. Has shipped for Sprig, ClickUp, Skillzy, and Synthesia.',
    beat: 'Writes mostly about buyer-first strategy and the unglamorous craft of shipping.',
  },
};

/** Blocks a post body is written in. The CMS maps markdown onto these. */
export type BodyBlock =
  | { type: 'p'; text: string }
  | { type: 'h2'; id: string; text: string; toc: string }
  | { type: 'quote'; text: string };

export type PostBody = {
  /** Hero illustration caption, mono uppercase. */
  heroCaption: string;
  /** Handwritten aside under the table of contents. */
  tocNote: string;
  blocks: BodyBlock[];
};

export type Post = {
  slug: string;
  pillar: PillarKey;
  type?: 'report';
  title: string;
  /** Title split for the squiggle; only set on posts with a written body. */
  titleParts?: { t1: string; word: string; t2: string };
  blurb: string;
  authorKey: AuthorKey;
  date: string;
  mins: number;
  /** Description of the intended pencil illustration. Doubles as alt text. */
  ill: string;
  /** Rendered illustration, once drawn. Absent posts show the briefed placeholder. */
  image?: string;
  body?: PostBody;
};

export const POSTS: Post[] = [
  {
    slug: 'between-us-retainers',
    image: '/images/posts/between-us-retainers.webp',
    pillar: 'us',
    title: 'Between Us, Most Retainers Are Rent',
    blurb:
      'Between us, a lot of monthly fees buy a standing meeting, not standing work. Here’s how to tell which one you’re paying for.',
    authorKey: 'nelson',
    date: 'Jul 22, 2026',
    mins: 4,
    ill: 'Pencil drawing: two chairs leaned close together, one whispering to the other',
  },
  {
    slug: 'ai-citations',
    image: '/images/posts/ai-citations.webp',
    pillar: 'ai',
    type: 'report',
    title: 'What AI Search Cites (We Checked 200 Answers)',
    blurb:
      'We asked ChatGPT, Perplexity, and Google AI Mode the questions your buyers ask, then traced every citation. The pattern is uncomfortable for most content teams.',
    authorKey: 'tim',
    date: 'Jul 14, 2026',
    mins: 7,
    ill: 'Pencil drawing: a detective with a magnifying glass inspecting a robot’s footnotes',
  },
  {
    slug: 'notice-empty-state',
    image: '/images/posts/notice-empty-state.webp',
    pillar: 'notice',
    title: 'Did You Notice What Stripe Hides in Its 404 Page?',
    blurb:
      'A dead end most teams ignore, turned into the most charming page on the site. We break down why it works and what everyone else leaves on the table.',
    authorKey: 'nelson',
    date: 'Jun 30, 2026',
    mins: 4,
    ill: 'Pencil drawing: a magnifying glass hovering over the corner of a webpage',
  },
  {
    slug: 'good-writing-work',
    image: '/images/posts/good-writing-work.webp',
    pillar: 'craft',
    title: 'Good Writing Was Always This Much Work',
    titleParts: { t1: 'Good writing was always this much ', word: 'work', t2: '' },
    blurb: 'AI didn’t change the rules. It just made it impossible to pretend we were following them.',
    authorKey: 'tim',
    date: 'Jun 17, 2026',
    mins: 5,
    ill: 'Pencil drawing: a writer buried under drafts at a desk with a grandfather clock',
    body: {
      heroCaption: 'THE PROCESS, ACCURATELY DEPICTED.',
      tocNote: 'no wrong turns, it’s 5 min',
      blocks: [
        {
          type: 'p',
          text: 'There’s a version of the documentary “Jiro Dreams of Sushi” where the sushi master explains why his apprentices spend years on rice alone. Nobody watches that scene and thinks the apprentice is being cheated. We understand that the boring reps are where the good stuff comes from. Then we go back to our content calendars and demand eight publish-ready drafts a week.',
        },
        {
          type: 'p',
          text: 'Most of the apprentices quit. The ones who stayed learned to cook rice better than anyone alive. Content teams built the opposite system: nobody quits, nothing gets learned, and the rice is from a vending machine.',
        },
        { type: 'h2', id: 'chatgpt', text: 'Then ChatGPT showed up', toc: 'Then ChatGPT showed up' },
        {
          type: 'p',
          text: 'And boy, did it reveal what we’d been doing all along. Most templates were templates for years before a model could fill them in. If you read the previous article, you know something content-ish is dead. And it didn’t die in December. It was probably never alive in the first place.',
        },
        {
          type: 'p',
          text: 'Now comes the harder question. You do the work and check your traffic. The answer is uncomfortable and true at the same time: the reader can tell. Machines can tell too, which is new, and which is why the shortcut era is closing.',
        },
        {
          type: 'quote',
          text: 'The exercise itself is simple but the honesty required is brutal. Open your blog. Pick your top 20 posts by traffic. Read them as a buyer would.',
        },
        {
          type: 'h2',
          id: 'reality',
          text: 'First, you need to see reality clearly',
          toc: 'Seeing reality clearly',
        },
        {
          type: 'p',
          text: 'Out of 20 published posts from a typical 2023 to 2025 archive, I could honestly say maybe eight of them contained anything ChatGPT couldn’t replicate. Maybe. And I’m being generous because I wrote some of them and my ego was doing backflips trying to convince me they were special.',
        },
        {
          type: 'p',
          text: 'For each post, ask: could ChatGPT write this? Not “could it produce these exact words.” Could it produce the same value to the reader? If the answer is yes, the post was a commodity the day you published it. The traffic it earned was rented, and the rent is going up.',
        },
        {
          type: 'h2',
          id: 'unaiable',
          text: 'Making pieces “un-AI-able”',
          toc: 'Making it un-AI-able',
        },
        {
          type: 'p',
          text: 'What survives: original data from your product, lessons from client work with numbers attached, a named expert’s reasoning on a live decision, and opinions somebody would argue with. What a model can’t fake is having been there. That’s the whole strategy, and yes, it’s more work. It was always this much work. We just stopped pretending otherwise.',
        },
      ],
    },
  },
  {
    slug: 'ai-didnt-kill',
    image: '/images/posts/ai-didnt-kill.webp',
    pillar: 'ai',
    title: 'AI Didn’t Kill Good Writing Because There Wasn’t Much to Kill',
    blurb:
      'AI made it really obvious how much of our “content marketing” was already a zombie shambling around, moaning “10 tips... must... rank...”',
    authorKey: 'tim',
    date: 'Jun 17, 2026',
    mins: 3,
    ill: 'Pencil drawing: a friendly robot holding a paintbrush over a pile of identical listicles',
  },
  {
    slug: 'seo-unsexy-fixes',
    image: '/images/posts/seo-unsexy-fixes.webp',
    pillar: 'seo',
    title: 'The Unsexy SEO Fixes That Paid for Themselves in a Quarter',
    blurb:
      'No hacks, no schemes. Internal links, titles rewritten for the click, and pruning the pages nobody asked for. The boring stuff, ranked by payback.',
    authorKey: 'tim',
    date: 'May 5, 2026',
    mins: 6,
    ill: 'Pencil drawing: a plumber tightening pipes underneath a giant search bar',
  },
  {
    slug: 'signs-and-doesnt',
    image: '/images/posts/signs-and-doesnt.webp',
    pillar: 'content',
    title: 'Write for the Person Who Signs, and the One Who Doesn’t',
    blurb:
      'Your champion forwards the post. Their CFO reads two paragraphs. Both need to find what they came for.',
    authorKey: 'nelson',
    date: 'Apr 22, 2026',
    mins: 6,
    ill: 'Pencil drawing: two readers sharing one newspaper, each looking at a different page',
  },
  {
    slug: 'client-first-30',
    pillar: 'craft',
    title: 'What We Do When a Client Hires Us',
    blurb:
      'A peek into those first 30 days here at The Other Guys. And a breakdown of our favorite client onboarding question.',
    authorKey: 'nelson',
    date: 'Jan 30, 2026',
    mins: 3,
    ill: 'Pencil drawing: three people huddled over a table labeled “the narrative spine”',
  },
  {
    slug: 'january-dont-publish',
    image: '/images/posts/january-dont-publish.webp',
    pillar: 'content',
    title: 'It’s January. Please Don’t Publish Anything Yet.',
    blurb: 'Give this a read. It’ll make your January(s) so much better.',
    authorKey: 'nelson',
    date: 'Jan 30, 2026',
    mins: 3,
    ill: 'Pencil drawing: a typewriter tangled in bare winter branches, page reading “January”',
  },
  {
    slug: 'content-cyborg',
    image: '/images/posts/content-cyborg.webp',
    pillar: 'ai',
    title: 'The Content Cyborg + AI Musings',
    blurb:
      'You tried going full human. Then you tried going full robot. Here’s the one thing left that truly wins content for your biz.',
    authorKey: 'tim',
    date: 'Jan 30, 2026',
    mins: 3,
    ill: 'Pencil drawing: a profile of a head with gears and a pencil where the brain goes',
  },
  {
    slug: 'aeo-manners',
    pillar: 'seo',
    title: 'AEO Is Just SEO With Better Manners',
    blurb:
      'Answer engines reward the things good editors always did. Clear claims, named sources, actual expertise. The checklist is shorter than the acronym suggests.',
    authorKey: 'tim',
    date: 'Nov 12, 2025',
    mins: 5,
    ill: 'Pencil drawing: a robot politely holding a door open for a stack of documents',
  },
  {
    slug: 'other-way',
    image: '/images/posts/other-way.webp',
    pillar: 'content',
    title: 'The Other Way: Our Content Strategy',
    blurb:
      'Six months ago, Tim and I made a bet that would either validate everything we believed about content marketing or prove us spectacularly wrong.',
    authorKey: 'nelson',
    date: 'Oct 7, 2025',
    mins: 3,
    ill: 'Pencil drawing: a winding path up a hill with signposts reading “clear strategy, quality, impact”',
  },
  {
    slug: 'case-against-tog',
    image: '/images/posts/case-against-tog.webp',
    pillar: 'us',
    title: 'Between Us, Here’s the Case Against The Other Guys',
    blurb: 'We’re going to make a strong case for why you shouldn’t hire us.',
    authorKey: 'nelson',
    date: 'Oct 7, 2025',
    mins: 3,
    ill: 'Pencil drawing: a robot lawyer pointing at a confused jury of doodles',
  },
  {
    slug: 'sacred-rule',
    image: '/images/posts/sacred-rule.webp',
    pillar: 'content',
    title: 'The One Content Marketing Tweak That Can Drive 1,000+ Users (By Breaking a Sacred Rule)',
    blurb:
      'Most content advice tells you to “write for your audience.” Here’s why that mindset quietly kills pipeline, and how writing for buyers instead can turn a single blog post into a revenue-generating asset.',
    authorKey: 'nelson',
    date: 'Jul 25, 2025',
    mins: 3,
    ill: 'Pencil drawing: a stone tablet of “sacred rules” cracking, users pouring out',
  },
  {
    slug: 'why-here',
    image: '/images/posts/why-here.webp',
    pillar: 'craft',
    title: 'Why The &#!$ Are We Here?',
    blurb:
      'Up until a week ago, we weren’t an agency. Nine sprint sessions and sleepless nights later, we launched The Other Guys.',
    authorKey: 'nelson',
    date: 'Jul 25, 2025',
    mins: 3,
    ill: 'Pencil drawing: two figures nailing a hand-painted “open” sign above a door',
  },
];

export const getPost = (slug: string) => POSTS.find((post) => post.slug === slug);

export const isPillarKey = (value: string): value is PillarKey => value in PILLARS;

/** "⬛ REPORT · SEO · MAY 5, 2026 · 6 MIN" style meta line. */
export function postMeta(post: Post, { withPillar = true }: { withPillar?: boolean } = {}) {
  const parts = [
    post.type === 'report' ? '⬛ REPORT' : null,
    withPillar ? PILLARS[post.pillar].label.toUpperCase() : null,
    post.date.toUpperCase(),
    `${post.mins} MIN`,
  ];
  return parts.filter(Boolean).join(' · ');
}
