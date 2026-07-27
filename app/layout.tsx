import type { Metadata } from "next";
import { Rye, EB_Garamond } from "next/font/google";
import "./globals.css";

const rye = Rye({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
});

const garamond = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Foco — Quadro de Tarefas",
  description: "Kanban board com tema de velho oeste, drag-and-drop.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body
        className={`${rye.variable} ${garamond.variable} antialiased bg-[#1B140D] text-[#E9DFC4]`}
      >
        {children}
      </body>
    </html>
  );
}
