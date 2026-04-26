"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { contact, nav } from "@/lib/data";
import Logo from "./ui/Logo";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 28);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min((window.scrollY / max) * 100, 100) : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === "/about" && pathname === "/a-propos") return true;
    if (href === "/pricing" && pathname === "/tarifs") return true;
    if (href === "/") return pathname === "/";
    return pathname === href;
  };

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? "border-[#d9e5f5] bg-white shadow-[0_8px_28px_rgba(15,23,42,0.08)]"
          : "border-[#e5eef8] bg-white"
      }`}
    >
      {/* Scroll progress line */}
      <div
        className="absolute bottom-0 left-0 h-[1.5px] transition-[width] duration-100"
        style={{
          width: `${progress}%`,
          background: "linear-gradient(90deg, #4572ff, #00d4ff, #ffc84a)",
          boxShadow: "0 0 8px rgba(69,114,255,0.6)",
        }}
      />

      <div className="container-shell flex h-[76px] items-center justify-between">
        <Link href="/" aria-label="Digital Renforcy - Accueil">
          <Logo dark />
        </Link>

        {/* Desktop nav pill */}
        <nav
          className="hidden items-center gap-0.5 rounded-2xl border border-[#d9e5f5] bg-[#f7fbff] p-1.5 lg:flex"
          style={{ boxShadow: "0 0 0 1px rgba(69,114,255,0.04) inset" }}
        >
          {nav.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`relative rounded-xl px-4 py-2.5 text-[13px] font-semibold tracking-wide transition-all duration-200 font-display ${
                isActive(item.href)
                  ? "bg-[#e8f0ff] text-[#2457d8] shadow-[0_2px_12px_rgba(69,114,255,0.16)]"
                  : "text-[#49627f] hover:bg-[#eef5ff] hover:text-[#173b7a]"
              }`}
            >
              {isActive(item.href) && (
                <span className="absolute bottom-1 left-1/2 h-[2px] w-3 -translate-x-1/2 rounded-full bg-[#4572ff] opacity-80" />
              )}
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop actions */}
        <div className="hidden items-center gap-2.5 md:flex">
          <a
            href={contact.phoneHref}
            className="inline-flex items-center gap-2 rounded-full border border-[#d6e3f4] bg-white px-5 py-2.5 text-[13px] font-semibold text-[#28476d] transition-all hover:border-[#bcd2ef] hover:bg-[#f5f9ff] hover:text-[#173b7a] font-display"
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
              <path d="M6.6 10.8a15.7 15.7 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11.2 11.2 0 0 0 3.5.56 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.3 21 3 13.7 3 4.5a1 1 0 0 1 1-1h3.2a1 1 0 0 1 1 1 11.2 11.2 0 0 0 .56 3.5 1 1 0 0 1-.25 1l-2 1.8Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Appeler
          </a>
          <Link
            href={contact.contactForm}
            className="btn-primary px-6 py-2.5 text-[13px]"
          >
            Démarrer
            <svg width="13" height="13" viewBox="0 0 20 20" fill="none">
              <path d="M4 10h12M10 4l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <button
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
          className="rounded-xl border border-[#d6e3f4] bg-white p-2.5 text-[#355372] lg:hidden"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path
              d={open ? "M6 6l12 12M6 18L18 6" : "M4 7h16M4 12h16M4 17h16"}
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="border-t border-[#e5eef8] bg-white lg:hidden">
          <div className="container-shell space-y-1 py-4">
            {nav.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`flex items-center rounded-xl px-4 py-3 text-sm font-semibold font-display transition-colors ${
                  isActive(item.href)
                    ? "bg-[#e8f0ff] text-[#2457d8]"
                    : "text-[#49627f] hover:bg-[#eef5ff] hover:text-[#173b7a]"
                }`}
                onClick={() => setOpen(false)}
              >
                {isActive(item.href) && (
                  <span className="mr-2.5 h-1.5 w-1.5 rounded-full bg-[#4572ff]" />
                )}
                {item.label}
              </Link>
            ))}
            <div className="grid grid-cols-2 gap-2 pt-3">
              <a
                href={contact.phoneHref}
                className="rounded-xl border border-[#d6e3f4] px-4 py-2.5 text-center text-sm font-semibold text-[#28476d] font-display"
              >
                Appeler
              </a>
              <Link
                href={contact.contactForm}
                className="rounded-xl bg-gradient-to-r from-[#1e48ff] to-[#3a68ff] px-4 py-2.5 text-center text-sm font-semibold text-white font-display"
                style={{ boxShadow: "0 8px 24px -8px rgba(30,72,255,0.7)" }}
                onClick={() => setOpen(false)}
              >
                Démarrer
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
