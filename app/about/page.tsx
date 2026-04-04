import type { Metadata } from "next";
import { About } from "@/components/sections/About";
import { BookCTA } from "@/components/sections/BookCTA";
import { GeometricBackground } from "@/components/GeometricBackground";

export const metadata: Metadata = {
  title: "About LaunchPoint Studio | Tulsa Web Designer",
  description:
    "Founded by Collin Parr in Tulsa, Oklahoma. We build conversion-focused websites for small businesses and freelancers nationwide.",
  alternates: {
    canonical: "https://www.launchpointportal.com/about",
  },
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
            Tulsa-based. Developer-owned. One person, one project, no runaround.
          </p>
        </div>
      </section>

      <About />
      <BookCTA />
    </>
  );
}
