import Link from 'next/link';
import { Photo } from '@/components/ImageSlot';
import SiteFooter from '@/components/SiteFooter';
import SiteNav from '@/components/SiteNav';
import Squiggle from '@/components/Squiggle';
import { ROUTES } from '@/lib/site';

export default function NotFound() {
  return (
    <>
      <SiteNav />
      <main className="mx-auto flex max-w-[1240px] flex-col items-center gap-6 px-6 pt-24 pb-10 text-center">
        <p className="m-0 rounded-full bg-purple-200 px-4 py-2 font-mono text-[13px] tracking-[0.14em]">
          ERROR 404 &middot; PAGE NOT FOUND
        </p>
        <h1 className="m-0 max-w-[14ch] font-display text-[clamp(44px,8vw,96px)] leading-[1.02] font-bold tracking-[-0.03em] text-balance">
          This page <Squiggle>wandered</Squiggle> off.
        </h1>
        <p className="m-0 max-w-[44ch] text-[19px] leading-[1.6] text-dim">
          There&rsquo;s nothing here. Either we moved it and forgot to tell the internet, or you
          typed something adventurous. Both happen.
        </p>
        <div className="mt-2 flex flex-wrap justify-center gap-3.5">
          <Link
            href={ROUTES.home}
            className="rounded-full border-2 border-ink bg-coral px-[26px] py-[13px] text-[16px] font-bold text-ink no-underline shadow-hard-4 transition-colors hover:bg-coral-dark hover:text-ink"
          >
            Back home
          </Link>
          <Link
            href={ROUTES.blog}
            className="rounded-full border-2 border-purple bg-transparent px-[26px] py-[13px] text-[16px] font-bold text-purple no-underline transition-colors hover:bg-purple-200 hover:text-purple"
          >
            Read something good instead
          </Link>
        </div>
        <figure className="mt-10 mb-0 w-[min(420px,100%)]">
          <div className="aspect-3/2 w-full">
            <Photo
              src="/images/404.webp"
              alt="Pencil illustration of a lost paper airplane circling a blank signpost"
              radius={20}
              sizes="420px"
            />
          </div>
          <figcaption className="mt-2.5 font-mono text-[12px] text-muted">
            A LOST PAPER AIRPLANE, ACCURATELY DEPICTED.
          </figcaption>
        </figure>
      </main>
      <SiteFooter />
    </>
  );
}
