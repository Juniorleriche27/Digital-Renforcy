"use client";

import { useState } from "react";
import { contact } from "@/lib/data";

const SERVICES = [
  { id: "web", label: "Développement Web", icon: "🌐", desc: "Site vitrine, e-commerce, application web sur mesure" },
  { id: "acquisition", label: "Automatisation & Acquisition", icon: "🎯", desc: "Leads automatisés, tunnels de conversion, chatbot IA" },
  { id: "combo", label: "Offre Combinée", icon: "🔥", desc: "Site + Acquisition — la stratégie digitale complète" },
];

const SECTORS = [
  "Rénovation / BTP / Artisan",
  "Électricien",
  "Plombier",
  "Peintre / Décorateur",
  "Maçonnerie / Carrelage",
  "Menuiserie / Charpente",
  "Isolation / Chauffage / Énergie",
  "Organisme de formation",
  "Coach / Consultant",
  "E-commerce",
  "Immobilier",
  "Santé / Bien-être",
  "Restaurant / Hôtellerie",
  "Autre",
];

const FORMULES = [
  "Site Essentiel — 200€/mois",
  "Site Pro — 300€/mois",
  "Acquisition Essentielle — 1 200€/mois",
  "Acquisition Pro — 1 800€/mois",
  "Offre Combinée — à partir de 1 400€/mois",
  "Je ne sais pas encore",
];

const COMPANY_SIZES = ["Indépendant", "TPE (1-9)", "PME (10-49)", "50+"];

const OBJECTIFS = [
  "Obtenir plus de clients locaux",
  "Améliorer ma visibilité sur Google",
  "Automatiser mon acquisition de prospects",
  "Créer ou refaire mon site web",
  "Lancer mon activité en ligne",
  "Autre",
];

const DISCOVERY = ["Google Search", "LinkedIn", "Instagram / Facebook", "Recommandation", "Autre"];

const TIME_SLOTS = Array.from({ length: 19 }, (_, i) => {
  const h = Math.floor(i / 2) + 9;
  const m = i % 2 === 0 ? "00" : "30";
  return `${String(h).padStart(2, "0")}h${m}`;
});

const STEPS = ["Votre projet", "Votre entreprise", "Vos coordonnées", "Confirmation"];

type FormData = {
  service: string; secteur: string; secteur_autre: string; formule: string;
  company_name: string; company_size: string; situation: string; objectif: string;
  first_name: string; last_name: string; email: string; phone: string;
  website: string; discovery: string; callback_date: string; callback_time: string;
  consent: boolean;
};

const INITIAL: FormData = {
  service: "", secteur: "", secteur_autre: "", formule: "",
  company_name: "", company_size: "", situation: "", objectif: "",
  first_name: "", last_name: "", email: "", phone: "",
  website: "", discovery: "", callback_date: "", callback_time: "",
  consent: false,
};

const inp = "mt-2 w-full rounded-xl border border-[#315a86] bg-[#1a3456] px-4 py-3 text-sm text-slate-200 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-[#4a84ff]";
const lbl = "block text-sm font-medium text-slate-300";

