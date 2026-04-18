"use client";

import { useEffect, useRef } from "react";
import { acquisitionSources } from "@/lib/data";

export default function HeroSourceBars() {
  const barsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    acquisitionSources.forEach((source, i) => {
      const bar = barsRef.current[i];
      if (!bar) return;

      const growDelay = 500 + i * 200;
      const oscInterval = 2000 + i * 300;

      // Croissance initiale
      const growTimer = setTimeout(() => {
        bar.style.width = `${source.value}%`;
      }, growDelay);

      // Oscillation : plein → réduit → plein en boucle
      let full = true;
      const oscTimer = setInterval(() => {
        full = !full;
        bar.style.width = full ? `${source.value}%` : `${Math.round(source.value * 0.52)}%`;
      }, oscInterval);

      return () => {
        clearTimeout(growTimer);
        clearInterval(oscTimer);
      };
    });
  }, []);

  return (
    <div className="space-y-3">
      {acquisitionSources.map((source, index) => (
        <div key={source.label}>
          <div className="mb-1 flex items-center justify-between text-sm text-slate-300">
            <span>{source.label}</span>
            <span className="font-semibold text-slate-100">{source.value}%</span>
          </div>
          <div className="h-3 rounded-full bg-[#173451]">
            <div
              ref={(el) => {
                barsRef.current[index] = el;
              }}
              className={`h-full rounded-full bg-gradient-to-r ${source.color}`}
              style={{
                width: "0%",
                transition: "width 1.1s cubic-bezier(0.22, 1, 0.36, 1)",
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
