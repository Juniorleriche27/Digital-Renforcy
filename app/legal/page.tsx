import Link from "next/link";

export default function LegalPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-slate-900">Mentions legales</h1>
      <p className="mt-4 text-sm leading-relaxed text-slate-700">
        Ce site est edite par Digital Renforcy. Les informations presentes sont
        fournies a titre informatif et peuvent etre mises a jour sans preavis.
      </p>

      <section className="mt-10 space-y-4 text-sm text-slate-700">
        <p>
          Activite: conception et developpement de solutions web et automatisation
          digitale.
        </p>
        <p>Contact: contact@digitalrenforcy.fr - +33 6 35 32 04 40</p>
        <p>Adresse: 78 Av. des Champs-Elysees, Bureau 326, 75008 Paris</p>
      </section>

      <div className="mt-10">
        <Link href="/" className="text-sm font-semibold text-brand-600 hover:underline">
          Retour a l accueil
        </Link>
      </div>
    </main>
  );
}
