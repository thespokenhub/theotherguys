import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { IllustrationSlot, Photo } from '@/components/ImageSlot';
import PostRow from '@/components/PostRow';
import SiteFooter from '@/components/SiteFooter';
import SiteNav from '@/components/SiteNav';
import Squiggle from '@/components/Squiggle';
import {
  AUTHORS,
  PILLAR_KEYS,
  PILLARS,
  POSTS,
  getPost,
  isPillarKey,
  postMeta,
  type PillarKey,
  type Post,
} from '@/lib/posts';
import { NEWSLETTER, ROUTES } from '@/lib/site';

/**
 * Pillar hubs and posts share the /blog/ namespace: `/blog/craft` is a pillar,
 * `/blog/good-writing-work` is a post. Pillar keys win the collision, so post
 * slugs must never equal a pillar key.
 */
export function generateStaticParams() {
  return [
    ...PILLAR_KEYS.map((slug) => ({ slug: slug as string })),
    ...POSTS.map((post) => ({ slug: post.slug })),
  ];
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  if (isPillarKey(slug)) {
    const pillar = PILLARS[slug];
    return {
      title: `${pillar.label} — Blog`,
      description: pillar.card,
    };
  }
  const post = getPost(slug);
  if (!post) return {};
  return { title: post.title, description: post.blurb };
}

export default async function BlogSlugPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (isPillarKey(slug)) return <PillarPage pillarKey={slug} />;
  const post = getPost(slug);
  if (!post) notFound();
  return <PostPage post={post} />;
}

/* ── Pillar hub ──────────────────────────────────────────────────────────── */

function PillarPage({ pillarKey }: { pillarKey: PillarKey }) {
  const pillar = PILLARS[pillarKey];
  const mine = POSTS.filter((post) => post.pillar === pillarKey);
  const others = PILLAR_KEYS.filter((key) => key !== pillarKey);

  return (
    <>
      <SiteNav />
      <main>
        <section className="mx-auto max-w-[900px] px-6 pt-[72px]">
          <p className="m-0 font-mono text-[13px] tracking-[0.1em] text-muted">
            <Link href={ROUTES.blog} className="text-purple">
              BLOG
            </Link>{' '}
            / PILLAR {pillar.no} &middot; {pillar.label.toUpperCase()}
          </p>
          <h1 className="mt-5 mb-0 font-display text-[clamp(38px,6vw,72px)] leading-[1.05] font-bold tracking-[-0.03em] text-balance">
            {pillar.t1}
            <Squiggle>{pillar.word}</Squiggle>
            {pillar.t2}
          </h1>
          <p className="mt-6 mb-0 max-w-[58ch] text-[19px] leading-[1.65] text-dim">
            {pillar.desc}
          </p>
        </section>

        <section aria-label="Posts in this pillar" className="mx-auto mt-12 max-w-[900px] px-6">
          <div className="flex flex-col border-t-2 border-ink">
            {mine.map((post, index) => (
              <PostRow
                key={post.slug}
                post={post}
                number={String(index + 1).padStart(2, '0')}
                meta={postMeta(post, { withPillar: false })}
                thumb
                tilt={index % 2 ? 1.5 : -1.5}
              />
            ))}
          </div>
          {mine.length === 0 && (
            <div className="px-5 py-14 text-center">
              <p className="m-0 font-display text-[28px] font-bold">Nothing filed here yet.</p>
              <p className="mt-2.5 mb-0 text-[17px] text-dim">The kitchen&rsquo;s warming up.</p>
            </div>
          )}
        </section>

        <section
          aria-label="Other pillars"
          className="mx-auto mt-14 flex max-w-[900px] flex-wrap items-center gap-3 px-6 pb-[100px]"
        >
          <span className="font-mono text-[12px] tracking-[0.12em] text-muted">MORE PILLARS:</span>
          {others.map((key) => (
            <Link
              key={key}
              href={ROUTES.pillar(key)}
              className="rounded-full border-2 border-purple px-[18px] py-[9px] text-[15px] font-semibold text-purple no-underline transition-colors hover:bg-purple-200 hover:text-purple"
            >
              {PILLARS[key].label}
            </Link>
          ))}
        </section>
      </main>
      <SiteFooter />
    </>
  );
}

/* ── Post ────────────────────────────────────────────────────────────────── */

