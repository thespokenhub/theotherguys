/** Shared links and routes. See project/HANDOFF.md → "Links". */

export const CALENDLY =
  'https://calendly.com/theotherguyss/let-s-talk-about-your-content-marketing';
export const NEWSLETTER = 'https://deotherguys.substack.com/';
export const EMAIL = 'hello@deotherguys.com';

export const LINKEDIN = {
  tim: 'https://www.linkedin.com/in/timothy-agbola-7092571b5/',
  nelson: 'https://www.linkedin.com/in/thenelsonansah/',
  company: 'https://www.linkedin.com/company/deotherguys/',
  /** Still TBD from TOG. */
  x: 'https://x.com/',
};

export const LOGO_SRC =
  'https://cdn.prod.website-files.com/67041549a38a6939e8db05d2/67041549a38a6939e8db063d_webclip.png';

/**
 * Route map for the prototype's `*.dc.html` links. Pages not built in this
 * pass resolve to their intended production URL and land on the 404 design
 * until they exist.
 */
export const ROUTES = {
  home: '/',
  work: '/work',
  blog: '/blog',
  about: '/about',
  compare: '/compare',
  contact: '/contact',
  service: (slug: string) => `/services/${slug}`,
  caseStudy: (slug: string) => `/work/${slug}`,
  author: (key: 'tim' | 'nelson') => `/authors/${key}`,
  /** Pillar hubs and posts share the /blog/ namespace; pillar keys win. */
  pillar: (key: string) => `/blog/${key}`,
  post: (slug: string) => `/blog/${slug}`,
} as const;
