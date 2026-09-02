export function LanguageSwitcher() {
  return (
    <div className="flex items-center rounded-lg border border-border-default bg-bg-card p-0.5">
      <button
        className="px-2.5 py-1 text-xs font-semibold rounded-md bg-accent text-text-inverse transition-all duration-fast"
        aria-current="true"
      >
        VI
      </button>
      <button
        className="px-2.5 py-1 text-xs font-semibold text-text-muted rounded-md hover:text-text-secondary transition-all duration-fast"
      >
        EN
      </button>
    </div>
  )
}
