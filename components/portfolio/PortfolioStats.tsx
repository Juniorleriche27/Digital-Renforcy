import { portfolioGlobalStats } from "@/lib/data";

export default function PortfolioStats() {
  return (
    <section className="dark-section pb-12 pt-10">
      <div className="container-shell">
        <div className="mx-auto max-w-4xl text-center">
          <span className="badge-chip border-cyan-500/30 bg-cyan-500/10 text-cyan-300">
            EN CHIFFRES
          </span>
          <h2 className="mt-5 text-5xl font-bold leading-[0.98] tracking-tight text-slate-100 md:text-7xl">
            Des resultats qui <span className="title-gradient">parlent d eux-memes</span>
          </h2>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {portfolioGlobalStats.map((stat, index) => (
            <article
              key={stat.value + stat.label}
              className="portfolio-stat-card dark-card rounded-3xl px-5 py-7 text-center"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <p className="text-3xl leading-none">{stat.icon}</p>
              <p className="mt-4 text-5xl font-bold text-slate-100">{stat.value}</p>
              <p className="mt-2 text-lg text-slate-300">{stat.label}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