export default function ContactMultiStepForm() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState<FormData>(INITIAL);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const set = (key: keyof FormData, value: string | boolean) =>
    setForm((p) => ({ ...p, [key]: value }));

  const canProceed = (): boolean => {
    if (step === 1) return form.service !== "";
    if (step === 3) return form.first_name.trim() !== "" && form.last_name.trim() !== "" && form.email.trim() !== "";
    if (step === 4) return form.consent;
    return true;
  };

  const handleSubmit = async () => {
    setStatus("submitting");
    setErrorMsg("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: `${form.first_name} ${form.last_name}`.trim(),
          first_name: form.first_name,
          last_name: form.last_name,
          email: form.email,
          phone: form.phone,
          sector: form.secteur === "Autre" && form.secteur_autre ? form.secteur_autre : (form.secteur || "autre"),
          service: form.service,
          formule: form.formule,
          company_name: form.company_name,
          company_size: form.company_size,
          situation: form.situation,
          objectif: form.objectif,
          website: form.website,
          discovery_source: form.discovery,
          callback_date: form.callback_date,
          callback_time: form.callback_time,
          consent: form.consent,
          source: "contact-page",
        }),
      });
      if (!res.ok) {
        const data = (await res.json()) as { error?: string };
        throw new Error(data.error ?? "Erreur lors de l'envoi.");
      }
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Erreur inconnue.");
    }
  };

  if (status === "success") {
    return (
      <div className="dark-card rounded-3xl border border-emerald-500/40 p-8 text-center">
        <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-emerald-500/20 text-3xl">✓</div>
        <h3 className="mt-5 text-2xl font-bold text-slate-100">Votre demande est envoyée !</h3>
        <p className="mt-3 text-base leading-relaxed text-slate-300">
          Notre équipe vous contactera dans les <strong>24h ouvrables</strong>.
          {form.callback_date && form.callback_time && (
            <> Rappel prévu le <strong>{form.callback_date}</strong> à <strong>{form.callback_time}</strong>.</>
          )}
        </p>
        {form.email && (
          <p className="mt-2 text-sm text-slate-400">Confirmation envoyée à {form.email}.</p>
        )}
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <a href={contact.calendly} target="_blank" rel="noreferrer" className="btn-primary">
            📅 Réserver mon audit gratuit
          </a>
          <a href={contact.whatsapp} target="_blank" rel="noreferrer" className="btn-outline">
            💬 WhatsApp
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="dark-card rounded-3xl">
      {/* Progress bar */}
      <div className="border-b border-[#24486f] px-6 pb-5 pt-6">
        <div className="mb-5 flex items-center gap-1 sm:gap-0">
          {STEPS.map((label, i) => (
            <div key={label} className="flex flex-1 items-center">
              <div className="flex items-center gap-2">
                <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold transition-colors ${
                  i + 1 < step ? "bg-emerald-500 text-white" :
                  i + 1 === step ? "bg-[#3f6bff] text-white" :
                  "border border-[#315a86] bg-[#1a3456] text-slate-400"
                }`}>
                  {i + 1 < step ? "✓" : i + 1}
                </div>
                <span className={`hidden text-xs font-medium sm:block ${i + 1 === step ? "text-slate-200" : "text-slate-500"}`}>
                  {label}
                </span>
              </div>
              {i < STEPS.length - 1 && (
                <div className={`mx-2 h-px flex-1 ${i + 1 < step ? "bg-emerald-500" : "bg-[#315a86]"}`} />
              )}
            </div>
          ))}
        </div>
        <h2 className="text-xl font-bold text-slate-100">
          Étape {step}/{STEPS.length} — <span className="text-[#79acff]">{STEPS[step - 1]}</span>
        </h2>
      </div>

      <div className="p-6">
        {/* Step 1 — Votre projet */}
        {step === 1 && (
          <div className="space-y-6">
            <div>
              <label className={lbl}>
                Service souhaité <span className="text-rose-400">*</span>
                {form.service === "" && (
                  <span className="ml-2 text-xs font-normal text-amber-400">← Cliquez sur une carte pour continuer</span>
                )}
              </label>
              <div className="mt-3 grid gap-3 sm:grid-cols-3">
                {SERVICES.map((s) => (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => set("service", s.id)}
                    className={`relative rounded-xl border-2 p-4 text-left transition-all ${
                      form.service === s.id
                        ? "border-[#3f6bff] bg-[#162d5a] shadow-[0_0_0_3px_rgba(63,107,255,0.4)]"
                        : "border-[#315a86] bg-[#102848] hover:border-[#4a79ff]"
                    }`}
                  >
                    {form.service === s.id && (
                      <span className="absolute right-3 top-3 grid h-5 w-5 place-items-center rounded-full bg-[#3f6bff] text-[10px] text-white">✓</span>
                    )}
                    <div className="text-2xl">{s.icon}</div>
                    <p className="mt-2 text-sm font-bold text-slate-100">{s.label}</p>
                    <p className="mt-1 text-xs leading-relaxed text-slate-400">{s.desc}</p>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label htmlFor="secteur" className={lbl}>Votre secteur d'activité</label>
              <select id="secteur" value={form.secteur} onChange={(e) => set("secteur", e.target.value)} className={inp}>
                <option value="">— Choisir votre secteur —</option>
                {SECTORS.map((s) => <option key={s} value={s}>{s}</option>)}
              </select>
              {form.secteur === "Autre" && (
                <input
                  type="text"
                  placeholder="Précisez votre secteur d'activité..."
                  value={form.secteur_autre}
                  onChange={(e) => set("secteur_autre", e.target.value)}
                  className={inp}
                />
              )}
            </div>

            <div>
              <label htmlFor="formule" className={lbl}>Formule envisagée</label>
              <select id="formule" value={form.formule} onChange={(e) => set("formule", e.target.value)} className={inp}>
                <option value="">— Choisir une formule —</option>
                {FORMULES.map((f) => <option key={f} value={f}>{f}</option>)}
              </select>
            </div>
          </div>
        )}

        {/* Step 2 — Votre entreprise */}
        {step === 2 && (
          <div className="space-y-5">
            <div>
              <label htmlFor="company_name" className={lbl}>Nom de l'entreprise</label>
              <input
                id="company_name" type="text" placeholder="Ex : KBM Rénovation"
                value={form.company_name} onChange={(e) => set("company_name", e.target.value)}
                className={inp}
              />
            </div>

            <div>
              <label className={lbl}>Taille de l'entreprise</label>
              <div className="mt-2 grid grid-cols-2 gap-2 sm:grid-cols-4">
                {COMPANY_SIZES.map((sz) => (
                  <button
                    key={sz} type="button" onClick={() => set("company_size", sz)}
                    className={`rounded-xl border px-3 py-2.5 text-xs font-semibold transition-all ${
                      form.company_size === sz
                        ? "border-[#3f6bff] bg-[#162d5a] text-slate-100"
                        : "border-[#315a86] bg-[#102848] text-slate-400 hover:border-[#4a79ff]/60"
                    }`}
                  >
                    {sz}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label htmlFor="situation" className={lbl}>Votre situation actuelle</label>
              <textarea
                id="situation" rows={3}
                placeholder="Ex : Je n'ai pas de site web, je génère mes clients par bouche-à-oreille..."
                value={form.situation} onChange={(e) => set("situation", e.target.value)}
                className={inp}
              />
            </div>

            <div>
              <label htmlFor="objectif" className={lbl}>Votre objectif principal</label>
              <select id="objectif" value={form.objectif} onChange={(e) => set("objectif", e.target.value)} className={inp}>
                <option value="">— Choisir votre objectif —</option>
                {OBJECTIFS.map((o) => <option key={o} value={o}>{o}</option>)}
              </select>
            </div>
          </div>
        )}

        {/* Step 3 — Vos coordonnées */}
        {step === 3 && (
          <div className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="first_name" className={lbl}>Prénom *</label>
                <input id="first_name" type="text" placeholder="Ex : Karim" value={form.first_name}
                  onChange={(e) => set("first_name", e.target.value)} className={inp} />
              </div>
              <div>
                <label htmlFor="last_name" className={lbl}>Nom *</label>
                <input id="last_name" type="text" placeholder="Ex : Benali" value={form.last_name}
                  onChange={(e) => set("last_name", e.target.value)} className={inp} />
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="email" className={lbl}>Email *</label>
                <input id="email" type="email" placeholder="vous@exemple.fr" value={form.email}
                  onChange={(e) => set("email", e.target.value)} className={inp} />
              </div>
              <div>
                <label htmlFor="phone" className={lbl}>Téléphone</label>
                <input id="phone" type="tel" placeholder="06 XX XX XX XX" value={form.phone}
                  onChange={(e) => set("phone", e.target.value)} className={inp} />
              </div>
            </div>

            <div>
              <label htmlFor="website" className={lbl}>Votre site web actuel (si existant)</label>
              <input id="website" type="url" placeholder="https://exemple.fr" value={form.website}
                onChange={(e) => set("website", e.target.value)} className={inp} />
            </div>

            <div>
              <label htmlFor="discovery" className={lbl}>Comment nous avez-vous découvert ?</label>
              <select id="discovery" value={form.discovery} onChange={(e) => set("discovery", e.target.value)} className={inp}>
                <option value="">— Choisir —</option>
                {DISCOVERY.map((s) => <option key={s} value={s}>{s}</option>)}
              </select>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="callback_date" className={lbl}>Quand vous appeler ? (15 min)</label>
                <input
                  id="callback_date" type="date"
                  min={new Date().toISOString().split("T")[0]}
                  value={form.callback_date}
                  onChange={(e) => set("callback_date", e.target.value)}
                  className={inp}
                />
              </div>
              <div>
                <label htmlFor="callback_time" className={lbl}>Heure préférée</label>
                <select id="callback_time" value={form.callback_time}
                  onChange={(e) => set("callback_time", e.target.value)} className={inp}>
                  <option value="">— 09h00 – 18h00 —</option>
                  {TIME_SLOTS.map((t) => <option key={t} value={t}>{t}</option>)}
                </select>
              </div>
            </div>
          </div>
        )}

        {/* Step 4 — Confirmation */}
        {step === 4 && (
          <div className="space-y-5">
            <div className="rounded-2xl border border-[#2a537f] bg-[#0d2645] p-5 text-sm text-slate-300 space-y-2.5">
              <h3 className="text-base font-bold text-slate-100">Récapitulatif de votre demande</h3>
              {form.service && (
                <p>🎯 <strong className="text-slate-200">Service :</strong>{" "}
                  {SERVICES.find((s) => s.id === form.service)?.label}
                </p>
              )}
              {form.secteur && (
                <p>🏢 <strong className="text-slate-200">Secteur :</strong>{" "}
                  {form.secteur === "Autre" && form.secteur_autre ? form.secteur_autre : form.secteur}
                </p>
              )}
              {form.formule && <p>💼 <strong className="text-slate-200">Formule :</strong> {form.formule}</p>}
              {form.company_name && (
                <p>🏭 <strong className="text-slate-200">Entreprise :</strong> {form.company_name}
                  {form.company_size && ` (${form.company_size})`}
                </p>
              )}
              {form.objectif && <p>🚀 <strong className="text-slate-200">Objectif :</strong> {form.objectif}</p>}
              <p>👤 <strong className="text-slate-200">Contact :</strong> {form.first_name} {form.last_name} — {form.email}</p>
              {form.phone && <p>📞 <strong className="text-slate-200">Téléphone :</strong> {form.phone}</p>}
              {form.callback_date && (
                <p>📅 <strong className="text-slate-200">Rappel :</strong>{" "}
                  {form.callback_date}{form.callback_time && ` à ${form.callback_time}`}
                </p>
              )}
            </div>

            <label className="flex cursor-pointer items-start gap-3">
              <input
                type="checkbox"
                checked={form.consent}
                onChange={(e) => set("consent", e.target.checked)}
                className="mt-1 h-4 w-4 shrink-0 rounded accent-[#3f6bff]"
              />
              <span className="text-sm leading-relaxed text-slate-300">
                J'accepte que Digital Renforcy traite mes données personnelles pour me contacter
                et me proposer ses services. Données 100% confidentielles, jamais revendues.
              </span>
            </label>

            {status === "error" && (
              <p className="rounded-xl bg-rose-500/10 px-4 py-3 text-sm text-rose-400">{errorMsg}</p>
            )}
          </div>
        )}

        {/* Navigation */}
        <div className="mt-8 flex items-center justify-between">
          {step > 1 ? (
            <button type="button" onClick={() => setStep((s) => s - 1)} className="btn-outline">
              ← Précédent
            </button>
          ) : <div />}

          {step < 4 ? (
            <button
              type="button"
              onClick={() => setStep((s) => s + 1)}
              disabled={!canProceed()}
              className="btn-primary disabled:cursor-not-allowed disabled:opacity-40"
            >
              Suivant →
            </button>
          ) : (
            <button
              type="button"
              onClick={handleSubmit}
              disabled={!canProceed() || status === "submitting"}
              className="btn-primary disabled:cursor-not-allowed disabled:opacity-40"
            >
              {status === "submitting" ? "Envoi en cours..." : "✈ Envoyer ma demande"}
            </button>
          )}
        </div>

        <p className="mt-4 text-center text-xs text-slate-500">
          🔒 Données 100% confidentielles — Réponse sous 24h — Sans engagement
        </p>
      </div>
    </div>
  );
}
