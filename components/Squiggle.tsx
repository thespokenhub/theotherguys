'use client';

import { useEffect, useRef } from 'react';

/**
 * The signature element: a coral pencil underline beneath one pivotal word per
 * page headline. Draws left to right over ~600ms the first time it scrolls into
 * view. Under prefers-reduced-motion it renders fully drawn, no animation.
 *
 * One per page. Do not add more (project/HANDOFF.md → "Signature element").
 *
 * The word lives inside this component rather than beside it so the underline
 * and the text it belongs to can never break across lines separately.
 */
export default function Squiggle({
  children,
  color = '#F1705B',
}: {
  children: React.ReactNode;
  color?: string;
}) {
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    const path = pathRef.current;
    const svg = path?.ownerSVGElement;
    if (!path || !svg) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const length = path.getTotalLength();
    path.style.strokeDasharray = String(length);
    path.style.strokeDashoffset = String(length);

    let drawn = false;
    const draw = () => {
      if (drawn) return;
      drawn = true;
      // Force a reflow so the dashoffset above is the transition's start value.
      void path.getBoundingClientRect();
      path.style.transition = 'stroke-dashoffset 600ms ease-out';
      path.style.strokeDashoffset = '0';
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          draw();
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );
    observer.observe(svg);

    return () => observer.disconnect();
  }, []);

  return (
    <span className="relative inline-block">
      {children}
      <svg
        aria-hidden="true"
        viewBox="0 0 200 14"
        preserveAspectRatio="none"
        className="pointer-events-none absolute left-[-2%] bottom-[-0.18em] h-[0.28em] w-[104%] overflow-visible"
      >
        <path
          ref={pathRef}
          d="M3 9 C 28 3, 52 13, 78 7 C 104 2, 128 12, 154 6 C 172 3, 186 9, 197 5"
          fill="none"
          stroke={color}
          strokeWidth="6"
          strokeLinecap="round"
        />
      </svg>
    </span>
  );
}
