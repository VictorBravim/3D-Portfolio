import type { Metadata } from "next";
import { Roboto_Condensed } from "next/font/google";
import "./globals.css";

const robotoCondensed = Roboto_Condensed({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "Portfólio",
  description: "Victor Bravim | Front-End Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={robotoCondensed.className}>{children}</body>
    </html>
  );
}
