import Link from "next/link";

export default function CguPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-slate-900">Conditions générales d&apos;utilisation</h1>
      <p className="mt-4 text-sm leading-relaxed text-slate-700">
        L&apos;utilisation du site Digital Renforcy implique l&apos;acceptation des présentes
        conditions. Le site est accessible à titre informatif et commercial.
      </p>

      <section className="mt-10 space-y-4 text-sm text-slate-700">
        <p>
          Disponibilité : nous mettons en œuvre les moyens raisonnables pour assurer
          un accès continu au site.
        </p>
        <p>
          Responsabilité : Digital Renforcy ne peut être tenu responsable des dommages
          indirects liés à l&apos;utilisation du site.
        </p>
        <p>
          Propriété intellectuelle : les contenus, textes et éléments graphiques du site
          sont protégés et ne peuvent être reproduits sans autorisation.
        </p>
      </section>

      <div className="mt-10">
        <Link href="/" className="text-sm font-semibold text-brand-600 hover:underline">
          Retour à l&apos;accueil
        </Link>
      </div>
    </main>
  );
}
