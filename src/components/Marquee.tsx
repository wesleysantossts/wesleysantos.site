const TOKENS = [
  "NODE.JS",
  "TYPESCRIPT",
  "POSTGRESQL",
  "MONGODB",
  "REDIS",
  "DOCKER",
  "AWS",
  "NEST.JS",
  "EXPRESS",
  "NEXT.JS",
  "REACT",
  "REST APIs",
  "CI/CD",
  "GEMINI",
  "CHATGPT",
];

export function Marquee() {
  return (
    <div className="relative w-full overflow-hidden border-y border-[color:var(--color-line)] bg-[color:var(--color-ink-2)] py-5">
      <div className="flex w-max animate-marquee gap-10 font-mono text-xs tracking-[0.2em] text-[color:var(--color-bone-dim)]">
        {[...TOKENS, ...TOKENS, ...TOKENS, ...TOKENS].map((token, i) => (
          <span key={i} className="flex items-center gap-10 whitespace-nowrap">
            {token}
            <span
              aria-hidden
              className="inline-block h-px w-12 bg-[color:var(--color-line-2)]"
            />
          </span>
        ))}
      </div>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[color:var(--color-ink-2)] to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[color:var(--color-ink-2)] to-transparent"
      />
    </div>
  );
}
