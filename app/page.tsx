"use client";

import { useState, useEffect } from "react";
import { ShoppingBag, Palette, Code2, MapPin, Zap, Globe } from "lucide-react";
import { RocketBackground } from "@/components/rocket-background";
import { StarField } from "@/components/star-field";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
  { label: "Pricing", href: "#pricing" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Book", href: "#book" },
];

const services = [
  {
    icon: ShoppingBag,
    title: "eCommerce Stores",
    description:
      "Sell online with a store built to convert. From product pages to checkout, we design for clarity and trust so your customers buy with confidence.",
  },
  {
    icon: Palette,
    title: "Creative Portfolios",
    description:
      "Your work deserves a stage. We build portfolio sites that make clients stop scrolling and start reaching out.",
  },
  {
    icon: Code2,
    title: "Custom Web Apps",
    description:
      "Client portals, CRMs, and tools built for your business. We build web applications that streamline your workflow and scale with you.",
  },
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-4 text-[0.75rem] font-medium uppercase tracking-[0.15em] text-[#6600FF]">
      {children}
    </p>
  );
}

export default function Home() {
  const [bannerDismissed, setBannerDismissed] = useState(false);
  const [iframeBlocked, setIframeBlocked] = useState(false);
  const currentMonth = new Date().toLocaleString("default", { month: "long" });

  useEffect(() => {
    const link = document.createElement("link");
    link.href = "https://assets.calendly.com/assets/external/widget.css";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.type = "text/javascript";
    script.async = true;
    script.onload = () => {
      (window as unknown as { Calendly?: { initBadgeWidget: (opts: Record<string, unknown>) => void } }).Calendly?.initBadgeWidget({
        url: "https://calendly.com/collin-parr46/30min?hide_gdpr_banner=1&background_color=08080f&text_color=e2e2f0&primary_color=6600ff",
        text: "Schedule Consult",
        color: "#08080f",
        textColor: "#e2e2f0",
        branding: true,
      });
    };
    document.body.appendChild(script);

    return () => {
      if (document.head.contains(link)) document.head.removeChild(link);
      if (document.body.contains(script)) document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-[#08080F] text-[#E2E2F0]">
      <StarField />
      <RocketBackground />
      <div className="relative z-10">
        {/* Navbar */}
        <header className="fixed left-0 right-0 top-0 z-50 border-b border-[#1E1E2E] bg-[#08080F]/80 backdrop-blur-md">
          <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
            <a
              href="#"
              className="font-display text-2xl font-semibold tracking-tight text-white"
            >
              LaunchPoint
            </a>
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
            <a
              href="#book"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("book")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="btn-cta-glow rounded border border-[#1E1E2E] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:border-[#6600FF]/50 hover:bg-[#6600FF]/10"
            >
              Schedule a Consult
            </a>
          </nav>
        </header>

        {/* Location banner — dismissible */}
        {!bannerDismissed && (
          <div
            className="fixed left-0 right-0 top-20 z-40 border-b border-[#1E1E2E] bg-[#111118] py-2"
            role="banner"
          >
            <div className="relative mx-auto flex max-w-7xl items-center justify-center gap-2 px-6 lg:px-8">
              <Globe className="h-3.5 w-3.5 shrink-0 text-[#8888AA]" strokeWidth={1.5} fill="none" />
              <p className="text-center text-sm text-[#8888AA]">
                Tulsa-based. Built for small businesses everywhere.
              </p>
              <button
                type="button"
                onClick={() => setBannerDismissed(true)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-[#8888AA] hover:text-[#E2E2F0]"
                aria-label="Dismiss banner"
              >
                <span className="text-lg leading-none">×</span>
              </button>
            </div>
          </div>
        )}

        {/* Hero — grid: left copy, right browser mockup */}
        <section className={`relative flex min-h-screen flex-col items-center justify-center px-6 pb-24 lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center lg:px-8 ${!bannerDismissed ? "pt-32 lg:pt-28" : "pt-24 lg:pt-20"}`}>
          {/* Subtle animated gradient background */}
          <div
            className="pointer-events-none absolute inset-0 overflow-hidden"
            aria-hidden
          >
            <div className="absolute -left-1/2 top-1/2 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-gradient-to-r from-white/[0.03] to-transparent blur-3xl" />
            <div className="absolute -right-1/2 top-1/3 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-gradient-to-l from-white/[0.02] to-transparent blur-3xl" />
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          </div>

          <div className="relative mx-auto max-w-xl text-center lg:max-w-none lg:text-left">
            <SectionLabel>WEB DESIGN & DEVELOPMENT</SectionLabel>
            <h1 className="font-display text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Built to Launch.
              <br />
              Built to Last.
            </h1>
            <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-[#E2E2F0] sm:text-xl lg:mx-0">
              Custom websites for small businesses that need to look legit, launch fast, and actually convert.
            </p>
            <a
              href="#book"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("book")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="btn-cta-glow mt-10 inline-block rounded bg-[#6600FF] px-8 py-4 text-sm font-semibold text-white shadow-[0_0_25px_rgba(102,0,255,0.2)] transition-shadow hover:shadow-[0_0_25px_rgba(102,0,255,0.4)]"
            >
              Schedule a Consult
            </a>
            <p className="mt-6 text-sm text-[#8888AA]">
              Tulsa&apos;s go-to web studio for small businesses. Most clients launch in under 3 weeks.
            </p>
          </div>

          {/* Project showcase card — floating, right side on desktop */}
          <div className="relative mt-16 w-full max-w-lg lg:mt-0 lg:max-w-none">
            <div
              className="animate-float rounded-2xl border border-[#1E1E2E] bg-[#111118] p-8 shadow-[0_0_60px_rgba(102,0,255,0.12)]"
              style={{
                boxShadow: "0 0 60px rgba(102, 0, 255, 0.12)",
              }}
            >
              <span
                className="inline-block rounded-full border border-[#6600FF] px-3 py-1 text-[0.7rem] font-medium uppercase tracking-[0.12em] text-[#6600FF]"
                style={{ background: "rgba(102,0,255,0.15)" }}
              >
                LIVE PROJECT
              </span>
              <h3 className="mt-3 text-xl font-bold text-[#E2E2F0]">Cuts by Cate</h3>
              <p className="mt-1 text-sm text-[#8888AA]">
                Portfolio &amp; booking site — Tulsa, OK
              </p>
              {iframeBlocked ? (
                <div
                  className="my-4 flex w-full flex-col items-center justify-center gap-3 rounded-lg border border-[#1E1E2E] bg-[#1a1a2e]"
                  style={{ height: 380 }}
                >
                  <p className="text-[0.85rem] tracking-[0.1em] text-[#8888AA]">
                    CUTSBYCATE.COM
                  </p>
                  <a
                    href="https://www.cutsbycate.com"
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-lg bg-[#6600FF] px-5 py-2.5 text-[0.9rem] text-white no-underline"
                  >
                    View Live Site →
                  </a>
                </div>
              ) : (
                <div
                  className="my-4 overflow-hidden rounded-lg border border-[#1E1E2E]"
                  style={{
                    position: "relative",
                    width: "100%",
                    height: 380,
                    borderRadius: 8,
                  }}
                >
                  <iframe
                    src="https://www.cutsbycate.com"
                    title="Cuts by Cate"
                    style={{
                      width: "200%",
                      height: "200%",
                      transform: "scale(0.5)",
                      transformOrigin: "top left",
                      border: "none",
                      pointerEvents: "auto",
                    }}
                    loading="lazy"
                    onError={() => setIframeBlocked(true)}
                  />
                </div>
              )}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span
                    className="live-dot inline-block rounded-full bg-[#22C55E]"
                    style={{ width: 6, height: 6 }}
                    aria-hidden
                  />
                  <span className="text-sm text-[#8888AA]">Live and active</span>
                </div>
                <a
                  href="https://www.cutsbycate.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-md bg-[#6600FF] px-3.5 py-1.5 text-[0.8rem] font-medium text-white hover:brightness-110"
                  style={{ padding: "6px 14px" }}
                >
                  View Site →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section
          id="services"
          className="border-t border-[#1E1E2E] py-28 px-6 lg:px-8"
        >
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-2xl text-center">
              <SectionLabel>WHAT WE DO</SectionLabel>
              <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
                Services That Scale With You
              </h2>
            </div>
            <div className="mt-20 grid gap-12 md:grid-cols-3">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <div
                    key={service.title}
                    className="group rounded-2xl border border-[#1E1E2E] bg-[#111118] p-8 transition-colors hover:border-[#1E1E2E]"
                  >
                    <div className="mb-6 inline-flex rounded-xl border border-[#1E1E2E] bg-[#111118] p-4">
                      <Icon
                        className="h-7 w-7 text-[#6600FF]"
                        strokeWidth={1.5}
                      />
                    </div>
                    <h3 className="font-display text-xl font-semibold text-white">
                      {service.title}
                    </h3>
                    <p className="mt-4 leading-relaxed text-[#E2E2F0]">
                      {service.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section
          id="process"
          className="border-t border-[#1E1E2E] py-28 px-6 lg:px-8"
        >
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-2xl text-center">
              <SectionLabel>THE PROCESS</SectionLabel>
              <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
                From Idea to Launch in Weeks, Not Months
              </h2>
            </div>
            <div className="mt-20 grid gap-12 md:grid-cols-3">
              <div className="relative rounded-2xl border border-[#1E1E2E] bg-[#111118] p-8 text-center">
                <span className="font-display text-6xl font-bold text-white/20 sm:text-7xl">
                  1
                </span>
                <h3 className="mt-4 font-display text-xl font-semibold text-white">
                  Free Consult
                </h3>
                <p className="mt-4 leading-relaxed text-[#E2E2F0]">
                  We learn your business, goals, and vision in a 30-minute call.
                </p>
              </div>
              <div className="relative rounded-2xl border border-[#1E1E2E] bg-[#111118] p-8 text-center">
                <span className="font-display text-6xl font-bold text-white/20 sm:text-7xl">
                  2
                </span>
                <h3 className="mt-4 font-display text-xl font-semibold text-white">
                  Design & Build
                </h3>
                <p className="mt-4 leading-relaxed text-[#E2E2F0]">
                  We get to work. You get updates throughout, not just at the end.
                </p>
              </div>
              <div className="relative rounded-2xl border border-[#1E1E2E] bg-[#111118] p-8 text-center">
                <span className="font-display text-6xl font-bold text-white/20 sm:text-7xl">
                  3
                </span>
                <h3 className="mt-4 font-display text-xl font-semibold text-white">
                  Launch & Support
                </h3>
                <p className="mt-4 leading-relaxed text-[#E2E2F0]">
                  Your site goes live and we stick around to make sure it performs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* About */}
        <section
          id="about"
          className="border-t border-[#1E1E2E] py-28 px-6 lg:px-8"
        >
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-2xl text-center">
              <SectionLabel>WHO WE ARE</SectionLabel>
              <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
                You&apos;re Not Hiring an Agency. You&apos;re Hiring a Builder.
              </h2>
            </div>
            <div className="mt-20 grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-start">
              <div>
                <p className="leading-relaxed text-[#E2E2F0]">
                  LaunchPoint is a Tulsa-based web design studio run by Collin Parr — a developer who works directly with every client from first call to final launch. No account managers, no outsourcing, no handoffs. Just clean, intentional work built around what your business actually needs.
                </p>
                <p className="mt-6 leading-relaxed text-[#E2E2F0]">
                  We specialize in small businesses that are serious about their online presence but don&apos;t want to pay agency prices or wait six months to go live.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <span className="flex items-center gap-2 rounded-full border border-[#1E1E2E] bg-[#111118] px-4 py-2 text-sm text-[#8888AA]">
                    <MapPin className="h-3.5 w-3.5 shrink-0 text-[#8888AA]" strokeWidth={1.5} fill="none" />
                    Tulsa, OK — Serving clients nationwide
                  </span>
                  <span className="flex items-center gap-2 rounded-full border border-[#1E1E2E] bg-[#111118] px-4 py-2 text-sm text-[#8888AA]">
                    <Zap className="h-3.5 w-3.5 shrink-0 text-[#6600FF]" strokeWidth={1.5} fill="none" />
                    Average launch time: 2–3 weeks
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-xl border border-[#1E1E2E] bg-[#111118] p-6">
                  <p className="text-2xl font-bold text-[#6600FF]">3 weeks</p>
                  <p className="mt-1 text-sm text-[#8888AA]">Average time to launch</p>
                </div>
                <div className="rounded-xl border border-[#1E1E2E] bg-[#111118] p-6">
                  <p className="text-2xl font-bold text-[#6600FF]">100%</p>
                  <p className="mt-1 text-sm text-[#8888AA]">Clients who launch on time</p>
                </div>
                <div className="rounded-xl border border-[#1E1E2E] bg-[#111118] p-6">
                  <p className="text-2xl font-bold text-[#6600FF]">1:1</p>
                  <p className="mt-1 text-sm text-[#8888AA]">Direct access to your developer</p>
                </div>
                <div className="rounded-xl border border-[#1E1E2E] bg-[#111118] p-6">
                  <p className="text-2xl font-bold text-[#6600FF]">$0</p>
                  <p className="mt-1 text-sm text-[#8888AA]">Cost to get a project quote</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section
          id="pricing"
          className="border-t border-[#1E1E2E] py-28 px-6 lg:px-8"
        >
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-2xl text-center">
              <SectionLabel>PRICING</SectionLabel>
              <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
                Simple, Transparent Pricing.
              </h2>
              <p className="mt-6 text-lg text-[#8888AA]">
                No retainers. No surprises. Just honest rates for quality work.
              </p>
            </div>
            <div className="mt-20 grid gap-8 md:grid-cols-3">
              {/* Starter */}
              <div className="flex flex-col rounded-2xl border border-[#1E1E2E] bg-[#111118] p-8 transition-[border-color] duration-200 hover:border-[#6600FF]">
                <h3 className="font-display text-xl font-semibold text-white">Starter</h3>
                <p className="mt-2 text-3xl font-bold text-white">$750</p>
                <p className="mt-4 text-sm leading-relaxed text-[#8888AA]">
                  For freelancers and solo operators who need a clean online presence fast.
                </p>
                <ul className="mt-6 flex-1 space-y-3 text-sm text-[#E2E2F0]">
                  <li>Up to 4 pages</li>
                  <li>Mobile responsive</li>
                  <li>Contact form</li>
                  <li>1 revision round</li>
                  <li>Delivered in 1–2 weeks</li>
                </ul>
                <a
                  href="#book"
                  className="btn-cta-glow mt-8 block w-full rounded bg-[#6600FF] py-3 text-center text-sm font-semibold text-white"
                >
                  Get Started
                </a>
              </div>
              {/* Business — highlighted */}
              <div className="relative flex flex-col rounded-2xl border border-[#6600FF] bg-[#111118] p-8 shadow-[0_0_30px_rgba(102,0,255,0.08)] transition-[border-color] duration-200 hover:border-[#6600FF]">
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded bg-[#111118] px-3 py-0.5 text-xs font-medium text-[#6600FF]">
                  MOST POPULAR
                </span>
                <h3 className="font-display text-xl font-semibold text-white">Business</h3>
                <p className="mt-2 text-3xl font-bold text-white">$1,500</p>
                <p className="mt-4 text-sm leading-relaxed text-[#8888AA]">
                  For growing businesses that need a site built to convert, not just exist.
                </p>
                <ul className="mt-6 flex-1 space-y-3 text-sm text-[#E2E2F0]">
                  <li>Up to 8 pages</li>
                  <li>Custom design</li>
                  <li>Booking or lead capture integration</li>
                  <li>SEO foundations</li>
                  <li>2 revision rounds</li>
                  <li>Delivered in 2–3 weeks</li>
                </ul>
                <a
                  href="#book"
                  className="btn-cta-glow mt-8 block w-full rounded bg-[#6600FF] py-3 text-center text-sm font-semibold text-white"
                >
                  Get Started
                </a>
              </div>
              {/* Custom */}
              <div className="flex flex-col rounded-2xl border border-[#1E1E2E] bg-[#111118] p-8 transition-[border-color] duration-200 hover:border-[#6600FF]">
                <h3 className="font-display text-xl font-semibold text-white">Custom</h3>
                <p className="mt-2 text-3xl font-bold text-white">Starting at $3,000</p>
                <p className="mt-4 text-sm leading-relaxed text-[#8888AA]">
                  eCommerce stores, client portals, and web apps built to your exact specs.
                </p>
                <ul className="mt-6 flex-1 space-y-3 text-sm text-[#E2E2F0]">
                  <li>Fully custom scope</li>
                  <li>eCommerce or app functionality</li>
                  <li>Ongoing support available</li>
                  <li>Timeline scoped per project</li>
                </ul>
                <a
                  href="#book"
                  className="btn-cta-glow mt-8 block w-full rounded border border-[#6600FF] py-3 text-center text-sm font-semibold text-[#6600FF] transition-colors hover:bg-[#6600FF]/10"
                >
                  Let&apos;s Talk
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Work / Portfolio */}
        <section
          id="portfolio"
          className="border-t border-[#1E1E2E] py-28 px-6 lg:px-8"
        >
          <div className="mx-auto max-w-5xl">
            <div className="mx-auto max-w-2xl text-center">
              <SectionLabel>FEATURED WORK</SectionLabel>
              <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
                Built for Real Businesses.
              </h2>
            </div>
            <div
              className="mt-20 rounded-2xl border border-[#1E1E2E] bg-[#111118] p-8 md:p-10 shadow-[0_0_30px_rgba(102,0,255,0.08)] md:grid md:grid-cols-2 md:gap-12"
            >
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-[#6600FF]">
                  LIVE PROJECT
                </p>
                <h3 className="mt-2 font-display text-3xl font-bold text-white md:text-4xl">
                  Cuts by Cate
                </h3>
                <p className="mt-6 leading-relaxed text-[#E2E2F0]">
                  Custom portfolio and booking site for Catelin Parr, a Tulsa-based hairstylist. Designed to convert visitors into booked appointments and give her brand the online presence it deserved.
                </p>
                <a
                  href="https://www.cutsbycate.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-cta-glow mt-8 inline-block rounded bg-[#6600FF] px-6 py-3 text-sm font-semibold text-white"
                >
                  View Live Site →
                </a>
              </div>
              <div className="mt-10 md:mt-0">
                <div className="border-l-2 border-[#6600FF] pl-6">
                  <div className="mb-4 flex gap-0.5 text-[#F4C842]">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <span key={i} className="text-lg">★</span>
                    ))}
                  </div>
                  <blockquote className="italic leading-relaxed text-[#E2E2F0]">
                    &ldquo;I needed something that actually looked like me and got people booking. LaunchPoint turned it around faster than I expected and built something I&apos;m genuinely proud to share.&rdquo;
                  </blockquote>
                  <p className="mt-5 text-sm text-[#8888AA]">
                    Catelin Parr — Hairstylist, Tulsa OK
                  </p>
                </div>
              </div>
            </div>
            <p className="mt-10 text-center text-sm italic text-[#8888AA]">
              More projects coming soon — currently accepting new clients.
            </p>
          </div>
        </section>

        {/* Booking — CTA only; Calendly floats as badge via useEffect */}
        <section
          id="book"
          className="relative border-t border-[#1E1E2E] py-28 px-6 lg:px-8"
        >
          <div className="relative z-[1] mx-auto max-w-3xl text-center">
            <SectionLabel>BOOK A CALL</SectionLabel>
            <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
              Most Clients Go From Idea to Live Site in Under 3 Weeks.
            </h2>
            <p className="mx-auto mt-6 text-lg leading-relaxed text-[#8888AA]">
              It starts with a free 30-minute call. No pitch, no pressure — just a clear plan for what your business needs online.
            </p>
            <p className="mt-4 flex items-center justify-center gap-2 text-sm text-[#6600FF]">
              <Zap className="h-3.5 w-3.5 shrink-0 text-[#6600FF]" strokeWidth={1.5} fill="none" />
              Currently accepting new clients for {currentMonth} — limited spots available.
            </p>
            <p className="mt-8 text-sm text-[#8888AA]">
              Free consultation · No contracts · Tulsa-based
            </p>
            <a
              href="https://calendly.com/collin-parr46/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-block rounded-lg bg-[#6600FF] px-10 py-4 text-[1.1rem] font-semibold text-white transition-[box-shadow] duration-200 hover:shadow-[0_0_25px_rgba(102,0,255,0.5)]"
            >
              Book Your Free Call →
            </a>
            <p className="mt-4 text-sm text-[#8888AA]">
              Opens in Calendly — free, no commitment.
            </p>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-[#1E1E2E] py-12 px-6 lg:px-8">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 sm:flex-row">
            <span className="font-display text-lg font-medium text-[#E2E2F0]">
              LaunchPoint
            </span>
            <div className="flex flex-wrap justify-center gap-8 text-sm text-[#8888AA]">
              <a href="#services" className="hover:text-[#E2E2F0]">
                Services
              </a>
              <a href="#process" className="hover:text-[#E2E2F0]">
                Process
              </a>
              <a href="#portfolio" className="hover:text-[#E2E2F0]">
                Portfolio
              </a>
              <a href="#pricing" className="hover:text-[#E2E2F0]">
                Pricing
              </a>
              <a href="#about" className="hover:text-[#E2E2F0]">
                About
              </a>
              <a href="#book" className="hover:text-[#E2E2F0]">
                Book
              </a>
            </div>
          </div>
          <p className="mx-auto mt-6 max-w-7xl text-center text-sm text-[#8888AA]">
            Built with purpose in Tulsa, Oklahoma.
          </p>
          <p className="mx-auto mt-4 max-w-7xl text-center text-xs text-[#8888AA]">
            © 2026 LaunchPoint, LLC. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  );
}
