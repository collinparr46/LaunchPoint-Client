"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function MapPinIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#33A1DE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function HandshakeIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#33A1DE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M9 11l3 3L22 4" />
      <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#33A1DE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

const trustSignals = [
  { Icon: MapPinIcon, title: "Tulsa-based", text: "Serving clients nationwide" },
  { Icon: HandshakeIcon, title: "Direct access", text: "Work 1:1 with your developer" },
  { Icon: ClockIcon, title: "3-week delivery", text: "Average time from call to launch" },
];

export function About() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" aria-labelledby="about-heading" className="relative px-6 py-28 lg:px-8">
      {/* Subtle gradient background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, #13213F, #0F1A32)" }}
      />

      <div ref={ref} className="relative mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-silver-gray" style={{ fontFamily: "var(--font-outfit)" }}>
            Who We Are
          </p>
          <div className="gradient-accent-line mb-5" />
          <h2
            id="about-heading"
            className="text-3xl font-bold text-white md:text-4xl"
            style={{ fontFamily: "var(--font-outfit)" }}
          >
            You&apos;re Not Hiring an Agency.<br />
            You&apos;re Hiring a Builder.
          </h2>
          <p
            className="mt-8 max-w-2xl leading-relaxed text-silver-gray"
            style={{ fontFamily: "var(--font-outfit)", fontWeight: 300 }}
          >
            I&apos;m Collin Parr, and I run LaunchPoint out of Tulsa, Oklahoma. When you hire me, you work with me. No account managers, no outsourcing, no handoffs. I handle your project from the first call to launch day, and I stick around after to make sure everything runs smooth.
          </p>
        </motion.div>

        {/* Trust signal cards */}
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {trustSignals.map(({ Icon, title, text }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              className="flex items-start gap-4 rounded-xl p-5"
              style={{
                background: "rgba(26,45,79,0.6)",
                border: "1px solid rgba(51,161,222,0.15)",
                backdropFilter: "blur(8px)",
              }}
            >
              <div
                className="mt-0.5 shrink-0 rounded-lg p-2"
                style={{ background: "rgba(51,161,222,0.1)", border: "1px solid rgba(51,161,222,0.2)" }}
              >
                <Icon />
              </div>
              <div>
                <p className="text-sm font-semibold text-white" style={{ fontFamily: "var(--font-outfit)" }}>
                  {title}
                </p>
                <p className="mt-0.5 text-sm text-silver-gray" style={{ fontFamily: "var(--font-outfit)", fontWeight: 300 }}>
                  {text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
