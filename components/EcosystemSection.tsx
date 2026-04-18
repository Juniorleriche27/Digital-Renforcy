import { ecosystem } from "@/lib/data";

export default function EcosystemSection() {
  return (
    <section id="ecosystem" className="dark-section pt-10">
      <div className="container-shell">
        <div className="dark-panel rounded-[34px] px-6 py-10 md:px-10">
          <div className="mx-auto max-w-5xl text-center">
            <span className="badge-chip border-orange-500/30 bg-orange-500/10 text-orange-400">
              🧩 ÉCOSYSTÈME DIGITAL
            </span>
            <h2 className="mt-5 text-3xl font-bold tracking-tight text-slate-100 sm:text-4xl md:text-5xl lg:text-6xl">
              Toutes les plateformes <span className="title-gradient">connectées pour vous</span>
            </h2>
            <p className="mt-4 text-base text-slate-300 md:text-xl">
              Nous maîtrisons l'ensemble des outils qui génèrent des leads et automatisent votre acquisition — pour que vous n'ayez rien à apprendre.
            </p>
          </div>

          <div className="mt-10 grid gap-8 md:grid-cols-2">
            {ecosystem.map((group) => (
              <article key={group.title} className="space-y-5">
                <div>
                  <h3 className="text-2xl font-bold text-slate-100 md:text-4xl">{group.title}</h3>
                  <p className="mt-1 text-sm text-slate-400 md:text-xl">{group.subtitle}</p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {group.tools.map((tool) => (
                    <div
                      key={tool.name}
                      className="flex flex-col items-center gap-2 rounded-xl border border-[#28527f] bg-[#102848] px-3 py-3"
                    >
                      <span
                        className={`grid h-14 w-14 place-items-center rounded-2xl text-sm font-semibold text-white ${tool.color}`}
                      >
                        {tool.name.charAt(0)}
                      </span>
                      <span className="text-center text-xs font-medium text-slate-300 md:text-sm">
                        {tool.name}
                      </span>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
