"use client";

import { useEffect, useState } from "react";

type Comet = {
  id: number;
  top: number;
  left: number;
  angle: number;
  duration: number;
  delay: number;
  length: number;
};

function randomBetween(min: number, max: number) {
  return min + Math.random() * (max - min);
}

const COMET_COUNT = 5;

export function ShootingStars() {
  const [comets, setComets] = useState<Comet[]>([]);

  useEffect(() => {
    const next: Comet[] = [];
    for (let i = 0; i < COMET_COUNT; i++) {
      next.push({
        id: i,
        // Spawn across the top half of the screen
        top: randomBetween(-5, 45),
        left: randomBetween(10, 90),
        // Slight downward diagonal
        angle: randomBetween(20, 40),
        // Very slow, 6 to 12 seconds per streak
        duration: randomBetween(6, 12),
        // Stagger so they don't all fire at once
        delay: randomBetween(0, 30),
        // Tail length as a multiplier
        length: randomBetween(80, 160),
      });
    }
    setComets(next);
  }, []);

  if (comets.length === 0) return null;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden="true"
    >
      {comets.map((comet) => (
        <div
          key={comet.id}
          className="shooting-star absolute"
          style={
            {
              top: `${comet.top}%`,
              left: `${comet.left}%`,
              "--comet-angle": `${comet.angle}deg`,
              "--comet-duration": `${comet.duration}s`,
              "--comet-delay": `${comet.delay}s`,
              "--comet-length": `${comet.length}px`,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}
