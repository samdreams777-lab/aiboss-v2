/* ================================================================
   Design System Showcase — /design-system
   Demonstrates the AI B.O.S.S. visual language
   ================================================================ */

export function DesignSystemPage() {
  return (
    <div className="min-h-[calc(100dvh-3.5rem)]">

      {/* =============================================
         SECTION: Typography
         ============================================= */}
      <section className="border-b border-border-subtle bg-bg-base px-gutter-xs py-16 sm:px-gutter-sm lg:px-gutter-lg">
        <div className="mx-auto max-w-container-lg">
          <p className="text-label mb-2">Design System</p>
          <h1 className="font-display text-4xl font-semibold text-text-primary tracking-tight mb-1">Typography</h1>
          <p className="text-sm text-text-muted mb-12">Plus Jakarta Sans for UI · Newsreader for display</p>

          {/* Display */}
          <div className="mb-12">
            <p className="text-label mb-3">Display</p>
            <p className="font-display text-7xl font-normal text-text-primary tracking-tight leading-tight">
              Premium digital<br />consultancy
            </p>
          </div>

          {/* Heading scale */}
          <div className="space-y-8 mb-12">
            <div>
              <p className="text-label mb-3">H1 — Newsreader Semibold</p>
              <p className="font-display text-5xl font-semibold text-text-primary tracking-tight leading-tight">
                Customer Journey System
              </p>
            </div>
            <div>
              <p className="text-label mb-3">H2 — Newsreader Semibold</p>
              <p className="font-display text-4xl font-semibold text-text-primary tracking-tight leading-snug">
                AI B.O.S.S. Platform
              </p>
            </div>
            <div>
              <p className="text-label mb-3">H3 — Sans Semibold</p>
              <p className="text-xl font-semibold text-text-primary tracking-tight leading-snug">
                Digital Transformation Services
              </p>
            </div>
            <div>
              <p className="text-label mb-3">H4 — Sans Semibold</p>
              <p className="text-lg font-semibold text-text-primary leading-snug">
                Small Business Solutions
              </p>
            </div>
          </div>

          {/* Body */}
          <div className="mb-12">
            <p className="text-label mb-3">Body Text — Plus Jakarta Sans Regular</p>
            <p className="text-base text-text-secondary leading-relaxed max-w-2xl">
              AI B.O.S.S. helps small and medium businesses across Vietnam connect Google,
              your website, menu, contact, visits and reviews into a single measurable
              system — improving every month. Vietnamese text: Cà phê sáng tạo, nhà hàng
              Việt Nam, dịch vụ làm đẹp.
            </p>
          </div>

          {/* Small / Caption / Label */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div>
              <p className="text-label mb-3">Label — Uppercase Sans Semibold</p>
              <p className="text-xs font-semibold uppercase tracking-widest text-text-muted">
                Phase 1 Foundation
              </p>
            </div>
            <div>
              <p className="text-label mb-3">Caption — Small Sans</p>
              <p className="text-xs text-text-muted">
                © 2026 AI B.O.S.S. · Vietnam
              </p>
            </div>
            <div>
              <p className="text-label mb-3">Small Text</p>
              <p className="text-sm text-text-secondary">
                Supporting information
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =============================================
         SECTION: Color
         ============================================= */}
      <section className="border-b border-border-subtle bg-bg-surface px-gutter-xs py-16 sm:px-gutter-sm lg:px-gutter-lg">
        <div className="mx-auto max-w-container-lg">
          <p className="text-label mb-2">Design System</p>
          <h2 className="font-display text-4xl font-semibold text-text-primary tracking-tight mb-1">Color</h2>
          <p className="text-sm text-text-muted mb-12">Warm precision — not cold SaaS blue</p>

          {/* Background */}
          <div className="mb-10">
            <p className="text-label mb-4">Background</p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { name: 'Base', token: '--color-bg-base', value: '#0a0a0f', text: '#f0ede8' },
                { name: 'Surface', token: '--color-bg-surface', value: '#111117', text: '#f0ede8' },
                { name: 'Card', token: '--color-bg-card', value: '#18181f', text: '#f0ede8' },
                { name: 'Elevated', token: '--color-bg-elevated', value: '#202028', text: '#f0ede8' },
              ].map((c) => (
                <div key={c.name} className="space-y-2">
                  <div className="h-20 rounded-lg border border-border-subtle p-3" style={{ backgroundColor: c.value }}>
                    <p className="text-xs font-semibold" style={{ color: c.text }}>{c.name}</p>
                  </div>
                  <p className="text-xs text-text-muted font-mono">{c.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Text */}
          <div className="mb-10">
            <p className="text-label mb-4">Text</p>
            <div className="grid grid-cols-3 gap-3">
              {[
                { name: 'Primary', token: '--color-text-primary', value: '#f0ede8', bg: '#18181f' },
                { name: 'Secondary', token: '--color-text-secondary', value: '#9e9a95', bg: '#18181f' },
                { name: 'Muted', token: '--color-text-muted', value: '#5e5c58', bg: '#18181f' },
              ].map((c) => (
                <div key={c.name} className="rounded-lg border border-border-subtle p-4" style={{ backgroundColor: c.bg }}>
                  <p className="text-sm mb-1">The quick brown fox</p>
                  <p className="text-xs" style={{ color: c.value }}>{c.name}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Accent */}
          <div className="mb-10">
            <p className="text-label mb-4">Accent — Warm Amber</p>
            <div className="grid grid-cols-4 gap-3">
              <div className="space-y-2">
                <div className="h-12 rounded-lg bg-accent flex items-center justify-center">
                  <span className="text-xs font-semibold text-text-inverse">Accent</span>
                </div>
                <p className="text-xs text-text-muted font-mono">#c9954a</p>
              </div>
              <div className="space-y-2">
                <div className="h-12 rounded-lg bg-accent-hover flex items-center justify-center">
                  <span className="text-xs font-semibold text-text-inverse">Hover</span>
                </div>
                <p className="text-xs text-text-muted font-mono">#d4a55c</p>
              </div>
              <div className="space-y-2">
                <div className="h-12 rounded-lg bg-accent-muted flex items-center justify-center border border-border-accent">
                  <span className="text-xs font-semibold text-accent">Muted</span>
                </div>
                <p className="text-xs text-text-muted font-mono">12% opacity</p>
              </div>
              <div className="space-y-2">
                <div className="h-12 rounded-lg bg-accent-subtle flex items-center justify-center border border-border-subtle">
                  <span className="text-xs text-accent">Subtle</span>
                </div>
                <p className="text-xs text-text-muted font-mono">6% opacity</p>
              </div>
            </div>
          </div>

          {/* Functional */}
          <div className="mb-10">
            <p className="text-label mb-4">Functional</p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { name: 'Success', value: '#6bb87a', bg: 'rgba(107,184,122,0.12)', border: 'rgba(107,184,122,0.3)' },
                { name: 'Warning', value: '#d4a55c', bg: 'rgba(212,165,92,0.12)', border: 'rgba(212,165,92,0.3)' },
                { name: 'Error', value: '#c4624a', bg: 'rgba(196,98,74,0.12)', border: 'rgba(196,98,74,0.3)' },
                { name: 'Info', value: '#7a9bb8', bg: 'rgba(122,155,184,0.12)', border: 'rgba(122,155,184,0.3)' },
              ].map((c) => (
                <div key={c.name} className="space-y-2">
                  <div className="h-12 rounded-lg border flex items-center justify-center" style={{ backgroundColor: c.bg, borderColor: c.border }}>
                    <span className="text-xs font-semibold" style={{ color: c.value }}>{c.name}</span>
                  </div>
                  <p className="text-xs text-text-muted font-mono">{c.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Borders */}
          <div>
            <p className="text-label mb-4">Borders</p>
            <div className="grid grid-cols-3 gap-3">
              {[
                { name: 'Subtle', token: 'rgba(240,237,232,0.06)' },
                { name: 'Default', token: 'rgba(240,237,232,0.10)' },
                { name: 'Strong', token: 'rgba(240,237,232,0.18)' },
              ].map((b) => (
                <div key={b.name} className="space-y-2">
                  <div className="h-12 rounded-lg border" style={{ borderColor: b.token }} />
                  <p className="text-xs text-text-muted truncate">{b.token}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =============================================
         SECTION: Buttons
         ============================================= */}
      <section className="border-b border-border-subtle bg-bg-base px-gutter-xs py-16 sm:px-gutter-sm lg:px-gutter-lg">
        <div className="mx-auto max-w-container-lg">
          <p className="text-label mb-2">Design System</p>
          <h2 className="font-display text-4xl font-semibold text-text-primary tracking-tight mb-12">Buttons</h2>

          {/* Variants */}
          <div className="space-y-10">
            <div>
              <p className="text-label mb-4">Primary</p>
              <div className="flex flex-wrap gap-3">
                <button className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-text-inverse shadow-accent hover:bg-accent-hover hover:shadow-accent-lg transition-all duration-base">
                  Default
                </button>
                <button className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent-hover px-4 py-2 text-sm font-semibold text-text-inverse shadow-accent-lg transition-all duration-base">
                  Hover
                </button>
                <button className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-text-inverse shadow-accent opacity-50 cursor-not-allowed transition-all duration-base">
                  Disabled
                </button>
              </div>
            </div>

            <div>
              <p className="text-label mb-4">Secondary</p>
              <div className="flex flex-wrap gap-3">
                <button className="inline-flex items-center justify-center gap-2 rounded-lg border border-border-default bg-bg-card px-4 py-2 text-sm font-medium text-text-primary hover:border-border-strong hover:bg-bg-elevated transition-all duration-base">
                  Default
                </button>
                <button className="inline-flex items-center justify-center gap-2 rounded-lg border border-border-strong bg-bg-elevated px-4 py-2 text-sm font-medium text-text-primary transition-all duration-base">
                  Hover
                </button>
              </div>
            </div>

            <div>
              <p className="text-label mb-4">Ghost</p>
              <div className="flex flex-wrap gap-3">
                <button className="inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-text-secondary hover:text-text-primary hover:bg-bg-card transition-all duration-base">
                  Default
                </button>
                <button className="inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-text-primary bg-bg-card transition-all duration-base">
                  Hover
                </button>
              </div>
            </div>

            <div>
              <p className="text-label mb-4">Text Link</p>
              <div className="flex flex-wrap gap-3">
                <a href="#" className="inline-flex items-center text-sm font-medium text-accent hover:text-accent-hover transition-colors duration-fast underline-offset-2 hover:underline">
                  Text Link
                </a>
                <a href="#" className="inline-flex items-center text-sm font-medium text-accent-hover transition-colors duration-fast underline">
                  Hovered
                </a>
              </div>
            </div>

            <div>
              <p className="text-label mb-4">Sizes</p>
              <div className="flex flex-wrap items-center gap-3">
                <button className="inline-flex items-center justify-center rounded-lg bg-accent px-3 py-1.5 text-xs font-semibold text-text-inverse shadow-accent hover:bg-accent-hover transition-all duration-base">
                  Small
                </button>
                <button className="inline-flex items-center justify-center rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-text-inverse shadow-accent hover:bg-accent-hover transition-all duration-base">
                  Medium
                </button>
                <button className="inline-flex items-center justify-center rounded-lg bg-accent px-6 py-3 text-base font-semibold text-text-inverse shadow-accent hover:bg-accent-hover transition-all duration-base">
                  Large
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =============================================
         SECTION: Surfaces
         ============================================= */}
      <section className="border-b border-border-subtle bg-bg-surface px-gutter-xs py-16 sm:px-gutter-sm lg:px-gutter-lg">
        <div className="mx-auto max-w-container-lg">
          <p className="text-label mb-2">Design System</p>
          <h2 className="font-display text-4xl font-semibold text-text-primary tracking-tight mb-12">Surfaces</h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="rounded-xl border border-border-subtle bg-bg-base p-6">
              <p className="text-label mb-1">Base</p>
              <p className="text-xs text-text-muted font-mono">bg-bg-base</p>
            </div>
            <div className="rounded-xl border border-border-subtle bg-bg-surface p-6">
              <p className="text-label mb-1">Surface</p>
              <p className="text-xs text-text-muted font-mono">bg-bg-surface</p>
            </div>
            <div className="rounded-xl border border-border-default bg-bg-card p-6">
              <p className="text-label mb-1">Card</p>
              <p className="text-xs text-text-muted font-mono">bg-bg-card + border</p>
            </div>
            <div className="rounded-xl border border-border-default bg-bg-card p-6 hover:border-border-accent hover:bg-bg-elevated transition-all duration-base">
              <p className="text-label mb-1">Card Hover</p>
              <p className="text-xs text-text-muted">hover:bg-bg-elevated</p>
            </div>
            <div className="rounded-xl border border-border-default bg-bg-elevated p-6">
              <p className="text-label mb-1">Elevated</p>
              <p className="text-xs text-text-muted font-mono">bg-bg-elevated</p>
            </div>
            <div className="rounded-xl border border-border-accent bg-accent-muted p-6">
              <p className="text-label mb-1">Accent Muted</p>
              <p className="text-xs text-text-muted font-mono">bg-accent-muted</p>
            </div>
          </div>
        </div>
      </section>

      {/* =============================================
         SECTION: Cards (used in Solutions, Systems, Work)
         ============================================= */}
      <section className="border-b border-border-subtle bg-bg-base px-gutter-xs py-16 sm:px-gutter-sm lg:px-gutter-lg">
        <div className="mx-auto max-w-container-lg">
          <p className="text-label mb-2">Design System</p>
          <h2 className="font-display text-4xl font-semibold text-text-primary tracking-tight mb-12">Cards</h2>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {/* Default card */}
            <a href="#" className="group rounded-xl border border-border-default bg-bg-card p-6 hover:border-border-accent hover:bg-bg-elevated transition-all duration-base">
              <p className="text-label mb-2">Default Card</p>
              <h3 className="text-lg font-semibold text-text-primary group-hover:text-accent transition-colors duration-fast">
                Cafes
              </h3>
              <p className="text-sm text-text-muted mt-1">Default state</p>
            </a>

            {/* Card with icon */}
            <a href="#" className="group rounded-xl border border-border-default bg-bg-card p-6 hover:border-border-accent hover:bg-bg-elevated transition-all duration-base">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-accent-muted">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-accent">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </svg>
              </div>
              <p className="text-label mb-2">Card with Icon</p>
              <h3 className="text-lg font-semibold text-text-primary group-hover:text-accent transition-colors duration-fast">
                AI Assistant
              </h3>
              <p className="text-sm text-text-muted mt-1">With visual indicator</p>
            </a>

            {/* Accent card */}
            <a href="#" className="group rounded-xl border border-border-accent bg-accent-muted p-6 hover:bg-accent-subtle transition-all duration-base">
              <p className="text-label mb-2 text-accent">Featured</p>
              <h3 className="text-lg font-semibold text-text-primary">
                Customer Journey
              </h3>
              <p className="text-sm text-text-secondary mt-1">Accent-muted background</p>
            </a>

            {/* Navigation card */}
            <a href="#" className="group flex items-center gap-4 rounded-xl border border-border-default bg-bg-card p-5 hover:border-border-accent hover:bg-bg-elevated transition-all duration-base">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-bg-elevated text-accent">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-text-primary group-hover:text-accent transition-colors duration-fast">Homepage</h3>
                <p className="text-xs text-text-muted">Primary navigation</p>
              </div>
            </a>

            {/* List item card */}
            <a href="#" className="group flex items-center gap-4 rounded-xl border border-border-default bg-bg-card p-5 hover:border-border-accent hover:bg-bg-elevated transition-all duration-base">
              <span className="text-sm font-semibold text-accent w-6 shrink-0">01</span>
              <div>
                <h3 className="font-semibold text-text-primary group-hover:text-accent transition-colors duration-fast">Discover</h3>
                <p className="text-xs text-text-muted">Journey step</p>
              </div>
            </a>

            {/* Compact card */}
            <div className="rounded-xl border border-border-default bg-bg-card p-4">
              <p className="text-label mb-1">Compact Card</p>
              <p className="text-xs text-text-muted">For dense layouts</p>
            </div>
          </div>
        </div>
      </section>

      {/* =============================================
         SECTION: Animation & Motion
         ============================================= */}
      <section className="border-b border-border-subtle bg-bg-surface px-gutter-xs py-16 sm:px-gutter-sm lg:px-gutter-lg">
        <div className="mx-auto max-w-container-lg">
          <p className="text-label mb-2">Design System</p>
          <h2 className="font-display text-4xl font-semibold text-text-primary tracking-tight mb-12">Motion</h2>

          <div className="space-y-6">
            <div>
              <p className="text-label mb-4">Fade In</p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="rounded-lg border border-border-default bg-bg-card p-4 text-center">
                  <div className="h-8 bg-bg-elevated rounded mb-2 animate-fade-in" />
                  <p className="text-xs text-text-muted">fast 120ms</p>
                </div>
                <div className="rounded-lg border border-border-default bg-bg-card p-4 text-center">
                  <div className="h-8 bg-bg-elevated rounded mb-2 animate-fade-in" style={{ animationDuration: '200ms' }} />
                  <p className="text-xs text-text-muted">base 200ms</p>
                </div>
                <div className="rounded-lg border border-border-default bg-bg-card p-4 text-center">
                  <div className="h-8 bg-bg-elevated rounded mb-2 animate-fade-in" style={{ animationDuration: '320ms' }} />
                  <p className="text-xs text-text-muted">slow 320ms</p>
                </div>
                <div className="rounded-lg border border-border-default bg-bg-card p-4 text-center">
                  <div className="h-8 bg-bg-elevated rounded mb-2 animate-fade-up" style={{ animationDuration: '320ms' }} />
                  <p className="text-xs text-text-muted">fade-up 320ms</p>
                </div>
              </div>
            </div>

            <div>
              <p className="text-label mb-4">Transition Tokens</p>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { name: 'instant', ms: '50ms' },
                  { name: 'fast', ms: '120ms' },
                  { name: 'base', ms: '200ms' },
                  { name: 'slow', ms: '320ms' },
                  { name: 'slower', ms: '500ms' },
                  { name: 'slowest', ms: '800ms' },
                ].map((t) => (
                  <div key={t.name} className="rounded-lg border border-border-default bg-bg-card p-3 text-center">
                    <p className="text-xs font-semibold text-text-primary mb-1">{t.name}</p>
                    <p className="text-xs text-text-muted font-mono">{t.ms}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p className="text-label mb-4">Easing</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {[
                  { name: 'linear', preview: 'linear' },
                  { name: 'ease-in', preview: 'cubic-bezier(0.4,0,1,1)' },
                  { name: 'ease-out', preview: 'cubic-bezier(0,0,0.2,1)' },
                  { name: 'ease-in-out', preview: 'cubic-bezier(0.4,0,0.2,1)' },
                  { name: 'spring', preview: 'cubic-bezier(0.34,1.56,0.64,1)' },
                  { name: 'bounce', preview: 'cubic-bezier(0.34,1.2,0.64,1)' },
                ].map((e) => (
                  <div key={e.name} className="rounded-lg border border-border-default bg-bg-card p-3">
                    <p className="text-xs font-semibold text-text-primary mb-1">{e.name}</p>
                    <p className="text-xs text-text-muted font-mono truncate">{e.preview}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =============================================
         SECTION: Layout
         ============================================= */}
      <section className="border-b border-border-subtle bg-bg-base px-gutter-xs py-16 sm:px-gutter-sm lg:px-gutter-lg">
        <div className="mx-auto max-w-container-lg">
          <p className="text-label mb-2">Design System</p>
          <h2 className="font-display text-4xl font-semibold text-text-primary tracking-tight mb-12">Layout</h2>

          <div className="space-y-8">
            <div>
              <p className="text-label mb-4">Container widths</p>
              <div className="space-y-3">
                {['xs: 320px', 'sm: 640px', 'md: 768px', 'lg: 1024px', 'xl: 1280px', '2xl: 1440px'].map((c) => (
                  <div key={c} className="flex items-center gap-4">
                    <div className="h-4 rounded bg-accent-muted border border-border-accent shrink-0" style={{ width: parseInt(c.split(':')[0].trim() === 'xs' ? '32' : c.split(':')[0].trim() === 'sm' ? '64' : c.split(':')[0].trim() === 'md' ? '76' : c.split(':')[0].trim() === 'lg' ? '102' : c.split(':')[0].trim() === 'xl' ? '128' : '144') }} />
                    <p className="text-xs font-mono text-text-muted">{c}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p className="text-label mb-4">Gutters</p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { name: 'gutter-xs', value: '12px' },
                  { name: 'gutter-sm', value: '16px' },
                  { name: 'gutter-md', value: '24px' },
                  { name: 'gutter-lg', value: '32px' },
                ].map((g) => (
                  <div key={g.name} className="rounded-lg border border-border-default bg-bg-card p-3">
                    <p className="text-xs font-semibold text-text-primary mb-1">--{g.name}</p>
                    <p className="text-xs text-text-muted font-mono">{g.value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p className="text-label mb-4">Border Radius</p>
              <div className="flex flex-wrap gap-3">
                {[
                  { name: 'sm: 4px', r: '4px' },
                  { name: 'md: 6px', r: '6px' },
                  { name: 'lg: 8px', r: '8px' },
                  { name: 'xl: 12px', r: '12px' },
                  { name: '2xl: 16px', r: '16px' },
                  { name: '3xl: 24px', r: '24px' },
                ].map((rad) => (
                  <div key={rad.name} className="flex flex-col items-center gap-2">
                    <div className="h-10 w-16 bg-accent-muted border border-border-accent" style={{ borderRadius: rad.r }} />
                    <p className="text-xs text-text-muted font-mono">{rad.name.split(':')[1]}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =============================================
         SECTION: Responsive Behavior
         ============================================= */}
      <section className="bg-bg-surface px-gutter-xs py-16 sm:px-gutter-sm lg:px-gutter-lg">
        <div className="mx-auto max-w-container-lg">
          <p className="text-label mb-2">Design System</p>
          <h2 className="font-display text-4xl font-semibold text-text-primary tracking-tight mb-4">Responsive</h2>
          <p className="text-sm text-text-muted mb-12">Test your viewport to see responsive behavior</p>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {[
              { label: '320px', breakpoint: 'xs' },
              { label: '375px', breakpoint: 'xs' },
              { label: '390px', breakpoint: 'xs' },
              { label: '430px', breakpoint: 'sm' },
              { label: '768px', breakpoint: 'md' },
              { label: '1024px+', breakpoint: 'lg' },
            ].map((bp) => (
              <div key={bp.label} className="rounded-lg border border-border-default bg-bg-card p-3 text-center">
                <p className="text-sm font-semibold text-text-primary">{bp.label}</p>
                <p className="text-xs text-text-muted">{bp.breakpoint}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
