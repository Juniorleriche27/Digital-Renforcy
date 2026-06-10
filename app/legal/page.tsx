import Link from "next/link";

export default function LegalPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
      <Link href="/" className="inline-flex items-center gap-2 text-sm text-[#8aa5c8] hover:text-slate-200 mb-10">
        ← Retour à l&apos;accueil
      </Link>

      <h1 className="font-display text-3xl font-bold text-slate-100 sm:text-4xl">Mentions légales</h1>
      <p className="mt-3 text-sm text-[#8aa5c8]">Conformément à la loi n° 2004-575 du 21 juin 2004 pour la confiance en l&apos;économie numérique (LCEN).</p>

      <div className="mt-10 space-y-6">

        <section className="rounded-2xl border border-[#1e3a60]/60 bg-[#0c1830]/60 p-6">
          <h2 className="font-display text-sm font-bold uppercase tracking-widest text-[#6694ff] mb-4">1. Éditeur du site</h2>
          <ul className="space-y-2 text-sm text-[#8aa5c8]">
            <li><span className="text-slate-300 font-medium">Nom :</span> Ibrahim BAMBA</li>
            <li><span className="text-slate-300 font-medium">Statut :</span> Entrepreneur individuel — Auto-entrepreneur</li>
            <li><span className="text-slate-300 font-medium">Activité :</span> Agence web, conception de sites web, gestion de la communication et réseaux sociaux</li>
            <li><span className="text-slate-300 font-medium">Code APE/NAF :</span> 6201Z — Programmation informatique</li>
            <li><span className="text-slate-300 font-medium">Domaine :</span> Programmation, conseil et autres activités informatiques</li>
            <li><span className="text-slate-300 font-medium">Forme d&apos;exercice :</span> Libérale non réglementée</li>
            <li><span className="text-slate-300 font-medium">SIRET :</span> 95302674700014</li>
            <li><span className="text-slate-300 font-medium">Adresse :</span> 78 Avenue des Champs-Élysées, Bureau 326, 75008 Paris, France</li>
            <li><span className="text-slate-300 font-medium">Téléphone :</span> +33 6 35 32 04 40</li>
            <li><span className="text-slate-300 font-medium">Email :</span> <a href="mailto:contact@digitalrenforcy.com" className="text-[#6694ff] hover:underline">contact@digitalrenforcy.com</a></li>
            <li><span className="text-slate-300 font-medium">Site web :</span> www.digitalrenforcy.com</li>
            <li className="pt-2 text-[#8aa5c8]">Non assujetti à la TVA — Franchise en base de TVA conformément à l&apos;article 293 B du Code général des impôts.</li>
          </ul>
        </section>

        <section className="rounded-2xl border border-[#1e3a60]/60 bg-[#0c1830]/60 p-6">
          <h2 className="font-display text-sm font-bold uppercase tracking-widest text-[#6694ff] mb-4">2. Directeur de la publication</h2>
          <p className="text-sm text-[#8aa5c8]">Ibrahim BAMBA, en sa qualité d&apos;entrepreneur individuel.</p>
        </section>

        <section className="rounded-2xl border border-[#1e3a60]/60 bg-[#0c1830]/60 p-6">
          <h2 className="font-display text-sm font-bold uppercase tracking-widest text-[#6694ff] mb-4">3. Hébergement</h2>
          <ul className="space-y-1 text-sm text-[#8aa5c8]">
            <li><span className="text-slate-300 font-medium">Hébergeur :</span> Hostinger International Ltd.</li>
            <li>61 Lordou Vironos Street, 6023 Larnaca, Chypre</li>
            <li><span className="text-slate-300 font-medium">Téléphone :</span> +1 (866) 978-1696</li>
            <li><span className="text-slate-300 font-medium">Site :</span> www.hostinger.fr</li>
          </ul>
        </section>

        <section className="rounded-2xl border border-[#1e3a60]/60 bg-[#0c1830]/60 p-6">
          <h2 className="font-display text-sm font-bold uppercase tracking-widest text-[#6694ff] mb-4">4. Propriété intellectuelle</h2>
          <div className="space-y-3 text-sm text-[#8aa5c8]">
            <p>L&apos;intégralité du contenu publié sur ce site (textes, articles, photographies, illustrations, graphismes, logos, icônes, animations, vidéos, sons et logiciels) constitue des œuvres protégées au sens du Code de la propriété intellectuelle français, et est la propriété exclusive d&apos;Ibrahim BAMBA ou de ses partenaires ayant consenti une licence d&apos;utilisation.</p>
            <p>Toute reproduction, représentation, modification, adaptation, traduction, transformation, diffusion, retransmission, publication ou exploitation commerciale, même partielle, par quelque procédé et sur quelque support que ce soit, est strictement interdite sans l&apos;autorisation préalable, expresse et écrite d&apos;Ibrahim BAMBA.</p>
            <p>Tout manquement à ces dispositions constitue une contrefaçon sanctionnée par les articles L.335-2 et suivants du Code de la propriété intellectuelle, pouvant entraîner des poursuites civiles et pénales.</p>
          </div>
        </section>

        <section className="rounded-2xl border border-[#1e3a60]/60 bg-[#0c1830]/60 p-6">
          <h2 className="font-display text-sm font-bold uppercase tracking-widest text-[#6694ff] mb-4">5. Limitation de responsabilité</h2>
          <div className="space-y-3 text-sm text-[#8aa5c8]">
            <p>Ibrahim BAMBA s&apos;efforce d&apos;assurer l&apos;exactitude et la mise à jour des informations diffusées sur ce site. Toutefois, il ne saurait garantir l&apos;exactitude, la précision ou l&apos;exhaustivité des informations mises en ligne.</p>
            <p>Ibrahim BAMBA se réserve le droit de modifier, corriger ou supprimer à tout moment et sans préavis tout ou partie du contenu de ce site. Il ne saurait être tenu responsable des erreurs ou omissions, des dommages résultant de l&apos;accès ou de l&apos;utilisation du site, ni de toute intrusion frauduleuse d&apos;un tiers.</p>
          </div>
        </section>

        <section className="rounded-2xl border border-[#1e3a60]/60 bg-[#0c1830]/60 p-6">
          <h2 className="font-display text-sm font-bold uppercase tracking-widest text-[#6694ff] mb-4">6. Liens hypertextes</h2>
          <div className="space-y-3 text-sm text-[#8aa5c8]">
            <p>Ce site peut contenir des liens vers des sites internet tiers. Ibrahim BAMBA n&apos;exerce aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu, leur politique de confidentialité ou leur disponibilité. La présence d&apos;un lien ne constitue en aucun cas une recommandation du site tiers.</p>
            <p>Tout site souhaitant établir un lien vers le présent site doit obtenir l&apos;autorisation préalable écrite d&apos;Ibrahim BAMBA.</p>
          </div>
        </section>

        <section className="rounded-2xl border border-[#1e3a60]/60 bg-[#0c1830]/60 p-6">
          <h2 className="font-display text-sm font-bold uppercase tracking-widest text-[#6694ff] mb-4">7. Droit applicable et juridiction compétente</h2>
          <p className="text-sm text-[#8aa5c8]">Les présentes mentions légales sont régies par le droit français. En cas de litige et à défaut de résolution amiable, les tribunaux français seront seuls compétents.</p>
        </section>

      </div>

      <div className="mt-10 flex flex-wrap gap-4 text-sm text-[#6694ff]">
        <Link href="/cgu" className="hover:underline">CGV</Link>
        <Link href="/privacy" className="hover:underline">Politique de confidentialité</Link>
        <Link href="/remboursement" className="hover:underline">Politique de remboursement</Link>
      </div>
    </main>
  );
}
