import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import FloatingAssistant from "@/components/FloatingAssistant";
import { contact } from "@/lib/data";

const heroValues = [
  {
    title: "Resultats mesurables",
    text: "Pas de jargon, que des chiffres reels",
  },
  {
    title: "Partenariat long terme",
    text: "On grandit avec vous, pas a vos depens",
  },
  {
    title: "Innovation digitale",
    text: "Automatisation et solutions sur mesure",
  },
  {
    title: "Transparence totale",
    text: "Dashboard ROI accessible 24h/24",
  },
];

const missionStats = [
  { value: "+60", label: "Projets realises" },
  { value: "+5 ans", label: "D expertise" },
  { value: "x3", label: "ROI moyen campagnes" },
  { value: "97%", label: "Clients satisfaits" },
];

const commitments = [
  "Site en ligne en 2-3 semaines",
  "Premiers leads sous 4-6 semaines",
  "Reporting lisible chaque mois",
  "Sans engagement de duree",
  "Reponse sous 24h garantie",
];

const sectorCards = [
  {
    title: "Developpement Web",
    items: [
      "Sites modernes, responsive et SEO-friendly",
      "Fonctionnalites sur mesure",
      "Chatbot IA, formulaires automatises",
      "Integration technique et securite",
      "Maintenance et optimisation continue",
    ],
    tone: "blue",
  },
  {
    title: "Systemes Automatises",
    items: [
      "Acquisition client automatisee",
      "Tunnels de conversion et landing pages",
      "Chatbot IA et qualification",
      "Plateformes numeriques autonomes",
      "Maintenance et optimisation des systemes",
    ],
    tone: "orange",
  },
  {
    title: "Automatisation & Systemes",
    items: [
      "Tunnels de conversion automatises",
      "Systemes d acquisition client",
      "Chatbots IA et formulaires intelligents",
      "Architecture scalable et autonome",
      "Integrations CRM et outils metier",
    ],
    tone: "cyan",
  },
];

const smartSiteItems = [
  "Design professionnel et mobile-first",
  "Formulaire de devis ou inscription",
  "Galerie de realisations / formations",
  "SEO local integre des la conception",
  "Chargement ultra-rapide (Google score 95+)",
  "Hebergement et maintenance inclus",
];

const differentiators = [
  {
    title: "Expertise technique",
    text: "Programmation, developpement informatique et creation de systemes numeriques automatises conformes a notre code APE 6201Z.",
  },
  {
    title: "Transparence totale",
    text: "Reporting clair, dashboards lisibles, aucun jargon inutile. Vous savez ou va votre budget et quels resultats il produit.",
  },
  {
    title: "Resultats mesurables",
    text: "Sites en ligne en 2-3 semaines, premiers leads sous 4-6 semaines. On agit vite, on mesure tout, on ajuste.",
  },
  {
    title: "Partenaire long terme",
    text: "Pas un prestataire qui disparait: un partenaire qui maintient, optimise et fait evoluer vos systemes.",
  },
];

