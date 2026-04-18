import type { Metadata } from "next";
import "./globals.css";
import SiteEffects from "@/components/SiteEffects";

export const metadata: Metadata = {
  title: "Digital Renforcy - Agence Web Hybride",
  description:
    "Landing page Digital Renforcy: developpement web intelligent et acquisition client automatisee.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: import("react").ReactNode;
}>) {
  return (
    <html lang="fr">
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
