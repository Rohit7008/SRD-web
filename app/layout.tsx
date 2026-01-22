import type { Metadata } from "next";
import Script from "next/script";
import { Playfair_Display, Manrope } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
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
  metadataBase: new URL("https://sairamdecorators.com"),
  title: {
    default: "Sai Ram Decorators | Premium UPVC & Aluminium Windows Manufacturers",
    template: "%s | Sai Ram Decorators"
  },
  description: "Leading manufacturer of premium UPVC windows, slim profile aluminium systems, and structural glazing in Bengaluru. Soundproof, eco-friendly, and custom-designed solutions for your home.",
  keywords: [
    "UPVC windows Bangalore",
    "Aluminium windows Bangalore",
    "Soundproof windows Bengaluru",
    "Slim line aluminium windows",
    "UPVC doors Bangalore",
    "Structural glazing Bangalore",
    "Sai Ram Decorators",
    "Energy efficient windows India",
    "Factory direct UPVC windows",
    "Best window manufacturers Bangalore",
    "Aluminium partitions Bangalore",
    "Koramangala UPVC windows",
    "Whitefield aluminium doors"
  ],
  authors: [{ name: "Sai Ram Decorators Team" }],
  creator: "Sai Ram Decorators",
  publisher: "Sai Ram Decorators",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://sairamdecorators.com',
    siteName: 'Sai Ram Decorators',
    title: 'Sai Ram Decorators | Premium UPVC & Aluminium Interiors',
    description: 'Best UPVC windows and aluminium glazing experts in Bangalore. Factory-direct manufacturing of soundproof, energy-efficient windows and doors. Quality within the budget.',
    images: [
      {
        url: '/images/og-image.jpg', // Ensure you actually have this or a fallback
        width: 1200,
        height: 630,
        alt: 'Sai Ram Decorators Premium Windows',
      },
    ],
  },
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
        </div>
        <Script
          id="schema-org-local-business"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HomeAndConstructionBusiness",
              "name": "Sai Ram Decorators",
              "image": "https://sairamdecorators.com/images/og-image.jpg",
              "description": "Leading manufacturer of premium UPVC windows, slim profile aluminium systems, and structural glazing in Bengaluru.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Bangalore",
                "addressLocality": "Bangalore",
                "addressRegion": "KA",
                "postalCode": "560068",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 12.900951,
                "longitude": 77.636065
              },
              "url": "https://sairamdecorators.com",
              "telephone": "+919902924666",
              "priceRange": "₹₹",
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday"
                  ],
                  "opens": "09:00",
                  "closes": "20:00"
                }
              ]
            })
          }}
        />
      </body>
    </html>
  );
}
