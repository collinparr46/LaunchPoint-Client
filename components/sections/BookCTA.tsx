"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GeometricBackground } from "@/components/GeometricBackground";

export function BookCTA() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const currentMonth = new Date().toLocaleString("default", { month: "long" });

  return (
    <section
      id="book"
      aria-labelledby="book-heading"
      className="relative px-6 py-32 lg:px-8"
    >
      <GeometricBackground variant="cta" />

      <div ref={ref} className="relative z-10 mx-auto max-w-3xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-silver-gray"
          style={{ fontFamily: "var(--font-outfit)" }}
        >
          Book a Call
        </motion.p>
        <div className="gradient-accent-line mx-auto mb-5" />

        <motion.h2
          id="book-heading"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl font-bold text-white md:text-5xl"
          style={{ fontFamily: "var(--font-outfit)" }}
        >
          Ready to Launch?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-silver-gray"
          style={{ fontFamily: "var(--font-outfit)", fontWeight: 300 }}
        >
          It starts with a free 30-minute call. No pitch, no pressure — just a clear plan.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="mt-10"
        >
          <a
            href="https://calendly.com/collin-parr46/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gradient-glow inline-block rounded-lg px-10 py-5 text-lg font-semibold text-white"
            style={{ fontFamily: "var(--font-outfit)" }}
          >
            Book Your Free Call →
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-5 text-sm"
          style={{ color: "rgba(255,255,255,0.5)", fontFamily: "var(--font-outfit)" }}
        >
          Currently accepting new clients for {currentMonth} — limited spots available.
        </motion.p>
      </div>
    </section>
  );
}
