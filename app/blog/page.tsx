import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import FloatingAssistant from "@/components/FloatingAssistant";

const featuredArticle = {
  category: "Methode",
  read: "8 min de lecture",
  date: "10 Mars 2025",
  title: "La methode hybride Web x Acquisition : comment transformer 1EUR de pub en 3EUR de CA",
  text: "Notre methode combine un site web intelligent et des campagnes Google/Meta Ads pour generer des conversions mesurables des le premier mois.",
  href: "/blog/methode-hybride-web-acquisition-renovation-formation",
};

const articles = [
  {
    emoji: "Renovation",
    category: "Renovation",
    read: "7 min",
    title: "Artisan : comment trouver des clients sur Internet sans commission",
    text: "Arretez de payer 15% de commission aux plateformes de mise en relation. Voici comment generer vos propres leads avec Google Ads et Meta Ads.",
    date: "8 Mars 2025",
    href: "/blog/artisan-renovation-trouver-clients-internet",
  },
  {
    emoji: "Site",
    category: "Site Intelligent",
    read: "5 min",
    title: "Pourquoi un artisan sans site web perd des clients chaque jour",
    text: "73% des Francais cherchent un artisan sur Google avant de l appeler. Sans site web professionnel, vous perdez ces clients potentiels.",
    date: "2 Mars 2025",
    href: "/blog/site-web-artisan-indispensable",
  },
  {
    emoji: "Formation",
    category: "Formation",
    read: "9 min",
    title: "Remplir ses sessions de formation avec Google Ads : guide complet",
    text: "Strategie pas a pas pour organisme de formation : mots-cles, ciblage, annonces et optimisation du cout par inscription.",
    date: "24 Fev 2025",
    href: "/blog/formation-remplir-sessions-google-ads",
  },
  {
    emoji: "Ads",
    category: "Renovation",
    read: "6 min",
    title: "Google Ads vs Leboncoin / MyTradie : quel est le meilleur canal ?",
    text: "Comparatif honnete des plateformes a commission vs publicite directe: couts, qualite des leads et independance.",
    date: "17 Fev 2025",
    href: "/blog/google-ads-vs-leboncoin-artisan",
  },
  {
    emoji: "Checklist",
    category: "Site Intelligent",
    read: "6 min",
    title: "5 elements indispensables sur le site d un organisme de formation",
    text: "Programme detaille, calendrier sessions, bouton CPF visible, preuves et SEO: les fondamentaux d un site qui convertit.",
    date: "10 Fev 2025",
    href: "/blog/site-web-formation-convertir-stagiaires",
  },
  {
    emoji: "Meta",
    category: "Renovation",
    read: "8 min",
    title: "Meta Ads pour la renovation : pourquoi le before/after performe",
    text: "Comment structurer et cibler les visuels before/after pour maximiser les demandes de devis qualifiees.",
    date: "3 Fev 2025",
    href: "/blog/meta-ads-renovation-before-after",
  },
];

export default function BlogPage() {
  return (
    <>
      <Header />
      <main id="top">
        <section className="dark-section pb-12 pt-14 md:pb-16 md:pt-20">
          <div className="container-shell">
            <p className="text-sm font-medium text-slate-400">Accueil / Blog</p>
            <div className="mt-8 max-w-4xl" data-reveal data-delay="40ms">
              <span className="badge-chip">BLOG & RESSOURCES</span>
              <h1 className="mt-5 text-5xl font-bold leading-[0.98] tracking-tight text-slate-100 md:text-7xl">
                Ressources pour <span className="title-gradient">renovation & formation</span>
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-slate-300 md:text-3xl">
                Guides pratiques, etudes de cas et strategies concretes pour maitriser la methode
                hybride Web x Acquisition et transformer votre marketing en machine a leads.
              </p>
            </div>
          </div>
        </section>

        <section className="dark-section pt-4">
          <div className="container-shell">
            <article data-reveal data-delay="60ms" className="dark-panel rounded-3xl p-7 md:p-9">
              <div className="flex flex-wrap items-center gap-2 text-sm text-slate-300 md:text-lg">
                <span className="rounded-full border border-[#315a88] bg-[#12345f] px-3 py-1 text-[#79acff]">
                  {featuredArticle.category}
                </span>
                <span>{featuredArticle.read}</span>
                <span>{featuredArticle.date}</span>
              </div>
              <h2 className="mt-4 text-4xl font-bold leading-tight text-slate-100 md:text-6xl">
                {featuredArticle.title}
              </h2>
              <p className="mt-5 max-w-5xl text-base leading-relaxed text-slate-300 md:text-2xl">
                {featuredArticle.text}
              </p>
              <Link href={featuredArticle.href} className="btn-primary mt-7">
                Lire l article
              </Link>
            </article>
          </div>
        </section>

        <section className="dark-section bg-[#091f40]/60 pt-10">
          <div className="container-shell">
            <div className="mx-auto max-w-4xl text-center" data-reveal data-delay="40ms">
              <h2 className="text-4xl font-bold tracking-tight text-slate-100 md:text-6xl">
                Derniers <span className="title-gradient">articles</span>
              </h2>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {articles.map((article, index) => (
                <article
                  key={article.title}
                  data-reveal
                  data-delay={`${70 + index * 25}ms`}
                  className="dark-card rounded-3xl p-6"
                >
                  <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
                    <span className="rounded-full border border-[#315a88] bg-[#12345f] px-3 py-1 text-xs font-semibold text-[#79acff]">
                      {article.category}
                    </span>
                    <span className="text-xs text-slate-400">{article.read}</span>
                  </div>
                  <h3 className="text-2xl font-bold leading-tight text-slate-100 md:text-3xl">
                    {article.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-slate-300 md:text-lg">{article.text}</p>
                  <div className="mt-5 flex items-center justify-between">
                    <span className="text-xs text-slate-400">{article.date}</span>
                    <Link href={article.href} className="text-sm font-semibold text-[#79acff] hover:text-white">
                      Lire {"->"}
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="dark-section pt-10">
          <div className="container-shell">
            <div data-reveal data-delay="50ms" className="dark-panel rounded-[34px] px-8 py-12 text-center">
              <span className="badge-chip">NEWSLETTER</span>
              <h2 className="mx-auto mt-5 max-w-5xl text-4xl font-bold tracking-tight text-slate-100 md:text-6xl">
                Conseils digitaux <span className="title-gradient">adaptes a votre secteur</span>
              </h2>
              <p className="mx-auto mt-5 max-w-4xl text-base leading-relaxed text-slate-300 md:text-2xl">
                1 email bi-mensuel: les meilleures strategies pour trouver des clients en renovation
                et remplir vos sessions de formation.
              </p>
              <form className="mx-auto mt-8 grid max-w-2xl gap-3 sm:grid-cols-[1fr_auto]">
                <input
                  type="email"
                  placeholder="votre@email.com"
                  className="rounded-xl border border-[#315a86] bg-[#1a3456] px-4 py-3 text-sm text-slate-200 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-[#4a84ff] md:text-lg"
                />
                <button type="button" className="btn-primary">
                  S abonner
                </button>
              </form>
              <p className="mt-4 text-xs text-slate-400 md:text-sm">Zero spam. Desabonnement en 1 clic.</p>
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
