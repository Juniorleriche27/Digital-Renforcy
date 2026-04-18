import { comparison } from "@/lib/data";

export default function ComparisonSection() {
  return (
    <section id="comparison" className="dark-section">
      <div className="container-shell">
        <div className="mx-auto max-w-4xl text-center">
          <span className="badge-chip border-orange-500/30 bg-orange-500/10 text-orange-400">
            ⚖️ COMPARATIF
          </span>
          <h2 className="mt-5 text-3xl font-bold tracking-tight text-slate-100 sm:text-4xl md:text-5xl lg:text-6xl">
            Pourquoi choisir <span className="title-gradient">Digital Renforcy</span> ?
          </h2>
          <p className="mt-4 text-base text-slate-300 md:text-xl">
            Agence web hybride : développement, automatisation et innovation — vs. les prestataires traditionnels.
          </p>
        </div>

        <div className="mt-10 overflow-x-auto rounded-2xl border border-[#24486f]">
          <table className="w-full min-w-[540px] text-left text-sm">
            <thead className="bg-[#132d4e] text-slate-300">
              <tr>
                {comparison.headers.map((header, index) => (
                  <th
                    key={header}
                    className={`px-3 py-3 text-xs font-semibold sm:px-5 sm:py-4 sm:text-sm md:px-6 md:text-base ${
                      index === 2 ? "text-[#4f83ff]" : ""
                    }`}
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {comparison.rows.map((row) => (
                <tr key={row[0]} className="border-t border-[#24486f] bg-[#102848]">
                  <td className="px-3 py-3 text-xs font-semibold text-slate-100 sm:px-5 sm:py-4 sm:text-sm md:px-6 md:text-base">{row[0]}</td>
                  <td className="px-3 py-3 text-xs text-slate-400 sm:px-5 sm:py-4 sm:text-sm md:px-6 md:text-base">
                    {row[1] === "Non inclus" || row[1] === "Opaque" ? "✖ " : ""}
                    {row[1]}
                  </td>
                  <td className="px-3 py-3 text-xs font-semibold text-emerald-400 sm:px-5 sm:py-4 sm:text-sm md:px-6 md:text-base">
                    {row[2] === "Inclus" || row[2] === "Dashboard temps reel" ? "☑ " : ""}
                    {row[2]}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
