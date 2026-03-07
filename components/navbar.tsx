"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
  { label: "Pricing", href: "#pricing" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Book", href: "#book" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  // Close menu on resize to desktop
  useEffect(() => {
    function onResize() {
      if (window.innerWidth >= 768) setOpen(false);
    }
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Prevent body scroll while menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  function handleLinkClick() {
    setOpen(false);
  }

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-[#1E1E2E] bg-[#0C0820]/80 backdrop-blur-md">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8"
      >
        {/* Logo */}
        <a
          href="#"
          className="font-display text-2xl font-semibold tracking-tight text-white"
          aria-label="LaunchPoint — home"
        >
          LaunchPoint
        </a>

        {/* Desktop links — centered */}
        <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-10 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-[#E2E2F0] transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA — hidden on mobile */}
        <a
          href="#book"
          className="btn-cta-glow hidden rounded border border-[#1E1E2E] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:border-[#7C5CFC]/50 hover:bg-[#7C5CFC]/10 md:inline-block"
        >
          Schedule a Consult
        </a>

        {/* Hamburger — mobile only */}
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          className="flex h-10 w-10 items-center justify-center rounded border border-[#1E1E2E] text-[#E2E2F0] transition-colors hover:border-[#7C5CFC]/50 hover:text-white md:hidden"
        >
          {open ? (
            // X icon
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            // Hamburger icon
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile menu — slides down from the header */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-label="Mobile navigation"
        className={[
          "overflow-hidden border-t border-[#1E1E2E] bg-[#0C0820] transition-all duration-300 ease-in-out md:hidden",
          open ? "max-h-screen opacity-100" : "max-h-0 opacity-0",
        ].join(" ")}
      >
        <nav className="flex flex-col px-6 pb-8 pt-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={handleLinkClick}
              className="border-b border-[#1E1E2E] py-4 text-base font-medium text-[#E2E2F0] transition-colors last:border-b-0 hover:text-[#7C5CFC]"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#book"
            onClick={handleLinkClick}
            className="btn-cta-glow mt-6 block w-full rounded bg-[#7C5CFC] py-3 text-center text-sm font-semibold text-white"
          >
            Schedule a Consult
          </a>
        </nav>
      </div>
    </header>
  );
}
