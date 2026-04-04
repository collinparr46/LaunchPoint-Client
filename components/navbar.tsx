"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Services", href: "/services" },
  { label: "Process", href: "/process" },
  { label: "About", href: "/about" },
  { label: "Pricing", href: "/pricing" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Book", href: "/book" },
];

const mobileNavLinks = [
  { label: "Home", href: "/" },
  ...navLinks,
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 50);
    }
    function onResize() {
      if (window.innerWidth >= 768) setOpen(false);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  function handleLinkClick() {
    setOpen(false);
  }

  return (
    <>
      <header
        className="fixed left-0 right-0 top-0 z-50 transition-all duration-300"
        style={{
          background: scrolled
            ? "rgba(19,33,63,0.92)"
            : "transparent",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(16px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(51,161,222,0.1)" : "1px solid transparent",
        }}
      >
        <nav
          aria-label="Main navigation"
          className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-6 lg:px-8"
        >
          {/* Logo */}
          <Link href="/" aria-label="LaunchPoint Studio home" className="flex items-center">
            <Image
              src="/LP Icon No BG.png"
              alt="LaunchPoint Studio"
              width={48}
              height={48}
              priority
              className="h-11 w-auto"
            />
          </Link>

          {/* Desktop links */}
          <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 md:flex">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className="group relative text-sm transition-colors hover:text-white"
                  style={{
                    fontFamily: "var(--font-outfit)",
                    fontWeight: 400,
                    color: isActive ? "#ffffff" : "rgba(195,199,201,1)",
                  }}
                >
                  {link.label}
                  <span
                    className="absolute -bottom-0.5 left-0 h-[2px] rounded-full bg-photon-blue transition-all duration-300"
                    style={{ width: isActive ? "100%" : "0%", opacity: isActive ? 1 : undefined }}
                  />
                  {!isActive && (
                    <span className="absolute -bottom-0.5 left-0 h-[2px] w-0 rounded-full bg-photon-blue transition-all duration-300 group-hover:w-full" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Desktop CTA */}
          <a
            href="https://calendly.com/collin-parr46/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-md border border-photon-blue px-5 py-2 text-sm font-medium text-white transition-all duration-200 hover:bg-photon-blue md:inline-block"
            style={{ fontFamily: "var(--font-outfit)" }}
          >
            Schedule a Consult
          </a>

          {/* Hamburger (mobile only) */}
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded md:hidden"
          >
            <span
              className="block h-[2px] w-6 rounded-full bg-white transition-all duration-300 origin-center"
              style={{ transform: open ? "rotate(45deg) translate(2.5px, 2.5px)" : "none" }}
            />
            <span
              className="block h-[2px] w-6 rounded-full bg-white transition-all duration-300"
              style={{ opacity: open ? 0 : 1 }}
            />
            <span
              className="block h-[2px] w-6 rounded-full bg-white transition-all duration-300 origin-center"
              style={{ transform: open ? "rotate(-45deg) translate(2.5px, -2.5px)" : "none" }}
            />
          </button>
        </nav>
      </header>

      {/* Mobile overlay menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-label="Mobile navigation"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center md:hidden"
            style={{
              background: "rgba(19,33,63,0.98)",
              backgroundImage: "url('/LP Visual Pattern.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Dim overlay so text is readable over pattern */}
            <div className="absolute inset-0" style={{ background: "rgba(19,33,63,0.93)" }} />

            <nav className="relative z-10 flex flex-col items-center gap-8 px-6 pb-16 pt-8 w-full">
              {mobileNavLinks.map((link, i) => (
                <motion.div key={link.label} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 * i, duration: 0.3 }}>
                  <Link
                    href={link.href}
                    onClick={handleLinkClick}
                    className="group flex items-center gap-3 text-2xl font-semibold text-white transition-colors hover:text-photon-blue"
                    style={{ fontFamily: "var(--font-outfit)" }}
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-photon-blue opacity-0 transition-opacity group-hover:opacity-100" />
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              <motion.a
                href="https://calendly.com/collin-parr46/30min"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleLinkClick}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * mobileNavLinks.length, duration: 0.3 }}
                className="mt-4 w-full max-w-xs rounded-lg bg-photon-blue py-4 text-center text-base font-semibold text-white"
                style={{ fontFamily: "var(--font-outfit)" }}
              >
                Schedule a Consult
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
