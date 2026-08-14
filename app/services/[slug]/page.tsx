import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import SiteFooter from '@/components/SiteFooter';
import SiteNav from '@/components/SiteNav';
import { SERVICES, getService } from '@/lib/services';
import { CALENDLY, ROUTES } from '@/lib/site';

const CLIENTS = ['Synthesia', 'ClickUp', 'Sprig', 'iGotAnOffer', 'Roofr'];

export function generateStaticParams() {
  return SERVICES.map((service) => ({ slug: service.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return { title: service.name, description: service.blurb };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const index = SERVICES.findIndex((item) => item.slug === slug);
  const next = SERVICES[(index + 1) % SERVICES.length];
  const proofExternal = service.proof.href.startsWith('http');

  return (
    <>
      <SiteNav />
      <main>
        {/* ── Header ───────────────────────────────────────────────────── */}
        <section className="mx-auto max-w-[900px] px-6 pt-16">
          <p className="m-0 font-mono text-[13px] tracking-[0.1em] text-muted">
            <Link href="/#menu" className="text-purple">
              THE MENU
            </Link>{' '}
            / ITEM {service.no}
          </p>
          <div className="mt-5 flex flex-wrap items-start gap-6">
            <div className="min-w-[min(280px,100%)] flex-1">
              <h1 className="m-0 font-display text-[clamp(38px,6vw,72px)] leading-[1.04] font-bold tracking-[-0.03em] text-balance">
                {service.name}
              </h1>
              <p className="mt-3.5 mb-0 text-[clamp(19px,2.4vw,24px)] text-purple italic">
                &ldquo;{service.quip}&rdquo;
              </p>
            </div>
            <div
              aria-hidden="true"
              className="flex-none rotate-3 rounded-[14px] border-2 border-ink bg-cream-100 px-[18px] py-3.5 text-center shadow-hard-4"
            >
              <p className="m-0 font-mono text-[10px] tracking-[0.12em] text-muted">MENU ITEM</p>
              <p className="mt-1 mb-0 font-display text-[34px] leading-none font-bold text-coral">
                N&ordm;{service.no}
              </p>
            </div>
          </div>
          <p className="mt-6 mb-0 max-w-[60ch] text-[19px] leading-[1.65] text-dim">
            {service.blurb}
          </p>
          <div className="mt-8 flex flex-wrap items-baseline gap-x-[26px] gap-y-3 border-t border-hairline pt-5">
            <span className="flex-none font-mono text-[11px] tracking-[0.12em] text-muted">
              COOKED FOR TEAMS AT &rarr;
            </span>
            {CLIENTS.map((client) => (
              <span
                key={client}
                className="font-display text-[17px] font-bold tracking-[-0.01em]"
              >
                {client}
              </span>
            ))}
          </div>
        </section>

        {/* ── What you get ─────────────────────────────────────────────── */}
        <section aria-label="What you get" className="mx-auto mt-14 max-w-[900px] px-6">
          <span className="font-mono text-[12px] tracking-[0.14em] text-muted">
            WHAT COMES OUT OF THE KITCHEN
          </span>
          <div className="mt-4 grid grid-cols-[repeat(auto-fit,minmax(min(240px,100%),1fr))] gap-5">
            {service.bullets.map((bullet, bulletIndex) => (
              <div
                key={bullet.slice(0, 32)}
                className="flex items-start gap-3.5 rounded-2xl border-2 border-ink bg-cream-100 p-[22px] shadow-hard-5"
              >
                <span aria-hidden="true" className="flex-none pt-0.5 font-mono text-[14px] text-coral">
                  {String(bulletIndex + 1).padStart(2, '0')}
                </span>
                <p className="m-0 text-[16px] leading-[1.55]">{bullet}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── How we cook it ───────────────────────────────────────────── */}
        <section aria-label="How we do it" className="mx-auto mt-16 max-w-[900px] px-6">
          <span className="font-mono text-[12px] tracking-[0.14em] text-muted">
            THE RECIPE, WRITTEN OUT
          </span>
          <h2 className="mt-3 mb-0 font-display text-[clamp(26px,3.6vw,40px)] font-bold tracking-[-0.02em]">
            How we cook it.
          </h2>
          <p className="mt-4 mb-0 max-w-[66ch] text-[17px] leading-[1.7] text-dim">{service.how}</p>
          <div className="mt-[30px] grid grid-cols-[repeat(auto-fit,minmax(min(300px,100%),1fr))] gap-x-11 gap-y-[26px]">
            {service.subs.map((sub, subIndex) => (
              <div key={sub.t} className="border-t-2 border-ink pt-3.5">
                <p className="m-0 font-mono text-[12px] tracking-[0.1em] text-coral">
                  {String(subIndex + 1).padStart(2, '0')}
                </p>
                <h3 className="mt-2 mb-2 font-display text-[20px] font-bold tracking-[-0.015em]">
                  {sub.t}
                </h3>
                <p className="m-0 text-[15.5px] leading-[1.65] text-dim">{sub.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── When you need this ───────────────────────────────────────── */}
        <section aria-label="When you need this" className="mx-auto mt-12 max-w-[900px] px-6">
          <div className="flex flex-wrap items-baseline gap-4 rounded-2xl border-2 border-ink bg-purple-200 px-7 py-6 shadow-hard-5">
            <span className="flex-none font-mono text-[12px] tracking-[0.12em] text-purple">
              YOU NEED THIS WHEN &rarr;
            </span>
            <p className="m-0 min-w-[min(260px,100%)] flex-1 font-display text-[clamp(17px,2.2vw,21px)] leading-[1.45] font-semibold">
              {service.need}
            </p>
          </div>
          <p className="mt-[18px] mb-0 text-[16px] text-dim">
            Proof it works:{' '}
            {proofExternal ? (
              <a href={service.proof.href} className="font-bold">
                {service.proof.label}
              </a>
            ) : (
              <Link href={service.proof.href} className="font-bold">
                {service.proof.label}
              </Link>
            )}
          </p>
        </section>

        {/* ── The taped note ───────────────────────────────────────────── */}
        <section aria-label="A client note" className="mx-auto mt-16 flex max-w-[900px] justify-center px-6">
          <figure className="relative m-0 max-w-[600px] rotate-[-1.2deg] rounded-2xl border-2 border-ink bg-cream-100 px-8 py-[30px] shadow-hard-5">
            <span
              aria-hidden="true"
              className="tape -top-[13px] left-[40%] h-6 w-[90px] rotate-[2deg] bg-[rgba(241,112,91,0.6)]"
            />
            <p className="m-0 font-mono text-[11px] tracking-[0.14em] text-muted">
              OFF THE WALL OF LOVE
            </p>
            <blockquote className="m-0 mt-3.5 p-0">
              <p className="m-0 font-display text-[clamp(19px,2.4vw,23px)] leading-[1.45] font-semibold">
                &ldquo;{service.quote.text}&rdquo;
              </p>
            </blockquote>
            <figcaption className="mt-4 font-mono text-[11px] tracking-[0.1em] text-dim">
              {service.quote.who}
            </figcaption>
          </figure>
        </section>

        {/* ── Keep going ───────────────────────────────────────────────── */}
        <section
          aria-label="Keep going"
          className="mx-auto mt-20 max-w-[900px] border-t border-hairline px-6 pt-10 pb-[100px] text-center"
        >
          <h2 className="m-0 font-display text-[clamp(26px,3.6vw,40px)] font-bold tracking-[-0.02em]">
            Want this on your roadmap?
          </h2>
          <div className="mt-6 flex flex-wrap justify-center gap-3.5">
            <a
              href={CALENDLY}
              className="rounded-full border-2 border-ink bg-coral px-7 py-3.5 text-[16px] font-bold text-ink no-underline shadow-hard-4 transition-colors hover:bg-coral-dark hover:text-ink"
            >
              Book a call
            </a>
            <Link
              href={ROUTES.service(next.slug)}
              className="rounded-full border-2 border-purple bg-transparent px-7 py-3.5 text-[16px] font-bold text-purple no-underline transition-colors hover:bg-purple-200 hover:text-purple"
            >
              Next on the menu: {next.name} &rarr;
            </Link>
          </div>
          <p className="mt-[18px] mb-0 text-[15px] text-dim">
            Or head <Link href="/#menu">back to the full menu</Link>.
          </p>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
