import { SecondaryPage, cymCardClassName } from '@/components/secondary-page'

export function AboutSection() {
  return (
    <SecondaryPage
  id="about"
  label="About"
  title={
    <>
      <span className="block">Built from the small things</span>
      <span className="block">I got tired of keeping in mind.</span>
    </>
  }
  description={
    <>
      <p>CyM 不是公司，它比較像一個安靜的作品收藏處。</p>
      <p>這裡放著我從真實生活裡慢慢做出來的小工具。</p>
    </>
  }
>
      <div className={`${cymCardClassName} p-7 sm:p-9`}>
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
          <div>
            <p className="font-serif text-[2rem] font-light leading-[1.12] tracking-tight text-foreground sm:text-4xl">
              Origin
            </p>

            <p className="font-serif mt-8 text-xl font-light leading-tight text-foreground/80">
              <span className="text-crystal/60">C</span>lear the little things,
              so <span className="text-crystal/60">y</span>our{' '}
              <span className="text-crystal/60">M</span>ind can rest.
            </p>
          </div>

          <div className="font-tc space-y-5 text-[0.95rem] font-light leading-[2] tracking-[0.02em] text-muted-foreground sm:text-base">
            <p>
              CyM 原本只是我的名字縮寫，
              後來慢慢變成一個放作品的地方。
            </p>

            <p>
              這些產品不是為了追趕潮流而做，
              而是來自生活裡真的遇到的麻煩：
              忘記報銷、忘記吃藥、忘記聯絡，
              不知道現在能不能打擾對方，
              或是想把某些事情好好整理起來。
            </p>

            <p>
              我把那些需要一直記住、一直整理、一直分心的小事，
              慢慢做成一個個產品。
            </p>

            <p>
              如果它們能讓生活少一點混亂，
              少一點負擔，
              那就已經很好了。
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          <div className="rounded-[24px] border border-border bg-background/55 p-5">
            <h3 className="font-tc text-sm font-medium text-foreground">
              真實問題
            </h3>
            <p className="font-tc mt-2 text-sm leading-relaxed text-muted-foreground">
              每個產品都從生活裡真的遇到的麻煩開始。
            </p>
          </div>

          <div className="rounded-[24px] border border-border bg-background/55 p-5">
            <h3 className="font-tc text-sm font-medium text-foreground">
              安靜工具
            </h3>
            <p className="font-tc mt-2 text-sm leading-relaxed text-muted-foreground">
              不是為了讓你做更多事，而是讓你少記一點。
            </p>
          </div>

          <div className="rounded-[24px] border border-border bg-background/55 p-5">
            <h3 className="font-tc text-sm font-medium text-foreground">
              一個人慢慢做
            </h3>
            <p className="font-tc mt-2 text-sm leading-relaxed text-muted-foreground">
              設計、開發、測試與整理，都由 CyM 慢慢完成。
            </p>
          </div>
        </div>
      </div>
    </SecondaryPage>
  )
}
