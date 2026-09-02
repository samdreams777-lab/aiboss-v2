import { useState, useEffect, useRef } from 'react'
import gsap from 'gsap'
import {
  Search,
  Globe,
  QrCode,
  MessageCircle,
  MapPin,
  Star,
  Repeat,
  ArrowRight,
  CheckCircle2,
  Eye,
  Smartphone,
  Footprints,
  TrendingUp,
  Zap,
  ArrowUpRight,
} from 'lucide-react'

/* ================================================================
   AI B.O.S.S. Homepage — Phase 3
   Narrative-driven product showroom
   ================================================================ */

// =============================================
// HOOKS
// =============================================

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); observer.disconnect() } },
      { threshold }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  return { ref, inView }
}

// =============================================
// SECTION 01 — HERO
// =============================================

function HeroSection() {
  const { ref: inViewRef, inView } = useInView(0.1)

  useEffect(() => {
    if (!inView) return
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
      tl.add('start')
        .fromTo('.hero-eyebrow', { opacity: 0, y: 8 }, { opacity: 1, y: 0, duration: 0.35 }, 'start')
        .fromTo('.hero-headline', { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.5 }, 'start+=0.05')
        .fromTo('.hero-subline', { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: 0.4 }, 'start+=0.15')
        .fromTo('.hero-cta', { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.4 }, 'start+=0.25')
        .fromTo('.hero-feed', { opacity: 0, x: 30 }, { opacity: 1, x: 0, duration: 0.6 }, 'start+=0.1')
    }, inViewRef)
    return () => ctx.revert()
  }, [inView, inViewRef])

  return (
    <section ref={inViewRef} className="relative min-h-[calc(100dvh-3.5rem)] flex overflow-hidden bg-bg-base">
      <div className="absolute inset-0 bg-gradient-to-br from-bg-base via-bg-base to-bg-surface pointer-events-none" />

      <div className="relative z-10 flex w-full max-w-container-2xl mx-auto px-gutter-sm sm:px-gutter-md lg:px-gutter-lg py-12 lg:py-16 items-center">

        {/* LEFT: Text — 45% */}
        <div className="w-full lg:w-[45%] lg:pr-16">

          {/* Eyebrow */}
          <p className="hero-eyebrow text-label mb-6 tracking-widest text-accent opacity-0">
            Digital Transformation · Vietnam
          </p>

          {/* Headline */}
          <h1 className="hero-headline font-display text-4xl sm:text-5xl lg:text-[3rem] xl:text-[3.5rem] font-semibold text-text-primary tracking-tight leading-[1.08] mb-6 opacity-0">
            Turn scattered touchpoints into{' '}
            <span className="text-accent">one connected journey</span>
          </h1>

          {/* Subline */}
          <p className="hero-subline text-base lg:text-lg text-text-secondary leading-relaxed max-w-md mb-10 opacity-0">
            AI B.O.S.S. connects Google, your website, menu, contact, visits and reviews into a single system — measurable, and improving every month.
          </p>

          {/* CTAs */}
          <div className="hero-cta flex flex-col sm:flex-row gap-3 opacity-0">
            <a
              href="/contact"
              className="group inline-flex items-center justify-center gap-2.5 rounded-lg bg-accent px-7 py-3.5 text-base font-semibold text-text-inverse shadow-accent hover:bg-accent-hover hover:shadow-accent-lg transition-all duration-200 active:scale-[0.97]"
            >
              Build This For My Business
              <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-0.5" />
            </a>
            <a
              href="/journey"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-border-default bg-bg-card px-7 py-3.5 text-base font-medium text-text-primary hover:border-border-strong hover:bg-bg-elevated transition-all duration-200"
            >
              Explore the System
            </a>
          </div>
        </div>

        {/* RIGHT: Customer Journey Feed — 55% */}
        <div className="hidden lg:block w-[55%]">
          <HeroJourneyFeed />
        </div>
      </div>

      {/* Mobile: Feed below text */}
      <div className="lg:hidden absolute bottom-0 left-0 right-0">
        <div className="px-gutter-xs pb-4">
          <HeroJourneyFeedMobile />
        </div>
      </div>
    </section>
  )
}

// =============================================
// HERO JOURNEY FEED — DESKTOP
// Single vertical connected feed — this IS the product demo
// =============================================

