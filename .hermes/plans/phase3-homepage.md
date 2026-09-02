# Phase 3 — Homepage Showroom Plan

## APPROACH

Build Homepage as a narrative-driven product demo. No decorative animations, no generic dashboard. Every section answers: "What would MY business look like?"

## HOMEPAGE SECTIONS

### 01 — HERO (viewport height)
- Main headline: "Turn scattered touchpoints into one connected customer journey that just works."
- Subline: Result-oriented, NOT technology description
- CTAs: Build This For My Business / Explore the System
- Visual: SVG animated customer journey loop — shows touchpoints CONNECTING in real-time
- NOT a static diagram — animated connections between touchpoints

### 02 — SELECTED WORK (4 projects)
- Camon Coffee, Geum Cha, Seoul Korean Cuisine, Lerin's Nook
- Each shown as a mini visual preview (iframe thumbnail OR styled card)
- Framing: "What We Can Build" — not client success stories
- Hover: subtle scale + border-accent

### 03 — BUSINESS SELECTOR (interactive)
- 6 category pills: Cafes, Restaurants, Beauty/Spa, Dental/Medical, Real Estate, Hospitality
- On click: shows a relevant touchpoint ecosystem preview
- Uses SVG-based touchpoint diagram that changes per category
- Category-specific messaging

### 04 — FROM SCATTERED TO CONNECTED
- BEFORE: scattered icons (Google, Facebook, Menu, Zalo, Phone, Reviews) — no connections
- AFTER: single connected loop with animated flow lines
- Visual: CSS/SVG, no GSAP needed for this
- Shows transformation concept clearly

### 05 — CUSTOMER JOURNEY (7 stages)
- Desktop: horizontal scroll-driven reveal OR vertical with connecting lines
- Mobile: vertical timeline with step numbers
- Each stage: icon + label + brief description
- GSAP ScrollTrigger only if scroll-driven adds meaning; otherwise CSS

### 06 — ONE SYSTEM (modules)
- 6 modules: Website, QR Menu, AI Assistant, Automation, Analytics, Loyalty
- NOT a grid — a connected flow showing how modules link
- SVG connecting lines between modules
- Each module has icon + name + connection indicator

### 07 — OUTCOMES
- 7 outcome statements (no fabricated numbers)
- Grid of statement cards
- Icon + statement text

### 08 — BUILD YOUR B.O.S.S. (mini configurator)
- Step 1: Select business type (6 options)
- Step 2: Select needs (checkboxes: Website, QR Menu, AI, Automation, Analytics, Loyalty)
- Result: visual system preview based on selections
- CTA: Build This For My Business

### 09 — FINAL CTA
- Simple message: "Your business already has the touchpoints. Let's connect them."
- Primary: Build This For My Business
- Secondary: Book a Consult

## TECHNICAL APPROACH

- React 18 + TypeScript
- Tailwind CSS + CSS custom properties
- GSAP (only if scroll-driven narrative is meaningful for journey section)
- No Three.js, no WebGL, no heavy 3D
- SVG for all diagrams/icons
- CSS animations for micro-interactions

## FILE STRUCTURE

```
src/
├── pages/
│   └── HomePage.tsx         — Main homepage with all sections
├── components/home/
│   ├── HeroSection.tsx      — Hero with animated journey SVG
│   ├── WorkSection.tsx      — Selected work showcase
│   ├── BusinessSelector.tsx  — Interactive category selector
│   ├── ScatteredToConnected.tsx — Before/After transformation
│   ├── JourneySection.tsx   — 7-stage journey
│   ├── SystemSection.tsx     — Module flow
│   ├── OutcomesSection.tsx   — Outcome statements
│   ├── ConfiguratorSection.tsx — Mini B.O.S.S. builder
│   └── FinalCTA.tsx         — Final call to action
├── components/ui/            — Reuse existing Button, Link, etc.
└── assets/
    └── icons/               — SVG icons for touchpoints/modules
```

## MOTION RULES

1. **Micro** (CSS only): hover, focus, button states, transitions
2. **Section reveal**: fade-up on scroll-enter (CSS + IntersectionObserver, NOT GSAP)
3. **GSAP** only for: Customer Journey scroll storytelling (if horizontal scrolling adds value)

## PERFORMANCE TARGETS

- JS: < 300 KB gzipped (excluding GSAP)
- CSS: < 30 KB
- No heavy images — SVG + CSS only for diagrams
- Lighthouse Performance target: 85+

## MOBILE REQUIREMENTS

- Full vertical experience — NO horizontal scroll for core content
- 320px, 375px, 390px, 430px tested
- Touch targets minimum 44px
- Typography readable at all sizes
- Business selector works on touch
- Journey section: vertical on mobile
