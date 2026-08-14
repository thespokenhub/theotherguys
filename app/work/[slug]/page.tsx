import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import CaseChart from '@/components/CaseChart';
import { IllustrationSlot } from '@/components/ImageSlot';
import SiteFooter from '@/components/SiteFooter';
import SiteNav from '@/components/SiteNav';
import Squiggle from '@/components/Squiggle';
import { CASES, getCase } from '@/lib/cases';
import { CALENDLY, ROUTES } from '@/lib/site';

export function generateStaticParams() {
  return CASES.map((item) => ({ slug: item.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = getCase(slug);
  if (!study) return {};
  return {
    title: `${study.client} case study`,
    description: `${study.title.t1}${study.title.word}${study.title.t2}. ${study.stats[0].value} ${study.stats[0].label.toLowerCase()}.`,
  };
}

const statBg = {
  coral: 'bg-coral',
  'purple-200': 'bg-purple-200',
  'cream-100': 'bg-cream-100',
} as const;

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const study = getCase(slug);
  if (!study) notFound();
  const next = getCase(study.next)!;

  return (
    <>
      <SiteNav />
      <main>
        {/* ── Header ───────────────────────────────────────────────────── */}
        <section className="mx-auto max-w-[900px] px-6 pt-[72px]">
          <p className="m-0 font-mono text-[13px] tracking-[0.1em] text-muted">
            <Link href={ROUTES.work} className="text-purple">
              CASE STUDIES
            </Link>{' '}
            / {study.client.toUpperCase()}
          </p>
          <h1 className="mt-5 mb-0 font-display text-[clamp(36px,5.6vw,68px)] leading-[1.06] font-bold tracking-[-0.03em] text-balance">
            {study.title.t1}
            <Squiggle>{study.title.word}</Squiggle>
            {study.title.t2}
          </h1>
          <p className="mt-5 mb-0 font-mono text-[13px] tracking-[0.08em] text-muted">
            {study.metaLine}
          </p>
        </section>

        {/* ── The numbers ──────────────────────────────────────────────── */}
        <section
          aria-label="Results"
          className="mx-auto mt-12 grid max-w-[900px] grid-cols-[repeat(auto-fit,minmax(min(220px,100%),1fr))] gap-5 px-6"
        >
          {study.stats.map((stat) => (
            <div
              key={stat.label}
              className={`rounded-[20px] border-2 border-ink p-[26px] shadow-hard-5 ${statBg[stat.bg]}`}
              style={{ rotate: `${stat.tilt}deg` }}
            >
              <p className="m-0 font-display text-[44px] leading-none font-bold">{stat.value}</p>
              <p className="mt-2.5 mb-0 font-mono text-[12px] tracking-[0.08em]">{stat.label}</p>
            </div>
          ))}
        </section>

        {/* ── The chart ────────────────────────────────────────────────── */}
        <section aria-label="The chart" className="mx-auto mt-14 max-w-[900px] px-6">
          <CaseChart chart={study.chart} />
        </section>

        {/* ── The story ────────────────────────────────────────────────── */}
        <section className="mx-auto mt-16 max-w-[720px] px-6 text-[18px] leading-[1.7] text-body">
          <h2 className="m-0 font-display text-[30px] font-bold tracking-[-0.02em] text-ink">
            The setup
          </h2>
          {study.setup.map((paragraph) => (
            <p key={paragraph.slice(0, 32)}>{paragraph}</p>
          ))}
          <h2 className="mt-12 mb-0 font-display text-[30px] font-bold tracking-[-0.02em] text-ink">
            What we did
          </h2>
          <div className="mt-5 flex flex-col gap-[22px]">
            {study.did.map((item, index) => (
              <div key={item.slice(0, 32)} className="flex gap-4">
                <span className="flex-none pt-[3px] font-mono text-[14px] text-purple">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <p className="m-0">{item}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── The quote ────────────────────────────────────────────────── */}
        <section aria-label="Client quote" className="mx-auto mt-16 max-w-[900px] px-6">
          <blockquote className="m-0 rounded-[20px] bg-ink p-[clamp(28px,5vw,48px)] text-cream shadow-hard-coral-6">
            <p className="m-0 font-display text-[clamp(20px,2.6vw,28px)] leading-[1.4] font-semibold text-pretty">
              &ldquo;{study.quote.text}&rdquo;
            </p>
            <footer className="mt-5 font-mono text-[13px] text-[rgba(245,238,229,0.7)]">
              {study.quote.who}
            </footer>
          </blockquote>
        </section>

        {/* ── The work, on screen ──────────────────────────────────────── */}
        <section aria-label="The work" className="mx-auto mt-16 max-w-[900px] px-6">
          <h2 className="m-0 mb-5 font-display text-[30px] font-bold tracking-[-0.02em]">
            The work, on screen
          </h2>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(min(280px,100%),1fr))] gap-5">
            {study.shots.map((shot) => (
              <figure key={shot.caption} className="m-0">
                <div className="aspect-4/3 w-full">
                  <IllustrationSlot caption={shot.placeholder} alt={shot.alt} radius={14} />
                </div>
                <figcaption className="mt-2 font-mono text-[12px] text-muted">
                  {shot.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* ── Next ─────────────────────────────────────────────────────── */}
        <section
          aria-label="Next"
          className="mx-auto mt-20 flex max-w-[900px] flex-wrap items-center justify-between gap-5 border-t border-hairline px-6 pt-8 pb-[100px]"
        >
          <Link
            href={ROUTES.caseStudy(next.slug)}
            className="font-display text-[22px] font-bold underline underline-offset-4"
          >
            Next: {next.shortName} &rarr;
          </Link>
          <a
            href={CALENDLY}
            className="rounded-full border-2 border-ink bg-coral px-[26px] py-[13px] text-[16px] font-bold text-ink no-underline shadow-hard-4 transition-colors hover:bg-coral-dark hover:text-ink"
          >
            Book a call
          </a>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
