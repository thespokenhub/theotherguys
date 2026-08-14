import type { Metadata } from 'next';
import Link from 'next/link';
import { IllustrationSlot } from '@/components/ImageSlot';
import SiteFooter from '@/components/SiteFooter';
import SiteNav from '@/components/SiteNav';
import Squiggle from '@/components/Squiggle';
import { noteStyle, REVIEWS } from '@/lib/reviews';
import { CALENDLY, ROUTES } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Case studies',
  description:
    'Three engagements, written up the way we would want to read them. What the client had, what we did, what moved.',
};

const CASES = [
  {
    slug: 'igotanoffer',
    tags: ['CAREER MARKETPLACE', 'BUYER-FIRST'],
    title: 'iGotAnOffer: a content library that sells coaching while it teaches',
    blurb:
      'We rebuilt their interview-prep content around the questions candidates type, with coach expertise on every page. Organic signups grew 64% in six months.',
    caption: 'SIGNUPS +64% · SIX MONTHS',
    illustration: 'Pencil illustration: a candidate shaking hands across a desk, offer letter in pocket',
    alt: 'Pencil illustration of a candidate shaking hands across an interview desk',
    hover: 'hover:rotate-[-0.4deg]',
  },
  {
    slug: 'synthesia',
    tags: ['AI VIDEO', 'POSTS AS DEMOS'],
    title: 'Synthesia: every post ships with a video made in the product',
    blurb:
      'Twelve pieces in a quarter, each one a working demo of the platform. Demo requests attributed to the blog rose 41%, and the posts started showing up in AI answers.',
    caption: 'DEMO REQUESTS +41% · ONE QUARTER',
    illustration: 'Pencil illustration: a film clapperboard held by a friendly robot presenter',
    alt: 'Pencil illustration of a robot presenter holding a film clapperboard',
    hover: 'hover:rotate-[0.4deg]',
  },
  {
    slug: 'clickup',
    tags: ['PRODUCTIVITY', 'QUALITY OVER QUANTITY'],
    title: 'ClickUp: publishing less, ranking more',
    blurb:
      'We helped a team drowning in its own calendar cut volume 40% and rebuild 24 pillar pages. Organic traffic to the refreshed set grew 26% in two quarters.',
    caption: 'VOLUME −40% · ORGANIC +26%',
    illustration: 'Pencil illustration: a gardener pruning a hedge shaped like a bar chart',
    alt: 'Pencil illustration of a gardener pruning a hedge shaped like a rising bar chart',
    hover: 'hover:rotate-[-0.4deg]',
  },
];

