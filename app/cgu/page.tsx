import Link from "next/link";

export default function CguPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-slate-900">Conditions generales d utilisation</h1>
      <p className="mt-4 text-sm leading-relaxed text-slate-700">
        L utilisation du site Digital Renforcy implique l acceptation des presentes
        conditions. Le site est accessible a titre informatif et commercial.
      </p>

      <section className="mt-10 space-y-4 text-sm text-slate-700">
        <p>
          Disponibilite: nous mettons en oeuvre les moyens raisonnables pour assurer
          un acces continu au site.
        </p>
        <p>
          Responsabilite: Digital Renforcy ne peut etre tenu responsable des dommages
          indirects lies a l utilisation du site.
        </p>
        <p>
          Propriete intellectuelle: les contenus, textes et elements graphiques du site
          sont proteges et ne peuvent etre reproduits sans autorisation.
        </p>
      </section>

      <div className="mt-10">
        <Link href="/" className="text-sm font-semibold text-brand-600 hover:underline">
          Retour a l accueil
        </Link>
      </div>
    </main>
  );
}
