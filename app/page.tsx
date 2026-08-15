import Link from 'next/link';
import SiteNav from '@/components/SiteNav';
import Squiggle from '@/components/Squiggle';
import { SERVICES } from '@/lib/services';
import { CALENDLY, ROUTES } from '@/lib/site';

const CLIENTS = ['Synthesia', 'ClickUp', 'Sprig', 'iGotAnOffer', 'Roofr'];

const RESULTS = [
  {
    href: ROUTES.caseStudy('igotanoffer'),
    metric: '+64%',
    label: 'ORGANIC SIGNUPS · IGOTANOFFER',
    card: 'bg-coral rotate-[-2.4deg] mt-[26px]',
    tape: 'left-[38%] rotate-[2deg] bg-[rgba(251,246,239,0.65)]',
  },
  {
    href: ROUTES.caseStudy('synthesia'),
    metric: '+41%',
    label: 'DEMO REQUESTS · SYNTHESIA',
    card: 'bg-purple-200 rotate-[1.6deg] mt-[44px]',
    tape: 'left-[34%] rotate-[-2deg] bg-[rgba(241,112,91,0.6)]',
  },
  {
    href: ROUTES.caseStudy('clickup'),
    metric: '−40%',
    label: 'PUBLISHING VOLUME, ORGANIC UP · CLICKUP',
    card: 'bg-cream-100 rotate-[-1.2deg] mt-[32px]',
    tape: 'left-[40%] rotate-[3deg] bg-[rgba(107,70,229,0.45)]',
  },
];

const EXITS = [
  {
    href: ROUTES.work,
    tag: 'EXIT A ↗',
    title: 'See the receipts',
    blurb: 'Case studies, numbers attached.',
    card: 'bg-cream-100 text-ink rotate-[-1.2deg]',
    tagColor: 'text-purple',
    blurbColor: 'text-muted',
  },
  {
    href: ROUTES.compare,
    tag: 'EXIT B →',
    title: 'Size us up',
    blurb: 'Compare us to whoever you’re considering.',
    card: 'bg-purple-200 text-ink rotate-[0.9deg]',
    tagColor: 'text-purple',
    blurbColor: 'text-dim',
  },
  {
    href: ROUTES.blog,
    tag: 'EXIT C ↘',
    title: 'Read how we think',
    blurb: 'The blog. Essays, teardowns, reports.',
    card: 'bg-cream-100 text-ink rotate-[-0.7deg]',
    tagColor: 'text-purple',
    blurbColor: 'text-muted',
  },
  {
    href: CALENDLY,
    tag: 'MAIN EXIT ↑',
    title: 'Skip the tour',
    blurb: 'Book a call with Tim & Nelson.',
    card: 'bg-purple text-cream-100 rotate-[1.4deg]',
    tagColor: 'text-gold',
    blurbColor: 'text-[rgba(251,246,239,0.8)]',
  },
];

