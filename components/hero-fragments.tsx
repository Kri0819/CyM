import type { CSSProperties, ReactNode } from 'react'
import { Check } from 'lucide-react'

/**
 * A tiny folded corner — the small wear a page picks up after being
 * handled a few times. Placed on the bottom-right by default.
 */
function FoldedCorner({
  className = 'bottom-0 right-0',
}: {
  className?: string
}) {
  return (
    <span
      aria-hidden="true"
      className={`pointer-events-none absolute h-5 w-5 ${className}`}
      style={{
        background:
          'linear-gradient(135deg, transparent 46%, rgba(120,140,175,0.14) 47%, rgba(255,255,255,0.9) 52%)',
        borderBottomRightRadius: '13px',
        boxShadow: '-1px -1px 2px rgba(90,110,150,0.12)',
      }}
    />
  )
}

/**
 * A short strip of tape, set at a slightly careless angle. Never perfectly
 * straight — that is the whole point.
 */
function Tape({
  className = '',
  rotate = -4,
}: {
  className?: string
  rotate?: number
}) {
  return (
    <span
      aria-hidden="true"
      className={`pointer-events-none absolute h-5 w-14 ${className}`}
      style={{
        transform: `rotate(${rotate}deg)`,
        background:
          'linear-gradient(180deg, rgba(210,225,240,0.55), rgba(200,216,235,0.35))',
        boxShadow: '0 1px 2px rgba(90,110,150,0.15)',
        borderInline: '1px solid rgba(255,255,255,0.35)',
      }}
    />
  )
}

/**
 * A single sheet of paper. Cool off-white, hairline edge, very soft shadow,
 * and an almost-invisible texture so it never reads as flat vector.
 */
