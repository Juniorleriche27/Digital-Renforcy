import { counters } from "@/lib/data";

export default function CountersBar() {
  return (
    <section className="border-b border-[#1f4069] pb-8 pt-6">
      <div className="container-shell">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {counters.map((counter, index) => (
            <article key={counter.label} className="flex items-center gap-4">
              <div className="grid h-14 w-14 place-items-center rounded-2xl border border-[#214a78] bg-[#0f2a4f] text-2xl">
                {counter.icon === "layers"
                  ? "🧱"
                  : counter.icon === "briefcase"
                  ? "💼"
                  : counter.icon === "award"
                  ? "🏅"
                  : "📈"}
              </div>
              <div>
                <div className="text-3xl font-bold text-slate-100 md:text-4xl">
                  {counter.value}
                  <span className="text-[#49a8ff]">{counter.suffix}</span>
                </div>
                <p className="text-sm text-slate-300 md:text-xl">{counter.label}</p>
              </div>
              {index < counters.length - 1 ? (
                <span className="hidden h-12 w-px bg-[#244a74] md:block" />
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
