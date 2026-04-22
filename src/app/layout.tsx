import { ReactNode } from "react";
import { Fraunces, Inter_Tight, JetBrains_Mono } from "next/font/google";

import { ApplicationThemeContextProvider } from "../contexts";
import type { Metadata } from "next";

import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  axes: ["opsz", "SOFT", "WONK"],
  display: "swap",
});

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Wesley Santos | Back-End Developer",
  applicationName: "Wesley Santos | Back-End Developer",
  description:
    "Me chamo Wesley Santos, atuo no back-end com Node.js, priorizando arquitetura limpa, performance e segurança para sustentar produtos de alta qualidade.",
  creator: "Wesley Santos",
  publisher: "Wesley Santos",
  robots: {
    index: true,
    follow: true,
  },
  authors: [{ name: "https://wesleysantos.site/" }],
  classification: "Website",
  keywords: [
    "Desenvolvedor de Software",
    "wesleysantos.site",
    "Wesley Santos",
    "Back-End Developer",
    "Node",
    "Express",
    "Nestjs",
    "Santos",
    "Santo - SP",
    "São Paulo",
    "wesleysantos",
    "dev",
    "Programador",
    "Desenvolvedor Back-End",
    "Desenvolvedor Santos",
    "Desenvolvedor Baixada Santista",
    "BackEnd",
    "BackEnd Developer",
    "BackEnd Santos",
  ],
  openGraph: {
    images:
      "https://avatars.githubusercontent.com/u/56703526?s=400&u=4caa687f74123c91aba09e8e04bae469999d563c&v=4",
    type: "website",
    locale: "pt_BR",
  },
  other: {
    country: "Brazil",
    distribution: "Global",
    Language: "Portuguese",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="pt-br"
      className={`${fraunces.variable} ${interTight.variable} ${jetbrains.variable}`}
    >
      <body>
        <ApplicationThemeContextProvider>
          {children}
        </ApplicationThemeContextProvider>
      </body>
    </html>
  );
}
