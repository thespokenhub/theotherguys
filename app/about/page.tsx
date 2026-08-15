import type { Metadata } from 'next';
import Link from 'next/link';
import { Photo } from '@/components/ImageSlot';
import SiteFooter from '@/components/SiteFooter';
import SiteNav from '@/components/SiteNav';
import Squiggle from '@/components/Squiggle';
import { CALENDLY, ROUTES } from '@/lib/site';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Nothing between you and the work. Tim and Nelson, the two people who write every line, four clients at a time.',
};

const kicker = 'font-mono text-[12px] tracking-[0.14em] text-muted';
const sectionHeading =
  'm-0 mt-3 font-display text-[clamp(30px,4.6vw,52px)] leading-[1.06] font-bold tracking-[-0.02em]';
const dashedChip =
  'rounded-[10px] border-2 border-dashed border-muted px-3.5 py-2 text-[14px] text-dim';
const solidChip =
  'rounded-[10px] border-2 border-ink px-[18px] py-2.5 text-[16px] font-bold shadow-hard-3';
const skillTag =
  'rounded-full border-[1.5px] border-[rgba(43,36,64,0.4)] px-2.5 py-[5px] font-mono text-[11px] tracking-[0.08em] text-dim';
const receiptRow = 'flex justify-between py-1.5 text-[12px]';

