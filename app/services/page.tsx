import type { Metadata } from "next";
import { Services } from "@/components/sections/Services";
import { BookCTA } from "@/components/sections/BookCTA";
import { GeometricBackground } from "@/components/GeometricBackground";

export const metadata: Metadata = {
  title: "Web Design Services",
  description:
    "Portfolio and booking sites for freelancers, full business websites, and custom e-commerce builds. Mobile-responsive, SEO-ready, with an admin dashboard you control.",
  alternates: {
    canonical: "https://www.launchpointportal.com/services",
  },
};

export default function ServicesPage() {
  return (
    <>
      {/* Page header */}
      <section className="relative flex items-center justify-center pt-40 pb-20 overflow-hidden">
        <GeometricBackground variant="section" />
        <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
          <p
            className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-silver-gray"
            style={{ fontFamily: "var(--font-outfit)" }}
          >
            Services
          </p>
          <div className="gradient-accent-line mx-auto mb-5" />
          <h1
            className="text-4xl font-bold text-white md:text-5xl"
            style={{ fontFamily: "var(--font-outfit)" }}
          >
            What We Build
          </h1>
          <p
            className="mt-5 text-lg leading-relaxed text-silver-gray"
            style={{ fontFamily: "var(--font-outfit)", fontWeight: 300 }}
          >
            Every site is designed from scratch around your business. No templates, no shortcuts.
          </p>
        </div>
      </section>

      <Services />
      <BookCTA />
    </>
  );
}
