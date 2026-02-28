"use client";

import { useEffect, useState } from "react";

const STAR_COUNT = 150;

type Star = {
  left: number;
  top: number;
  opacity: number;
  delay: number;
  duration: number;
  size: number;
};

function randomBetween(min: number, max: number) {
  return min + Math.random() * (max - min);
}

export function StarField() {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const next: Star[] = [];
    for (let i = 0; i < STAR_COUNT; i++) {
      next.push({
        left: randomBetween(0, 100),
        top: randomBetween(0, 100),
        opacity: randomBetween(0.2, 0.8),
        delay: randomBetween(0, 8),
        duration: randomBetween(2, 5),
        size: Math.random() > 0.5 ? 1 : 2,
      });
    }
    setStars(next);
  }, []);

  if (stars.length === 0) return null;

  return (
    <div
      className="fixed inset-0 z-0 pointer-events-none"
      aria-hidden
    >
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
              ["--star-max-opacity" as string]: star.opacity,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}
