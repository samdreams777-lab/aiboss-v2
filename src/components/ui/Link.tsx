import { type ReactNode } from 'react'
import { Link } from 'react-router'

/* =============================================
   LINK — Design System Core Component
   Semantic wrapper for React Router Link + external anchor
   ============================================= */

type LinkVariant = 'default' | 'accent' | 'muted' | 'external'

interface LinkProps {
  to?: string
  href?: string
  children: ReactNode
  className?: string
  variant?: LinkVariant
  'aria-label'?: string
}

const variantClasses: Record<LinkVariant, string> = {
  default: 'text-text-secondary hover:text-text-primary',
  accent: 'text-accent hover:text-accent-hover',
  muted: 'text-text-muted hover:text-text-secondary',
  external: 'text-text-secondary hover:text-text-primary',
}

export function NavLink({ to, href, children, className = '', variant = 'default', 'aria-label': ariaLabel }: LinkProps) {
  const classes = `inline-flex items-center gap-1 font-medium transition-colors duration-fast focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded ${variantClasses[variant]} ${className}`

  if (href) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer" aria-label={ariaLabel}>
        {children}
      </a>
    )
  }

  if (to) {
    return (
      <Link to={to} className={classes} aria-label={ariaLabel}>
        {children}
      </Link>
    )
  }

  return <span className={classes}>{children}</span>
}
