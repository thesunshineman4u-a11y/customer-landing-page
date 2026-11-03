import { ArrowRight, Check, Download, MessageCircle } from "lucide-react";
import { Header } from "@/components/Header";
import { content, whatsappUrl } from "@/lib/content";

export default function ThankYouPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[var(--background)]">
      <Header />
      <div aria-hidden="true" className="absolute left-1/2 top-28 -z-0 h-[460px] w-[760px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(243,107,43,0.16)_0%,rgba(23,79,130,0.07)_45%,transparent_72%)] blur-2xl" />

      <section className="site-shell relative z-10 flex min-h-[calc(100vh-120px)] items-start justify-center pb-16 pt-10 sm:items-center sm:pb-24 sm:pt-14">
        <div className="fade-up w-full max-w-3xl rounded-[28px] border border-[var(--line)] bg-[var(--paper)] px-5 py-10 text-center shadow-[0_28px_90px_rgba(8,26,51,0.12)] sm:px-12 sm:py-14">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-50 text-[var(--success)] ring-8 ring-green-50/60">
            <Check aria-hidden="true" size={30} strokeWidth={3} />
          </div>
          <h1 className="heading-balance mt-7 text-5xl font-black tracking-[-0.05em] sm:text-6xl">{content.thankYou.title}</h1>
          <p className="copy-balance mx-auto mt-5 max-w-xl text-base leading-8 text-[var(--muted)] sm:text-lg">{content.thankYou.message}</p>

          {content.vimeoUrl ? (
            <div className="mt-8 aspect-video overflow-hidden rounded-2xl bg-slate-100">
              <iframe src={content.vimeoUrl} title={content.hero.guideTitle} className="h-full w-full" allow="fullscreen; picture-in-picture" allowFullScreen />
            </div>
          ) : null}

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            {content.guideUrl ? (
              <a href={content.guideUrl} className="cta-button" target="_blank" rel="noreferrer">
                <Download aria-hidden="true" size={19} />
                {content.thankYou.guideButton}
              </a>
            ) : null}
            <a href={whatsappUrl} target="_blank" rel="noreferrer" className="inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-[14px] bg-[#169c4d] px-6 font-extrabold text-white shadow-[0_14px_32px_rgba(22,156,77,0.25)] transition hover:-translate-y-0.5 hover:bg-[#128241] sm:w-auto">
              <MessageCircle aria-hidden="true" size={20} />
              {content.thankYou.whatsappButton}
              <ArrowRight aria-hidden="true" size={18} />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
