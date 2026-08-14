import type { Metadata } from 'next';
import CompareTool from '@/components/CompareTool';
import SiteFooter from '@/components/SiteFooter';
import SiteNav from '@/components/SiteNav';
import Squiggle from '@/components/Squiggle';

export const metadata: Metadata = {
  title: 'Compare us',
  description:
    'Pick who you are considering instead of us. We will tell you the honest difference, including when they are the better call.',
};

export default function ComparePage() {
  return (
    <>
      <SiteNav />
      <main>
        <section className="mx-auto max-w-[900px] px-6 pt-16 text-center">
          <span className="font-mono text-[12px] tracking-[0.14em] text-muted">
            WE&rsquo;LL EVEN HOLD THE DOOR OPEN
          </span>
          <h1 className="m-0 mt-3.5 font-display text-[clamp(38px,6vw,72px)] leading-[1.05] font-bold tracking-[-0.03em] text-balance">
            Go on, <Squiggle>{'compare us.'}</Squiggle>
          </h1>
          <p className="mx-auto mt-[18px] max-w-[52ch] text-[18px] leading-[1.6] text-dim">
            Pick who you&rsquo;re considering instead of us. We&rsquo;ll tell you the honest
            difference, including when they&rsquo;re the better call. Yes, really.
          </p>
        </section>

        <CompareTool />

        <div className="h-[100px]" />
      </main>
      <SiteFooter />
    </>
  );
}
