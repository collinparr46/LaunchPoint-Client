# LaunchPoint Studio, LLC — Website

## Project Overview
LaunchPoint is a Tulsa-based web design studio run by Collin Parr, targeting small businesses and self-employed freelancers. This is the company's client-facing marketing site — it IS the portfolio piece. Every pixel must demonstrate the quality a prospective client would receive.

**Stack:** Next.js (App Router), TypeScript, Tailwind CSS v4, Framer Motion, deployed on Vercel.
**Domain:** launchpointportal.com
**Repo:** launchpoint-client
**Tagline:** "Built to Launch. Built to Last."

## Brand Assets (in `/public/`)
- `LP 4K Logo.png` — 4K master logo. Features a photorealistic 3D silver rocket with glowing purple-blue orbital energy rings, cosmic background, and metallic "LAUNCHPOINT STUDIO, LLC" text. Use as the hero visual element.
- `LP Colored Logo.png` — Primary logo on dark backgrounds. Illustrated silver rocket with Photon Blue and Magenta Orbit orbital wire-frame rings, fiery blue-pink thrust trail. "LAUNCHPOINT STUDIO, LLC" in Silver Rocket Gray text. Sparkle star accent at bottom-right.
- `LP Reversed Logo.png` — White/reversed version for use in Navbar and Footer on dark backgrounds.
- `LP Icon Logo.png` — Rocket icon only (no text). Silver rocket with blue-magenta orbital rings and thrust trail on Stellar Navy background. Use for favicon, loading states, small-format contexts.
- `LP Apparel Logo.png` — Apparel/merchandise variant.
- `LP Color Palette.png` — Official color palette reference.
- `LP Visual Motif.png` — Swirling concentric orbital lines in Photon Blue and Magenta Orbit on a dark navy background. Use as a decorative texture overlay on sections or behind cards.
- `LP Visual Pattern.png` — Low-poly geometric crystal pattern: dark angular faceted shapes (triangles/quads) in deep navy-to-black tones with scattered star-like white dots. Use as section backgrounds and behind the hero. This is the primary background texture.
- `Offical LP Brand Guide.png` — Full brand guidelines reference sheet.

## Brand Guidelines — MANDATORY

### Mission
To launch local businesses to high-tech success.

### Values
Trust · Innovation · Community

### Color Palette — USE THESE EXACT VALUES
**Primary:**
- Stellar Navy: `#13213F` — primary background, dark surfaces, base of all dark sections (RGB: 19, 33, 63 / CMYK: 70, 48, 0, 75)
- Photon Blue: `#33A1DE` — primary accent, CTAs, interactive elements, links, hover states (RGB: 51, 161, 222 / CMYK: 77, 27, 0, 13)
- Magenta Orbit: `#C31F75` — secondary accent, highlight elements, gradients paired with Photon Blue, badges (RGB: 195, 31, 117 / CMYK: 0, 84, 40, 24)
- Silver Rocket Gray: `#C3C7C9` — body text on dark backgrounds, borders, muted UI, secondary text (RGB: 195, 199, 201 / CMYK: 3, 1, 0, 21)

**Extended (derived from primary):**
- White: `#FFFFFF` — headings, primary text on dark backgrounds, high-emphasis content
- Deep Navy (darker): `#0B1528` — darkest shade, use for footer background, deepest surfaces
- Midnight Navy: `#1A2D4F` — slightly lighter variant for card backgrounds, elevated surfaces
- Photon Blue Glow: `rgba(51, 161, 222, 0.3)` — glow effects, box-shadows on CTAs
- Magenta Glow: `rgba(195, 31, 117, 0.2)` — accent glow effects, secondary highlights
- Faded Silver: `rgba(195, 199, 201, 0.5)` — tertiary text, de-emphasized content