function HeroJourneyFeed() {
  const stages = [
    {
      id: 'google',
      step: '01',
      label: 'Discover',
      icon: Search,
      data: '17 searches / day',
      desc: 'Google Maps & Search',
      accent: true,
    },
    {
      id: 'website',
      step: '02',
      label: 'Website',
      icon: Globe,
      data: '247 visits / month',
      desc: 'Landing · Menu · Contact',
      accent: false,
    },
    {
      id: 'menu',
      step: '03',
      label: 'Menu',
      icon: QrCode,
      data: '84 scans / week',
      desc: 'QR Menu · Items · Categories',
      accent: false,
    },
    {
      id: 'contact',
      step: '04',
      label: 'Contact',
      icon: MessageCircle,
      data: '12 bookings / week',
      desc: 'Reservation · Inquiry',
      accent: false,
    },
    {
      id: 'visit',
      step: '05',
      label: 'Visit',
      icon: MapPin,
      data: '94 visits / month',
      desc: 'Walk-in · Booking',
      accent: false,
    },
    {
      id: 'review',
      step: '06',
      label: 'Review',
      icon: Star,
      data: '+18 reviews / month',
      desc: 'Google · Rating · Response',
      accent: false,
    },
    {
      id: 'return',
      step: '07',
      label: 'Return',
      icon: Repeat,
      data: '34% returning customers',
      desc: 'Loyalty · Repeat visit',
      accent: false,
    },
  ]

  return (
    <div className="hero-feed w-full max-w-[540px] ml-auto opacity-0" aria-label="Connected customer journey feed">
      {/* B.O.S.S. header bar */}
      <div className="flex items-center justify-between mb-5 pl-1">
        <div className="flex items-center gap-2">
          <CheckCircle2 size={14} className="text-accent" strokeWidth={2} />
          <span className="text-2xs font-semibold uppercase tracking-widest text-accent">
            AI B.O.S.S.
          </span>
          <span className="text-2xs text-text-muted">Customer Journey</span>
        </div>
        <div className="flex items-center gap-1.5 text-2xs text-text-muted">
          <span className="w-1.5 h-1.5 rounded-full bg-accent/60" />
          Demo · Live
        </div>
      </div>

      {/* Connected feed */}
      <div className="relative pl-6">
        {/* Vertical timeline line */}
        <div className="absolute left-[11px] top-2 bottom-2 w-px bg-gradient-to-b from-accent/40 via-accent/20 to-border-default" />

        {stages.map((stage) => (
          <div key={stage.id} className="relative mb-2 last:mb-0 group">
            {/* Timeline dot */}
            <div className={`absolute -left-6 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full flex items-center justify-center border transition-all duration-200 ${
              stage.accent
                ? 'bg-accent border-accent shadow-[0_0_8px_rgba(201,149,74,0.4)]'
                : 'bg-bg-card border-border-default group-hover:border-border-strong'
            }`}>
              <stage.icon size={11} strokeWidth={1.75} className={stage.accent ? 'text-text-inverse' : 'text-text-muted'} />
            </div>

            {/* Content card */}
            <div className="flex items-center justify-between rounded-lg border border-border-default bg-bg-card/80 pl-4 pr-4 py-2.5 ml-2 group-hover:border-border-strong group-hover:bg-bg-card transition-all duration-200">
              <div className="flex items-center gap-3">
                <span className="text-2xs font-mono text-text-muted/60 w-5">{stage.step}</span>
                <div>
                  <p className="text-sm font-medium text-text-primary leading-tight">{stage.label}</p>
                  <p className="text-2xs text-text-muted mt-0.5">{stage.desc}</p>
                </div>
              </div>
              <span className="text-2xs font-medium text-accent/80 tabular-nums">{stage.data}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// =============================================
// HERO JOURNEY FEED — MOBILE
// Compact horizontal strip
// =============================================

function HeroJourneyFeedMobile() {
  const stages = [
    { label: 'Discover', Icon: Search },
    { label: 'Website', Icon: Globe },
    { label: 'Menu', Icon: QrCode },
    { label: 'Contact', Icon: MessageCircle },
    { label: 'Visit', Icon: MapPin },
    { label: 'Review', Icon: Star },
    { label: 'Return', Icon: Repeat },
  ]

  return (
    <div className="flex items-center gap-0.5 overflow-x-auto pb-2 scrollbar-hide" aria-label="Customer journey steps">
      {stages.map((stage, i) => (
        <div key={stage.label} className="flex items-center shrink-0">
          <div className="flex flex-col items-center">
            <div className="w-8 h-8 rounded-xl border border-border-default bg-bg-card flex items-center justify-center">
              <stage.Icon size={12} className="text-accent/80" strokeWidth={1.75} />
            </div>
            <p className="text-2xs text-text-muted mt-1 text-center">{stage.label}</p>
          </div>
          {i < stages.length - 1 && (
            <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="1.5" className="shrink-0 opacity-25 mx-0.5" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          )}
        </div>
      ))}
    </div>
  )
}

// =============================================
// SECTION 02 — SELECTED WORK
// =============================================

function WorkSection() {
  const { ref, inView } = useInView()

  return (
    <section ref={ref} className="border-t border-border-subtle bg-bg-surface px-gutter-xs py-16 sm:px-gutter-sm lg:px-gutter-lg">
      <div className="mx-auto max-w-container-lg">
        <div className={`mb-12 text-center transition-all duration-slow ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <p className="text-label mb-3 tracking-widest text-accent">Selected Work</p>
          <h2 className="font-display text-3xl lg:text-4xl font-semibold text-text-primary">
            Digital Experiences
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {WORK_PROJECTS.map((project, i) => (
            <article
              key={project.slug}
              className={`group rounded-xl border border-border-default bg-bg-card overflow-hidden hover:border-border-strong hover:shadow-accent transition-all duration-200 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <a href={`/work/${project.slug}`} className="block focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-bg-surface rounded-xl">
                <div className="aspect-[4/3] bg-bg-elevated relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-bg-elevated to-bg-card" />
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: `linear-gradient(135deg, ${project.accent}15, transparent 60%)` }}
                  />
                  <div className="absolute bottom-3 left-3">
                    <div className="text-2xs font-medium px-2 py-1 rounded-md border" style={{ borderColor: `${project.accent}40`, color: project.accent, backgroundColor: `${project.accent}10` }}>
                      {project.category}
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-sm font-semibold text-text-primary group-hover:text-accent transition-colors duration-200">{project.name}</h3>
                  <p className="text-2xs text-text-muted mt-1">{project.tags.join(' · ')}</p>
                </div>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

const WORK_PROJECTS = [
  {
    slug: 'camon-coffee',
    name: 'Camon Coffee',
    category: 'Café',
    tags: ['QR Menu', 'Website', 'Vietnam'],
    accent: '#c9954a',
  },
  {
    slug: 'geum-cha',
    name: 'Geum Cha',
    category: 'Beverage',
    tags: ['QR Menu', 'Website', 'Korea'],
    accent: '#c9954a',
  },
  {
    slug: 'seoul-korean-cuisine',
    name: 'Seoul Korean Cuisine',
    category: 'Restaurant',
    tags: ['QR Menu', 'Website', 'Vietnam'],
    accent: '#c9954a',
  },
  {
    slug: 'lerins-nook',
    name: "Lerin's Nook",
    category: 'Bakery',
    tags: ['QR Menu', 'Website', 'Vietnam'],
    accent: '#c9954a',
  },
]

// =============================================
// SECTION 03 — BUSINESS SELECTOR
// =============================================

const BUSINESS_CATEGORIES = [
  { id: 'cafe', label: 'Cafés', icon: '☕', touchpoints: ['Google Maps', 'Website', 'QR Menu', 'Contact Form', 'Walk-in'] },
  { id: 'restaurant', label: 'Restaurants', icon: '🍽', touchpoints: ['Google', 'Website', 'Menu', 'Reservation', 'Review'] },
  { id: 'beauty', label: 'Beauty / Spa', icon: '💆', touchpoints: ['Instagram', 'Booking', 'Menu', 'Review', 'Return'] },
  { id: 'dental', label: 'Dental / Medical', icon: '🦷', touchpoints: ['Google', 'Website', 'Booking', 'Reminder', 'Review'] },
  { id: 'real-estate', label: 'Real Estate', icon: '🏠', touchpoints: ['Portal', 'Website', 'Inquiry', 'Viewing', 'Follow-up'] },
  { id: 'hospitality', label: 'Hospitality', icon: '🏨', touchpoints: ['OTA', 'Website', 'Booking', 'Check-in', 'Review'] },
]

function BusinessSection() {
  const { ref, inView } = useInView()
  const [selected, setSelected] = useState('cafe')

  const current = BUSINESS_CATEGORIES.find(b => b.id === selected)!

  return (
    <section ref={ref} className="border-t border-border-subtle bg-bg-base px-gutter-xs py-16 sm:px-gutter-sm lg:px-gutter-lg">
      <div className="mx-auto max-w-container-lg">
        <div className={`mb-10 text-center transition-all duration-slow ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <p className="text-label mb-3 tracking-widest text-accent">Business Type</p>
          <h2 className="font-display text-3xl lg:text-4xl font-semibold text-text-primary">
            What would your business look like?
          </h2>
        </div>

        {/* Category selector */}
        <div className={`flex flex-wrap justify-center gap-2 mb-10 transition-all duration-slow ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          {BUSINESS_CATEGORIES.map(cat => (
            <button
              key={cat.id}
              onClick={() => setSelected(cat.id)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 border ${
                selected === cat.id
                  ? 'bg-accent text-text-inverse border-accent shadow-accent-sm'
                  : 'bg-bg-card text-text-secondary border-border-default hover:border-border-strong hover:text-text-primary'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Touchpoints display */}
        <div className={`max-w-lg mx-auto transition-all duration-slow ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="rounded-xl border border-border-default bg-bg-card p-6">
            <p className="text-xs text-text-muted mb-4 uppercase tracking-widest font-semibold">Connected Touchpoints</p>
            <div className="flex flex-wrap gap-2">
              {current.touchpoints.map(tp => (
                <span key={tp} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-bg-elevated text-sm text-text-secondary border border-border-subtle">
                  <CheckCircle2 size={12} className="text-accent/70" />
                  {tp}
                </span>
              ))}
            </div>
            <div className="mt-5 pt-4 border-t border-border-subtle flex items-center justify-between">
              <p className="text-xs text-text-muted">6 modules available</p>
              <a href="/contact" className="text-xs font-medium text-accent hover:underline">Build this →</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// =============================================
// SECTION 04 — SCATTERED → CONNECTED
// =============================================

function TransformSection() {
  const { ref, inView } = useInView()

  const before = ['Google', 'Facebook', 'Website', 'Menu', 'Zalo', 'Reviews', 'Phone']
  const after = [
    'ONE Customer Journey',
    'ONE Connected System',
    'ONE Source of Data',
    'ONE Automation Layer',
    'ONE Results View',
  ]

  return (
    <section ref={ref} className="border-t border-border-subtle bg-bg-surface px-gutter-xs py-16 sm:px-gutter-sm lg:px-gutter-lg">
      <div className="mx-auto max-w-container-lg">
        <div className={`mb-12 text-center transition-all duration-slow ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <p className="text-label mb-3 tracking-widest text-accent">Transformation</p>
          <h2 className="font-display text-3xl lg:text-4xl font-semibold text-text-primary">
            From scattered to connected
          </h2>
        </div>

        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 transition-all duration-slow ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          {/* Before */}
          <div className="rounded-xl border border-border-default bg-bg-card p-6">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 rounded-lg bg-bg-elevated border border-border-subtle flex items-center justify-center">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-text-muted" aria-hidden="true">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </div>
              <p className="text-xs text-text-muted uppercase tracking-widest font-semibold">Before</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {before.map(item => (
                <span key={item} className="px-3 py-1.5 rounded-md bg-bg-elevated text-sm text-text-muted border border-border-subtle">
                  {item}
                </span>
              ))}
            </div>
            <p className="text-xs text-text-muted/60 mt-4">Disconnected channels · No single source of truth</p>
          </div>

          {/* After */}
          <div className="rounded-xl border border-accent/30 bg-accent/5 p-6">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 rounded-lg bg-accent/15 border border-accent/25 flex items-center justify-center">
                <CheckCircle2 size={12} className="text-accent" />
              </div>
              <p className="text-xs text-accent uppercase tracking-widest font-semibold">After</p>
            </div>
            <div className="space-y-2">
              {after.map(item => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-accent shrink-0" />
                  <span className="text-sm font-medium text-text-primary">{item}</span>
                </div>
              ))}
            </div>
            <p className="text-xs text-accent/60 mt-4">One system · One source · Measurable results</p>
          </div>
        </div>
      </div>
    </section>
  )
}

// =============================================
// SECTION 05 — CUSTOMER JOURNEY
// =============================================

function JourneySection() {
  const { ref, inView } = useInView()

  const stages = [
    { step: '01', label: 'DISCOVER', icon: Search, desc: 'Customer finds you on Google, maps, or social media. First digital touchpoint.' },
    { step: '02', label: 'WEBSITE', icon: Globe, desc: 'Your website is the hub. Landing, menu, information, contact — all in one place.' },
    { step: '03', label: 'MENU / SERVICE', icon: QrCode, desc: 'QR menu or service catalog. No print costs. Always current.' },
    { step: '04', label: 'CONTACT', icon: MessageCircle, desc: 'Booking, reservation, inquiry. Direct communication channel.' },
    { step: '05', label: 'VISIT', icon: MapPin, desc: 'The customer arrives. The journey becomes physical — and measurable.' },
    { step: '06', label: 'REVIEW', icon: Star, desc: 'Feedback is captured. Reviews are responded to. Reputation builds.' },
    { step: '07', label: 'RETURN', icon: Repeat, desc: 'Customer comes back. Loyalty forms. The cycle continues.' },
  ]

  return (
    <section ref={ref} className="border-t border-border-subtle bg-bg-base px-gutter-xs py-16 sm:px-gutter-sm lg:px-gutter-lg">
      <div className="mx-auto max-w-container-lg">
        <div className={`mb-12 text-center transition-all duration-slow ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <p className="text-label mb-3 tracking-widest text-accent">The System</p>
          <h2 className="font-display text-3xl lg:text-4xl font-semibold text-text-primary">
            Follow the customer
          </h2>
        </div>

        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 transition-all duration-slow ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          {stages.map((stage) => (
            <div
              key={stage.step}
              className={`rounded-xl border p-5 transition-all duration-200 ${
                stage.step === '01'
                  ? 'border-accent/40 bg-accent/5'
                  : 'border-border-default bg-bg-card hover:border-border-strong'
              }`}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                  stage.step === '01' ? 'bg-accent/20' : 'bg-bg-elevated'
                }`}>
                  <stage.icon size={14} strokeWidth={1.75} className={
                    stage.step === '01' ? 'text-accent' : 'text-text-muted'
                  } />
                </div>
                <div className="flex-1 h-px bg-border-default" />
                <span className="text-2xs font-mono text-text-muted">{stage.step}</span>
              </div>
              <h3 className="text-sm font-semibold text-text-primary mb-1.5">{stage.label}</h3>
              <p className="text-xs text-text-muted leading-relaxed">{stage.desc}</p>
            </div>
          ))}
        </div>

        <div className={`mt-8 text-center transition-all duration-slow ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <a href="/journey" className="inline-flex items-center gap-1.5 text-sm text-accent hover:underline">
            Explore the full customer journey
            <ArrowUpRight size={14} />
          </a>
        </div>
      </div>
    </section>
  )
}

// =============================================
// SECTION 06 — ONE SYSTEM
// =============================================

function SystemSection() {
  const { ref, inView } = useInView()

  const modules = [
    { label: 'Website', desc: 'Modern, fast, optimized for Google', icon: Globe },
    { label: 'QR Menu', desc: 'Digital menu with categories and items', icon: QrCode },
    { label: 'AI Assistant', desc: 'Automated responses, 24/7', icon: MessageCircle },
    { label: 'Automation', desc: 'Reminders, follow-ups, confirmations', icon: Repeat },
    { label: 'Analytics', desc: 'Understand your customers better', icon: TrendingUp },
    { label: 'Loyalty', desc: 'Repeat customers, referrals', icon: Star },
  ]

  return (
    <section ref={ref} className="border-t border-border-subtle bg-bg-surface px-gutter-xs py-16 sm:px-gutter-sm lg:px-gutter-lg">
      <div className="mx-auto max-w-container-lg">
        <div className={`mb-12 text-center transition-all duration-slow ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <p className="text-label mb-3 tracking-widest text-accent">Modules</p>
          <h2 className="font-display text-3xl lg:text-4xl font-semibold text-text-primary">
            One system
          </h2>
        </div>

        <div className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 transition-all duration-slow ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          {modules.map((mod) => (
            <div key={mod.label} className="rounded-xl border border-border-default bg-bg-card p-4 hover:border-border-strong transition-all duration-200 text-center group">
              <div className="w-9 h-9 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center mx-auto mb-3 group-hover:bg-accent/15 transition-colors duration-200">
                <mod.icon size={16} className="text-accent" strokeWidth={1.75} />
              </div>
              <p className="text-xs font-semibold text-text-primary mb-0.5">{mod.label}</p>
              <p className="text-2xs text-text-muted leading-tight">{mod.desc}</p>
            </div>
          ))}
        </div>

        <div className={`mt-8 text-center transition-all duration-slow ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <a href="/systems" className="inline-flex items-center gap-1.5 text-sm text-accent hover:underline">
            Explore the system
            <ArrowUpRight size={14} />
          </a>
        </div>
      </div>
    </section>
  )
}

// =============================================
// SECTION 07 — OUTCOMES
// =============================================

function OutcomesSection() {
  const { ref, inView } = useInView()

  const outcomes = [
    { icon: Eye, text: 'Easier to find' },
    { icon: Smartphone, text: 'More direct contacts' },
    { icon: Footprints, text: 'More visits' },
    { icon: Star, text: 'Better reviews' },
    { icon: Repeat, text: 'More returning customers' },
    { icon: TrendingUp, text: 'Know customers better' },
    { icon: Zap, text: 'Less manual work' },
  ]

  return (
    <section ref={ref} className="border-t border-border-subtle bg-bg-base px-gutter-xs py-16 sm:px-gutter-sm lg:px-gutter-lg">
      <div className="mx-auto max-w-container-lg">
        <div className={`mb-10 text-center transition-all duration-slow ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <p className="text-label mb-3 tracking-widest text-accent">Outcomes</p>
          <h2 className="font-display text-3xl lg:text-4xl font-semibold text-text-primary">
            What changes for your business
          </h2>
        </div>

        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 transition-all duration-slow ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          {outcomes.map((o) => (
            <div key={o.text} className="rounded-xl border border-border-default bg-bg-card p-5 hover:border-border-strong transition-all duration-200 flex items-start gap-3">
              <div className="w-9 h-9 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0">
                <o.icon size={16} className="text-accent" strokeWidth={1.75} />
              </div>
              <div>
                <p className="text-sm font-medium text-text-primary">{o.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// =============================================
// SECTION 08 — BUILD YOUR B.O.S.S.
// =============================================

function ConfiguratorSection() {
  const { ref, inView } = useInView()
  const [step, setStep] = useState(1)
  const [business, setBusiness] = useState<string | null>(null)
  const [needs, setNeeds] = useState<string[]>([])

  const needsOptions = ['Website', 'QR Menu', 'AI Assistant', 'Automation', 'Analytics', 'Loyalty']

  const toggleNeed = (n: string) => {
    setNeeds(prev => prev.includes(n) ? prev.filter(x => x !== n) : [...prev, n])
  }

  const canProceed = step === 1 ? !!business : needs.length > 0

  return (
    <section ref={ref} className="border-t border-border-subtle bg-bg-surface px-gutter-xs py-16 sm:px-gutter-sm lg:px-gutter-lg">
      <div className="mx-auto max-w-container-lg">
        <div className={`mb-10 text-center transition-all duration-slow ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <p className="text-label mb-3 tracking-widest text-accent">Configurator</p>
          <h2 className="font-display text-3xl lg:text-4xl font-semibold text-text-primary">
            Build your B.O.S.S.
          </h2>
        </div>

        <div className={`max-w-md mx-auto rounded-xl border border-border-default bg-bg-card p-6 transition-all duration-slow ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          {/* Step indicator */}
          <div className="flex items-center gap-2 mb-6">
            {[1, 2].map(s => (
              <div key={s} className="flex items-center gap-2">
                <div className={`w-6 h-6 rounded-full flex items-center justify-center text-2xs font-semibold ${
                  step >= s ? 'bg-accent text-text-inverse' : 'bg-bg-elevated text-text-muted'
                }`}>
                  {s}
                </div>
                {s < 2 && <div className={`w-8 h-px ${step > s ? 'bg-accent' : 'bg-border-default'}`} />}
              </div>
            ))}
          </div>

          {step === 1 ? (
            <div>
              <p className="text-sm font-medium text-text-primary mb-4">Select your business type</p>
              <div className="grid grid-cols-2 gap-2">
                {['Café', 'Restaurant', 'Spa', 'Dental', 'Retail', 'Other'].map(b => (
                  <button
                    key={b}
                    onClick={() => setBusiness(b)}
                    className={`px-3 py-2 rounded-lg text-sm border transition-all duration-200 ${
                      business === b
                        ? 'border-accent bg-accent/10 text-accent'
                        : 'border-border-default hover:border-border-strong text-text-secondary'
                    }`}
                  >
                    {b}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div>
              <p className="text-sm font-medium text-text-primary mb-4">What do you need?</p>
              <div className="space-y-2">
                {needsOptions.map(n => (
                  <button
                    key={n}
                    onClick={() => toggleNeed(n)}
                    className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg border text-sm text-left transition-all duration-200 ${
                      needs.includes(n)
                        ? 'border-accent bg-accent/10 text-accent'
                        : 'border-border-default hover:border-border-strong text-text-secondary'
                    }`}
                  >
                    <div className={`w-4 h-4 rounded border flex items-center justify-center shrink-0 ${
                      needs.includes(n) ? 'bg-accent border-accent' : 'border-border-default'
                    }`}>
                      {needs.includes(n) && <CheckCircle2 size={12} className="text-text-inverse" />}
                    </div>
                    {n}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Navigation */}
          <div className="flex items-center justify-between mt-6 pt-4 border-t border-border-subtle">
            {step > 1 ? (
              <button
                onClick={() => setStep(1)}
                className="inline-flex items-center gap-1.5 text-sm text-text-muted hover:text-text-primary transition-colors"
              >
                <ArrowRight size={14} className="rotate-180" />
                Back
              </button>
            ) : <div />}
            {step < 2 ? (
              <button
                onClick={() => setStep(2)}
                disabled={!canProceed}
                className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-lg bg-accent text-text-inverse text-sm font-semibold disabled:bg-bg-elevated disabled:text-text-muted disabled:cursor-not-allowed hover:bg-accent-hover transition-colors"
              >
                Next
                <ArrowRight size={14} />
              </button>
            ) : (
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-lg bg-accent text-text-inverse text-sm font-semibold hover:bg-accent-hover transition-colors"
              >
                Build This For My Business
                <ArrowRight size={14} />
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

// =============================================
// SECTION 09 — FINAL CTA
// =============================================

function FinalCTASection() {
  return (
    <section className="border-t border-border-subtle bg-bg-base px-gutter-xs py-20 sm:px-gutter-sm lg:px-gutter-lg text-center">
      <div className="mx-auto max-w-container-lg">
        <p className="font-display text-2xl lg:text-3xl font-semibold text-text-primary mb-4 leading-snug">
          Your business already has the touchpoints.<br />
          <span className="text-accent">Let's connect them.</span>
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center mt-8">
          <a
            href="/contact"
            className="group inline-flex items-center justify-center gap-2.5 rounded-lg bg-accent px-8 py-4 text-base font-semibold text-text-inverse shadow-accent hover:bg-accent-hover hover:shadow-accent-lg transition-all duration-200 active:scale-[0.97]"
          >
            Build This For My Business
            <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-0.5" />
          </a>
          <a
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-border-default bg-bg-card px-8 py-4 text-base font-medium text-text-primary hover:border-border-strong hover:bg-bg-elevated transition-all duration-200"
          >
            Book a Consult
          </a>
        </div>
      </div>
    </section>
  )
}

// =============================================
// PAGE
// =============================================

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <WorkSection />
      <BusinessSection />
      <TransformSection />
      <JourneySection />
      <SystemSection />
      <OutcomesSection />
      <ConfiguratorSection />
      <FinalCTASection />
    </main>
  )
}