export default function HomePage() {
  return (
    <>
      <SiteNav />
      <main>
        {/* ── Hero ─────────────────────────────────────────────────────── */}
        <section
          aria-label="Intro"
          className="mt-[-92px] border-b-2 border-ink bg-purple px-6 pt-[170px] pb-[110px] text-cream-100"
        >
          <div className="mx-auto flex max-w-[1100px] flex-col items-center gap-7 text-center">
            {/* A light orbits the badge three times when you land. */}
            <span className="relative inline-block rounded-full p-0.5">
              <span
                aria-hidden="true"
                className="absolute inset-0 animate-orbit rounded-full"
                style={{
                  background:
                    'conic-gradient(from var(--tog-a),transparent 0deg,transparent 260deg,#FBF6EF 320deg,#E8B44C 340deg,transparent 360deg)',
                }}
              />
              <span className="relative block rounded-full border-[1.5px] border-[rgba(251,246,239,0.5)] bg-purple px-4 py-2 font-mono text-[13px] tracking-[0.14em] text-cream-100">
                B2B SAAS CONTENT STUDIO
              </span>
            </span>

            <h1 className="m-0 max-w-[16ch] font-display text-[clamp(42px,7vw,88px)] leading-[1.02] font-bold tracking-[-0.03em] text-balance">
              Get content so <Squiggle>good</Squiggle> you don&rsquo;t realize it&rsquo;s marketing.
            </h1>
            <p className="m-0 max-w-[44ch] text-[clamp(19px,2.3vw,24px)] leading-[1.5] text-[rgba(251,246,239,0.9)] italic">
              We make content for the buyer, and for the machines that now recommend you.
            </p>
            <div className="mt-2 flex flex-wrap justify-center gap-3.5">
              <Link
                href={ROUTES.about}
                className="rounded-full border-2 border-ink bg-coral px-[30px] py-[15px] text-[17px] font-bold text-ink no-underline shadow-hard-4 transition-colors hover:bg-coral-dark hover:text-ink"
              >
                What&rsquo;s that about?
              </Link>
              <Link
                href={ROUTES.work}
                className="rounded-full border-2 border-cream-100 bg-transparent px-[30px] py-[15px] text-[17px] font-bold text-cream-100 no-underline transition-colors hover:bg-[rgba(251,246,239,0.15)] hover:text-cream-100"
              >
                I want to see more!
              </Link>
            </div>
            <Link
              href={ROUTES.compare}
              className="text-[15px] text-[rgba(251,246,239,0.85)] underline underline-offset-4 hover:text-cream-100"
            >
              Already talking to another agency? Compare us. We dare you.
            </Link>
          </div>
        </section>

        {/* ── Client marquee ───────────────────────────────────────────── */}
        <section
          aria-label="Clients"
          className="relative z-2 mx-auto mt-[-44px] max-w-[1000px] px-6"
        >
          {/* Stacked on a phone: side by side, the label leaves the marquee a
              sliver and you see one client name mid-scroll. */}
          <div className="flex items-center gap-6 overflow-hidden rounded-full border-2 border-ink bg-cream-100 px-[26px] py-4 shadow-hard-5 max-[560px]:flex-col max-[560px]:items-start max-[560px]:gap-2 max-[560px]:rounded-[28px] max-[560px]:px-5">
            <span className="flex-none font-mono text-[12px] tracking-[0.12em] text-muted">
              TRUSTED BY TEAMS AT &rarr;
            </span>
            <div
              className="min-w-0 flex-1 overflow-hidden max-[560px]:w-full"
              style={{
                maskImage: 'linear-gradient(to right,transparent,black 8%,black 92%,transparent)',
                WebkitMaskImage:
                  'linear-gradient(to right,transparent,black 8%,black 92%,transparent)',
              }}
            >
              <div className="flex w-max animate-marquee items-center gap-[52px]">
                {[...CLIENTS, ...CLIENTS].map((client, index) => (
                  <span
                    key={`${client}-${index}`}
                    aria-hidden={index >= CLIENTS.length}
                    className="font-display text-[20px] font-bold tracking-[-0.02em] whitespace-nowrap"
                  >
                    {client}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Why these notes ──────────────────────────────────────────── */}
        <section
          aria-label="Why these notes"
          className="mx-auto mt-20 max-w-[720px] px-6 text-center"
        >
          <span className="font-mono text-[12px] tracking-[0.14em] text-muted">
            STUCK TO THE FRIDGE, LIKE ALL GOOD REPORT CARDS
          </span>
          <h2 className="m-0 mt-3.5 font-display text-[clamp(30px,4.4vw,48px)] leading-[1.08] font-bold tracking-[-0.02em] text-balance">
            Don&rsquo;t take our word for it.
          </h2>
          <p className="mt-3.5 text-[18px] leading-[1.6] text-dim">
            Three clients, three before-and-afters. Pull a note off the wall.
          </p>
        </section>

        {/* ── Sticky-note results ──────────────────────────────────────── */}
        <section
          aria-label="Results"
          className="mx-auto mt-2 flex max-w-[1100px] flex-wrap items-start justify-center gap-8 px-6"
        >
          {RESULTS.map((result) => (
            <Link
              key={result.href}
              href={result.href}
              className={`relative w-[270px] rounded-2xl border-2 border-ink p-[22px] text-ink no-underline shadow-hard-5 transition-transform duration-200 hover:-translate-y-1 hover:text-ink ${result.card}`}
            >
              <span
                aria-hidden="true"
                className={`tape -top-[13px] h-6 w-[84px] ${result.tape}`}
              />
              <p className="m-0 font-display text-[42px] leading-none font-bold">{result.metric}</p>
              <p className="mt-2.5 mb-0 font-mono text-[11px] tracking-[0.08em]">{result.label}</p>
              <p className="mt-3.5 mb-0 text-[14px] font-bold underline underline-offset-[3px]">
                Read the story
              </p>
            </Link>
          ))}
        </section>

        {/* ── The menu ─────────────────────────────────────────────────── */}
        {/* scroll-mt keeps the sticky nav from covering the anchor target */}
        <section
          id="menu"
          aria-label="What we do"
          className="mx-auto mt-24 max-w-[1000px] scroll-mt-[130px] px-6"
        >
          <div className="rounded-[20px] border-2 border-ink bg-ink p-[clamp(24px,4.5vw,52px)] text-cream shadow-hard-coral-6">
            <div className="flex flex-wrap items-baseline justify-between gap-4 border-b-2 border-dashed border-[rgba(245,238,229,0.3)] pb-[18px]">
              <h2 className="m-0 font-display text-[clamp(28px,4vw,44px)] font-bold tracking-[-0.02em]">
                The menu
              </h2>
              <span className="font-mono text-[12px] tracking-[0.12em] text-[rgba(245,238,229,0.6)]">
                NINE THINGS WE COOK &middot; PICK ONE TO SEE THE RECIPE
              </span>
            </div>
            <div className="mt-2 flex flex-col">
              {SERVICES.map((service) => (
                <Link
                  key={service.slug}
                  href={ROUTES.service(service.slug)}
                  className="flex flex-wrap items-baseline gap-4 rounded-[10px] border-b border-[rgba(245,238,229,0.14)] px-2.5 py-4 text-cream no-underline transition-colors hover:bg-[rgba(245,238,229,0.08)] hover:text-cream"
                >
                  <span className="w-[26px] flex-none font-mono text-[13px] text-coral">
                    {service.no}
                  </span>
                  <span className="max-w-full flex-none font-display text-[clamp(19px,2.4vw,25px)] font-bold tracking-[-0.015em]">
                    {service.name}
                  </span>
                  {/* The dotted leader needs room to be a leader. Narrow screens
                      drop it and let the quip take its own line instead. */}
                  <span
                    aria-hidden="true"
                    className="min-w-6 flex-1 -translate-y-[5px] border-b-2 border-dotted border-[rgba(245,238,229,0.25)] max-[560px]:hidden"
                  />
                  <span className="text-right text-[15px] text-[rgba(245,238,229,0.65)] italic max-[560px]:basis-full max-[560px]:text-left">
                    {service.quip}
                  </span>
                  <span
                    aria-hidden="true"
                    className="flex-none font-bold text-gold max-[560px]:hidden"
                  >
                    &rarr;
                  </span>
                </Link>
              ))}
            </div>
            <p className="mt-[18px] mb-0 font-mono text-[12px] tracking-[0.1em] text-[rgba(245,238,229,0.5)]">
              ALL OF IT WRITTEN BY THE TWO PEOPLE YOU&rsquo;LL MEET &middot;{' '}
              <Link href={ROUTES.about} className="text-gold hover:text-gold">
                MEET THEM
              </Link>
            </p>
          </div>
        </section>

        {/* ── Pick an exit (Home has no footer, on purpose) ────────────── */}
        <section
          aria-label="Exits"
          className="mx-auto mt-24 max-w-[1000px] px-6 pb-[110px] text-center"
        >
          <span className="font-mono text-[12px] tracking-[0.14em] text-muted">
            THAT&rsquo;S THE WHOLE HOMEPAGE. NO FOOTER. FOOTERS ARE WHERE CLICKS GO TO DIE.
          </span>
          <h2 className="m-0 mt-3.5 font-display text-[clamp(30px,4.6vw,52px)] leading-[1.06] font-bold tracking-[-0.02em]">
            Pick an exit.
          </h2>
          <div className="mt-8 flex flex-wrap items-stretch justify-center gap-[18px]">
            {EXITS.map((exit) => {
              const className = `w-[210px] rounded-2xl border-2 border-ink px-6 py-5 text-left no-underline shadow-hard-5 transition-[translate,box-shadow] duration-200 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-hard-7 ${exit.card}`;
              const body = (
                <>
                  <span className={`font-mono text-[11px] tracking-[0.12em] ${exit.tagColor}`}>
                    {exit.tag}
                  </span>
                  <p className="mt-2 mb-1 font-display text-[20px] font-bold">{exit.title}</p>
                  <p className={`m-0 text-[14px] ${exit.blurbColor}`}>{exit.blurb}</p>
                </>
              );

              return exit.href.startsWith('http') ? (
                <a key={exit.href} href={exit.href} className={className}>
                  {body}
                </a>
              ) : (
                <Link key={exit.href} href={exit.href} className={className}>
                  {body}
                </Link>
              );
            })}
          </div>
        </section>
      </main>
    </>
  );
}
