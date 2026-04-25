import Link from "next/link";
import { webDevFeatures } from "@/lib/data";

export default function WebDevSection() {
  return (
    <section id="web-dev" className="dark-section">
      <div className="container-shell grid items-center gap-10 lg:grid-cols-[1fr_0.95fr]">
        <div>
          <span className="badge-chip">👨‍💻 1 DÉVELOPPEMENT WEB INTELLIGENT</span>
          <h2 className="mt-5 text-3xl font-bold tracking-tight text-slate-100 sm:text-4xl md:text-5xl lg:text-6xl">
            Un site web qui <span className="title-gradient">travaille pour vous</span>
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-slate-300 sm:text-base md:text-xl">
            Digital Renforcy crée des sites modernes, <strong>optimisés et sécurisés</strong> avec des fonctionnalités sur mesure. Votre site capte, qualifie et convertit vos visiteurs automatiquement — <strong>24h/24, 7j/7</strong>.
          </p>

          <ul className="mt-7 space-y-4">
            {webDevFeatures.map((feature) => (
              <li key={feature.title} className="grid grid-cols-[26px_1fr] gap-3">
                <span className="mt-1 text-emerald-400">✓</span>
                <div>
                  <h3 className="text-base font-semibold text-slate-100 sm:text-lg md:text-3xl">{feature.title}</h3>
                  <p className="mt-1 text-sm text-slate-300 md:text-xl">{feature.text}</p>
                </div>
              </li>
            ))}
          </ul>

          <Link href="/pricing" className="btn-primary mt-8">
            🌐 Découvrir le développement web
          </Link>
        </div>

        <ChatMockup />
      </div>
    </section>
  );
}

function ChatMockup() {
  return (
    <article className="dark-card overflow-hidden rounded-3xl border border-[#28517e]">
      <header className="flex items-center justify-between gap-3 border-b border-[#24486f] px-4 py-4 sm:px-5">
        <div>
          <h3 className="text-lg font-bold text-slate-100 sm:text-xl md:text-3xl">Assistant Digital Renforcy</h3>
          <p className="mt-1 text-xs text-emerald-400 sm:text-sm">● En ligne — répond en quelques secondes</p>
        </div>
        <span className="rounded-lg bg-[#1c57ff] px-3 py-2 text-xs font-semibold text-white sm:text-sm">IA</span>
      </header>

      <div className="space-y-4 px-4 py-5 sm:px-5">
        <div className="max-w-[92%] rounded-2xl bg-[#143468] px-4 py-3 text-sm text-slate-100 sm:max-w-[84%] sm:text-base md:text-xl">
          👋 Bonjour ! Je suis l'assistant de KBM Rénovation. Quel type de travaux souhaitez-vous réaliser ?
        </div>
        <div className="ml-auto max-w-[78%] rounded-2xl bg-[#2a405f] px-4 py-3 text-sm text-slate-200 sm:max-w-[72%] sm:text-base md:text-xl">
          Rénovation de salle de bain
        </div>
      </div>

      <footer className="border-t border-[#24486f] px-4 py-4 sm:px-5">
        <div className="flex items-center gap-2">
          <input
            disabled
            placeholder="Tapez votre message..."
            className="w-full rounded-xl border border-[#3b5a7f] bg-[#1f3657] px-4 py-3 text-xs text-slate-200 placeholder:text-slate-400 sm:text-sm"
          />
          <button className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[#2492ff] text-white sm:h-11 sm:w-11">➤</button>
        </div>
        <p className="mt-3 text-center text-[11px] text-slate-400 sm:text-xs">🔒 Données sécurisées — Répond 24h/24 — 7j/7</p>
      </footer>
    </article>
  );
}
