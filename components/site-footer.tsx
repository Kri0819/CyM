type SiteFooterProps = {
  onSupport?: () => void
}

export function SiteFooter({ onSupport }: SiteFooterProps) {
  return (
    <footer className="shrink-0 bg-background">
      <div className="mx-auto flex h-[76px] max-w-6xl items-center justify-between gap-6 px-6 text-sm text-muted-foreground">
        <div className="min-w-0">
          <p className="font-serif text-base leading-none text-foreground">
            CyM
          </p>
          <p className="mt-2 hidden font-tc text-xs leading-relaxed text-muted-foreground/70 sm:block">
            Clear the little things, so your Mind can rest.
          </p>
        </div>

        <nav className="font-tc flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs">
          <a
            href="/privacy"
            className="transition-colors duration-300 hover:text-foreground"
          >
            隱私權政策
          </a>

          <a
            href="/terms"
            className="transition-colors duration-300 hover:text-foreground"
          >
            使用條款
          </a>

          <button
            type="button"
            onClick={onSupport}
            className="transition-colors duration-300 hover:text-foreground"
          >
            聯絡 / 回報問題
          </button>
        </nav>

        <p className="hidden shrink-0 font-tc text-xs text-muted-foreground/60 sm:block">
          © {new Date().getFullYear()} CyM. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
