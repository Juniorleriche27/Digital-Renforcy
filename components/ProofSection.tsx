import Link from "next/link";
import { contact, proofMails, proofStats } from "@/lib/data";

export default function ProofSection() {
  const loopMails = [...proofMails, ...proofMails, ...proofMails];

  return (
    <section id="proof" className="dark-section">
      <div className="container-shell">
        <div className="mx-auto max-w-4xl text-center">
          <span className="badge-chip border-emerald-500/30 bg-emerald-500/10 text-emerald-400">
            PREUVES REELLES
          </span>
          <h2 className="mt-5 text-3xl font-bold tracking-tight text-slate-100 sm:text-4xl md:text-5xl lg:text-6xl">
            Des leads <span className="title-gradient">qui arrivent vraiment</span>
          </h2>
          <p className="mt-4 text-sm text-slate-300 sm:text-base md:text-xl">
            Voici ce que nos clients recoivent dans leur boite mail, chaque jour, automatiquement.
          </p>
        </div>

        <div className="mt-12 grid items-start gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="dark-card rounded-3xl border border-emerald-500/40 bg-[#071320] p-3 sm:p-4">
            <div className="text-[11px] font-semibold text-slate-100 sm:text-xs">
              <span className="live-dot mr-2 inline-block h-2 w-2 rounded-full bg-emerald-400" />
              Boite mail reelle d&apos;un client (Acquisition automatisee)
            </div>

            <div className="proof-phone mt-4">
              <div className="proof-phone-top">
                <span className="h-2.5 w-2.5 rounded-full bg-orange-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                <span className="ml-2 text-[11px] font-semibold text-slate-200">Inbox client</span>
              </div>

              <div className="proof-ticker">
                <ul className="proof-ticker-track">
                  {loopMails.map((mail, index) => (
                    <li key={`left-loop-a-${mail.from}-${index}`} className="proof-phone-row">
                      <div className="proof-phone-avatar shrink-0">F</div>
                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-semibold text-slate-100">{mail.from}</p>
                        <p className="truncate text-xs text-slate-400">
                          {mail.preview.replace("dispo...", "disponible maintenant")}
                        </p>
                      </div>
                      <span className="shrink-0 text-[11px] text-slate-400">{mail.time}</span>
                    </li>
                  ))}
                  {loopMails.map((mail, index) => (
                    <li key={`left-loop-b-${mail.from}-${index}`} className="proof-phone-row">
                      <div className="proof-phone-avatar shrink-0">F</div>
                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-semibold text-slate-100">{mail.from}</p>
                        <p className="truncate text-xs text-slate-400">
                          {mail.preview.replace("dispo...", "disponible maintenant")}
                        </p>
                      </div>
                      <span className="shrink-0 text-[11px] text-slate-400">{mail.time}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="min-w-0">
            <div className="dark-card proof-feed-card overflow-hidden rounded-2xl">
              <div className="border-b border-[#2a4c75] px-3 py-3 sm:px-4">
                <div className="rounded-xl bg-[#2b3250] px-3 py-2 text-sm text-slate-300">
                  Nouveau prospect
                </div>
              </div>
              <ul className="divide-y divide-[#24486f]">
                {proofMails.map((mail, index) => (
                  <li
                    key={`${mail.from}-${index}`}
                    className="proof-mail-row flex flex-wrap items-center gap-3 px-3 py-3 sm:flex-nowrap sm:px-4"
                    style={{ animationDelay: `${index * 0.24}s` }}
                  >
                    <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#2c6df2] text-sm font-bold text-white">
                      F
                    </div>
                    <div className="min-w-0 flex-1 basis-[calc(100%-52px)] sm:basis-auto">
                      <p className="text-sm font-semibold text-slate-100">{mail.from}</p>
                      <p className="truncate text-xs text-slate-400">{mail.preview}</p>
                    </div>
                    <span className="ml-auto text-xs text-slate-400 sm:ml-0">{mail.time}</span>
                    <span className="rounded-md bg-emerald-900/40 px-2 py-1 text-xs font-semibold text-emerald-400">
                      {mail.tag}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="border-t border-[#24486f] px-4 py-3 text-xs text-slate-400">
                Facebook Ads - Leads generes en continu
              </div>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {proofStats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="proof-stat-card dark-card rounded-xl p-4 text-center"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className={`text-3xl font-bold ${stat.color}`}>{stat.value}</div>
                  <div className="mt-1 text-sm text-slate-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 text-center">
          <p className="text-sm text-slate-300 sm:text-base md:text-xl">
            <strong className="text-slate-100">Vous aussi,</strong> recevez des prospects qualifies directement
            dans votre boite mail, sans commission ni intermediaire.
          </p>
          <Link href={contact.contactForm} className="btn-primary mt-6">
            Je veux des leads comme ca
          </Link>
        </div>
      </div>
    </section>
  );
}
