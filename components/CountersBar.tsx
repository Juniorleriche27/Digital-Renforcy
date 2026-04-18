"use client";

import { useEffect, useRef, useState } from "react";
import { counters } from "@/lib/data";

function useCountUp(target: number, duration: number, active: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let startTime: number | null = null;
    const tick = (ts: number) => {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [target, duration, active]);
  return count;
}

function CounterItem({
  counter,
  index,
  active,
}: {
  counter: (typeof counters)[0];
  index: number;
  active: boolean;
}) {
  const target = parseInt(counter.value, 10);
  const count = useCountUp(isNaN(target) ? 0 : target, 1600 + index * 200, active);

  return (
    <article className="flex items-center gap-4">
      <div className="grid h-11 w-11 sm:h-14 sm:w-14 place-items-center rounded-2xl border border-[#214a78] bg-[#0f2a4f] text-xl sm:text-2xl">
        {counter.icon === "layers"
          ? "🧱"
          : counter.icon === "briefcase"
          ? "💼"
          : counter.icon === "award"
          ? "🏅"
          : "📈"}
      </div>
      <div>
        <div className="text-2xl font-bold text-slate-100 sm:text-3xl md:text-4xl">
          {isNaN(target) ? counter.value : count}
          <span className="text-[#49a8ff]">{counter.suffix}</span>
        </div>
        <p className="text-xs text-slate-300 sm:text-sm">{counter.label}</p>
      </div>
    </article>
  );
}

export default function CountersBar() {
  const [active, setActive] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="border-b border-[#1f4069] pb-8 pt-6">
      <div className="container-shell">
        <div className="grid grid-cols-2 gap-4 sm:gap-6 md:gap-8 md:grid-cols-4">
          {counters.map((counter, index) => (
            <CounterItem key={counter.label} counter={counter} index={index} active={active} />
          ))}
        </div>
      </div>
    </section>
  );
}
