export function SystemsPage() {
  const items = [
    { label: 'Website', to: '/systems/website' },
    { label: 'QR Menu', to: '/systems/qr-menu' },
    { label: 'AI Assistant', to: '/systems/ai-assistant' },
    { label: 'Automation', to: '/systems/automation' },
    { label: 'Analytics', to: '/systems/analytics' },
    { label: 'Loyalty', to: '/systems/loyalty' },
  ]

  return (
    <div className="min-h-[calc(100dvh-3.5rem)] px-gutter-xs py-16 sm:px-gutter-sm lg:px-gutter-lg">
      <div className="mx-auto max-w-container-lg">
        <h1 className="font-display text-5xl font-semibold text-text-primary tracking-tight mb-4">Systems</h1>
        <p className="text-lg text-text-secondary">Every touchpoint, connected.</p>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <a key={item.to} href={item.to} className="group rounded-xl border border-border-default bg-bg-card p-6 hover:border-border-accent hover:bg-bg-elevated transition-all duration-base">
              <h2 className="text-xl font-semibold text-text-primary group-hover:text-accent transition-colors duration-fast">{item.label}</h2>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
