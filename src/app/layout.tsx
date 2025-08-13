import { ReactNode } from "react";

import { ApplicationThemeContextProvider } from "../contexts";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wesley Santos | BackEnd Developer",
  applicationName: "Wesley Santos | BackEnd Developer",
  description:
    "Me chamo Wesley Santos, atuo no backend com Node.js, priorizando arquitetura limpa, performance e segurança para sustentar produtos de alta qualidade.",
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
    "BackEnd Developer",
    "Node",
    "Express",
    "Nestjs",
    "Santos",
    "Santo - SP",
    "São Paulo",
    "wesleysantos",
    "dev",
    "Programador",
    "Desenvolvedor BackEnd",
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
    <html lang="pt-br">
      <body>
        <ApplicationThemeContextProvider>
          {children}
        </ApplicationThemeContextProvider>
      </body>
    </html>
  );
}