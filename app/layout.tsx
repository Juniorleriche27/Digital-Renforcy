import type { Metadata } from "next";
import { Syne, DM_Sans } from "next/font/google";
import "./globals.css";
import SiteEffects from "@/components/SiteEffects";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["400", "600", "700", "800"],
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Digital Renforcy - Agence Web Hybride",
  description:
    "Landing page Digital Renforcy: developpement web intelligent et acquisition client automatisee.",
  icons: {
    icon: "/logo-dr.svg",
    shortcut: "/logo-dr.svg",
    apple: "/logo-dr.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: import("react").ReactNode;
}>) {
  return (
    <html lang="fr" className={`${syne.variable} ${dmSans.variable}`}>
      <body className="font-sans antialiased">
        <div className="site-ambient" aria-hidden>
          <span className="nebula nebula-a" />
          <span className="nebula nebula-b" />
          <span className="nebula nebula-c" />
          <span className="starfield starfield-a" />
          <span className="starfield starfield-b" />
        </div>
        {children}
        <SiteEffects />
      </body>
    </html>
  );
}
