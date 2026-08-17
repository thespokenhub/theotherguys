/**
 * Markdown → HTML, run once at build time for every file in `content/posts`.
 *
 * Nothing here ships to the browser: the post page renders the string this
 * returns straight into the `.article` scope in globals.css. Headings come
 * back out as a list so "THE MAP" can be built from the same pass that
 * assigned the anchors.
 */
import GithubSlugger from 'github-slugger';
import { Marked } from 'marked';
import sanitizeHtml from 'sanitize-html';

export type Heading = {
  /** Anchor on the rendered heading, and the `#…` target in the contents. */
  id: string;
  /** 2 for `##`, 3 for `###`, and so on. */
  level: number;
  /** Plain text, safe to render as a React child. */
  text: string;
};

export type Rendered = {
  html: string;
  headings: Heading[];
  words: number;
};

/** Reading pace. 200 wpm is the number every "X min read" badge assumes. */
const WORDS_PER_MINUTE = 200;

export const readingMinutes = (words: number) =>
  Math.max(1, Math.round(words / WORDS_PER_MINUTE));

/** Prose word count: code blocks, link targets, and syntax don't count. */
export function countWords(markdown: string) {
  return markdown
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/`[^`]*`/g, ' ')
    .replace(/!?\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/^\s{0,3}[>#|]+/gm, ' ')
    .replace(/[*_~]/g, '')
    .split(/\s+/)
    .filter(Boolean).length;
}

/* marked escapes exactly these five when it emits text. */
const ENTITIES: Record<string, string> = {
  '&amp;': '&',
  '&lt;': '<',
  '&gt;': '>',
  '&quot;': '"',
  '&#39;': "'",
};

/** Inline HTML from a heading back to the plain text a slug and a TOC want. */
const toPlainText = (html: string) =>
  html.replace(/<[^>]*>/g, '').replace(/&(?:amp|lt|gt|quot|#39);/g, (m) => ENTITIES[m]);

const SANITIZE: sanitizeHtml.IOptions = {
  allowedTags: [...sanitizeHtml.defaults.allowedTags, 'img', 'figure', 'figcaption'],
  allowedAttributes: {
    ...sanitizeHtml.defaults.allowedAttributes,
    a: ['href', 'title', 'target', 'rel'],
    img: ['src', 'alt', 'title', 'width', 'height', 'loading'],
    h1: ['id'],
    h2: ['id'],
    h3: ['id'],
    h4: ['id'],
    h5: ['id'],
    h6: ['id'],
  },
  allowedSchemes: ['http', 'https', 'mailto', 'tel'],
  transformTags: {
    /* Off-site links open in a new tab and can't reach back through
       window.opener. Same-page anchors (the TOC targets) stay put. */
    a: (tagName, attribs) => {
      const href = attribs.href ?? '';
      const offsite = /^https?:\/\//i.test(href);
      return {
        tagName,
        attribs: offsite
          ? { ...attribs, target: '_blank', rel: 'noopener noreferrer' }
          : attribs,
      };
    },
    /* Post images are never above the fold: the hero illustration is. */
    img: (tagName, attribs) => ({ tagName, attribs: { loading: 'lazy', ...attribs } }),
  },
};

export function renderMarkdown(markdown: string): Rendered {
  const slugger = new GithubSlugger();
  const headings: Heading[] = [];
  const marked = new Marked({ gfm: true });

  marked.use({
    renderer: {
      heading({ tokens, depth }) {
        const inline = this.parser.parseInline(tokens);
        const text = toPlainText(inline);
        const id = slugger.slug(text);
        headings.push({ id, level: depth, text });
        return `<h${depth} id="${id}">${inline}</h${depth}>\n`;
      },
    },
  });

  return {
    html: sanitizeHtml(marked.parse(markdown, { async: false }), SANITIZE),
    headings,
    words: countWords(markdown),
  };
}
