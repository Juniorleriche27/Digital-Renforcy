import Link from "next/link";
import { contact, sectors } from "@/lib/data";

export default function SectorsSection() {
  return (
    <section id="sectors" className="dark-section">
      <div className="container-shell">
        <div className="mx-auto max-w-5xl text-center">
          <span className="badge-chip border-cyan-500/30 bg-cyan-500/10 text-cyan-300">🧭 NOS SECTEURS</span>
          <h2 className="mt-5 text-4xl font-bold tracking-tight text-slate-100 md:text-6xl">
            Deux univers, <span className="title-gradient">une meme ambition</span>
          </h2>
          <p className="mt-4 text-base text-slate-300 md:text-2xl">
            Que vous soyez une entreprise cherchant a digitaliser ou un entrepreneur souhaitant automatiser sa croissance, Digital Renforcy a une solution.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {sectors.map((sector) => (
            <article key={sector.title} className="dark-card rounded-3xl border border-[#23517f] p-8">
              <h3 className="mb-4 flex items-center gap-3 text-2xl font-bold text-slate-100 md:text-4xl">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-[#112f56] text-xl">
                  {sector.icon === "building" ? "🏢" : "💡"}
                </span>
                {sector.title}
              </h3>
              <blockquote className="rounded-xl border-l-2 border-[#35b7ff] bg-[#122c4f] px-5 py-4 text-base italic text-slate-300 md:text-2xl">
                "{sector.quote}"
              </blockquote>
              <ul className="mt-5 space-y-3">
                {sector.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-base text-slate-300 md:text-xl">
                    <span className="mt-1 text-cyan-300">●</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link href={contact.contactForm} className="btn-outline mt-8 w-full">
                {sector.cta} →
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
