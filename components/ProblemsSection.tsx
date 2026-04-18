import Link from "next/link";
import { problems } from "@/lib/data";

export default function ProblemsSection() {
  return (
    <section id="problems" className="dark-section">
      <div className="container-shell">
        <div className="mx-auto max-w-4xl text-center">
          <span className="badge-chip border-orange-500/30 bg-orange-500/10 text-orange-400">
            🔥 VOUS RECONNAISSEZ-VOUS ?
          </span>
          <h2 className="mt-5 text-3xl font-bold tracking-tight text-slate-100 sm:text-4xl md:text-6xl">
            Ces <span className="title-gradient">problèmes</span> freinent votre croissance
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {problems.map((problem, index) => (
            <article
              key={problem.title}
              className={`dark-card rounded-2xl border-l-[3px] p-7 ${
                index === 0 ? "border-l-[#3465ff]" : "border-l-[#ff7d3c]"
              }`}
            >
              <h3 className="mb-5 flex items-center gap-3 text-2xl font-bold text-slate-100 md:text-3xl">
                <span className="grid h-10 w-10 place-items-center rounded-xl border border-[#24537f] bg-[#123159]">
                  {problem.icon === "globe" ? "🌐" : "⚙️"}
                </span>
                {problem.title}
              </h3>

              <ul className="space-y-4">
                {problem.items.map((item) => (
                  <li key={item} className="flex gap-3 text-base text-slate-300 md:text-2xl">
                    <span className="mt-1.5 text-red-400">●</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-base text-slate-300 md:text-2xl">
            <strong className="text-slate-100">Digital Renforcy transforme ces defis en forces operationnelles.</strong>{" "}
            Voici comment :
          </p>
          <Link href="/services" className="btn-primary mt-6">
            ↓ Decouvrir nos solutions
          </Link>
        </div>
      </div>
    </section>
  );
}

