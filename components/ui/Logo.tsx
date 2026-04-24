"use client";

import Image from "next/image";
import { useState } from "react";

export default function Logo({ className = "" }: { className?: string }) {
  const [hasError, setHasError] = useState(false);

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="relative h-12 w-12 flex-shrink-0 overflow-hidden rounded-xl">
        {hasError ? (
          <div
            className="grid h-full w-full place-items-center text-sm font-bold text-white font-display"
            style={{ background: "linear-gradient(140deg, #1e48ff, #00a8d8)" }}
          >
            DR
          </div>
        ) : (
          <Image
            src="/logo-dr.png"
            alt="Logo Digital Renforcy"
            fill
            sizes="48px"
            className="object-contain"
            onError={() => setHasError(true)}
            priority
          />
        )}
      </div>
      <span
        className="font-display text-xl font-bold tracking-[-0.02em] text-slate-100 md:text-[1.4rem]"
        style={{ letterSpacing: "-0.02em" }}
      >
        Digital{" "}
        <span
          style={{
            background: "linear-gradient(90deg, #4572ff, #00d4ff)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Renforcy
        </span>
      </span>
    </div>
  );
}
