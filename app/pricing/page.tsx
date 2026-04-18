import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import FloatingAssistant from "@/components/FloatingAssistant";
import { contact } from "@/lib/data";

type PlanFeature = {
  label: string;
  included: boolean;
};

type PlanCard = {
  name: string;
  subtitle: string;
  description: string;
  price: string;
  extra?: string;
  features: PlanFeature[];
  cta: string;
  href: string;
  highlighted?: boolean;
  accent: "blue" | "orange" | "green";
};

const trustStats = [
  { value: "+60", label: "clients accompagnes" },
  { value: "2-3 sem", label: "mise en ligne moyenne" },
  { value: "95+", label: "score Google Lighthouse" },
  { value: "0EUR", label: "frais caches" },
];

const webPlans: PlanCard[] = [
  {
    name: "Site Essentiel",
    subtitle: "Ideal pour demarrer",
    description:
      "Site vitrine professionnel pour lancer votre presence en ligne. Moderne, rapide et visible sur Google des le lancement.",
    price: "200EUR/mois",
    features: [
      { label: "Site vitrine jusqu a 5 pages", included: true },
      { label: "Design professionnel sur mesure", included: true },
      { label: "Optimisation mobile (responsive)", included: true },
      { label: "Hebergement inclus", included: true },
      { label: "Maintenance mensuelle", included: true },
      { label: "Formulaire de contact et devis", included: true },
      { label: "SEO technique de base", included: true },
      { label: "SSL et securite inclus", included: true },
      { label: "Pages supplementaires", included: false },
      { label: "Blog / actualites", included: false },
      { label: "Chatbot IA", included: false },
    ],
    cta: "Choisir Essentiel",
    href: `${contact.contactForm}?plan=web-essentiel`,
    accent: "blue",
  },
  {
    name: "Site Pro",
    subtitle: "Pour maximiser vos resultats",
    description:
      "Site complet avec blog, pages illimitees et chatbot IA. Developpez votre autorite et automatisez la capture de prospects 24h/7j.",
    price: "300EUR/mois",
    extra: "ou 897EUR en une fois",
    features: [
      { label: "Pages illimitees", included: true },
      { label: "Design professionnel sur mesure", included: true },
      { label: "Optimisation mobile (responsive)", included: true },
      { label: "Hebergement haute performance", included: true },
      { label: "Maintenance et mises a jour incluses", included: true },
      { label: "Formulaire de contact et devis auto", included: true },
      { label: "SEO technique avance", included: true },
      { label: "Blog / actualites", included: true },
      { label: "Galerie realisations", included: true },
      { label: "Chatbot IA personnalise 24h/7j", included: true },
      { label: "Rapport mensuel de performance", included: true },
    ],
    cta: "Choisir Pro",
    href: `${contact.contactForm}?plan=web-pro`,
    highlighted: true,
    accent: "blue",
  },
];

const webComparison = [
  { label: "Nombre de pages", essential: "Jusqu a 5", pro: "Illimitees" },
  { label: "Design sur mesure", essential: "Oui", pro: "Oui" },
  { label: "Hebergement", essential: "Inclus", pro: "Haute performance" },
  { label: "SEO", essential: "Basique", pro: "Avance" },
  { label: "Blog / actualites", essential: "Non", pro: "Oui" },
  { label: "Chatbot IA", essential: "Non", pro: "24h/7j" },
  { label: "Rapport de performance", essential: "Non", pro: "Mensuel" },
  { label: "Paiement unique possible", essential: "Non", pro: "897EUR" },
];

