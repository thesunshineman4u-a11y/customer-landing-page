import { ArrowDown, Landmark } from "lucide-react";
import { content } from "@/lib/content";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden pb-20 pt-9 sm:pb-28 sm:pt-16">
      <div aria-hidden="true" className="absolute left-1/2 top-8 -z-10 h-[460px] w-[760px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(242,107,29,0.14)_0%,rgba(11,60,140,0.06)_42%,transparent_70%)] blur-2xl" />
      <div aria-hidden="true" className="absolute -left-24 top-48 -z-10 h-48 w-48 rounded-full bg-orange-100/70 blur-3xl" />
      <div aria-hidden="true" className="absolute -right-24 top-24 -z-10 h-56 w-56 rounded-full bg-blue-100/70 blur-3xl" />

      <div className="site-shell text-center">
        <div className="fade-up mx-auto max-w-5xl">
          <h1 className="heading-balance text-[clamp(2.45rem,7vw,5.3rem)] font-black leading-[0.98] tracking-[-0.055em] text-[var(--text)]">
            {content.hero.headlineBefore}
            <span className="text-[var(--primary)]">{content.hero.headlineHighlight}</span>
            {content.hero.headlineAfter}
          </h1>
          <p className="copy-balance mx-auto mt-7 max-w-2xl text-lg font-semibold leading-8 text-[var(--secondary)] sm:text-xl">
            {content.hero.subheadline}
          </p>
          <p className="copy-balance mx-auto mt-4 max-w-2xl text-[15px] leading-7 text-[var(--muted)] sm:text-base">
            {content.hero.description}
          </p>
          <a href="#guide-form" className="cta-button mt-8 w-full sm:w-auto">
            {content.hero.cta}
            <ArrowDown aria-hidden="true" size={18} strokeWidth={2.5} />
          </a>
        </div>

        <div className="float-soft relative mx-auto mt-14 max-w-[620px] sm:mt-20">
          <div aria-hidden="true" className="absolute inset-x-14 bottom-0 h-12 rounded-full bg-slate-900/10 blur-2xl" />
          <div className="relative mx-auto grid min-h-[260px] max-w-[480px] overflow-hidden rounded-[28px] border border-white/80 bg-white p-6 text-left shadow-[0_28px_80px_rgba(15,23,42,0.13)] sm:min-h-[300px] sm:p-9">
            <div className="absolute inset-y-0 left-0 w-2 bg-[var(--primary)]" />
            <div className="absolute right-0 top-0 h-40 w-40 rounded-bl-full bg-[linear-gradient(135deg,rgba(242,107,29,0.1),rgba(11,60,140,0.08))]" />
            <div className="relative flex items-start justify-between gap-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[var(--secondary)] text-white shadow-lg shadow-blue-900/15">
                <Landmark aria-hidden="true" size={24} />
              </div>
              <span className="rounded-full bg-orange-50 px-3 py-1.5 text-xs font-extrabold uppercase tracking-[0.12em] text-[var(--primary-dark)]">
                {content.hero.guideLabel}
              </span>
            </div>
            <div className="relative self-end">
              <div className="mb-5 h-px w-full bg-gradient-to-r from-[var(--secondary)]/30 to-transparent" />
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[var(--secondary)]">{content.brand.name}</p>
              <h2 className="mt-2 text-4xl font-black tracking-[-0.04em] text-[var(--text)] sm:text-5xl">{content.hero.guideTitle}</h2>
              <p className="mt-3 text-sm font-semibold text-[var(--muted)]">{content.hero.guideTime}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
