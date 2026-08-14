/**
 * Case study detail pages, ported from project/Case-*.dc.html. Numbers are
 * realistic stand-ins pending final figures from TOG; the chart geometry is
 * the prototype's hand-drawn "WE HOP ON → TODAY" SVG, verbatim.
 */

export type CaseChart = {
  heading: string;
  note: string;
  ariaLabel: string;
  /** X of the dashed kickoff line (0–800 viewBox). */
  kickoffX: number;
  /** Path of the flat "before us" line. */
  preD: string;
  /** Path of the rising "after us" line. */
  postD: string;
  /** Filled area under the post line. */
  fillD: string;
  /** End-of-line gold dot. */
  dot: { x: number; y: number };
  today: { label: string; badgeY: number; rotateY: number };
  startLabel: string;
  /** Second dashed line (ClickUp's falling publishing volume). */
  extra?: { d: string; label: string; labelY: number };
};

export type CaseStudy = {
  slug: string;
  client: string;
  /** Breadcrumb + next-chain label. */
  shortName: string;
  title: { t1: string; word: string; t2: string };
  metaLine: string;
  stats: { value: string; label: string; bg: 'coral' | 'purple-200' | 'cream-100'; tilt: number }[];
  chart: CaseChart;
  setup: string[];
  did: string[];
  quote: { text: string; who: string };
  shots: { placeholder: string; alt: string; caption: string }[];
  next: string;
};

