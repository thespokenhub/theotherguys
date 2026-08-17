# The Other Guys — production build

Next.js implementation of the Claude Design handoff in `project/`. The prototype
files stay in the repo as the visual source of truth; this app is the real thing.

## Stack

- Next.js 15 (App Router) + TypeScript
- Tailwind CSS v4, tokens declared in `app/globals.css` under `@theme`
- `next/font/google` for Space Grotesk, Instrument Sans, IBM Plex Mono, Caveat

```
npm install
npm run dev        # http://localhost:3000
npm run build && npm start
npm run typecheck
```

## What's built

| Route | Prototype |
| --- | --- |
| `/` | `Home.dc.html` (no footer, by design) |
| `/about` | `About.dc.html` |
| `/work` | `Case-Studies.dc.html` |
| `/compare` | `Compare.dc.html` |
| `/contact` | `Contact.dc.html` |
| `/blog` (+ `?pillar=<key>` filters) | `Blog.dc.html` |
| `/blog/<pillar-key>` | `Pillar.dc.html?p=<key>` |
| `/blog/<post-slug>` | `Blog-Post.dc.html` |
| `/authors/tim`, `/authors/nelson` | `Author.dc.html?a=<key>` |
| `/services/<slug>` (nine of them) | `Service.dc.html?s=<slug>` |
| `/work/<slug>` (three of them) | `Case-iGotAnOffer/-Synthesia/-ClickUp.dc.html` |
| 404 | `404.dc.html` (`app/not-found.tsx`) |

Shared shell: `components/SiteNav.tsx`, `SiteFooter.tsx`, `Squiggle.tsx`,
`ImageSlot.tsx`, `PostRow.tsx`, `CaseChart.tsx`. Data lives in `lib/`
(`site.ts`, `services.ts`, `reviews.ts`, `compare.ts`, `posts.ts`, `cases.ts`).

Every page of the handoff is now implemented.

## Blog notes

- Pillar hubs and posts share the `/blog/` namespace: the six pillar keys win
  the collision, so post slugs must never equal a pillar key. Both sets are
  statically generated; unknown slugs 404.
- Blog index filters are URL-addressable (`/blog?pillar=ai`) as HANDOFF.md
  asks — the tabs are links, not client state.
- Posts are markdown files in `content/posts/<slug>.md`, written at `/admin`
  (see below). `lib/posts.ts` reads them at build time and still exports
  `POSTS`, `getPost`, `postMeta`, and `PILLAR_KEYS` unchanged, so the index,
  pillar hubs, and author pages never had to know. `PILLARS` and `AUTHORS` stay
  in code: they're structure, not content.
- Only `good-writing-work` has its full body (ported from the Blog-Post
  prototype); the other posts render an in-voice "still in the moving boxes"
  note until their content is migrated from the old blog.
- The post byline avoids gendered pronouns the prototype hardcoded
  ("All his posts" → "All posts by Tim").

## The CMS

