"use client";

const STAR_COUNT = 150;

const positions: { left: number; top: number; delay: number; duration: number; size: number }[] = [];
for (let i = 0; i < STAR_COUNT; i++) {
  positions.push({
    left: ((i * 37 + 13) % 97) + 1.5,
    top: ((i * 53 + 7) % 98) + 1,
    delay: (i * 0.07 + (i % 5) * 0.5) % 4,
    duration: 2.2 + (i % 7) * 0.4 + (i % 3) * 0.2,
    size: (i % 3 === 0 ? 2 : 1) as 1 | 2,
  });
}

export function Starfield() {
  return (
    <div
      className="pointer-events-none fixed inset-0 -z-[1]"
      aria-hidden
    >
      {positions.map(({ left, top, delay, duration, size }, i) => (
        <span
          key={i}
          className="star absolute rounded-full bg-white"
          style={{
            left: `${left}%`,
            top: `${top}%`,
            width: size,
            height: size,
            animationDelay: `${delay}s`,
            animationDuration: `${duration}s`,
          }}
        />
      ))}
    </div>
  );
}
