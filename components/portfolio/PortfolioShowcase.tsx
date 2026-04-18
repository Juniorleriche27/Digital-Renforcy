"use client";

import { useMemo, useState } from "react";
import { portfolioFilters, portfolioProjects } from "@/lib/data";

export default function PortfolioShowcase() {
  const [filter, setFilter] = useState("all");

  const visibleProjects = useMemo(() => {
    if (filter === "all") {
      return portfolioProjects;
    }
    return portfolioProjects.filter((project) =>
      filter === "acquisition"
        ? project.category === "Acquisition Client"
        : project.category === "Développement Web",
    );
  }, [filter]);

  return (
    <section className="dark-section pt-14 md:pt-20">
      <div className="container-shell">
        <p className="text-sm font-medium text-slate-400">Accueil / Réalisations</p>

        <div className="mx-auto mt-8 max-w-5xl text-center">
          <span className="badge-chip">NOS RÉALISATIONS</span>
          <h1 className="mt-5 text-5xl font-bold leading-[0.98] tracking-tight text-slate-100 md:text-7xl">
            Des résultats concrets pour
            <br />
            <span className="title-gradient">rénovation &amp; formation</span>
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-slate-300 md:text-3xl">
            Cas d'études réels : leads générés, inscriptions augmentées, sites mis en ligne.
            Des chiffres mesurables pour des entreprises comme la vôtre.
          </p>
        </div>

        <div className="mt-9 flex flex-wrap justify-center gap-3">
          {portfolioFilters.map((item) => {
            const active = filter === item.key;
            return (
              <button
                key={item.key}
                onClick={() => setFilter(item.key)}
                className={`rounded-full border px-6 py-2.5 text-sm font-semibold ${
                  active
                    ? "border-[#335dff] bg-[#2f56ff] text-white"
                    : "border-[#294f7b] bg-[#112c4f] text-slate-300 hover:text-slate-100"
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {visibleProjects.map((project, index) => (
            <article
              key={project.title}
              className="portfolio-project-card dark-card rounded-3xl"
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              <div className="p-7">
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-5xl leading-none">{project.icon}</span>
                  <span
                    className={`text-sm font-semibold ${
                      project.categoryColor === "orange" ? "text-[#ff8d4d]" : "text-[#4f83ff]"
                    }`}
                  >
                    {project.category}
                  </span>
                </div>

                <h3 className="text-4xl font-bold leading-tight text-slate-100 md:text-[2.05rem]">
                  {project.title}
                </h3>
                <p className="mt-3 text-base text-slate-300 md:text-xl">{project.location}</p>
                <p className="mt-5 text-lg leading-relaxed text-slate-300 md:text-2xl">
                  {project.description}
                </p>

                <div className="mt-7 grid grid-cols-2 gap-4">
                  {project.metrics.map((metric) => (
                    <div key={metric.value + metric.label}>
                      <div
                        className={`text-4xl font-bold ${
                          project.categoryColor === "orange" ? "text-[#ff8d4d]" : "text-[#3f6bff]"
                        }`}
                      >
                        {metric.value}
                      </div>
                      <p className="mt-1 text-base text-slate-300 md:text-lg">{metric.label}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-[#2c557f] bg-[#122d4f] px-3 py-1 text-sm text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="border-t border-[#234c79] p-5">
                <button className="btn-outline w-full justify-center">
                  Voir le cas d etude {"->"}
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
