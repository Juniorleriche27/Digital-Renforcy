import Link from "next/link";
import { contact } from "@/lib/data";

type ServiceDetailSectionProps = {
  id: string;
  badge: string;
  icon: string;
  title: string;
  subtitle: string;
  description: string;
  bullets: string[];
  metrics: Array<{ value: string; label: string }>;
  videoTitle: string;
  reverse?: boolean;
};

export default function ServiceDetailSection({
  id,
  badge,
  icon,
  title,
  subtitle,
  description,
  bullets,
  metrics,
  videoTitle,
  reverse,
}: ServiceDetailSectionProps) {
  return (
    <section id={id} className="dark-section">
      <div
        className={`container-shell grid gap-10 lg:items-start ${
          reverse ? "lg:grid-cols-[0.95fr_1.05fr]" : "lg:grid-cols-[1.05fr_0.95fr]"
        }`}
      >
        <div className={reverse ? "lg:order-2" : ""}>
          <span className="badge-chip border-[#8c5828] bg-[#2d2217] text-[#ff984d]">{badge}</span>
          <span className="mt-5 block text-4xl leading-none sm:text-5xl md:text-6xl">{icon}</span>
          <h2 className="mt-4 text-3xl font-bold leading-[1.02] tracking-tight text-slate-100 sm:text-4xl md:text-5xl lg:text-7xl">
            {title}
          </h2>
          <p className="mt-5 text-lg font-semibold text-slate-200 sm:text-xl md:text-3xl">{subtitle}</p>
          <p className="mt-5 text-base leading-relaxed text-slate-300 md:text-xl">{description}</p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {metrics.map((metric, index) => (
              <article
                key={metric.value}
                className={`services-metric-card dark-card rounded-2xl p-5 ${
                  metrics.length % 2 !== 0 && index === metrics.length - 1 ? "sm:col-span-2" : ""
                }`}
              >
                <div className="text-4xl font-bold text-slate-100 sm:text-5xl md:text-6xl">{metric.value}</div>
                <p className="mt-2 text-sm text-slate-300 md:text-lg">{metric.label}</p>
              </article>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link href={contact.contactForm} className="btn-primary">
              Decouvrir ce service
            </Link>
            <a href={contact.calendly} target="_blank" rel="noreferrer" className="btn-outline">
              Consultation gratuite
            </a>
          </div>
        </div>

        <div className={reverse ? "lg:order-1" : ""}>
          <article className="services-video-card dark-card rounded-3xl p-5 sm:p-7">
            <div className="services-play mx-auto grid h-16 w-16 place-items-center rounded-full border border-rose-500/50 bg-rose-500/10 text-3xl text-rose-400 sm:h-20 sm:w-20 sm:text-4xl">
              ▶
            </div>
            <h3 className="mx-auto mt-6 max-w-md text-center text-2xl font-semibold text-slate-100 sm:text-3xl md:text-4xl">
              {videoTitle}
            </h3>
            <p className="mx-auto mt-4 max-w-lg rounded-full border border-amber-500/40 bg-amber-500/10 px-5 py-2 text-center text-sm font-semibold text-amber-300 md:text-base">
              Video bientot disponible
            </p>
          </article>

          <p className="mt-4 text-sm text-slate-400">{videoTitle}</p>

          <ul className="mt-5 space-y-4 rounded-3xl border border-[#254d79] bg-[#0f2a4c]/80 p-5 sm:p-6">
            {bullets.map((item, index) => (
              <li
                key={item}
                className="services-bullet flex items-start gap-3 text-base text-slate-200 sm:text-lg md:text-xl"
                style={{ animationDelay: `${index * 0.12}s` }}
              >
                <span className="mt-1 text-emerald-400">●</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
