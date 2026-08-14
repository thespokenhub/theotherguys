/**
 * The wall of love. Two of these are derived from real Synthesia and
 * iGotAnOffer feedback; the rest are drafted stand-ins pending real reviews
 * from TOG (project/HANDOFF.md).
 */
export type Review = { quote: string; who: string };

export const REVIEWS: Review[] = [
  {
    quote:
      'The posts do the selling before our team ever gets on a call. Prospects arrive having already watched the product work.',
    who: 'GROWTH TEAM · SYNTHESIA',
  },
  {
    quote:
      'First agency where the people who pitched us are the people who wrote every single word. It shows.',
    who: 'HEAD OF CONTENT · AI VIDEO PLATFORM',
  },
  {
    quote:
      'They cut our publishing volume nearly in half and traffic went up. I still bring the chart to meetings.',
    who: 'SEO LEAD · PRODUCTIVITY SUITE',
  },
  {
    quote:
      'Our coaches finally recognize their own expertise in the articles. That never happened with the last three agencies.',
    who: 'FOUNDER · IGOTANOFFER',
  },
  {
    quote:
      'Tim argued with me about my own positioning and he was right. Worth the retainer for that fight alone.',
    who: 'CEO · B2B SAAS, SERIES A',
  },
  {
    quote:
      'We started getting cited by ChatGPT for our core category questions within a quarter. Sales noticed before I did.',
    who: 'PMM · RESEARCH PLATFORM',
  },
  {
    quote: 'The briefs alone are better than the finished articles we used to pay for.',
    who: 'VP MARKETING · FINTECH',
  },
  {
    quote:
      'Nelson turned our roadmap ramble into a narrative our sales team now uses word for word.',
    who: 'HEAD OF PRODUCT · SPRIG',
  },
  {
    quote:
      'Four clients max sounded like a marketing line. Then they said no to us for a quarter. It is not a line.',
    who: 'DIRECTOR OF DEMAND GEN · HR TECH',
  },
  {
    quote: 'The only agency content our CEO has ever forwarded back to the company Slack.',
    who: 'CONTENT MANAGER · ROOFR',
  },
  {
    quote:
      'Reading their newsletter is like watching someone build an agency with the garage door open. Hired them because of it.',
    who: 'FOUNDER · DEVTOOLS STARTUP',
  },
  {
    quote:
      'They interviewed our customers better than our own research team. The case study closed two deals in its first month.',
    who: 'SALES LEAD · B2B PLATFORM',
  },
  {
    quote:
      'Every draft arrives with the receipts: who said it, where the number comes from, why it matters. Legal loves them, which is a sentence I never expected to type.',
    who: 'COMMS LEAD · ENTERPRISE SAAS',
  },
  {
    quote: 'We went from eight forgettable posts a month to two that people reply to.',
    who: 'MARKETING LEAD · SERIES B SAAS',
  },
  {
    quote:
      'I compared them to three bigger agencies. They told me, unprompted, when a competitor would be the better pick. Signed the next day.',
    who: 'COO · LOGISTICS TECH',
  },
];

const NOTE_BACKGROUNDS = ['#FBF6EF', '#E6DEFB', '#FBF6EF', '#F1705B', '#FBF6EF', '#E6DEFB'];

/** The scatter that keeps the wall from looking like a spreadsheet. */
export function noteStyle(index: number) {
  return {
    background: NOTE_BACKGROUNDS[index % NOTE_BACKGROUNDS.length],
    rotate: `${((index % 5) - 2) * 0.7}deg`,
    tapeLeft: `${28 + ((index * 13) % 40)}%`,
    tapeRotate: `${((index % 3) - 1) * 3}deg`,
  };
}
