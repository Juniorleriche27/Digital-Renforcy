import { clientAvatars } from "@/lib/data";

export default function StatsPanel() {
  return (
    <section className="pb-3">
      <div className="container-shell">
        <div className="flex flex-wrap items-center gap-3 border-y border-[#1f4069] py-3">
          <div className="flex -space-x-1">
            {clientAvatars.map((avatar, index) => (
              <span
                key={avatar}
                className={`grid h-10 w-10 place-items-center rounded-full border border-[#0a1f3a] text-sm font-bold text-white ${
                  ["bg-orange-500", "bg-indigo-500", "bg-emerald-500", "bg-cyan-500", "bg-violet-500"][index % 5]
                }`}
              >
                {avatar}
              </span>
            ))}
          </div>
          <p className="text-base text-slate-300 md:text-xl">
            <strong className="text-slate-100">+60 clients</strong> nous font confiance
          </p>
        </div>
      </div>
    </section>
  );
}
