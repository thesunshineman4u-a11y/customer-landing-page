import { ArrowUpRight, Check } from "lucide-react";
import { content } from "@/lib/content";

export function Benefits() {
  return (
    <section className="relative bg-[var(--background)] py-20 sm:py-28">
      <div className="site-shell">
        <div className="grid items-end gap-6 border-b border-[var(--line)] pb-10 md:grid-cols-[1fr_0.8fr]">
          <div>
            <p className="section-kicker">What you will take away</p>
            <h2 className="heading-balance mt-4 max-w-2xl text-4xl font-black tracking-[-0.045em] text-[var(--text)] sm:text-6xl">
              {content.benefits.heading}
            </h2>
          </div>
          <p className="copy-balance max-w-xl text-base leading-8 text-[var(--muted)] md:justify-self-end">
            A short, practical introduction to the decisions that shape your savings—so your next conversation with a financial institution feels clearer.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-6">
          {content.benefits.items.map((item, index) => (
            <article
              key={item}
              className={`group relative min-h-[220px] overflow-hidden rounded-[24px] border border-[var(--line)] bg-[var(--paper)] p-6 transition duration-300 hover:-translate-y-1 hover:border-orange-300 hover:shadow-[0_22px_50px_rgba(8,26,51,0.09)] ${
                index < 2 ? "lg:col-span-3" : "lg:col-span-2"
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <span className="text-sm font-black tracking-[0.15em] text-[var(--primary)]">0{index + 1}</span>
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--line)] text-[var(--secondary)] transition group-hover:border-[var(--primary)] group-hover:bg-[var(--primary)] group-hover:text-white">
                  {index < 2 ? <ArrowUpRight aria-hidden="true" size={17} /> : <Check aria-hidden="true" size={17} strokeWidth={3} />}
                </span>
              </div>
              <p className="copy-balance mt-14 max-w-md text-xl font-extrabold leading-8 tracking-[-0.02em] text-[var(--text)]">{item}</p>
              <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-[var(--primary)] transition duration-300 group-hover:scale-x-100" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
