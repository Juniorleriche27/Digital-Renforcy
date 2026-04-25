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
    <div className="overflow-hidden border-y border-[#1f4069] bg-[#081a35]/60 py-3 sm:py-4">
      <div className="tech-marquee-track flex gap-3 sm:gap-4" aria-hidden>
        {TOOLS_DOUBLE.map((tool, i) => (
          <span
            key={i}
            className="flex shrink-0 whitespace-nowrap items-center gap-2 rounded-full border border-[#264f7b] bg-[#0d2748] px-3 py-1.5 text-xs font-semibold text-slate-300 sm:px-4 sm:py-2 sm:text-sm"
          >
            <span>{tool.emoji}</span>
            {tool.name}
          </span>
        ))}
      </div>
    </div>
  );
}
