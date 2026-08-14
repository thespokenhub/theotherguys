/**
 * "Tale of the tape" data. Four rounds plus an honest "when they're the right
 * call" box for every archetype. Production can keep this static.
 */
export type Competitor = {
  key: string;
  name: string;
  tag: string;
  them: { who: string; clients: string; ai: string; buying: string; pick: string };
};

export type Category = { key: string; label: string; comps: Competitor[] };

export const ROUND_LABELS: { key: keyof Competitor['them']; label: string }[] = [
  { key: 'who', label: 'WHO DOES THE WORK' },
  { key: 'clients', label: 'HOW MANY CLIENTS AT ONCE' },
  { key: 'ai', label: 'WHERE AI FITS' },
  { key: 'buying', label: 'WHAT YOU’RE REALLY BUYING' },
];

export const US: Record<string, string> = {
  who: 'Tim and Nelson. The people on the sales call are the people in the doc. There is no bench.',
  clients: 'Four. Max. It’s the whole operating model.',
  ai: 'We use it as a research assistant and write for the machines that recommend you. The words are ours.',
  buying:
    'Two senior operators who’ve driven 2.6M+ registered users and 280% revenue growth, and who’ve built and marketed their own product, so we’re not guessing from the agency bleachers.',
};

export const CATEGORIES: Category[] = [
  {
    key: 'seo',
    label: 'SEO agencies',
    comps: [
      {
        key: 'volume',
        name: 'The Volume Shop',
        tag: '40 posts a month, guaranteed',
        them: {
          who: 'A rotating bench of freelancers you never meet, briefed by a spreadsheet.',
          clients: 'Dozens. You’re a row in the delivery tracker.',
          ai: 'Quietly AI-generating half of it since 2024.',
          buying: 'Output. Sheer, undifferentiated tonnage.',
          pick: 'If you genuinely need 500 near-identical location pages, a volume shop will grind them out cheaper than we ever could. That’s a factory job, and they own the factory.',
        },
      },
      {
        key: 'enterprise',
        name: 'The Enterprise Retainer',
        tag: 'Slide decks, SLAs, quarterly reviews',
        them: {
          who: 'A strategist presents, an account manager translates, someone junior writes.',
          clients: 'Many. You get the B-team unless you’re the biggest logo.',
          ai: 'A “proprietary AI workflow” slide in every QBR.',
          buying: 'Process, reporting, and someone to blame.',
          pick: 'If procurement requires three references, an MSA, and a named account director, they’re built for that maze and we are not. Big-company plumbing is a real service.',
        },
      },
      {
        key: 'boutique',
        name: 'The Boutique That’s Genuinely Good',
        tag: 'Small, senior, picky. Sound familiar?',
        them: {
          who: 'Senior people who write. Honestly, the good ones exist and we respect them.',
          clients: 'A handful, like us.',
          ai: 'Thoughtful about it, like us.',
          buying: 'Roughly what you’d buy from us, with a different accent.',
          pick: 'If their niche is your niche, say a boutique that only does fintech SEO and you’re a fintech, take the specialist. We’d rather lose you to good work than win you into worse.',
        },
      },
      {
        key: 'links',
        name: 'The Link Builders',
        tag: '“DR 70+ placements, white hat, promise”',
        them: {
          who: 'Outreach VAs sending 2,000 emails that start with “I loved your recent article.”',
          clients: 'As many as the inbox tool allows.',
          ai: 'The emails? Oh, entirely.',
          buying: 'Backlinks of wildly variable hygiene.',
          pick: 'If your content is already excellent and genuinely just needs authority, a careful link team can help. Audit their placements first. All of them.',
        },
      },
      {
        key: 'aipowered',
        name: 'The AI-Powered SEO Startup',
        tag: '“10x your content velocity”',
        them: {
          who: 'A model, a template, and one human “editor” per 40 drafts.',
          clients: 'Unlimited. That’s the pitch.',
          ai: 'It’s the whole product.',
          buying: 'Speed. Words per dollar, optimized hard.',
          pick: 'If you need placeholder coverage on 300 long-tail queries while you build real content, it’s a rational stopgap. Just don’t point it at the queries your buyers ask.',
        },
      },
    ],
  },
  {
    key: 'design',
    label: 'Design agencies',
    comps: [
      {
        key: 'award',
        name: 'The Award-Winning Studio',
        tag: 'Gorgeous site, three case studies, all rebrands',
        them: {
          who: 'Brilliant designers. The words arrive last, from whoever’s free.',
          clients: 'A few big ones at a time.',
          ai: 'Midjourney moodboards, sure. Writing? Not their fight.',
          buying: 'A beautiful container. Content sold separately.',
          pick: 'If your problem is the brand and the site itself, hire them, seriously. Then hire someone who writes, because “lorem ipsum” ships more often than anyone admits.',
        },
      },
      {
        key: 'sprint',
        name: 'The Brand Sprint Shop',
        tag: 'New identity in 4 weeks',
        them: {
          who: 'A tight crew running a fixed playbook: workshop, moodboard, reveal.',
          clients: 'Back to back. The sprint ends and so does the relationship.',
          ai: 'Wherever it speeds the sprint.',
          buying: 'A logo, a palette, a deck. Momentum, briefly.',
          pick: 'Pre-seed and need to look real by demo day? The sprint shop is exactly right. Content strategy would be premature; take the logo and run.',
        },
      },
      {
        key: 'webflow',
        name: 'The Webflow Partner Agency',
        tag: 'Sites that ship fast and score 98 on Lighthouse',
        them: {
          who: 'Developers and designers who build superbly and write “conversion copy” reluctantly.',
          clients: 'Project-based, many at once.',
          ai: 'For alt text and placeholder copy, absolutely.',
          buying: 'A fast, maintainable site. Empty, but fast.',
          pick: 'When the bottleneck is shipping the website, take them. We’ll happily fill the pages after; that handoff works great.',
        },
      },
      {
        key: 'fullservice',
        name: 'The Full-Service Creative Agency',
        tag: '“We do everything” and mean it',
        them: {
          who: 'Specialists in everything, which for your budget tier means juniors in everything.',
          clients: 'A pyramid of them. Guess your layer.',
          ai: 'A capabilities deck about it, at minimum.',
          buying: 'One throat to choke, many hands in the retainer.',
          pick: 'If you truly need TV, OOH, social, web, and PR coordinated under one P&L, full-service integration is a real advantage we don’t offer.',
        },
      },
    ],
  },
  {
    key: 'ai',
    label: 'AI content platforms',
    comps: [
      {
        key: 'oneclick',
        name: 'The One-Click Blog Machine',
        tag: 'Keyword in, “SEO-optimized article” out',
        them: {
          who: 'A fine-tuned model and a very confident landing page.',
          clients: 'Self-serve. You and everyone targeting your keywords.',
          ai: 'All of it. That’s the product and the problem.',
          buying: 'The same article your competitor generates on Tuesday.',
          pick: 'For internal docs, meta descriptions, or genuinely disposable text, honestly, fine. Just don’t serve it to the buyer, and never to the machines choosing citations.',
        },
      },
      {
        key: 'humanloop',
        name: 'The AI-With-Human-Editors Platform',
        tag: '“AI speed, human quality”',
        them: {
          who: 'A model drafts, a marketplace editor gets 20 minutes to fix it.',
          clients: 'Thousands, by design.',
          ai: 'The engine. The human is the seatbelt.',
          buying: 'Grammatical, plausible, forgettable content at scale.',
          pick: 'Mid-funnel glossary pages at volume with a real editor of your own on top? Workable. It’s a materials supplier, not a builder.',
        },
      },
      {
        key: 'suite',
        name: 'The Enterprise AI Content Suite',
        tag: 'Brand voice, workflows, 47 integrations',
        them: {
          who: 'Software. Your team still does the thinking, now with more dashboards.',
          clients: 'It’s SaaS, so all of them.',
          ai: 'Yes, plus governance features to feel safe about it.',
          buying: 'Tooling. Useful if, and only if, you have the writers.',
          pick: 'If you have a strong in-house team drowning in production mechanics, the suite genuinely helps them. It’s a tool for writers, not a replacement. We sometimes recommend one.',
        },
      },
      {
        key: 'diy',
        name: 'The DIY Stack (ChatGPT + You)',
        tag: '$20/month and a free evening',
        them: {
          who: 'You, at 11pm, prompting.',
          clients: 'Just you. Full attention, zero experience.',
          ai: 'Obviously.',
          buying: 'Your own time, spent on a craft you’re learning live.',
          pick: 'Pre-revenue and every dollar counts? This is the right call and we mean that. Read our blog, steal our playbook, come back when content is worth real money to you.',
        },
      },
    ],
  },
  {
    key: 'freelance',
    label: 'A freelancer',
    comps: [
      {
        key: 'freelancer',
        name: 'A Great Freelance Writer',
        tag: 'The good ones are genuinely good',
        them: {
          who: 'One talented person. When they’re available. Until they’re not.',
          clients: 'Five to ten, juggled heroically.',
          ai: 'Depends entirely on the person. Ask to watch them work.',
          buying: 'Words, usually good ones. Strategy, distribution, and continuity are your job.',
          pick: 'One-off pieces, an overflow month, a domain where they’re the known expert: a great freelancer wins on price and speed. We keep a list of ones we’d vouch for. Ask us.',
        },
      },
    ],
  },
  {
    key: 'inhouse',
    label: 'An in-house hire',
    comps: [
      {
        key: 'hire',
        name: 'Your First Content Hire',
        tag: 'One salary, all the hats',
        them: {
          who: 'One mid-level generalist doing strategy, writing, SEO, social, and design. Alone.',
          clients: 'One. You. That part is genuinely great.',
          ai: 'Whatever they can get approved.',
          buying:
            'A teammate. Plus recruiting, ramp-up, management, and the risk of a bad hire at a full salary.',
          pick: 'When content is core to the company forever, in-house is the endgame and we’ll say so on the call. Best sequence we’ve seen: engine built by seniors first, then hire someone to run it. We’ve helped write that job description.',
        },
      },
    ],
  },
];
