export function WorkPage() {
  const items = [
    { label: 'Camon Coffee', to: '/work/camon-coffee' },
    { label: 'Geum Cha', to: '/work/geum-cha' },
    { label: 'Seoul Korean Cuisine', to: '/work/seoul-korean-cuisine' },
    { label: "Lerin's Nook", to: '/work/lerins-nook' },
  ]
  return (
    <div className="min-h-[calc(100dvh-3.5rem)] px-gutter-xs py-16 sm:px-gutter-sm lg:px-gutter-lg">
      <div className="mx-auto max-w-container-lg">
        <h1 className="font-display text-5xl font-semibold text-text-primary tracking-tight mb-4">Selected Work</h1>
        <p className="text-lg text-text-secondary">Digital experiences we have built.</p>
        <div className="mt-12 grid gap-4 sm:grid-cols-2">
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