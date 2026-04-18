"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { contact, nav } from "@/lib/data";
import Logo from "./ui/Logo";

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/about" && pathname === "/a-propos") {
      return true;
    }
    if (href === "/pricing" && pathname === "/tarifs") {
      return true;
    }
    if (href === "/") {
      return pathname === "/";
    }
    return pathname === href;
  };

  return (
    <header className="sticky top-0 z-50 border-b border-[#1d3f68] bg-[#071831]/95 backdrop-blur-md">
      <div className="container-shell flex h-[76px] items-center justify-between">
        <Link href="/" aria-label="Digital Renforcy - Accueil">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-1 rounded-xl border border-[#1e3f69] bg-[#0c2144]/80 p-1 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`rounded-lg px-4 py-3 text-sm font-semibold ${
                isActive(item.href)
                  ? "bg-[#17345f] text-[#72a8ff]"
                  : "text-slate-300 hover:bg-[#122a4c] hover:text-slate-100"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <button className="grid h-11 w-11 place-items-center rounded-xl border border-[#244a79] bg-[#122946] text-slate-300">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z"
                stroke="currentColor"
                strokeWidth="1.8"
              />
              <path
                d="M19.4 15a1 1 0 0 0 .2 1.1l.1.1a1.2 1.2 0 0 1-.8 2.1h-.1a1 1 0 0 0-1 .7l-.1.2a1.2 1.2 0 0 1-2.3-.1 1 1 0 0 0-.9-.7h-.2a1.2 1.2 0 0 1-1.1-.8 1 1 0 0 0-1-.6H12a1 1 0 0 0-1 .6 1.2 1.2 0 0 1-1.1.8h-.2a1 1 0 0 0-.9.7 1.2 1.2 0 0 1-2.3.1l-.1-.2a1 1 0 0 0-1-.7h-.1a1.2 1.2 0 0 1-.8-2.1l.1-.1a1 1 0 0 0 .2-1.1 1.2 1.2 0 0 1 .4-1.4 1 1 0 0 0 .4-1.1v-.2a1.2 1.2 0 0 1 1.2-1.2h.2a1 1 0 0 0 1-.6l.1-.2a1.2 1.2 0 0 1 2.2-.2 1 1 0 0 0 1 .6H12a1 1 0 0 0 1-.6 1.2 1.2 0 0 1 2.2.2l.1.2a1 1 0 0 0 1 .6h.2a1.2 1.2 0 0 1 1.2 1.2v.2a1 1 0 0 0 .4 1.1c.5.3.7 1 .4 1.5Z"
                stroke="currentColor"
                strokeWidth="1.3"
              />
            </svg>
          </button>

          <a
            href={contact.phoneHref}
            className="inline-flex items-center gap-2 rounded-full border border-[#224b7a] bg-[#102645] px-7 py-3 text-sm font-semibold text-slate-100 hover:bg-[#17345f]"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path
                d="M6.6 10.8a15.7 15.7 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11.2 11.2 0 0 0 3.5.56 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.3 21 3 13.7 3 4.5a1 1 0 0 1 1-1h3.2a1 1 0 0 1 1 1 11.2 11.2 0 0 0 .56 3.5 1 1 0 0 1-.25 1l-2 1.8Z"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Appeler
          </a>
          <Link href={contact.contactForm} className="btn-primary px-8 py-3">
            Demarrer
          </Link>
        </div>

        <button
          aria-label="Menu"
          onClick={() => setOpen((value) => !value)}
          className="rounded-lg border border-[#224b7a] p-2 text-slate-200 lg:hidden"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <path
              d={open ? "M6 6l12 12M6 18L18 6" : "M4 7h16M4 12h16M4 17h16"}
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>

      {open ? (
        <div className="border-t border-[#1d3f68] bg-[#081b37] lg:hidden">
          <div className="container-shell space-y-1 py-4">
            {nav.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`block rounded-lg px-3 py-3 text-sm font-semibold ${
                  isActive(item.href)
                    ? "bg-[#17345f] text-[#72a8ff]"
                    : "text-slate-200 hover:bg-[#17345f]"
                }`}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="grid grid-cols-2 gap-2 pt-3">
              <a
                href={contact.phoneHref}
                className="rounded-lg border border-[#224b7a] px-4 py-2 text-center text-sm font-semibold text-slate-100"
              >
                Appeler
              </a>
              <Link
                href={contact.contactForm}
                className="rounded-lg bg-[#315cff] px-4 py-2 text-center text-sm font-semibold text-white"
                onClick={() => setOpen(false)}
              >
                Demarrer
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
