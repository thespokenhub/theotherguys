import type { CaseChart as Chart } from '@/lib/cases';

/**
 * The GA4-style "WE HOP ON → TODAY" chart every case study carries. Inline SVG,
 * geometry straight from the prototype: a muted flat line before kickoff, the
 * purple rise after it, a dashed coral kickoff marker, and taped-on badges.
 */
export default function CaseChart({ chart }: { chart: Chart }) {
  return (
    <div className="rounded-[20px] border-2 border-ink bg-cream-100 px-[26px] py-6 shadow-hard-5">
      <div className="flex flex-wrap items-baseline justify-between gap-3">
        <span className="font-mono text-[12px] tracking-[0.12em] text-ink">{chart.heading}</span>
        <span className="font-mono text-[11px] tracking-[0.08em] text-muted">{chart.note}</span>
      </div>
      <svg viewBox="0 0 800 260" className="mt-3.5 h-auto w-full" role="img" aria-label={chart.ariaLabel}>
        <line x1="20" y1="60" x2="780" y2="60" stroke="rgba(43,36,64,0.1)" strokeWidth="1" />
        <line x1="20" y1="110" x2="780" y2="110" stroke="rgba(43,36,64,0.1)" strokeWidth="1" />
        <line x1="20" y1="160" x2="780" y2="160" stroke="rgba(43,36,64,0.1)" strokeWidth="1" />
        <line x1="20" y1="210" x2="780" y2="210" stroke="rgba(43,36,64,0.35)" strokeWidth="1.5" />
        <path d={chart.fillD} fill="rgba(107,70,229,0.12)" />
        <path d={chart.preD} fill="none" stroke="#6E6784" strokeWidth="3.5" strokeLinecap="round" />
        <path d={chart.postD} fill="none" stroke="#6B46E5" strokeWidth="4.5" strokeLinecap="round" />
        {chart.extra && (
          <>
            <path
              d={chart.extra.d}
              fill="none"
              stroke="#F1705B"
              strokeWidth="3"
              strokeDasharray="2 7"
              strokeLinecap="round"
            />
            <text
              x="775"
              y={chart.extra.labelY}
              textAnchor="end"
              fontFamily="IBM Plex Mono, monospace"
              fontSize="11"
              fill="#F1705B"
            >
              {chart.extra.label}
            </text>
          </>
        )}
        <line
          x1={chart.kickoffX}
          y1="36"
          x2={chart.kickoffX}
          y2="210"
          stroke="#F1705B"
          strokeWidth="2.5"
          strokeDasharray="6 6"
        />
        <g transform={`rotate(-2 ${chart.kickoffX} 20)`}>
          <rect
            x={chart.kickoffX - 57}
            y="8"
            width="114"
            height="26"
            rx="13"
            fill="#F1705B"
            stroke="#2B2440"
            strokeWidth="2"
          />
          <text
            x={chart.kickoffX}
            y="26"
            textAnchor="middle"
            fontFamily="IBM Plex Mono, monospace"
            fontSize="12"
            letterSpacing="1"
            fill="#2B2440"
          >
            WE HOP ON
          </text>
        </g>
        <circle cx={chart.dot.x} cy={chart.dot.y} r="7" fill="#E8B44C" stroke="#2B2440" strokeWidth="2.5" />
        <g transform={`rotate(2 700 ${chart.today.rotateY})`}>
          <rect
            x="620"
            y={chart.today.badgeY}
            width="150"
            height="26"
            rx="13"
            fill="#E8B44C"
            stroke="#2B2440"
            strokeWidth="2"
          />
          <text
            x="695"
            y={chart.today.badgeY + 18}
            textAnchor="middle"
            fontFamily="IBM Plex Mono, monospace"
            fontSize="12"
            letterSpacing="1"
            fill="#2B2440"
          >
            {chart.today.label}
          </text>
        </g>
        <text x="20" y="240" fontFamily="IBM Plex Mono, monospace" fontSize="11" fill="#6E6784">
          {chart.startLabel}
        </text>
        <text
          x={chart.kickoffX}
          y="240"
          textAnchor="middle"
          fontFamily="IBM Plex Mono, monospace"
          fontSize="11"
          fill="#6E6784"
        >
          KICKOFF
        </text>
        <text x="780" y="240" textAnchor="end" fontFamily="IBM Plex Mono, monospace" fontSize="11" fill="#6E6784">
          TODAY
        </text>
      </svg>
    </div>
  );
}
