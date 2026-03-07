"use client";

import { useEffect } from "react";

type CalendlyWindow = {
  Calendly?: {
    initBadgeWidget: (opts: Record<string, unknown>) => void;
  };
};

export function CalendlyBadge() {
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
      (window as unknown as CalendlyWindow).Calendly?.initBadgeWidget({
        url: "https://calendly.com/collin-parr46/30min?hide_gdpr_banner=1&background_color=0c0820&text_color=e2e2f0&primary_color=7c5cfc",
        text: "Schedule Consult",
        color: "#0c0820",
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

  return null;
}