export const CASES: CaseStudy[] = [
  {
    slug: 'igotanoffer',
    client: 'iGotAnOffer',
    shortName: 'iGotAnOffer',
    title: {
      t1: 'Content that ',
      word: 'sells',
      t2: ' coaching while it teaches interview prep',
    },
    metaLine: 'CLIENT: IGOTANOFFER · CAREER COACHING MARKETPLACE · ENGAGEMENT: 6 MONTHS, ONGOING',
    stats: [
      { value: '+64%', label: 'ORGANIC SIGNUPS, SIX MONTHS', bg: 'coral', tilt: -1 },
      { value: '38', label: 'GUIDES SHIPPED AND MAINTAINED', bg: 'purple-200', tilt: 0.6 },
      { value: '#1', label: 'FOR THEIR THREE HIGHEST-INTENT QUERIES', bg: 'cream-100', tilt: -0.5 },
    ],
    chart: {
      heading: 'ORGANIC SIGNUPS · WEEKLY',
      note: 'THEIR ANALYTICS. OUR FAVORITE CHART.',
      ariaLabel:
        'Line chart of weekly organic signups: flat for months, then rising 64 percent after The Other Guys join',
      kickoffX: 300,
      preD: 'M20,180 C80,176 140,186 200,178 C240,174 270,182 300,178',
      postD: 'M300,178 C360,168 420,150 480,132 C540,114 600,92 660,74 C700,62 740,54 780,50',
      fillD:
        'M300,178 C360,168 420,150 480,132 C540,114 600,92 660,74 C700,62 740,54 780,50 L780,210 L300,210 Z',
      dot: { x: 780, y: 50 },
      today: { label: 'TODAY · +64%', badgeY: 16, rotateY: 30 },
      startLabel: '12 MONTHS AGO',
    },
    setup: [
      'iGotAnOffer connects candidates with ex-interviewers for coaching. Their traffic was healthy and their conversion wasn’t. Thousands of readers arrived from generic interview-question roundups, skimmed, and left. The content taught a little and sold nothing, because it read like everyone else’s.',
      'The buyer here has a date on the calendar and money on the line. That person doesn’t want 50 tips. They want to know exactly what a Google hiring committee punishes, from someone who sat on one.',
    ],
    did: [
      'Rebuilt the library around high-intent queries. We mapped the questions candidates type in the two weeks before an interview and cut everything that didn’t serve them.',
      'Put coaches on every page. Each guide is co-built with an ex-interviewer from the relevant company, with their name, face, and booking link attached. The expertise is the product, so the post demos it.',
      'Added worked examples over advice. Real answers scored the way a committee scores them, with the reasoning visible. This is the material AI answers now cite, because nobody else has it.',
      'Refreshed on a schedule tied to hiring cycles instead of a content calendar. Fewer, better, on time.',
    ],
    quote: {
      text: 'A standout team among all the agencies I’ve worked with. It’s so hard to find a team that can write quality content, not simply marketing content.',
      who: 'HIRING TEAM, IGOTANOFFER',
    },
    shots: [
      {
        placeholder: 'Screenshot: a guide page with the coach card and booking link',
        alt: 'Screenshot of an iGotAnOffer guide with an embedded coach profile and booking link',
        caption: 'GUIDE PAGE WITH COACH CARD',
      },
      {
        placeholder: 'Screenshot: analytics view of signup growth from organic',
        alt: 'Screenshot of analytics showing organic signup growth over six months',
        caption: 'SIX MONTHS OF ORGANIC SIGNUPS',
      },
    ],
    next: 'synthesia',
  },
  {
    slug: 'synthesia',
    client: 'Synthesia',
    shortName: 'Synthesia',
    title: { t1: 'Every post ships with a ', word: 'demo', t2: ' made in the product' },
    metaLine: 'CLIENT: SYNTHESIA · AI VIDEO PLATFORM · ENGAGEMENT: ONE QUARTER, RENEWED',
    stats: [
      { value: '+41%', label: 'DEMO REQUESTS ATTRIBUTED TO BLOG', bg: 'coral', tilt: 0.8 },
      { value: '12', label: 'PIECES IN ONE QUARTER, EACH A WORKING DEMO', bg: 'purple-200', tilt: -0.7 },
      { value: '60+', label: 'AI-ANSWER CITATIONS WE TRACKED', bg: 'cream-100', tilt: 0.5 },
    ],
    chart: {
      heading: 'DEMO REQUESTS ATTRIBUTED TO BLOG · WEEKLY',
      note: 'THEIR ANALYTICS. OUR FAVORITE CHART.',
      ariaLabel:
        'Line chart of weekly demo requests from the blog: drifting sideways, then rising 41 percent after The Other Guys join',
      kickoffX: 380,
      preD: 'M20,168 C90,172 160,162 230,170 C290,176 340,166 380,172',
      postD: 'M380,172 C440,164 500,144 560,126 C620,110 700,88 780,76',
      fillD:
        'M380,172 C440,164 500,144 560,126 C620,110 700,88 780,76 L780,210 L380,210 Z',
      dot: { x: 780, y: 76 },
      today: { label: 'TODAY · +41%', badgeY: 30, rotateY: 40 },
      startLabel: '9 MONTHS AGO',
    },
    setup: [
      'Synthesia turns text into studio-grade video with AI avatars. Their blog explained this well and showed it never. A reader could finish three posts without seeing a single video made in the product, which is like a bakery blog with no bread in the photos.',
      'The buyer is an L&D lead or a product marketer who needs to believe two things: the output looks credible, and making it won’t eat a week. Prose can’t prove either.',
    ],
    did: [
      'Made the product the co-author. Every piece answers a real workflow question and embeds the video we made in Synthesia while writing it, with the build time stated next to it.',
      'Wrote for the forwarded read. Each post opens with the outcome and the receipt, because the person who signs off sees paragraph one and nothing else.',
      'Structured everything for answer engines. Clear claims, named authors, stated methods. When ChatGPT explains how to localize training video, these posts are what it quotes.',
    ],
    quote: {
      text: 'The posts do the selling before our team ever gets on a call. Prospects arrive having already watched the product work.',
      who: 'GROWTH TEAM, SYNTHESIA',
    },
    shots: [
      {
        placeholder: 'Screenshot: a post with the embedded Synthesia video and build-time note',
        alt: 'Screenshot of a blog post with an embedded Synthesia video and its stated build time',
        caption: 'POST WITH EMBEDDED DEMO VIDEO',
      },
      {
        placeholder: 'Screenshot: an AI answer citing the Synthesia post',
        alt: 'Screenshot of an AI search answer citing the Synthesia blog post as a source',
        caption: 'CITED IN AI ANSWERS',
      },
    ],
    next: 'clickup',
  },
  {
    slug: 'clickup',
    client: 'ClickUp',
    shortName: 'ClickUp',
    /* The comma lives inside the squiggled word so it can't wrap alone
       (same treatment as "Proof," on the index). */
    title: { t1: 'Publishing ', word: 'less,', t2: ' ranking more' },
    metaLine: 'CLIENT: CLICKUP · PRODUCTIVITY PLATFORM · ENGAGEMENT: TWO QUARTERS',
    stats: [
      { value: '−40%', label: 'PUBLISHING VOLUME, ON PURPOSE', bg: 'coral', tilt: -0.8 },
      { value: '24', label: 'PILLAR PAGES REBUILT FROM THE STUDS', bg: 'purple-200', tilt: 0.6 },
      { value: '+26%', label: 'ORGANIC TRAFFIC TO THE REFRESHED SET', bg: 'cream-100', tilt: -0.4 },
    ],
    chart: {
      heading: 'ORGANIC SESSIONS, REFRESHED SET · WEEKLY',
      note: 'TWO LINES. ONE FUNERAL, ONE PARTY.',
      ariaLabel:
        'Chart showing publishing volume dropping 40 percent while organic sessions rise 26 percent after The Other Guys join',
      kickoffX: 340,
      preD: 'M20,160 C90,166 170,156 250,164 C290,168 320,162 340,166',
      postD: 'M340,166 C420,160 500,142 580,124 C640,112 720,100 780,94',
      fillD:
        'M340,166 C420,160 500,142 580,124 C640,112 720,100 780,94 L780,210 L340,210 Z',
      dot: { x: 780, y: 94 },
      today: { label: 'TODAY · +26%', badgeY: 46, rotateY: 55 },
      startLabel: '12 MONTHS AGO',
      extra: {
        d: 'M340,120 C420,132 500,150 580,160 C660,170 720,174 780,176',
        label: 'PUBLISHING VOLUME −40%',
        labelY: 192,
      },
    },
    setup: [
      'ClickUp’s content machine was famous for volume. Volume built the audience, and then volume started eating it. Hundreds of adjacent posts competed with each other, refreshes lagged, and the pieces that earned the brand its reputation were buried under the ones filling a quota.',
      'Nobody needed convincing that quality mattered. They needed someone from outside the machine to decide what dies, what merges, and what gets rebuilt, and to write the rebuilds well enough to justify the funeral.',
    ],
    did: [
      'Audited the library by buyer job instead of keyword. Posts serving the same decision got merged. Posts serving no decision got retired, redirects and all.',
      'Rebuilt 24 pillar pages around real workspace setups. Each one walks a specific team through a working configuration, screenshots from a live workspace, so the page demos the product while it ranks.',
      'Wrote a maintenance rhythm the internal team owns. A page earns a refresh when its data ages or its feature ships, never because a calendar says so.',
    ],
    quote: {
      text: 'They talked us out of half our roadmap and traffic went up. That’s the whole review.',
      who: 'CONTENT TEAM, CLICKUP',
    },
    shots: [
      {
        placeholder: 'Screenshot: a rebuilt pillar page with a live workspace walkthrough',
        alt: 'Screenshot of a rebuilt ClickUp pillar page walking through a live workspace setup',
        caption: 'REBUILT PILLAR PAGE',
      },
      {
        placeholder: 'Screenshot: traffic chart across the two-quarter refresh',
        alt: 'Screenshot of a traffic chart showing growth across the two-quarter refresh',
        caption: 'TWO QUARTERS, REFRESHED SET',
      },
    ],
    next: 'igotanoffer',
  },
];

export const getCase = (slug: string) => CASES.find((item) => item.slug === slug);
