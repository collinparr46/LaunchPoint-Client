import type { Metadata } from "next";
import { GeometricBackground } from "@/components/GeometricBackground";

export const metadata: Metadata = {
  title: "Book a Free Consultation",
  description:
    "Schedule a free 30-minute consultation. We'll learn about your business, recommend a package, and map out your project. No pressure, no commitment.",
  alternates: {
    canonical: "https://www.launchpointportal.com/book",
  },
};

const trustPoints = [
  {
    label: "clock",
    text: "30 minutes. No fluff, just a real conversation.",
  },
  {
    label: "check",
    text: "You'll leave with a clear picture of what we'll build.",
  },
  {
    label: "shield",
    text: "No commitment required. Completely free.",
  },
];

function TrustIcon({ label }: { label: string }) {
  if (label === "clock") {
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#33A1DE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    );
  }
  if (label === "check") {
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#33A1DE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M9 11l3 3L22 4" />
        <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
      </svg>
    );
  }
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#33A1DE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}

export default function BookPage() {
  return (
    <>
      {/* Page header */}
      <section className="relative flex items-center justify-center pt-40 pb-16 overflow-hidden">
        <GeometricBackground variant="section" />
        <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
          <p
            className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-silver-gray"
            style={{ fontFamily: "var(--font-outfit)" }}
          >
            Book a Call
          </p>
          <div className="gradient-accent-line mx-auto mb-5" />
          <h1
            className="text-4xl font-bold text-white md:text-5xl"
            style={{ fontFamily: "var(--font-outfit)" }}
          >
            Ready to Launch?
          </h1>
          <p
            className="mt-5 text-lg leading-relaxed text-silver-gray"
            style={{ fontFamily: "var(--font-outfit)", fontWeight: 300 }}
          >
            Pick a time that works for you. 30 minutes, no pressure, and you&apos;ll walk away with a clear plan.
          </p>
        </div>
      </section>

      {/* Main booking content */}
      <section className="relative px-6 pb-28 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-12 lg:grid-cols-[2fr_1fr] lg:items-start">

            {/* Calendly embed */}
            <div
              className="overflow-hidden rounded-xl"
              style={{
                border: "1px solid rgba(51,161,222,0.2)",
                background: "rgba(26,45,79,0.3)",
                minHeight: "700px",
              }}
            >
              <iframe
                src="https://calendly.com/collin-parr46/30min?embed_type=Inline&hide_event_type_details=1&hide_gdpr_banner=1&background_color=13213F&text_color=ffffff&primary_color=33A1DE"
                width="100%"
                height="700"
                frameBorder="0"
                title="Schedule a free consultation with LaunchPoint Studio"
                style={{ display: "block" }}
              />
            </div>

            {/* Supporting copy */}
            <div className="flex flex-col gap-6">
              <div>
                <h2
                  className="text-xl font-semibold text-white"
                  style={{ fontFamily: "var(--font-outfit)" }}
                >
                  What to expect
                </h2>
                <div className="mt-4 flex flex-col gap-4">
                  {trustPoints.map(({ label, text }) => (
                    <div key={label} className="flex items-start gap-3">
                      <div
                        className="mt-0.5 shrink-0 rounded-lg p-1.5"
                        style={{ background: "rgba(51,161,222,0.1)", border: "1px solid rgba(51,161,222,0.2)" }}
                      >
                        <TrustIcon label={label} />
                      </div>
                      <p
                        className="text-sm leading-relaxed text-silver-gray"
                        style={{ fontFamily: "var(--font-outfit)", fontWeight: 300 }}
                      >
                        {text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div
                className="rounded-xl p-5"
                style={{ background: "rgba(26,45,79,0.6)", border: "1px solid rgba(51,161,222,0.12)" }}
              >
                <p
                  className="text-sm font-medium text-photon-blue"
                  style={{ fontFamily: "var(--font-outfit)" }}
                >
                  Currently accepting new clients
                </p>
                <p
                  className="mt-2 text-sm leading-relaxed text-silver-gray"
                  style={{ fontFamily: "var(--font-outfit)", fontWeight: 300 }}
                >
                  We take on a limited number of projects each month. If you&apos;re thinking about a new site, now&apos;s a good time to reach out.
                </p>
              </div>

              <p
                className="text-xs text-silver-gray"
                style={{ fontFamily: "var(--font-outfit)", opacity: 0.6 }}
              >
                Prefer email?{" "}
                <a
                  href="mailto:collin@launchpointportal.com"
                  className="text-photon-blue hover:underline"
                >
                  collin@launchpointportal.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
