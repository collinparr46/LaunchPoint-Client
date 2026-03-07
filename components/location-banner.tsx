"use client";

import { useState } from "react";
import { Globe, X } from "lucide-react";

export function LocationBanner() {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div
      className="fixed left-0 right-0 top-20 z-40 border-b border-[#1E1E2E] bg-[#111118] py-2"
      role="region"
      aria-label="Announcement"
    >
      <div className="relative mx-auto flex max-w-7xl items-center justify-center gap-2 px-6 lg:px-8">
        <Globe
          className="h-3.5 w-3.5 shrink-0 text-[#8888AA]"
          strokeWidth={1.5}
          fill="none"
          aria-hidden="true"
        />
        <p className="text-center text-sm text-[#8888AA]">
          Tulsa-based. Built for small businesses everywhere.
        </p>
        <button
          type="button"
          onClick={() => setDismissed(true)}
          className="absolute right-4 top-1/2 -translate-y-1/2 rounded p-1 text-[#8888AA] hover:text-[#E2E2F0] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#7C5CFC]"
          aria-label="Dismiss announcement"
        >
          <X className="h-3.5 w-3.5" strokeWidth={1.5} aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
