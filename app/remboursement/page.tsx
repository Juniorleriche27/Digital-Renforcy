import Link from "next/link";

export default function RemboursementPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
      <Link href="/" className="inline-flex items-center gap-2 text-sm text-[#8aa5c8] hover:text-slate-200 mb-10">
        ← Retour à l&apos;accueil
      </Link>

      <h1 className="font-display text-3xl font-bold text-slate-100 sm:text-4xl">Politique de remboursement</h1>
      <p className="mt-3 text-sm text-[#8aa5c8]">Compte tenu de la nature des prestations sur mesure proposées par Ibrahim BAMBA, les conditions suivantes s&apos;appliquent.</p>

      <div className="mt-10 space-y-6">

        <section className="rounded-2xl border border-[#1e3a60]/60 bg-[#0c1830]/60 p-6">
          <h2 className="font-display text-sm font-bold uppercase tracking-widest text-[#6694ff] mb-3">Art. 1 — Principe général</h2>
          <p className="text-sm text-[#8aa5c8]">Les prestations proposées constituent des services sur mesure réalisés à la demande spécifique du Client. Les conditions de remboursement varient selon la situation décrite ci-dessous.</p>
        </section>

        <section className="rounded-2xl border border-[#1e3a60]/60 bg-[#0c1830]/60 p-6">
          <h2 className="font-display text-sm font-bold uppercase tracking-widest text-[#6694ff] mb-3">Art. 2 — Droit légal de rétractation (Clients particuliers)</h2>
          <p className="text-sm text-[#8aa5c8]">Conformément aux articles L.221-18 et suivants du Code de la consommation, le Client particulier exerçant valablement son droit de rétractation dans le délai légal de <strong className="text-slate-300">14 jours calendaires</strong>, sans que la prestation n&apos;ait été pleinement exécutée, bénéficie d&apos;un <strong className="text-slate-300">remboursement intégral</strong> sous 14 jours suivant la réception de la notification.</p>
        </section>

        <section className="rounded-2xl border border-[#1e3a60]/60 bg-[#0c1830]/60 p-6">
          <h2 className="font-display text-sm font-bold uppercase tracking-widest text-[#6694ff] mb-3">Art. 3 — Annulation avant démarrage des travaux</h2>
          <p className="text-sm text-[#8aa5c8]">En cas d&apos;annulation après expiration du délai de rétractation, mais avant tout démarrage effectif des travaux, <strong className="text-slate-300">l&apos;acompte versé reste intégralement acquis</strong> au Prestataire en compensation de la réservation du planning et des premières démarches. Aucun remboursement au titre de l&apos;acompte.</p>
        </section>

        <section className="rounded-2xl border border-[#1e3a60]/60 bg-[#0c1830]/60 p-6">
          <h2 className="font-display text-sm font-bold uppercase tracking-widest text-[#6694ff] mb-3">Art. 4 — Annulation après démarrage des travaux</h2>
          <p className="text-sm text-[#8aa5c8]"><strong className="text-slate-300">Aucun remboursement</strong>. Le Client reste redevable de l&apos;intégralité des sommes correspondant au travail accompli jusqu&apos;à la date d&apos;annulation, évaluées au prorata, même si ce montant est supérieur à l&apos;acompte déjà versé. Une facture de solde est émise par le Prestataire.</p>
        </section>

        <section className="rounded-2xl border border-[#1e3a60]/60 bg-[#0c1830]/60 p-6">
          <h2 className="font-display text-sm font-bold uppercase tracking-widest text-[#6694ff] mb-3">Art. 5 — Remboursement en cas de défaillance du Prestataire</h2>
          <p className="text-sm text-[#8aa5c8]">En cas de défaillance avérée, grave et imputable au Prestataire (inexécution totale ou partielle des livrables définis dans le devis, non justifiée par un manquement du Client), un remboursement partiel ou total pourra être accordé à l&apos;issue d&apos;un échange amiable. Le montant est déterminé en fonction de l&apos;étendue de la défaillance et des travaux réalisés. Ibrahim BAMBA s&apos;engage à traiter toute réclamation de bonne foi.</p>
        </section>

        <section className="rounded-2xl border border-[#1e3a60]/60 bg-[#0c1830]/60 p-6">
          <h2 className="font-display text-sm font-bold uppercase tracking-widest text-[#6694ff] mb-3">Art. 6 — Procédure de demande</h2>
          <div className="space-y-3 text-sm text-[#8aa5c8]">
            <p>Toute demande doit être adressée à <a href="mailto:hello@digitalrenforcy.com" className="text-[#6694ff] hover:underline">hello@digitalrenforcy.com</a> en précisant :</p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>Nom et prénom du Client</li>
              <li>Référence du devis ou de la facture</li>
              <li>Date de la commande</li>
              <li>Motifs détaillés de la demande</li>
              <li>Tout justificatif utile</li>
            </ul>
            <div className="grid sm:grid-cols-3 gap-3 mt-4">
              <div className="rounded-xl border border-[#1e3a60]/40 bg-[#080f20]/60 p-3 text-center">
                <p className="text-slate-300 font-bold text-lg font-display">48h</p>
                <p className="text-xs text-[#6a88aa] mt-1">Accusé de réception</p>
              </div>
              <div className="rounded-xl border border-[#1e3a60]/40 bg-[#080f20]/60 p-3 text-center">
                <p className="text-slate-300 font-bold text-lg font-display">10j</p>
                <p className="text-xs text-[#6a88aa] mt-1">Réponse motivée</p>
              </div>
              <div className="rounded-xl border border-[#1e3a60]/40 bg-[#080f20]/60 p-3 text-center">
                <p className="text-slate-300 font-bold text-lg font-display">14j</p>
                <p className="text-xs text-[#6a88aa] mt-1">Remboursement effectué</p>
              </div>
            </div>
            <p className="text-xs text-[#6a88aa]">Le remboursement s&apos;effectue par le même moyen de paiement que lors du règlement initial, sauf accord contraire des parties.</p>
          </div>
        </section>

      </div>

      <div className="mt-10 flex flex-wrap gap-4 text-sm text-[#6694ff]">
        <Link href="/legal" className="hover:underline">Mentions légales</Link>
        <Link href="/cgu" className="hover:underline">CGV</Link>
        <Link href="/privacy" className="hover:underline">Politique de confidentialité</Link>
      </div>
    </main>
  );
}
