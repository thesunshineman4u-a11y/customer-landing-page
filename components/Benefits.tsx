import { Check } from "lucide-react";
import { content } from "@/lib/content";

export function Benefits() {
  return (
    <section className="py-20 sm:py-28">
      <div className="site-shell">
        <div className="mx-auto max-w-3xl text-center">
          <p className="section-kicker">{content.hero.guideTitle}</p>
          <h2 className="heading-balance mt-3 text-4xl font-black tracking-[-0.04em] sm:text-5xl">{content.benefits.heading}</h2>
        </div>

        <div className="mx-auto mt-12 grid max-w-5xl gap-4 md:grid-cols-2">
          {content.benefits.items.map((item, index) => (
            <article
              key={item}
              className={`group flex min-h-32 items-start gap-4 rounded-3xl border border-[var(--line)] bg-white p-6 shadow-[0_12px_38px_rgba(15,23,42,0.05)] transition hover:-translate-y-1 hover:border-orange-200 hover:shadow-[0_18px_44px_rgba(15,23,42,0.08)] ${index === content.benefits.items.length - 1 ? "md:col-span-2 md:mx-auto md:w-[calc(50%-8px)]" : ""}`}
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-orange-50 text-[var(--primary)] transition group-hover:bg-[var(--primary)] group-hover:text-white">
                <Check aria-hidden="true" size={21} strokeWidth={3} />
              </span>
              <p className="copy-balance pt-1 text-[17px] font-bold leading-7 text-[var(--text)]">{item}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
