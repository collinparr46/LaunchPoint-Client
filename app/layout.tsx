import type { Metadata } from "next";
import { Outfit, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/sections/Footer";

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
    default: "LaunchPoint Studio | Web Design for Small Businesses",
    template: "%s | LaunchPoint Studio",
  },
  description:
    "Professional websites for small businesses starting at $500. Based in Tulsa, OK, serving nationwide.",
  keywords: [
    "web design",
    "small business website",
    "web development",
    "Tulsa web design",
    "freelancer website",
    "hairstylist website",
    "portfolio website",
    "booking website",
    "affordable web design",
    "website builder for small business",
  ],
  authors: [{ name: "LaunchPoint Studio" }],
  creator: "LaunchPoint Studio",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "LaunchPoint Studio",
    title: "LaunchPoint Studio | Web Design for Small Businesses",
    description:
      "Professional websites for small businesses starting at $500. Based in Tulsa, serving nationwide.",
    images: [
      {
        url: "/LP 4k Cropped.png",
        width: 1200,
        height: 630,
        alt: "LaunchPoint Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LaunchPoint Studio | Web Design for Small Businesses",
    description:
      "Professional websites for small businesses starting at $500. Based in Tulsa, serving nationwide.",
    images: ["/LP 4k Cropped.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large" as const,
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "LaunchPoint Studio",
  url: siteUrl,
  logo: `${siteUrl}/LP%20Icon%20No%20BG.png`,
  description:
    "Professional web design and development for small businesses and freelancers. Based in Tulsa, Oklahoma, serving clients nationwide.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Tulsa",
    addressRegion: "OK",
    addressCountry: "US",
  },
  areaServed: {
    "@type": "Country",
    name: "United States",
  },
  priceRange: "$500 - $5000",
  serviceType: [
    "Web Design",
    "Web Development",
    "E-Commerce Development",
    "SEO",
  ],
  sameAs: [
    "https://www.instagram.com/launchpoint.studio/",
    "https://www.facebook.com/profile.php?id=61577425354377",
  ],
  founder: {
    "@type": "Person",
    name: "Collin Parr",
  },
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
        style={{ background: "#13213F", color: "#ffffff" }}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
