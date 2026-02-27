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

  const translateY = 30 - progress * 70;

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 flex items-center justify-center">
      <div
        className="relative w-[140px] opacity-70 md:w-[180px]"
        style={{
          transform: `translateY(${translateY}vh)`,
          transition: "transform 0.15s ease-out",
        }}
      >
        <div className="absolute -inset-x-10 bottom-0 h-40 rounded-full bg-white/5 blur-3xl" />

        <svg
          viewBox="0 0 120 260"
          className="relative z-10 drop-shadow-[0_0_40px_rgba(255,255,255,0.18)]"
        >
          <defs>
            <linearGradient id="rocketBody" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#d4d4d4" stopOpacity="0.7" />
            </linearGradient>
            <linearGradient id="rocketAccent" x1="0" x2="1" y1="0" y2="0">
              <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#22c55e" stopOpacity="0.95" />
            </linearGradient>
            <radialGradient id="rocketWindow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#e5f0ff" stopOpacity="1" />
              <stop offset="100%" stopColor="#60a5fa" stopOpacity="0.4" />
            </radialGradient>
            <linearGradient id="rocketFlame" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#fef3c7" />
              <stop offset="40%" stopColor="#f97316" />
              <stop offset="100%" stopColor="#b91c1c" stopOpacity="0.9" />
            </linearGradient>
          </defs>

          <g opacity="0.92">
            <path
              d="M60 8C46 24 32 52 32 86V158C32 172 40 184 60 188C80 184 88 172 88 158V86C88 52 74 24 60 8Z"
              fill="url(#rocketBody)"
            />

            <path
              d="M60 20C50 34 42 56 42 82V154C42 163 47 171 60 174C73 171 78 163 78 154V82C78 56 70 34 60 20Z"
              fill="#020617"
              fillOpacity="0.9"
            />

            <circle
              cx="60"
              cy="86"
              r="14"
              fill="url(#rocketWindow)"
              stroke="#0f172a"
              strokeWidth="2"
            />
            <circle cx="56" cy="82" r="3" fill="#e5f0ff" opacity="0.7" />

            <path
              d="M32 130L16 166C26 166 35 162 42 156V130H32Z"
              fill="#0f172a"
              fillOpacity="0.9"
            />
            <path
              d="M88 130L104 166C94 166 85 162 78 156V130H88Z"
              fill="#0f172a"
              fillOpacity="0.9"
            />

            <path
              d="M60 186C48 186 40 188 34 192C38 200 46 206 60 210C74 206 82 200 86 192C80 188 72 186 60 186Z"
              fill="url(#rocketAccent)"
              opacity="0.95"
            />
          </g>

          <g transform="translate(60, 210)">
            <path
              className="rocket-flame"
              d="M0 0C-10 32 -8 58 0 84C8 58 10 32 0 0Z"
              fill="url(#rocketFlame)"
              fillOpacity="0.9"
            />

            <g className="rocket-smoke" opacity="0.22">
              <ellipse cx="0" cy="90" rx="22" ry="10" fill="#e5e7eb" />
            </g>
            <g className="rocket-smoke" opacity="0.18">
              <ellipse cx="-12" cy="104" rx="18" ry="9" fill="#cbd5f5" />
            </g>
            <g className="rocket-smoke" opacity="0.16">
              <ellipse cx="10" cy="116" rx="20" ry="10" fill="#e5e7eb" />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}

