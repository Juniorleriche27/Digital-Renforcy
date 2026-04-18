"use client";

import Image from "next/image";
import { useState } from "react";

export default function Logo({ className = "" }: { className?: string }) {
  const [hasError, setHasError] = useState(false);

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="relative h-11 w-11 overflow-hidden rounded-sm border border-[#2d5f94] bg-[#0f2f5f]">
        {hasError ? (
          <div className="grid h-full w-full place-items-center bg-gradient-to-br from-brand-600 to-cyan-500 text-sm font-bold text-white">
            DR
          </div>
        ) : (
          <Image
            src="/logo-dr.svg"
            alt="Logo Digital Renforcy"
            fill
            sizes="44px"
            className="object-cover"
            onError={() => setHasError(true)}
            priority
          />
        )}
      </div>
      <span className="text-2xl font-bold tracking-tight text-slate-100 md:text-[2rem]">
        Digital Renforcy
      </span>
    </div>
  );
}
