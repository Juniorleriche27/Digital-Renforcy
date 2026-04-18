"use client";

import { useState, useRef, useEffect } from "react";
import { contact } from "@/lib/data";

const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8000";

type Message = { role: "user" | "bot"; text: string };

export default function FloatingAssistant() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "bot", text: "Bonjour ! Je suis l'assistant Digital Renforcy. Comment puis-je vous aider ?" },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [sessionId, setSessionId] = useState<string | null>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, open]);

  const send = async () => {
    const text = input.trim();
    if (!text || loading) return;
    setInput("");
    setMessages((prev) => [...prev, { role: "user", text }]);
    setLoading(true);
    try {
      const res = await fetch(`${API_URL}/api/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text, session_id: sessionId }),
      });
      const data = (await res.json()) as { reply: string; session_id: string };
      setSessionId(data.session_id);
      setMessages((prev) => [...prev, { role: "bot", text: data.reply }]);
    } catch {
      setMessages((prev) => [...prev, { role: "bot", text: "Une erreur est survenue. Réessayez ou contactez-nous sur WhatsApp." }]);
    } finally {
      setLoading(false);
    }
  };

  const handleKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") send();
  };

  return (
    <>
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="Ouvrir l'assistant"
        className="fixed bottom-6 right-6 z-50 grid h-16 w-16 place-items-center rounded-full border border-[#4a79ff]/60 bg-gradient-to-b from-[#3b65ff] to-[#2b4df0] text-white shadow-[0_20px_55px_-22px_rgba(58,104,255,0.95)] transition-transform hover:scale-[1.03]"
      >
        {open ? (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M6 6l12 12M6 18L18 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
          </svg>
        ) : (
          <svg width="23" height="23" viewBox="0 0 24 24" fill="none">
            <path d="M20 11.2C20 15.6 16.3 19.2 11.7 19.2H9.8L5 22L6.5 17.3C4.9 15.9 4 13.7 4 11.2C4 6.8 7.7 3.2 12.3 3.2C16.9 3.2 20 6.8 20 11.2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="9.5" cy="11.3" r="1.1" fill="currentColor" />
            <circle cx="12.8" cy="11.3" r="1.1" fill="currentColor" />
            <circle cx="16.1" cy="11.3" r="1.1" fill="currentColor" />
          </svg>
        )}
      </button>

      {open && (
        <div className="fixed bottom-28 right-6 z-50 w-[92vw] max-w-sm overflow-hidden rounded-2xl border border-[#2f5f93] bg-[#0e2748] shadow-[0_30px_70px_-35px_rgba(37,97,255,0.95)] flex flex-col" style={{ maxHeight: "70vh" }}>
          {/* Header */}
          <div className="flex items-center gap-3 border-b border-[#2c5583] bg-[#12325a] px-4 py-3 text-white shrink-0">
            <div className="grid h-9 w-9 place-items-center rounded-full bg-[#2c61f0] text-xs font-bold">DR</div>
            <div className="flex-1">
              <div className="text-sm font-semibold">Assistant Digital Renforcy</div>
              <div className="flex items-center gap-1.5 text-[11px] text-emerald-300">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                En ligne · répond en quelques secondes
              </div>
            </div>
            <button onClick={() => setOpen(false)} aria-label="Fermer" className="grid h-7 w-7 place-items-center rounded-full hover:bg-white/10">×</button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto space-y-3 bg-[#0d213d] p-4">
            {messages.map((msg, i) => (
              <div key={i} className={msg.role === "bot" ? "flex justify-start" : "flex justify-end"}>
                <div className={`max-w-[88%] rounded-2xl px-3 py-2 text-sm whitespace-pre-wrap ${
                  msg.role === "bot"
                    ? "rounded-tl-sm border border-[#2f5888] bg-[#123462] text-slate-100"
                    : "rounded-tr-sm border border-[#3a5f88] bg-[#253f5f] text-slate-200"
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="max-w-[88%] rounded-2xl rounded-tl-sm border border-[#2f5888] bg-[#123462] px-3 py-2 text-sm text-slate-400 italic">
                  En train d'écrire…
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <div className="shrink-0 border-t border-[#294f79] bg-[#102b4c] p-3 space-y-2">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKey}
                placeholder="Posez votre question…"
                disabled={loading}
                className="flex-1 rounded-xl border border-[#315a86] bg-[#1a3456] px-3 py-2 text-sm text-slate-200 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-[#4a84ff] disabled:opacity-50"
              />
              <button
                onClick={send}
                disabled={loading || !input.trim()}
                className="grid h-9 w-9 place-items-center rounded-xl bg-[#2e55ff] text-white hover:brightness-110 disabled:opacity-40"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M22 2L11 13M22 2L15 22L11 13M22 2L2 9L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
            <div className="flex gap-2">
              <a href={contact.calendly} target="_blank" rel="noreferrer" className="flex-1 rounded-xl bg-gradient-to-r from-[#2e55ff] to-[#3e70ff] px-3 py-2 text-center text-xs font-semibold text-white hover:brightness-110">
                Audit gratuit
              </a>
              <a href={contact.whatsapp} target="_blank" rel="noreferrer" className="flex-1 rounded-xl border border-[#3b6695] bg-[#173a65] px-3 py-2 text-center text-xs font-semibold text-slate-100 hover:bg-[#1c4575]">
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
