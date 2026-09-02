import { useState } from 'react'
import { LanguageSwitcher } from './LanguageSwitcher'

const navItems = [
  { label: 'Solutions', to: '/solutions' },
  { label: 'Systems', to: '/systems' },
  { label: 'Work', to: '/work' },
  { label: 'Journey', to: '/journey' },
  { label: 'Knowledge', to: '/knowledge' },
  { label: 'About', to: '/about' },
]

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-[var(--z-sticky)] border-b border-border-subtle bg-bg-base/85 backdrop-blur-sm">
      <div className="mx-auto w-full max-w-container-2xl px-gutter-sm sm:px-gutter-md lg:px-gutter-lg">
        <div className="flex h-[3.5rem] items-center justify-between">

          {/* Logo */}
          <a
            href="/"
            className="flex items-center gap-2.5 font-display text-lg font-semibold text-text-primary hover:opacity-80 transition-opacity duration-fast"
            aria-label="AI B.O.S.S. — Home"
          >
            <svg width="28" height="28" viewBox="0 0 32 32" fill="none" aria-hidden="true">
              <rect width="32" height="32" rx="6" fill="var(--color-bg-card)" />
              <circle cx="16" cy="16" r="8" stroke="var(--color-accent)" strokeWidth="1.5" fill="none" />
              <circle cx="16" cy="16" r="3" fill="var(--color-accent)" />
            </svg>
            <span className="hidden sm:inline">AI B.O.S.S.</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-0.5" aria-label="Main navigation">
            {navItems.map((item) => (
              <a
                key={item.to}
                href={item.to}
                className="px-3 py-2 text-sm font-medium text-text-secondary hover:text-text-primary rounded-md hover:bg-bg-card transition-colors duration-fast"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <LanguageSwitcher />
            <a
              href="/contact"
              className="hidden sm:inline-flex items-center justify-center rounded-lg bg-accent px-4 py-1.5 text-sm font-semibold text-text-inverse shadow-accent hover:bg-accent-hover hover:shadow-accent-lg transition-all duration-base"
            >
              Build For My Business
            </a>

            {/* Mobile menu button */}
            <button
              type="button"
              className="lg:hidden p-2 text-text-secondary hover:text-text-primary rounded-md hover:bg-bg-card transition-colors duration-fast"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-expanded={mobileOpen}
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                  <path d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <nav className="lg:hidden border-t border-border-subtle py-3" aria-label="Mobile navigation">
            {navItems.map((item) => (
              <a
                key={item.to}
                href={item.to}
                className="block px-3 py-2.5 text-base font-medium text-text-secondary hover:text-text-primary rounded-md hover:bg-bg-card transition-colors duration-fast"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="/contact"
              className="mt-3 block mx-3 px-4 py-2.5 text-center rounded-lg bg-accent font-semibold text-text-inverse"
              onClick={() => setMobileOpen(false)}
            >
              Build For My Business
            </a>
          </nav>
        )}
      </div>
    </header>
  )
}
