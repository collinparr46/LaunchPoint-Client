"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function Check() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#33A1DE" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="shrink-0 mt-0.5">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

const tiers = [
  {
    name: "The Icon",
    price: "$500",
    priceNote: "one-time",
    monthly: "+ $24.99/mo optional managed hosting",
    tagline: "Perfect for freelancers and solo creatives.",
    features: [
      "Up to 3 custom-designed pages",
      "Mobile-responsive on every device",
      "Portfolio or gallery showcase",
      "Online booking integration",
      "Admin dashboard to manage content",
      "SEO foundations built in",
      "2 revision rounds",
      "Live in under 2 weeks",
    ],
    cta: "Get Started",
    highlighted: false,
  },
  {
    name: "The Streamline",
    price: "$1,000",
    priceNote: "one-time",
    monthly: "+ $49.99/mo optional managed hosting",
    tagline: "The full online presence for growing businesses.",
    features: [
      "Up to 6 custom-designed pages",
      "Mobile-responsive on every device",
      "Services or product showcase",
      "Testimonials and reviews section",
      "Contact forms and booking integration",
      "Admin dashboard to manage content",
      "SEO foundations built in",
      "2 revision rounds",
      "Live in under 3 weeks",
    ],
    cta: "Get Started",
    highlighted: true,
  },
  {
    name: "The Custom",
    price: "Starting at $1,500",
    priceNote: "one-time",
    monthly: "+ $79.99/mo optional managed hosting",
    tagline: "For businesses with unique needs.",
    features: [
      "Fully scoped in your free consultation",
      "E-commerce and payment integration",
      "Complex functionality and custom features",
      "Unlimited pages",
      "Admin dashboard to manage content",
      "SEO foundations built in",
      "Advanced integrations (Stripe, scheduling, inventory)",
      "Dedicated project timeline",
    ],
    cta: "Book a Consult",
    highlighted: false,
  },
];

const hostingFeatures = [
  "Hosting and domain management",
  "SSL certificate included",
  "Security and software updates",
  "Uptime monitoring",
  "Minor content edits (up to 1 hr/month)",
  "Priority support",
];

export function Pricing() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="pricing" aria-labelledby="pricing-heading" className="relative px-6 py-28 lg:px-8">
      <div ref={ref} className="mx-auto max-w-7xl">
        <div className="text-center">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-silver-gray" style={{ fontFamily: "var(--font-outfit)" }}>
            Pricing
          </p>
          <div className="gradient-accent-line mx-auto mb-5" />
          <h2
            id="pricing-heading"
            className="text-3xl font-bold text-white md:text-4xl"
            style={{ fontFamily: "var(--font-outfit)" }}
          >
            Simple, Transparent Pricing.
          </h2>
        </div>

        {/* Three-tier grid */}
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {tiers.map(({ name, price, priceNote, monthly, tagline, features, cta, highlighted }, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative flex flex-col rounded-xl p-8"
              style={{
                background: highlighted ? "#1A2D4F" : "rgba(26,45,79,0.4)",
                border: highlighted
                  ? "1px solid rgba(51,161,222,0.5)"
                  : "1px solid rgba(195,199,201,0.15)",
                boxShadow: highlighted
                  ? "0 0 50px rgba(51,161,222,0.15)"
                  : "none",
              }}
            >
              {/* Most Popular badge */}
              {highlighted && (
                <span
                  className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-4 py-1 text-xs font-semibold text-white"
                  style={{
                    background: "#33A1DE",
                    fontFamily: "var(--font-outfit)",
                  }}
                >
                  Most Popular
                </span>
              )}

              <div>
                <h3
                  className="text-lg font-semibold text-white"
                  style={{ fontFamily: "var(--font-outfit)" }}
                >
                  {name}
                </h3>
                <p className="mt-4 text-4xl font-bold text-white" style={{ fontFamily: "var(--font-outfit)" }}>
                  {price}
                </p>
                <p className="mt-1 text-sm text-silver-gray" style={{ fontFamily: "var(--font-outfit)", fontWeight: 300 }}>
                  {priceNote}
                </p>
                <p className="mt-2 text-xs text-silver-gray" style={{ fontFamily: "var(--font-outfit)", fontWeight: 300 }}>
                  {monthly}
                </p>
                <p className="mt-3 text-sm text-photon-blue font-medium" style={{ fontFamily: "var(--font-outfit)" }}>
                  {tagline}
                </p>
              </div>

              <ul className="mt-8 flex-1 space-y-3">
                {features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-silver-gray" style={{ fontFamily: "var(--font-outfit)", fontWeight: 300 }}>
                    <Check />
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="https://calendly.com/collin-parr46/30min"
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-8 block w-full rounded-lg py-3 text-center text-sm font-semibold text-white ${
                  highlighted ? "btn-gradient-glow" : "btn-photon-glow bg-photon-blue"
                }`}
                style={{ fontFamily: "var(--font-outfit)" }}
              >
                {cta}
              </a>
            </motion.div>
          ))}
        </div>

        {/* Trust text */}
        <div
          className="mt-10 rounded-lg px-6 py-4 text-center"
          style={{ background: "rgba(51,161,222,0.05)", border: "1px solid rgba(51,161,222,0.1)" }}
        >
          <p
            className="text-sm font-medium text-white"
            style={{ fontFamily: "var(--font-outfit)" }}
          >
            You own your site. Host it with us for hands-off maintenance, or take it anywhere.
          </p>
          <p className="mt-1 text-xs text-silver-gray" style={{ fontFamily: "var(--font-outfit)", fontWeight: 300 }}>
            Cancel hosting anytime. You keep your site.
          </p>
        </div>

        {/* Managed hosting breakdown */}
        <div className="mt-16 text-center">
          <h3
            className="text-xl font-semibold text-white"
            style={{ fontFamily: "var(--font-outfit)" }}
          >
            What&apos;s Included in Managed Hosting?
          </h3>
          <ul className="mx-auto mt-6 grid max-w-2xl gap-3 sm:grid-cols-2">
            {hostingFeatures.map((f) => (
              <li key={f} className="flex items-center gap-3 text-sm text-silver-gray" style={{ fontFamily: "var(--font-outfit)", fontWeight: 300 }}>
                <Check />
                {f}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
