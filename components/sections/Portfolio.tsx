"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function Stars() {
  return (
    <div className="flex gap-1" aria-label="5 out of 5 stars" role="img">
      {[1, 2, 3, 4, 5].map((i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#33A1DE" aria-hidden="true">
          <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
        </svg>
      ))}
    </div>
  );
}

const projects = [
  {
    badge: "LIVE",
    title: "Cuts by Cate",
    description:
      "Custom portfolio and booking site for a Tulsa-based hairstylist. Designed to convert visitors into booked appointments.",
    href: "https://www.cutsbycate.com",
    quote:
      "I needed something that actually looked like me and got people booking. LaunchPoint turned it around faster than I expected and built something I'm genuinely proud to share.",
    author: "— Catelin Parr, Hairstylist, Tulsa OK",
  },
  {
    badge: "LIVE",
    title: "Riverside Air Comfort",
    description:
      "HVAC specialist website for a Tulsa-based heating and cooling company. Built to generate calls and establish credibility.",
    href: "https://riverside-air-comfort.vercel.app",
    quote:
      "We needed a site that actually looked like a real business. LaunchPoint delivered something clean and professional in under two weeks. Already getting calls from it.",
    author: "— Marcus Webb, Owner, Riverside Air Comfort",
  },
];

export function Portfolio() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="portfolio" aria-labelledby="portfolio-heading" className="relative px-6 py-28 lg:px-8">
      <div ref={ref} className="mx-auto max-w-5xl">
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-silver-gray" style={{ fontFamily: "var(--font-outfit)" }}>
          Featured Work
        </p>
        <div className="gradient-accent-line mb-5" />
        <h2
          id="portfolio-heading"
          className="text-3xl font-bold text-white md:text-4xl"
          style={{ fontFamily: "var(--font-outfit)" }}
        >
          Built for Real Businesses.
        </h2>

        <div className="mt-16 space-y-8">
          {projects.map(({ badge, title, description, href, quote, author }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className="glass-card p-8 md:grid md:grid-cols-2 md:gap-12 md:p-10"
            >
              {/* Left — project info */}
              <div>
                <div className="flex items-center gap-2">
                  <span className="live-dot h-2 w-2 rounded-full bg-emerald-400 inline-block" />
                  <span
                    className="text-xs font-medium uppercase tracking-wider text-emerald-400"
                    style={{ fontFamily: "var(--font-outfit)" }}
                  >
                    {badge}
                  </span>
                </div>
                <h3
                  className="mt-3 text-3xl font-bold text-white"
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
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-block text-sm font-medium text-photon-blue transition-colors hover:underline"
                  style={{ fontFamily: "var(--font-outfit)" }}
                >
                  View Live Site →
                </a>
              </div>

              {/* Right — testimonial */}
              <div className="mt-8 md:mt-0">
                <div
                  className="h-full rounded-lg p-6"
                  style={{ borderLeft: "2px solid #33A1DE", background: "rgba(51,161,222,0.04)" }}
                >
                  <Stars />
                  <blockquote
                    className="mt-4 italic leading-relaxed text-silver-gray"
                    style={{ fontFamily: "var(--font-outfit)", fontWeight: 300 }}
                  >
                    <p>&ldquo;{quote}&rdquo;</p>
                    <footer
                      className="mt-4 text-sm not-italic text-silver-gray"
                      style={{ opacity: 0.7 }}
                    >
                      {author}
                    </footer>
                  </blockquote>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <p
          className="mt-10 text-center text-sm italic text-silver-gray"
          style={{ fontFamily: "var(--font-outfit)", fontWeight: 300 }}
        >
          More projects launching soon — currently accepting new clients.
        </p>
      </div>
    </section>
  );
}
