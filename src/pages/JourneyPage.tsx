const steps = ['Discover', 'Website', 'Menu / Service', 'Contact', 'Visit', 'Review', 'Return']
export function JourneyPage() {
  return (
    <div className="min-h-[calc(100dvh-3.5rem)] px-gutter-xs py-16 sm:px-gutter-sm lg:px-gutter-lg">
      <div className="mx-auto max-w-container-lg">
        <h1 className="font-display text-5xl font-semibold text-text-primary tracking-tight mb-4">The Customer Journey</h1>
        <p className="text-lg text-text-secondary mb-12">Seven stages, one connected loop.</p>
        <div className="space-y-3">
          {steps.map((step, i) => (
            <div key={step} className="flex items-center gap-5 rounded-xl border border-border-default bg-bg-card px-6 py-5">
              <span className="text-sm font-semibold text-accent w-7 shrink-0">{String(i + 1).padStart(2, '0')}</span>
              <span className="text-lg font-medium text-text-primary">{step}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}