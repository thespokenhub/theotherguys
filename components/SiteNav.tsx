'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCallback, useEffect, useId, useRef, useState } from 'react';
import { CALENDLY, LOGO_SRC, ROUTES } from '@/lib/site';

const LINKS = [
  { label: 'Work', href: ROUTES.work },
  { label: 'Blog', href: ROUTES.blog },
  { label: 'About', href: ROUTES.about },
  { label: 'Compare', href: ROUTES.compare },
  { label: 'Contact', href: ROUTES.contact },
];

const isActive = (pathname: string, href: string) =>
  pathname === href || pathname.startsWith(`${href}/`);

/**
 * Floating cream pill nav: ink border, hard shadow, 28px of breathing room off
 * the top. Below 720px the links collapse into a hamburger drawer, which the
 * prototype could not express (it wrapped the pills instead) but the handoff
 * notes require.
 */
export default function SiteNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const drawerId = useId();
  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  const close = useCallback((returnFocus = true) => {
    setOpen(false);
    if (returnFocus) toggleRef.current?.focus();
  }, []);

  // Any navigation closes the drawer.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        close();
        return;
      }
      if (event.key !== 'Tab') return;

      // Keep Tab inside the drawer while it owns the screen.
      const focusable = panelRef.current?.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled])',
      );
      if (!focusable?.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      const active = document.activeElement;

      if (event.shiftKey && (active === first || active === toggleRef.current)) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && active === last) {
        event.preventDefault();
        first.focus();
      }
    };

    const onPointerDown = (event: PointerEvent) => {
      const target = event.target as Node;
      if (panelRef.current?.contains(target) || toggleRef.current?.contains(target)) return;
      close(false);
    };

    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('pointerdown', onPointerDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    panelRef.current?.querySelector<HTMLElement>('a[href]')?.focus();

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('pointerdown', onPointerDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [open, close]);

  return (
    <div className="sticky top-0 z-50 px-4 pt-7">
      <nav
        aria-label="Main"
        className="relative mx-auto flex max-w-[1160px] items-center gap-[10px] rounded-[28px] border-2 border-ink bg-cream-100 py-2 pr-[10px] pl-4 shadow-hard-4"
      >
        <Link
          href={ROUTES.home}
          aria-label="The Other Guys, home"
          className="mr-1.5 flex items-center gap-2.5 text-ink no-underline hover:text-ink"
        >
          <Image
            src={LOGO_SRC}
            alt=""
            width={36}
            height={36}
            className="block size-9 flex-none rounded-[10px] object-cover"
            unoptimized
          />
          <span className="font-display text-[18px] font-bold tracking-[-0.02em]">
            The Other Guys
          </span>
        </Link>

        {/* Desktop links */}
        <div className="ml-auto flex flex-wrap items-center gap-1 max-[719px]:hidden">
          {LINKS.map((link) => {
            const active = isActive(pathname, link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? 'page' : undefined}
                className={`rounded-full px-4 py-[9px] text-[15px] font-semibold no-underline transition-colors hover:bg-purple-200 hover:text-ink ${
                  active ? 'bg-purple text-cream-100' : 'bg-transparent text-ink'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <a
          href={CALENDLY}
          className="rounded-full border-2 border-ink bg-coral px-[18px] py-[9px] text-[15px] font-bold text-ink no-underline shadow-hard-3 transition-colors hover:bg-coral-dark hover:text-ink max-[719px]:hidden"
        >
          Book a call &rarr;
        </a>

        {/* Mobile toggle */}
        <button
          ref={toggleRef}
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls={drawerId}
          aria-label={open ? 'Close menu' : 'Open menu'}
          className="ml-auto hidden items-center gap-2 rounded-full border-2 border-ink bg-cream px-4 py-[9px] text-[15px] font-bold text-ink shadow-hard-3 max-[719px]:flex"
        >
          <span aria-hidden="true" className="flex flex-col gap-[4px]">
            <span
              className={`block h-[2px] w-[18px] bg-ink transition-transform ${
                open ? 'translate-y-[6px] rotate-45' : ''
              }`}
            />
            <span
              className={`block h-[2px] w-[18px] bg-ink transition-opacity ${
                open ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block h-[2px] w-[18px] bg-ink transition-transform ${
                open ? '-translate-y-[6px] -rotate-45' : ''
              }`}
            />
          </span>
          Menu
        </button>

        {/* Mobile drawer */}
        <div
          ref={panelRef}
          id={drawerId}
          hidden={!open}
          className="absolute top-[calc(100%+10px)] right-0 left-0 flex flex-col gap-1 rounded-[22px] border-2 border-ink bg-cream-100 p-3 shadow-hard-4 min-[720px]:hidden"
        >
          {LINKS.map((link) => {
            const active = isActive(pathname, link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? 'page' : undefined}
                className={`rounded-[14px] px-4 py-3 text-[16px] font-semibold no-underline ${
                  active ? 'bg-purple text-cream-100' : 'bg-transparent text-ink'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <a
            href={CALENDLY}
            className="mt-1 rounded-full border-2 border-ink bg-coral px-4 py-3 text-center text-[16px] font-bold text-ink no-underline shadow-hard-3 hover:text-ink"
          >
            Book a call &rarr;
          </a>
        </div>
      </nav>
    </div>
  );
}