function Paper({
  children,
  className = '',
  tint,
}: {
  children: ReactNode
  className?: string
  tint?: string
}) {
  const style: CSSProperties = tint ? { backgroundColor: tint } : {}
  return (
    <div
      className={`relative rounded-[14px] border border-black/[0.04] bg-paper shadow-[0_1px_0_rgba(255,255,255,0.7)_inset,0_22px_45px_-30px_rgba(90,110,150,0.5),0_6px_14px_-10px_rgba(90,110,150,0.25)] ${className}`}
      style={style}
    >
      {/* barely-there paper grain + a faint aged corner */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-[14px] opacity-[0.5]"
        style={{
          backgroundImage:
            'radial-gradient(120% 90% at 100% 100%, rgba(120,140,175,0.05), transparent 55%)',
        }}
      />
      {children}
    </div>
  )
}

/** A small completed checkbox — the recurring CyM motif. */
function DoneBox({ muted = false }: { muted?: boolean }) {
  return (
    <span
      aria-hidden="true"
      className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-[4px] border ${
        muted ? 'border-crystal/40 bg-crystal/10' : 'border-crystal/55 bg-crystal/15'
      }`}
    >
      <Check className="h-3 w-3 text-crystal" strokeWidth={2.5} />
    </span>
  )
}

/**
 * A handwritten to-do list, but read as little victories — most things are
 * already done, with one small handwritten correction left in.
 */
export function ChecklistFragment() {
  const done = [
  'Medication taken',
  'Receipt recorded',
  'Appointment booked',
  'Message replied',
]
  return (
    <Paper className="w-full px-5 pb-5 pt-4">
      <Tape className="-top-2.5 left-8" rotate={-6} />
      <p className="mb-2.5 font-hand text-lg leading-none text-ink/70">today</p>
      <ul className="space-y-2">
        {done.map((label) => (
          <li key={label} className="flex items-center gap-2.5">
            <DoneBox />
            <span className="font-hand text-[1.15rem] leading-tight text-ink/45 line-through decoration-ink/30">
              {label}
            </span>
          </li>
        ))}
        {/* a handwritten correction: crossed out, rewritten below */}
        <li className="flex items-start gap-2.5">
          <span
            aria-hidden="true"
            className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-[4px] border border-ink/25"
          />
          <span className="font-hand text-[1.15rem] leading-tight text-ink">
            <span className="text-ink/60">
  remember everything
</span>
<span className="mt-0.5 block -rotate-1 text-crystal/90">
  → let CyM hold it
</span>
          </span>
        </li>
      </ul>
      <FoldedCorner />
    </Paper>
  )
}

/** A torn calendar page — the day these tools quietly help with. */
export function CalendarFragment() {
  const entries = [
  { time: '10:00', label: 'Doctor', done: true },
  { time: '14:00', label: 'Reimbursement', done: true },
  { time: '21:00', label: 'Medication', done: false },
]
  return (
    <Paper className="w-full overflow-hidden">
      <div className="flex items-center justify-between border-b border-black/[0.05] px-4 py-2">
        <span className="text-[0.65rem] font-medium uppercase tracking-[0.18em] text-muted-foreground">
          April
        </span>
        <span className="flex gap-1" aria-hidden="true">
          <span className="h-1 w-1 rounded-full bg-ink/15" />
          <span className="h-1 w-1 rounded-full bg-ink/15" />
        </span>
      </div>
      <div className="flex items-start gap-4 px-4 py-3.5">
        <div className="leading-none">
          <div className="font-serif text-4xl font-light text-foreground">12</div>
          <div className="mt-1 text-[0.62rem] uppercase tracking-[0.16em] text-muted-foreground">
            Fri
          </div>
        </div>
        <ul className="mt-0.5 flex-1 space-y-1.5">
          {entries.map((e) => (
            <li key={e.label} className="flex items-center gap-2 text-[0.8rem]">
              {e.done ? (
                <Check
                  className="h-3 w-3 shrink-0 text-crystal"
                  strokeWidth={2.5}
                  aria-hidden="true"
                />
              ) : (
                <span
                  aria-hidden="true"
                  className="h-2.5 w-2.5 shrink-0 rounded-[3px] border border-ink/25"
                />
              )}
              <span className="tabular-nums text-muted-foreground">{e.time}</span>
              <span
                className={e.done ? 'text-muted-foreground line-through' : 'text-foreground'}
              >
                {e.label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </Paper>
  )
}

/** A tiny sticky note — the feeling behind the whole studio. Cool, not warm. */
export function NoteFragment() {
  return (
    <Paper className="w-full px-5 py-4" tint="oklch(0.965 0.02 250)">
      <Tape className="-top-2 left-1/2 -translate-x-1/2" rotate={5} />
      <p className="font-hand text-[1.35rem] leading-snug text-ink">
  Today,
  <br />
  one less thing
  <br />
  on my mind.
</p>
      <span className="mt-2 flex items-center gap-1.5" aria-hidden="true">
        <DoneBox muted />
      </span>
    </Paper>
  )
}

/** A rough UI wireframe — a product still being sketched. Monochrome, light. */
export function SketchFragment() {
  return (
    <Paper className="w-full px-4 py-4">
      <div className="rounded-lg border border-dashed border-ink/20 p-3">
        <div className="mb-2.5 flex items-center gap-1.5" aria-hidden="true">
          <span className="h-2 w-2 rounded-full border border-ink/25" />
          <span className="h-1.5 w-10 rounded-full bg-ink/10" />
        </div>
        <div className="space-y-1.5" aria-hidden="true">
          <div className="h-1.5 w-full rounded-full bg-ink/10" />
          <div className="h-1.5 w-4/5 rounded-full bg-ink/10" />
          <div className="mt-2.5 flex gap-1.5">
            <div className="h-8 flex-1 rounded-md border border-ink/15" />
            <div className="h-8 flex-1 rounded-md border border-ink/15" />
          </div>
          <div className="mt-2 h-6 w-1/2 rounded-full border border-ink/20 bg-ice/40" />
        </div>
      </div>
      <p className="mt-2.5 -rotate-1 font-hand text-base leading-none text-ink/55">
        next idea…
      </p>
      <FoldedCorner />
    </Paper>
  )
}

/**
 * A faint planning draft — an unfinished notebook page. Almost hidden, purely
 * pencil marks; a hint of the work behind everything else.
 */
export function DraftFragment() {
  return (
    <Paper className="w-full px-4 py-3.5">
      <p className="mb-2 font-hand text-[0.95rem] leading-none text-pencil/70">
        maybe next…
      </p>
      <ul className="space-y-2" aria-hidden="true">
        {[0, 1, 2].map((i) => (
          <li key={i} className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 shrink-0 rounded-[3px] border border-pencil/35" />
            <span
              className="h-1.5 rounded-full bg-pencil/15"
              style={{ width: `${70 - i * 14}%` }}
            />
          </li>
        ))}
      </ul>
    </Paper>
  )
}

export type AppInfo = {
  name: string
  description: string
  note: string
  iconFrom: string
  iconTo: string
}

/**
 * A finished tool, kept like a collected memory rather than a UI preview —
 * a small paper card with a handwritten line about why it exists.
 */
export function AppCardFragment({ app }: { app: AppInfo }) {
  const iconStyle: CSSProperties = {
    backgroundImage: `linear-gradient(150deg, ${app.iconFrom}, ${app.iconTo})`,
  }
  return (
    <Paper className="w-full px-4 py-4">
      <div className="flex items-start gap-3">
        <div
          className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-[12px] shadow-[inset_0_1px_1px_rgba(255,255,255,0.6)]"
          style={iconStyle}
          aria-hidden="true"
        >
          <Check className="h-4 w-4 text-white/90" strokeWidth={2.5} />
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="truncate text-[0.95rem] font-medium leading-tight text-foreground">
            {app.name}
          </h3>
          <p className="mt-1 text-[0.8rem] leading-snug text-muted-foreground text-pretty">
            {app.description}
          </p>
        </div>
      </div>
      <p className="mt-3 -rotate-1 font-hand text-[1.05rem] leading-none text-ink/55">
        {app.note}
      </p>
      <FoldedCorner />
    </Paper>
  )
}
