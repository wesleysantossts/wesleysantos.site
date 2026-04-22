"use client";

import Image from "next/image";
import TypeWriterEffect from "typewriter-effect";

import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedin, FaFilePdf } from "react-icons/fa";

import { Clock } from "./Clock";
import { Marquee } from "./Marquee";

const STRINGS = ["Back-End Engineer", "Node.js Craftsman", "API Architect"];

const STACK = [
  "Node.js",
  "TypeScript",
  "PostgreSQL",
  "MongoDB",
  "Redis",
  "Docker",
  "AWS",
  "Next.js",
];

const PROJECTS = [
  {
    idx: "01",
    title: "Simulador de Financiamento",
    domain: "simuladorfinanciamento.site",
    href: "https://simuladorfinanciamento.site/",
    image: "/assets/images/simulador-financiamento.jpeg",
    role: "Full-stack · Produção",
    year: "2025",
    stack: ["Next.js", "TypeScript", "SAC / Price"],
    description:
      "Plataforma para simulação de financiamentos imobiliários com cálculo de parcelas pelos sistemas SAC e Price, tabela de amortização e comparação entre modalidades.",
  },
];

export function Main() {
  return (
    <main className="bg-noise relative min-h-screen overflow-hidden bg-[color:var(--color-ink)] text-[color:var(--color-bone)]">
      {/* Ambient background layers */}
      <div
        aria-hidden
        className="bg-grid pointer-events-none absolute inset-0 opacity-60"
      />
      <div
        aria-hidden
        className="bg-halo pointer-events-none absolute inset-0"
      />

      {/* ── HUD: top bar ─────────────────────────────────────────── */}
      <header className="relative z-20 flex items-center justify-between border-b border-[color:var(--color-line)] px-6 py-4 font-mono text-[10px] uppercase tracking-[0.25em] text-[color:var(--color-bone-dim)] md:px-12">
        <div className="flex items-center gap-3">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-[color:var(--color-acid)] opacity-75 animate-pulse-soft" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[color:var(--color-acid)]" />
          </span>
          <span className="text-[color:var(--color-bone)]">
            WS<span className="text-[color:var(--color-acid)]">/</span>ONLINE
          </span>
        </div>

        <div className="hidden items-center gap-8 md:flex">
          <span>Santos · SP · BR</span>
          <span>-23.9608° / -46.3336°</span>
          <span>
            UTC-03 · <Clock />
          </span>
        </div>

        <div className="flex items-center gap-2 text-[color:var(--color-bone)]">
          <span className="text-[color:var(--color-ember)]">§</span>
          PORTFOLIO v4.7
        </div>
      </header>

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="relative z-10 mx-auto grid w-full max-w-[1320px] grid-cols-12 gap-x-4 px-6 pb-20 pt-16 md:px-12 md:pt-28">
        {/* Section index */}
        <div className="col-span-12 mb-10 flex items-end justify-between font-mono text-[10px] uppercase tracking-[0.3em] text-[color:var(--color-bone-mute)] md:mb-16">
          <div className="flex items-center gap-4">
            <span className="text-[color:var(--color-acid)]">§01</span>
            <span className="hidden h-px w-16 bg-[color:var(--color-line-2)] md:block" />
            <span>Introduction</span>
          </div>
          <span className="hidden md:inline">001 / 002</span>
        </div>

        {/* Kicker */}
        <p className="col-span-12 mb-6 font-mono text-[11px] uppercase tracking-[0.4em] text-[color:var(--color-bone-dim)] md:col-span-10 md:col-start-2">
          <span className="text-[color:var(--color-ember)]">//</span> Moldando o
          futuro através de linhas de código
        </p>

        {/* Big display name */}
        <h1 className="col-span-12 font-display text-[clamp(3.2rem,10vw,9rem)] font-light leading-[0.92] tracking-[-0.04em] md:col-span-11 md:col-start-2">
          <span className="block text-[color:var(--color-bone)]">Wesley</span>
          <span className="block italic text-[color:var(--color-bone)]">
            <span
              style={{ fontVariationSettings: `"opsz" 144, "SOFT" 100` }}
            >
              Santos
            </span>
            <span className="ml-2 align-top font-mono text-[0.18em] not-italic text-[color:var(--color-bone-mute)]">
              ⌁ dev
            </span>
          </span>
        </h1>

        {/* Role row */}
        <div className="col-span-12 mt-10 flex flex-col gap-4 md:col-span-10 md:col-start-2 md:mt-12 md:flex-row md:items-center md:gap-8">
          <div className="flex items-center gap-3">
            <span
              aria-hidden
              className="h-px w-8 bg-[color:var(--color-acid)]"
            />
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-[color:var(--color-bone-dim)]">
              Currently
            </span>
          </div>
          <div className="font-display text-2xl italic text-[color:var(--color-bone)] md:text-3xl">
            <TypeWriterEffect
              options={{
                strings: STRINGS,
                autoStart: true,
                loop: true,
                deleteSpeed: 30,
                delay: 70,
                cursor: "|",
                wrapperClassName: "font-display italic",
                cursorClassName:
                  "font-display not-italic text-[color:var(--color-acid)]",
              }}
            />
          </div>
        </div>

        {/* Bio + meta grid */}
        <div className="col-span-12 mt-16 grid grid-cols-12 gap-x-4 gap-y-10 md:col-span-11 md:col-start-2 md:mt-24">
          <div className="col-span-12 md:col-span-7">
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[color:var(--color-bone-mute)]">
              <span className="text-[color:var(--color-acid)]">→</span> About
            </p>
            <p className="mt-4 text-balance text-lg leading-relaxed text-[color:var(--color-bone)] md:text-xl">
              <span className="font-display text-3xl italic text-[color:var(--color-bone)] md:text-4xl">
                Quatro anos
              </span>{" "}
              construindo produtos back-end com{" "}
              <span className="text-[color:var(--color-acid)]">Node.js</span>,{" "}
              <span className="text-[color:var(--color-acid)]">TypeScript</span>{" "}
              e bancos relacionais/NoSQL. Foco em{" "}
              <span className="italic">arquitetura limpa</span>, automação de
              processos, infraestrutura em nuvem e boas práticas de segurança e
              CI/CD.
            </p>
          </div>

          <aside className="col-span-12 md:col-span-4 md:col-start-9">
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[color:var(--color-bone-mute)]">
              <span className="text-[color:var(--color-ember)]">→</span> Stack
            </p>
            <ul className="mt-4 flex flex-wrap gap-x-2 gap-y-1.5 font-mono text-xs text-[color:var(--color-bone-dim)]">
              {STACK.map((tech) => (
                <li
                  key={tech}
                  className="border border-[color:var(--color-line-2)] px-2.5 py-1.5 leading-none transition-colors duration-200 hover:border-[color:var(--color-acid)] hover:text-[color:var(--color-acid)]"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </aside>
        </div>

        {/* Contact rail */}
        <nav
          aria-label="Contatos"
          className="col-span-12 mt-16 flex flex-col gap-6 border-t border-[color:var(--color-line)] pt-8 md:col-span-11 md:col-start-2 md:flex-row md:items-center md:justify-between md:mt-20"
        >
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[color:var(--color-bone-mute)]">
            <span className="text-[color:var(--color-acid)]">▸</span> Get in
            touch
          </p>

          <ul className="flex flex-wrap items-center gap-3">
            <ContactLink
              href="https://www.linkedin.com/in/wesleysantos/"
              label="LinkedIn"
              icon={<FaLinkedin size={14} />}
            />
            <ContactLink
              href="https://github.com/wesleysantossts"
              label="GitHub"
              icon={<FaGithub size={14} />}
            />
            <ContactLink
              href="mailto:wesleysts.ws@gmail.com"
              label="E-mail"
              icon={<AiOutlineMail size={15} />}
              accent
            />
            <ContactLink
              href="/assets/documents/CV - Wesley Santos.pdf"
              label="CV.pdf"
              icon={<FaFilePdf size={13} />}
              download
            />
          </ul>
        </nav>

        {/* Scroll cue */}
        <div className="col-span-12 mt-24 flex items-center justify-center gap-3 font-mono text-[10px] uppercase tracking-[0.4em] text-[color:var(--color-bone-mute)]">
          <span className="relative block h-10 w-px overflow-hidden bg-[color:var(--color-line-2)]">
            <span className="absolute left-0 top-0 block h-4 w-px bg-[color:var(--color-acid)] animate-scroll-hint" />
          </span>
          <span>Scroll · Selected Work</span>
        </div>
      </section>

      <Marquee />

      {/* ── PROJECTS ─────────────────────────────────────────────── */}
      <section className="relative z-10 mx-auto w-full max-w-[1320px] px-6 pb-32 pt-24 md:px-12">
        <div className="mb-12 flex items-end justify-between font-mono text-[10px] uppercase tracking-[0.3em] text-[color:var(--color-bone-mute)] md:mb-20">
          <div className="flex items-center gap-4">
            <span className="text-[color:var(--color-acid)]">§02</span>
            <span className="hidden h-px w-16 bg-[color:var(--color-line-2)] md:block" />
            <span>Selected Work</span>
          </div>
          <span className="hidden md:inline">
            <span className="text-[color:var(--color-bone-dim)]">
              {String(PROJECTS.length).padStart(3, "0")}
            </span>{" "}
            · active
          </span>
        </div>

        <div className="mb-16 grid grid-cols-12 gap-x-4 md:mb-24">
          <h2 className="col-span-12 font-display text-[clamp(2.6rem,7vw,5.6rem)] font-light leading-[0.95] tracking-[-0.035em] md:col-span-10 md:col-start-2">
            Projetos em{" "}
            <span className="italic text-[color:var(--color-bone)]">
              produção
            </span>
            <span className="text-[color:var(--color-ember)]">.</span>
          </h2>
          <p className="col-span-12 mt-6 max-w-xl text-base leading-relaxed text-[color:var(--color-bone-dim)] md:col-span-6 md:col-start-2">
            Projetos reais rodando hoje — arquitetados, escritos e mantidos por
            mim.
          </p>
        </div>

        <ul className="grid grid-cols-12 gap-6">
          {PROJECTS.map((project) => (
            <li key={project.idx} className="col-span-12 md:col-span-8 md:col-start-3">
              <ProjectCard project={project} />
            </li>
          ))}
        </ul>
      </section>

      {/* ── FOOTER ───────────────────────────────────────────────── */}
      <footer className="relative z-10 border-t border-[color:var(--color-line)]">
        <div className="mx-auto grid w-full max-w-[1320px] grid-cols-12 gap-x-4 gap-y-10 px-6 py-14 font-mono text-[10px] uppercase tracking-[0.3em] text-[color:var(--color-bone-mute)] md:px-12">
          <div className="col-span-12 md:col-span-4">
            <p className="text-[color:var(--color-bone-dim)]">Wesley Santos</p>
            <p className="mt-2">
              © {new Date().getFullYear()} · All rights reserved
            </p>
          </div>
          <div className="col-span-6 md:col-span-3">
            <p className="text-[color:var(--color-acid)]">Experience</p>
            <p className="mt-2 font-display text-3xl normal-case tracking-normal text-[color:var(--color-bone)]">
              4<span className="text-[color:var(--color-ember)]">+</span>
              <span className="text-base text-[color:var(--color-bone-mute)]">
                {" "}
                yrs
              </span>
            </p>
          </div>
          <div className="col-span-6 md:col-span-3">
            <p className="text-[color:var(--color-ember)]">Base</p>
            <p className="mt-2 font-display text-xl normal-case tracking-normal text-[color:var(--color-bone)]">
              Santos - SP, BR
            </p>
          </div>
          <div className="col-span-12 md:col-span-2 md:text-right">
            <p>Built with</p>
            <p className="mt-2 text-[color:var(--color-bone-dim)]">
              Next · Tailwind
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}

/* ─────────────────────────────────────────────────────────────── */

interface ContactLinkProps {
  href: string;
  label: string;
  icon: React.ReactNode;
  accent?: boolean;
  download?: boolean;
}

function ContactLink({ href, label, icon, accent, download }: ContactLinkProps) {
  return (
    <li>
      <a
        href={href}
        target="_blank"
        rel="noreferrer nofollow"
        download={download}
        title={label}
        aria-label={label}
        className={`group relative inline-flex items-center gap-2.5 border px-4 py-2.5 font-mono text-xs uppercase tracking-[0.2em] transition-all duration-300 ${
          accent
            ? "border-[color:var(--color-acid)] bg-[color:var(--color-acid)]/5 text-[color:var(--color-acid)] hover:bg-[color:var(--color-acid)] hover:text-[color:var(--color-ink)]"
            : "border-[color:var(--color-line-2)] text-[color:var(--color-bone-dim)] hover:border-[color:var(--color-bone)] hover:text-[color:var(--color-bone)]"
        }`}
      >
        <span aria-hidden>{icon}</span>
        <span>{label}</span>
        <span
          aria-hidden
          className="ml-1 translate-x-0 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100"
        >
          →
        </span>
      </a>
    </li>
  );
}

interface ProjectCardProps {
  project: (typeof PROJECTS)[number];
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <a
      href={project.href}
      target="_blank"
      rel="noreferrer"
      title={project.title}
      aria-label={project.title}
      className="group relative block border border-[color:var(--color-line-2)] bg-[color:var(--color-ink-2)] transition-colors duration-500 hover:border-[color:var(--color-acid)]"
    >
      {/* corner ticks */}
      <span
        aria-hidden
        className="pointer-events-none absolute left-0 top-0 h-3 w-3 border-l border-t border-[color:var(--color-acid)] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute right-0 top-0 h-3 w-3 border-r border-t border-[color:var(--color-acid)] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-0 h-3 w-3 border-b border-l border-[color:var(--color-acid)] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute bottom-0 right-0 h-3 w-3 border-b border-r border-[color:var(--color-acid)] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />

      <div className="grid grid-cols-12 gap-x-4 p-5 md:p-8">
        {/* Meta column */}
        <div className="col-span-12 mb-6 flex flex-wrap items-start justify-between gap-x-4 gap-y-2 font-mono text-[10px] uppercase tracking-[0.3em] text-[color:var(--color-bone-mute)] md:mb-8">
          <span>
            <span className="text-[color:var(--color-ember)]">№</span>{" "}
            {project.idx}
          </span>
          <span className="hidden sm:inline">{project.role}</span>
          <span>{project.year}</span>
        </div>

        {/* Preview */}
        <div className="relative col-span-12 aspect-[16/10] overflow-hidden border border-[color:var(--color-line)] bg-[color:var(--color-ink-3)]">
          <Image
            src={project.image}
            alt={`Preview — ${project.title}`}
            fill
            sizes="(max-width: 768px) 100vw, 900px"
            className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          />
          {/* green tint overlay on hover */}
          <div
            aria-hidden
            className="absolute inset-0 bg-[color:var(--color-acid)] opacity-0 mix-blend-multiply transition-opacity duration-500 group-hover:opacity-10"
          />
          {/* scan line */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 overflow-hidden opacity-0 group-hover:opacity-100"
          >
            <div className="h-8 w-full bg-gradient-to-b from-transparent via-[color:var(--color-acid)]/20 to-transparent group-hover:animate-scan" />
          </div>
        </div>

        {/* Body */}
        <div className="col-span-12 mt-8 grid grid-cols-12 gap-x-4 md:mt-10">
          <div className="col-span-12 md:col-span-7">
            <h3 className="font-display text-3xl font-light italic leading-tight text-[color:var(--color-bone)] md:text-4xl">
              {project.title}
            </h3>
            <p className="mt-5 max-w-prose text-[15px] leading-relaxed text-[color:var(--color-bone-dim)]">
              {project.description}
            </p>
          </div>

          <div className="col-span-12 mt-6 md:col-span-4 md:col-start-9 md:mt-0">
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[color:var(--color-bone-mute)]">
              Stack
            </p>
            <ul className="mt-3 flex flex-wrap gap-1.5 font-mono text-[11px] text-[color:var(--color-bone-dim)]">
              {project.stack.map((t) => (
                <li
                  key={t}
                  className="border border-[color:var(--color-line-2)] px-2 py-1 leading-none"
                >
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer row */}
        <div className="col-span-12 mt-10 flex items-center justify-between border-t border-[color:var(--color-line)] pt-5 font-mono text-xs uppercase tracking-[0.2em]">
          <span className="text-[color:var(--color-bone-mute)]">
            {project.domain}
          </span>
          <span className="flex items-center gap-2 text-[color:var(--color-bone-dim)] transition-colors duration-300 group-hover:text-[color:var(--color-acid)]">
            Visit site
            <span
              aria-hidden
              className="inline-block transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            >
              ↗
            </span>
          </span>
        </div>
      </div>
    </a>
  );
}
