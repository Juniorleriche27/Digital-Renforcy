"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export default function SiteEffects() {
  const ringRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  // Scroll reveal + card stagger
  useEffect(() => {
    const targets = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    if (!targets.length) return;

    targets.forEach((target) => {
      Array.from(target.querySelectorAll<HTMLElement>("article, .dark-card")).forEach((card) =>
        card.classList.add("card-anim")
      );
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          if (el.dataset.delay) el.style.transitionDelay = el.dataset.delay;
          el.classList.add("is-visible");
          observer.unobserve(el);
          Array.from(el.querySelectorAll<HTMLElement>(".card-anim")).forEach((card, j) => {
            setTimeout(() => card.classList.add("anim-go"), j * 90 + 120);
          });
        });
      },
      { threshold: 0.06, rootMargin: "0px 0px -4% 0px" }
    );

    targets.forEach((t) => observer.observe(t));
    return () => observer.disconnect();
  }, [pathname]);

  // Float bob on cards
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>(".dark-card, article"));
    els.forEach((el, i) => {
      el.classList.add("float-el");
      el.style.setProperty("--float-delay", `-${(i % 5) * 0.85}s`);
      el.style.setProperty("--float-dur", `${3.8 + (i % 4) * 0.55}s`);
    });
  }, [pathname]);

  // Card spotlight — cursor glow follows inside card
  useEffect(() => {
    const cards = Array.from(document.querySelectorAll<HTMLElement>(".dark-card"));

    const onMove = (e: MouseEvent) => {
      const card = e.currentTarget as HTMLElement;
      const rect = card.getBoundingClientRect();
      card.style.setProperty("--spotlight-x", `${e.clientX - rect.left}px`);
      card.style.setProperty("--spotlight-y", `${e.clientY - rect.top}px`);
      card.style.setProperty("--spotlight-op", "1");
    };
    const onLeave = (e: MouseEvent) => {
      (e.currentTarget as HTMLElement).style.setProperty("--spotlight-op", "0");
    };

    cards.forEach((c) => {
      c.addEventListener("mousemove", onMove);
      c.addEventListener("mouseleave", onLeave);
    });

    return () => {
      cards.forEach((c) => {
        c.removeEventListener("mousemove", onMove);
        c.removeEventListener("mouseleave", onLeave);
      });
    };
  }, [pathname]);

  // Magnetic buttons — subtle pull toward cursor
  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const btns = Array.from(
      document.querySelectorAll<HTMLElement>(".btn-primary, .btn-outline, .btn-gold")
    );

    const onEnter = (e: MouseEvent) => {
      (e.currentTarget as HTMLElement).style.transition = "translate 0.1s ease, filter 0.25s ease, transform 0.25s ease, box-shadow 0.25s ease";
    };
    const onMove = (e: MouseEvent) => {
      const btn = e.currentTarget as HTMLElement;
      const rect = btn.getBoundingClientRect();
      const dx = (e.clientX - (rect.left + rect.width / 2)) * 0.28;
      const dy = (e.clientY - (rect.top + rect.height / 2)) * 0.28;
      btn.style.translate = `${dx}px ${dy}px`;
    };
    const onLeave = (e: MouseEvent) => {
      const btn = e.currentTarget as HTMLElement;
      btn.style.transition = "translate 0.55s cubic-bezier(0.23, 1, 0.32, 1), filter 0.25s ease, transform 0.25s ease, box-shadow 0.25s ease";
      btn.style.translate = "";
    };

    btns.forEach((b) => {
      b.addEventListener("mouseenter", onEnter);
      b.addEventListener("mousemove", onMove);
      b.addEventListener("mouseleave", onLeave);
    });

    return () => {
      btns.forEach((b) => {
        b.removeEventListener("mouseenter", onEnter);
        b.removeEventListener("mousemove", onMove);
        b.removeEventListener("mouseleave", onLeave);
      });
    };
  }, [pathname]);

  // Custom cursor — smooth ring + dot
  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;

    document.body.classList.add("cursor-enhanced");

    let px = window.innerWidth / 2;
    let py = window.innerHeight / 2;
    let rx = px;
    let ry = py;
    let raf = 0;

    const render = () => {
      rx += (px - rx) * 0.15;
      ry += (py - ry) * 0.15;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${rx}px, ${ry}px, 0)`;
      }
      raf = requestAnimationFrame(render);
    };

    const onMove = (e: MouseEvent) => {
      px = e.clientX;
      py = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${px}px, ${py}px, 0)`;
      }
      document.documentElement.style.setProperty("--mouse-x", `${px}px`);
      document.documentElement.style.setProperty("--mouse-y", `${py}px`);

      // Expand ring over interactive elements
      const target = e.target as HTMLElement;
      const isInteractive = target.closest("a, button, [role=button]");
      if (ringRef.current) {
        ringRef.current.style.width = isInteractive ? "52px" : "36px";
        ringRef.current.style.height = isInteractive ? "52px" : "36px";
        ringRef.current.style.marginLeft = isInteractive ? "-26px" : "-18px";
        ringRef.current.style.marginTop = isInteractive ? "-26px" : "-18px";
        ringRef.current.style.borderColor = isInteractive
          ? "rgba(0, 212, 255, 0.9)"
          : "rgba(0, 200, 255, 0.65)";
      }
    };

    const onDown = () => document.body.classList.add("cursor-clicking");
    const onUp = () => document.body.classList.remove("cursor-clicking");

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    raf = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      cancelAnimationFrame(raf);
      document.body.classList.remove("cursor-enhanced", "cursor-clicking");
      document.documentElement.style.removeProperty("--mouse-x");
      document.documentElement.style.removeProperty("--mouse-y");
    };
  }, []);

  return (
    <>
      <div aria-hidden className="cursor-ring" ref={ringRef} style={{ transition: "width 0.3s ease, height 0.3s ease, margin 0.3s ease, border-color 0.3s ease" }} />
      <div aria-hidden className="cursor-dot" ref={dotRef} />
    </>
  );
}
