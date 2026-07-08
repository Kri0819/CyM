export default function PrivacyPage() {
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
          隱私權政策
        </h1>

        <div className="mt-8 space-y-6 text-sm leading-[2]">
          <p>
            CyM 重視使用者的隱私。本政策說明本網站可能如何收集、使用與保護你提供的資訊。
          </p>

          <section>
            <h2 className="text-base font-medium text-foreground">
              我們可能收集的資料
            </h2>
            <p className="mt-2">
              當你使用「小麻煩收集箱」或主動聯絡 CyM 時，可能會提供你的困擾描述、使用情境、聯絡方式或其他你自行填寫的內容。
            </p>
          </section>

          <section>
            <h2 className="text-base font-medium text-foreground">
              資料用途
            </h2>
            <p className="mt-2">
              這些資料可能用於理解使用者需求、改善 CyM 的產品設計、回覆你的訊息，或作為未來小工具發想的參考。
            </p>
          </section>

          <section>
            <h2 className="text-base font-medium text-foreground">
              請勿提供敏感資訊
            </h2>
            <p className="mt-2">
              請不要在表單中填寫帳號密碼、身分證字號、完整住址、醫療診斷、金融資訊或其他過於私密的內容。
            </p>
          </section>

          <section>
            <h2 className="text-base font-medium text-foreground">
              第三方服務
            </h2>
            <p className="mt-2">
              本網站可能使用 Vercel、Supabase 或其他第三方服務進行網站部署、資料儲存與表單處理。
            </p>
          </section>

          <section>
            <h2 className="text-base font-medium text-foreground">
              聯絡方式
            </h2>
            <p className="mt-2">
              如需詢問、修改或刪除你提供的資料，請透過網站提供的聯絡方式與 CyM 聯繫。
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
