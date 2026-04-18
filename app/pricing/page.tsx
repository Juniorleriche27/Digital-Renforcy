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
  { value: "+60", label: "clients accompagnés" },
  { value: "2-3 sem", label: "mise en ligne moyenne" },
  { value: "95+", label: "score Google Lighthouse" },
  { value: "0€", label: "frais cachés" },
];

const webPlans: PlanCard[] = [
  {
    name: "Site Essentiel",
    subtitle: "Idéal pour démarrer",
    description:
      "Site vitrine professionnel pour lancer votre présence en ligne. Moderne, rapide et visible sur Google dès le lancement.",
    price: "200€/mois",
    features: [
      { label: "Site vitrine jusqu'à 5 pages", included: true },
      { label: "Design professionnel sur mesure", included: true },
      { label: "Optimisation mobile (responsive)", included: true },
      { label: "Hébergement inclus", included: true },
      { label: "Maintenance mensuelle", included: true },
      { label: "Formulaire de contact et devis", included: true },
      { label: "SEO technique de base", included: true },
      { label: "SSL et sécurité inclus", included: true },
      { label: "Pages supplémentaires", included: false },
      { label: "Blog / actualités", included: false },
      { label: "Chatbot IA", included: false },
    ],
    cta: "Choisir Essentiel",
    href: `${contact.contactForm}?plan=web-essentiel`,
    accent: "blue",
  },
  {
    name: "Site Pro",
    subtitle: "Pour maximiser vos résultats",
    description:
      "Site complet avec blog, pages illimitées et chatbot IA. Développez votre autorité et automatisez la capture de prospects 24h/7j.",
    price: "300€/mois",
    extra: "ou 897€ en une fois",
    features: [
      { label: "Pages illimitées", included: true },
      { label: "Design professionnel sur mesure", included: true },
      { label: "Optimisation mobile (responsive)", included: true },
      { label: "Hébergement haute performance", included: true },
      { label: "Maintenance et mises à jour incluses", included: true },
      { label: "Formulaire de contact et devis auto", included: true },
      { label: "SEO technique avancé", included: true },
      { label: "Blog / actualités", included: true },
      { label: "Galerie réalisations", included: true },
      { label: "Chatbot IA personnalisé 24h/7j", included: true },
      { label: "Rapport mensuel de performance", included: true },
    ],
    cta: "Choisir Pro",
    href: `${contact.contactForm}?plan=web-pro`,
    highlighted: true,
    accent: "blue",
  },
];

const webComparison = [
  { label: "Nombre de pages", essential: "Jusqu'à 5", pro: "Illimitées" },
  { label: "Design sur mesure", essential: "Oui", pro: "Oui" },
  { label: "Hébergement", essential: "Inclus", pro: "Haute performance" },
  { label: "SEO", essential: "Basique", pro: "Avancé" },
  { label: "Blog / actualités", essential: "Non", pro: "Oui" },
  { label: "Chatbot IA", essential: "Non", pro: "24h/7j" },
  { label: "Rapport de performance", essential: "Non", pro: "Mensuel" },
  { label: "Paiement unique possible", essential: "Non", pro: "897€" },
];

