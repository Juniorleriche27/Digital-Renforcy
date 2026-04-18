import { contact, processSteps } from "@/lib/data";

const iconByColor: Record<string, string> = {
  indigo: "📞",
  orange: "🛠️",
  emerald: "🚀",
  cyan: "📈",
};

const colorsByStep: Record<string, string> = {
  indigo: "border-indigo-500/70 bg-indigo-500/10 text-indigo-300",
  orange: "border-orange-500/70 bg-orange-500/10 text-orange-300",
  emerald: "border-emerald-500/70 bg-emerald-500/10 text-emerald-300",
  cyan: "border-cyan-500/70 bg-cyan-500/10 text-cyan-300",
};

export default function ProcessSection() {
  return (
    <section id="process" className="dark-section">
      <div className="container-shell">
        <div className="mx-auto max-w-5xl text-center">
          <span className="badge-chip">🧭 CE QUI VOUS ATTEND</span>
          <h2 className="mt-5 text-4xl font-bold tracking-tight text-slate-100 md:text-6xl">
            Votre parcours vers <span className="title-gradient">plus de clients</span>
          </h2>
          <p className="mt-4 text-base text-slate-300 md:text-2xl">
            De la premiere conversation a vos premiers leads, voici exactement ce qui se passe.
          </p>
        </div>

        <div className="relative mt-12 space-y-6 pl-0 md:pl-24">
          <div className="absolute left-[52px] top-0 hidden h-full w-px bg-[#244a74] md:block" />

          {processSteps.map((step) => (
            <article key={step.step} className="relative dark-card rounded-3xl p-7 md:p-8">
              <div
                className={`absolute -left-[84px] top-7 hidden h-14 w-14 place-items-center rounded-2xl border text-sm font-bold md:grid ${
                  colorsByStep[step.color]
                }`}
              >
                <div className="text-xs">{step.step}</div>
                <div>{iconByColor[step.color]}</div>
              </div>

              <span className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${colorsByStep[step.color]}`}>
                {step.when}
              </span>
              <h3 className="mt-4 text-2xl font-bold text-slate-100 md:text-4xl">{step.title}</h3>
              <p className="mt-3 text-base leading-relaxed text-slate-300 md:text-xl">{step.text}</p>

              <ul className="mt-5 space-y-2">
                {step.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-3 text-base text-slate-300 md:text-xl">
                    <span className="text-emerald-400">✓</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a href={contact.calendly} target="_blank" rel="noreferrer" className="btn-primary">
            📅 Reserver mon audit gratuit
          </a>
        </div>
      </div>
    </section>
  );
}
