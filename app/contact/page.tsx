import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import FloatingAssistant from "@/components/FloatingAssistant";
import ContactMultiStepForm from "@/components/ContactMultiStepForm";
import { contact, socialLinks } from "@/lib/data";

const socialIcons: Record<string, React.ReactNode> = {
  in: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  ),
  f: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  ),
  ig: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
    </svg>
  ),
  yt: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
      <path d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/>
    </svg>
  ),
  tt: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
    </svg>
  ),
  cal: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
      <path d="M19 3h-1V1h-2v2H8V1H6v2H5C3.9 3 3 3.9 3 5v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V9h14v10zM5 7V5h14v2H5zm2 4h10v2H7zm0 4h7v2H7z"/>
    </svg>
  ),
};
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
                        {socialIcons[s.key] ?? s.key.toUpperCase().slice(0, 2)}
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
