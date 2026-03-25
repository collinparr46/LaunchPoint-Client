# LaunchPoint Studio — Website Overhaul Prompt

## Project Context

This is a Next.js / TypeScript / Tailwind CSS site for LaunchPoint Studio, LLC — a web design & development agency based in Tulsa, OK. The site is deployed on Vercel. The current site is a single-page scrolling layout. We are converting it to a **multi-page architecture** with significant design and UX improvements.

Brand guidelines: Electric Indigo palette, Inter typeface, dark space/rocket aesthetic. The brand colors are deep navy (#0B1120 - #111827 range), Electric Indigo/cyan (#38BDF8 / #06B6D4 range), and accent pink/magenta for gradients. Typography is clean and modern.

---

## Changes Required (Execute All)

### 1. NAVBAR LOGO REPLACEMENT

**Current:** A reversed (white) version of the LaunchPoint logo is used in the top-left corner of the navbar.

**Change:** Replace it with the colored icon version — the file is `LP Icon No BG.png` (transparent PNG, colored rocket icon with geometric circular background). This file is already in the project assets. Use this as the navbar logo across ALL pages.

- Size it appropriately for a navbar (roughly 40-48px height)
- Ensure it's crisp on retina displays (use the high-res source, size down via CSS)
- Link it to the homepage (`/`)

### 2. HERO SECTION — FEATURE THE 4K LOGO

**Current:** The hero section shows the tagline "Built to Launch. Built to Last." with a CTA, and the large logo appears below the fold.

**Change:** Make the full-color 4K logo the **centerpiece of the hero section**. It should be the first visual element that grabs attention when the page loads. The logo should:

- Be prominently displayed and large — this is the brand's signature visual
- Sit above or integrated with the headline text
- Have a subtle entrance animation (fade-in + slight scale, or a gentle glow/pulse on the orbital rings — keep it tasteful, not flashy)
- The hero should feel like: logo dominates → tagline supports → CTA converts
- Maintain the starfield/geometric dark background aesthetic

The hero content hierarchy should be:
1. Large 4K logo (visual anchor)
2. "WEB DESIGN & DEVELOPMENT" subtitle
3. "Built to Launch. Built to Last." headline
4. Value prop line ("Custom websites for small businesses...")
5. "Schedule a Free Consult" CTA button
6. Trust badges ("Free consultation · No contracts · Tulsa-based")

### 3. CONVERT TO MULTI-PAGE ARCHITECTURE

**Current:** Single-page layout with sections that scroll. The hamburger menu lists: Services, Process, About, Pricing, Portfolio, Book.

**Change:** Each of these becomes its own dedicated route/page:

```
/                → Home (hero + brief overview sections + CTA)
/services        → Services page
/process         → Process page
/about           → About page
/pricing         → Pricing page
/portfolio       → Portfolio page
/book            → Book / Schedule a Consult page (Calendly embed)
```

**Implementation details:**
- Create a `pages/` or `app/` route for each (follow whichever routing pattern the project already uses — likely App Router)
- Build a **shared layout** with:
  - Persistent navbar (with the updated colored logo, nav links to each page, and a highlighted "Schedule a Consult" CTA button)
  - Persistent footer (see footer requirements below)
- The hamburger menu on mobile should navigate to these routes, not scroll to sections
- Each page should have its own `<title>` and meta description for SEO
- Add smooth page transitions if feasible (subtle fade between routes)
- Each page should maintain the dark space/starfield background aesthetic consistently

**Page content guidance:**
- **Home (`/`)**: Hero section (logo + tagline + CTA), brief "What We Do" teaser cards linking to /services, social proof / trust section, final CTA block
- **Services (`/services`)**: Detail the service offerings (custom website builds, the $1,000 flat rate offer, what's included)
- **Process (`/process`)**: Step-by-step breakdown of how a project works (Discovery → Design → Development → Launch → Support)
- **About (`/about`)**: Founder story, mission, why LaunchPoint exists, the "Tulsa-based, serving nationwide" angle
- **Pricing (`/pricing`)**: The build pricing + managed hosting plan (see pricing redesign below)
- **Portfolio (`/portfolio`)**: Grid/showcase layout for project case studies (can use placeholder cards for now with "Coming Soon" or sample entries — structure it so adding real projects later is easy)
- **Book (`/book`)**: Calendly embed (https://calendly.com/collin-parr46/30min) as the primary element, with supporting copy about what to expect on the call

### 4. FIX THE GEOMETRIC/SPIRAL DESIGN SECTION

**Current:** There is a section with bullet points ("Tulsa, OK — Serving nationwide", "Direct developer access", "3-week average delivery") above a geometric spiral/vortex graphic. The spiral graphic looks rough and poorly implemented.

**Change:** Either:
- **Option A (Preferred):** Remove the spiral graphic entirely. Replace with a clean, modern layout — use icon + text cards in a horizontal row or grid for those three trust points. Make it visually appealing with subtle glassmorphism cards or bordered cards with the brand's cyan accent.
- **Option B:** If keeping a decorative graphic, use a much more subtle, lower-opacity version as a background element — not as a standalone image that draws attention to itself.

The three trust points ("Tulsa, OK — Serving nationwide", "Direct developer access", "3-week average delivery") are strong and should be presented cleanly and prominently, likely on the homepage.

### 5. PRICING SECTION REDESIGN

**Current:** The $49.99/month managed hosting plan has a pink "Required with every project" badge. This reads as a forced upsell.

**Change:** Reframe the positioning entirely:

- **Remove "Required with every project"** — this is a conversion killer
- Rename the section header to something like **"Managed Hosting"** or **"Keep It Running"**
- Use a subtitle like: *"Your site stays fast, secure, and online — so you can focus on your business."*
- Instead of the pink badge, use a softer badge like: **"Included with your first 3 months"** or **"Recommended"** in the brand cyan color
- Alternatively, frame it as: show TWO options on the pricing page:
  1. **Website Build** — $1,000 flat (one-time) — with bullet points of what's included
  2. **Managed Hosting** — $49.99/month (ongoing) — with the hosting benefits
- Make it clear hosting is optional but recommended. Use copy like: *"You own your site. Host it with us for hands-off maintenance, or take it anywhere."*
- The "Cancel hosting anytime — you keep your site" line at the bottom is excellent. Keep it and make it more prominent.

### 6. INSTAGRAM ICON IN FOOTER

**Current:** Footer has the logo, nav links, "Built with purpose in Tulsa, Oklahoma" and copyright.

**Change:** Add an Instagram icon to the footer of **every page** (since we now have a shared layout, this means adding it to the shared footer component once).

- Icon: Use a standard Instagram SVG icon (from Lucide, Heroicons, or react-icons)
- Link: `https://www.instagram.com/launchpoint.studio/`
- Opens in a new tab (`target="_blank"` with `rel="noopener noreferrer"`)
- Style: White or light gray icon, subtle hover effect (cyan glow or opacity change)
- Placement: Below the nav links row, or next to the "Built with purpose" line — wherever it fits naturally in the footer layout
- Leave room to add more social icons later (LinkedIn, X/Twitter, etc.)

---

## General Design Standards

- **Typography:** Inter font family throughout. Clean hierarchy — large bold headings, lighter body text.
- **Color palette:** Deep navy backgrounds, white/light gray text, Electric Indigo/cyan (#38BDF8 or #06B6D4) for accents, buttons, and interactive elements. Pink/magenta for gradient accents sparingly.
- **Buttons:** Primary CTA buttons should use the cyan-to-pink gradient (like the "Book Your Free Call →" button) or solid cyan. Consistent across all pages.
- **Spacing:** Generous whitespace. Don't crowd sections.
- **Responsiveness:** Every page must be fully responsive. Test mobile nav, hero layout, and pricing cards at mobile breakpoints.
- **Animations:** Subtle and purposeful. Fade-in on scroll for section entries. No jarring or distracting motion.
- **Background:** Maintain the dark geometric/starfield aesthetic across all pages for brand consistency. The polygonal dark background should feel cohesive site-wide.

---

## File Notes

- `LP Icon No BG.png` — Transparent PNG of the colored LaunchPoint rocket icon. Use for navbar logo.
- The 4K full logo (rocket with orbital rings, blue/pink on dark background) — Use for the hero section feature. This is the large square logo asset.
- Calendly booking link: `https://calendly.com/collin-parr46/30min`
- Instagram: `https://www.instagram.com/launchpoint.studio/`

---

## Priority Order

1. Multi-page architecture conversion (this is structural — do first)
2. Shared layout (navbar + footer) with updated logo and Instagram icon
3. Hero section redesign with 4K logo
4. Fix the geometric spiral section
5. Pricing section redesign
6. Polish and responsive QA across all pages