import type { Metadata } from "next";
import { Outfit, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const siteUrl = "https://www.launchpointportal.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "LaunchPoint Studio — Custom Websites for Small Business | Tulsa, OK",
    template: "%s | LaunchPoint Studio",
  },
  description:
    "Custom websites for small businesses. $1,000 flat rate, live in under 3 weeks. Tulsa-based web design studio serving clients nationwide.",
  keywords: [
    "web design tulsa",
    "small business website",
    "custom website design",
    "affordable web design",
    "tulsa web developer",
    "freelancer website design",
    "launchpoint studio",
  ],
  authors: [{ name: "Collin Parr", url: siteUrl }],
  creator: "Collin Parr",
  alternates: { canonical: "/" },
  openGraph: {
    title: "LaunchPoint Studio — Built to Launch. Built to Last.",
    description:
      "Custom websites for small businesses. $1,000 flat rate, live in under 3 weeks.",
    url: siteUrl,
    siteName: "LaunchPoint Studio",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "LaunchPoint Studio — Built to Launch. Built to Last.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LaunchPoint Studio — Custom Websites for Small Business",
    description:
      "Custom websites for small businesses. $1,000 flat rate, live in under 3 weeks.",
    images: ["/og-image.png"],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "LaunchPoint Studio, LLC",
  description: "Custom web design and development for small businesses",
  url: siteUrl,
  areaServed: "US",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Tulsa",
    addressRegion: "OK",
    addressCountry: "US",
  },
  priceRange: "$1,000",
  founder: { "@type": "Person", name: "Collin Parr" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${outfit.variable} ${cormorant.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
