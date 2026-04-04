export function ProjectShowcase() {
  return (
    <div className="relative mt-16 w-full max-w-lg lg:mt-0 lg:max-w-none">
      <div
        className="animate-float rounded-2xl border border-[#1E1E2E] bg-[#111118] p-8"
        style={{ boxShadow: "0 0 60px rgba(124, 92, 252, 0.12)" }}
      >
        <span
          className="inline-block rounded-full border border-[#7C5CFC] px-3 py-1 text-[0.7rem] font-medium uppercase tracking-[0.12em] text-[#7C5CFC]"
          style={{ background: "rgba(124,92,252,0.15)" }}
        >
          LIVE PROJECT
        </span>
        <h3 className="mt-3 text-xl font-bold text-[#E2E2F0]">Cuts by Cate</h3>
        <p className="mt-1 text-sm text-[#8888AA]">
          Portfolio &amp; booking site, Tulsa, OK
        </p>

        {/* Browser chrome + iframe preview */}
        <div
          className="my-4 overflow-hidden"
          style={{
            background: "#0D0D1A",
            border: "1px solid #1E1E2E",
            borderRadius: 12,
            width: "100%",
            height: 380,
          }}
        >
          {/* Browser chrome bar */}
          <div
            style={{
              background: "#1A1A2E",
              padding: "10px 16px",
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            <div style={{ display: "flex", gap: 4 }}>
              <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#FF5F57", display: "inline-block" }} />
              <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#FFBD2E", display: "inline-block" }} />
              <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#28C840", display: "inline-block" }} />
            </div>
            <div
              style={{
                flex: 1,
                background: "#111118",
                borderRadius: 20,
                padding: "4px 16px",
                color: "#8888AA",
                fontSize: "0.75rem",
                textAlign: "center",
              }}
            >
              cutsbycate.com
            </div>
            <span
              style={{
                background: "#7C5CFC",
                borderRadius: 20,
                padding: "2px 8px",
                color: "#fff",
                fontSize: "0.65rem",
                fontWeight: 600,
                letterSpacing: "0.05em",
                whiteSpace: "nowrap",
              }}
            >
              LIVE
            </span>
          </div>

          {/* Scaled iframe */}
          <div
            style={{
              position: "relative",
              width: "100%",
              height: "calc(100% - 41px)",
              overflow: "hidden",
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
            />
          </div>
        </div>

        {/* Bottom row */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span
              className="live-dot inline-block rounded-full bg-[#22C55E]"
              style={{ width: 6, height: 6 }}
              aria-hidden="true"
            />
            <span className="text-sm text-[#8888AA]">Live and active</span>
          </div>
          <a
            href="https://www.cutsbycate.com"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md bg-[#7C5CFC] text-[0.8rem] font-medium text-white hover:brightness-110"
            style={{ padding: "6px 14px" }}
          >
            View Site →
          </a>
        </div>
      </div>
    </div>
  );
}
