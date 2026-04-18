"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export default function SiteEffects() {
  const ringRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const targets = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    if (!targets.length) {
      return;
    }

    // Pre-mark child cards so they start hidden and stagger in on reveal
    targets.forEach((target) => {
      const childCards = Array.from(target.querySelectorAll<HTMLElement>("article, .dark-card"));
      childCards.forEach((card) => card.classList.add("card-anim"));
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }
          const element = entry.target as HTMLElement;
          const delay = element.dataset.delay;
          if (delay) {
            element.style.transitionDelay = delay;
          }
          element.classList.add("is-visible");
          observer.unobserve(element);

          // Stagger each card inside the revealed section
          const childCards = Array.from(element.querySelectorAll<HTMLElement>(".card-anim"));
          childCards.forEach((card, j) => {
            setTimeout(() => card.classList.add("anim-go"), j * 90 + 120);
          });
        });
      },
      {
        threshold: 0.06,
        rootMargin: "0px 0px -4% 0px",
      },
    );

    targets.forEach((target) => observer.observe(target));

    return () => observer.disconnect();
  }, [pathname]);

  // Assign float animation + staggered delays to all card-like elements
  useEffect(() => {
    const els = Array.from(
      document.querySelectorAll<HTMLElement>(".dark-card, article"),
    );
    els.forEach((el, i) => {
      // Add float-el so article elements (without dark-card) also animate
      el.classList.add("float-el");
      // Negative delay = different starting phase immediately, no waiting
      el.style.setProperty("--float-delay", `-${(i % 5) * 0.85}s`);
      el.style.setProperty("--float-dur", `${3.8 + (i % 4) * 0.55}s`);
    });
  }, [pathname]);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) {
      return;
    }

    document.body.classList.add("cursor-enhanced");

    let pointerX = window.innerWidth / 2;
    let pointerY = window.innerHeight / 2;
    let ringX = pointerX;
    let ringY = pointerY;
    let raf = 0;

    const render = () => {
      ringX += (pointerX - ringX) * 0.16;
      ringY += (pointerY - ringY) * 0.16;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      }

      raf = window.requestAnimationFrame(render);
    };

    const handleMove = (event: MouseEvent) => {
      pointerX = event.clientX;
      pointerY = event.clientY;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${pointerX}px, ${pointerY}px, 0)`;
      }

      document.documentElement.style.setProperty("--mouse-x", `${pointerX}px`);
      document.documentElement.style.setProperty("--mouse-y", `${pointerY}px`);
    };

    const handleDown = () => {
      document.body.classList.add("cursor-clicking");
    };

    const handleUp = () => {
      document.body.classList.remove("cursor-clicking");
    };

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mousedown", handleDown);
    window.addEventListener("mouseup", handleUp);
    raf = window.requestAnimationFrame(render);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mousedown", handleDown);
      window.removeEventListener("mouseup", handleUp);
      window.cancelAnimationFrame(raf);
      document.body.classList.remove("cursor-enhanced", "cursor-clicking");
      document.documentElement.style.removeProperty("--mouse-x");
      document.documentElement.style.removeProperty("--mouse-y");
    };
  }, []);

  return (
    <>
      <div aria-hidden className="cursor-ring" ref={ringRef} />
      <div aria-hidden className="cursor-dot" ref={dotRef} />
    </>
  );
}
