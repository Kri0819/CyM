import { FragmentScatter, FragmentStack } from '@/components/hero-composition'

type HeroProps = {
  onExplore?: () => void
  onAbout?: () => void
}

export function Hero({ onExplore, onAbout  }: HeroProps) {
  return (
    <section className="cym-noise relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,var(--ice)_0%,transparent_42%)] opacity-70"
      />

 <div className="relative mx-auto min-h-[calc(100svh-86px)] max-w-6xl px-6 pb-10 pt-10 sm:pb-24 sm:pt-20">
        <FragmentScatter />

        <div className="relative z-10 mx-auto flex max-w-[340px] flex-col items-center text-center py-10 sm:max-w-2xl sm:py-14 lg:pt-32 lg:pb-24 xl:pt-48 xl:pb-36">
  <div
    aria-hidden="true"
    className="pointer-events-none absolute -inset-x-16 -inset-y-10 -z-10 rounded-full bg-[radial-gradient(ellipse,rgba(255,255,255,0.88)_0%,rgba(255,255,255,0.62)_42%,transparent_72%)] blur-2xl"
  />
          <p
            className="cym-fade-up mb-6 text-xs font-medium uppercase tracking-[0.28em] text-muted-foreground"
            style={{ animationDelay: '0.1s' }}
          >
            Independent Developer
          </p>

          <h1
            className="cym-fade-up font-serif text-[2.45rem] font-light leading-[1.06] tracking-tight text-foreground sm:text-[3.4rem] md:text-[4.25rem] xl:text-7xl"
            style={{ animationDelay: '0.2s' }}
          >
            <span className="block whitespace-nowrap">
              <span className="text-crystal/60">C</span>lear the little things,
            </span>
            <span className="block whitespace-nowrap">
              so <span className="text-crystal/60">y</span>our{' '}
              <span className="text-crystal/60">M</span>ind can rest.
            </span>
          </h1>

          <p
            className="cym-fade-up font-tc mt-5 max-w-[19rem] text-center text-[0.88rem] font-light leading-[1.9] tracking-[0.02em] text-muted-foreground/62 sm:mt-8 sm:max-w-md sm:text-lg sm:leading-relaxed sm:text-muted-foreground"
            style={{ animationDelay: '0.32s' }}
          >
            <span className="block">把生活裡那些一直佔著腦袋的小事，</span>
            <span className="block">交給 CyM 慢慢整理。</span>
          </p>

          <div 
            className="cym-fade-up mt-8 flex flex-row items-center justify-center gap-2.5 sm:mt-11 sm:gap-4"
            style={{ animationDelay: '0.44s' }}
          >
            <button
              type="button"
              onClick={onExplore}
              className="font-tc inline-flex h-9 min-w-[108px] items-center justify-center rounded-full bg-primary px-4 text-[0.82rem] text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 sm:h-12 sm:min-w-[132px] sm:px-8 sm:text-sm"
            >
              探索作品
            </button>

            <button
              type="button"
              onClick={onAbout}
              className="font-tc inline-flex h-9 min-w-[108px] items-center justify-center rounded-full border border-border bg-card px-4 text-[0.82rem] text-foreground transition-colors duration-300 hover:bg-secondary sm:h-12 sm:min-w-[132px] sm:px-8 sm:text-sm"
            >
              關於 CyM
            </button>
          </div>
        </div>

        <FragmentStack />
      </div>
    </section>
  )
}

