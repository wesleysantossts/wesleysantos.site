"use client";
import Image from "next/image";
import TypeWriterEffect from "typewriter-effect";

import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedin, FaFilePdf, FaExternalLinkAlt } from "react-icons/fa";
import { BsMouse } from "react-icons/bs";

export function Main() {
  const stringsTypeWriter = [
    "Wesley Santos",
    "Desenvolvedor Back-End",
  ];

  return (
    <main className="w-full text-center">
      <div className="max-w-[1024px] w-full min-h-screen mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm text-gray-600">
            Moldando o Futuro através de linhas de código
          </p>

          <h1 className="py-4 text-gray-700">
            Olá, eu sou
            <span className="text-[#0070f3]">
              <TypeWriterEffect
                options={{
                  strings: stringsTypeWriter,
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 25,
                  cursor: "_",
                }}
              />
            </span>
          </h1>

          <p className="py-5 text-gray-600 max-w-[70%] m-auto">
            Desenvolvedor Back-End com mais de 4 anos de experiência atuando com tecnologias modernas como Node.js, TypeScript, PostgreSQL, MongoDB, Git, Redis, Docker, IA do Google Gemini e ChatGPT, AWS e integrações com APIs REST, React, Vite e Next.js e forte atuação na criação de soluções robustas, automação
            de processos, infraestrutura em nuvem e boas práticas de segurança e CI/CD.
          </p>

          <section className="flex items-center justify-around max-w-[330px] m-auto py-4">
            <a
              target="_blank"
              rel="noreferrer nofollow"
              title="Linkedin"
              aria-label="Linkedin"
              href="https://www.linkedin.com/in/wesleysantos/"
              className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300"
            >
              <FaLinkedin />
            </a>
            <a
              target="_blank"
              rel="noreferrer nofollow"
              title="Github"
              aria-label="Github"
              href="https://github.com/wesleysantossts"
              className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300"
            >
              <FaGithub />
            </a>
            <a
              target="_blank"
              rel="noreferrer nofollow"
              title="E-mail"
              aria-label="E-mail"
              href="mailto:wesleysts.ws@gmail.com"
              className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300"
            >
              <AiOutlineMail />
            </a>
            <a
              target="_blank"
              rel="noreferrer nofollow"
              title="Currículo - Wesley Santos"
              aria-label="Curriculo"
              href="/assets/documents/CV - Wesley Santos.pdf"
              download={true}
              className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300"
            >
              <FaFilePdf />
            </a>
          </section>

          <div className="flex flex-col items-center gap-2 mt-12 animate-bounce">
            <BsMouse
              className="text-gray-500"
              size={28}
              aria-hidden="true"
            />
            <span className="text-xs text-gray-500 uppercase tracking-widest">
              Role para ver os<br/> projetos ativos
            </span>
          </div>
        </div>
      </div>

      <section className="w-full pb-20">
        <div className="max-w-[1024px] w-full mx-auto px-4">
          <h2 className="text-2xl text-gray-700 pb-2">Projetos ativos</h2>
          <p className="text-sm text-gray-600 pb-8">
            Alguns dos projetos que desenvolvi e mantenho em produção.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://simuladorfinanciamento.site/"
              title="Simulador de Financiamento"
              aria-label="Simulador de Financiamento"
              className="group text-left rounded-xl shadow-lg shadow-gray-300 bg-white hover:scale-[1.02] ease-in duration-300 overflow-hidden flex flex-col"
            >
              <div className="relative w-full aspect-[16/10] bg-gray-100 overflow-hidden">
                <Image
                  src="/assets/images/simulador-financiamento.jpeg"
                  alt="Preview do site Simulador de Financiamento"
                  fill
                  sizes="(max-width: 768px) 100vw, 512px"
                  className="object-cover object-top group-hover:scale-105 ease-in duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between pb-3">
                  <h3 className="text-lg text-gray-700 font-medium">
                    Simulador de Financiamento
                  </h3>
                  <FaExternalLinkAlt className="text-gray-500 group-hover:text-[#0070f3] ease-in duration-300" />
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Plataforma web para simulação de financiamentos imobiliários,
                  com cálculo de parcelas pelos sistemas SAC e Price, visualização da tabela
                  de amortização e comparação entre modalidades para apoiar a tomada de
                  decisão do usuário.
                </p>
                <span className="inline-block mt-4 text-xs text-[#0070f3]">
                  simuladorfinanciamento.site
                </span>
              </div>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}