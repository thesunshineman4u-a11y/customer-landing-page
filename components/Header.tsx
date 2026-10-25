import Image from "next/image";
import { content } from "@/lib/content";

export function Header() {
  return (
    <header className="relative z-20 bg-white/90 py-5 backdrop-blur-sm sm:py-6">
      <div className="site-shell flex justify-center">
        <Image
          src="/logo.png"
          alt={content.brand.logoAlt}
          width={293}
          height={87}
          priority
          className="h-auto w-[190px] object-contain sm:w-[220px]"
        />
      </div>
    </header>
  );
}
