import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const serifFont = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-serif",
  display: "swap",
});

const sansFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "CASORRO — IVORY ROSE | Extrait de Parfum",
  description: "A luxury cinematic fragrance experience by CASORRO. Introducing IVORY ROSE.",
  keywords: ["CASORRO", "IVORY ROSE", "Luxury Fragrance", "Parfum", "Cinematic"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${serifFont.variable} ${sansFont.variable}`}>
      <body className="font-sans antialiased bg-brand-charcoal-deep text-brand-ivory selection:bg-brand-rose selection:text-brand-charcoal-deep">
        {children}
      </body>
    </html>
  );
}