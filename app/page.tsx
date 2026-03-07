import { ShoppingBag, Palette, Code2, MapPin, Zap } from "lucide-react";
import { RocketBackground } from "@/components/rocket-background";
import { StarField } from "@/components/star-field";
import { LocationBanner } from "@/components/location-banner";
import { ProjectShowcase } from "@/components/project-showcase";
import { CalendlyBadge } from "@/components/calendly-badge";

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
  const currentMonth = new Date().toLocaleString("default", { month: "long" });

  return (
    <div className="relative min-h-screen bg-[#08080F] text-[#E2E2F0]">
      <StarField />
      <RocketBackground />
      <CalendlyBadge />
      <div className="relative z-10">

        {/* Navbar */}
        <header className="fixed left-0 right-0 top-0 z-50 border-b border-[#1E1E2E] bg-[#08080F]/80 backdrop-blur-md">
          <nav
            aria-label="Main navigation"
            className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8"
          >
            <a
              href="#"
              className="font-display text-2xl font-semibold tracking-tight text-white"
              aria-label="LaunchPoint — home"
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
              className="btn-cta-glow rounded border border-[#1E1E2E] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:border-[#6600FF]/50 hover:bg-[#6600FF]/10"
            >
              Schedule a Consult
            </a>
          </nav>
        </header>

        {/* Location announcement banner */}
        <LocationBanner />

        {/* Hero */}
        <section
          aria-label="Hero"
          className="relative flex min-h-screen flex-col items-center justify-center px-6 pb-24 pt-36 lg:grid lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8 lg:pt-32"
        >
          <div
            className="pointer-events-none absolute inset-0 overflow-hidden"
            aria-hidden="true"
          >
            <div className="absolute -left-1/2 top-1/2 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-gradient-to-r from-white/[0.03] to-transparent blur-3xl" />
            <div className="absolute -right-1/2 top-1/3 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-gradient-to-l from-white/[0.02] to-transparent blur-3xl" />
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          </div>

          <div className="relative mx-auto max-w-xl text-center lg:max-w-none lg:text-left">
            <SectionLabel>WEB DESIGN &amp; DEVELOPMENT</SectionLabel>
            <h1 className="font-display text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Built to Launch.
              <br />
              Built to Last.
            </h1>
            <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-[#E2E2F0] sm:text-xl lg:mx-0">
              Custom websites for small businesses that need to look legit,
              launch fast, and actually convert.
            </p>
            <a
              href="#book"
              className="btn-cta-glow mt-10 inline-block rounded bg-[#6600FF] px-8 py-4 text-sm font-semibold text-white shadow-[0_0_25px_rgba(102,0,255,0.2)] transition-shadow hover:shadow-[0_0_25px_rgba(102,0,255,0.4)]"
            >
              Schedule a Consult
            </a>
            <p className="mt-6 text-sm text-[#8888AA]">
              Tulsa&apos;s go-to web studio for small businesses. Most clients
              launch in under 3 weeks.
            </p>
          </div>

          <ProjectShowcase />
        </section>

        {/* Services */}
        <section
          id="services"
          aria-labelledby="services-heading"
          className="border-t border-[#1E1E2E] px-6 py-28 lg:px-8"
        >
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-2xl text-center">
              <SectionLabel>WHAT WE DO</SectionLabel>
              <h2
                id="services-heading"
                className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl"
              >
                Services That Scale With You
              </h2>
            </div>
            <div className="mt-20 grid gap-12 md:grid-cols-3">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <div
                    key={service.title}
                    className="group rounded-2xl border border-[#1E1E2E] bg-[#111118] p-8 transition-colors hover:border-[#6600FF]/40"
                  >
                    <div className="mb-6 inline-flex rounded-xl border border-[#1E1E2E] bg-[#111118] p-4">
                      <Icon
                        className="h-7 w-7 text-[#6600FF]"
                        strokeWidth={1.5}
                        aria-hidden="true"
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
          aria-labelledby="process-heading"
          className="border-t border-[#1E1E2E] px-6 py-28 lg:px-8"
        >
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-2xl text-center">
              <SectionLabel>THE PROCESS</SectionLabel>
              <h2
                id="process-heading"
                className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl"
              >
                From Idea to Launch in Weeks, Not Months
              </h2>
            </div>
            <ol className="mt-20 grid gap-12 md:grid-cols-3">
              {[
                {
                  step: "1",
                  title: "Free Consult",
                  body: "We learn your business, goals, and vision in a 30-minute call.",
                },
                {
                  step: "2",
                  title: "Design & Build",
                  body: "We get to work. You get updates throughout, not just at the end.",
                },
                {
                  step: "3",
                  title: "Launch & Support",
                  body: "Your site goes live and we stick around to make sure it performs.",
                },
              ].map(({ step, title, body }) => (
                <li
                  key={step}
                  className="relative rounded-2xl border border-[#1E1E2E] bg-[#111118] p-8 text-center"
                >
                  <span
                    className="font-display text-6xl font-bold text-white/20 sm:text-7xl"
                    aria-hidden="true"
                  >
                    {step}
                  </span>
                  <h3 className="mt-4 font-display text-xl font-semibold text-white">
                    {title}
                  </h3>
                  <p className="mt-4 leading-relaxed text-[#E2E2F0]">{body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* About */}
        <section
          id="about"
          aria-labelledby="about-heading"
          className="border-t border-[#1E1E2E] px-6 py-28 lg:px-8"
        >
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-2xl text-center">
              <SectionLabel>WHO WE ARE</SectionLabel>
              <h2
                id="about-heading"
                className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl"
              >
                You&apos;re Not Hiring an Agency. You&apos;re Hiring a Builder.
              </h2>
            </div>
            <div className="mt-20 grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-16">
              <div>
                <p className="leading-relaxed text-[#E2E2F0]">
                  LaunchPoint is a Tulsa-based web design studio run by Collin
                  Parr — a developer who works directly with every client from
                  first call to final launch. No account managers, no
                  outsourcing, no handoffs. Just clean, intentional work built
                  around what your business actually needs.
                </p>
                <p className="mt-6 leading-relaxed text-[#E2E2F0]">
                  We specialize in small businesses that are serious about their
                  online presence but don&apos;t want to pay agency prices or
                  wait six months to go live.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <span className="flex items-center gap-2 rounded-full border border-[#1E1E2E] bg-[#111118] px-4 py-2 text-sm text-[#8888AA]">
                    <MapPin
                      className="h-3.5 w-3.5 shrink-0 text-[#8888AA]"
                      strokeWidth={1.5}
                      fill="none"
                      aria-hidden="true"
                    />
                    Tulsa, OK — Serving clients nationwide
                  </span>
                  <span className="flex items-center gap-2 rounded-full border border-[#1E1E2E] bg-[#111118] px-4 py-2 text-sm text-[#8888AA]">
                    <Zap
                      className="h-3.5 w-3.5 shrink-0 text-[#6600FF]"
                      strokeWidth={1.5}
                      fill="none"
                      aria-hidden="true"
                    />
                    Average launch time: 2–3 weeks
                  </span>
                </div>
              </div>
              <dl className="grid grid-cols-2 gap-4">
                {[
                  { value: "3 weeks", label: "Average time to launch" },
                  { value: "100%",    label: "Clients who launch on time" },
                  { value: "1:1",     label: "Direct access to your developer" },
                  { value: "$0",      label: "Cost to get a project quote" },
                ].map(({ value, label }) => (
                  <div
                    key={label}
                    className="rounded-xl border border-[#1E1E2E] bg-[#111118] p-6"
                  >
                    <dt className="text-2xl font-bold text-[#6600FF]">{value}</dt>
                    <dd className="mt-1 text-sm text-[#8888AA]">{label}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section
          id="pricing"
          aria-labelledby="pricing-heading"
          className="border-t border-[#1E1E2E] px-6 py-28 lg:px-8"
        >
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-2xl text-center">
              <SectionLabel>PRICING</SectionLabel>
              <h2
                id="pricing-heading"
                className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl"
              >
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
                  For freelancers and solo operators who need a clean online
                  presence fast.
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
              <div className="relative flex flex-col rounded-2xl border border-[#6600FF] bg-[#111118] p-8 shadow-[0_0_30px_rgba(102,0,255,0.08)]">
                <span
                  className="absolute -top-3 left-1/2 -translate-x-1/2 rounded bg-[#111118] px-3 py-0.5 text-xs font-medium text-[#6600FF]"
                  aria-label="Most popular plan"
                >
                  MOST POPULAR
                </span>
                <h3 className="font-display text-xl font-semibold text-white">Business</h3>
                <p className="mt-2 text-3xl font-bold text-white">$1,500</p>
                <p className="mt-4 text-sm leading-relaxed text-[#8888AA]">
                  For growing businesses that need a site built to convert, not
                  just exist.
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
                  eCommerce stores, client portals, and web apps built to your
                  exact specs.
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

        {/* Portfolio */}
        <section
          id="portfolio"
          aria-labelledby="portfolio-heading"
          className="border-t border-[#1E1E2E] px-6 py-28 lg:px-8"
        >
          <div className="mx-auto max-w-5xl">
            <div className="mx-auto max-w-2xl text-center">
              <SectionLabel>FEATURED WORK</SectionLabel>
              <h2
                id="portfolio-heading"
                className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl"
              >
                Built for Real Businesses.
              </h2>
            </div>
            <div className="mt-20 rounded-2xl border border-[#1E1E2E] bg-[#111118] p-8 shadow-[0_0_30px_rgba(102,0,255,0.08)] md:grid md:grid-cols-2 md:gap-12 md:p-10">
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-[#6600FF]">
                  LIVE PROJECT
                </p>
                <h3 className="mt-2 font-display text-3xl font-bold text-white md:text-4xl">
                  Cuts by Cate
                </h3>
                <p className="mt-6 leading-relaxed text-[#E2E2F0]">
                  Custom portfolio and booking site for Catelin Parr, a
                  Tulsa-based hairstylist. Designed to convert visitors into
                  booked appointments and give her brand the online presence it
                  deserved.
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
                  <div
                    className="mb-4 flex gap-0.5 text-[#F4C842]"
                    aria-label="5 out of 5 stars"
                    role="img"
                  >
                    {[1, 2, 3, 4, 5].map((i) => (
                      <span key={i} aria-hidden="true" className="text-lg">★</span>
                    ))}
                  </div>
                  <blockquote className="italic leading-relaxed text-[#E2E2F0]">
                    <p>
                      &ldquo;I needed something that actually looked like me and
                      got people booking. LaunchPoint turned it around faster
                      than I expected and built something I&apos;m genuinely
                      proud to share.&rdquo;
                    </p>
                    <footer className="mt-5 text-sm not-italic text-[#8888AA]">
                      Catelin Parr — Hairstylist, Tulsa OK
                    </footer>
                  </blockquote>
                </div>
              </div>
            </div>
            <p className="mt-10 text-center text-sm italic text-[#8888AA]">
              More projects coming soon — currently accepting new clients.
            </p>
          </div>
        </section>

        {/* Booking */}
        <section
          id="book"
          aria-labelledby="book-heading"
          className="relative border-t border-[#1E1E2E] px-6 py-28 lg:px-8"
        >
          <div className="relative z-[1] mx-auto max-w-3xl text-center">
            <SectionLabel>BOOK A CALL</SectionLabel>
            <h2
              id="book-heading"
              className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl"
            >
              Most Clients Go From Idea to Live Site in Under 3 Weeks.
            </h2>
            <p className="mx-auto mt-6 text-lg leading-relaxed text-[#8888AA]">
              It starts with a free 30-minute call. No pitch, no pressure — just
              a clear plan for what your business needs online.
            </p>
            <p className="mt-4 flex items-center justify-center gap-2 text-sm text-[#6600FF]">
              <Zap
                className="h-3.5 w-3.5 shrink-0"
                strokeWidth={1.5}
                fill="none"
                aria-hidden="true"
              />
              Currently accepting new clients for {currentMonth} — limited spots
              available.
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
        <footer className="border-t border-[#1E1E2E] px-6 py-12 lg:px-8">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 sm:flex-row">
            <span className="font-display text-lg font-medium text-[#E2E2F0]">
              LaunchPoint
            </span>
            <nav aria-label="Footer navigation" className="flex flex-wrap justify-center gap-8 text-sm text-[#8888AA]">
              <a href="#services"  className="hover:text-[#E2E2F0]">Services</a>
              <a href="#process"   className="hover:text-[#E2E2F0]">Process</a>
              <a href="#about"     className="hover:text-[#E2E2F0]">About</a>
              <a href="#portfolio" className="hover:text-[#E2E2F0]">Portfolio</a>
              <a href="#pricing"   className="hover:text-[#E2E2F0]">Pricing</a>
              <a href="#book"      className="hover:text-[#E2E2F0]">Book</a>
            </nav>
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
