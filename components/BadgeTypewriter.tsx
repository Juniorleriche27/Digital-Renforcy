"use client";

import { useEffect, useState } from "react";

const TEXT = "Agence web hybride en France";
const TYPE_INTERVAL_MS = 68;
const DELETE_INTERVAL_MS = 34;
const HOLD_FULL_MS = 1800;
const HOLD_EMPTY_MS = 420;

export default function BadgeTypewriter() {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let frameTimer: ReturnType<typeof setTimeout> | undefined;
    let holdTimer: ReturnType<typeof setTimeout> | undefined;
    let cancelled = false;

    const run = (index: number, direction: "typing" | "deleting") => {
      if (cancelled) return;

      if (direction === "typing") {
        const next = TEXT.slice(0, index + 1);
        setDisplayed(next);

        if (next.length === TEXT.length) {
          holdTimer = setTimeout(() => run(TEXT.length - 1, "deleting"), HOLD_FULL_MS);
          return;
        }

        frameTimer = setTimeout(() => run(index + 1, "typing"), TYPE_INTERVAL_MS);
        return;
      }

      const next = TEXT.slice(0, Math.max(index, 0));
      setDisplayed(next);

      if (next.length === 0) {
        holdTimer = setTimeout(() => run(0, "typing"), HOLD_EMPTY_MS);
        return;
      }

      frameTimer = setTimeout(() => run(index - 1, "deleting"), DELETE_INTERVAL_MS);
    };

    holdTimer = setTimeout(() => run(0, "typing"), 260);

    return () => {
      cancelled = true;
      if (frameTimer) clearTimeout(frameTimer);
      if (holdTimer) clearTimeout(holdTimer);
    };
  }, []);

  return (
    <span className="relative inline-grid min-w-[28ch] items-center">
      <span aria-hidden className="invisible whitespace-nowrap">
        {TEXT}
      </span>
      <span className="absolute inset-0 flex items-center whitespace-nowrap">
        <span>{displayed}</span>
        <span className="badge-typewriter-caret ml-0.5 inline-block h-[0.9em] w-[2px] rounded-full bg-[#7edcff]" />
      </span>
    </span>
  );
}
