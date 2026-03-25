"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { GeometricBackground } from "./GeometricBackground";

const spring = { type: "spring" as const, stiffness: 100, damping: 15 };

export function Hero() {
  return (
    <section
      aria-label="Hero"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      <GeometricBackground variant="hero" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-36 lg:px-8 lg:py-0">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-center lg:gap-0">

          {/* Left content — 55% */}
          <div className="w-full lg:w-[55%] text-center lg:text-left">

            {/* Label */}
            <motion.p
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-sm font-medium uppercase tracking-[0.25em] text-silver-gray"
              style={{ fontFamily: "var(--font-outfit)" }}
            >
              Web Design &amp; Development
            </motion.p>

            {/* Heading */}
            <h1 className="mt-4 leading-tight text-white" style={{ fontFamily: "var(--font-cormorant)", fontWeight: 700, fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}>
              <motion.span
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ ...spring, delay: 0.4 }}
                className="block"
              >
                Built to Launch.
              </motion.span>
              <motion.span
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ ...spring, delay: 0.55 }}
                className="block"
              >
                Built to Last.
              </motion.span>
            </h1>

            {/* Subheading */}
            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-6 max-w-lg text-lg leading-relaxed mx-auto lg:mx-0"
              style={{ color: "rgba(255,255,255,0.8)", fontFamily: "var(--font-outfit)", fontWeight: 300 }}
            >
              Custom websites for small businesses that need to look professional, launch fast, and actually convert.{" "}
              <span className="text-white font-medium">$1,000 flat. Live in under 3 weeks.</span>
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ y: 20, opacity: 0, scale: 0.95 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              transition={{ ...spring, delay: 0.9 }}
              className="mt-10 flex flex-col items-center lg:items-start gap-4"
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

          {/* Right content — 45% — Rocket */}
          <div className="w-full lg:w-[45%] flex justify-center items-center relative">
            {/* Radial glow behind rocket */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: "radial-gradient(circle at center, rgba(51,161,222,0.15) 0%, transparent 65%), radial-gradient(circle at 40% 60%, rgba(195,31,117,0.08) 0%, transparent 50%)",
              }}
            />

            <motion.div
              initial={{ x: 100, opacity: 0, rotate: 5 }}
              animate={{ x: 0, opacity: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 80, damping: 20, delay: 0.5 }}
              className="animate-float relative"
            >
              <Image
                src="/LP Icon Logo.png"
                alt="LaunchPoint Studio rocket logo"
                width={480}
                height={480}
                priority
                className="drop-shadow-2xl"
                style={{ maxHeight: "480px", width: "auto" }}
              />
            </motion.div>

            {/* Mobile watermark — rocket behind text (handled via opacity below on mobile) */}
          </div>
        </div>
      </div>
    </section>
  );
}
