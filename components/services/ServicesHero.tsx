import { servicesCombinationCards, servicesOverviewStats } from "@/lib/data";

export default function ServicesHero() {
  return (
    <>
      <section className="dark-section pb-12 pt-14 md:pb-14 md:pt-20">
        <div className="container-shell grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <p className="text-sm font-medium text-slate-400">Accueil / Services</p>
            <span className="badge-chip mt-8">NOS SERVICES</span>
            <h1 className="mt-5 text-5xl font-bold leading-[0.98] tracking-tight text-slate-100 md:text-7xl">
              Nos <span className="title-gradient">deux services</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300 md:text-3xl">
              Digital Renforcy propose la création de sites web intelligents et la mise en place de
              systèmes d'acquisition client automatisés. Technique, innovation et performance, tout ce
              dont votre entreprise a besoin pour maîtriser son digital.
            </p>
          </div>

          <div className="services-combo-card dark-card rounded-[30px] p-6">
            <div className="space-y-4">
              {servicesCombinationCards.map((item, index) => (
                <div
                  key={item.title}
                  className={`services-combo-row flex items-center justify-between rounded-2xl border px-4 py-4 ${
                    item.color === "blue"
                      ? "border-[#305f9a] bg-[#132d4e]"
                      : "border-[#664021] bg-[#2a251f]"
                  }`}
                  style={{ animationDelay: `${index * 0.16}s` }}
                >
                  <div className="min-w-0">
                    <p className="text-xl font-bold text-slate-100">{item.title}</p>
                    <p className="truncate text-sm text-slate-400">{item.subtitle}</p>
                  </div>
                  <span
                    className={`ml-4 text-2xl font-bold ${
                      item.color === "blue" ? "text-[#4f83ff]" : "text-[#ff8d4d]"
                    }`}
                  >
                    {item.price}
                  </span>
                </div>
              ))}
            </div>

            <div className="my-4 flex justify-center">
              <span className="services-plus grid h-10 w-10 place-items-center rounded-full border border-[#365d8f] bg-[#102748] text-[#6ca2ff]">
                +
              </span>
            </div>

            <div className="flex items-center gap-4">
              <div className="h-px flex-1 bg-[#274d78]" />
              <span className="rounded-full border border-emerald-600/40 bg-emerald-500/10 px-5 py-2 text-sm font-bold text-emerald-400">
                ROI × 3
              </span>
              <div className="h-px flex-1 bg-[#274d78]" />
            </div>

            <div className="mt-5 rounded-2xl border border-[#245b49] bg-[#103328] px-4 py-4">
              <p className="text-2xl font-bold text-emerald-400">1€ → 3€ de CA</p>
              <p className="text-sm text-slate-300">Résultats mesurables dès le mois 1</p>
            </div>
          </div>
        </div>
      </section>

      <section className="services-stat-strip">
        <div className="container-shell grid gap-6 py-8 md:grid-cols-2 lg:grid-cols-4">
          {servicesOverviewStats.map((stat, index) => (
            <article
              key={stat.value}
              className="services-strip-card text-center"
              style={{ animationDelay: `${index * 0.16}s` }}
            >
              <h3 className="text-5xl font-bold text-slate-100 md:text-6xl">{stat.value}</h3>
              <p className="mt-3 text-base text-slate-100/90 md:text-xl">{stat.label}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
