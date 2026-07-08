export function SiteFooter() {
  return (
    <footer className="border-t border-border/50 bg-background/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-serif text-lg text-foreground">CyM</p>
          <p className="mt-1 font-tc text-xs leading-relaxed text-muted-foreground/70">
            Clear the little things, so your Mind can rest.
          </p>
        </div>

        <nav className="font-tc flex flex-wrap gap-x-5 gap-y-2 text-xs">
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

          <a
            href="mailto:chiyum2000@gmail.com"
            className="transition-colors duration-300 hover:text-foreground"
          >
            聯絡 / 回報問題
          </a>
        </nav>

        <p className="font-tc text-xs text-muted-foreground/60">
          © {new Date().getFullYear()} CyM. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