const acquisitionPlans: PlanCard[] = [
  {
    name: "Acquisition Essentielle",
    subtitle: "Premier flux de prospects",
    description:
      "Système d'acquisition automatisé clé en main : landing page, formulaire intelligent, chatbot IA et transmission en temps réel.",
    price: "1 200€/mois",
    extra: "Premiers prospects sous 4-6 semaines",
    features: [
      { label: "Audit et stratégie d'acquisition", included: true },
      { label: "1 landing page dédiée", included: true },
      { label: "Formulaire intelligent de qualification", included: true },
      { label: "Chatbot IA de capture", included: true },
      { label: "Transmission automatique des prospects", included: true },
      { label: "Rapport mensuel ROI", included: true },
      { label: "A/B testing", included: false },
      { label: "Intégration CRM avancée", included: false },
      { label: "Tunnels multi-étapes", included: false },
    ],
    cta: "Démarrer l'acquisition",
    href: `${contact.contactForm}?plan=acq-starter`,
    accent: "orange",
  },
  {
    name: "Acquisition Pro",
    subtitle: "Volume et qualification avancée",
    description:
      "Système complet avec tunnels multi-étapes, A/B testing continu et intégration CRM pour maximiser vos prospects qualifiés.",
    price: "1 800€/mois",
    extra: "Premiers prospects sous 4-6 semaines",
    features: [
      { label: "Audit et stratégie complète", included: true },
      { label: "Jusqu'à 3 landing pages dédiées", included: true },
      { label: "Tunnels de conversion optimisés", included: true },
      { label: "Chatbot IA avancé (qualification + relance)", included: true },
      { label: "A/B testing continu", included: true },
      { label: "Intégration CRM ou email", included: true },
      { label: "Automatisation des relances", included: true },
      { label: "Rapport hebdomadaire + tableau de bord", included: true },
      { label: "Support prioritaire dédié", included: true },
    ],
    cta: "Démarrer Acquisition Pro",
    href: `${contact.contactForm}?plan=acq-growth`,
    highlighted: true,
    accent: "green",
  },
];

const guarantees = [
  { title: "Sans engagement", text: "Résiliez à tout moment, sans pénalité." },
  { title: "Support réactif", text: "Réponse sous 24h par email ou téléphone." },
  { title: "Modifications incluses", text: "Textes, photos, ajustements compris." },
  { title: "SSL & sécurité", text: "Certificat SSL et sauvegardes automatiques." },
  { title: "Performance garantie", text: "Score Google Lighthouse 95+." },
  { title: "Mise en ligne rapide", text: "En ligne en 2 à 3 semaines." },
];

