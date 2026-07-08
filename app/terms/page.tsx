export default function TermsPage() {
  return (
    <main className="min-h-screen bg-background px-6 py-16">
      <article className="font-tc mx-auto max-w-3xl text-muted-foreground">
        <a
          href="/"
          className="mb-10 inline-block text-sm text-crystal hover:text-foreground"
        >
          ← 回到 CyM
        </a>

        <h1 className="font-serif text-4xl font-light tracking-tight text-foreground">
          使用條款
        </h1>

        <div className="mt-8 space-y-6 text-sm leading-[2]">
          <p>
            歡迎使用 CyM。本網站展示由 CyM 製作的作品、工具與相關內容。使用本網站即表示你理解並同意以下條款。
          </p>

          <section>
            <h2 className="text-base font-medium text-foreground">
              服務性質
            </h2>
            <p className="mt-2">
              CyM 的作品多為個人開發的小工具，可能仍在測試、調整或概念階段。功能、內容與可用性可能隨時變更。
            </p>
          </section>

          <section>
            <h2 className="text-base font-medium text-foreground">
              不保證完全符合需求
            </h2>
            <p className="mt-2">
              CyM 會盡力讓工具好用、穩定，但不保證每項工具都能完全符合你的期待、情境或特定用途。
            </p>
          </section>

          <section>
            <h2 className="text-base font-medium text-foreground">
              使用者提供內容
            </h2>
            <p className="mt-2">
              當你透過表單提供困擾、想法或建議時，CyM 可能會將其作為產品發想、改善與整理方向的參考。
            </p>
          </section>

          <section>
            <h2 className="text-base font-medium text-foreground">
              外部連結
            </h2>
            <p className="mt-2">
              本網站可能連結至其他 CyM 作品、第三方網站或服務。外部網站的內容與政策由其各自服務提供者負責。
            </p>
          </section>

          <section>
            <h2 className="text-base font-medium text-foreground">
              條款更新
            </h2>
            <p className="mt-2">
              CyM 可能依照網站與作品狀態更新本條款，更新後會以網站公布內容為準。
            </p>
          </section>

          <p className="pt-6 text-xs text-muted-foreground/60">
            最後更新：2026 年 7 月
          </p>
        </div>
      </article>
    </main>
  )
}
