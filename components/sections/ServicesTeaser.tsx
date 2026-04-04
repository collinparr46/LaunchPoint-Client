"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function ServicesTeaser() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="services" aria-labelledby="services-teaser-heading" className="relative px-6 py-20 md:py-32 lg:px-8">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "url('/LP Visual Pattern.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.04,
        }}
      />

      <div ref={ref} className="relative mx-auto max-w-6xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-silver-gray"
          style={{ fontFamily: "var(--font-outfit)" }}
        >
          Our Services
        </motion.p>
        <div className="gradient-accent-line mx-auto mb-5" />

        <motion.h2
          id="services-teaser-heading"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl font-bold text-white md:text-4xl"
          style={{ fontFamily: "var(--font-outfit)" }}
        >
          Everything Your Business Needs Online
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-silver-gray"
          style={{ fontFamily: "var(--font-outfit)", fontWeight: 300 }}
        >
          Portfolio sites, business websites, online stores. We build the whole thing from scratch and hand you the keys.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="mt-10"
        >
          <Link
            href="/pricing"
            className="btn-photon-glow inline-block rounded-lg bg-photon-blue px-8 py-4 text-base font-semibold text-white"
            style={{ fontFamily: "var(--font-outfit)" }}
          >
            Explore Our Packages →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