**NEVER use:** The old palette colors (#0C0B20, #7C5CFC, #DC2626, #C8B8FF, #FF7900). Those are deprecated.

### Typography
- **Primary Headings:** Bold geometric sans-serif. Load "Outfit" (Google Fonts) as web substitute for Astra Sans Bold. Weight 700.
- **Secondary Headings:** Outfit, weight 500-600.
- **Body Text:** Outfit, weight 300-400.
- **Display / Hero Font:** "Cormorant Garamond" (Google Fonts) as web substitute for Orion Serif. Use ONLY for the main hero headline and pull quotes. Weights 400, 600, 700.
- **NEVER use:** Inter, Roboto, Arial, system-ui, or any generic sans-serif as visible typography.

### Logo Usage Rules
- Use `LP Reversed Logo.png` in Navbar and Footer (dark backgrounds = entire site).
- Use `LP Colored Logo.png` as the standard reference logo.
- Use `LP Icon Logo.png` for favicon and small-format contexts.
- The hero should feature `LP Icon Logo.png` (the rocket with orbital rings) as a large decorative element — NOT the 4K version which has text baked in.
- Always maintain clear space around logos.
- Never stretch, rotate logo text, or place on busy backgrounds without contrast.

### Visual Motifs & Textures
1. **Geometric crystal pattern** (`LP Visual Pattern.png`): Low-poly angular faceted shapes in deep navy/black tones with scattered white star dots. Use as the primary background texture behind hero, dark sections, and the CTA section. Can also be generated procedurally via SVG/Canvas as an animated version with twinkling star particles.
2. **Orbital swirl motif** (`LP Visual Motif.png`): Concentric swirling lines in Photon Blue (#33A1DE) and Magenta Orbit (#C31F75) forming a vortex/portal effect. Use as decorative accents on cards, section dividers, or behind the About section.
3. **Star field particles:** Tiny white dots (1-2px) that twinkle (opacity pulse animation) and drift very slowly. Layer behind hero and dark sections. The twinkle effect should feel like actual stars — randomized timing, subtle brightness variation.
4. **Rocket/space aesthetic:** All imagery, metaphors, and motion align with launch, orbit, propulsion, and space themes. The color interplay between Photon Blue and Magenta Orbit should evoke the rocket's thrust trail and orbital rings.

### Design Principles
1. **Dark-first:** Site is predominantly Stellar Navy (#13213F) background. No light/white sections.
2. **Dual-accent energy:** Photon Blue and Magenta Orbit work as a complementary pair — use them together in gradients, borders, and decorative elements to match the rocket's orbital ring aesthetic.
3. **Depth through layering:** Subtle gradients from Stellar Navy → Deep Navy, glassmorphism on cards (semi-transparent backgrounds + backdrop-blur), overlapping geometric shapes.
4. **Motion with purpose:** Animations feel like thrust — directional, spring-based easing. Stars twinkle. Elements launch into view. No generic fades.
5. **The site IS the portfolio:** Every component must demonstrate world-class frontend craft.

## Pricing Model
- **Single tier:** $1,000 flat fee — portfolios, landing pages, home pages, booking pages
- **Required managed hosting:** $49.99/month — hosting, maintenance, security updates, SSL, domain management, uptime monitoring, minor content edits (up to 1 hr/month)
- Target: small business owners, self-employed freelancers

## Site Structure
1. **Hero** — Full-viewport, rocket visual with `LP Visual Pattern.png` crystal background + animated twinkling stars, "Built to Launch. Built to Last.", CTA to Calendly
2. **Social Proof** — Stats banner (3 weeks, 100% on-time, 1:1 access, $0 quotes)
3. **Services** — What we build (portfolios, landing pages, booking/lead capture)
4. **Process** — 3-step: Consult → Build → Launch
5. **About** — Collin's direct-to-client model, trust signals
6. **Pricing** — $1,000 build + $49.99/mo managed hosting (2 cards)
7. **Portfolio** — Cuts by Cate + Riverside Air Comfort
8. **CTA / Book** — Calendly link (calendly.com/collin-parr46/30min)
9. **Footer** — Logo, links, copyright

## Component Architecture

### Entry points
- `app/page.tsx` — composes all section components; minimal logic
- `app/layout.tsx` — loads Outfit + Cormorant Garamond fonts, metadata, JSON-LD
- `app/globals.css` — Tailwind v4 `@theme` block defines brand color utilities (`bg-stellar-navy`, `text-photon-blue`, etc.) and CSS animation keyframes

### Key components
- `components/GeometricBackground.tsx` — reusable background layer: `LP Visual Pattern.png` + animated star field + gradient overlay. Accepts `variant?: 'hero' | 'section' | 'cta'`
- `components/Hero.tsx` — full-viewport hero with Framer Motion entrance animations
- `components/navbar.tsx` — scroll-responsive transparency, Framer Motion mobile overlay
- `components/sections/` — one file per page section (SocialProof, Services, Process, About, Pricing, Portfolio, BookCTA, Footer)

### Tailwind v4 color utilities (defined in globals.css @theme)
```
bg-stellar-navy    #13213F
bg-deep-navy       #0B1528
bg-midnight-navy   #1A2D4F
bg-photon-blue     #33A1DE
bg-magenta-orbit   #C31F75
text-silver-gray   #C3C7C9
```

### CSS utility classes (globals.css)
- `.gradient-accent-line` — 48×3px Photon Blue→Magenta Orbit gradient bar; appears above every section heading
- `.glass-card` — glassmorphism card with hover lift/glow effect
- `.btn-photon-glow` — Photon Blue CTA button with glow shadow
- `.btn-gradient-glow` — gradient (Photon Blue→Magenta Orbit) CTA with dual glow
- `.animate-float` — 6s ease-in-out ±8px vertical float loop

### Framer Motion patterns
- All entrance animations use `useInView(ref, { once: true, margin: "-80px" })`
- Spring config: `{ type: "spring", stiffness: 100, damping: 15 }`
- Stagger children with `delay: i * 0.15`

## Code Conventions
- App Router (`/app` directory). No Pages Router.
- Section components in `/components/sections/` with PascalCase filenames.
- All colors via Tailwind brand utilities (`bg-photon-blue`) or inline style for dynamic values — never arbitrary hex in className unless referencing rgba with opacity.
- Framer Motion for scroll/entrance animations. CSS transitions only for hover states.
- Images via `next/image` with width, height, priority on above-fold assets.
- Mobile-first responsive. Breakpoints: sm(640) md(768) lg(1024) xl(1280).
- Every section has `id` matching nav links: services, process, about, pricing, portfolio, book.
- SEO: meta tags, Open Graph, Twitter cards, ProfessionalService JSON-LD schema in layout.tsx.

## Commands
```bash
npm run dev      # Start dev server at localhost:3000
npm run build    # Production build
npm run lint     # Run ESLint
npm start        # Start production server
```

## Deployment
- Vercel auto-deploys from `main` branch
- Domain: launchpointportal.com
