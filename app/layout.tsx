import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lumen — um lugar para ser você",
  description:
    "Uma comunidade para conversar, compartilhar o que sente e encontrar pessoas que entendem você.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
