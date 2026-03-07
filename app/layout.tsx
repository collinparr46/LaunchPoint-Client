import type { Metadata } from "next";
import { Geist, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const siteUrl = "https://www.launchpoint.studio";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "LaunchPoint — Web Design & Development for Small Business",
    template: "%s | LaunchPoint",
  },
  description:
    "Tulsa-based web design studio building custom websites and web apps for small businesses. Launch in weeks, not months. eCommerce, portfolios, and client portals.",
  keywords: [
    "web design Tulsa",
    "web development small business",
    "custom website Tulsa Oklahoma",
    "small business website",
    "eCommerce store design",
    "portfolio website",
    "web app development",
    "LaunchPoint",
  ],
  authors: [{ name: "Collin Parr", url: siteUrl }],
  creator: "Collin Parr",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "LaunchPoint",
    title: "LaunchPoint — Web Design & Development for Small Business",
    description:
      "Tulsa-based web design studio building custom websites for small businesses. Launch in weeks, not months.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "LaunchPoint — Built to Launch. Built to Last.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LaunchPoint — Web Design & Development for Small Business",
    description:
      "Tulsa-based web design studio building custom websites for small businesses. Launch in weeks, not months.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "LaunchPoint",
  url: siteUrl,
  description:
    "Tulsa-based web design studio building custom websites and web apps for small businesses.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Tulsa",
    addressRegion: "OK",
    addressCountry: "US",
  },
  areaServed: "Nationwide",
  founder: { "@type": "Person", name: "Collin Parr" },
  serviceType: [
    "Web Design",
    "Web Development",
    "eCommerce Development",
    "Custom Web Applications",
  ],
  priceRange: "$750–$3000+",
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
        className={`${geistSans.variable} ${cormorant.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