const acquisitionPlans: PlanCard[] = [
  {
    name: "Acquisition Essentielle",
    subtitle: "Premier flux de prospects",
    description:
      "Systeme d acquisition automatise cle en main: landing page, formulaire intelligent, chatbot IA et transmission en temps reel.",
    price: "1200EUR/mois",
    extra: "Premiers prospects sous 4-6 semaines",
    features: [
      { label: "Audit et strategie d acquisition", included: true },
      { label: "1 landing page dediee", included: true },
      { label: "Formulaire intelligent de qualification", included: true },
      { label: "Chatbot IA de capture", included: true },
      { label: "Transmission automatique des prospects", included: true },
      { label: "Rapport mensuel ROI", included: true },
      { label: "A/B testing", included: false },
      { label: "Integration CRM avancee", included: false },
      { label: "Tunnels multi-etapes", included: false },
    ],
    cta: "Demarrer l acquisition",
    href: `${contact.contactForm}?plan=acq-starter`,
    accent: "orange",
  },
  {
    name: "Acquisition Pro",
    subtitle: "Volume et qualification avancee",
    description:
      "Systeme complet avec tunnels multi-etapes, A/B testing continu et integration CRM pour maximiser vos prospects qualifies.",
    price: "1800EUR/mois",
    extra: "Premiers prospects sous 4-6 semaines",
    features: [
      { label: "Audit et strategie complete", included: true },
      { label: "Jusqu a 3 landing pages dediees", included: true },
      { label: "Tunnels de conversion optimises", included: true },
      { label: "Chatbot IA avance (qualification + relance)", included: true },
      { label: "A/B testing continu", included: true },
      { label: "Integration CRM ou email", included: true },
      { label: "Automatisation des relances", included: true },
      { label: "Rapport hebdomadaire + tableau de bord", included: true },
      { label: "Support prioritaire dedie", included: true },
    ],
    cta: "Demarrer Acquisition Pro",
    href: `${contact.contactForm}?plan=acq-growth`,
    highlighted: true,
    accent: "green",
  },
];

const guarantees = [
  { title: "Sans engagement", text: "Resiliez a tout moment, sans penalite." },
  { title: "Support reactif", text: "Reponse sous 24h par email ou telephone." },
  { title: "Modifications incluses", text: "Textes, photos, ajustements compris." },
  { title: "SSL & securite", text: "Certificat SSL et sauvegardes automatiques." },
  { title: "Performance garantie", text: "Score Google Lighthouse 95+." },
  { title: "Mise en ligne rapide", text: "En ligne en 2 a 3 semaines." },
];

const pricingFaq = [
  {
    q: "Y a-t-il des frais de setup ou d engagement ?",
    a: "Non, aucun frais cache ni engagement de duree. Les tarifs affiches incluent creation, hebergement, maintenance et modifications.",
  },
  {
    q: "En combien de temps mon site sera-t-il en ligne ?",
    a: "Entre 2 et 3 semaines apres validation et reception des contenus. Avec blog, comptez 3 a 4 semaines.",
  },
  {
    q: "Que signifie paiement unique pour le Site Pro ?",
    a: "L option 897EUR couvre la creation complete du site. Hebergement et maintenance restent ensuite optionnels a 50EUR/mois.",
  },
  {
    q: "Puis-je combiner site web et acquisition client ?",
    a: "Oui, et c est recommande. Cette combinaison est la plus efficace pour maximiser les resultats.",
  },
  {
    q: "Comment fonctionne le systeme d acquisition ?",
    a: "Nous deployons landing pages, formulaires intelligents et chatbots IA qui capturent, qualifient et transmettent vos prospects en temps reel.",
  },
  {
    q: "Puis-je changer de formule en cours de route ?",
    a: "Oui. Vous pouvez monter en gamme ou ajuster votre offre selon vos besoins.",
  },
];

