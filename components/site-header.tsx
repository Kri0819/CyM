const NAV_LINKS = [
  { label: 'Works' },
  { label: 'About' },
  { label: 'Support' },
]

type SiteHeaderProps = {
  showTagline?: boolean
  onHome?: () => void
  onExplore?: () => void
  onAbout?: () => void
  onSupport?: () => void
}

export function SiteHeader({
  showTagline = false,
  onHome,
  onExplore,
  onAbout,
  onSupport,
}: SiteHeaderProps) {
  return (
    <header className="relative z-30 w-full border-b border-border/40 bg-background/90 backdrop-blur-xl">
      <nav className="relative flex h-[72px] w-full items-center justify-between px-5 sm:h-[86px] sm:px-10 lg:px-12">
        <button
          type="button"
          onClick={onHome}
          className="font-serif text-xl font-medium tracking-tight text-foreground transition-opacity duration-300 hover:opacity-70 sm:text-2xl"
        >
          CyM
        </button>

        <div
          className={`pointer-events-none absolute left-1/2 hidden -translate-x-1/2 text-center transition-all duration-[850ms] ease-[cubic-bezier(0.22,1,0.36,1)] md:block ${
            showTagline
              ? 'translate-y-0 opacity-100'
              : 'translate-y-5 opacity-0'
          }`}
        >
          <p className="font-serif text-xl font-light leading-tight tracking-tight text-foreground lg:text-2xl">
            <span className="text-crystal/55">C</span>lear the little things, so{' '}
            <span className="text-crystal/55">y</span>our{' '}
            <span className="text-crystal/55">M</span>ind can rest.
          </p>
        </div>

        <ul className="flex items-center gap-5 text-sm text-muted-foreground sm:gap-8">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              {link.label === 'Works' ? (
                <button
                  type="button"
                  onClick={onExplore}
                  className="transition-colors duration-300 hover:text-foreground"
                >
                  Works
                </button>
              ) : link.label === 'About' ? (
                <button
                  type="button"
                  onClick={onAbout}
                  className="transition-colors duration-300 hover:text-foreground"
                >
                  About
                </button>
              ) : (
                <button
                  type="button"
                  onClick={onSupport}
                  className="transition-colors duration-300 hover:text-foreground"
                >
                  Support
                </button>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
