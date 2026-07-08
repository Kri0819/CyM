import { SecondaryPage } from '@/components/secondary-page'

const APPS = [
  {
    name: 'HaiBack｜還袂',
    description: '公司代墊與報銷紀錄工具，幫你記住公司到底還欠多少。',
    status: 'Public',
    statusColor: 'bg-emerald-400',
    category: 'Life Admin',
    href: 'https://hai-back.vercel.app/',
    icon: 'H',
    accent: 'from-emerald-200 to-emerald-400',
  },
  {
    name: 'PairCare｜陪一刻',
    description: '用藥提醒與陪伴確認工具，讓吃藥這件事不再只靠自己記。',
    status: 'Development',
    statusColor: 'bg-amber-400',
    category: 'Care',
    href: 'https://paircare2u.vercel.app/',
    icon: 'P',
    accent: 'from-rose-200 to-rose-400',
  },
  {
    name: 'ReCon｜再聯絡',
    description: '個案聯繫、訪視頻率與追蹤整理工具。',
    status: 'Development',
    statusColor: 'bg-amber-400',
    category: 'Case Work',
    href: 'https://re-con.vercel.app/',
    icon: 'R',
    accent: 'from-sky-200 to-sky-400',
  },
  {
    name: 'CanWe',
    description: '用顏色顯示自己現在是否方便被打擾。',
    status: 'Development',
    statusColor: 'bg-amber-400',
    category: 'Shared Space',
    href: 'https://canwestayintouch.vercel.app/',
    icon: 'C',
    accent: 'from-blue-200 to-blue-400',
  },
  {
    name: 'Rollo｜滾滾',
    description: '會自己滾到明天的待辦清單',
    status: 'Development',
    statusColor: 'bg-amber-400',
    category: 'Record',
    href: '#',
    icon: 'R',
    accent: 'from-orange-200 to-orange-400',
  },
  {
    name: 'Easea｜自動流動清單',
    description: '會隨時間自動順延的待辦與任務清單。',
    status: 'Concept',
    statusColor: 'bg-sky-400',
    category: 'Task Flow',
    href: '#',
    icon: 'E',
    accent: 'from-cyan-100 to-cyan-300',
  },
  {
    name: 'Waitin｜未止',
    description: '一個溫柔存放情緒與等待的紙船空間。',
    status: 'Concept',
    statusColor: 'bg-sky-400',
    category: 'LEmotion',
    href: '#',
    icon: 'W',
    accent: 'from-indigo-100 to-indigo-300',
  },
  {
    name: 'PlanB',
    description: '協助安排作息、生活節奏與日常提醒的 AI 小工具。',
    status: 'Concept',
    statusColor: 'bg-sky-400',
    category: 'AI Assistant',
    href: '#',
    icon: 'B',
    accent: 'from-violet-100 to-violet-300',
  },
  {
    name: '小窩俱',
    description: '家具與生活用品的選購整理工具。',
    status: 'Concept',
    statusColor: 'bg-sky-400',
    category: 'Living Guide',
    href: '#',
    icon: '小',
    accent: 'from-stone-100 to-stone-300',
  },
]



export function WorksSection() {
  return (
    <SecondaryPage
      id="works"
      label="Works"
      title={
        <>
          <span className="block">Things I made,</span>
          <span className="block">so I keep less in mind.</span>
        </>
      }
      description={
        <>
          <p>這些作品來自生活裡真的遇到的麻煩。</p>
          <p>有些已經公開，有些還在慢慢長出來。</p>
        </>
      }
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {APPS.map((app) => (
          <a
            key={app.name}
            href={app.href}
            target={app.href === '#' ? undefined : '_blank'}
            rel={app.href === '#' ? undefined : 'noreferrer'}
            className="group rounded-[28px] border border-border bg-card/86 p-5 shadow-[0_18px_55px_-38px_rgba(90,110,150,0.5)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:bg-card sm:rounded-[32px] sm:p-6"
          >
            <div
              className={`mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br ${app.accent} text-sm font-medium text-white shadow-sm sm:mb-6 sm:h-12 sm:w-12`}
            >
              {app.icon}
            </div>

            <h3 className="font-tc text-base font-medium text-foreground sm:text-lg">
              {app.name}
            </h3>

            <p className="font-tc mt-3 min-h-[3.4rem] text-sm leading-relaxed text-muted-foreground">
              {app.description}
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 text-[0.7rem] font-medium uppercase tracking-[0.22em] text-muted-foreground">
              <span className="inline-flex items-center gap-2">
                <span className={`h-2 w-2 rounded-full ${app.statusColor}`} />
                {app.status}
              </span>
              
              <span className="text-muted-foreground/35">/</span>
              
              <span>{app.category}</span>
            </div>
          </a>
        ))}
      </div>
    </SecondaryPage>
  )
}