function PostPage({ post }: { post: Post }) {
  const author = AUTHORS[post.authorKey];
  const pillar = PILLARS[post.pillar];
  const toc = post.body?.blocks.filter((block) => block.type === 'h2') ?? [];
  const readNext = [
    ...POSTS.filter((p) => p.slug !== post.slug && p.pillar === post.pillar),
    ...POSTS.filter((p) => p.slug !== post.slug && p.pillar !== post.pillar),
  ].slice(0, 2);

  const authorLink = (
    <Link
      href={ROUTES.author(author.key)}
      className="border-b-2 border-coral text-ink no-underline hover:text-purple"
    >
      {author.name}
    </Link>
  );

  return (
    <>
      <SiteNav />
      <main>
        <article>
          <header className="mx-auto max-w-[760px] px-6 pt-16">
            <p className="m-0 font-mono text-[13px] tracking-[0.1em] text-muted">
              <Link href={ROUTES.blog} className="text-purple">
                BLOG
              </Link>{' '}
              /{' '}
              <Link href={ROUTES.pillar(pillar.key)} className="text-purple">
                {pillar.label.toUpperCase()}
              </Link>
            </p>
            <h1 className="mt-5 mb-0 font-display text-[clamp(34px,5.2vw,60px)] leading-[1.07] font-bold tracking-[-0.03em] text-balance">
              {post.titleParts ? (
                <>
                  {post.titleParts.t1}
                  <Squiggle>{post.titleParts.word}</Squiggle>
                  {post.titleParts.t2}
                </>
              ) : (
                post.title
              )}
            </h1>
            <p className="mt-[18px] mb-0 text-[20px] leading-[1.55] text-dim text-pretty">
              {post.blurb}
            </p>
            <div className="mt-[26px] flex items-center gap-3 border-b border-[rgba(43,36,64,0.16)] pb-[26px]">
              <span className="block size-11 flex-none">
                <Photo src={author.photo} alt={`Portrait of ${author.name}`} radius={999} sizes="44px" />
              </span>
              <div>
                <p className="m-0 text-[15px] font-bold">{authorLink}</p>
                <p className="mt-0.5 mb-0 font-mono text-[12px] text-muted">
                  {post.date.toUpperCase()} &middot; {post.mins} MIN READ
                </p>
              </div>
            </div>
          </header>

          <figure className="mx-auto mt-9 mb-0 max-w-[900px] px-6">
            <div className="aspect-2/1 w-full">
              {post.image ? (
                <Photo
                  src={post.image}
                  alt={post.ill}
                  radius={20}
                  sizes="(max-width: 900px) 100vw, 852px"
                  priority
                />
              ) : (
                <IllustrationSlot caption={post.ill} alt={post.ill} radius={20} />
              )}
            </div>
            <figcaption className="mt-2.5 font-mono text-[12px] text-muted">
              {post.body?.heroCaption ?? post.ill.toUpperCase()}
            </figcaption>
          </figure>

          {post.body ? (
            <div className="mx-auto mt-11 flex max-w-[1120px] flex-wrap items-start justify-center gap-8 px-6">
              <div className="min-w-[280px] max-w-[660px] flex-1 text-[18px] leading-[1.75] text-body">
                {post.body.blocks.map((block, index) => {
                  if (block.type === 'h2') {
                    return (
                      <h2
                        key={index}
                        id={block.id}
                        className="mt-11 mb-4 font-display text-[30px] font-bold tracking-[-0.02em] text-ink"
                      >
                        {block.text}
                      </h2>
                    );
                  }
                  if (block.type === 'quote') {
                    return (
                      <blockquote
                        key={index}
                        className="my-9 rounded-[20px] bg-purple-200 px-7 py-6"
                      >
                        <p className="m-0 font-display text-[23px] leading-[1.4] font-semibold text-ink">
                          {block.text}
                        </p>
                      </blockquote>
                    );
                  }
                  return (
                    <p key={index} className="mt-0 mb-6">
                      {block.text}
                    </p>
                  );
                })}
              </div>

              {toc.length > 0 && (
                <aside
                  aria-label="Table of contents"
                  className="sticky top-[120px] box-border w-[190px] flex-none rotate-[1.2deg] rounded-[14px] border-2 border-ink bg-cream-100 p-[18px] shadow-hard-4 max-[840px]:static max-[840px]:w-full max-[840px]:rotate-0"
                >
                  <span
                    aria-hidden="true"
                    className="tape -top-[11px] left-[34%] h-5 w-[60px] rotate-[-2deg] bg-[rgba(241,112,91,0.6)]"
                  />
                  <p className="m-0 font-mono text-[11px] tracking-[0.14em] text-muted">THE MAP</p>
                  <div className="mt-3 flex flex-col gap-2.5 border-l-2 border-dotted border-[rgba(43,36,64,0.3)] pl-3">
                    {toc.map((item) => (
                      <a
                        key={item.id}
                        href={`#${item.id}`}
                        className="text-[13px] font-semibold text-ink no-underline hover:text-purple"
                      >
                        {item.toc}
                      </a>
                    ))}
                  </div>
                  <p className="mt-3.5 mb-0 rotate-[-2deg] font-hand text-[19px] text-purple">
                    {post.body.tocNote}
                  </p>
                </aside>
              )}
            </div>
          ) : (
            /* No body yet: the piece hasn't been moved over from the old blog. */
            <div className="mx-auto mt-11 max-w-[760px] px-6">
              <div className="relative rounded-[20px] border-2 border-ink bg-cream-100 p-[clamp(24px,4vw,40px)] shadow-hard-5">
                <span
                  aria-hidden="true"
                  className="tape -top-[13px] left-[40%] h-6 w-[84px] rotate-[-2deg] bg-[rgba(230,222,251,0.85)]"
                />
                <p className="m-0 font-display text-[26px] font-bold tracking-[-0.02em]">
                  Still in the moving boxes.
                </p>
                <p className="mt-3 mb-0 max-w-[52ch] text-[17px] leading-[1.65] text-dim">
                  We&rsquo;re carrying this piece over from the old blog by hand, the way we do
                  everything else. Until it lands, the blurb above is the honest summary, and the
                  newsletter has everything new.
                </p>
                <div className="mt-5 flex flex-wrap gap-3">
                  <a
                    href={NEWSLETTER}
                    className="rounded-full bg-purple px-[22px] py-[11px] text-[15px] font-bold text-cream-100 no-underline transition-colors hover:bg-purple-dark hover:text-cream-100"
                  >
                    Read the newsletter
                  </a>
                  <Link
                    href={ROUTES.pillar(pillar.key)}
                    className="rounded-full border-2 border-purple px-[22px] py-[11px] text-[15px] font-bold text-purple no-underline transition-colors hover:bg-purple-200 hover:text-purple"
                  >
                    More from {pillar.label}
                  </Link>
                </div>
              </div>
            </div>
          )}

          <aside aria-label="About the author" className="mx-auto mt-14 max-w-[680px] px-6">
            <div className="flex flex-wrap items-center gap-[18px] rounded-[20px] border-2 border-ink bg-cream-100 p-6 shadow-hard-5">
              <span className="block size-16 flex-none">
                <Photo src={author.photo} alt={`Portrait of ${author.name}`} radius={999} sizes="64px" />
              </span>
              <div className="min-w-[220px] flex-1">
                <p className="m-0 text-[16px] font-bold">{authorLink}</p>
                <p className="mt-1.5 mb-0 text-[15px] leading-[1.55] text-muted">
                  {author.shortBio}
                </p>
              </div>
              <div className="flex flex-none flex-col items-start gap-2">
                <Link href={ROUTES.author(author.key)} className="text-[15px] font-semibold">
                  All posts by {author.name.split(' ')[0]} &rarr;
                </Link>
                <a href={author.linkedin} className="text-[15px] font-semibold">
                  LinkedIn ↗
                </a>
              </div>
            </div>
          </aside>
        </article>

        <section aria-label="Read next" className="mx-auto mt-16 max-w-[900px] px-6">
          <span className="font-mono text-[12px] tracking-[0.14em] text-muted">READ NEXT</span>
          <div className="mt-4 grid grid-cols-[repeat(auto-fit,minmax(min(280px,100%),1fr))] gap-5">
            {readNext.map((next) => (
              <Link
                key={next.slug}
                href={ROUTES.post(next.slug)}
                className="rounded-[20px] border-2 border-ink bg-cream-100 p-6 text-ink no-underline shadow-hard-5 transition-shadow hover:text-ink hover:shadow-[8px_8px_0_#2B2440]"
              >
                <span className="font-mono text-[12px] tracking-[0.1em] text-purple">
                  {PILLARS[next.pillar].label.toUpperCase()} &middot; {next.mins} MIN
                </span>
                <p className="mt-2.5 mb-0 font-display text-[22px] leading-[1.25] font-bold tracking-[-0.015em]">
                  {next.title}
                </p>
              </Link>
            ))}
          </div>
        </section>

        <section aria-label="Newsletter" className="mx-auto mt-14 max-w-[900px] px-6">
          <div className="flex flex-wrap items-center justify-between gap-5 rounded-[20px] border-2 border-ink bg-purple-200 p-[clamp(24px,4vw,40px)] shadow-hard-6">
            <p className="m-0 max-w-[24ch] font-display text-[clamp(20px,2.6vw,26px)] font-bold tracking-[-0.02em]">
              Watch us build this agency, one email at a time.
            </p>
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
