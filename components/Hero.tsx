import Link from "next/link";
import {
  acquisitionSources,
  chartMonths,
  chartPoints,
  contact,
  dashboardKpis,
  heroTags,
} from "@/lib/data";

export default function Hero() {
  return (
    <section className="dark-section pb-12 pt-14 md:pb-14 md:pt-20">
      <div className="container-shell grid items-center gap-12 lg:grid-cols-[1.02fr_0.98fr]">
        <div>
          <span className="badge-chip text-[11px] normal-case tracking-normal text-[#78b0ff]">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            Agence Marketing Hybride en France
          </span>

          <h1 className="mt-6 max-w-3xl text-5xl font-bold leading-[0.98] tracking-tight text-slate-100 md:text-7xl">
            Technique,
            <br />
            automatisation &
            <br />
            <span className="title-gradient">innovation digitale</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300 md:text-4xl">
            Digital Renforcy combine <strong>expertise technique</strong> et innovation numerique :
            developpement web intelligent, solutions numeriques automatisees et plateformes d
            entrainement en ligne - une approche hybride et performante.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link href={contact.contactForm} className="btn-primary">
              Demarrer mon projet
            </Link>
            <Link href="/pricing" className="btn-outline">
              Voir les tarifs
            </Link>
          </div>

          <div className="no-scrollbar mt-8 flex flex-wrap gap-3">
            {heroTags.map((tag, index) => (
              <span
                key={tag}
                className={`rounded-full border px-4 py-2 text-sm font-medium ${
                  index === 0
                    ? "border-[#2457d8] bg-[#0f2a54] text-[#5f8eff]"
                    : index === 1
                      ? "border-[#8f5a22] bg-[#2b2416] text-[#ff9a4d]"
                      : "border-[#1c7491] bg-[#0f3246] text-[#2fd9ff]"
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
    <article className="dark-card rounded-[26px]">
      <header className="flex items-center justify-between border-b border-[#27517e] px-5 py-4">
        <div className="flex items-center gap-2 text-sm font-semibold text-slate-200">
          <span className="h-2.5 w-2.5 rounded-full bg-orange-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
          <span className="ml-2">Dashboard ROI - Temps reel</span>
        </div>
        <span className="inline-flex items-center gap-1 text-sm font-semibold text-emerald-400">
          <span className="live-dot h-2 w-2 rounded-full bg-emerald-400" />
          Live
        </span>
      </header>

      <div className="grid grid-cols-3 divide-x divide-[#244a74]">
        {dashboardKpis.map((kpi) => (
          <div key={kpi.label} className="space-y-2 px-4 py-5 text-center">
            <div className="mx-auto grid h-9 w-9 place-items-center rounded-lg bg-[#13365e] text-sm text-[#6ea9ff]">
              {kpi.icon === "users" ? "U" : kpi.icon === "coin" ? "EUR" : "T"}
            </div>
            <div className="hero-kpi-value text-3xl font-bold text-slate-100 md:text-4xl">{kpi.value}</div>
            <p className="text-xs text-slate-300">{kpi.label}</p>
            <p className="text-xs font-semibold text-emerald-400">{kpi.delta}</p>
          </div>
        ))}
      </div>

      <div className="space-y-6 px-6 py-5">
        <div>
          <div className="mb-3 flex items-center justify-between">
            <p className="text-sm font-semibold tracking-wide text-slate-200">
              LEADS GENERES - 6 derniers mois
            </p>
            <span className="rounded-full bg-[#2f56ff] px-3 py-1 text-xs font-bold text-white">+28%</span>
          </div>
          <div className="relative h-24 w-full">
            <svg viewBox="0 0 400 100" className="h-full w-full overflow-visible">
              <defs>
                <linearGradient id="heroAreaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#4a6dff" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="#4a6dff" stopOpacity="0.02" />
                </linearGradient>
              </defs>

              <path className="hero-chart-guide" d="M0,80 L60,66 L120,62 L180,59 L240,53 L300,49 L360,43 L400,37" />
              <path d={areaPath} fill="url(#heroAreaGradient)" />
              <path id="hero-chart-main-path" className="hero-chart-main" d={pathD} />

              <circle r="3.8" fill="#bce4ff" className="hero-chart-dot">
                <animateMotion dur="4.8s" repeatCount="indefinite" rotate="auto">
                  <mpath href="#hero-chart-main-path" />
                </animateMotion>
              </circle>
            </svg>
            <div className="mt-1 flex justify-between text-xs text-slate-400">
              {chartMonths.map((month) => (
                <span key={month}>{month}</span>
              ))}
            </div>
          </div>
        </div>

        <div>
          <p className="mb-3 text-sm font-semibold text-slate-200">SOURCES D ACQUISITION</p>
          <div className="space-y-3">
            {acquisitionSources.map((source, index) => (
              <div key={source.label}>
                <div className="mb-1 flex items-center justify-between text-sm text-slate-300">
                  <span>{source.label}</span>
                  <span className="font-semibold text-slate-100">{source.value}%</span>
                </div>
                <div className="h-2 rounded-full bg-[#173451]">
                  <div
                    className={`hero-source-bar h-full rounded-full bg-gradient-to-r ${source.color}`}
                    style={
                      {
                        "--target-width": `${source.value}%`,
                        animationDelay: `${0.45 + index * 0.15}s`,
                      } as { [key: string]: string }
                    }
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-xl border border-[#275f44] bg-[#0f3529] px-4 py-3 text-sm font-semibold text-emerald-400">
          ROI x3.6 atteint ce mois ↑
        </div>
      </div>
    </article>
  );
}