`/admin` is [Sveltia CMS](https://github.com/sveltia/sveltia-cms) —
`public/admin/index.html` plus `config.yml`, no build step, no service in the
middle. It commits markdown straight to this repo and Vercel redeploys on the
push.

- **Auth is ours.** `app/api/auth` starts the GitHub OAuth handshake and
  `app/api/callback` finishes it, reading `GITHUB_CLIENT_ID` and
  `GITHUB_CLIENT_SECRET` from the environment. No third-party OAuth broker ever
  sees the token. `backend.base_url` in `config.yml` must match the origin the
  GitHub OAuth App's callback URL points at; change both together. The grant
  defaults to the `repo` scope; `GITHUB_OAUTH_SCOPE=public_repo` narrows it
  while this repo stays public.
- **Frontmatter** is one field per key: `title`, `squiggle` (the word to
  underline in the headline), `pillar`, `author`, `date`, `blurb`, `image`,
  `ill` (alt text), `report`, `draft`. Four optional keys exist to hold the
  design steady on posts the prototype hand-set: `headline` (when the post
  page's headline differs from the index title), `caption` (the mono line under
  the hero), `note` (the scribble under THE MAP), and `mins` (pins the reading
  time on posts whose body hasn't been migrated yet — otherwise it's counted
  from the body at 200 wpm).
- **`draft: true`** keeps a post in the repo and out of the production build.
  It still renders under `npm run dev` so you can read it before publishing.
- **Rendering** is `lib/markdown.ts`: gray-matter for the frontmatter, marked
  for the body, github-slugger for heading anchors, sanitize-html over the
  result. It runs at build time only — no markdown parser ships to the browser.
  Headings come back as a list, which is what "THE MAP" is built from.
- **Typography** lives in the `.article` scope in `app/globals.css` rather than
  on utility classes, because the markup is authored, not written in JSX. The
  values are the prototype's: 18px/1.75 body, 24px between paragraphs, 30px
  Space Grotesk h2s with a 44px lead-in, blockquote as the purple card.
- Ordering is date-descending. The publish time only matters for two posts on
  the same day; slug breaks a dead tie so the order never depends on the
  filesystem.

## Services and case studies

- `lib/services.ts` now carries the full nine-service dataset from
  `project/services.js` (blurb, deliverables, the "How we cook it" long-form
  written for on-page SEO, the "you need this when" line, proof link, and the
  taped testimonial). `/services/<slug>` chains each item to the next; "back to
  the full menu" lands on `/#menu` (the Home section has a `scroll-mt` so the
  sticky nav doesn't cover it).
- `lib/cases.ts` holds the three case studies including the hand-drawn
  "WE HOP ON → TODAY" chart geometry, rendered by `components/CaseChart.tsx`
  (ClickUp's carries the second falling publishing-volume line). Numbers remain
  realistic stand-ins pending final figures.
- ClickUp's headline moved its comma inside the squiggled word ("less,") so the
  punctuation can't wrap onto its own line — the same fix the design chats
  applied to "Proof," on the index.
- The per-service testimonials are drafted placeholders, same as the wall of
  love.

`lib/services.ts` carries only the fields Home needs. The long-form per-service
copy (deliverables, "how we cook it", testimonials) is still in
`project/services.js` and should move over with the service pages.

## Deviations from the prototype, and why

- **Mobile nav.** The prototype wraps the nav pills because its format has no
  media queries. `HANDOFF.md` requires a hamburger drawer under 720px, so that's
  what `SiteNav` implements: focus-trapped, Escape to close, closes on
  navigation and outside click, returns focus to the toggle.
- **320px.** Several `minmax(280px, 1fr)` auto-fit grids and the menu rows
  overflowed the viewport below ~360px. They now use
  `minmax(min(280px, 100%), 1fr)`, and the menu's dotted leader drops out under
  560px so the quip takes its own line. Nothing changes above that.
- **Image slots.** `<image-slot>` is a prototype-only drop target. Filled slots
  (the three headshots) render as `next/image`; empty ones render as
  `IllustrationSlot`, which keeps the dashed frame and its caption on screen so
  the pencil illustrations still read as briefed work, with the full description
  as the accessible name.
- **Two squiggles on About.** `HANDOFF.md` says one underline per page, but
  `About.dc.html` ships two ("work" in the headline, "engine" in the closing
  CTA). Both are implemented, matching the design file. Say the word and the
  second one comes out.

## Still waiting on TOG

- Real reviews for the wall of love (`lib/reviews.ts`); all but the Synthesia and
  iGotAnOffer ones are drafted stand-ins.
- The X URL (`LINKEDIN.x` in `lib/site.ts`) is still a placeholder. Company
  LinkedIn is wired.
- Pencil illustrations still missing: `aeo-manners` and `client-first-30`
  post images, and the three case cards on `/work` (igotanoffer, synthesia,
  clickup). Everything else is in `public/images/` (WebP, ≤1700px wide).
  A post gains its image by uploading it in the "Hero illustration" field at
  `/admin`; posts without one automatically show the briefed placeholder frame.
- The logo is still hotlinked from the old Webflow CDN
  (`LOGO_SRC` in `lib/site.ts`). Worth vendoring into `public/images/`.
- Case-study figures are realistic stand-ins pending final numbers.

## House rules carried over

- No em dashes in copy; the word "actually" is banned site-wide.
- Coral `:focus-visible` outline on everything interactive.
- `prefers-reduced-motion` kills the squiggle draw, the marquee, the orbit, and
  the scroll-in animations.
- Home never gets a footer.
