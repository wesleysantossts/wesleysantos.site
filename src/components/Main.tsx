"use client";
import TypeWriterEffect from "typewriter-effect";

import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export function Main() {
  const stringsTypeWriter = [
    "Wesley Santos",
    "Santista",
    "Desenvolvedor Back-End",
  ];

  return (
    <main className="w-full h-screen text-center">
      <div className="max-w-[1024px] w-full h-full mx-auto p-2 flex justify-center items-center">
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
            Desenvolvedor Back-End com mais de 3 anos de experiência atuando com tecnologias modernas como Node.js,
            TypeScript, PostgreSQL, MongoDB, Git, Redis, Docker, IA do Google Gemini e ChatGPT, AWS e
            integrações com APIs REST, React, Vite e Next.js e forte atuação na criação de soluções robustas, automação
            de processos, infraestrutura em nuvem e boas práticas de segurança e CI/CD.
          </p>

          <section className="flex items-center justify-between max-w-[330px] m-auto py-4">
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
          </section>
        </div>
      </div>
    </main>
  );
}