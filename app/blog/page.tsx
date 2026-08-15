import type { Metadata } from 'next';
import Link from 'next/link';
import { IllustrationSlot, Photo } from '@/components/ImageSlot';
import PostRow from '@/components/PostRow';
import SiteFooter from '@/components/SiteFooter';
import SiteNav from '@/components/SiteNav';
import Squiggle from '@/components/Squiggle';
import { AUTHORS, PILLAR_KEYS, PILLARS, POSTS, isPillarKey, postMeta } from '@/lib/posts';
import { NEWSLETTER, ROUTES } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Essays, teardowns, and full reports on content, SEO, and AI search. Written by hand, published when it’s worth your time.',
};

/**
 * The folder: pillar filters as file-divider tabs on a manila folder holding
 * the lead story and a numbered index. Filters are URL-addressable
 * (`/blog?pillar=ai`) so the hub pages and filters share logic (HANDOFF.md).
 */
export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ pillar?: string }>;
}) {
  const { pillar } = await searchParams;
  const filter = pillar && isPillarKey(pillar) ? pillar : 'all';
  const filtered = filter === 'all' ? POSTS : POSTS.filter((post) => post.pillar === filter);
  const [lead, ...rest] = filtered;

  const tabs = [
    { key: 'all', label: 'ALL', count: POSTS.length, href: ROUTES.blog },
    ...PILLAR_KEYS.map((key) => ({
      key,
      label: PILLARS[key].label.toUpperCase(),
      count: POSTS.filter((post) => post.pillar === key).length,
      href: `${ROUTES.blog}?pillar=${key}`,
    })),
  ];

  return (
    <>
      <SiteNav />
      <main>
        {/* ── Masthead ─────────────────────────────────────────────────── */}
        <section aria-label="Masthead" className="mx-auto max-w-[1240px] px-6 pt-16">
          <div className="flex flex-wrap justify-between gap-4 border-b-2 border-ink pb-3.5 font-mono text-[12px] tracking-[0.12em] text-muted">
            <span>THE TOG BLOG &middot; WRITTEN BY HAND</span>
            <span>ESSAYS, TEARDOWNS &amp; FULL REPORTS &middot; PUBLISHED WHEN IT&rsquo;S WORTH YOUR TIME</span>
          </div>
          <h1 className="mt-7 mb-0 max-w-[22ch] font-display text-[clamp(38px,6vw,76px)] leading-[1.03] font-bold tracking-[-0.03em] text-balance">
            Content, marketing, and all the <Squiggle>icky</Squiggle> bits between.
          </h1>
          <p className="mt-5 mb-0 max-w-[52ch] text-[18px] leading-[1.6] text-dim">
            Everything here is written by the two of us, by hand, about work we&rsquo;ve done. The{' '}
            <a href={NEWSLETTER}>newsletter</a> is a different beast: everything we&rsquo;re learning
            as we build this agency, sent while it&rsquo;s still warm.
          </p>
        </section>

        {/* ── The folder ───────────────────────────────────────────────── */}
        <section aria-label="Blog index" className="mx-auto mt-12 max-w-[1240px] px-6">
          {/* Narrow screens get one swipeable row of dividers rather than four
              stacked rows, which loses the folder-tab read entirely. */}
          <nav
            aria-label="Filter by pillar"
            className="flex flex-wrap items-end gap-1.5 px-[18px] max-[720px]:flex-nowrap max-[720px]:overflow-x-auto max-[720px]:px-3 max-[720px]:[scrollbar-width:none]"
          >
            {tabs.map((tab) => {
              const selected = tab.key === filter;
              return (
                <Link
                  key={tab.key}
                  href={tab.href}
                  aria-current={selected ? 'true' : undefined}
                  className={`flex-none rounded-t-[14px] border-2 border-b-0 border-ink px-[18px] font-mono text-[13px] tracking-[0.06em] whitespace-nowrap text-ink no-underline hover:text-ink ${
                    selected ? 'bg-cream-100 py-3.5' : 'bg-purple-200 py-2.5'
                  }`}
                >
                  {tab.label} ({tab.count})
                </Link>
              );
            })}
          </nav>
          <div className="rounded-[20px] border-2 border-ink bg-cream-100 p-[clamp(20px,4vw,44px)] shadow-hard-6">
            {lead && (
              <article
                aria-label="Lead story"
                className="grid grid-cols-[repeat(auto-fit,minmax(min(300px,100%),1fr))] items-center gap-8 border-b-2 border-ink pb-9"
              >
                <figure className="m-0 rotate-[-1deg]">
                  <div className="aspect-4/3 w-full rounded-[14px] shadow-[0_4px_24px_rgba(43,36,64,0.14)]">
                    {lead.image ? (
                      <Photo
                        src={lead.image}
                        alt={lead.ill}
                        radius={14}
                        sizes="(max-width: 720px) 100vw, 560px"
                        priority
                      />
                    ) : (
                      <IllustrationSlot caption={lead.ill} alt={lead.ill} radius={14} />
                    )}
                  </div>
                  <figcaption className="mt-2 font-mono text-[11px] text-muted">
                    {lead.ill.toUpperCase()}
                  </figcaption>
                </figure>
                <div>
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="rounded-full bg-purple-200 px-3 py-1.5 font-mono text-[12px] tracking-[0.1em]">
                      {PILLARS[lead.pillar].label.toUpperCase()}
                    </span>
                    <span className="font-mono text-[12px] tracking-[0.1em] text-coral">
                      FRESH OFF THE DESK
                    </span>
                  </div>
                  <h2 className="mt-4 mb-0 font-display text-[clamp(28px,3.8vw,44px)] leading-[1.08] font-bold tracking-[-0.02em]">
                    <Link
                      href={ROUTES.post(lead.slug)}
                      className="text-ink no-underline hover:text-purple"
                    >
                      {lead.title}
                    </Link>
                  </h2>
                  <p className="mt-3.5 mb-0 max-w-[52ch] text-[17px] leading-[1.6] text-dim">
                    {lead.blurb}
                  </p>
                  <p className="mt-4 mb-0 font-mono text-[13px] text-muted">
                    {`${AUTHORS[lead.authorKey].name} · ${lead.date} · ${lead.mins} min read`.toUpperCase()}
                  </p>
                </div>
              </article>
            )}

            <div role="list" aria-label="All posts" className="flex flex-col">
              {rest.map((post, index) => (
                <div role="listitem" key={post.slug}>
                  <PostRow
                    post={post}
                    number={String(index + 1).padStart(2, '0')}
                    meta={postMeta(post)}
                    underline
                  />
                </div>
              ))}
            </div>

            {filtered.length === 0 && (
              <div className="px-5 py-14 text-center">
                <p className="m-0 font-display text-[28px] font-bold">No posts here yet.</p>
                <p className="mt-2.5 mb-0 text-[17px] text-dim">The kitchen&rsquo;s warming up.</p>
              </div>
            )}
          </div>
        </section>

        {/* ── Or start with a pillar ───────────────────────────────────── */}
        <section aria-label="Pillar hubs" className="mx-auto mt-16 max-w-[1240px] px-6">
          <div className="flex flex-wrap items-baseline justify-between gap-4 border-b-2 border-ink pb-3.5">
            <h2 className="m-0 font-display text-[clamp(28px,4vw,46px)] font-bold tracking-[-0.025em]">
              Or start with a <Squiggle>pillar</Squiggle>.
            </h2>
            <span className="font-mono text-[12px] tracking-[0.14em] text-muted">
              SIX FOLDERS. NO WADDLING THROUGH THE ARCHIVE.
            </span>
          </div>
          <div className="mt-6 grid grid-cols-[repeat(auto-fit,minmax(min(280px,100%),1fr))] gap-5">
            {PILLAR_KEYS.map((key) => {
              const p = PILLARS[key];
              return (
                <Link
                  key={key}
                  href={ROUTES.pillar(key)}
                  className="rounded-[20px] border-2 border-ink bg-cream-100 p-6 text-ink no-underline shadow-hard-5 transition-shadow hover:text-ink hover:shadow-[8px_8px_0_#2B2440]"
                >
                  <span className="font-mono text-[12px] tracking-[0.1em] text-purple">
                    PILLAR {p.no}
                  </span>
                  <p className="mt-2.5 mb-1.5 font-display text-[24px] font-bold tracking-[-0.02em]">
                    {p.label}
                  </p>
                  <p className="m-0 text-[15px] leading-[1.55] text-muted">{p.card}</p>
                </Link>
              );
            })}
          </div>
        </section>

        {/* ── Newsletter ───────────────────────────────────────────────── */}
        <section aria-label="Newsletter" className="mx-auto mt-14 max-w-[1240px] px-6">
          <div className="flex flex-wrap items-center justify-between gap-5 rounded-[20px] border-2 border-ink bg-purple-200 p-[clamp(24px,4vw,40px)] shadow-hard-6">
            <div>
              <p className="m-0 font-display text-[clamp(22px,3vw,30px)] font-bold tracking-[-0.02em]">
                We&rsquo;re building this agency in public.
              </p>
              <p className="mt-2 mb-0 text-[16px] text-dim">
                The newsletter is what we&rsquo;re learning as we go. Wins, faceplants, receipts.
              </p>
            </div>
            <a
              href={NEWSLETTER}
              className="flex-none rounded-full bg-purple px-[26px] py-[13px] text-[16px] font-bold text-cream-100 no-underline transition-colors hover:bg-purple-dark hover:text-cream-100"
            >
              Subscribe on Substack
            </a>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
