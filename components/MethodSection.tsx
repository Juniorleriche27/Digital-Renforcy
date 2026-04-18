import { methodSteps } from "@/lib/data";

export default function MethodSection() {
  return (
    <section id="method" className="dark-section pt-14">
      <div className="container-shell">
        <div className="mx-auto max-w-4xl text-center">
          <span className="badge-chip border-cyan-500/30 bg-cyan-500/10 text-cyan-300">
            🧬 NOTRE MÉTHODE
          </span>
          <h2 className="mt-5 text-3xl font-bold tracking-tight text-slate-100 sm:text-4xl md:text-5xl lg:text-6xl">
            De l'audit à vos <span className="title-gradient">premiers leads</span>
          </h2>
          <p className="mt-4 text-base text-slate-300 md:text-xl">
            Un processus éprouvé, mis en ligne en moins de 15 jours.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {methodSteps.map((step) => (
            <article key={step.step} className="dark-card rounded-3xl p-6">
              <p className="mb-4 text-4xl font-bold text-[#1a4de0]">{step.step}</p>
              <h3 className="text-xl font-bold text-slate-100 md:text-xl">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-300 md:text-xl">{step.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
