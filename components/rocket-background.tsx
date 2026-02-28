"use client";

import { useEffect, useState } from "react";

export function RocketBackground() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const { scrollY, innerHeight } = window;
      const docHeight = document.documentElement.scrollHeight;
      const maxScroll = docHeight - innerHeight;
      const raw = maxScroll > 0 ? scrollY / maxScroll : 0;
      const clamped = Math.min(Math.max(raw, 0), 1);
      setProgress(clamped);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const translateY = 38 - progress * 78;

  return (
    <div className="pointer-events-none fixed inset-0 z-0 flex items-center justify-center">
      <div
        className="relative h-[420px] w-[80px]"
        style={{
          opacity: 0.18,
          transform: `translateY(${translateY}vh)`,
          transition: "transform 0.15s ease-out",
        }}
      >
        <svg
          viewBox="0 0 80 420"
          className="relative z-10 h-full w-full"
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            {/* Metallic: white left, light grey middle, darker grey right */}
            <linearGradient id="rocketMetallic" x1="0" x2="1" y1="0" y2="0">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="35%" stopColor="#f1f5f9" />
              <stop offset="65%" stopColor="#e2e8f0" />
              <stop offset="100%" stopColor="#cbd5e1" />
            </linearGradient>
            <linearGradient id="engineGlow" x1="0.5" x2="0.5" y1="0" y2="1">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
              <stop offset="25%" stopColor="#fef08a" stopOpacity="0.9" />
              <stop offset="55%" stopColor="#f97316" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#ea580c" stopOpacity="0.5" />
            </linearGradient>
            <linearGradient id="smokePlume" x1="0.5" x2="0.5" y1="0" y2="1">
              <stop offset="0%" stopColor="#f8fafc" stopOpacity="0.4" />
              <stop offset="40%" stopColor="#e2e8f0" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#94a3b8" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Smoke trail — long wide plume, stacked ellipses, slow drift/expand */}
          <g className="rocket-smoke-plume">
            <ellipse cx="40" cy="310" rx="34" ry="55" fill="url(#smokePlume)" className="rocket-smoke-a" />
            <ellipse cx="40" cy="345" rx="38" ry="60" fill="url(#smokePlume)" className="rocket-smoke-b" />
            <ellipse cx="40" cy="382" rx="42" ry="65" fill="url(#smokePlume)" className="rocket-smoke-c" />
            <ellipse cx="40" cy="415" rx="40" ry="58" fill="url(#smokePlume)" className="rocket-smoke-d" />
          </g>

          {/* Flame — layered ellipses, smooth breathe/pulse (2–4s) */}
          <g transform="translate(40, 268)">
            <ellipse cx="0" cy="45" rx="18" ry="50" fill="url(#engineGlow)" className="rocket-flame-layer rocket-flame-1" />
            <ellipse cx="0" cy="55" rx="22" ry="58" fill="url(#engineGlow)" className="rocket-flame-layer rocket-flame-2" />
            <ellipse cx="0" cy="65" rx="20" ry="52" fill="url(#engineGlow)" className="rocket-flame-layer rocket-flame-3" />
            <ellipse cx="0" cy="75" rx="24" ry="55" fill="url(#engineGlow)" className="rocket-flame-layer rocket-flame-4" />
            <ellipse cx="0" cy="85" rx="19" ry="48" fill="url(#engineGlow)" className="rocket-flame-layer rocket-flame-5" />
          </g>

          {/* Rocket body — sleek, pointed nose, clean fins */}
          <path
            d="M40 0 L56 44 L56 60 L40 54 L24 60 L24 44 Z"
            fill="url(#rocketMetallic)"
            stroke="#94a3b8"
            strokeWidth="0.6"
            strokeOpacity="0.5"
          />
          <rect x="24" y="54" width="32" height="120" fill="url(#rocketMetallic)" stroke="#94a3b8" strokeWidth="0.5" strokeOpacity="0.5" />
          <line x1="24" y1="90" x2="56" y2="90" stroke="#94a3b8" strokeWidth="0.4" strokeOpacity="0.5" />
          <line x1="24" y1="126" x2="56" y2="126" stroke="#94a3b8" strokeWidth="0.4" strokeOpacity="0.5" />
          <line x1="24" y1="162" x2="56" y2="162" stroke="#94a3b8" strokeWidth="0.4" strokeOpacity="0.5" />
          <rect x="25" y="174" width="30" height="50" fill="url(#rocketMetallic)" stroke="#94a3b8" strokeWidth="0.5" strokeOpacity="0.5" />
          <rect x="26" y="220" width="28" height="48" fill="url(#rocketMetallic)" stroke="#94a3b8" strokeWidth="0.5" strokeOpacity="0.5" />
          <path d="M24 260 L16 272 L24 268 L24 260 Z" fill="url(#rocketMetallic)" stroke="#94a3b8" strokeWidth="0.5" strokeOpacity="0.5" />
          <path d="M56 260 L64 272 L56 268 L56 260 Z" fill="url(#rocketMetallic)" stroke="#94a3b8" strokeWidth="0.5" strokeOpacity="0.5" />
        </svg>
      </div>
    </div>
  );
}
