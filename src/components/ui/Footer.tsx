import { Link } from 'react-router'

const footerNav = [
  { label: 'Solutions', to: '/solutions' },
  { label: 'Systems', to: '/systems' },
  { label: 'Work', to: '/work' },
  { label: 'Journey', to: '/journey' },
  { label: 'Knowledge', to: '/knowledge' },
  { label: 'About', to: '/about' },
]

export function Footer() {
  return (
    <footer className="border-t border-border-subtle bg-bg-surface mt-auto">
      <div className="mx-auto w-full max-w-container-2xl px-gutter-sm sm:px-gutter-md lg:px-gutter-lg py-12 lg:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">

          {/* Brand */}
          <div>
            <Link
              to="/"
              className="inline-flex items-center gap-2.5 font-display text-lg font-semibold text-text-primary mb-4"
            >
              <svg width="24" height="24" viewBox="0 0 32 32" fill="none" aria-hidden="true">
                <rect width="32" height="32" rx="6" fill="var(--color-bg-elevated)" />
                <circle cx="16" cy="16" r="8" stroke="var(--color-accent)" strokeWidth="1.5" fill="none" />
                <circle cx="16" cy="16" r="3" fill="var(--color-accent)" />
              </svg>
              <span>AI B.O.S.S.</span>
            </Link>
            <p className="text-sm text-text-muted leading-relaxed max-w-[280px]">
              Digital transformation for small and medium businesses across Vietnam.
            </p>
          </div>

          {/* Navigation */}
          <nav aria-label="Footer navigation" className="md:col-start-3">
            <p className="text-xs font-semibold uppercase tracking-widest text-text-muted mb-4">
              Navigation
            </p>
            <ul className="space-y-2">
              {footerNav.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="text-sm text-text-secondary hover:text-text-primary transition-colors duration-fast"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div className="md:col-start-2 md:row-start-1">
            <p className="text-xs font-semibold uppercase tracking-widest text-text-muted mb-4">
              Contact
            </p>
            <a
              href="mailto:hello@aiboss.vn"
              className="text-sm text-accent hover:text-accent-hover transition-colors duration-fast"
            >
              hello@aiboss.vn
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border-subtle flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="text-xs text-text-muted">
            © 2026 AI B.O.S.S. All rights reserved.
          </p>
          <p className="text-xs text-text-muted">
            Vietnam · Southeast Asia
          </p>
        </div>
      </div>
    </footer>
  )
}
