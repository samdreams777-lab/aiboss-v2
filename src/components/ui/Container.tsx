import { type ReactNode } from 'react'

/* =============================================
   CONTAINER — Design System Layout Component
   Provides consistent horizontal padding and max-width
   ============================================= */

interface ContainerProps {
  children: ReactNode
  className?: string
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full'
}

const sizeClasses: Record<NonNullable<ContainerProps['size']>, string> = {
  xs: 'max-w-container-xs',
  sm: 'max-w-container-sm',
  md: 'max-w-container-md',
  lg: 'max-w-container-lg',
  xl: 'max-w-container-xl',
  '2xl': 'max-w-container-2xl',
  full: 'max-w-full',
}

export function Container({ children, className = '', size = 'xl' }: ContainerProps) {
  return (
    <div className={`mx-auto w-full px-gutter-xs sm:px-gutter-sm md:px-gutter-md lg:px-gutter-lg ${sizeClasses[size]} ${className}`}>
      {children}
    </div>
  )
}

/* =============================================
   SECTION — Design System Section Component
   Provides consistent vertical padding
   ============================================= */

interface SectionProps {
  children: ReactNode
  className?: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
}

const sizeClassesSection: Record<NonNullable<SectionProps['size']>, string> = {
  sm: 'py-12 lg:py-16',
  md: 'py-16 lg:py-20',
  lg: 'py-20 lg:py-28',
  xl: 'py-24 lg:py-36',
}

export function Section({ children, className = '', size = 'lg' }: SectionProps) {
  return (
    <section className={`${sizeClassesSection[size]} ${className}`}>
      {children}
    </section>
  )
}