export default function PricingPage() {
  return (
    <>
      <Header />
      <main id="top">
        <section className="dark-section pb-12 pt-14 md:pb-16 md:pt-20">
          <div className="container-shell">
            <p className="text-sm font-medium text-slate-400">Accueil / Tarifs</p>
            <div className="mt-8 max-w-4xl" data-reveal data-delay="40ms">
              <span className="badge-chip">TARIFICATION TRANSPARENTE</span>
              <h1 className="mt-5 text-5xl font-bold leading-[0.98] tracking-tight text-slate-100 md:text-7xl">
                Des tarifs <span className="title-gradient">clairs et orientes resultats</span>
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-slate-300 md:text-3xl">
                Pas de surprises, pas de frais caches. Creation, hebergement, maintenance et
                modifications: tout inclus. <strong>Sans engagement.</strong>
              </p>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {trustStats.map((stat, index) => (
                <article
                  key={stat.label}
                  data-reveal
                  data-delay={`${70 + index * 30}ms`}
                  className="dark-card rounded-2xl px-5 py-4"
                >
                  <p className="text-3xl font-bold text-slate-100 md:text-4xl">{stat.value}</p>
                  <p className="mt-1 text-sm text-slate-300 md:text-lg">{stat.label}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="dark-section pt-6">
          <div className="container-shell">
            <div className="mx-auto max-w-4xl text-center" data-reveal data-delay="40ms">
              <span className="badge-chip">DEVELOPPEMENT WEB</span>
              <h2 className="mt-5 text-4xl font-bold tracking-tight text-slate-100 md:text-6xl">
                Votre site web <span className="title-gradient">par abonnement</span>
              </h2>
              <p className="mt-4 text-base text-slate-300 md:text-2xl">
                Creation, hebergement, maintenance et modifications dans un abonnement mensuel lisible.
              </p>
            </div>

            <div className="mx-auto mt-10 grid max-w-6xl gap-6 lg:grid-cols-2">
              {webPlans.map((plan, index) => (
                <PlanCardView key={plan.name} plan={plan} delay={`${70 + index * 40}ms`} />
              ))}
            </div>

            <p className="mt-6 text-center text-sm text-slate-400 md:text-lg">
              Mise en ligne en 2-3 semaines, aucun frais de setup, modifications textes et photos
              incluses.
            </p>
          </div>
        </section>

        <section className="dark-section bg-[#091f40]/60 pt-8">
          <div className="container-shell">
            <div className="mx-auto max-w-5xl text-center" data-reveal data-delay="40ms">
              <span className="badge-chip">COMPARATIF</span>
              <h2 className="mt-5 text-4xl font-bold tracking-tight text-slate-100 md:text-6xl">
                Essentiel vs Pro <span className="title-gradient">en un coup d oeil</span>
              </h2>
            </div>

            <div className="mx-auto mt-8 max-w-5xl overflow-hidden rounded-2xl border border-[#2b537f]">
              <div className="grid grid-cols-3 bg-[#122f53]">
                <div className="px-4 py-4 text-xs font-bold uppercase tracking-wider text-slate-400 md:text-sm">
                  Fonctionnalite
                </div>
                <div className="border-l border-[#2b537f] px-4 py-4 text-center text-sm font-bold text-[#79acff] md:text-lg">
                  Essentiel
                </div>
                <div className="border-l border-[#2b537f] bg-[#163862] px-4 py-4 text-center text-sm font-bold text-[#79acff] md:text-lg">
                  Pro
                </div>
              </div>
              {webComparison.map((row, index) => (
                <div
                  key={row.label}
                  className={`grid grid-cols-3 border-t border-[#2b537f] ${
                    index % 2 === 0 ? "bg-[#0f294b]" : "bg-[#122f53]"
                  }`}
                >
                  <div className="px-4 py-3 text-sm text-slate-200 md:text-lg">{row.label}</div>
                  <div className="border-l border-[#2b537f] px-4 py-3 text-center text-sm text-slate-300 md:text-lg">
                    {row.essential}
                  </div>
                  <div className="border-l border-[#2b537f] bg-[#15345b] px-4 py-3 text-center text-sm font-semibold text-emerald-300 md:text-lg">
                    {row.pro}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="dark-section pt-10">
          <div className="container-shell">
            <div className="mx-auto max-w-4xl text-center" data-reveal data-delay="40ms">
              <span className="badge-chip border-orange-500/30 bg-orange-500/10 text-orange-300">
                SYSTEME D ACQUISITION CLIENTS
              </span>
              <h2 className="mt-5 text-4xl font-bold tracking-tight text-slate-100 md:text-6xl">
                Des prospects qualifies <span className="title-gradient">en automatique</span>
              </h2>
              <p className="mt-4 text-base text-slate-300 md:text-2xl">
                Tunnels de conversion, chatbots IA, formulaires intelligents et pilotage ROI.
              </p>
            </div>

            <div className="mx-auto mt-10 grid max-w-6xl gap-6 lg:grid-cols-2">
              {acquisitionPlans.map((plan, index) => (
                <PlanCardView key={plan.name} plan={plan} delay={`${70 + index * 40}ms`} />
              ))}
            </div>
          </div>
        </section>

        <section className="dark-section bg-[#091f40]/60 pt-10">
          <div className="container-shell">
            <div className="mx-auto max-w-4xl text-center" data-reveal data-delay="40ms">
              <span className="badge-chip border-emerald-500/30 bg-emerald-500/10 text-emerald-300">
                INCLUS DANS CHAQUE FORMULE
              </span>
              <h2 className="mt-5 text-4xl font-bold tracking-tight text-slate-100 md:text-6xl">
                Ce que vous obtenez <span className="title-gradient">toujours</span>
              </h2>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {guarantees.map((item, index) => (
                <article
                  key={item.title}
                  data-reveal
                  data-delay={`${70 + index * 30}ms`}
                  className="dark-card rounded-2xl p-5"
                >
                  <h3 className="text-xl font-bold text-slate-100 md:text-2xl">{item.title}</h3>
                  <p className="mt-2 text-sm text-slate-300 md:text-lg">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="dark-section pt-10">
          <div className="container-shell">
            <div data-reveal data-delay="40ms" className="dark-panel rounded-[34px] px-8 py-12 text-center">
              <span className="badge-chip border-emerald-500/30 bg-emerald-500/10 text-emerald-300">
                OFFRE COMBINEE - RECOMMANDEE
              </span>
              <h2 className="mx-auto mt-5 max-w-5xl text-4xl font-bold tracking-tight text-slate-100 md:text-6xl">
                Site web + Acquisition - <span className="title-gradient">la strategie complete</span>
              </h2>
              <p className="mx-auto mt-5 max-w-4xl text-base leading-relaxed text-slate-300 md:text-2xl">
                Un site qui convertit + un systeme automatise d acquisition = la combinaison ideale pour
                multiplier vos prospects qualifies.
              </p>

              <div className="mx-auto mt-8 grid max-w-4xl gap-4 sm:grid-cols-4">
                <div className="rounded-2xl border border-[#295ba2] bg-[#12345f] px-4 py-4">
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#77abff]">Site Web</p>
                  <p className="mt-1 text-3xl font-bold text-[#77abff]">200EUR</p>
                  <p className="text-xs text-slate-400">/mois</p>
                </div>
                <div className="grid place-items-center text-4xl font-black text-slate-500">+</div>
                <div className="rounded-2xl border border-orange-500/40 bg-orange-500/10 px-4 py-4">
                  <p className="text-xs font-semibold uppercase tracking-wider text-orange-300">Acquisition</p>
                  <p className="mt-1 text-3xl font-bold text-orange-300">1200EUR</p>
                  <p className="text-xs text-slate-400">/mois</p>
                </div>
                <div className="rounded-2xl border border-emerald-500/40 bg-emerald-500/10 px-4 py-4">
                  <p className="text-xs font-semibold uppercase tracking-wider text-emerald-300">Resultat</p>
                  <p className="mt-1 text-3xl font-bold text-emerald-300">x3</p>
                  <p className="text-xs text-slate-400">prospects/mois</p>
                </div>
              </div>

              <article className="mx-auto mt-8 max-w-3xl rounded-2xl border border-[#2a537f] bg-[#102d4f] p-6 text-left">
                <p className="text-base leading-relaxed text-slate-300 md:text-xl">
                  "Avant Digital Renforcy, je payais 15% de commission a Habitatpresto. Maintenant j ai
                  mon propre site avec formulaire de devis automatique et un systeme de relance.{" "}
                  <strong>3x plus de prospects, 0% de commission.</strong>"
                </p>
                <p className="mt-3 text-sm font-semibold text-slate-100 md:text-lg">Karim B. - KBM Renovation</p>
              </article>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <Link href={`${contact.contactForm}?plan=combo`} className="btn-primary">
                  Devis combine gratuit
                </Link>
                <Link href={contact.contactForm} className="btn-outline">
                  Consultation 30 min
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section id="pricing-faq" className="dark-section bg-[#091f40]/60 pt-10">
          <div className="container-shell">
            <div className="mx-auto max-w-4xl text-center" data-reveal data-delay="40ms">
              <span className="badge-chip border-cyan-500/30 bg-cyan-500/10 text-cyan-300">
                QUESTIONS FREQUENTES
              </span>
              <h2 className="mt-5 text-4xl font-bold tracking-tight text-slate-100 md:text-6xl">
                Tout ce que vous devez <span className="title-gradient">savoir</span>
              </h2>
            </div>

            <div className="mx-auto mt-10 grid max-w-5xl gap-4">
              {pricingFaq.map((item, index) => (
                <details
                  key={item.q}
                  data-reveal
                  data-delay={`${70 + index * 30}ms`}
                  className="dark-card rounded-2xl p-6"
                >
                  <summary className="cursor-pointer list-none text-lg font-semibold text-slate-100 md:text-2xl">
                    {item.q}
                  </summary>
                  <p className="mt-4 text-base leading-relaxed text-slate-300 md:text-xl">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="dark-section pt-8">
          <div className="container-shell">
            <div data-reveal data-delay="50ms" className="dark-panel rounded-[34px] px-8 py-12 text-center">
              <span className="badge-chip">COMMENCONS ENSEMBLE</span>
              <h2 className="mx-auto mt-5 max-w-5xl text-4xl font-bold tracking-tight text-slate-100 md:text-6xl">
                Pret a <span className="title-gradient">booster votre presence digitale</span> ?
              </h2>
              <p className="mx-auto mt-5 max-w-4xl text-base leading-relaxed text-slate-300 md:text-2xl">
                Audit gratuit de 30 minutes. Aucun engagement. Nous analysons votre situation et vous
                proposons la formule la plus adaptee.
              </p>

              <div className="mt-6 flex flex-wrap items-center justify-center gap-5 text-sm text-slate-300 md:text-lg">
                <span>Reponse sous 24h</span>
                <span>Sans engagement</span>
                <span>Devis gratuit</span>
                <span>Aucun frais cache</span>
              </div>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <Link href={contact.contactForm} className="btn-primary">
                  Consultation Gratuite
                </Link>
                <Link href="/pricing#pricing-faq" className="btn-outline">
                  Voir la FAQ
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

function PlanCardView({ plan, delay }: { plan: PlanCard; delay: string }) {
  const borderClass =
    plan.accent === "orange"
      ? "border-orange-500/60"
      : plan.accent === "green"
        ? "border-emerald-500/60"
        : "border-[#2a537f]";
  const priceClass =
    plan.accent === "orange"
      ? "text-orange-300"
      : plan.accent === "green"
        ? "text-emerald-300"
        : "text-slate-100";

  return (
    <article
      data-reveal
      data-delay={delay}
      className={`dark-card rounded-3xl border p-6 ${borderClass} ${plan.highlighted ? "shadow-[0_0_0_1px_rgba(120,173,255,0.35)]" : ""}`}
    >
      {plan.highlighted ? (
        <div className="mb-4 inline-flex rounded-full bg-[#2f56ff] px-3 py-1 text-xs font-bold text-white">
          Le plus populaire
        </div>
      ) : null}

      <h3 className="text-2xl font-bold text-slate-100 md:text-3xl">{plan.name}</h3>
      <p className="mt-1 text-sm font-semibold text-slate-300 md:text-lg">{plan.subtitle}</p>
      <p className="mt-4 text-sm leading-relaxed text-slate-300 md:text-xl">{plan.description}</p>

      <div className="mt-5 border-t border-[#2a537f] pt-4">
        <p className={`text-4xl font-black md:text-5xl ${priceClass}`}>{plan.price}</p>
        {plan.extra ? <p className="mt-1 text-sm text-slate-400 md:text-lg">{plan.extra}</p> : null}
      </div>

      <ul className="mt-5 space-y-2">
        {plan.features.map((feature) => (
          <li key={feature.label} className={`flex gap-3 text-sm md:text-lg ${feature.included ? "text-slate-300" : "text-slate-500"}`}>
            <span className={feature.included ? "text-emerald-400" : "text-slate-500"}>{feature.included ? "+" : "-"}</span>
            <span className={feature.included ? "" : "line-through"}>{feature.label}</span>
          </li>
        ))}
      </ul>

      <div className="mt-6 border-t border-[#2a537f] pt-5">
        <Link href={plan.href} className={plan.highlighted ? "btn-primary w-full justify-center" : "btn-outline w-full justify-center"}>
          {plan.cta}
        </Link>
        <p className="mt-2 text-center text-xs text-slate-500 md:text-sm">
          Sans engagement - Resiliable a tout moment
        </p>
      </div>
    </article>
  );
}
