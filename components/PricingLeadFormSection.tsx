"use client";

import type { FormEvent } from "react";
import { useState } from "react";
import { pricingCards } from "@/lib/data";

type LeadForm = {
  name: string;
  phone: string;
  sector: string;
};

export default function PricingLeadFormSection() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [form, setForm] = useState<LeadForm>({ name: "", phone: "", sector: "" });

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        const payload = (await response.json()) as { error?: string };
        throw new Error(payload.error ?? "Impossible d'envoyer la demande.");
      }

      setStatus("success");
    } catch (error) {
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "Erreur inconnue.");
    }
  };

  return (
    <section id="pricing" className="dark-section">
      <div className="container-shell">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-100 sm:text-4xl md:text-5xl lg:text-6xl">
            Choisissez votre <span className="title-gradient">premier pas</span>
          </h2>
          <p className="mt-4 text-sm text-slate-300 sm:text-base md:text-xl">
            Selectionnez le service qui correspond a votre besoin. On vous rappelle sous 24h.
          </p>
        </div>

        <div className="mx-auto mt-10 grid max-w-6xl gap-4 sm:grid-cols-2 md:grid-cols-3">
          {pricingCards.map((card) => (
            <article key={card.title} className="dark-card rounded-2xl border border-[#274f7c] p-6">
              <div className="mb-3 flex items-start justify-between gap-3">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[#14365f] text-lg sm:h-11 sm:w-11 sm:text-xl">
                  {card.icon === "globe" ? "🌐" : card.icon === "target" ? "🎯" : "🔥"}
                </span>
                {card.badge ? (
                  <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-[11px] font-bold uppercase text-emerald-400">
                    {card.badge}
                  </span>
                ) : null}
              </div>
              <h3 className="text-lg font-bold text-slate-100 sm:text-xl md:text-3xl">{card.title}</h3>
              <p className="mt-2 font-semibold text-[#5a8fff]">{card.price}</p>
              <ul className="mt-5 space-y-2">
                {card.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-slate-300 md:text-lg">
                    <span className="text-emerald-400">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mx-auto mt-8 max-w-6xl rounded-3xl border border-[#264d7a] bg-[#102848] px-4 py-6 sm:px-6 sm:py-7 md:px-8">
          {status === "success" ? (
            <div className="py-8 text-center">
              <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-emerald-100 text-2xl text-emerald-700">
                ✓
              </div>
              <h3 className="mt-4 text-2xl font-semibold text-slate-100 md:text-4xl">Demande envoyee</h3>
              <p className="mt-2 text-sm text-slate-300 sm:text-base md:text-xl">
                Retour sous <strong>24h</strong> pour cadrer votre projet.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid gap-4 md:grid-cols-2">
              <div>
                <label htmlFor="lead-name" className="text-sm font-medium text-slate-200 md:text-base lg:text-lg">
                  Votre prenom *
                </label>
                <input
                  id="lead-name"
                  required
                  type="text"
                  placeholder="Ex : Karim"
                  value={form.name}
                  onChange={(event) => setForm({ ...form, name: event.target.value })}
                  className="mt-2 w-full rounded-xl border border-[#315a86] bg-[#1a3456] px-4 py-3 text-sm text-slate-200 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-[#4a84ff] md:text-base lg:text-lg"
                />
              </div>

              <div>
                <label htmlFor="lead-phone" className="text-sm font-medium text-slate-200 md:text-base lg:text-lg">
                  Telephone *
                </label>
                <input
                  id="lead-phone"
                  required
                  type="tel"
                  placeholder="06 XX XX XX XX"
                  value={form.phone}
                  onChange={(event) => setForm({ ...form, phone: event.target.value })}
                  className="mt-2 w-full rounded-xl border border-[#315a86] bg-[#1a3456] px-4 py-3 text-sm text-slate-200 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-[#4a84ff] md:text-base lg:text-lg"
                />
              </div>

              <div className="md:col-span-2">
                <label htmlFor="lead-sector" className="text-sm font-medium text-slate-200 md:text-base lg:text-lg">
                  Votre secteur *
                </label>
                <select
                  id="lead-sector"
                  required
                  value={form.sector}
                  onChange={(event) => setForm({ ...form, sector: event.target.value })}
                  className="mt-2 w-full rounded-xl border border-[#315a86] bg-[#1a3456] px-4 py-3 text-sm text-slate-200 focus:outline-none focus:ring-2 focus:ring-[#4a84ff] md:text-base lg:text-lg"
                >
                  <option value="">- Choisir -</option>
                  <option value="renovation">Entreprise renovation / artisan</option>
                  <option value="formation">Organisme de formation</option>
                  <option value="autre">Autre secteur</option>
                </select>
              </div>

              <div className="md:col-span-2">
                <button type="submit" disabled={status === "submitting"} className="btn-primary w-full">
                  {status === "submitting" ? "Envoi en cours..." : "Etre rappelle gratuitement"}
                </button>
                <p className="mt-3 text-center text-xs text-slate-400">
                  Informations 100% confidentielles - Rappel sous 24h
                </p>
                {status === "error" ? (
                  <p className="mt-2 text-center text-xs text-rose-400">{errorMessage}</p>
                ) : null}
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
