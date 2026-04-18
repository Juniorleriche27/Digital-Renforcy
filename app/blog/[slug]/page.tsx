import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import FloatingAssistant from "@/components/FloatingAssistant";
import { articles, getArticleBySlug, type Block } from "@/lib/blog";
import { contact } from "@/lib/data";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};
  return {
    title: `${article.title} — Blog Digital Renforcy`,
    description: article.excerpt,
  };
}

const categoryColors: Record<string, string> = {
  blue: "border-[#315a88] bg-[#12345f] text-[#79acff]",
  orange: "border-orange-500/40 bg-orange-500/10 text-orange-300",
  emerald: "border-emerald-500/40 bg-emerald-500/10 text-emerald-300",
  indigo: "border-indigo-500/40 bg-indigo-500/10 text-indigo-300",
};

function renderBlock(block: Block, index: number) {
  switch (block.type) {
    case "h2":
      return (
        <h2 key={index} className="mt-10 text-2xl font-bold tracking-tight text-slate-100 sm:text-3xl">
          {block.text}
        </h2>
      );
    case "h3":
      return (
        <h3 key={index} className="mt-7 text-xl font-bold text-slate-100 sm:text-2xl">
          {block.text}
        </h3>
      );
    case "p":
      return (
        <p key={index} className="mt-5 text-base leading-relaxed text-slate-300 sm:text-lg">
          {block.text}
        </p>
      );
    case "ul":
      return (
        <ul key={index} className="mt-5 space-y-2">
          {block.items.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-base text-slate-300 sm:text-lg">
              <span className="mt-1 text-emerald-400">→</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );
    case "ol":
      return (
        <ol key={index} className="mt-5 space-y-3">
          {block.items.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-base text-slate-300 sm:text-lg">
              <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[#1a3456] text-xs font-bold text-[#79acff]">
                {i + 1}
              </span>
              <span className="mt-0.5">{item}</span>
            </li>
          ))}
        </ol>
      );
    case "highlight":
      return (
        <div key={index} className="mt-6 rounded-2xl border border-[#3f6bff]/40 bg-[#3f6bff]/10 px-5 py-4">
          <p className="text-base font-semibold leading-relaxed text-[#79acff] sm:text-lg">
            {block.text}
          </p>
        </div>
      );
    case "quote":
      return (
        <blockquote key={index} className="mt-6 rounded-2xl border border-[#264f7b] bg-[#0d2645] px-6 py-5">
          <p className="text-base italic leading-relaxed text-slate-300 sm:text-lg">"{block.text}"</p>
          {block.author && (
            <p className="mt-3 text-sm font-semibold text-slate-400">{block.author}</p>
          )}
        </blockquote>
      );
    default:
      return null;
  }
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const others = articles.filter((a) => a.slug !== slug).slice(0, 3);

  return (
    <>
      <Header />
      <main id="top">
        {/* ── Hero article ── */}
        <section className="dark-section pb-10 pt-14 md:pb-12 md:pt-20">
          <div className="container-shell">
            <div className="flex flex-wrap items-center gap-2 text-sm text-slate-400">
              <Link href="/" className="hover:text-white">Accueil</Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-white">Blog</Link>
              <span>/</span>
              <span className="text-slate-300">{article.category}</span>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <span className={`rounded-full border px-3 py-1 text-xs font-semibold ${categoryColors[article.categoryColor]}`}>
                {article.category}
              </span>
              <span className="text-sm text-slate-400">{article.read}</span>
              <span className="text-sm text-slate-400">{article.date}</span>
            </div>

            <h1 className="mt-5 max-w-4xl text-3xl font-bold leading-tight tracking-tight text-slate-100 sm:text-4xl md:text-5xl">
              {article.title}
            </h1>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-300 sm:text-lg">
              {article.excerpt}
            </p>
          </div>
        </section>

        {/* ── Content + Sidebar ── */}
        <section className="dark-section pt-0">
          <div className="container-shell">
            <div className="grid gap-12 lg:grid-cols-[1fr_320px]">

              {/* Article body */}
              <article className="dark-card rounded-3xl px-6 py-8 sm:px-10 sm:py-10">
                {article.content.map((block, i) => renderBlock(block, i))}

                {/* CTA bottom */}
                <div className="mt-12 rounded-2xl border border-[#2b5685] bg-[#102848] px-6 py-7 text-center">
                  <p className="text-lg font-bold text-slate-100">
                    Prêt à mettre en pratique ces conseils ?
                  </p>
                  <p className="mt-2 text-sm text-slate-300">
                    Audit gratuit de 30 min — Nos experts analysent votre situation et définissent la stratégie adaptée.
                  </p>
                  <div className="mt-5 flex flex-wrap justify-center gap-3">
                    <Link href="/contact" className="btn-primary">
                      Demander mon audit gratuit
                    </Link>
                    <a href={contact.whatsapp} target="_blank" rel="noreferrer" className="btn-outline">
                      💬 WhatsApp
                    </a>
                  </div>
                </div>
              </article>

              {/* Sidebar */}
              <aside className="space-y-5">
                {/* Quick contact */}
                <div className="dark-card rounded-3xl p-6">
                  <h3 className="text-base font-bold text-slate-100">Audit gratuit — 30 min</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-300">
                    Analyse de votre situation, recommandations personnalisées, sans engagement.
                  </p>
                  <Link href="/contact" className="btn-primary mt-4 w-full text-center">
                    Réserver mon audit
                  </Link>
                  <a
                    href={contact.phoneHref}
                    className="mt-3 flex items-center justify-center gap-2 text-sm font-semibold text-slate-300 hover:text-white"
                  >
                    📞 {contact.phone}
                  </a>
                </div>

                {/* Trust badges */}
                <div className="flex flex-wrap gap-2">
                  {["🔒 Sans engagement", "🟢 Réponse 24h", "🛡️ Confidentiel"].map((t) => (
                    <span key={t} className="rounded-full border border-[#264f7b] bg-[#0d2748] px-3 py-1.5 text-xs text-slate-300">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Other articles */}
                {others.length > 0 && (
                  <div className="dark-card rounded-3xl p-6">
                    <h3 className="text-base font-bold text-slate-100">A lire aussi</h3>
                    <ul className="mt-4 space-y-4">
                      {others.map((a) => (
                        <li key={a.slug}>
                          <Link href={`/blog/${a.slug}`} className="group block">
                            <span className={`rounded-full border px-2 py-0.5 text-[10px] font-semibold ${categoryColors[a.categoryColor]}`}>
                              {a.category}
                            </span>
                            <p className="mt-1.5 text-sm font-semibold leading-snug text-slate-200 group-hover:text-white">
                              {a.title}
                            </p>
                            <p className="mt-0.5 text-xs text-slate-400">{a.read}</p>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Back to blog */}
                <Link href="/blog" className="flex items-center gap-2 text-sm font-semibold text-slate-400 hover:text-white">
                  ← Retour au blog
                </Link>
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
