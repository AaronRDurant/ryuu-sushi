import type { Metadata } from "next";
import { Inter, Barlow_Condensed } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

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
  title: "Ryuu Sushi Lounge",
  description:
    "Fresh, artfully crafted sushi and Japanese cuisine in Grosse Pointe and Plymouth, Michigan. Signature rolls, omakase, and unforgettable dining.",
  metadataBase: new URL("https://www.ryuusushi.com"),
  openGraph: {
    title: "Ryuu Sushi Lounge | Grosse Pointe",
    description:
      "Fresh, artfully crafted sushi and Japanese cuisine in Grosse Pointe and Plymouth, Michigan.",
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
      "Fresh, artfully crafted sushi and Japanese cuisine in Grosse Pointe and Plymouth, Michigan.",
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
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
