import type { Metadata } from "next";
import { Barlow_Condensed, Inter } from "next/font/google";
import Script from "next/script";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["600"],
});

export const metadata: Metadata = {
  title: { default: "Ryuu Sushi Lounge", template: "%s — Ryuu Sushi Lounge" },
  description:
    "Fresh, artfully crafted sushi and Japanese cuisine in Plymouth, Michigan. Signature rolls, omakase, and unforgettable dining.",
  metadataBase: new URL("https://www.ryuusushi.com"),
  openGraph: {
    title: "Ryuu Sushi Lounge",
    description:
      "Fresh, artfully crafted sushi and Japanese cuisine in Plymouth, Michigan.",
    url: "https://www.ryuusushi.com",
    siteName: "Ryuu Sushi Lounge",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ryuu Sushi Lounge",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ryuu Sushi Lounge",
    description:
      "Fresh, artfully crafted sushi and Japanese cuisine in Plymouth, Michigan.",
    images: ["/images/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${barlowCondensed.variable}`}>
      <head>
        <link
          rel="icon"
          type="image/png"
          href="/images/favicon-96x96.png"
          sizes="96x96"
        />
        <link rel="icon" type="image/svg+xml" href="/images/favicon.svg" />
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/apple-touch-icon.png"
        />
        <link rel="manifest" href="/images/site.webmanifest" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body className="font-sans antialiased bg-black text-white">
        <a
          href="#main"
          className="fixed left-4 top-4 z-[100] -translate-y-[200%] focus:translate-y-0 px-4 py-2 bg-white text-black rounded-md font-heading text-sm uppercase tracking-wider transition-transform focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
        >
          Skip to main content
        </a>
        <Navbar />
        {children}
        <Footer />
        {/* Privacy-friendly analytics by Plausible — https://www.ryuusushi.com */}
        <Script
          src="https://plausible.io/js/pa-dSlAsr-NHsv9KNSnJ-Nt5.js"
          strategy="afterInteractive"
        />
        <Script id="plausible-init" strategy="afterInteractive">
          {`window.plausible=window.plausible||function(){(plausible.q=plausible.q||[]).push(arguments)},plausible.init=plausible.init||function(i){plausible.o=i||{}};
plausible.init()`}
        </Script>
      </body>
    </html>
  );
}
