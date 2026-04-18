import Link from "next/link";

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-slate-900">Politique de confidentialite</h1>
      <p className="mt-4 text-sm leading-relaxed text-slate-700">
        Nous collectons uniquement les donnees necessaires au traitement des demandes
        de contact (prenom, telephone, secteur) via le formulaire present sur le site.
      </p>

      <section className="mt-10 space-y-4 text-sm text-slate-700">
        <p>
          Finalite: recontacter les prospects et preparer un echange commercial
          ou technique.
        </p>
        <p>Base legale: consentement et interet legitime de reponse a la demande.</p>
        <p>
          Conservation: duree limitee au suivi commercial. Vous pouvez demander la
          suppression de vos donnees a tout moment.
        </p>
        <p>Contact RGPD: contact@digitalrenforcy.fr</p>
      </section>

      <div className="mt-10">
        <Link href="/" className="text-sm font-semibold text-brand-600 hover:underline">
          Retour a l accueil
        </Link>
      </div>
    </main>
  );
}
