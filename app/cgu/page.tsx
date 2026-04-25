import Link from "next/link";

export default function CguPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
      <Link href="/" className="inline-flex items-center gap-2 text-sm text-[#8aa5c8] hover:text-slate-200 mb-10">
        ← Retour à l&apos;accueil
      </Link>

      <h1 className="font-display text-3xl font-bold text-slate-100 sm:text-4xl">Conditions Générales de Vente</h1>
      <p className="mt-3 text-sm text-[#8aa5c8]">En vigueur à compter de la mise en ligne — Dernière mise à jour : avril 2026</p>

      <div className="mt-10 space-y-6">

        <section className="rounded-2xl border border-[#1e3a60]/60 bg-[#0c1830]/60 p-6">
          <h2 className="font-display text-sm font-bold uppercase tracking-widest text-[#6694ff] mb-3">Préambule</h2>
          <p className="text-sm text-[#8aa5c8]">Les présentes CGV sont établies par Ibrahim BAMBA, entrepreneur individuel auto-entrepreneur, SIRET 95302674700014, code APE 6201Z. Elles définissent les droits et obligations des parties dans le cadre de la fourniture de prestations de services. Toute commande implique l&apos;acceptation pleine et entière des présentes CGV.</p>
        </section>

        <section className="rounded-2xl border border-[#1e3a60]/60 bg-[#0c1830]/60 p-6">
          <h2 className="font-display text-sm font-bold uppercase tracking-widest text-[#6694ff] mb-3">Art. 1 — Identification du Prestataire</h2>
          <ul className="space-y-1 text-sm text-[#8aa5c8]">
            <li><span className="text-slate-300 font-medium">Ibrahim BAMBA</span> — Entrepreneur individuel, Auto-entrepreneur</li>
            <li><span className="text-slate-300 font-medium">SIRET :</span> 95302674700014 — Code APE : 6201Z</li>
            <li><span className="text-slate-300 font-medium">Adresse :</span> 78 Avenue des Champs-Élysées, Bureau 326, 75008 Paris, France</li>
            <li><span className="text-slate-300 font-medium">Email :</span> <a href="mailto:hello@digitalrenforcy.com" className="text-[#6694ff] hover:underline">hello@digitalrenforcy.com</a></li>
            <li><span className="text-slate-300 font-medium">Téléphone :</span> +33 6 35 32 04 40</li>
          </ul>
        </section>

        <section className="rounded-2xl border border-[#1e3a60]/60 bg-[#0c1830]/60 p-6">
          <h2 className="font-display text-sm font-bold uppercase tracking-widest text-[#6694ff] mb-3">Art. 2 — Services proposés</h2>
          <div className="space-y-4 text-sm text-[#8aa5c8]">
            <div>
              <p className="text-slate-300 font-medium mb-1">2.1 Création de solutions digitales</p>
              <p>Conception et développement de sites vitrines, e-commerce et landing pages, création d&apos;interfaces web et mobiles sur mesure, intégration CMS, optimisation UX/UI, maintenance et évolution de sites existants.</p>
            </div>
            <div>
              <p className="text-slate-300 font-medium mb-1">2.2 Systèmes d&apos;acquisition de clients</p>
              <p>Conception de tunnels de vente et pages de capture, génération de leads, automatisation marketing, gestion des réseaux sociaux, campagnes de communication digitale, conseil en stratégie d&apos;acquisition et de conversion.</p>
            </div>
          </div>
        </section>

        <section className="rounded-2xl border border-[#1e3a60]/60 bg-[#0c1830]/60 p-6">
          <h2 className="font-display text-sm font-bold uppercase tracking-widest text-[#6694ff] mb-3">Art. 3 — Formation du contrat</h2>
          <div className="space-y-3 text-sm text-[#8aa5c8]">
            <p><span className="text-slate-300 font-medium">Devis :</span> établi sous 5 jours ouvrés suite à la demande du Client, valable 30 jours calendaires.</p>
            <p><span className="text-slate-300 font-medium">Conclusion :</span> le contrat est conclu à la réception simultanée du devis signé &laquo; Bon pour accord &raquo; et du versement de l&apos;acompte.</p>
            <p><span className="text-slate-300 font-medium">Droit de refus :</span> le Prestataire se réserve le droit de refuser toute commande pour des motifs légitimes.</p>
          </div>
        </section>

        <section className="rounded-2xl border border-[#1e3a60]/60 bg-[#0c1830]/60 p-6">
          <h2 className="font-display text-sm font-bold uppercase tracking-widest text-[#6694ff] mb-3">Art. 4 — Tarifs</h2>
          <div className="space-y-3 text-sm text-[#8aa5c8]">
            <p>Prix exprimés en euros (€). Ibrahim BAMBA bénéficiant de la franchise en base de TVA (art. 293 B CGI), <strong className="text-slate-300">aucune TVA n&apos;est applicable</strong>.</p>
            <p>Les tarifs du devis sont fermes et définitifs. Tout travail supplémentaire hors périmètre fait l&apos;objet d&apos;un avenant préalablement accepté par le Client. Les frais annexes (licences, hébergement, domaines) sont refacturés au coût réel sur justificatifs.</p>
          </div>
        </section>

        <section className="rounded-2xl border border-[#1e3a60]/60 bg-[#0c1830]/60 p-6">
          <h2 className="font-display text-sm font-bold uppercase tracking-widest text-[#6694ff] mb-3">Art. 5 — Modalités de paiement</h2>
          <div className="space-y-3 text-sm text-[#8aa5c8]">
            <p><span className="text-slate-300 font-medium">Échéancier standard :</span> 50 % à la signature du devis (avant démarrage), 50 % solde à la livraison finale (avant mise en ligne).</p>
            <p><span className="text-slate-300 font-medium">Retard de paiement :</span> pénalités au taux légal majoré de 3 points + indemnité forfaitaire de 40 € (art. D.441-5 C. com.).</p>
            <p><span className="text-slate-300 font-medium">Suspension :</span> en cas de non-paiement sous 48h après mise en demeure, le Prestataire peut suspendre les prestations en cours.</p>
          </div>
        </section>

        <section className="rounded-2xl border border-[#1e3a60]/60 bg-[#0c1830]/60 p-6">
          <h2 className="font-display text-sm font-bold uppercase tracking-widest text-[#6694ff] mb-3">Art. 6 — Obligations du Client</h2>
          <ul className="space-y-2 text-sm text-[#8aa5c8] list-disc list-inside">
            <li>Fournir les éléments nécessaires (textes, images, accès) dans les délais convenus</li>
            <li>Désigner un interlocuteur unique disposant des pouvoirs de validation</li>
            <li>Répondre aux sollicitations sous 7 jours ouvrés</li>
            <li>Garantir la liberté de droits sur tous les contenus fournis</li>
            <li>Respecter les échéances de paiement et ne pas utiliser les livrables avant paiement intégral</li>
          </ul>
        </section>

        <section className="rounded-2xl border border-[#1e3a60]/60 bg-[#0c1830]/60 p-6">
          <h2 className="font-display text-sm font-bold uppercase tracking-widest text-[#6694ff] mb-3">Art. 7 — Obligations du Prestataire</h2>
          <p className="text-sm text-[#8aa5c8]">Le Prestataire s&apos;engage à exécuter les prestations avec soin et professionnalisme, à informer le Client de tout événement affectant le projet, à respecter la confidentialité des informations communiquées, et à soumettre les livrables pour validation. <strong className="text-slate-300">Obligation de moyens et non de résultat</strong>, sauf stipulation contraire dans le devis.</p>
        </section>

        <section className="rounded-2xl border border-[#1e3a60]/60 bg-[#0c1830]/60 p-6">
          <h2 className="font-display text-sm font-bold uppercase tracking-widest text-[#6694ff] mb-3">Art. 8 — Délais d&apos;exécution</h2>
          <p className="text-sm text-[#8aa5c8]">Les délais figurant dans le devis sont indicatifs et conditionnés à la réception des éléments et validations du Client dans les temps. Tout retard imputable au Client entraîne un report équivalent des délais de livraison, sans faute du Prestataire.</p>
        </section>

        <section className="rounded-2xl border border-[#1e3a60]/60 bg-[#0c1830]/60 p-6">
          <h2 className="font-display text-sm font-bold uppercase tracking-widest text-[#6694ff] mb-3">Art. 9 — Livraison, recette et validation</h2>
          <div className="space-y-3 text-sm text-[#8aa5c8]">
            <p><span className="text-slate-300 font-medium">Délai de validation :</span> 7 jours ouvrés à compter de la réception. Passé ce délai sans retour écrit, les livrables sont réputés validés tacitement.</p>
            <p><span className="text-slate-300 font-medium">Révisions :</span> le nombre de cycles de révisions est précisé dans le devis. Toute demande hors périmètre fait l&apos;objet d&apos;un avenant tarifaire.</p>
            <p><span className="text-slate-300 font-medium">Livraison finale :</span> après validation complète et règlement intégral du solde. La mise en ligne vaut réception définitive.</p>
          </div>
        </section>

        <section className="rounded-2xl border border-[#1e3a60]/60 bg-[#0c1830]/60 p-6">
          <h2 className="font-display text-sm font-bold uppercase tracking-widest text-[#6694ff] mb-3">Art. 10 — Droit de rétractation</h2>
          <div className="space-y-3 text-sm text-[#8aa5c8]">
            <p><span className="text-slate-300 font-medium">Clients particuliers :</span> délai légal de 14 jours calendaires (art. L.221-18 C. conso.). Notification par email à <a href="mailto:hello@digitalrenforcy.com" className="text-[#6694ff] hover:underline">hello@digitalrenforcy.com</a>. Remboursement intégral sous 14 jours.</p>
            <p><span className="text-slate-300 font-medium">Exception :</span> aucun droit de rétractation pour les services pleinement exécutés avec l&apos;accord préalable exprès du Client (art. L.221-28 C. conso.).</p>
            <p><span className="text-slate-300 font-medium">Clients professionnels (B2B) :</span> droit de rétractation non applicable.</p>
          </div>
        </section>

        <section className="rounded-2xl border border-[#1e3a60]/60 bg-[#0c1830]/60 p-6">
          <h2 className="font-display text-sm font-bold uppercase tracking-widest text-[#6694ff] mb-3">Art. 11 — Annulation et résiliation</h2>
          <div className="space-y-3 text-sm text-[#8aa5c8]">
            <p><span className="text-slate-300 font-medium">Avant démarrage :</span> l&apos;acompte reste intégralement acquis au Prestataire.</p>
            <p><span className="text-slate-300 font-medium">Après démarrage :</span> le Client est redevable de l&apos;intégralité des sommes correspondant aux travaux réalisés, évaluées au prorata.</p>
            <p><span className="text-slate-300 font-medium">Résiliation pour faute du Prestataire :</span> après mise en demeure restée sans effet 15 jours. Remboursement des prestations non réalisées.</p>
            <p><span className="text-slate-300 font-medium">Résiliation pour faute du Client :</span> après mise en demeure sans effet 8 jours. Les sommes perçues restent définitivement acquises au Prestataire.</p>
          </div>
        </section>

        <section className="rounded-2xl border border-[#1e3a60]/60 bg-[#0c1830]/60 p-6">
          <h2 className="font-display text-sm font-bold uppercase tracking-widest text-[#6694ff] mb-3">Art. 12 — Propriété intellectuelle et cession de droits</h2>
          <div className="space-y-3 text-sm text-[#8aa5c8]">
            <p>Le Prestataire demeure propriétaire de tous ses droits préexistants et des livrables jusqu&apos;au paiement intégral. À compter du règlement intégral, le Prestataire cède au Client les droits d&apos;exploitation sur les livrables finaux pour le monde entier et toute la durée légale de protection.</p>
            <p>Sauf opposition écrite préalable, Ibrahim BAMBA se réserve le droit de mentionner la réalisation dans son portfolio (droit moral d&apos;auteur).</p>
          </div>
        </section>

        <section className="rounded-2xl border border-[#1e3a60]/60 bg-[#0c1830]/60 p-6">
          <h2 className="font-display text-sm font-bold uppercase tracking-widest text-[#6694ff] mb-3">Art. 13 — Confidentialité</h2>
          <p className="text-sm text-[#8aa5c8]">Obligation de confidentialité réciproque pendant toute la durée du contrat et 5 ans après son terme. Sont exclus les informations publiques ou dont la communication est imposée par la loi.</p>
        </section>

        <section className="rounded-2xl border border-[#1e3a60]/60 bg-[#0c1830]/60 p-6">
          <h2 className="font-display text-sm font-bold uppercase tracking-widest text-[#6694ff] mb-3">Art. 14 — Responsabilité</h2>
          <div className="space-y-3 text-sm text-[#8aa5c8]">
            <p>La responsabilité du Prestataire est limitée au montant total des sommes encaissées pour la prestation concernée. Aucune responsabilité pour dommages indirects (pertes de CA, de bénéfices, de données, etc.).</p>
            <p>Pour les prestations d&apos;acquisition clients : <strong className="text-slate-300">obligation de moyens et non de résultat</strong> (les résultats dépendent de facteurs extérieurs au contrôle du Prestataire).</p>
          </div>
        </section>

        <section className="rounded-2xl border border-[#1e3a60]/60 bg-[#0c1830]/60 p-6">
          <h2 className="font-display text-sm font-bold uppercase tracking-widest text-[#6694ff] mb-3">Art. 15 — Force majeure</h2>
          <p className="text-sm text-[#8aa5c8]">Aucune responsabilité en cas d&apos;événement de force majeure (art. 1218 C. civ.). Si l&apos;événement perdure au-delà de 30 jours, chaque partie peut résilier sans indemnité par LRAR.</p>
        </section>

        <section className="rounded-2xl border border-[#1e3a60]/60 bg-[#0c1830]/60 p-6">
          <h2 className="font-display text-sm font-bold uppercase tracking-widest text-[#6694ff] mb-3">Art. 16 à 21 — Dispositions diverses</h2>
          <div className="space-y-3 text-sm text-[#8aa5c8]">
            <p><span className="text-slate-300 font-medium">Références commerciales :</span> sauf opposition écrite avant signature, Ibrahim BAMBA peut mentionner le Client à titre de référence dans son portfolio.</p>
            <p><span className="text-slate-300 font-medium">Médiation :</span> en cas de litige, les parties cherchent d&apos;abord une résolution amiable sous 30 jours. Les consommateurs peuvent saisir un médiateur (art. L.611-1 C. conso.) ou la plateforme européenne <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="text-[#6694ff] hover:underline">ec.europa.eu/consumers/odr</a>.</p>
            <p><span className="text-slate-300 font-medium">Droit applicable :</span> droit français. Juridiction compétente : tribunaux français.</p>
            <p><span className="text-slate-300 font-medium">Divisibilité :</span> la nullité d&apos;une clause n&apos;affecte pas les autres. <span className="text-slate-300 font-medium">Modification :</span> les CGV applicables sont celles en vigueur à la date de la commande.</p>
          </div>
        </section>

      </div>

      <div className="mt-10 flex flex-wrap gap-4 text-sm text-[#6694ff]">
        <Link href="/legal" className="hover:underline">Mentions légales</Link>
        <Link href="/privacy" className="hover:underline">Politique de confidentialité</Link>
        <Link href="/remboursement" className="hover:underline">Politique de remboursement</Link>
      </div>
    </main>
  );
}
