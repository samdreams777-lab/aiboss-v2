export function SolutionsPage() {
  const items = [
    { label: 'Cafes', to: '/solutions/cafes' },
    { label: 'Restaurants', to: '/solutions/restaurants' },
    { label: 'Beauty & Spa', to: '/solutions/beauty-spa' },
    { label: 'Dental & Medical', to: '/solutions/dental-medical' },
    { label: 'Real Estate', to: '/solutions/real-estate' },
    { label: 'Hospitality', to: '/solutions/hospitality' },
  ]

  return (
    <div className="min-h-[calc(100dvh-3.5rem)] px-gutter-xs py-16 sm:px-gutter-sm lg:px-gutter-lg">
      <div className="mx-auto max-w-container-lg">
        <h1 className="font-display text-5xl font-semibold text-text-primary tracking-tight mb-4">
          Solutions
        </h1>
        <p className="text-lg text-text-secondary">
          Choose your business type to see what AI B.O.S.S. can build for you.
        </p>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <a
              key={item.to}
              href={item.to}
              className="group rounded-xl border border-border-default bg-bg-card p-6 hover:border-border-accent hover:bg-bg-elevated transition-all duration-base"
            >
              <h2 className="text-xl font-semibold text-text-primary group-hover:text-accent transition-colors duration-fast">
                {item.label}
              </h2>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
