import Link from "next/link";
import {
  chartMonths,
  chartPoints,
  contact,
  dashboardKpis,
  heroTags,
} from "@/lib/data";
import HeroSourceBars from "@/components/HeroSourceBars";
import BadgeTypewriter from "@/components/BadgeTypewriter";

export default function Hero() {
  return (
    <section className="dark-section pb-12 pt-16 md:pb-16 md:pt-24">
      <div className="container-shell grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          {/* Badge */}
          <span className="badge-chip">
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            <BadgeTypewriter />
          </span>

          {/* Heading — Syne font for max visual impact */}
          <h1 className="mt-7 max-w-3xl font-display text-4xl font-bold leading-[1.04] tracking-[-0.02em] text-slate-100 sm:text-5xl md:text-6xl lg:text-[4.25rem]">
            <span className="hero-line" style={{ "--line-delay": "0.35s" } as React.CSSProperties}>
              Innovation Digital
            </span>
            <span className="hero-line mt-0.5" style={{ "--line-delay": "0.52s" } as React.CSSProperties}>
              &amp; systèmes
            </span>
            <span className="hero-line mt-0.5" style={{ "--line-delay": "0.68s" } as React.CSSProperties}>
              <span className="title-gradient">d&apos;acquisition clients</span>
            </span>
          </h1>

          <p
            className="hero-fade-up mt-6 max-w-xl text-base leading-relaxed text-[#8aa5c8] sm:text-lg"
            style={{ "--fade-delay": "0.95s" } as React.CSSProperties}
          >
            Agence web hybride basée en France — nous combinons <strong className="font-semibold text-slate-200">développement web intelligent</strong> et systèmes d&apos;acquisition de clients automatisés
            pour propulser votre croissance.{" "}<em className="not-italic text-slate-300">Performance mesurable, résultats concrets.</em>
          </p>

          {/* CTAs */}
          <div
            className="hero-fade-up mt-8 flex flex-wrap gap-3"
            style={{ "--fade-delay": "1.12s" } as React.CSSProperties}
          >
            <Link href={contact.contactForm} className="btn-primary">
              Démarrer mon projet
              <svg width="14" height="14" viewBox="0 0 20 20" fill="none">
                <path d="M4 10h12M10 4l6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <Link href="/pricing" className="btn-outline">
              Voir les tarifs
            </Link>
          </div>

          {/* Tags */}
          <div
            className="hero-fade-up mt-7 flex flex-wrap gap-2.5"
            style={{ "--fade-delay": "1.28s" } as React.CSSProperties}
          >
            {heroTags.map((tag, index) => (
              <span
                key={tag}
                className={`rounded-full border px-4 py-1.5 text-[13px] font-medium font-display ${
                  index === 0
                    ? "border-[#2457d8]/60 bg-[#0f2a54]/70 text-[#6694ff]"
                    : index === 1
                      ? "border-[#8f5a22]/60 bg-[#2b2416]/70 text-[#ff9a4d]"
                      : "border-[#1c7491]/60 bg-[#0f3246]/70 text-[#22d9ff]"
                }`}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <DashboardCard />
      </div>
    </section>
  );
}

function DashboardCard() {
  const maxValue = Math.max(...chartPoints);
  const coordinates = chartPoints.map((point, index) => {
    const x = (index / (chartPoints.length - 1)) * 400;
    const y = 92 - (point / maxValue) * 70;
    return { x, y };
  });
  const pathD = `M ${coordinates.map((point) => `${point.x},${point.y}`).join(" L ")}`;
  const areaPath = `${pathD} L 400,92 L 0,92 Z`;

  return (
    <article
      className="dark-card hero-float rounded-[28px]"
      style={{ boxShadow: "0 0 0 1px rgba(30,60,110,0.32) inset, 0 28px 60px -28px rgba(2,6,24,1), 0 0 80px -40px rgba(40,80,200,0.18)" }}
    >
      {/* Window chrome */}
      <header className="flex items-center justify-between border-b border-[#1e3a60]/60 px-5 py-3.5">
        <div className="flex items-center gap-2 text-sm font-semibold text-slate-200 font-display">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
          <span className="ml-3 text-[13px] text-[#7a98bc]">Dashboard ROI — Temps réel</span>
        </div>
        <span className="inline-flex items-center gap-1.5 text-[12px] font-bold text-emerald-400 font-display">
          <span className="live-dot h-1.5 w-1.5 rounded-full bg-emerald-400" />
          LIVE
        </span>
      </header>

      {/* KPI strip */}
      <div className="grid grid-cols-3 divide-x divide-[#1e3a60]/50">
        {dashboardKpis.map((kpi) => (
          <div key={kpi.label} className="space-y-1.5 px-4 py-5 text-center">
            <div className="hero-kpi-value text-3xl font-bold tracking-tight text-slate-100 md:text-4xl">
              {kpi.value}
            </div>
            <p className="text-[11px] font-medium uppercase tracking-wider text-[#6a88aa]">{kpi.label}</p>
            <p className="text-xs font-bold text-emerald-400">{kpi.delta}</p>
          </div>
        ))}
      </div>

      <div className="space-y-5 px-6 py-5">
        {/* Chart */}
        <div>
          <div className="mb-3 flex items-center justify-between">
            <p className="text-[12px] font-bold uppercase tracking-[0.12em] text-[#6a88aa] font-display">
              LEADS GÉNÉRÉS — 6 mois
            </p>
            <span
              className="rounded-full px-3 py-1 text-[11px] font-bold text-white font-display"
              style={{ background: "linear-gradient(105deg,#1e48ff,#3a68ff)", boxShadow: "0 4px 12px rgba(30,72,255,0.5)" }}
            >
              +28%
            </span>
          </div>
          <div className="relative h-24 w-full">
            <svg viewBox="0 0 400 100" className="h-full w-full overflow-visible">
              <defs>
                <linearGradient id="heroAreaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#4a6dff" stopOpacity="0.38" />
                  <stop offset="100%" stopColor="#4a6dff" stopOpacity="0.02" />
                </linearGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>
              <path className="hero-chart-guide" d="M0,80 L60,66 L120,62 L180,59 L240,53 L300,49 L360,43 L400,37" />
              <path d={areaPath} fill="url(#heroAreaGradient)" />
              <path id="hero-chart-main-path" className="hero-chart-main" d={pathD} filter="url(#glow)" />
              <circle r="4" fill="#bce4ff" className="hero-chart-dot">
                <animateMotion dur="4.8s" repeatCount="indefinite" rotate="auto">
                  <mpath href="#hero-chart-main-path" />
                </animateMotion>
              </circle>
            </svg>
            <div className="mt-1 flex justify-between text-[11px] font-medium text-[#4a6888]">
              {chartMonths.map((month) => (
                <span key={month}>{month}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Sources */}
        <div>
          <p className="mb-3 text-[12px] font-bold uppercase tracking-[0.12em] text-[#6a88aa] font-display">SOURCES D&apos;ACQUISITION</p>
          <HeroSourceBars />
        </div>

        {/* ROI badge */}
        <div
          className="rounded-2xl border px-4 py-3 text-[13px] font-bold text-emerald-400 font-display"
          style={{
            borderColor: "rgba(40,110,60,0.5)",
            background: "linear-gradient(90deg, rgba(12,46,28,0.9), rgba(8,36,22,0.9))",
            boxShadow: "0 0 24px -10px rgba(0,180,80,0.3) inset",
          }}
        >
          ROI ×3.6 atteint ce mois ↑
        </div>
      </div>
    </article>
  );
}
