'use client';

import Link from 'next/link';
import { useState } from 'react';
import { CATEGORIES, ROUND_LABELS, US } from '@/lib/compare';
import { CALENDLY, ROUTES } from '@/lib/site';

/**
 * Pick a category, pick an archetype, get the tale of the tape. Categories with
 * a single archetype skip step 2 and jump straight to the comparison.
 */
export default function CompareTool() {
  const [categoryKey, setCategoryKey] = useState<string | null>(null);
  const [competitorKey, setCompetitorKey] = useState<string | null>(null);

  const category = CATEGORIES.find((item) => item.key === categoryKey) ?? null;
  const competitor = category?.comps.find((item) => item.key === competitorKey) ?? null;
  const showCompetitors = !!category && category.comps.length > 1;

  const pickCategory = (key: string) => {
    const next = CATEGORIES.find((item) => item.key === key);
    setCategoryKey(key);
    setCompetitorKey(next && next.comps.length === 1 ? next.comps[0].key : null);
  };

  return (
    <>
      <section aria-label="Pick a category" className="mx-auto mt-11 max-w-[1000px] px-6">
        <p className="m-0 mb-3.5 font-mono text-[12px] tracking-[0.14em] text-muted">
          STEP 1 &middot; WHO ELSE IS ON YOUR SHORTLIST?
        </p>
        <div className="flex flex-wrap gap-3.5">
          {CATEGORIES.map((item, index) => {
            const selected = item.key === categoryKey;
            return (
              <button
                key={item.key}
                type="button"
                onClick={() => pickCategory(item.key)}
                aria-pressed={selected}
                className={`rounded-[14px] border-2 border-ink px-[22px] py-3.5 font-display text-[17px] font-bold shadow-hard-4 transition-[translate,box-shadow] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-hard-6 ${
                  selected ? 'bg-purple text-cream-100' : 'bg-cream-100 text-ink'
                }`}
                style={{ rotate: index % 2 ? '0.8deg' : '-0.8deg' }}
              >
                {item.label}
              </button>
            );
          })}
        </div>
      </section>

      {showCompetitors && (
        <section aria-label="Pick a competitor" className="mx-auto mt-10 max-w-[1000px] px-6">
          <p className="m-0 mb-3.5 font-mono text-[12px] tracking-[0.14em] text-muted">
            STEP 2 &middot; WHICH ONE? (YOU&rsquo;LL RECOGNIZE THE TYPE)
          </p>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(min(220px,100%),1fr))] gap-3.5">
            {category.comps.map((item) => {
              const selected = item.key === competitorKey;
              return (
                <button
                  key={item.key}
                  type="button"
                  onClick={() => setCompetitorKey(item.key)}
                  aria-pressed={selected}
                  className={`rounded-[14px] border-2 border-ink px-5 py-[18px] text-left font-body text-ink shadow-hard-4 transition-[translate,box-shadow] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-hard-6 ${
                    selected ? 'bg-purple-200' : 'bg-cream-100'
                  }`}
                >
                  <span className="block font-display text-[18px] font-bold">{item.name}</span>
                  <span className="mt-1 block text-[14px] text-dim">{item.tag}</span>
                </button>
              );
            })}
          </div>
        </section>
      )}

      {competitor && (
        <section aria-label="The tale of the tape" className="mx-auto mt-14 max-w-[1000px] px-6">
          <div className="rounded-[20px] border-2 border-ink bg-ink p-[clamp(22px,4vw,44px)] text-cream shadow-hard-coral-6">
            <div className="flex flex-wrap items-center justify-center gap-[18px] text-center">
              <span className="font-display text-[clamp(22px,3vw,32px)] font-bold tracking-[-0.02em]">
                {competitor.name}
              </span>
              <span className="rotate-[-4deg] rounded-full border-2 border-gold px-3 py-1.5 font-mono text-[14px] text-gold">
                VS
              </span>
              <span className="font-display text-[clamp(22px,3vw,32px)] font-bold tracking-[-0.02em] text-purple-200">
                The Other Guys
              </span>
            </div>

            <div className="mt-[30px] flex flex-col gap-3.5">
              {ROUND_LABELS.map((round, index) => (
                <div
                  key={round.key}
                  className="rounded-[14px] border border-[rgba(245,238,229,0.2)] px-5 py-[18px]"
                >
                  <p className="m-0 font-mono text-[11px] tracking-[0.14em] text-coral">
                    ROUND {index + 1} &middot; {round.label}
                  </p>
                  <div className="mt-2.5 grid grid-cols-[repeat(auto-fit,minmax(min(240px,100%),1fr))] gap-3.5">
                    <p className="m-0 text-[15px] leading-[1.55] text-[rgba(245,238,229,0.75)]">
                      <span className="mb-1 block font-mono text-[10px] tracking-[0.1em] text-[rgba(245,238,229,0.5)]">
                        THEM
                      </span>
                      {competitor.them[round.key]}
                    </p>
                    <p className="m-0 text-[15px] leading-[1.55] font-semibold text-cream">
                      <span className="mb-1 block font-mono text-[10px] tracking-[0.1em] text-gold">
                        US
                      </span>
                      {US[round.key]}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-3.5 rounded-[14px] border-2 border-dashed border-[rgba(232,180,76,0.5)] px-5 py-[18px]">
              <p className="m-0 font-mono text-[11px] tracking-[0.14em] text-gold">
                FULL HONESTY &middot; WHEN THEY&rsquo;RE THE RIGHT CALL
              </p>
              <p className="mt-2.5 mb-0 text-[15px] leading-[1.6] text-[rgba(245,238,229,0.85)]">
                {competitor.them.pick}
              </p>
            </div>
          </div>

          <div className="mt-9 text-center">
            <p className="m-0 font-display text-[clamp(22px,3vw,32px)] font-bold tracking-[-0.02em]">
              Still standing? Good, so are we.
            </p>
            <div className="mt-5 flex flex-wrap justify-center gap-3.5">
              <a
                href={CALENDLY}
                className="rounded-full border-2 border-ink bg-coral px-7 py-3.5 text-[16px] font-bold text-ink no-underline shadow-hard-4 transition-colors hover:bg-coral-dark hover:text-ink"
              >
                Book the call
              </a>
              <Link
                href={ROUTES.work}
                className="rounded-full border-2 border-purple bg-transparent px-7 py-3.5 text-[16px] font-bold text-purple no-underline transition-colors hover:bg-purple-200 hover:text-purple"
              >
                Check our receipts first
              </Link>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
