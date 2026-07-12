import type { CSSProperties, ReactNode } from 'react'
import {
  AppCardFragment,
  CalendarFragment,
  ChecklistFragment,
  DraftFragment,
  NoteFragment,
  SketchFragment,
  type AppInfo,
} from '@/components/hero-fragments'

const HAIBACK: AppInfo = {
  name: 'HaiBack',
  description: 'Company reimbursement tracker.',
  note: 'no more money left in memory',
  iconFrom: 'oklch(0.86 0.06 160)',
  iconTo: 'oklch(0.72 0.09 165)',
}

const PAIRCARE: AppInfo = {
  name: 'PairCare',
  description: 'Medication reminder companion.',
  note: 'one less dose to remember',
  iconFrom: 'oklch(0.86 0.055 25)',
  iconTo: 'oklch(0.76 0.08 25)',
}

const CANWE: AppInfo = {
  name: 'CanWe',
  description: 'A gentle availability signal.',
  note: 'less guessing, fewer interruptions',
  iconFrom: 'oklch(0.85 0.06 235)',
  iconTo: 'oklch(0.74 0.09 240)',
}

type Spot = {
  key: string
  node: ReactNode
  className: string
  width: string
  rotate: number
  float: 'cym-float' | 'cym-float-slow'
  delay: number
  fade: number
  opacity?: number
  /** Hide this decorative piece once viewport height drops below this value (px). */
  hideBelow?: number
}

/**
 * Fragments collected while making the apps. Deliberately uneven: two loose
 * clusters (an "origin" pile upper-left, a "became products" pile lower-left)
 * with reminders down the right, and open, breathing space around the title
 * and across the top-center. A few pieces overlap the way a real desk does.
 */
const SPOTS: Spot[] = [
  // upper-left origin cluster — kept away from the title
  {
    key: 'checklist',
    node: <ChecklistFragment />,
    className: 'left-[2%] top-[8%]',
    width: '14.5rem',
    rotate: -3,
    float: 'cym-float',
    delay: 0.3,
    fade: 0.5,
    hideBelow: 560,
  },
  {
    key: 'draft',
    node: <DraftFragment />,
    className: 'left-[12%] top-[47%]',
    width: '10.5rem',
    rotate: 2.5,
    float: 'cym-float-slow',
    delay: 1.9,
    fade: 1.2,
    opacity: 0.58,
    hideBelow: 720,
  },

  // upper-right note
  {
    key: 'note',
    node: <NoteFragment />,
    className: 'right-[10%] top-[7%]',
    width: '10.5rem',
    rotate: 3,
    float: 'cym-float-slow',
    delay: 1.2,
    fade: 0.65,
    hideBelow: 560,
  },

  // right calendar — pushed outward so it does not sit under the title
  {
    key: 'calendar',
    node: <CalendarFragment />,
    className: 'right-[-3%] top-[43%]',
    width: '13rem',
    rotate: -2.5,
    float: 'cym-float',
    delay: 0.9,
    fade: 0.8,
    opacity: 0.72,
    hideBelow: 720,
  },

  // central-lower creation artifact — fills the empty hole but stays faint
  {
    key: 'sketch',
    node: <SketchFragment />,
    className: 'right-[34%] top-[61%]',
    width: '11.5rem',
    rotate: 3.5,
    float: 'cym-float',
    delay: 2.7,
    fade: 1.3,
    opacity: 0.48,
    hideBelow: 820,
  },

  // lower product cluster — closer together, less scattered
  {
    key: 'haiback',
    node: <AppCardFragment app={HAIBACK} />,
    className: 'left-[8%] top-[70%]',
    width: '13.5rem',
    rotate: 2,
    float: 'cym-float-slow',
    delay: 2.1,
    fade: 0.9,
    hideBelow: 900,
  },
  {
    key: 'paircare',
    node: <AppCardFragment app={PAIRCARE} />,
    className: 'left-[29%] top-[75%]',
    width: '14rem',
    rotate: -2,
    float: 'cym-float',
    delay: 1.5,
    fade: 1,
    hideBelow: 900,
  },
  {
    key: 'canwe',
    node: <AppCardFragment app={CANWE} />,
    className: 'right-[10%] top-[70%]',
    width: '14rem',
    rotate: 2,
    float: 'cym-float-slow',
    delay: 2.4,
    fade: 1.1,
    hideBelow: 900,
  },
]

const HIDE_BELOW_CLASS: Record<number, string> = {
  560: '[@media(max-height:560px)]:hidden',
  720: '[@media(max-height:720px)]:hidden',
  820: '[@media(max-height:820px)]:hidden',
  900: '[@media(max-height:900px)]:hidden',
}

function floatStyle(delay: number, width: string): CSSProperties {
  return { animationDelay: `${delay}s`, width }
}

/** Scattered desk of fragments for large screens. */
export function FragmentScatter() {
  return (
    <div aria-hidden="false" className="pointer-events-none absolute inset-0 hidden md:block">
      {SPOTS.map((spot) => (
        <div
          key={spot.key}
          className={`${spot.float} absolute ${spot.className} ${
            spot.hideBelow ? HIDE_BELOW_CLASS[spot.hideBelow] : ''
          }`}
          style={{ ...floatStyle(spot.delay, spot.width), opacity: spot.opacity }}
        >
          <div className="cym-fade-up" style={{ animationDelay: `${spot.fade}s` }}>
            <div style={{ transform: `rotate(${spot.rotate}deg)` }}>{spot.node}</div>
          </div>
        </div>
      ))}
    </div>
  )
}


export function FragmentStack() {
  const fragments = [
    {
      key: 'checklist',
      element: <ChecklistFragment />,
      rotate: '-2deg',
    },
    {
      key: 'note',
      element: <NoteFragment />,
      rotate: '2deg',
    },
    {
      key: 'calendar',
      element: <CalendarFragment />,
      rotate: '-1deg',
    },
  ]

  const index =
    typeof window === 'undefined'
      ? 0
      : Math.floor(Date.now() / 6000) % fragments.length

  const current = fragments[index]

  return (
    <div className="pointer-events-none mx-auto -mt-2 w-full max-w-sm lg:hidden">
      <div
        className="cym-fade-up w-[86%] opacity-55"
        style={{ animationDelay: '0.68s' }}
      >
        <div style={{ transform: `rotate(${current.rotate})` }}>
          {current.element}
        </div>
      </div>
    </div>
  )
}
