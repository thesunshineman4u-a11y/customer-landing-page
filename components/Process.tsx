import { content } from "@/lib/content";

export function Process() {
  return (
    <section className="py-20 sm:py-28">
      <div className="site-shell rounded-[32px] bg-[var(--secondary)] px-5 py-14 text-white shadow-[0_30px_80px_rgba(11,60,140,0.18)] sm:px-10 sm:py-20 lg:px-16">
        <div className="text-center">
          <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-orange-300">{content.hero.guideTitle}</p>
          <h2 className="heading-balance mt-3 text-4xl font-black tracking-[-0.04em] sm:text-5xl">{content.process.heading}</h2>
        </div>

        <ol className="mt-12 grid gap-4 lg:grid-cols-3">
          {content.process.steps.map((step, index) => (
            <li key={step} className="relative rounded-3xl border border-white/15 bg-white/8 p-6 backdrop-blur-sm sm:p-7">
              <span className="mb-8 flex h-11 w-11 items-center justify-center rounded-full bg-[var(--primary)] text-lg font-black text-white shadow-lg shadow-slate-950/15">
                {index + 1}
              </span>
              <p className="copy-balance text-[17px] font-semibold leading-7 text-blue-50">{step}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
