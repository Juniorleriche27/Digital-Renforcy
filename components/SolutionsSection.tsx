import Link from "next/link";
import { solutions } from "@/lib/data";

export default function SolutionsSection() {
  return (
    <section id="solutions" className="dark-section">
      <div className="container-shell">
        <div className="mx-auto max-w-5xl text-center">
          <span className="badge-chip">🧱 NOS SOLUTIONS</span>
          <h2 className="mt-5 text-3xl font-bold tracking-tight text-slate-100 sm:text-4xl md:text-5xl lg:text-6xl">
            L'approche <span className="title-gradient">hybride Digital Renforcy</span>
          </h2>
          <p className="mt-4 text-base text-slate-300 md:text-xl">
            Trois expertises complémentaires : développement web intelligent, solutions numériques automatisées et plateformes d'entraînement en ligne.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {solutions.map((solution, index) => (
            <article
              key={solution.title}
              className={`dark-card rounded-[28px] border-2 p-8 ${solution.borderClass}`}
            >
              <div className="mb-6 flex items-start justify-between">
                <span className="grid h-14 w-14 place-items-center rounded-2xl border border-[#376597] bg-[#102c52] text-3xl">
                  {solution.icon === "globe" ? "🌐" : "🎯"}
                </span>
                <span className="text-2xl">{index === 0 ? "🌐" : "🎯"}</span>
              </div>

              <h3 className="text-2xl font-bold text-slate-100 md:text-4xl">{solution.title}</h3>
              <p className={`mt-2 text-lg font-semibold ${index === 0 ? "text-[#4f83ff]" : "text-[#ff8d4d]"}`}>
                {solution.price}
              </p>
              <p className="mt-5 text-base leading-relaxed text-slate-300 md:text-xl">{solution.description}</p>

              <ul className="mt-6 space-y-3">
                {solution.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-base text-slate-300 md:text-xl">
                    <span className="mt-1 text-emerald-400">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Link href={solution.href} className="btn-outline mt-8 w-full">
                En savoir plus →
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
