import Link from "next/link";

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
      <Link href="/" className="inline-flex items-center gap-2 text-sm text-[#8aa5c8] hover:text-slate-200 mb-10">
        ← Retour à l&apos;accueil
      </Link>

      <h1 className="font-display text-3xl font-bold text-slate-100 sm:text-4xl">Politique de confidentialité & RGPD</h1>
      <p className="mt-3 text-sm text-[#8aa5c8]">Conforme au Règlement (UE) 2016/679 du 27 avril 2016 (RGPD) et à la loi Informatique et Libertés modifiée.</p>

      <div className="mt-10 space-y-6">

        <section className="rounded-2xl border border-[#1e3a60]/60 bg-[#0c1830]/60 p-6">
          <h2 className="font-display text-sm font-bold uppercase tracking-widest text-[#6694ff] mb-4">Art. 1 — Responsable du traitement</h2>
          <ul className="space-y-1 text-sm text-[#8aa5c8]">
            <li><span className="text-slate-300 font-medium">Ibrahim BAMBA</span> — Entrepreneur individuel</li>
            <li><span className="text-slate-300 font-medium">SIRET :</span> 95302674700014</li>
            <li><span className="text-slate-300 font-medium">Adresse :</span> 78 Avenue des Champs-Élysées, Bureau 326, 75008 Paris, France</li>
            <li><span className="text-slate-300 font-medium">Email :</span> <a href="mailto:hello@digitalrenforcy.com" className="text-[#6694ff] hover:underline">hello@digitalrenforcy.com</a></li>
            <li><span className="text-slate-300 font-medium">Téléphone :</span> +33 6 35 32 04 40</li>
          </ul>
        </section>

        <section className="rounded-2xl border border-[#1e3a60]/60 bg-[#0c1830]/60 p-6">
          <h2 className="font-display text-sm font-bold uppercase tracking-widest text-[#6694ff] mb-4">Art. 2 — Données collectées</h2>
          <div className="space-y-3 text-sm text-[#8aa5c8]">
            <div><p className="text-slate-300 font-medium">2.1 Identification :</p><p>Nom, prénom, email, téléphone, nom de l&apos;entreprise.</p></div>
            <div><p className="text-slate-300 font-medium">2.2 Navigation :</p><p>Adresse IP, navigateur, système d&apos;exploitation, pages visitées, durée de visite, logs.</p></div>
            <div><p className="text-slate-300 font-medium">2.3 Communication :</p><p>Contenu des messages via formulaire de contact, email ou tout autre moyen.</p></div>
            <div><p className="text-slate-300 font-medium">2.4 Contractuelles :</p><p>Informations pour devis et factures, historique des commandes, suivi commercial.</p></div>
            <div><p className="text-slate-300 font-medium">2.5 Cookies :</p><p>Données collectées via les cookies lors de la navigation (voir Art. 9).</p></div>
          </div>
        </section>

        <section className="rounded-2xl border border-[#1e3a60]/60 bg-[#0c1830]/60 p-6">
          <h2 className="font-display text-sm font-bold uppercase tracking-widest text-[#6694ff] mb-4">Art. 3 — Finalités et bases légales</h2>
          <ul className="space-y-2 text-sm text-[#8aa5c8]">
            <li className="flex gap-3"><span className="text-slate-400 shrink-0 w-56">Gestion des demandes de contact</span><span className="text-emerald-400 text-xs font-medium">Intérêt légitime (art. 6.1.f)</span></li>
            <li className="flex gap-3"><span className="text-slate-400 shrink-0 w-56">Exécution des prestations</span><span className="text-emerald-400 text-xs font-medium">Exécution du contrat (art. 6.1.b)</span></li>
            <li className="flex gap-3"><span className="text-slate-400 shrink-0 w-56">Facturation & comptabilité</span><span className="text-emerald-400 text-xs font-medium">Obligation légale (art. 6.1.c)</span></li>
            <li className="flex gap-3"><span className="text-slate-400 shrink-0 w-56">Suivi de la relation client</span><span className="text-emerald-400 text-xs font-medium">Intérêt légitime (art. 6.1.f)</span></li>
            <li className="flex gap-3"><span className="text-slate-400 shrink-0 w-56">Communications commerciales</span><span className="text-emerald-400 text-xs font-medium">Consentement (art. 6.1.a)</span></li>
            <li className="flex gap-3"><span className="text-slate-400 shrink-0 w-56">Mesure d&apos;audience</span><span className="text-emerald-400 text-xs font-medium">Consentement (art. 6.1.a)</span></li>
          </ul>
        </section>

        <section className="rounded-2xl border border-[#1e3a60]/60 bg-[#0c1830]/60 p-6">
          <h2 className="font-display text-sm font-bold uppercase tracking-widest text-[#6694ff] mb-4">Art. 4 — Durée de conservation</h2>
          <ul className="space-y-2 text-sm text-[#8aa5c8]">
            <li className="flex justify-between"><span>Données prospects</span><span className="text-slate-300 font-medium">3 ans après dernier contact</span></li>
            <li className="flex justify-between"><span>Données clients</span><span className="text-slate-300 font-medium">5 ans après fin du contrat</span></li>
            <li className="flex justify-between"><span>Données de facturation</span><span className="text-slate-300 font-medium">10 ans (obligation légale)</span></li>
            <li className="flex justify-between"><span>Données de navigation & logs</span><span className="text-slate-300 font-medium">13 mois maximum</span></li>
            <li className="flex justify-between"><span>Consentements cookies</span><span className="text-slate-300 font-medium">13 mois maximum</span></li>
          </ul>
          <p className="mt-3 text-xs text-[#6a88aa]">À l&apos;issue de ces délais, les données sont supprimées de manière sécurisée ou anonymisées.</p>
        </section>

        <section className="rounded-2xl border border-[#1e3a60]/60 bg-[#0c1830]/60 p-6">
          <h2 className="font-display text-sm font-bold uppercase tracking-widest text-[#6694ff] mb-4">Art. 5 — Destinataires des données</h2>
          <p className="text-sm text-[#8aa5c8]">Les données sont destinées à Ibrahim BAMBA. Elles peuvent être transmises, dans la stricte limite nécessaire, aux sous-traitants techniques suivants : hébergeur (Hostinger), CRM, outil de facturation, outil d&apos;emailing, prestataires de paiement.</p>
          <p className="mt-3 text-sm text-[#8aa5c8]">Aucune vente, location ou cession à des tiers. En cas de transfert hors UE, des garanties appropriées sont appliquées (clauses contractuelles types de la Commission européenne).</p>
        </section>

        <section className="rounded-2xl border border-[#1e3a60]/60 bg-[#0c1830]/60 p-6">
          <h2 className="font-display text-sm font-bold uppercase tracking-widest text-[#6694ff] mb-4">Art. 6 — Vos droits</h2>
          <div className="grid sm:grid-cols-2 gap-3 text-sm text-[#8aa5c8]">
            <div className="rounded-xl border border-[#1e3a60]/40 bg-[#080f20]/60 p-3">
              <p className="text-slate-300 font-medium text-xs mb-1">Accès (art. 15)</p>
              <p>Obtenir confirmation et copie de vos données.</p>
            </div>
            <div className="rounded-xl border border-[#1e3a60]/40 bg-[#080f20]/60 p-3">
              <p className="text-slate-300 font-medium text-xs mb-1">Rectification (art. 16)</p>
              <p>Corriger des données inexactes ou incomplètes.</p>
            </div>
            <div className="rounded-xl border border-[#1e3a60]/40 bg-[#080f20]/60 p-3">
              <p className="text-slate-300 font-medium text-xs mb-1">Effacement (art. 17)</p>
              <p>Demander la suppression de vos données.</p>
            </div>
            <div className="rounded-xl border border-[#1e3a60]/40 bg-[#080f20]/60 p-3">
              <p className="text-slate-300 font-medium text-xs mb-1">Portabilité (art. 20)</p>
              <p>Recevoir vos données dans un format lisible par machine.</p>
            </div>
            <div className="rounded-xl border border-[#1e3a60]/40 bg-[#080f20]/60 p-3">
              <p className="text-slate-300 font-medium text-xs mb-1">Opposition (art. 21)</p>
              <p>Vous opposer au traitement à des fins de prospection.</p>
            </div>
            <div className="rounded-xl border border-[#1e3a60]/40 bg-[#080f20]/60 p-3">
              <p className="text-slate-300 font-medium text-xs mb-1">Limitation (art. 18)</p>
              <p>Limiter le traitement dans certaines circonstances.</p>
            </div>
          </div>
          <p className="mt-4 text-sm text-[#8aa5c8]">Pour exercer ces droits : <a href="mailto:hello@digitalrenforcy.com" className="text-[#6694ff] hover:underline">hello@digitalrenforcy.com</a> — Réponse sous 1 mois. En cas de litige, vous pouvez saisir la <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-[#6694ff] hover:underline">CNIL</a>.</p>
        </section>

        <section className="rounded-2xl border border-[#1e3a60]/60 bg-[#0c1830]/60 p-6">
          <h2 className="font-display text-sm font-bold uppercase tracking-widest text-[#6694ff] mb-4">Art. 7 — Sécurité des données</h2>
          <p className="text-sm text-[#8aa5c8]">Mesures techniques et organisationnelles appropriées : chiffrement des données, gestion des accès, protocole HTTPS, sélection rigoureuse des sous-traitants. En cas de violation à risque élevé, notification des personnes concernées conformément à l&apos;art. 34 RGPD.</p>
        </section>

        <section className="rounded-2xl border border-[#1e3a60]/60 bg-[#0c1830]/60 p-6">
          <h2 className="font-display text-sm font-bold uppercase tracking-widest text-[#6694ff] mb-4">Art. 8 — Mineurs</h2>
          <p className="text-sm text-[#8aa5c8]">Le site n&apos;est pas destiné aux personnes de moins de 16 ans. Aucune collecte sciemment effectuée auprès de mineurs. Contactez <a href="mailto:hello@digitalrenforcy.com" className="text-[#6694ff] hover:underline">hello@digitalrenforcy.com</a> pour toute demande de suppression.</p>
        </section>

        <section className="rounded-2xl border border-[#1e3a60]/60 bg-[#0c1830]/60 p-6">
          <h2 className="font-display text-sm font-bold uppercase tracking-widest text-[#6694ff] mb-4">Art. 9 — Politique de cookies</h2>
          <div className="space-y-4 text-sm text-[#8aa5c8]">
            <div className="rounded-xl border border-[#1e3a60]/40 bg-[#080f20]/60 p-3">
              <p className="text-slate-300 font-medium mb-1">Cookies strictement nécessaires</p>
              <p>Indispensables au fonctionnement du site. Ne nécessitent pas de consentement préalable.</p>
            </div>
            <div className="rounded-xl border border-[#1e3a60]/40 bg-[#080f20]/60 p-3">
              <p className="text-slate-300 font-medium mb-1">Cookies analytiques et de performance</p>
              <p>Mesure des visites et sources de trafic. Déposés uniquement avec votre consentement préalable.</p>
            </div>
            <div className="rounded-xl border border-[#1e3a60]/40 bg-[#080f20]/60 p-3">
              <p className="text-slate-300 font-medium mb-1">Cookies fonctionnels</p>
              <p>Mémorisation de vos préférences. Déposés uniquement avec votre consentement préalable.</p>
            </div>
            <p>Vous pouvez modifier vos préférences à tout moment via les paramètres de votre navigateur. Durée de vie maximale des cookies : <strong className="text-slate-300">13 mois</strong> (recommandation CNIL).</p>
          </div>
        </section>

      </div>

      <div className="mt-10 flex flex-wrap gap-4 text-sm text-[#6694ff]">
        <Link href="/legal" className="hover:underline">Mentions légales</Link>
        <Link href="/cgu" className="hover:underline">CGV</Link>
        <Link href="/remboursement" className="hover:underline">Politique de remboursement</Link>
      </div>
    </main>
  );
}
