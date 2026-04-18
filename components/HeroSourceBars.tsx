"use client";

import { useEffect, useState } from "react";
import { acquisitionSources } from "@/lib/data";

export default function HeroSourceBars() {
  const [widths, setWidths] = useState<number[]>(acquisitionSources.map(() => 0));
  const [phase, setPhase] = useState<boolean[]>(acquisitionSources.map(() => true));

  // Croissance initiale
  useEffect(() => {
    const t = setTimeout(() => {
      setWidths(acquisitionSources.map((s) => s.value));
    }, 400);
    return () => clearTimeout(t);
  }, []);

  // Oscillation en boucle par barre
  useEffect(() => {
    const timers = acquisitionSources.map((_, i) =>
      setInterval(() => {
        setPhase((prev) => {
          const next = [...prev];
          next[i] = !next[i];
          return next;
        });
      }, 1800 + i * 400),
    );
    return () => timers.forEach(clearInterval);
  }, []);

  const getWidth = (i: number) => {
    const full = acquisitionSources[i].value;
    return phase[i] ? full : Math.round(full * 0.5);
  };

  return (
    <div className="space-y-3">
      {acquisitionSources.map((source, i) => (
        <div key={source.label}>
          <div className="mb-1 flex items-center justify-between text-sm text-slate-300">
            <span>{source.label}</span>
            <span className="font-semibold text-slate-100">{source.value}%</span>
          </div>
          <div className="h-3 overflow-hidden rounded-full bg-[#173451]">
            <div
              className={`h-full rounded-full bg-gradient-to-r ${source.color}`}
              style={{
                width: `${getWidth(i)}%`,
                transition: "width 1.1s cubic-bezier(0.22, 1, 0.36, 1)",
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
