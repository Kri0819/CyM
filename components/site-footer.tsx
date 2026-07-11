type SiteFooterProps = {
  onSupport?: () => void
}

export function SiteFooter({ onSupport }: SiteFooterProps) {
  return (
    <footer className="shrink-0 bg-background">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-2 px-6 py-5 text-sm text-muted-foreground">
        <nav className="font-tc flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs">
          <a
            href="/terms"
            className="transition-colors duration-300 hover:text-foreground"
          >
            使用條款
          </a>

          <a
            href="/privacy"
            className="transition-colors duration-300 hover:text-foreground"
          >
            隱私權政策
          </a>

          <button
            type="button"
            onClick={onSupport}
            className="transition-colors duration-300 hover:text-foreground"
          >
            聯絡 / 回報問題
          </button>
        </nav>

        <span className="text-xs text-muted-foreground/60">
          © {new Date().getFullYear()} CyM. All rights reserved.
        </span>
      </div>
    </footer>
  )
}
