import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { SocialProof } from "@/components/sections/SocialProof";
import { ServicesTeaser } from "@/components/sections/ServicesTeaser";
import { BookCTA } from "@/components/sections/BookCTA";

export const metadata: Metadata = {
  title: "LaunchPoint Studio | Web Design for Small Businesses | Tulsa, OK",
  description:
    "Professional websites for small businesses starting at $500. Portfolio sites, business websites, and custom e-commerce. Based in Tulsa, serving nationwide. Free consultation.",
  alternates: {
    canonical: "https://www.launchpointportal.com",
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <SocialProof />
      <ServicesTeaser />
      <BookCTA />
    </>
  );
}