export default function AboutPage() {
  return (
    <>
      <SiteNav />
      <main>
        {/* ── Headline ─────────────────────────────────────────────────── */}
        <section className="mx-auto max-w-[1240px] px-6 pt-16">
          <h1 className="m-0 max-w-[18ch] font-display text-[clamp(40px,6.4vw,80px)] leading-[1.04] font-bold tracking-[-0.03em] text-balance">
            Nothing between you and the <Squiggle>work</Squiggle>.
          </h1>
          <p className="mt-6 max-w-[58ch] text-[19px] leading-[1.6] text-dim">
            Here&rsquo;s what your brief travels through at a normal agency, versus here:
          </p>
        </section>

        {/* ── The org chart, drawn out ──────────────────────────────────── */}
        <section
          aria-label="The org chart, drawn out"
          className="mx-auto mt-9 flex max-w-[1240px] flex-col gap-[18px] px-6"
        >
          <div className="relative rounded-[18px] border-2 border-[rgba(43,36,64,0.35)] bg-cream-100 px-[26px] py-[22px]">
            <span className="font-mono text-[11px] tracking-[0.14em] text-muted">
              EVERYWHERE ELSE &middot; YOUR BRIEF&rsquo;S COMMUTE
            </span>
            <div className="mt-3.5 flex flex-wrap items-center gap-2.5 opacity-65">
              <span className="rounded-[10px] border-2 border-ink bg-cream px-3.5 py-2 text-[14px] font-bold">
                You
              </span>
              <span aria-hidden="true" className="text-muted">
                &rarr;
              </span>
              <span className={`${dashedChip} rotate-[-1deg]`}>Account manager</span>
              <span aria-hidden="true" className="text-muted">
                &rarr;
              </span>
              <span className={`${dashedChip} rotate-[0.8deg]`}>Strategist&rsquo;s deck</span>
              <span aria-hidden="true" className="text-muted">
                &rarr;
              </span>
              <span className={`${dashedChip} rotate-[-0.6deg]`}>
                Junior writer (learning on your budget)
              </span>
              <span aria-hidden="true" className="text-muted">
                &rarr;
              </span>
              <span className={`${dashedChip} rotate-[1deg]`}>Six weeks later: a draft</span>
            </div>
            <span
              aria-hidden="true"
              className="absolute -top-3.5 right-[22px] rotate-3 rounded-full border-2 border-ink bg-coral px-3.5 py-1.5 font-mono text-[11px] tracking-[0.1em] shadow-hard-3"
            >
              NOPE
            </span>
          </div>

          <div className="relative rounded-[18px] border-2 border-ink bg-cream-100 px-[26px] py-[22px] shadow-hard-5">
            <span className="font-mono text-[11px] tracking-[0.14em] text-purple">
              HERE &middot; THE ENTIRE COMMUTE
            </span>
            <div className="mt-3.5 flex flex-wrap items-center gap-3">
              <span className={`${solidChip} bg-gold`}>You</span>
              <span aria-hidden="true" className="text-[20px] font-bold text-purple">
                &harr;
              </span>
              <span className={`${solidChip} bg-purple-200`}>Tim &amp; Nelson</span>
              <span aria-hidden="true" className="text-[20px] font-bold text-purple">
                &rarr;
              </span>
              <span className={`${solidChip} bg-coral`}>Published, this month</span>
            </div>
            <span
              aria-hidden="true"
              className="absolute -top-3.5 right-[22px] rotate-[-2deg] rounded-full border-2 border-ink bg-purple-200 px-3.5 py-1.5 font-mono text-[11px] tracking-[0.1em] shadow-hard-3"
            >
              THE WHOLE CHART
            </span>
          </div>
        </section>

        {/* ── The partners ─────────────────────────────────────────────── */}
        <section
          aria-label="The partners"
          className="mx-auto mt-20 flex max-w-[1240px] flex-wrap items-center justify-center gap-5 px-6"
        >
          <article className="relative flex max-w-[520px] min-w-[min(300px,100%)] flex-1 rotate-[-1.1deg] flex-col gap-[18px] rounded-[20px] border-2 border-ink bg-cream-100 p-7 shadow-hard-6 transition-[rotate,translate,box-shadow] duration-250 ease-out hover:-translate-y-1 hover:rotate-0 hover:shadow-hard-9">
            <span
              aria-hidden="true"
              className="tape -top-[13px] left-[40%] h-6 w-[90px] rotate-[-2deg] bg-[rgba(230,222,251,0.85)]"
            />
            <div className="aspect-4/3 w-full">
              <Photo
                src="/images/tim.png"
                alt="Tim Agbola, partner at The Other Guys"
                radius={14}
                priority
              />
            </div>
            <div>
              <span className="rounded-full border-[1.5px] border-ink bg-purple-200 px-3 py-1.5 font-mono text-[12px] tracking-[0.12em]">
                PARTNER &middot; STRATEGY
              </span>
              <h2 className="mt-3.5 mb-2 font-display text-[30px] font-bold tracking-[-0.02em]">
                Hey, I&rsquo;m Tim
              </h2>
              <p className="m-0 text-[16px] leading-[1.65] text-dim">
                The old brain-and-brawn around here. I decide where we&rsquo;re going and why:
                positioning, narrative, what deserves to exist at all. Neurotic, I think loud, and I
                work harder. Before this I built content at iGotAnOffer and Launchspace, where I got
                obsessed with one question: why does distribution get all the credit when the writing
                does the work?
              </p>
              <div className="mt-3.5 flex flex-wrap gap-2">
                <span className={skillTag}>POSITIONING</span>
                <span className={skillTag}>NARRATIVE</span>
                <span className={skillTag}>THE EDITORIAL BAR</span>
              </div>
              <p className="mt-3.5 text-[14px]">
                <Link href={ROUTES.author('tim')} className="font-bold">
                  Everything Tim has written &rarr;
                </Link>
              </p>
            </div>
          </article>

          <div
            aria-hidden="true"
            /* The overlap only reads when the cards sit side by side; stacked,
               it just bites into them. */
            className="z-2 mx-[-34px] flex-none translate-y-0 rotate-[-4deg] self-center rounded-full border-2 border-ink bg-gold px-[18px] py-3.5 text-center shadow-hard-4 max-[720px]:mx-0"
          >
            <p className="m-0 font-display text-[20px] leading-none font-bold">&harr;</p>
            <p className="mt-1.5 mb-0 max-w-[11ch] font-mono text-[10px] tracking-[0.1em]">
              ARGUE DAILY, SHIP WEEKLY
            </p>
          </div>

          <article className="relative flex max-w-[520px] min-w-[min(300px,100%)] flex-1 rotate-[1.2deg] flex-col gap-[18px] rounded-[20px] border-2 border-ink bg-cream-100 p-7 shadow-hard-6 transition-[rotate,translate,box-shadow] duration-250 ease-out hover:-translate-y-1 hover:rotate-0 hover:shadow-hard-9">
            <span
              aria-hidden="true"
              className="tape -top-[13px] left-[36%] h-6 w-[90px] rotate-[2deg] bg-[rgba(241,112,91,0.6)]"
            />
            <div className="aspect-4/3 w-full">
              <Photo
                src="/images/nelson.png"
                alt="Nelson Ansah, partner at The Other Guys"
                radius={14}
                priority
              />
            </div>
            <div>
              <span className="rounded-full border-[1.5px] border-ink bg-coral px-3 py-1.5 font-mono text-[12px] tracking-[0.12em]">
                PARTNER &middot; EXECUTION
              </span>
              <h2 className="mt-3.5 mb-2 font-display text-[30px] font-bold tracking-[-0.02em]">
                And I&rsquo;m Nelson
              </h2>
              <p className="m-0 text-[16px] leading-[1.65] text-dim">
                I say overthinking is oxymoronic. While Tim is up in the clouds arguing with the
                strategy, I&rsquo;m the one turning it into published work, on time, at the bar we
                promised. I&rsquo;ve shipped for Sprig, ClickUp, Skillzy, and Synthesia, mostly
                turning product roadmaps into stories buyers finish.
              </p>
              <div className="mt-3.5 flex flex-wrap gap-2">
                <span className={skillTag}>PRODUCTION</span>
                <span className={skillTag}>DISTRIBUTION</span>
                <span className={skillTag}>DEADLINES</span>
              </div>
              <p className="mt-3.5 text-[14px]">
                <Link href={ROUTES.author('nelson')} className="font-bold">
                  Everything Nelson has written &rarr;
                </Link>
              </p>
            </div>
          </article>
        </section>

        {/* ── Billboard numbers ────────────────────────────────────────── */}
        <section aria-label="The numbers" className="mx-auto mt-24 max-w-[1240px] px-6">
          <div className="mx-auto mb-[30px] max-w-[600px] text-center">
            <span className={kicker}>SMALL TEAM. BILLBOARD NUMBERS.</span>
            <h2 className={sectionHeading}>What two guys add up to.</h2>
          </div>
          <div className="flex flex-wrap items-stretch justify-center gap-[22px]">
            <div className="w-[250px] rotate-[-1.6deg] rounded-2xl border-2 border-ink bg-purple p-6 text-cream-100 shadow-hard-5">
              <p className="m-0 font-display text-[44px] leading-none font-bold">2.6M+</p>
              <p className="mt-3 mb-0 font-mono text-[11px] leading-[1.5] tracking-[0.08em]">
                REGISTERED USERS ATTRIBUTED TO OUR TEAM&rsquo;S WORK, THROUGH JUL 2026
              </p>
            </div>
            <div className="mt-4 w-[250px] rotate-[1.1deg] rounded-2xl border-2 border-ink bg-cream-100 p-6 shadow-hard-5">
              <p className="m-0 font-display text-[34px] leading-[1.1] font-bold">
                Series A &rarr; $500M
              </p>
              <p className="mt-3 mb-0 font-mono text-[11px] leading-[1.5] tracking-[0.08em] text-dim">
                THE VALUATION RIDE WE&rsquo;VE HELPED STARTUPS TAKE
              </p>
            </div>
            <div className="w-[250px] rotate-[-0.8deg] rounded-2xl border-2 border-ink bg-coral p-6 shadow-hard-5">
              <p className="m-0 font-display text-[44px] leading-none font-bold">280%</p>
              <p className="mt-3 mb-0 font-mono text-[11px] leading-[1.5] tracking-[0.08em]">
                REVENUE GROWTH, OUR BEST SINGLE ENGAGEMENT
              </p>
            </div>
            <div className="mt-5 w-[250px] rotate-[1.4deg] rounded-2xl border-2 border-ink bg-purple-200 p-6 shadow-hard-5">
              <p className="m-0 font-display text-[44px] leading-none font-bold">200+</p>
              <p className="mt-3 mb-0 font-mono text-[11px] leading-[1.5] tracking-[0.08em] text-dim">
                SALES INTERACTIONS SOURCED BY CONTENT, ACROSS CLIENT TEAMS
              </p>
            </div>
          </div>
          <p className="mx-auto mt-7 max-w-[52ch] text-center text-[16px] text-dim">
            Also: we built and marketed <em>our own</em> product before this. So when we talk
            go-to-market, it&rsquo;s not from the agency bleachers.{' '}
            <Link href={ROUTES.work} className="font-bold">
              The receipts live here &rarr;
            </Link>
          </p>
        </section>

        {/* ── Where your retainer goes ─────────────────────────────────── */}
        <section aria-label="Us versus them" className="mx-auto mt-24 max-w-[1100px] px-6">
          <div className="mx-auto mb-[34px] max-w-[620px] text-center">
            <span className={kicker}>US VS. THEM, ITEMIZED</span>
            <h2 className={sectionHeading}>Where your retainer goes.</h2>
          </div>
          <div className="flex flex-wrap items-start justify-center gap-10">
            <div className="w-[min(360px,100%)] rotate-[-1.4deg] border-[1.5px] border-[rgba(43,36,64,0.4)] bg-white px-6 py-[26px] font-mono text-body shadow-receipt">
              <p className="m-0 text-center text-[13px] font-medium tracking-[0.12em]">
                ANY OTHER AGENCY, LLC
              </p>
              <p className="mt-1 mb-0 text-center text-[10px] tracking-[0.1em] text-muted">
                RETAINER INVOICE &middot; #00-TYPICAL
              </p>
              <div className="my-4 border-t-2 border-dashed border-[rgba(43,36,64,0.3)]" />
              <div className={receiptRow}>
                <span>ACCOUNT MANAGEMENT</span>
                <span>30%</span>
              </div>
              <div className={receiptRow}>
                <span>MEETINGS ABOUT THE MEETING</span>
                <span>12%</span>
              </div>
              <div className={receiptRow}>
                <span>&ldquo;STRATEGY&rdquo; DECK (TEMPLATE)</span>
                <span>18%</span>
              </div>
              <div className={receiptRow}>
                <span>JUNIOR WRITER, LEARNING ON YOUR DIME</span>
                <span>25%</span>
              </div>
              <div className={receiptRow}>
                <span>THE ACTUAL WRITING</span>
                <span>15%</span>
              </div>
              <div className="my-4 border-t-2 border-dashed border-[rgba(43,36,64,0.3)]" />
              <div className="flex justify-between py-0.5 text-[13px] font-medium">
                <span>TOTAL</span>
                <span>YOUR BUDGET</span>
              </div>
              <p className="mt-[18px] mb-0 text-center text-[10px] tracking-[0.1em] text-muted">
                THANK YOU FOR YOUR PATIENCE
              </p>
              <div
                aria-hidden="true"
                className="mx-auto mt-3.5 h-[34px] w-[70%]"
                style={{
                  background:
                    'repeating-linear-gradient(90deg,#2B2440 0 2px,transparent 2px 5px,#2B2440 5px 6px,transparent 6px 10px)',
                }}
              />
            </div>

            <div className="relative w-[min(340px,100%)] rotate-[1.8deg] self-center rounded-md border-2 border-ink bg-gold px-7 py-[30px] shadow-hard-6">
              <span
                aria-hidden="true"
                className="tape -top-[13px] left-[38%] h-6 w-[84px] rotate-[-2deg] bg-[rgba(251,246,239,0.7)]"
              />
              <p className="m-0 font-mono text-[11px] tracking-[0.12em] text-ink">OURS IS SIMPLER:</p>
              <p className="mt-3.5 mb-0 font-hand text-[31px] leading-[1.25] text-ink">
                Strategy, research, writing, design, distribution.
              </p>
              <p className="mt-2.5 mb-0 rotate-[-1deg] font-hand text-[24px] text-ink">
                &mdash; every line, by the people you hired
              </p>
              <p className="mt-4 text-[14px]">
                <Link href={ROUTES.work} className="font-bold text-ink hover:text-ink">
                  See what that buys you &rarr;
                </Link>
              </p>
            </div>
          </div>
        </section>

        {/* ── The philosophy ───────────────────────────────────────────── */}
        <section aria-label="How we think" className="mx-auto mt-24 max-w-[1240px] px-6">
          <div className="grid grid-cols-[repeat(auto-fit,minmax(min(280px,100%),1fr))] items-start gap-10 rounded-[20px] border-2 border-ink bg-cream-100 p-[clamp(28px,5vw,56px)] shadow-hard-6">
            <div>
              <span className={kicker}>THE PHILOSOPHY</span>
              <h2 className="m-0 mt-3.5 font-display text-[clamp(30px,4vw,44px)] leading-[1.08] font-bold tracking-[-0.02em] text-balance">
                Every post is a product demo in disguise.
              </h2>
            </div>
            <div className="flex flex-col gap-4 text-[17px] leading-[1.65] text-dim">
              <p className="m-0">
                Quality over quantity, always. Most content teams publish to fill a calendar. We
                publish when a piece can show what your product makes possible while teaching a
                lesson only you could deliver. That combination is your moat, because nobody else has
                your product or your scars.
              </p>
              <p className="m-0">
                We embed early, learn the roadmap, talk to your buyers, and build story-driven,
                insight-dense pieces. Anti-generic is the bar. If a competitor could publish it, we
                cut it.
              </p>
            </div>
          </div>
        </section>

        {/* ── The letter ───────────────────────────────────────────────── */}
        <section
          aria-label="A letter from us"
          className="relative mx-auto mt-[88px] flex max-w-[920px] flex-col px-6"
        >
          <div className="rotate-[-0.4deg] rounded-[20px] border-2 border-ink bg-cream-100 p-[clamp(28px,5vw,56px)] shadow-hard-6">
            <p className="m-0 font-mono text-[12px] tracking-[0.14em] text-muted">
              FROM THE DESK OF THE OTHER GUYS &middot; JULY 2026
            </p>
            <p className="mt-6 mb-0 font-display text-[26px] font-bold tracking-[-0.02em]">
              Hi. We&rsquo;re Tim and Nelson.
            </p>
            <div className="mt-4 flex flex-col gap-4 text-[17px] leading-[1.75] text-body">
              <p className="m-0">
                We started this agency because most B2B content reads like it was written by no one,
                for everyone. Our fix is simple to say and hard to do: we make content for the buyer,
                and for the machines that now recommend you.
              </p>
              <p className="m-0">
                We take four clients at a time. Max. That&rsquo;s not a scarcity trick. It&rsquo;s
                the honest ceiling for work we&rsquo;d put our names on. If you&rsquo;re one of the
                four, you get our full attention, our sharpest thinking, and at least one heated
                argument about a comma.
              </p>
              <p className="m-0">
                Come say hi. Worst case, you leave the call with a clearer content strategy than you
                came with.
              </p>
            </div>
            <p className="mt-7 mb-0 rotate-[-2deg] font-hand text-[34px] text-purple">
              Tim &amp; Nelson
            </p>
            <p className="mt-1 mb-0 font-mono text-[11px] tracking-[0.12em] text-muted">
              THE ENTIRE ORG CHART, SIGNED
            </p>
          </div>
          <div
            aria-hidden="true"
            /* Pinned to the letter's corner on desktop; on a phone that corner
               is where the first line of the letter lives, so it moves above. */
            className="absolute -top-[22px] right-9 w-[170px] rotate-3 rounded-[14px] border-2 border-ink bg-coral p-4 shadow-hard-4 max-[640px]:static max-[640px]:order-first max-[640px]:mb-4 max-[640px]:self-end"
          >
            <p className="m-0 font-display text-[36px] leading-none font-bold">4</p>
            <p className="mt-1.5 mb-0 font-mono text-[10px] tracking-[0.1em]">
              CLIENTS AT A TIME. MAX.
            </p>
          </div>
        </section>

        {/* ── Get started ──────────────────────────────────────────────── */}
        <section
          aria-label="Get started"
          className="mx-auto mt-[88px] max-w-[1240px] px-6 text-center"
        >
          <h2 className="m-0 font-display text-[clamp(32px,5vw,56px)] leading-[1.06] font-bold tracking-[-0.02em]">
            Let&rsquo;s get your content <Squiggle>engine</Squiggle> running.
          </h2>
          <div className="mt-7 flex flex-wrap justify-center gap-3.5">
            <a
              href={CALENDLY}
              className="rounded-full border-2 border-ink bg-coral px-[30px] py-[15px] text-[17px] font-bold text-ink no-underline shadow-hard-4 transition-colors hover:bg-coral-dark hover:text-ink"
            >
              Book a call
            </a>
            <Link
              href={ROUTES.compare}
              className="rounded-full border-2 border-purple bg-transparent px-[30px] py-[15px] text-[17px] font-bold text-purple no-underline transition-colors hover:bg-purple-200 hover:text-purple"
            >
              Not sold? Compare us
            </Link>
          </div>
          <p className="mt-5 text-[16px] text-dim">
            Or see <Link href={ROUTES.work}>the proof</Link> before you believe a word of this page.
          </p>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
