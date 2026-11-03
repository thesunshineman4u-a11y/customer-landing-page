import { ArrowRight } from "lucide-react";
import { content } from "@/lib/content";

export function Process() {
  return (
    <section className="bg-[var(--paper)] py-20 sm:py-28">
      <div className="site-shell">
        <div className="mx-auto max-w-3xl text-center">
          <p className="section-kicker">Simple from start to finish</p>
          <h2 className="heading-balance mt-4 text-4xl font-black tracking-[-0.045em] text-[var(--text)] sm:text-6xl">{content.process.heading}</h2>
        </div>

        <ol className="relative mt-14 grid gap-5 lg:grid-cols-3">
          <div aria-hidden="true" className="absolute left-[16.5%] right-[16.5%] top-8 hidden h-px bg-[var(--line)] lg:block" />
          {content.process.steps.map((step, index) => (
            <li key={step} className="relative rounded-[24px] border border-[var(--line)] bg-white p-6 shadow-[0_12px_36px_rgba(8,26,51,0.04)] sm:p-8">
              <div className="relative z-10 flex items-center justify-between">
                <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[var(--navy)] text-xl font-black text-white shadow-[0_12px_30px_rgba(8,26,51,0.2)]">
                  {index + 1}
                </span>
                {index < content.process.steps.length - 1 ? (
                  <ArrowRight aria-hidden="true" className="text-[var(--primary)] lg:hidden" size={22} />
                ) : null}
              </div>
              <p className="copy-balance mt-9 text-[17px] font-bold leading-8 text-[var(--text)]">{step}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
