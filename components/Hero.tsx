"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { GeometricBackground } from "./GeometricBackground";

const spring = { type: "spring" as const, stiffness: 100, damping: 15 };

export function Hero() {
  return (
    <section
      aria-label="Hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      <GeometricBackground variant="hero" />

      <div className="relative z-10 mx-auto w-full max-w-4xl px-6 py-36 text-center lg:px-8">

        {/* 4K Logo — Visual Anchor */}
        <motion.div
          initial={{ opacity: 0, scale: 0.88 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="relative mx-auto mb-10"
          style={{ maxWidth: "400px" }}
        >
          {/* Ambient glow halo — spreads behind the logo */}
          <div
            className="absolute pointer-events-none"
            aria-hidden="true"
            style={{
              inset: "-30%",
              background:
                "radial-gradient(ellipse at center, rgba(56,189,248,0.22) 0%, rgba(236,72,153,0.12) 45%, transparent 70%)",
              filter: "blur(40px)",
            }}
          />
          {/* Logo image — rounded corners + layered glow shadow */}
          <Image
            src="/LP 4K Logo.png"
            alt="LaunchPoint Studio — custom web design"
            width={480}
            height={480}
            priority
            className="relative mx-auto w-full rounded-3xl overflow-hidden"
            style={{
              maxWidth: "400px",
              boxShadow:
                "0 0 60px rgba(56,189,248,0.28), 0 0 120px rgba(236,72,153,0.14), 0 0 200px rgba(56,189,248,0.08)",
            }}
          />
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="text-sm font-medium uppercase tracking-[0.25em] text-silver-gray"
          style={{ fontFamily: "var(--font-outfit)" }}
        >
          Web Design &amp; Development
        </motion.p>

        {/* Headline */}
        <h1
          className="mt-4 leading-tight text-white"
          style={{
            fontFamily: "var(--font-cormorant)",
            fontWeight: 700,
            fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
          }}
        >
          <motion.span
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ ...spring, delay: 0.7 }}
            className="block"
          >
            Built to Launch.
          </motion.span>
          <motion.span
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ ...spring, delay: 0.85 }}
            className="block"
          >
            Built to Last.
          </motion.span>
        </h1>

        {/* Value prop */}
        <motion.p
          initial={{ y: 28, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.05 }}
          className="mx-auto mt-6 max-w-lg text-lg leading-relaxed"
          style={{
            color: "rgba(255,255,255,0.8)",
            fontFamily: "var(--font-outfit)",
            fontWeight: 300,
          }}
        >
          Custom websites for small businesses that need to look professional, launch fast, and actually convert.{" "}
          <span className="font-medium text-white">$1,000 flat. Live in under 3 weeks.</span>
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ y: 20, opacity: 0, scale: 0.95 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ ...spring, delay: 1.25 }}
          className="mt-10 flex flex-col items-center gap-4"
        >
          <a
            href="https://calendly.com/collin-parr46/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-photon-glow inline-block rounded-lg bg-photon-blue px-8 py-4 text-base font-semibold text-white"
            style={{ fontFamily: "var(--font-outfit)" }}
          >
            Schedule a Free Consult
          </a>
          <p className="text-sm text-silver-gray" style={{ fontFamily: "var(--font-outfit)" }}>
            Free consultation · No contracts · Tulsa-based
          </p>
        </motion.div>
      </div>
    </section>
  );
}
