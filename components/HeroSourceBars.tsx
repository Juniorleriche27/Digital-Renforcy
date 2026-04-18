"use client";

import { useEffect, useState } from "react";
import { acquisitionSources } from "@/lib/data";

// Gradients hardcodés pour éviter la suppression par Tailwind (purge des classes dynamiques)
const GRADIENTS = [
  "linear-gradient(to right, #3b82f6, #818cf8)",
  "linear-gradient(to right, #22d3ee, #2dd4bf)",
  "linear-gradient(to right, #34d399, #4ade80)",
];

export default function HeroSourceBars() {
  // false = réduit (0%), true = plein (100%)
  const [phase, setPhase] = useState<boolean[]>(acquisitionSources.map(() => false));

  // Croissance initiale : 0 → pleine largeur
  useEffect(() => {
    const t = setTimeout(() => {
      setPhase(acquisitionSources.map(() => true));
    }, 350);
    return () => clearTimeout(t);
  }, []);

  // Oscillation en boucle
  useEffect(() => {
    const timers = acquisitionSources.map((_, i) =>
      setInterval(() => {
        setPhase((prev) => {
          const next = [...prev];
          next[i] = !next[i];
          return next;
        });
      }, 1800 + i * 350),
    );
    return () => timers.forEach(clearInterval);
  }, []);

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
              style={{
                height: "100%",
                borderRadius: "9999px",
                background: GRADIENTS[i],
                width: phase[i] ? `${source.value}%` : `${Math.round(source.value * 0.48)}%`,
                transition: "width 1.1s cubic-bezier(0.22, 1, 0.36, 1)",
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
