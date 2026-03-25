"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function PortfolioIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <polygon points="24,4 29,18 44,18 32,27 37,42 24,33 11,42 16,27 4,18 19,18" stroke="#33A1DE" strokeWidth="1.5" fill="none" strokeLinejoin="round" />
    </svg>
  );
}

function RocketIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <path d="M24 6C24 6 34 14 34 26C34 32 30 38 24 42C18 38 14 32 14 26C14 14 24 6 24 6Z" stroke="#33A1DE" strokeWidth="1.5" fill="none" strokeLinejoin="round" />
      <circle cx="24" cy="23" r="4" stroke="#33A1DE" strokeWidth="1.5" fill="none" />
      <path d="M14 30L8 36M34 30L40 36" stroke="#33A1DE" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <rect x="6" y="10" width="36" height="32" rx="3" stroke="#33A1DE" strokeWidth="1.5" fill="none" />
      <path d="M6 18H42" stroke="#33A1DE" strokeWidth="1.5" />
      <path d="M16 6V12M32 6V12" stroke="#33A1DE" strokeWidth="1.5" strokeLinecap="round" />
      <rect x="13" y="24" width="6" height="6" rx="1" fill="#33A1DE" fillOpacity="0.4" />
      <rect x="21" y="24" width="6" height="6" rx="1" fill="#33A1DE" fillOpacity="0.4" />
      <rect x="29" y="24" width="6" height="6" rx="1" fill="#33A1DE" fillOpacity="0.4" />
    </svg>
  );
}

const services = [
  {
    Icon: PortfolioIcon,
    title: "Portfolio & Brand Sites",
    description:
      "Your work deserves a stage. We build portfolio sites that make clients stop scrolling and start reaching out.",
  },
  {
    Icon: RocketIcon,
    title: "Landing & Home Pages",
    description:
      "First impressions that convert. Clean, fast, SEO-ready pages that turn visitors into customers.",
  },
  {
    Icon: CalendarIcon,
    title: "Booking & Lead Capture",
    description:
      "Stop losing leads. Integrated booking, contact forms, and lead capture built into every site.",
  },
];

export function Services() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="services" aria-labelledby="services-heading" className="relative px-6 py-28 lg:px-8">
      {/* Faint pattern background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "url('/LP Visual Pattern.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.04,
        }}
      />

      <div ref={ref} className="relative mx-auto max-w-7xl">
        {/* Section label */}
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-silver-gray" style={{ fontFamily: "var(--font-outfit)" }}>
          What We Do
        </p>
        {/* Accent line */}
        <div className="gradient-accent-line mb-5" />
        <h2
          id="services-heading"
          className="text-3xl font-bold text-white md:text-4xl"
          style={{ fontFamily: "var(--font-outfit)" }}
        >
          What We Build
        </h2>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {services.map(({ Icon, title, description }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="glass-card p-8"
            >
              <div className="mb-6">
                <Icon />
              </div>
              <h3
                className="text-xl font-semibold text-white"
                style={{ fontFamily: "var(--font-outfit)" }}
              >
                {title}
              </h3>
              <p
                className="mt-4 leading-relaxed text-silver-gray"
                style={{ fontFamily: "var(--font-outfit)", fontWeight: 300 }}
              >
                {description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
