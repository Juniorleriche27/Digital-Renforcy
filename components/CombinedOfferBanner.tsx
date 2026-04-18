import Link from "next/link";
import { contact } from "@/lib/data";

export default function CombinedOfferBanner() {
  return (
    <section className="dark-section pt-8">
      <div className="container-shell">
        <div className="dark-panel rounded-3xl border border-[#1f4674] px-4 py-8 text-center sm:px-8 sm:py-12">
          <span className="badge-chip border-emerald-500/30 bg-emerald-500/10 text-emerald-400">
            🔥 OFFRE COMBINÉE
          </span>
          <h3 className="mt-5 text-3xl font-bold text-slate-100 md:text-5xl">
            Site web intelligent + Acquisition client
          </h3>
          <p className="mx-auto mt-4 max-w-4xl text-base text-slate-300 md:text-xl">
            Combinez les deux solutions pour une stratégie digitale complète. Tarif préférentiel disponible.
          </p>
          <Link href={contact.contactForm} className="btn-primary mt-8">
            ✉️ Demander un devis combiné
          </Link>
        </div>
      </div>
    </section>
  );
}
