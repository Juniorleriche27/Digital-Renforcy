import { contact } from "@/lib/data";

export default function AuditCTASection() {
  return (
    <section id="audit" className="dark-section pt-8">
      <div className="container-shell">
        <div className="dark-panel rounded-[34px] border border-[#2b5685] px-4 py-8 text-center sm:px-8 sm:py-12">
          <span className="badge-chip">🚀 AUDIT GRATUIT</span>
          <h2 className="mx-auto mt-5 max-w-5xl text-3xl font-bold tracking-tight text-slate-100 sm:text-4xl md:text-6xl">
            Prêt à générer plus de clients — sans payer de commissions ?
          </h2>
          <p className="mx-auto mt-5 max-w-4xl text-base leading-relaxed text-slate-300 md:text-2xl">
            Audit gratuit de 30 minutes. Analyse de votre situation, recommandations personnalisées pour votre secteur (rénovation ou formation) — sans engagement.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a href={contact.calendly} target="_blank" rel="noreferrer" className="btn-primary">
              📅 Audit Gratuit - 30 min
            </a>
            <a href={contact.phoneHref} className="btn-outline">
              📞 {contact.phone}
            </a>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-sm text-slate-300 md:text-xl">
            <span>🔒 Sans engagement</span>
            <span>🟢 Réponse en 24h</span>
            <span>🛡️ 100% confidentiel</span>
          </div>
        </div>
      </div>
    </section>
  );
}
