import type { ReactNode } from 'react'
import { SiteFooter } from '@/components/site-footer'

type SecondaryPageProps = {
  id: string
  label: string
  title: ReactNode
  description: ReactNode
  children: ReactNode
  onSupport?: () => void
}

export const cymCardClassName =
  'rounded-[32px] border border-border bg-card/86 shadow-[0_18px_55px_-38px_rgba(90,110,150,0.5)] backdrop-blur-xl'

export function SecondaryPage({
  id,
  label,
  title,
  description,
  children,
  onSupport,
}: SecondaryPageProps) {
  return (
    <section
      id={id}
      className="relative flex h-full flex-col overflow-y-auto overscroll-contain bg-transparent"
    >
      <div className="relative mx-auto flex min-h-full w-full max-w-6xl flex-1 flex-col px-6 py-10 sm:py-14 lg:py-16">
        <div className="mb-8 sm:mb-10">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.28em] text-crystal">
            {label}
          </p>

          <h2 className="font-serif text-[2.15rem] font-light leading-[1.08] tracking-tight text-foreground sm:text-5xl lg:text-[3.25rem]">
            {title}
          </h2>

          <div className="font-tc mt-4 max-w-xl text-[0.92rem] font-light leading-[1.85] tracking-[0.02em] text-muted-foreground sm:text-base">
            {description}
          </div>
        </div>

        {children}
      </div>

      <SiteFooter onSupport={onSupport} />
    </section>
  )
}
