"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    number: "1",
    title: "Free Consult",
    body: "We learn your business, goals, and vision in a 30-minute call.",
  },
  {
    number: "2",
    title: "Design & Build",
    body: "We get to work. You get updates throughout, not just at the end.",
  },
  {
    number: "3",
    title: "Launch & Support",
    body: "Your site goes live and we stick around to make sure it performs.",
  },
];

export function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const lineInView = useInView(lineRef, { once: true, margin: "-50px" });

  return (
    <section id="process" aria-labelledby="process-heading" className="relative px-6 py-28 lg:px-8">
      {/* Faint pattern */}
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
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-silver-gray" style={{ fontFamily: "var(--font-outfit)" }}>
          The Process
        </p>
        <div className="gradient-accent-line mb-5" />
        <h2
          id="process-heading"
          className="text-3xl font-bold text-white md:text-4xl"
          style={{ fontFamily: "var(--font-outfit)" }}
        >
          From Idea to Launch
        </h2>

        {/* Timeline connector — desktop only */}
        <div ref={lineRef} className="relative mt-20 hidden md:block">
          <div className="absolute top-8 left-[16.67%] right-[16.67%] h-[3px] bg-midnight-navy rounded-full overflow-hidden">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={lineInView ? { scaleX: 1 } : {}}
              transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
              className="h-full origin-left rounded-full"
              style={{ background: "linear-gradient(to right, #33A1DE, #C31F75)" }}
            />
          </div>
        </div>

        <ol className="mt-20 md:mt-0 grid gap-8 md:grid-cols-3">
          {steps.map(({ number, title, body }, i) => (
            <motion.li
              key={number}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 + 0.2 }}
              className="glass-card p-8 text-center"
            >
              <span
                className="block leading-none text-white"
                aria-hidden="true"
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontWeight: 700,
                  fontSize: "4.5rem",
                  opacity: 0.25,
                }}
              >
                {number}
              </span>
              <h3
                className="mt-4 text-xl font-semibold text-white"
                style={{ fontFamily: "var(--font-outfit)" }}
              >
                {title}
              </h3>
              <p
                className="mt-4 leading-relaxed text-silver-gray"
                style={{ fontFamily: "var(--font-outfit)", fontWeight: 300 }}
              >
                {body}
              </p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
