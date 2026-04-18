import Link from "next/link";
import { contact, footerLinks, socialLinks } from "@/lib/data";
import Logo from "./ui/Logo";

export default function Footer() {
  return (
    <footer className="border-t border-[#1f4069] bg-[#081d3a] pb-10 pt-14">
      <div className="container-shell">
        <div className="grid gap-10 md:grid-cols-[1.35fr_0.7fr_0.7fr_1fr]">
          <div>
            <Logo />
            <p className="mt-5 max-w-md text-sm leading-relaxed text-slate-300 md:text-xl">
              Agence Web Hybride - Developpement web intelligent et solutions numeriques automatisees.
              Nous transformons le digital en force operationnelle.
              <span className="text-slate-500"> Code APE 6201Z</span>
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {socialLinks.map((item) => (
                <a
                  key={item.key}
                  href={item.href}
                  className="grid h-10 w-10 place-items-center rounded-xl border border-[#264f7b] bg-[#0d2748] text-xs font-bold text-slate-300 hover:text-white"
                >
                  {item.key.toUpperCase().slice(0, 2)}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-100 md:text-xl">
              Nos activites
            </h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.activities.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-slate-300 hover:text-white md:text-xl">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-100 md:text-xl">
              Entreprise
            </h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-slate-300 hover:text-white md:text-xl">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-100 md:text-xl">Contact</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-300 md:text-xl">
              <li>📞 {contact.phone}</li>
              <li>✉️ {contact.email}</li>
              <li className="whitespace-pre-line">📍 {contact.address}</li>
            </ul>
            <Link href={contact.contactForm} className="btn-primary mt-6 w-full">
              ✈ Nous ecrire
            </Link>
          </div>
        </div>

        <div className="mt-10 border-t border-[#1f4069] pt-7">
          <p className="text-xs leading-relaxed text-slate-400 md:text-sm">
            © 2026 Digital Renforcy - Agence Web Hybride. Tous droits reserves. Code APE 6201Z - Programmation informatique - Toutes nos activites reposent sur la programmation et le developpement informatique.
          </p>
          <ul className="mt-4 flex flex-wrap gap-5 text-xs text-slate-300 md:text-sm">
            {footerLinks.legal.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className="hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
