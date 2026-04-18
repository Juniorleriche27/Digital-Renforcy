import Link from "next/link";

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-slate-900">Politique de confidentialité</h1>
      <p className="mt-4 text-sm leading-relaxed text-slate-700">
        Nous collectons uniquement les données nécessaires au traitement des demandes
        de contact (prénom, téléphone, secteur) via le formulaire présent sur le site.
      </p>

      <section className="mt-10 space-y-4 text-sm text-slate-700">
        <p>
          Finalité : recontacter les prospects et préparer un échange commercial
          ou technique.
        </p>
        <p>Base légale : consentement et intérêt légitime de réponse à la demande.</p>
        <p>
          Conservation : durée limitée au suivi commercial. Vous pouvez demander la
          suppression de vos données à tout moment.
        </p>
        <p>Contact RGPD : contact@digitalrenforcy.fr</p>
      </section>

      <div className="mt-10">
        <Link href="/" className="text-sm font-semibold text-brand-600 hover:underline">
          Retour à l&apos;accueil
        </Link>
      </div>
    </main>
  );
}
