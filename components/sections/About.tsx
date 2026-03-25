"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function MapPinIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#33A1DE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function HandshakeIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#33A1DE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M9 11l3 3L22 4" />
      <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#33A1DE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

const trustSignals = [
  { Icon: MapPinIcon, text: "Tulsa, OK — Serving nationwide" },
  { Icon: HandshakeIcon, text: "Direct developer access" },
  { Icon: ClockIcon, text: "3-week average delivery" },
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

      <div ref={ref} className="relative mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-[3fr_2fr] lg:items-center">

          {/* Left — text */}
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
              className="mt-8 leading-relaxed text-silver-gray"
              style={{ fontFamily: "var(--font-outfit)", fontWeight: 300 }}
            >
              LaunchPoint is a Tulsa-based web design studio run by Collin Parr — a developer who works directly with every client from first call to final launch. No account managers, no outsourcing, no handoffs. Just clean, intentional work built around what your business actually needs.
            </p>

            <div className="mt-10 flex flex-col gap-4">
              {trustSignals.map(({ Icon, text }) => (
                <div key={text} className="flex items-center gap-3">
                  <Icon />
                  <span
                    className="text-sm text-silver-gray"
                    style={{ fontFamily: "var(--font-outfit)" }}
                  >
                    {text}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — orbital motif */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex items-center justify-center"
          >
            <Image
              src="/LP Visual Motif.png"
              alt=""
              width={420}
              height={420}
              className="pointer-events-none select-none"
              style={{ opacity: 0.35, maxWidth: "100%" }}
              aria-hidden="true"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
