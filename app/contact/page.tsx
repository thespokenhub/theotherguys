import type { Metadata } from 'next';
import { Photo } from '@/components/ImageSlot';
import SiteFooter from '@/components/SiteFooter';
import SiteNav from '@/components/SiteNav';
import Squiggle from '@/components/Squiggle';
import { CALENDLY, EMAIL } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'One call, thirty minutes. What you have in place, what you are missing, and where you are headed with content marketing.',
};

const AGENDA = [
  'Where your GTM motion stands and what content has done for it so far.',
  'What buyer-first content and AI search visibility could do for your pipeline.',
  'If it fits, a concrete first sprint with dates on it. No proposal theater.',
];

export default function ContactPage() {
  return (
    <>
      <SiteNav />
      <main className="mx-auto grid max-w-[1240px] grid-cols-[repeat(auto-fit,minmax(min(320px,100%),1fr))] items-start gap-14 px-6 pt-[88px]">
        <section aria-label="Book a call">
          <h1 className="m-0 font-display text-[clamp(40px,6vw,72px)] leading-[1.04] font-bold tracking-[-0.03em] text-balance">
            Let&rsquo;s <Squiggle>talk</Squiggle> about your content.
          </h1>
          <p className="mt-6 max-w-[52ch] text-[19px] leading-[1.6] text-dim">
            One call, thirty minutes. We want to learn what you have in place, what you&rsquo;re
            missing, and where you&rsquo;re headed with content marketing. If we can help,
            we&rsquo;ll say how. If we can&rsquo;t, we&rsquo;ll say that too.
          </p>
          <a
            href={CALENDLY}
            className="mt-7 inline-block rounded-full border-2 border-ink bg-coral px-[34px] py-4 text-[18px] font-bold text-ink no-underline shadow-hard-4 transition-colors hover:bg-coral-dark hover:text-ink"
          >
            Book a meeting with us &rarr;
          </a>
          <p className="mt-5 text-[16px] text-dim">
            Calendars are personal. If you&rsquo;d rather write first, we read everything at{' '}
            <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.
          </p>
          <div className="mt-10 flex max-w-[52ch] flex-col gap-4 border-t border-hairline pt-7">
            <span className="font-mono text-[12px] tracking-[0.14em] text-muted">
              WHAT THE CALL COVERS
            </span>
            {AGENDA.map((item, index) => (
              <div key={item} className="flex items-baseline gap-3.5">
                <span className="flex-none font-mono text-[13px] text-purple">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <p className="m-0 text-[16px] leading-[1.6] text-dim">{item}</p>
              </div>
            ))}
          </div>
        </section>

        <aside aria-label="The Other Guys" className="flex flex-col gap-3.5">
          <div className="aspect-4/5 w-full max-w-[520px]">
            <Photo
              src="/images/tim-and-nelson.png"
              alt="Tim and Nelson, the two partners behind The Other Guys"
              radius={20}
              priority
            />
          </div>
          <p className="m-0 font-mono text-[12px] tracking-[0.1em] text-muted">
            THE ENTIRE COMPANY, PICTURED.
          </p>
        </aside>
      </main>
      <SiteFooter />
    </>
  );
}