export default function WorkPage() {
  return (
    <>
      <SiteNav />
      <main>
        <section className="mx-auto max-w-[1240px] px-6 pt-16 pb-12">
          <h1 className="m-0 font-display text-[clamp(40px,6.4vw,80px)] leading-[1.04] font-bold tracking-[-0.03em]">
            <Squiggle>Proof,</Squiggle> not promises.
          </h1>
          <p className="mt-6 max-w-[56ch] text-[19px] leading-[1.6] text-dim">
            Three engagements, written up the way we&rsquo;d want to read them. What the client had,
            what we did, what moved.
          </p>
        </section>

        <section
          aria-label="Case studies"
          className="mx-auto flex max-w-[1240px] flex-col gap-7 px-6"
        >
          {CASES.map((study) => (
            <article
              key={study.slug}
              className={`rise-in grid grid-cols-[repeat(auto-fit,minmax(min(300px,100%),1fr))] items-center gap-8 rounded-[20px] border-2 border-ink bg-cream-100 p-[clamp(24px,4vw,44px)] shadow-hard-6 transition-[translate,rotate,box-shadow] duration-250 ease-out hover:-translate-x-[3px] hover:-translate-y-[3px] hover:shadow-hard-10 ${study.hover}`}
            >
              <div>
                <div className="mb-4 flex flex-wrap gap-2">
                  {study.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-purple-200 px-3 py-1.5 font-mono text-[12px] tracking-[0.1em]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h2 className="m-0 font-display text-[clamp(28px,3.6vw,42px)] leading-[1.08] font-bold tracking-[-0.02em]">
                  {study.title}
                </h2>
                <p className="mt-4 max-w-[56ch] text-[17px] leading-[1.6] text-dim">
                  {study.blurb}
                </p>
                <Link
                  href={ROUTES.caseStudy(study.slug)}
                  className="mt-5 inline-block text-[16px] font-bold underline underline-offset-4"
                >
                  Read the case study
                </Link>
              </div>
              <figure className="m-0">
                <div className="aspect-4/3 w-full">
                  <IllustrationSlot caption={study.illustration} alt={study.alt} radius={14} />
                </div>
                <figcaption className="mt-2 font-mono text-[12px] text-muted">
                  {study.caption}
                </figcaption>
              </figure>
            </article>
          ))}
        </section>

        {/* ── The wall of love ─────────────────────────────────────────── */}
        <section aria-label="Wall of love" className="mx-auto mt-24 max-w-[1240px] px-6">
          <div className="mx-auto mb-9 max-w-[640px] text-center">
            <span className="font-mono text-[12px] tracking-[0.14em] text-muted">
              FIFTEEN RECEIPTS AND COUNTING
            </span>
            <h2 className="m-0 mt-3 font-display text-[clamp(32px,5vw,56px)] leading-[1.06] font-bold tracking-[-0.02em]">
              The wall of love.
            </h2>
            <p className="mt-3 text-[17px] text-dim">
              Things clients and readers have said with their whole chest.
            </p>
          </div>
          <div className="gap-[22px] [columns:3_300px]">
            {REVIEWS.map((review, index) => {
              const note = noteStyle(index);
              return (
                <figure
                  key={review.who + index}
                  className="relative m-0 mb-[22px] break-inside-avoid rounded-[14px] border-2 border-ink p-[22px] shadow-hard-4 transition-transform duration-200 hover:-translate-y-[3px] hover:rotate-0"
                  style={{ background: note.background, rotate: note.rotate }}
                >
                  <span
                    aria-hidden="true"
                    className="tape h-5 w-16 bg-[rgba(251,246,239,0.7)]"
                    style={{ top: '-11px', left: note.tapeLeft, rotate: note.tapeRotate }}
                  />
                  <blockquote className="m-0 text-[15px] leading-[1.6] text-ink">
                    &ldquo;{review.quote}&rdquo;
                  </blockquote>
                  <figcaption className="mt-3.5 font-mono text-[11px] tracking-[0.08em] text-dim">
                    {review.who}
                  </figcaption>
                </figure>
              );
            })}
          </div>
        </section>

        {/* ── This could be your team ──────────────────────────────────── */}
        <section aria-label="Your turn" className="mx-auto mt-[100px] max-w-[1000px] px-6 pb-[110px]">
          <div className="grid grid-cols-[repeat(auto-fit,minmax(min(280px,100%),1fr))] items-center gap-9 rounded-[22px] border-2 border-ink bg-purple p-[clamp(28px,5vw,56px)] text-cream-100 shadow-hard-7">
            <div>
              <span className="font-mono text-[12px] tracking-[0.14em] text-gold">
                THE NEXT NOTE ON THE WALL IS BLANK
              </span>
              <h2 className="m-0 mt-3.5 font-display text-[clamp(30px,4.4vw,48px)] leading-[1.08] font-bold tracking-[-0.02em] text-balance">
                This could be your team, starting tomorrow.
              </h2>
              <p className="mt-4 max-w-[46ch] text-[17px] leading-[1.6] text-[rgba(251,246,239,0.9)]">
                One call. If we&rsquo;re a fit and a seat is open, you brief Tim and Nelson this
                week, not a &ldquo;dedicated pod&rdquo; next quarter.
              </p>
              <div className="mt-[26px] flex flex-wrap gap-3.5">
                <a
                  href={CALENDLY}
                  className="rounded-full border-2 border-ink bg-coral px-7 py-3.5 text-[16px] font-bold text-ink no-underline shadow-hard-4 transition-colors hover:bg-coral-dark hover:text-ink"
                >
                  Claim the 9:00
                </a>
                <Link
                  href={ROUTES.compare}
                  className="rounded-full border-2 border-cream-100 bg-transparent px-7 py-3.5 text-[16px] font-bold text-cream-100 no-underline transition-colors hover:bg-[rgba(251,246,239,0.15)] hover:text-cream-100"
                >
                  Still shopping? Compare us
                </Link>
              </div>
            </div>
            <div
              aria-hidden="true"
              className="w-[min(300px,100%)] justify-self-center rotate-[2deg] rounded-2xl border-2 border-ink bg-cream-100 text-ink shadow-hard-5"
            >
              <div className="rounded-t-[14px] border-b-2 border-ink bg-coral px-[18px] py-2.5 font-mono text-[12px] tracking-[0.12em]">
                TOMORROW
              </div>
              <div className="px-[18px] py-5">
                <p className="m-0 font-mono text-[12px] text-muted">9:00 &ndash; 9:30 AM</p>
                <p className="mt-1.5 mb-0 font-display text-[20px] font-bold">
                  Kickoff: you, Tim &amp; Nelson
                </p>
                <p className="mt-3.5 mb-0 rotate-[-1.5deg] font-hand text-[24px] text-purple">
                  bring the messy strategy doc, we like those
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
