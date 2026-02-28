import {
  ShoppingBag,
  Palette,
  Code2,
  Zap,
  Target,
  Headphones,
} from "lucide-react";
import { RocketBackground } from "@/components/rocket-background";
import { StarField } from "@/components/star-field";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Testimonials", href: "#testimonials" },
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

const valueProps = [
  {
    icon: Zap,
    title: "Fast Turnaround",
    description: "We move quickly without cutting corners. Get from concept to launch in weeks, not months.",
  },
  {
    icon: Target,
    title: "Built to Convert",
    description:
      "Every design decision is made with your bottom line in mind.",
  },
  {
    icon: Headphones,
    title: "Ongoing Support",
    description: "Launch is just the start. We offer maintenance and updates so your site stays fast and secure.",
  },
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-white/60">
      {children}
    </p>
  );
}

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#0a0a0a] text-white">
      <StarField />
      <RocketBackground />
      <div className="relative z-10">
        {/* Navbar */}
        <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/5 bg-[#0a0a0a]/80 backdrop-blur-md">
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
                  className="text-sm text-white/80 transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <a
              href="#book"
              className="rounded border border-white/20 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:border-white/40 hover:bg-white/5"
            >
              Schedule a Consult
            </a>
          </nav>
        </header>

        {/* Hero */}
        <section className="relative flex min-h-screen flex-col items-center justify-center px-6 pt-20 pb-24 text-center lg:px-8">
          {/* Subtle animated gradient background */}
          <div
            className="pointer-events-none absolute inset-0 overflow-hidden"
            aria-hidden
          >
            <div className="absolute -left-1/2 top-1/2 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-gradient-to-r from-white/[0.03] to-transparent blur-3xl" />
            <div className="absolute -right-1/2 top-1/3 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-gradient-to-l from-white/[0.02] to-transparent blur-3xl" />
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          </div>

          <div className="relative mx-auto max-w-4xl">
            <SectionLabel>WEB DESIGN & DEVELOPMENT</SectionLabel>
            <h1 className="font-display text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              We Build Websites That Work As Hard As You Do
            </h1>
            <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-white/70 sm:text-xl">
              Clean, custom websites and web apps for small businesses. Built from scratch, designed with purpose.
            </p>
            <a
              href="#book"
              className="mt-10 inline-block rounded bg-white px-8 py-4 text-sm font-semibold text-[#0a0a0a] transition-opacity hover:opacity-90"
            >
              Schedule a Consult
            </a>
          </div>
        </section>

        {/* Services */}
        <section
          id="services"
          className="border-t border-white/5 py-28 px-6 lg:px-8"
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
                    className="group rounded-2xl border border-white/5 bg-white/[0.02] p-8 transition-colors hover:border-white/10 hover:bg-white/[0.04]"
                  >
                    <div className="mb-6 inline-flex rounded-xl border border-white/10 bg-white/5 p-4">
                      <Icon
                        className="h-7 w-7 text-white/90"
                        strokeWidth={1.5}
                      />
                    </div>
                    <h3 className="font-display text-xl font-semibold text-white">
                      {service.title}
                    </h3>
                    <p className="mt-4 leading-relaxed text-white/65">
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
          className="border-t border-white/5 py-28 px-6 lg:px-8"
        >
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-2xl text-center">
              <SectionLabel>THE PROCESS</SectionLabel>
              <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
                From Idea to Launch in Weeks, Not Months
              </h2>
            </div>
            <div className="mt-20 grid gap-12 md:grid-cols-3">
              <div className="relative rounded-2xl border border-white/5 bg-white/[0.02] p-8 text-center">
                <span className="font-display text-6xl font-bold text-white/20 sm:text-7xl">
                  1
                </span>
                <h3 className="mt-4 font-display text-xl font-semibold text-white">
                  Free Consult
                </h3>
                <p className="mt-4 leading-relaxed text-white/65">
                  We learn your business, goals, and vision in a 30-minute call.
                </p>
              </div>
              <div className="relative rounded-2xl border border-white/5 bg-white/[0.02] p-8 text-center">
                <span className="font-display text-6xl font-bold text-white/20 sm:text-7xl">
                  2
                </span>
                <h3 className="mt-4 font-display text-xl font-semibold text-white">
                  Design & Build
                </h3>
                <p className="mt-4 leading-relaxed text-white/65">
                  We get to work. You get updates throughout, not just at the end.
                </p>
              </div>
              <div className="relative rounded-2xl border border-white/5 bg-white/[0.02] p-8 text-center">
                <span className="font-display text-6xl font-bold text-white/20 sm:text-7xl">
                  3
                </span>
                <h3 className="mt-4 font-display text-xl font-semibold text-white">
                  Launch & Support
                </h3>
                <p className="mt-4 leading-relaxed text-white/65">
                  Your site goes live and we stick around to make sure it performs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Work */}
        <section
          id="work"
          className="border-t border-white/5 py-28 px-6 lg:px-8"
        >
          <div className="mx-auto max-w-7xl text-center">
            <SectionLabel>SELECTED PROJECTS</SectionLabel>
            <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
              Our Work
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg text-white/70">
              Real work. Real results. Explore the projects we&apos;ve built and
              the clients who trusted us to build them.
            </p>
            <p className="mt-8 text-sm uppercase tracking-widest text-white/50">
              Coming soon
            </p>
          </div>
        </section>

        {/* Why LaunchPoint */}
        <section
          id="about"
          className="border-t border-white/5 py-28 px-6 lg:px-8"
        >
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-2xl text-center">
              <SectionLabel>WHY WORK WITH US</SectionLabel>
              <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
                Why LaunchPoint
              </h2>
            </div>
            <div className="mt-20 grid gap-16 md:grid-cols-3">
              {valueProps.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="text-center">
                    <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-white/5">
                      <Icon
                        className="h-7 w-7 text-white/90"
                        strokeWidth={1.5}
                      />
                    </div>
                    <h3 className="font-display text-xl font-semibold text-white">
                      {item.title}
                    </h3>
                    <p className="mt-4 leading-relaxed text-white/65">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section
          id="testimonials"
          className="border-t border-white/5 py-28 px-6 lg:px-8"
        >
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-2xl text-center">
              <SectionLabel>CLIENT LOVE</SectionLabel>
              <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
                What Our Clients Say
              </h2>
            </div>
            <div className="mt-20 grid gap-8 md:grid-cols-3">
              <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-8">
                <div className="mb-4 flex gap-0.5 text-amber-400">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <span key={i} className="text-lg">
                      ★
                    </span>
                  ))}
                </div>
                <p className="leading-relaxed text-white/80">
                  &ldquo;LaunchPoint built our eCommerce store in under 3 weeks. Sales started coming in on day one.&rdquo;
                </p>
                <p className="mt-5 text-sm font-medium text-white/90">
                  Marcus T.
                </p>
                <p className="text-sm text-white/50">Tulsa Outfitters</p>
              </div>
              <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-8">
                <div className="mb-4 flex gap-0.5 text-amber-400">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <span key={i} className="text-lg">
                      ★
                    </span>
                  ))}
                </div>
                <p className="leading-relaxed text-white/80">
                  &ldquo;Our portfolio site went from embarrassing to impressive overnight. Clients reach out to us now instead of the other way around.&rdquo;
                </p>
                <p className="mt-5 text-sm font-medium text-white/90">
                  Sierra M.
                </p>
                <p className="text-sm text-white/50">Freelance Photographer</p>
              </div>
              <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-8">
                <div className="mb-4 flex gap-0.5 text-amber-400">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <span key={i} className="text-lg">
                      ★
                    </span>
                  ))}
                </div>
                <p className="leading-relaxed text-white/80">
                  &ldquo;They built us a custom client portal that saved us 10 hours a week in back-and-forth emails. Worth every penny.&rdquo;
                </p>
                <p className="mt-5 text-sm font-medium text-white/90">
                  James R.
                </p>
                <p className="text-sm text-white/50">Riverside Consulting</p>
              </div>
            </div>
          </div>
        </section>

        {/* Booking — Calendly inline widget */}
        <section
          id="book"
          className="border-t border-white/5 py-28 px-6 lg:px-8"
        >
          <div className="mx-auto max-w-5xl">
            <div className="text-center">
              <SectionLabel>BOOK A CALL</SectionLabel>
              <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
                Book Your Free Consult
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/70">
                30 minutes. No pressure. Walk away with a clear plan.
              </p>
            </div>
            <div className="mt-12 w-full overflow-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm">
              <div
                className="calendly-inline-widget w-full"
                data-url="https://calendly.com/collin-parr46?hide_landing_page_details=1&hide_gdpr_banner=1&background_color=1a1a1a&text_color=ffffff&primary_color=6366f1"
                style={{ minWidth: "320px", height: "700px" }}
              />
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-white/5 py-12 px-6 lg:px-8">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 sm:flex-row">
            <span className="font-display text-lg font-medium text-white/80">
              LaunchPoint
            </span>
            <div className="flex gap-8 text-sm text-white/50">
              <a href="#services" className="hover:text-white/80">
                Services
              </a>
              <a href="#about" className="hover:text-white/80">
                About
              </a>
              <a href="#testimonials" className="hover:text-white/80">
                Testimonials
              </a>
              <a href="#book" className="hover:text-white/80">
                Book
              </a>
            </div>
          </div>
          <p className="mx-auto mt-8 max-w-7xl text-center text-xs text-white/40">
            2026 LaunchPoint, Collin Parr. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  );
}
