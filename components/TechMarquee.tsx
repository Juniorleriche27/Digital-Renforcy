const TOOLS = [
  { name: "WordPress", emoji: "🔵" },
  { name: "Next.js", emoji: "⚫" },
  { name: "Google Ads", emoji: "🟢" },
  { name: "Meta Ads", emoji: "🔷" },
  { name: "ChatGPT", emoji: "🤖" },
  { name: "Claude AI", emoji: "🟠" },
  { name: "WhatsApp", emoji: "💬" },
  { name: "SEO Local", emoji: "📍" },
  { name: "Analytics", emoji: "📊" },
  { name: "Cloudflare", emoji: "🟡" },
  { name: "E-mailing", emoji: "✉️" },
  { name: "Automatisation", emoji: "⚙️" },
  { name: "CRM", emoji: "🗂️" },
  { name: "Stripe", emoji: "💳" },
  { name: "Zapier", emoji: "⚡" },
  { name: "Google Maps", emoji: "🗺️" },
];

const TOOLS_DOUBLE = [...TOOLS, ...TOOLS];

export default function TechMarquee() {
  return (
    <div className="border-y border-[#1f4069] bg-[#081a35]/60 py-4 overflow-hidden">
      <div className="tech-marquee-track flex gap-4" aria-hidden>
        {TOOLS_DOUBLE.map((tool, i) => (
          <span
            key={i}
            className="flex shrink-0 items-center gap-2 rounded-full border border-[#264f7b] bg-[#0d2748] px-4 py-2 text-sm font-semibold text-slate-300 whitespace-nowrap"
          >
            <span>{tool.emoji}</span>
            {tool.name}
          </span>
        ))}
      </div>
    </div>
  );
}
