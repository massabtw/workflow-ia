import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Work OS",
  description: "Plataforma local de engenharia de software autônoma",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}