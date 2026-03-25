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

const websiteFeatures = [
  "Custom design tailored to your brand",
  "Mobile-responsive on every device",
  "SEO foundations built in",
  "Booking or lead capture integration",
  "Up to 5 pages",
  "2 revision rounds",
  "Live in under 3 weeks",
];

const hostingFeatures = [
  "Hosting & domain management",
  "SSL certificate included",
  "Security & software updates",
  "Uptime monitoring",
  "Minor content edits (up to 1 hr/month)",
  "Priority support",
];

export function Pricing() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="pricing" aria-labelledby="pricing-heading" className="relative px-6 py-28 lg:px-8">
      <div ref={ref} className="mx-auto max-w-5xl">
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

        <div className="mt-16 grid gap-8 md:grid-cols-2">

          {/* Card 1 — Website Build */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col rounded-xl p-8"
            style={{
              background: "#1A2D4F",
              border: "1px solid rgba(51,161,222,0.3)",
              boxShadow: "0 0 40px rgba(51,161,222,0.1)",
            }}
          >
            <div>
              <p className="text-5xl font-bold text-white" style={{ fontFamily: "var(--font-outfit)" }}>
                $1,000
              </p>
              <p className="mt-1 text-sm text-silver-gray" style={{ fontFamily: "var(--font-outfit)", fontWeight: 300 }}>
                one-time
              </p>
              <p className="mt-2 text-photon-blue text-sm font-medium" style={{ fontFamily: "var(--font-outfit)" }}>
                Everything you need to launch.
              </p>
            </div>

            <ul className="mt-8 flex-1 space-y-3">
              {websiteFeatures.map((f) => (
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
              className="btn-photon-glow mt-8 block w-full rounded-lg bg-photon-blue py-3 text-center text-sm font-semibold text-white"
              style={{ fontFamily: "var(--font-outfit)" }}
            >
              Get Started
            </a>
          </motion.div>

          {/* Card 2 — Managed Hosting */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="flex flex-col rounded-xl p-8"
            style={{
              background: "rgba(26,45,79,0.4)",
              border: "1px solid rgba(195,199,201,0.15)",
            }}
          >
            <div>
              <div className="flex items-baseline gap-2">
                <p className="text-4xl font-bold text-white" style={{ fontFamily: "var(--font-outfit)" }}>
                  $49.99
                </p>
                <span className="text-silver-gray text-sm" style={{ fontFamily: "var(--font-outfit)", fontWeight: 300 }}>/month</span>
              </div>
              <span
                className="mt-2 inline-block rounded-full px-3 py-1 text-xs font-medium text-white"
                style={{ background: "rgba(51,161,222,0.18)", border: "1px solid rgba(51,161,222,0.35)", color: "#33A1DE", fontFamily: "var(--font-outfit)" }}
              >
                Recommended
              </span>
              <p className="mt-3 text-sm text-silver-gray" style={{ fontFamily: "var(--font-outfit)", fontWeight: 300 }}>
                Your site stays fast, secure, and online — so you can focus on your business.
              </p>
            </div>

            <ul className="mt-8 flex-1 space-y-3">
              {hostingFeatures.map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm text-silver-gray" style={{ fontFamily: "var(--font-outfit)", fontWeight: 300 }}>
                  <Check />
                  {f}
                </li>
              ))}
            </ul>

            <p className="mt-8 text-center text-xs text-silver-gray" style={{ fontFamily: "var(--font-outfit)", fontWeight: 300 }}>
              You own your site. Host it with us for hands-off maintenance, or take it anywhere.
            </p>
          </motion.div>
        </div>

        <div
          className="mt-10 rounded-lg px-6 py-4 text-center"
          style={{ background: "rgba(51,161,222,0.05)", border: "1px solid rgba(51,161,222,0.1)" }}
        >
          <p
            className="text-sm font-medium text-white"
            style={{ fontFamily: "var(--font-outfit)" }}
          >
            Cancel hosting anytime — you keep your site.
          </p>
          <p className="mt-1 text-xs text-silver-gray" style={{ fontFamily: "var(--font-outfit)", fontWeight: 300 }}>
            No retainers. No hidden fees. No lock-in.
          </p>
        </div>
      </div>
    </section>
  );
}
