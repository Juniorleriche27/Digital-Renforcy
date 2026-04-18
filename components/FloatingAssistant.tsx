"use client";

import { useState, useRef, useEffect } from "react";
import { contact } from "@/lib/data";

const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8000";

type Message = { role: "user" | "bot"; text: string; id: number; done: boolean };

// Supprime le markdown brut (#, **, ***, etc.) pour un rendu propre
function cleanText(raw: string): string {
  return raw
    .replace(/#{1,6}\s*/g, "")
    .replace(/\*{1,3}([^*\n]+)\*{1,3}/g, "$1")
    .replace(/_{1,2}([^_\n]+)_{1,2}/g, "$1")
    .replace(/`{1,3}([^`]*)`{1,3}/g, "$1")
    .replace(/^\s*[-*+]\s+/gm, "• ")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

const WELCOME = "Bonjour ! Je suis l'assistant de Digital Renforcy.\n\nJe suis là pour comprendre votre projet et vous orienter vers la meilleure solution. Dites-moi : quel est votre principal besoin en ce moment ?";

export default function FloatingAssistant() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "bot", text: WELCOME, id: 0, done: true },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [sessionId, setSessionId] = useState<string | null>(null);
  const [showCta, setShowCta] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const typingRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, open]);

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 100);
  }, [open]);

  // Compte les échanges pour afficher la CTA rendez-vous
  useEffect(() => {
    const userCount = messages.filter((m) => m.role === "user").length;
    if (userCount >= 2) setShowCta(true);
  }, [messages]);

  const typeMessage = (text: string): Promise<void> => {
    return new Promise((resolve) => {
      const id = Date.now();
      const clean = cleanText(text);
      setMessages((prev) => [...prev, { role: "bot", text: "", id, done: false }]);

      let i = 0;
      // Vitesse adaptée : les phrases courtes vont plus vite
      const speed = clean.length > 200 ? 12 : 18;

      typingRef.current = setInterval(() => {
        i++;
        setMessages((prev) =>
          prev.map((m) => (m.id === id ? { ...m, text: clean.slice(0, i) } : m)),
        );
        if (i >= clean.length) {
          clearInterval(typingRef.current!);
          setMessages((prev) => prev.map((m) => (m.id === id ? { ...m, done: true } : m)));
          resolve();
        }
      }, speed);
    });
  };

  const send = async () => {
    const text = input.trim();
    if (!text || loading) return;
    setInput("");
    setMessages((prev) => [...prev, { role: "user", text, id: Date.now(), done: true }]);
    setLoading(true);
    try {
      const res = await fetch(`${API_URL}/api/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text, session_id: sessionId }),
      });
      const data = (await res.json()) as { reply: string; session_id: string };
      setSessionId(data.session_id);
      await typeMessage(data.reply);
    } catch {
      await typeMessage("Une erreur est survenue. Contactez-nous directement sur WhatsApp ou réservez un appel gratuit.");
    } finally {
      setLoading(false);
    }
  };

  const handleKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") send();
  };

  return (
    <>
      {/* Bouton flottant */}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="Ouvrir l'assistant"
        className="fixed bottom-4 right-4 z-50 grid h-14 w-14 place-items-center rounded-full border border-[#4a79ff]/60 bg-gradient-to-b from-[#3b65ff] to-[#2b4df0] text-white shadow-[0_20px_55px_-22px_rgba(58,104,255,0.95)] transition-all hover:scale-[1.06] hover:shadow-[0_24px_60px_-20px_rgba(58,104,255,0.99)] sm:bottom-6 sm:right-6 sm:h-16 sm:w-16"
      >
        {open ? (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M6 6l12 12M6 18L18 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
          </svg>
        ) : (
          <>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M20 11.2C20 15.6 16.3 19.2 11.7 19.2H9.8L5 22L6.5 17.3C4.9 15.9 4 13.7 4 11.2C4 6.8 7.7 3.2 12.3 3.2C16.9 3.2 20 6.8 20 11.2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="9.5" cy="11.3" r="1.1" fill="currentColor" />
              <circle cx="12.8" cy="11.3" r="1.1" fill="currentColor" />
              <circle cx="16.1" cy="11.3" r="1.1" fill="currentColor" />
            </svg>
            {/* Badge notification */}
            <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-emerald-400 text-[9px] font-bold text-black">1</span>
          </>
        )}
      </button>

      {/* Fenêtre chat */}
      {open && (
        <div
          className="fixed bottom-20 right-3 z-50 flex flex-col overflow-hidden rounded-2xl border border-[#2a5a8e]/80 bg-[#0b2040] shadow-[0_40px_90px_-30px_rgba(30,80,220,0.85)] sm:bottom-28 sm:right-6 sm:rounded-3xl"
          style={{ width: "min(420px, calc(100vw - 24px))", height: "min(600px, calc(100dvh - 100px))" }}
        >
          {/* Header */}
          <div className="flex shrink-0 items-center gap-3 border-b border-[#1e4a75] bg-gradient-to-r from-[#0f2f5c] to-[#112d58] px-5 py-4">
            <div className="relative grid h-11 w-11 shrink-0 place-items-center rounded-full bg-gradient-to-br from-[#3b6aff] to-[#2349e0] text-sm font-bold text-white shadow-lg">
              DR
              <span className="absolute -bottom-0.5 -right-0.5 h-3.5 w-3.5 rounded-full border-2 border-[#0b2040] bg-emerald-400" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-[15px] font-semibold text-slate-100">Assistant Digital Renforcy</div>
              <div className="text-[11px] text-emerald-300">En ligne · répond en quelques secondes</div>
            </div>
            <button
              onClick={() => setOpen(false)}
              aria-label="Fermer"
              className="grid h-8 w-8 shrink-0 place-items-center rounded-full text-slate-400 transition hover:bg-white/10 hover:text-white"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M6 6l12 12M6 18L18 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 space-y-4 overflow-y-auto bg-[#091c38] p-4 pb-2">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.role === "bot" ? "justify-start" : "justify-end"}`}>
                {msg.role === "bot" && (
                  <div className="mr-2 mt-1 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-[#1e3e78] text-[10px] font-bold text-blue-200">
                    DR
                  </div>
                )}
                <div
                  className={`max-w-[82%] rounded-2xl px-4 py-3 text-sm leading-relaxed whitespace-pre-wrap ${
                    msg.role === "bot"
                      ? "rounded-tl-sm border border-[#1e4878] bg-[#0f2d56] text-slate-100"
                      : "rounded-tr-sm border border-[#3a6aaa]/50 bg-gradient-to-br from-[#2247a0] to-[#1a3880] text-white"
                  }`}
                >
                  {msg.text}
                  {/* Curseur clignotant pendant la frappe */}
                  {msg.role === "bot" && !msg.done && (
                    <span className="ml-0.5 inline-block h-4 w-0.5 animate-pulse bg-blue-300" />
                  )}
                </div>
              </div>
            ))}

            {/* Indicateur "en train d'écrire" */}
            {loading && (
              <div className="flex items-end gap-2">
                <div className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-[#1e3e78] text-[10px] font-bold text-blue-200">DR</div>
                <div className="flex items-center gap-1.5 rounded-2xl rounded-tl-sm border border-[#1e4878] bg-[#0f2d56] px-4 py-3">
                  <span className="h-2 w-2 animate-bounce rounded-full bg-blue-400" style={{ animationDelay: "0ms" }} />
                  <span className="h-2 w-2 animate-bounce rounded-full bg-blue-400" style={{ animationDelay: "150ms" }} />
                  <span className="h-2 w-2 animate-bounce rounded-full bg-blue-400" style={{ animationDelay: "300ms" }} />
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* CTA rendez-vous (apparaît après 2 échanges) */}
          {showCta && (
            <div className="shrink-0 border-t border-[#1a3f68] bg-gradient-to-r from-[#0f2a50]/80 to-[#0d2545]/80 px-4 py-3">
              <p className="mb-2 text-center text-[11px] font-medium text-slate-400">
                Prêt à passer à l'action ?
              </p>
              <a
                href={contact.calendly}
                target="_blank"
                rel="noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#2e55ff] to-[#4a6fff] px-4 py-3 text-sm font-semibold text-white shadow-[0_8px_24px_-10px_rgba(46,85,255,0.8)] transition hover:brightness-110"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <rect x="3" y="4" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="2" />
                  <path d="M16 2v4M8 2v4M3 10h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
                Réserver mon appel stratégique gratuit
              </a>
            </div>
          )}

          {/* Input */}
          <div className="shrink-0 border-t border-[#1a3f68] bg-[#0d2448] px-4 py-3">
            <div className="flex gap-2">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKey}
                placeholder="Votre message…"
                disabled={loading}
                className="flex-1 rounded-xl border border-[#2a4f7a] bg-[#142a50] px-4 py-2.5 text-sm text-slate-100 placeholder:text-slate-500 focus:border-[#4a7fff] focus:outline-none focus:ring-1 focus:ring-[#4a7fff]/50 disabled:opacity-50"
              />
              <button
                onClick={send}
                disabled={loading || !input.trim()}
                aria-label="Envoyer"
                className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gradient-to-b from-[#3a60ff] to-[#2a4de0] text-white shadow-md transition hover:brightness-110 disabled:opacity-40"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M22 2L11 13M22 2L15 22L11 13M22 2L2 9L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
            <div className="mt-2 flex gap-2">
              <a
                href={contact.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="flex flex-1 items-center justify-center gap-1.5 rounded-xl border border-[#2d5a40] bg-[#0f2d1f] px-3 py-2 text-xs font-semibold text-emerald-300 transition hover:bg-[#163825]"
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12c0 1.85.5 3.58 1.37 5.07L2 22l5.07-1.35A9.96 9.96 0 0012 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm4.93 13.93c-.21.59-1.22 1.12-1.68 1.19-.42.06-.96.09-1.55-.1-.36-.11-.82-.27-1.4-.53-2.46-1.06-4.07-3.54-4.19-3.71-.12-.17-.99-1.32-.99-2.51 0-1.2.63-1.79.85-2.03.22-.24.48-.3.64-.3h.46c.15 0 .35-.06.55.42.21.51.71 1.75.77 1.88.06.13.1.28.02.45-.08.18-.12.28-.24.43-.12.15-.25.34-.36.45-.12.12-.24.25-.1.49.14.24.62.99 1.33 1.6.92.8 1.69 1.05 1.93 1.17.24.12.38.1.52-.06.14-.17.6-.7.76-.94.16-.24.32-.2.54-.12.22.08 1.4.66 1.64.78.24.12.4.18.46.28.06.1.06.57-.15 1.16z" />
                </svg>
                WhatsApp
              </a>
              {!showCta && (
                <a
                  href={contact.calendly}
                  target="_blank"
                  rel="noreferrer"
                  className="flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-[#2e55ff] to-[#3e6aff] px-3 py-2 text-xs font-semibold text-white transition hover:brightness-110"
                >
                  Audit gratuit
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
