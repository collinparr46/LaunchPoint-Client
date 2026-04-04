import type { Metadata } from "next";
import { Pricing } from "@/components/sections/Pricing";
import { BookCTA } from "@/components/sections/BookCTA";
import { GeometricBackground } from "@/components/GeometricBackground";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Three packages: The Icon at $500 for freelancers, The Streamline at $1,000 for small businesses, and Custom builds starting at $1,500. No contracts, no hidden fees.",
  alternates: {
    canonical: "https://www.launchpointportal.com/pricing",
  },
};

export default function PricingPage() {
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
            Pricing
          </p>
          <div className="gradient-accent-line mx-auto mb-5" />
          <h1
            className="text-4xl font-bold text-white md:text-5xl"
            style={{ fontFamily: "var(--font-outfit)" }}
          >
            Simple, Transparent Pricing.
          </h1>
          <p
            className="mt-5 text-lg leading-relaxed text-silver-gray"
            style={{ fontFamily: "var(--font-outfit)", fontWeight: 300 }}
          >
            Straightforward pricing. No retainers, no surprises. You know what you&apos;re paying before we start.
          </p>
        </div>
      </section>

      <Pricing />
      <BookCTA />
    </>
  );
}
