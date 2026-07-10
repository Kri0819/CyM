'use client'

import { useRef, useState } from 'react'
import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { WorksSection } from '@/components/works-section'
import { AboutSection } from '@/components/about-section'
import { SupportSection } from '@/components/support-section'
import { SiteFooter } from '@/components/site-footer'

type PageView = 'home' | 'works' | 'about' | 'support'

export function HomePage() {
  const [view, setView] = useState<PageView>('home')
  const worksScrollRef = useRef<HTMLDivElement | null>(null)
  const aboutScrollRef = useRef<HTMLDivElement | null>(null)
  const supportScrollRef = useRef<HTMLDivElement | null>(null)

  function handleHome() {
    setView('home')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  function handleExplore() {
    worksScrollRef.current?.scrollTo({ top: 0 })
    setView('works')
  }

  function handleAbout() {
    aboutScrollRef.current?.scrollTo({ top: 0 })
    setView('about')
  }

  function handleSupport() {
    supportScrollRef.current?.scrollTo({ top: 0 })
    setView('support')
  }

  const isHome = view === 'home'

  return (
    <main className="relative flex h-dvh flex-col overflow-hidden bg-background">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 left-1/2 h-[500px] w-[720px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse,var(--ice)_0%,transparent_70%)] opacity-60 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[420px] w-[520px] rounded-full bg-[radial-gradient(ellipse,var(--lavender)_0%,transparent_70%)] opacity-50 blur-3xl" />
      </div>

      <SiteHeader
        showTagline={!isHome}
        onHome={handleHome}
        onExplore={handleExplore}
        onAbout={handleAbout}
        onSupport={handleSupport}
      />

      <div className="relative min-h-0 flex-1 overflow-hidden bg-[linear-gradient(180deg,var(--ice)_0%,var(--background)_38%,var(--background)_100%)]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-0 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse,var(--crystal-soft)_0%,transparent_70%)] opacity-25 blur-3xl"
        />

        <div
          className={`absolute inset-0 overflow-hidden transform-gpu transition-transform duration-[950ms] ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform ${
            isHome
              ? 'z-20 translate-y-0 pointer-events-auto'
              : 'z-0 -translate-y-full pointer-events-none'
          }`}
        >
          <Hero onExplore={handleExplore} onAbout={handleAbout} />
        </div>

        <div
          ref={worksScrollRef}
          className={`absolute inset-0 overflow-y-auto overscroll-contain transform-gpu transition-transform duration-[950ms] ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform ${
            view === 'works'
              ? 'z-20 translate-y-0 pointer-events-auto'
              : 'z-0 translate-y-full pointer-events-none'
          }`}
        >
          <WorksSection />
        </div>

        <div
          ref={aboutScrollRef}
          className={`absolute inset-0 overflow-y-auto overscroll-contain transform-gpu transition-transform duration-[950ms] ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform ${
            view === 'about'
              ? 'z-20 translate-y-0 pointer-events-auto'
              : 'z-0 translate-y-full pointer-events-none'
          }`}
        >
          <AboutSection />
        </div>

        <div
          ref={supportScrollRef}
          className={`absolute inset-0 overflow-y-auto overscroll-contain transform-gpu transition-transform duration-[950ms] ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform ${
            view === 'support'
              ? 'z-20 translate-y-0 pointer-events-auto'
              : 'z-0 translate-y-full pointer-events-none'
          }`}
        >
          <SupportSection />
        </div>
      </div>

      <SiteFooter onSupport={handleSupport} />
    </main>
  )
}
