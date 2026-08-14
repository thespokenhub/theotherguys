import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Photo } from '@/components/ImageSlot';
import PostRow from '@/components/PostRow';
import SiteFooter from '@/components/SiteFooter';
import SiteNav from '@/components/SiteNav';
import { AUTHORS, POSTS, postMeta, type AuthorKey } from '@/lib/posts';
import { CALENDLY, ROUTES } from '@/lib/site';

const isAuthorKey = (value: string): value is AuthorKey => value in AUTHORS;

export function generateStaticParams() {
  return Object.keys(AUTHORS).map((key) => ({ key }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ key: string }>;
}): Promise<Metadata> {
  const { key } = await params;
  if (!isAuthorKey(key)) return {};
  const author = AUTHORS[key];
  return {
    title: author.name,
    description: `${author.role}. ${author.beat}`,
  };
}

export default async function AuthorPage({ params }: { params: Promise<{ key: string }> }) {
  const { key } = await params;
  if (!isAuthorKey(key)) notFound();

  const author = AUTHORS[key];
  const other = AUTHORS[key === 'tim' ? 'nelson' : 'tim'];
  const firstName = author.name.split(' ')[0];
  const mine = POSTS.filter((post) => post.authorKey === key);

  return (
    <>
      <SiteNav />
      <main>
        {/* ── The byline card ──────────────────────────────────────────── */}
        <section className="mx-auto max-w-[900px] px-6 pt-16">
          <p className="m-0 font-mono text-[13px] tracking-[0.1em] text-muted">
            <Link href={ROUTES.blog} className="text-purple">
              BLOG
            </Link>{' '}
            / THE BYLINE
          </p>
          <div className="relative mt-6 flex flex-wrap items-start gap-7 rounded-[20px] border-2 border-ink bg-cream-100 p-[clamp(24px,4vw,40px)] shadow-hard-6">
            <span
              aria-hidden="true"
              className="tape -top-[13px] left-[42%] h-6 w-[90px] rotate-[-2deg] bg-[rgba(230,222,251,0.85)]"
            />
            <div className="w-[180px] flex-none rotate-[-2deg]">
              <div className="aspect-square w-full">
                <Photo
                  src={author.photo}
                  alt={`Portrait of ${author.name}`}
                  radius={14}
                  sizes="180px"
                  priority
                />
              </div>
            </div>
            <div className="min-w-[min(260px,100%)] flex-1">
              <span className="rounded-full border-[1.5px] border-ink bg-purple-200 px-3 py-1.5 font-mono text-[12px] tracking-[0.12em]">
                {author.role.toUpperCase()}
              </span>
              <h1 className="mt-3.5 mb-0 font-display text-[clamp(32px,5vw,52px)] leading-[1.05] font-bold tracking-[-0.03em]">
                {author.name}
              </h1>
              <p className="mt-3.5 mb-0 max-w-[56ch] text-[17px] leading-[1.65] text-dim">
                {author.bio}
              </p>
              <p className="mt-3.5 mb-0 rotate-[-1deg] font-hand text-[24px] text-purple">
                {author.beat}
              </p>
              <div className="mt-[18px] flex flex-wrap gap-3">
                <a
                  href={author.linkedin}
                  className="rounded-full border-2 border-ink bg-purple px-5 py-[11px] text-[15px] font-bold text-cream-100 no-underline shadow-hard-3 transition-colors hover:bg-purple-dark hover:text-cream-100"
                >
                  LinkedIn ↗
                </a>
                <Link
                  href={ROUTES.about}
                  className="rounded-full border-2 border-purple bg-transparent px-5 py-[11px] text-[15px] font-bold text-purple no-underline transition-colors hover:bg-purple-200 hover:text-purple"
                >
                  Meet both of us
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── The byline list ──────────────────────────────────────────── */}
        <section aria-label="Posts by this author" className="mx-auto mt-14 max-w-[900px] px-6">
          <div className="flex flex-wrap items-baseline justify-between gap-3 border-b-2 border-ink pb-3">
            <h2 className="m-0 font-display text-[clamp(24px,3.4vw,34px)] font-bold tracking-[-0.02em]">
              Everything with {firstName}&rsquo;s name on it
            </h2>
            <span className="font-mono text-[12px] tracking-[0.1em] text-muted">
              {mine.length} PIECES &middot; ALL BY HAND
            </span>
          </div>
          <div role="list" className="flex flex-col">
            {mine.map((post, index) => (
              <div role="listitem" key={post.slug}>
                <PostRow
                  post={post}
                  number={String(index + 1).padStart(2, '0')}
                  meta={postMeta(post)}
                />
              </div>
            ))}
          </div>
        </section>

        {/* ── Keep going ───────────────────────────────────────────────── */}
        <section
          aria-label="Keep going"
          className="mx-auto mt-[72px] flex max-w-[900px] flex-wrap items-center justify-center gap-3.5 px-6 pb-[100px]"
        >
          <Link
            href={ROUTES.author(other.key)}
            className="rounded-full border-2 border-purple bg-transparent px-7 py-3.5 text-[16px] font-bold text-purple no-underline transition-colors hover:bg-purple-200 hover:text-purple"
          >
            Read the other guy: {other.name.split(' ')[0]} &rarr;
          </Link>
          <a
            href={CALENDLY}
            className="rounded-full border-2 border-ink bg-coral px-7 py-3.5 text-[16px] font-bold text-ink no-underline shadow-hard-4 transition-colors hover:bg-coral-dark hover:text-ink"
          >
            Put them both on your team
          </a>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
