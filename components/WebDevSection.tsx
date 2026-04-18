import Link from "next/link";
import { webDevFeatures } from "@/lib/data";

export default function WebDevSection() {
  return (
    <section id="web-dev" className="dark-section">
      <div className="container-shell grid items-center gap-10 lg:grid-cols-[1fr_0.95fr]">
        <div>
          <span className="badge-chip">👨‍💻 1 DÉVELOPPEMENT WEB INTELLIGENT</span>
          <h2 className="mt-5 text-3xl font-bold tracking-tight text-slate-100 sm:text-4xl md:text-6xl">
            Un site web qui <span className="title-gradient">travaille pour vous</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-300 md:text-2xl">
            Digital Renforcy crée des sites modernes, <strong>optimisés et sécurisés</strong> avec des fonctionnalités sur mesure. Votre site capte, qualifie et convertit vos visiteurs automatiquement — <strong>24h/24, 7j/7</strong>.
          </p>

          <ul className="mt-7 space-y-4">
            {webDevFeatures.map((feature) => (
              <li key={feature.title} className="grid grid-cols-[26px_1fr] gap-3">
                <span className="mt-1 text-emerald-400">✓</span>
                <div>
                  <h3 className="text-lg font-semibold text-slate-100 md:text-3xl">{feature.title}</h3>
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
      <header className="flex items-center justify-between border-b border-[#24486f] px-5 py-4">
        <div>
          <h3 className="text-xl font-bold text-slate-100 md:text-3xl">Assistant Digital Renforcy</h3>
          <p className="mt-1 text-sm text-emerald-400">● En ligne — répond en quelques secondes</p>
        </div>
        <span className="rounded-lg bg-[#1c57ff] px-3 py-2 text-sm font-semibold text-white">IA</span>
      </header>

      <div className="space-y-4 px-5 py-5">
        <div className="max-w-[84%] rounded-2xl bg-[#143468] px-4 py-3 text-base text-slate-100 md:text-xl">
          👋 Bonjour ! Je suis l'assistant de KBM Rénovation. Quel type de travaux souhaitez-vous réaliser ?
        </div>
        <div className="ml-auto max-w-[72%] rounded-2xl bg-[#2a405f] px-4 py-3 text-base text-slate-200 md:text-xl">
          Rénovation de salle de bain
        </div>
      </div>

      <footer className="border-t border-[#24486f] px-5 py-4">
        <div className="flex items-center gap-2">
          <input
            disabled
            placeholder="Tapez votre message..."
            className="w-full rounded-xl border border-[#3b5a7f] bg-[#1f3657] px-4 py-3 text-sm text-slate-200 placeholder:text-slate-400"
          />
          <button className="grid h-11 w-11 place-items-center rounded-xl bg-[#2492ff] text-white">➤</button>
        </div>
        <p className="mt-3 text-center text-xs text-slate-400">🔒 Données sécurisées — Répond 24h/24 — 7j/7</p>
      </footer>
    </article>
  );
}

