type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
};

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: Props) {
  const alignClass = align === "center" ? "mx-auto text-center" : "text-left";

  return (
    <div className={`max-w-3xl ${alignClass}`}>
      {eyebrow ? <span className="badge-chip">{eyebrow}</span> : null}
      <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-100 sm:text-4xl md:text-5xl md:leading-[1.1]">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-4 text-base leading-relaxed text-slate-300 md:text-xl">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
