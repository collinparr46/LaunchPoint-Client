"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: 3, suffix: "", label: "Weeks avg to launch", display: "3" },
  { value: 100, suffix: "%", label: "On-time delivery", display: "100%" },
  { value: null, suffix: "", label: "Developer access", display: "1:1" },
  { value: null, suffix: "", label: "To get a quote", display: "$0" },
];

function CountUp({ target, suffix, started }: { target: number; suffix: string; started: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!started) return;
    let start = 0;
    const duration = 1200;
    const step = 16;
    const increment = target / (duration / step);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, step);
    return () => clearInterval(timer);
  }, [started, target]);

  return <>{count}{suffix}</>;
}

export function SocialProof() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      aria-label="Social proof statistics"
      className="relative py-10"
      style={{
        background: "#1A2D4F",
        borderTop: "1px solid rgba(51,161,222,0.15)",
        borderBottom: "1px solid rgba(51,161,222,0.15)",
      }}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map(({ value, suffix, label, display }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <p
                className="text-3xl font-bold text-white"
                style={{ fontFamily: "var(--font-outfit)" }}
              >
                {value !== null ? (
                  <CountUp target={value} suffix={suffix} started={inView} />
                ) : (
                  display
                )}
              </p>
              <p
                className="mt-1 text-sm text-silver-gray"
                style={{ fontFamily: "var(--font-outfit)", fontWeight: 300 }}
              >
                {label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
