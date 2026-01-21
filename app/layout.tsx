import type { Metadata } from "next";
import { Playfair_Display, Manrope } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StickyMobileCTA } from "@/components/layout/StickyMobileCTA";
import { WhatsAppFloatingButton } from "@/components/ui/WhatsAppFloatingButton";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sai Ram Decorators | Architectural Glazing & UPVC Solutions",
  description: "Premium UPVC windows, aluminium systems, and structural glazing solutions in Bengaluru. Trusted by 500+ clients for residential and commercial projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${playfair.variable} ${manrope.variable} font-sans antialiased bg-zinc-50 text-zinc-900 selection:bg-stone-200 selection:text-stone-900`}
      >
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
          <WhatsAppFloatingButton />
          <StickyMobileCTA />
        </div>
      </body>
    </html>
  );
}
