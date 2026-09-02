export function PlaceholderPage({ title = 'Page' }: { title?: string }) {
  return (
    <div className="min-h-[calc(100dvh-3.5rem)] px-gutter-xs py-16 sm:px-gutter-sm lg:px-gutter-lg">
      <div className="mx-auto max-w-container-lg">
        <h1 className="font-display text-4xl font-semibold text-text-primary tracking-tight mb-4">
          {title}
        </h1>
        <p className="text-text-secondary">
          Phase 1 Foundation — full page in later phases
        </p>
      </div>
    </div>
  )
}
