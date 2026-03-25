import Image from "next/image";

const footerLinks = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
  { label: "Pricing", href: "#pricing" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Book", href: "#book" },
];

export function Footer() {
  return (
    <footer
      className="px-6 py-12 lg:px-8"
      style={{
        background: "#0B1528",
        borderTop: "1px solid rgba(51,161,222,0.1)",
      }}
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-between gap-8 sm:flex-row">
          {/* Logo */}
          <a href="#" aria-label="LaunchPoint Studio — home">
            <Image
              src="/LP Reversed Logo.png"
              alt="LaunchPoint Studio"
              width={140}
              height={32}
              className="h-8 w-auto"
            />
          </a>

          {/* Nav */}
          <nav aria-label="Footer navigation" className="flex flex-wrap justify-center gap-6">
            {footerLinks.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="text-sm text-silver-gray transition-colors hover:text-photon-blue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-photon-blue rounded"
                style={{ fontFamily: "var(--font-outfit)" }}
              >
                {label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-10 border-t pt-8" style={{ borderColor: "rgba(51,161,222,0.08)" }}>
          <p
            className="text-center text-sm text-silver-gray"
            style={{ fontFamily: "var(--font-outfit)", fontWeight: 300 }}
          >
            Built with purpose in Tulsa, Oklahoma.
          </p>
          <p
            className="mt-2 text-center text-xs text-silver-gray"
            style={{ fontFamily: "var(--font-outfit)", opacity: 0.6 }}
          >
            © 2026 LaunchPoint Studio, LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
