import Link from 'next/link';
import { PILLAR_KEYS, PILLARS } from '@/lib/posts';
import { CALENDLY, EMAIL, LINKEDIN, NEWSLETTER, ROUTES } from '@/lib/site';

const footerLink =
  'text-cream-100 underline decoration-[rgba(251,246,239,0.4)] underline-offset-[3px] hover:text-cream-100 hover:decoration-coral';

const columnHeading =
  'mb-1 font-mono text-[12px] tracking-[0.12em] text-[rgba(251,246,239,0.65)]';

/**
 * Purple footer, cream text. Every page carries it except Home, which
 * intentionally ends on "Pick an exit" instead.
 */
export default function SiteFooter() {
  return (
    <footer className="mt-24 border-t-2 border-ink bg-purple text-cream-100">
      <div className="mx-auto grid max-w-[1240px] grid-cols-[repeat(auto-fit,minmax(min(200px,100%),1fr))] gap-10 px-6 pt-16 pb-8">
        <div className="min-w-[220px]">
          <div className="font-display text-[22px] font-bold tracking-[-0.02em]">
            The Other Guys
          </div>
          <p className="mt-3 mb-5 max-w-[280px] text-[15px] leading-[1.6] text-[rgba(251,246,239,0.8)]">
            Written, designed, and argued over by two people. No content mill in the back.
          </p>
          <a
            href={CALENDLY}
            className="inline-block rounded-full border-2 border-ink bg-coral px-[22px] py-[11px] text-[15px] font-bold text-ink no-underline shadow-hard-3 transition-colors hover:bg-coral-dark hover:text-ink"
          >
            Book a call &rarr;
          </a>
        </div>

        <nav aria-label="Pages" className="flex flex-col gap-2.5 text-[15px]">
          <span className={columnHeading}>PAGES</span>
          <Link href={ROUTES.home} className={footerLink}>
            Home
          </Link>
          <Link href={ROUTES.work} className={footerLink}>
            Case studies
          </Link>
          <Link href={ROUTES.blog} className={footerLink}>
            Blog
          </Link>
          <Link href={ROUTES.about} className={footerLink}>
            About
          </Link>
          <Link href={ROUTES.contact} className={footerLink}>
            Contact
          </Link>
        </nav>

        <nav aria-label="Content pillars" className="flex flex-col gap-2.5 text-[15px]">
          <span className={columnHeading}>PILLARS</span>
          {PILLAR_KEYS.map((key) => (
            <Link key={key} href={ROUTES.pillar(key)} className={footerLink}>
              {PILLARS[key].label}
            </Link>
          ))}
        </nav>

        <nav aria-label="Elsewhere" className="flex flex-col gap-2.5 text-[15px]">
          <span className={columnHeading}>ELSEWHERE</span>
          <a href={NEWSLETTER} className={footerLink}>
            The newsletter: us, building this
          </a>
          <a href={LINKEDIN.company} className={footerLink}>
            LinkedIn
          </a>
          <a href={LINKEDIN.x} className={footerLink}>
            X
          </a>
          <a href={`mailto:${EMAIL}`} className={footerLink}>
            {EMAIL}
          </a>
        </nav>
      </div>

      <div className="border-t border-[rgba(251,246,239,0.3)]">
        <div className="mx-auto flex max-w-[1240px] flex-wrap justify-between gap-4 px-6 py-[18px] font-mono text-[12px] text-[rgba(251,246,239,0.7)]">
          <span>&copy; 2026 The Other Guys</span>
          <span>Human-made, buyer-first content that wins readers and AI search.</span>
        </div>
      </div>
    </footer>
  );
}
