import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import AppBackground from "./components/AppBackground";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Objectif Civique - Réussissez votre examen civique",
  description:
    "Préparez votre avenir en France avec Objectif Civique. Des milliers de questions officielles, des simulations intelligentes et un suivi personnalisé.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${jakarta.variable} antialiased`}>
      <body className="min-h-screen flex flex-col relative">
        <AppBackground />
        {children}
      </body>
    </html>
  );
}
