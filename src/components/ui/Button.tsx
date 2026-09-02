import { type ReactNode, type ButtonHTMLAttributes } from 'react'
import { Link } from 'react-router'

/* =============================================
   BUTTON — Design System Core Component
   Variants: primary (accent), secondary (card), ghost, text
   ============================================= */

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'text'
type ButtonSize = 'sm' | 'md' | 'lg'

interface BaseButtonProps {
  variant?: ButtonVariant
  size?: ButtonSize
  children: ReactNode
  className?: string
  loading?: boolean
}

type ButtonAsButton = BaseButtonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { to?: undefined }

type ButtonAsLink = BaseButtonProps & { to: string; href?: never; onClick?: never; type?: never; disabled?: never }

type ButtonProps = ButtonAsButton | ButtonAsLink

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-accent text-text-inverse font-semibold shadow-accent hover:bg-accent-hover hover:shadow-accent-lg active:scale-[0.98]',
  secondary:
    'bg-bg-card text-text-primary border border-border-default hover:border-border-strong hover:bg-bg-elevated active:scale-[0.98]',
  ghost:
    'bg-transparent text-text-secondary hover:text-text-primary hover:bg-bg-card active:scale-[0.98]',
  text:
    'bg-transparent text-accent hover:text-accent-hover underline-offset-2 hover:underline active:scale-[0.98]',
}

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'px-3 py-1.5 text-xs gap-1.5',
  md: 'px-4 py-2 text-sm gap-2',
  lg: 'px-6 py-3 text-base gap-2.5',
}

export function Button({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  loading = false,
  ...props
}: ButtonProps) {
  const baseClasses = `inline-flex items-center justify-center font-medium rounded-lg transition-all duration-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg-base disabled:opacity-50 disabled:cursor-not-allowed disabled:active:scale-100 ${variantClasses[variant]} ${sizeClasses[size]} ${className}`

  const content = (
    <>
      {loading && (
        <svg className="animate-spin" width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" strokeOpacity="0.25" />
          <path d="M12 2a10 10 0 0 1 10 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        </svg>
      )}
      {children}
    </>
  )

  if ('to' in props && props.to) {
    return (
      <Link to={props.to} className={baseClasses}>
        {content}
      </Link>
    )
  }

  return (
    <button
      className={baseClasses}
      disabled={loading || ('disabled' in props && props.disabled)}
      {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {content}
    </button>
  )
}
