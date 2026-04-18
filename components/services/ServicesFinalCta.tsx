import Link from "next/link";
import { contact } from "@/lib/data";

export default function ServicesFinalCta() {
  return (
    <section id="faq" className="dark-section pt-10">
      <div className="container-shell">
        <div className="dark-panel rounded-[34px] border border-[#2b5685] px-8 py-12 text-center">
          <span className="badge-chip">VOUS HESITEZ ?</span>
          <h2 className="mx-auto mt-5 max-w-5xl text-5xl font-bold leading-[0.98] tracking-tight text-slate-100 md:text-7xl">
            Prêt à <span className="title-gradient">digitaliser et automatiser votre acquisition</span> ?
          </h2>
          <p className="mx-auto mt-6 max-w-4xl text-lg leading-relaxed text-slate-300 md:text-2xl">
            Audit gratuit de 30 minutes. Nos experts analysent votre situation (rénovation ou
            formation) et construisent votre stratégie Web + Acquisition sur mesure.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href={contact.calendly}
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
            >
              Consultation gratuite
            </a>
            <Link href="/pricing#pricing-faq" className="btn-outline">
              Voir la FAQ
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

