import type { Metadata } from "next";
import { About } from "@/components/sections/About";
import { BookCTA } from "@/components/sections/BookCTA";
import { GeometricBackground } from "@/components/GeometricBackground";

export const metadata: Metadata = {
  title: "About",
  description:
    "LaunchPoint Studio is a Tulsa-based web design studio run by Collin Parr. Direct-to-client, no agencies, no handoffs.",
};

export default function AboutPage() {
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
            Who We Are
          </p>
          <div className="gradient-accent-line mx-auto mb-5" />
          <h1
            className="text-4xl font-bold text-white md:text-5xl"
            style={{ fontFamily: "var(--font-outfit)" }}
          >
            Built for Small Business
          </h1>
          <p
            className="mt-5 text-lg leading-relaxed text-silver-gray"
            style={{ fontFamily: "var(--font-outfit)", fontWeight: 300 }}
          >
            Tulsa-based. Developer-owned. Built on the belief that every small business deserves a world-class web presence.
          </p>
        </div>
      </section>

      <About />
      <BookCTA />
    </>
  );
}
