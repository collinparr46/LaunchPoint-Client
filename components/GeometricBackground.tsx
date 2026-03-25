"use client";

import { useEffect, useState } from "react";

interface Star {
  left: number;
  top: number;
  maxOpacity: number;
  delay: number;
  duration: number;
  size: number;
}

function randomBetween(min: number, max: number) {
  return min + Math.random() * (max - min);
}

interface GeometricBackgroundProps {
  variant?: "hero" | "section" | "cta";
}

export function GeometricBackground({ variant = "hero" }: GeometricBackgroundProps) {
  const [stars, setStars] = useState<Star[]>([]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mobile = window.innerWidth < 768;
    setIsMobile(mobile);

    const counts = { hero: mobile ? 40 : 110, section: mobile ? 25 : 55, cta: mobile ? 30 : 75 };
    const count = counts[variant];

    const next: Star[] = Array.from({ length: count }, () => ({
      left: randomBetween(0, 100),
      top: randomBetween(0, 100),
      maxOpacity: randomBetween(0.3, 0.85),
      delay: randomBetween(0, 7),
      duration: randomBetween(2, 6),
      size: Math.random() > 0.6 ? 2 : 1,
    }));

    // Defer to avoid hydration flash
    setTimeout(() => setStars(next), 0);

    function onResize() {
      setIsMobile(window.innerWidth < 768);
    }
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [variant]);

  const patternOpacity = { hero: 1, section: 0.5, cta: 0.7 }[variant];
  const overlayGradient =
    variant === "hero"
      ? "linear-gradient(to bottom, rgba(19,33,63,0.2) 0%, rgba(11,21,40,0.65) 100%)"
      : variant === "cta"
      ? "linear-gradient(to bottom, rgba(19,33,63,0.3) 0%, rgba(11,21,40,0.75) 100%)"
      : "linear-gradient(to bottom, rgba(19,33,63,0.5) 0%, rgba(11,21,40,0.85) 100%)";

  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      {/* LP Visual Pattern.png — primary crystal background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/LP Visual Pattern.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: variant === "hero" ? "fixed" : "scroll",
          opacity: patternOpacity,
        }}
      />

      {/* Gradient overlay for text readability */}
      <div
        className="absolute inset-0"
        style={{ background: overlayGradient }}
      />

      {/* Twinkling star field */}
      {stars.map((star, i) => (
        <div
          key={i}
          className="star-field-dot absolute rounded-full bg-white"
          style={
            {
              left: `${star.left}%`,
              top: `${star.top}%`,
              width: star.size,
              height: star.size,
              animation: `twinkle ${star.duration}s ease-in-out ${star.delay}s infinite`,
              "--star-max-opacity": star.maxOpacity,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}
