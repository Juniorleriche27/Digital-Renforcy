import { testimonials } from "@/lib/data";

const borderByColor: Record<string, string> = {
  orange: "border-orange-500/70",
  indigo: "border-indigo-500/70",
  emerald: "border-emerald-500/70",
};

const badgeByColor: Record<string, string> = {
  orange: "bg-orange-500 text-white",
  indigo: "bg-indigo-500 text-white",
  emerald: "bg-emerald-500 text-white",
};

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="dark-section">
      <div className="container-shell">
        <div className="mx-auto max-w-5xl text-center">
          <span className="badge-chip border-orange-500/30 bg-orange-500/10 text-orange-400">
            TEMOIGNAGES
          </span>
          <h2 className="mt-5 text-3xl font-bold tracking-tight text-slate-100 sm:text-4xl md:text-5xl lg:text-6xl">
            Ce que disent nos clients
            <br />
            <span className="title-gradient">renovation &amp; formation</span>
          </h2>
          <p className="mt-4 text-base text-slate-300 md:text-xl">
            Des resultats concrets, mesurables, par des entreprises comme la votre.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <article
              key={testimonial.author}
              className={`dark-card testimonial-card rounded-3xl border p-6 ${borderByColor[testimonial.color]}`}
              style={{ "--testimonial-delay": `${index * 110}ms` } as React.CSSProperties}
            >
              <div className="mb-4 flex items-center justify-between">
                <div className="text-yellow-400">★★★★★</div>
                <span className="text-sm text-slate-300">⚡ {testimonial.tag}</span>
              </div>

              <blockquote className="min-h-[180px] text-base leading-relaxed text-slate-300 md:text-xl">
                "{testimonial.quote}"
              </blockquote>

              <div className="mt-5 flex items-center gap-3">
                <span
                  className={`grid h-12 w-12 place-items-center rounded-full text-sm font-bold ${badgeByColor[testimonial.color]}`}
                >
                  {testimonial.initials}
                </span>
                <div>
                  <p className="text-base font-semibold text-slate-100 md:text-xl">{testimonial.author}</p>
                  <p className="text-xs text-slate-400 md:text-lg">{testimonial.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