const certifications = [
  "Google Analytics Certified",
  "Google My Business Expert",
  "Qualiopi - Connaissance du cadre",
  "Semrush Certified",
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main id="top">
        <section className="dark-section pb-12 pt-14 md:pb-16 md:pt-20">
          <div className="container-shell">
            <p className="text-sm font-medium text-slate-400">Accueil / A Propos</p>
            <div className="mt-8 grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
              <div data-reveal data-delay="40ms">
                <span className="badge-chip">NOTRE HISTOIRE</span>
                <h1 className="mt-5 text-5xl font-bold leading-[0.98] tracking-tight text-slate-100 md:text-7xl">
                  Digital Renforcy - <span className="title-gradient">Agence Web Hybride</span>
                </h1>
                <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-300 md:text-3xl">
                  Digital Renforcy combine <strong>expertise technique et innovation numerique</strong>{" "}
                  pour offrir des solutions performantes et automatisees. Developpement web intelligent,
                  systemes d acquisition automatises, plateformes autonomes.
                </p>
              </div>

              <article data-reveal data-delay="90ms" className="dark-panel rounded-3xl p-6">
                <div className="space-y-4">
                  {heroValues.map((item) => (
                    <div
                      key={item.title}
                      className="rounded-2xl border border-[#2a537f] bg-[#122f53] px-4 py-3"
                    >
                      <p className="text-base font-bold text-slate-100 md:text-2xl">{item.title}</p>
                      <p className="mt-1 text-sm text-slate-300 md:text-lg">{item.text}</p>
                    </div>
                  ))}
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="dark-section pt-6">
          <div className="container-shell grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
            <div data-reveal data-delay="40ms">
              <span className="badge-chip border-cyan-500/30 bg-cyan-500/10 text-cyan-300">
                NOTRE MISSION
              </span>
              <h2 className="mt-5 text-4xl font-bold tracking-tight text-slate-100 md:text-6xl">
                La methode qui transforme votre digital en{" "}
                <span className="title-gradient">force operationnelle</span>
              </h2>
              <p className="mt-5 text-base leading-relaxed text-slate-300 md:text-2xl">
                Digital Renforcy est nee d un constat: trop d entreprises depensent sur des plateformes
                a commissions, des sites depasses et des campagnes mal pilotees.
              </p>
              <p className="mt-4 text-base leading-relaxed text-slate-300 md:text-2xl">
                Notre reponse: la methode hybride Web x Acquisition. Un site web intelligent (200EUR/mois)
                couple a des campagnes ciblees (des 1200EUR/mois) pour generer des demandes qualifiees.
                Resultats mesurables des le premier mois, sans engagement.
              </p>

              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {missionStats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-[#2b537f] bg-[#122f53] px-4 py-4"
                  >
                    <p className="text-3xl font-bold text-[#77abff] md:text-4xl">{stat.value}</p>
                    <p className="mt-1 text-sm text-slate-300 md:text-xl">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <article data-reveal data-delay="90ms" className="dark-card rounded-3xl p-6">
              <h3 className="text-2xl font-bold text-slate-100 md:text-3xl">Notre engagement</h3>
              <ul className="mt-5 space-y-3">
                {commitments.map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-slate-300 md:text-xl">
                    <span className="text-emerald-400">+</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </section>

        <section className="dark-section bg-[#091f40]/60 pt-10">
          <div className="container-shell">
            <div className="mx-auto max-w-4xl text-center" data-reveal data-delay="40ms">
              <span className="badge-chip border-orange-500/30 bg-orange-500/10 text-orange-300">
                NOS CIBLES
              </span>
              <h2 className="mt-5 text-4xl font-bold tracking-tight text-slate-100 md:text-6xl">
                Nous connaissons <span className="title-gradient">votre secteur</span>
              </h2>
              <p className="mt-4 text-base text-slate-300 md:text-2xl">
                Nous concentrons notre expertise sur des domaines precis pour livrer des resultats
                concrets.
              </p>
            </div>

            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {sectorCards.map((card, index) => (
                <article
                  key={card.title}
                  data-reveal
                  data-delay={`${70 + index * 30}ms`}
                  className="dark-card rounded-3xl p-6"
                >
                  <h3 className="text-2xl font-bold text-slate-100 md:text-3xl">{card.title}</h3>
                  <ul className="mt-5 space-y-2">
                    {card.items.map((item) => (
                      <li key={item} className="flex gap-3 text-sm text-slate-300 md:text-lg">
                        <span className="text-emerald-400">+</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="dark-section pt-10">
          <div className="container-shell grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
            <div data-reveal data-delay="40ms">
              <span className="badge-chip">SITE INTELLIGENT</span>
              <h2 className="mt-5 text-4xl font-bold tracking-tight text-slate-100 md:text-6xl">
                Qu est-ce qu un <span className="title-gradient">site web intelligent</span> ?
              </h2>
              <p className="mt-5 text-base leading-relaxed text-slate-300 md:text-2xl">
                C est bien plus qu un site vitrine. C est un systeme concu pour convertir les
                visiteurs en prospects automatiquement, 24h/24 et 7j/7.
              </p>
              <p className="mt-4 text-base leading-relaxed text-slate-300 md:text-2xl">
                Pour la renovation: formulaire devis optimise, CTA visibles, galerie realisations,
                SEO local. Pour la formation: pages programme, tunnel inscription fluide, integration
                CPF et contenu SEO.
              </p>
            </div>

            <article data-reveal data-delay="90ms" className="dark-card rounded-3xl p-6">
              <h3 className="text-2xl font-bold text-slate-100 md:text-3xl">Un site intelligent inclut</h3>
              <ul className="mt-5 space-y-3">
                {smartSiteItems.map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-slate-300 md:text-xl">
                    <span className="text-[#73a8ff]">+</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </section>

        <section className="dark-section bg-[#091f40]/60 pt-10">
          <div className="container-shell">
            <div className="mx-auto max-w-4xl text-center" data-reveal data-delay="40ms">
              <span className="badge-chip border-emerald-500/30 bg-emerald-500/10 text-emerald-300">
                NOS VALEURS
              </span>
              <h2 className="mt-5 text-4xl font-bold tracking-tight text-slate-100 md:text-6xl">
                Ce qui nous <span className="title-gradient">differencie</span>
              </h2>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {differentiators.map((item, index) => (
                <article
                  key={item.title}
                  data-reveal
                  data-delay={`${70 + index * 40}ms`}
                  className="dark-card rounded-3xl p-6"
                >
                  <h3 className="text-2xl font-bold text-slate-100 md:text-3xl">{item.title}</h3>
                  <p className="mt-3 text-base leading-relaxed text-slate-300 md:text-xl">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="dark-section pt-10">
          <div className="container-shell">
            <div className="mx-auto max-w-4xl text-center" data-reveal data-delay="40ms">
              <span className="badge-chip border-orange-500/30 bg-orange-500/10 text-orange-300">
                CERTIFICATIONS
              </span>
              <h2 className="mt-5 text-4xl font-bold tracking-tight text-slate-100 md:text-6xl">
                Des expertises <span className="title-gradient">reconnues</span>
              </h2>
            </div>

            <div className="mx-auto mt-10 grid max-w-5xl gap-4 md:grid-cols-2">
              {certifications.map((item, index) => (
                <div
                  key={item}
                  data-reveal
                  data-delay={`${70 + index * 30}ms`}
                  className="dark-card rounded-2xl px-5 py-4 text-base font-semibold text-slate-100 md:text-2xl"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="dark-section pt-8">
          <div className="container-shell">
            <div data-reveal data-delay="50ms" className="dark-panel rounded-[34px] px-8 py-12 text-center">
              <span className="badge-chip">TRAVAILLONS ENSEMBLE</span>
              <h2 className="mx-auto mt-5 max-w-5xl text-4xl font-bold tracking-tight text-slate-100 md:text-6xl">
                Pret a <span className="title-gradient">digitaliser et automatiser votre acquisition</span> ?
              </h2>
              <p className="mx-auto mt-5 max-w-4xl text-base leading-relaxed text-slate-300 md:text-2xl">
                Consultation gratuite de 30 minutes. Audit de votre situation, recommandations
                personnalisees, sans engagement.
              </p>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <Link href={contact.contactForm} className="btn-primary">
                  Consultation Gratuite
                </Link>
                <Link href="/portfolio" className="btn-outline">
                  Voir nos realisations
                </Link>
              </div>
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
