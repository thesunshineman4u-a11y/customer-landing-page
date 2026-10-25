import type { Metadata } from "next";
import { content } from "@/lib/content";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || content.seo.siteUrl),
  title: content.seo.title,
  description: content.seo.description,
  keywords: [...content.seo.keywords],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_NP",
    url: "/",
    siteName: content.brand.name,
    title: content.seo.title,
    description: content.seo.description,
    images: [{ url: "/logo.png", alt: content.brand.logoAlt }],
  },
  twitter: {
    card: "summary",
    title: content.seo.title,
    description: content.seo.description,
    images: ["/logo.png"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
