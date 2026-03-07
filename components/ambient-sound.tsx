"use client";

import { useCallback, useRef, useState } from "react";

type AudioNodes = {
  ctx: AudioContext;
  gain: GainNode;
  osc1: OscillatorNode;
  osc2: OscillatorNode;
  osc3: OscillatorNode;
};

function buildAudio(): AudioNodes {
  const ctx = new AudioContext();

  const gain = ctx.createGain();
  gain.gain.setValueAtTime(0.0001, ctx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.04, ctx.currentTime + 3);
  gain.connect(ctx.destination);

  // Three detuned sine waves for a soft ambient pad
  const freqs = [55, 82.5, 110]; // A1, E2, A2 — open fifth + root
  const nodes = freqs.map((freq, i) => {
    const osc = ctx.createOscillator();
    osc.type = "sine";
    osc.frequency.value = freq;

    const oscGain = ctx.createGain();
    // Slightly different volumes for depth
    oscGain.gain.value = i === 0 ? 0.6 : i === 1 ? 0.3 : 0.15;

    osc.connect(oscGain);
    oscGain.connect(gain);
    osc.start();
    return osc;
  });

  return { ctx, gain, osc1: nodes[0], osc2: nodes[1], osc3: nodes[2] };
}

export function AmbientSound() {
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<AudioNodes | null>(null);

  const toggle = useCallback(() => {
    if (!playing) {
      if (!audioRef.current) {
        audioRef.current = buildAudio();
      } else {
        // Resume existing context if suspended
        const { ctx, gain } = audioRef.current;
        if (ctx.state === "suspended") ctx.resume();
        gain.gain.cancelScheduledValues(ctx.currentTime);
        gain.gain.setValueAtTime(0.0001, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.04, ctx.currentTime + 2);
      }
      setPlaying(true);
    } else {
      if (audioRef.current) {
        const { ctx, gain } = audioRef.current;
        gain.gain.cancelScheduledValues(ctx.currentTime);
        gain.gain.setValueAtTime(gain.gain.value, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 2);
        setTimeout(() => ctx.suspend(), 2200);
      }
      setPlaying(false);
    }
  }, [playing]);

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={playing ? "Mute ambient sound" : "Play ambient sound"}
      title={playing ? "Mute ambient sound" : "Play ambient sound"}
      className="fixed bottom-6 left-6 z-50 flex h-9 w-9 items-center justify-center rounded-full border border-[#1E1E2E] bg-[#111118]/80 text-[#8888AA] backdrop-blur-sm transition-colors hover:border-[#7C5CFC]/50 hover:text-[#C8B8FF]"
    >
      {playing ? (
        // Speaker with waves (sound on)
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
          <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
          <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
        </svg>
      ) : (
        // Speaker muted (X lines)
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
          <line x1="23" y1="9" x2="17" y2="15" />
          <line x1="17" y1="9" x2="23" y2="15" />
        </svg>
      )}
    </button>
  );
}
