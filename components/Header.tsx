import Image from "next/image";
import { content } from "@/lib/content";

export function Header() {
  return (
    <header className="relative z-20 border-b border-white/10 bg-[var(--navy)] py-4 sm:py-5">
      <div className="site-shell flex items-center justify-between gap-4">
        <div className="rounded-xl bg-white px-3 py-2 shadow-sm">
          <Image
            src="/logo.png"
            alt={content.brand.logoAlt}
            width={293}
            height={87}
            priority
            className="h-auto w-[155px] object-contain sm:w-[190px]"
          />
        </div>
        <div className="flex items-center gap-2 text-right text-xs font-bold uppercase tracking-[0.16em] text-blue-100 sm:text-sm">
          <span className="h-2 w-2 rounded-full bg-[var(--primary)]" />
          <span>Savings made simple</span>
        </div>
      </div>
    </header>
  );
}
