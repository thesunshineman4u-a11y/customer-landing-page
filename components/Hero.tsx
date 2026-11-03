import {
  ArrowDown,
  ArrowUpRight,
  BadgePercent,
  Landmark,
  PiggyBank,
  ShieldCheck,
} from "lucide-react";
import { content } from "@/lib/content";

export function Hero() {
  return (
    <section className="navy-grid relative isolate overflow-hidden bg-[var(--navy)] pb-20 pt-12 text-white sm:pb-28 sm:pt-20">
      <div aria-hidden="true" className="absolute -right-32 top-10 -z-10 h-[540px] w-[540px] rounded-full bg-blue-500/10 blur-[100px]" />
      <div aria-hidden="true" className="absolute -left-20 bottom-0 -z-10 h-80 w-80 rounded-full bg-orange-500/10 blur-[100px]" />

      <div className="site-shell grid items-center gap-14 lg:grid-cols-[1.08fr_0.92fr] lg:gap-20">
        <div className="fade-up">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-4 py-2 text-xs font-extrabold uppercase tracking-[0.18em] text-blue-100">
            <span className="h-2 w-2 rounded-full bg-[var(--primary)]" />
            Money explained without the jargon
          </p>
          <h1 className="heading-balance mt-7 max-w-3xl text-[clamp(3rem,7vw,5.6rem)] font-black leading-[0.96] tracking-[-0.06em] text-[var(--paper)]">
            {content.hero.headlineBefore}
            <span className="text-[var(--primary)]">{content.hero.headlineHighlight}</span>
            {content.hero.headlineAfter}
          </h1>
          <p className="copy-balance mt-7 max-w-2xl text-lg font-bold leading-8 text-blue-100 sm:text-xl">
            {content.hero.subheadline}
          </p>
          <p className="copy-balance mt-4 max-w-xl text-[15px] leading-7 text-slate-300 sm:text-base">
            {content.hero.description}
          </p>

          <div className="mt-9 flex flex-col items-start gap-5 sm:flex-row sm:items-center">
            <a href="#guide-form" className="cta-button w-full sm:w-auto">
              {content.hero.cta}
              <ArrowDown aria-hidden="true" size={18} strokeWidth={2.5} />
            </a>
            <div className="flex items-center gap-3 text-sm font-semibold text-slate-300">
              <ShieldCheck aria-hidden="true" size={19} className="text-orange-300" />
              Free. Practical. Made for savers.
            </div>
          </div>
        </div>

        <div className="float-soft relative mx-auto w-full max-w-[500px] lg:mx-0">
          <div aria-hidden="true" className="absolute -inset-8 rounded-full bg-[radial-gradient(circle,rgba(243,107,43,0.16),transparent_68%)] blur-xl" />
          <div className="relative rotate-[1.5deg] rounded-[28px] border border-white/10 bg-[#102948] p-4 shadow-[0_38px_100px_rgba(0,0,0,0.35)] sm:p-5">
            <div className="rounded-[22px] bg-[var(--paper)] p-6 text-[var(--text)] sm:p-8">
              <div className="flex items-start justify-between gap-5">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--navy)] text-white">
                  <Landmark aria-hidden="true" size={24} />
                </div>
                <span className="rounded-full border border-orange-200 bg-orange-50 px-3 py-1.5 text-[11px] font-black uppercase tracking-[0.16em] text-[var(--primary-dark)]">
                  {content.hero.guideLabel}
                </span>
              </div>
              <p className="mt-12 text-xs font-black uppercase tracking-[0.18em] text-[var(--secondary)]">{content.brand.name}</p>
              <h2 className="mt-2 text-5xl font-black tracking-[-0.055em] sm:text-6xl">{content.hero.guideTitle}</h2>
              <div className="mt-7 grid grid-cols-3 gap-2 border-t border-[var(--line)] pt-5">
                <GuideStat icon={<PiggyBank size={18} />} label="Savings" />
                <GuideStat icon={<BadgePercent size={18} />} label="Interest" />
                <GuideStat icon={<ShieldCheck size={18} />} label="Choices" />
              </div>
            </div>

            <div className="absolute -bottom-8 -left-4 flex items-center gap-3 rounded-2xl border border-white/15 bg-[var(--primary)] px-4 py-3 text-white shadow-xl sm:-left-9">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/15">
                <ArrowUpRight aria-hidden="true" size={20} />
              </div>
              <div>
                <p className="text-[10px] font-extrabold uppercase tracking-[0.15em] text-orange-100">Read time</p>
                <p className="text-sm font-black">{content.hero.guideTime}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function GuideStat({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex flex-col gap-2 text-[var(--secondary)]">
      {icon}
      <span className="text-[11px] font-extrabold uppercase tracking-[0.11em]">{label}</span>
    </div>
  );
}
