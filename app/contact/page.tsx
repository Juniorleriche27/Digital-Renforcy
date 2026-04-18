import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import FloatingAssistant from "@/components/FloatingAssistant";
import ContactMultiStepForm from "@/components/ContactMultiStepForm";
import { contact, socialLinks } from "@/lib/data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Digital Renforcy",
  description: "Consultation gratuite de 30 min. Nos experts analysent votre situation et définissent la stratégie digitale sur mesure.",
};

const stats = [
  { value: "60+", label: "Clients accompagnés" },
  { value: "x3", label: "ROI moyen constaté" },
  { value: "15 j", label: "Site en ligne" },
  { value: "4-6 sem", label: "Premiers leads" },
];

const process = [
  {
    step: "01",
    title: "Audit gratuit (30 min)",
    text: "Analyse de votre visibilité, simulation ROI et recommandations personnalisées pour votre secteur.",
    color: "indigo",
  },
  {
    step: "02",
    title: "Stratégie sur mesure (J+2)",
    text: "Plan d'action détaillé avec KPIs, budget et timeline adaptés à votre activité.",
    color: "orange",
  },
  {
    step: "03",
    title: "Lancement (sous 15 jours)",
    text: "Site en ligne sous 15 jours. Premiers leads qualifiés sous 4 semaines.",
    color: "emerald",
  },
];

const stepColorCls: Record<string, string> = {
  indigo: "bg-indigo-500/20 text-indigo-300",
  orange: "bg-orange-500/20 text-orange-300",
  emerald: "bg-emerald-500/20 text-emerald-300",
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main id="top">
        {/* ── Hero ── */}
        <section className="dark-section pb-10 pt-14 md:pb-14 md:pt-20">
          <div className="container-shell">
            <p className="text-sm font-medium text-slate-400">Accueil / Contact</p>

            <div className="mt-6 max-w-4xl">
              <span className="badge-chip">📞 CONSULTATION GRATUITE</span>
              <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight text-slate-100 sm:text-5xl md:text-7xl">
                Votre digital en{" "}
                <span className="title-gradient">force opérationnelle</span>
              </h1>
              <p className="mt-5 max-w-3xl text-base leading-relaxed text-slate-300 sm:text-lg md:text-xl">
                Consultation gratuite de 30 min — Nos experts analysent votre situation et
                définissent la stratégie digitale sur mesure pour votre secteur.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
              {stats.map((s) => (
                <article key={s.label} className="dark-card rounded-2xl px-5 py-4">
                  <p className="text-2xl font-bold text-slate-100 sm:text-3xl">{s.value}</p>
                  <p className="mt-1 text-xs text-slate-300 sm:text-sm">{s.label}</p>
                </article>
              ))}
            </div>

            <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-sm font-semibold text-emerald-400">
              <span className="live-dot h-2 w-2 rounded-full bg-emerald-400" />
              3 demandes reçues ce matin
            </div>
          </div>
        </section>

        {/* ── Form + Sidebar ── */}
        <section id="contact-form" className="dark-section pt-0">
          <div className="container-shell">
            <div className="grid gap-10 lg:grid-cols-[1.55fr_1fr]">
              {/* Multi-step form */}
              <div>
                <ContactMultiStepForm />
              </div>

              {/* Sidebar */}
              <aside className="space-y-5">
                {/* Contact info card */}
                <div className="dark-card rounded-3xl p-6">
                  <h3 className="text-lg font-bold text-slate-100">Contactez-nous directement</h3>
                  <ul className="mt-5 space-y-4">
                    <li>
                      <a href={contact.phoneHref} className="flex items-center gap-3 text-sm text-slate-300 hover:text-white">
                        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[#14365f] text-lg">📞</span>
                        <div>
                          <p className="font-semibold text-slate-100">{contact.phone}</p>
                          <p className="text-xs text-slate-400">Lun–Ven, 9h–18h</p>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href={`mailto:${contact.email}`} className="flex items-center gap-3 text-sm text-slate-300 hover:text-white">
                        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[#14365f] text-lg">✉️</span>
                        <div>
                          <p className="font-semibold text-slate-100">{contact.email}</p>
                          <p className="text-xs text-slate-400">Réponse sous 24h</p>
                        </div>
                      </a>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-slate-300">
                      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[#14365f] text-lg">📍</span>
                      <div>
                        <p className="whitespace-pre-line font-semibold text-slate-100">{contact.address}</p>
                      </div>
                    </li>
                  </ul>

                  <div className="mt-5 flex gap-2">
                    {socialLinks.map((s) => (
                      <a
                        key={s.key}
                        href={s.href}
                        target="_blank"
                        rel="noreferrer"
                        className="grid h-9 w-9 place-items-center rounded-xl border border-[#264f7b] bg-[#0d2748] text-[10px] font-bold text-slate-300 hover:text-white"
                      >
                        {s.key.toUpperCase().slice(0, 2)}
                      </a>
                    ))}
                  </div>
                </div>

                {/* Quick actions */}
                <div className="grid gap-3">
                  <a
                    href={contact.whatsapp}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 rounded-2xl border border-emerald-500/40 bg-emerald-500/10 px-5 py-4 transition-colors hover:bg-emerald-500/20"
                  >
                    <span className="text-2xl">💬</span>
                    <div>
                      <p className="text-sm font-bold text-emerald-400">WhatsApp</p>
                      <p className="text-xs text-emerald-300/70">Réponse immédiate</p>
                    </div>
                  </a>
                  <a
                    href={contact.calendly}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 rounded-2xl border border-[#4a79ff]/40 bg-[#4a79ff]/10 px-5 py-4 transition-colors hover:bg-[#4a79ff]/20"
                  >
                    <span className="text-2xl">📅</span>
                    <div>
                      <p className="text-sm font-bold text-[#79acff]">Réserver un audit gratuit</p>
                      <p className="text-xs text-[#79acff]/70">30 min — Sans engagement</p>
                    </div>
                  </a>
                </div>

                {/* Process steps */}
                <div className="dark-card rounded-3xl p-6">
                  <h3 className="text-lg font-bold text-slate-100">Ce qui vous attend</h3>
                  <ol className="mt-5 space-y-5">
                    {process.map((p) => (
                      <li key={p.step} className="flex gap-4">
                        <span className={`grid h-9 w-9 shrink-0 place-items-center rounded-xl text-xs font-bold ${stepColorCls[p.color]}`}>
                          {p.step}
                        </span>
                        <div>
                          <p className="text-sm font-semibold text-slate-100">{p.title}</p>
                          <p className="mt-1 text-xs leading-relaxed text-slate-400">{p.text}</p>
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>

                {/* Trust badges */}
                <div className="flex flex-wrap gap-2">
                  {["🔒 Sans engagement", "🟢 Réponse sous 24h", "🛡️ 100% confidentiel"].map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-[#264f7b] bg-[#0d2748] px-3 py-1.5 text-xs font-medium text-slate-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </aside>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <CookieBanner />
      <FloatingAssistant />
    </>
  );
}
