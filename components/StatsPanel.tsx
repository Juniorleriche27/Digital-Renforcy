import { clientAvatars } from "@/lib/data";

export default function StatsPanel() {
  return (
    <section className="pb-3">
      <div className="container-shell">
        <div className="flex flex-col items-start gap-3 border-y border-[#1f4069] py-3 sm:flex-row sm:items-center">
          <div className="flex -space-x-1 self-center sm:self-auto">
            {clientAvatars.map((avatar, index) => (
              <span
                key={avatar}
                className={`grid h-9 w-9 place-items-center rounded-full border border-[#0a1f3a] text-xs font-bold text-white sm:h-10 sm:w-10 sm:text-sm ${
                  ["bg-orange-500", "bg-indigo-500", "bg-emerald-500", "bg-cyan-500", "bg-violet-500"][index % 5]
                }`}
              >
                {avatar}
              </span>
            ))}
          </div>
          <p className="text-center text-sm text-slate-300 sm:text-left md:text-xl">
            <strong className="text-slate-100">+60 clients</strong> nous font confiance
          </p>
        </div>
      </div>
    </section>
  );
}
