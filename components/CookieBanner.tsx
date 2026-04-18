"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = typeof window !== "undefined" ? localStorage.getItem("dr-cookie") : null;
    if (!stored) {
      setVisible(true);
    }
  }, []);

  const close = (choice: "accept" | "refuse") => {
    try {
      localStorage.setItem("dr-cookie", choice);
    } catch {
      // Ignore localStorage write errors.
    }
    setVisible(false);
  };

  if (!visible) {
    return null;
  }

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 md:left-6 md:right-auto md:max-w-md">
      <div className="rounded-2xl border border-[#2f5f91] bg-[#0f2747]/95 p-4 shadow-[0_20px_50px_-30px_rgba(30,97,255,0.9)] backdrop-blur md:p-5">
        <div className="flex items-start gap-3">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-[#1f436f] text-sm text-slate-100">
            🍪
          </span>
          <div className="flex-1">
            <div className="text-sm font-semibold text-slate-100">Cookies</div>
            <p className="mt-1 text-xs leading-relaxed text-slate-300">
              Nous utilisons des cookies pour améliorer l'expérience et analyser le trafic.{" "}
              <Link href="/privacy" className="text-cyan-300 hover:underline">
                En savoir plus
              </Link>
            </p>
            <div className="mt-3 flex gap-2">
              <button
                onClick={() => close("refuse")}
                className="rounded-lg border border-[#3f6897] bg-[#17365d] px-3 py-1.5 text-xs font-semibold text-slate-200 hover:bg-[#1c416f]"
              >
                Refuser
              </button>
              <button
                onClick={() => close("accept")}
                className="rounded-lg bg-gradient-to-r from-[#2e55ff] to-[#3f70ff] px-3 py-1.5 text-xs font-semibold text-white hover:brightness-110"
              >
                Accepter
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
