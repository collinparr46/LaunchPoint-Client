"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function Check() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#33A1DE" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="shrink-0 mt-0.5">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

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

function CustomIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <rect x="8" y="8" width="32" height="32" rx="4" stroke="#33A1DE" strokeWidth="1.5" fill="none" />
      <path d="M18 20L14 24L18 28" stroke="#33A1DE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M30 20L34 24L30 28" stroke="#33A1DE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M26 16L22 32" stroke="#33A1DE" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

const serviceCards = [
  {
    Icon: PortfolioIcon,
    title: "Portfolio & Booking Sites",
    audience: "For hairstylists, trainers, artists, photographers, coaches, and freelancers.",
    description:
      "Your work front and center. Clients book directly from your site. You update it yourself whenever you want.",
    cta: "View Pricing",
    href: "/pricing",
    external: false,
  },
  {
    Icon: RocketIcon,
    title: "Full Business Websites",
    audience: "For small businesses ready for a real online presence.",
    description:
      "Homepage, services, testimonials, contact forms, and booking. Everything a growing business needs in one place.",
    cta: "View Pricing",
    href: "/pricing",
    external: false,
  },
  {
    Icon: CustomIcon,
    title: "Custom & E-Commerce",
    audience: "For businesses that need online stores, payments, or complex integrations.",
    description:
      "We scope it out together in a free consultation and build exactly what you need. No cookie-cutter solutions.",
    cta: "Book a Consult",
    href: "https://calendly.com/collin-parr46/30min",
    external: true,
  },
];

const commonFeatures = [
  "Mobile-responsive design",
  "SEO foundations",
  "Admin dashboard for content management",
  "Revision rounds",
  "Optional managed hosting",
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
        <p
          className="mt-4 max-w-2xl text-lg leading-relaxed text-silver-gray"
          style={{ fontFamily: "var(--font-outfit)", fontWeight: 300 }}
        >
          Every site is designed from scratch around your business. No templates, no shortcuts.
        </p>

        {/* Service cards */}
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {serviceCards.map(({ Icon, title, audience, description, cta, href, external }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="glass-card flex flex-col p-8"
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
                className="mt-2 text-sm text-photon-blue font-medium"
                style={{ fontFamily: "var(--font-outfit)" }}
              >
                {audience}
              </p>
              <p
                className="mt-4 flex-1 leading-relaxed text-silver-gray"
                style={{ fontFamily: "var(--font-outfit)", fontWeight: 300 }}
              >
                {description}
              </p>
              {external ? (
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-photon-glow mt-6 block w-full rounded-lg bg-photon-blue py-3 text-center text-sm font-semibold text-white"
                  style={{ fontFamily: "var(--font-outfit)" }}
                >
                  {cta} →
                </a>
              ) : (
                <Link
                  href={href}
                  className="btn-photon-glow mt-6 block w-full rounded-lg bg-photon-blue py-3 text-center text-sm font-semibold text-white"
                  style={{ fontFamily: "var(--font-outfit)" }}
                >
                  {cta} →
                </Link>
              )}
            </motion.div>
          ))}
        </div>

        {/* Common features */}
        <div className="mt-20 text-center">
          <h3
            className="text-xl font-semibold text-white"
            style={{ fontFamily: "var(--font-outfit)" }}
          >
            Included in Every Package
          </h3>
          <ul className="mx-auto mt-6 grid max-w-2xl gap-3 sm:grid-cols-2">
            {commonFeatures.map((f) => (
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
