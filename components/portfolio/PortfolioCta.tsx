import Link from "next/link";
import { contact } from "@/lib/data";

export default function PortfolioCta() {
  return (
    <section className="dark-section pt-8">
      <div className="container-shell">
        <div className="dark-panel rounded-[34px] border border-[#2b5685] px-8 py-12 text-center">
          <span className="badge-chip border-emerald-500/30 bg-emerald-500/10 text-emerald-400">
            PROCHAIN PROJET
          </span>
          <h2 className="mx-auto mt-5 max-w-5xl text-5xl font-bold leading-[0.98] tracking-tight text-slate-100 md:text-7xl">
            Votre entreprise pourrait etre le <span className="title-gradient">prochain succes</span>
          </h2>
          <p className="mx-auto mt-6 max-w-4xl text-lg leading-relaxed text-slate-300 md:text-2xl">
            Consultation gratuite de 30 minutes. Analysons votre situation et construisons une
            strategie adaptee a votre activite.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href={contact.calendly}
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
            >
              Demarrer mon projet
            </a>
            <Link href="/services" className="btn-outline">
              Nos services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