const pricingFaq = [
  {
    q: "Y a-t-il des frais de setup ou d'engagement ?",
    a: "Non, aucun frais caché ni engagement de durée. Les tarifs affichés incluent création, hébergement, maintenance et modifications.",
  },
  {
    q: "En combien de temps mon site sera-t-il en ligne ?",
    a: "Entre 2 et 3 semaines après validation et réception des contenus. Avec blog, comptez 3 à 4 semaines.",
  },
  {
    q: "Que signifie paiement unique pour le Site Pro ?",
    a: "L'option 897€ couvre la création complète du site. Hébergement et maintenance restent ensuite optionnels à 50€/mois.",
  },
  {
    q: "Puis-je combiner site web et acquisition client ?",
    a: "Oui, et c'est recommandé. Cette combinaison est la plus efficace pour maximiser les résultats.",
  },
  {
    q: "Comment fonctionne le système d'acquisition ?",
    a: "Nous déployons landing pages, formulaires intelligents et chatbots IA qui capturent, qualifient et transmettent vos prospects en temps réel.",
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
                Des tarifs <span className="title-gradient">clairs et orientés résultats</span>
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-slate-300 md:text-3xl">
                Pas de surprises, pas de frais cachés. Création, hébergement, maintenance et
                modifications : tout inclus. <strong>Sans engagement.</strong>
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
              <span className="badge-chip">DÉVELOPPEMENT WEB</span>
              <h2 className="mt-5 text-4xl font-bold tracking-tight text-slate-100 md:text-6xl">
                Votre site web <span className="title-gradient">par abonnement</span>
              </h2>
              <p className="mt-4 text-base text-slate-300 md:text-2xl">
                Création, hébergement, maintenance et modifications dans un abonnement mensuel lisible.
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
                Essentiel vs Pro — <span className="title-gradient">en un coup d'œil</span>
              </h2>
            </div>

            <div className="mx-auto mt-8 max-w-5xl overflow-hidden rounded-2xl border border-[#2b537f]">
              <div className="grid grid-cols-3 bg-[#122f53]">
                <div className="px-4 py-4 text-xs font-bold uppercase tracking-wider text-slate-400 md:text-sm">
                  Fonctionnalité
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
                SYSTÈME D'ACQUISITION CLIENTS
              </span>
              <h2 className="mt-5 text-4xl font-bold tracking-tight text-slate-100 md:text-6xl">
                Des prospects qualifiés <span className="title-gradient">en automatique</span>
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
                OFFRE COMBINÉE — RECOMMANDÉE
              </span>
              <h2 className="mx-auto mt-5 max-w-5xl text-4xl font-bold tracking-tight text-slate-100 md:text-6xl">
                Site web + Acquisition — <span className="title-gradient">la stratégie complète</span>
              </h2>
              <p className="mx-auto mt-5 max-w-4xl text-base leading-relaxed text-slate-300 md:text-2xl">
                Un site qui convertit + un système automatisé d'acquisition = la combinaison idéale pour
                multiplier vos prospects qualifiés.
              </p>

              <div className="mx-auto mt-8 grid max-w-4xl gap-4 sm:grid-cols-4">
                <div className="rounded-2xl border border-[#295ba2] bg-[#12345f] px-4 py-4">
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#77abff]">Site Web</p>
                  <p className="mt-1 text-3xl font-bold text-[#77abff]">200€</p>
                  <p className="text-xs text-slate-400">/mois</p>
                </div>
                <div className="grid place-items-center text-4xl font-black text-slate-500">+</div>
                <div className="rounded-2xl border border-orange-500/40 bg-orange-500/10 px-4 py-4">
                  <p className="text-xs font-semibold uppercase tracking-wider text-orange-300">Acquisition</p>
                  <p className="mt-1 text-3xl font-bold text-orange-300">1 200€</p>
                  <p className="text-xs text-slate-400">/mois</p>
                </div>
                <div className="rounded-2xl border border-emerald-500/40 bg-emerald-500/10 px-4 py-4">
                  <p className="text-xs font-semibold uppercase tracking-wider text-emerald-300">Résultat</p>
                  <p className="mt-1 text-3xl font-bold text-emerald-300">x3</p>
                  <p className="text-xs text-slate-400">prospects/mois</p>
                </div>
              </div>

              <article className="mx-auto mt-8 max-w-3xl rounded-2xl border border-[#2a537f] bg-[#102d4f] p-6 text-left">
                <p className="text-base leading-relaxed text-slate-300 md:text-xl">
                  "Avant Digital Renforcy, je payais 15% de commission à Habitatpresto. Maintenant j'ai
                  mon propre site avec formulaire de devis automatique et un système de relance.{" "}
                  <strong>3x plus de prospects, 0% de commission.</strong>"
                </p>
                <p className="mt-3 text-sm font-semibold text-slate-100 md:text-lg">Karim B. — KBM Rénovation</p>
              </article>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <Link href={`${contact.contactForm}?plan=combo`} className="btn-primary">
                  Devis combiné gratuit
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
                QUESTIONS FRÉQUENTES
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
              <span className="badge-chip">COMMENÇONS ENSEMBLE</span>
              <h2 className="mx-auto mt-5 max-w-5xl text-4xl font-bold tracking-tight text-slate-100 md:text-6xl">
                Prêt à <span className="title-gradient">booster votre présence digitale</span> ?
              </h2>
              <p className="mx-auto mt-5 max-w-4xl text-base leading-relaxed text-slate-300 md:text-2xl">
                Audit gratuit de 30 minutes. Aucun engagement. Nous analysons votre situation et vous
                proposons la formule la plus adaptée.
              </p>

              <div className="mt-6 flex flex-wrap items-center justify-center gap-5 text-sm text-slate-300 md:text-lg">
                <span>Réponse sous 24h</span>
                <span>Sans engagement</span>
                <span>Devis gratuit</span>
                <span>Aucun frais caché</span>
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
          Sans engagement — Résiliable à tout moment
        </p>
      </div>
    </article>
  );
}
