/**
 * Blog data. Posts are markdown files in `content/posts`, edited in the browser
 * through Sveltia CMS at /admin and read here at build time — the git-markdown
 * option HANDOFF.md leans on. Pillars and authors stay in code: they're
 * structure, not content, and they change about once a year.
 *
 * Posts without a body render the "still in the moving boxes" card until their
 * content is migrated from the old blog.
 */
import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import { countWords, readingMinutes, renderMarkdown, type Heading } from './markdown';

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

/** A rendered post body. Empty markdown means the post has no body yet. */
export type PostBody = {
  /** Hero illustration caption, mono uppercase. */
  heroCaption: string;
  /** Handwritten aside under the table of contents. */
  tocNote: string;
  /** Sanitized HTML, rendered into the `.article` scope in globals.css. */
  html: string;
  /** Every heading in the body, in document order. "THE MAP" uses the `##`s. */
  headings: Heading[];
};

export type Post = {
  slug: string;
  pillar: PillarKey;
  type?: 'report';
  title: string;
  /** Headline split for the squiggle; only set when `squiggle` is filled in. */
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

/* ── Reading the markdown ────────────────────────────────────────────────── */

const POSTS_DIR = path.join(process.cwd(), 'content/posts');

/** "Jun 17, 2026", the format the whole site's meta lines are built around. */
const DATE = new Intl.DateTimeFormat('en-US', {
  month: 'short',
  day: 'numeric',
  year: 'numeric',
  timeZone: 'UTC',
});

/** Drafts are visible while writing and while previewing, never in production. */
const SHOW_DRAFTS = process.env.NODE_ENV !== 'production';

const fail = (file: string, why: string): never => {
  throw new Error(`content/posts/${file}: ${why}`);
};

const text = (value: unknown) => (typeof value === 'string' ? value.trim() : '');

/**
 * Where the squiggle goes. Prefers a whole-word hit so a squiggle of "us"
 * doesn't underline the "us" inside "because", and tolerates a word carrying
 * its own punctuation ("less,") the way the case-study headlines do.
 */
function splitHeadline(headline: string, squiggle: string, file: string) {
  if (!squiggle) return undefined;
  const escaped = squiggle.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const whole = new RegExp(`(?<![\\p{L}\\p{N}])${escaped}(?![\\p{L}\\p{N}])`, 'u');
  const at = whole.exec(headline)?.index ?? headline.indexOf(squiggle);
  if (at < 0) fail(file, `squiggle "${squiggle}" is not in the headline "${headline}"`);
  return {
    t1: headline.slice(0, at),
    word: squiggle,
    t2: headline.slice(at + squiggle.length),
  };
}

/** A post plus the two frontmatter facts only the loader below needs. */
type Entry = { post: Post; draft: boolean; stamp: number };

function readPost(file: string): Entry {
  const { data, content } = matter(fs.readFileSync(path.join(POSTS_DIR, file), 'utf8'));
  const slug = file.replace(/\.md$/, '');

  /* Pillar hubs and posts share the /blog/ namespace, so a post named after a
     pillar would quietly shadow that hub's page. Catch it at build time. */
  if (slug in PILLARS) fail(file, `slug "${slug}" collides with the ${slug} pillar hub`);

  const title = text(data.title) || fail(file, 'needs a title');
  const pillar = text(data.pillar);
  if (!(pillar in PILLARS)) fail(file, `pillar "${pillar}" is not one of ${PILLAR_KEYS.join(', ')}`);
  const author = text(data.author);
  if (!(author in AUTHORS)) {
    fail(file, `author "${author}" is not one of ${Object.keys(AUTHORS).join(', ')}`);
  }

  /* The datetime widget hands back a string; YAML turns a bare date into a
     Date. Both land on the same "Jun 17, 2026". */
  const stamp = new Date(data.date instanceof Date ? data.date : text(data.date));
  if (Number.isNaN(stamp.valueOf())) fail(file, `date "${String(data.date)}" is not a date`);

  const ill = text(data.ill) || fail(file, 'needs an illustration description (it is the alt text)');
  const body = content.trim() ? renderMarkdown(content) : undefined;

  /* Word count once a post has a body; the frontmatter override is what keeps
     the not-yet-migrated stubs showing their real length. */
  const override = typeof data.mins === 'number' && data.mins > 0 ? data.mins : 0;
  const mins = override || (body ? readingMinutes(countWords(content)) : 1);

  return {
    draft: data.draft === true,
    stamp: stamp.valueOf(),
    post: {
      slug,
      pillar: pillar as PillarKey,
      ...(data.report === true ? { type: 'report' as const } : {}),
      title,
      titleParts: splitHeadline(text(data.headline) || title, text(data.squiggle), file),
      blurb: text(data.blurb),
      authorKey: author as AuthorKey,
      date: DATE.format(stamp),
      mins,
      ill,
      ...(text(data.image) ? { image: text(data.image) } : {}),
      ...(body
        ? {
            body: {
              heroCaption: text(data.caption) || ill.toUpperCase(),
              tocNote: text(data.note) || `no wrong turns, it’s ${mins} min`,
              html: body.html,
              headings: body.headings,
            },
          }
        : {}),
    },
  };
}

/**
 * Newest first, which is the order the index, the pillar hubs, and the author
 * pages all render in. Two posts on the same day fall back to the time in the
 * frontmatter, then to the slug, so the order never depends on the filesystem.
 */
export const POSTS: Post[] = fs
  .readdirSync(POSTS_DIR)
  .filter((file) => file.endsWith('.md'))
  .map(readPost)
  .filter((entry) => SHOW_DRAFTS || !entry.draft)
  .sort((a, b) => b.stamp - a.stamp || a.post.slug.localeCompare(b.post.slug))
  .map((entry) => entry.post);

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
