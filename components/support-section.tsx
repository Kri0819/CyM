'use client'

import { useState, type FormEvent } from 'react'
import { SecondaryPage, cymCardClassName } from '@/components/secondary-page'

const SUPPORT_LINKS = [
  { label: 'LINE Pay', href: '#' },
  { label: 'Apple Pay', href: '#' },
  { label: '信用卡', href: '#' },
]

type FormState = {
  problem: string
  context: string
  current_solution: string
  pain_point: string
  ideal_tool: string
  frequency: string
  frustration_level: string
  contact: string
}

const INITIAL_FORM: FormState = {
  problem: '',
  context: '',
  current_solution: '',
  pain_point: '',
  ideal_tool: '',
  frequency: '',
  frustration_level: '',
  contact: '',
}

export function SupportSection() {
  const [inboxOpen, setInboxOpen] = useState(false)
  const [form, setForm] = useState<FormState>(INITIAL_FORM)
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>(
    'idle',
  )

  function updateField<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((current) => ({
      ...current,
      [key]: value,
    }))
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (!form.problem.trim() || !form.pain_point.trim() || !form.ideal_tool.trim()) {
      setStatus('error')
      return
    }

    setStatus('sending')

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

    if (!supabaseUrl || !supabaseAnonKey) {
      setStatus('error')
      return
    }

    const response = await fetch(`${supabaseUrl}/rest/v1/little_things_inbox`, {
      method: 'POST',
      headers: {
        apikey: supabaseAnonKey,
        Authorization: `Bearer ${supabaseAnonKey}`,
        'Content-Type': 'application/json',
        Prefer: 'return=minimal',
      },
      body: JSON.stringify({
        problem: form.problem.trim(),
        context: form.context.trim() || null,
        current_solution: form.current_solution.trim() || null,
        pain_point: form.pain_point.trim(),
        ideal_tool: form.ideal_tool.trim(),
        frequency: form.frequency || null,
        frustration_level: form.frustration_level
          ? Number(form.frustration_level)
          : null,
        contact: form.contact.trim() || null,
      }),
    })

    if (!response.ok) {
      setStatus('error')
      return
    }

    setForm(INITIAL_FORM)
    setStatus('success')
  }

    return (
 <SecondaryPage
  id="support"
  label="Support"
  title={
  <>
    <span className="block">Help the next</span>
    <span className="block">little thing grow.</span>
  </>
  }
  description={
    <>
      <p>喜歡這些小工具的話，可以請我喝一杯奶茶。</p>
      <p>也可以留下生活裡一直佔著腦袋的小麻煩。</p>
    </>
  }
>

      {/* Mobile：左右滑動 */}
      <div className="overflow-hidden lg:hidden">
        <div
          className={`flex transition-transform duration-[650ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
            inboxOpen ? '-translate-x-full' : 'translate-x-0'
          }`}
        >
          <div className="w-full shrink-0 pr-1">
            <SupportCard mobile onOpenInbox={() => setInboxOpen(true)} />
          </div>

          <div className="w-full shrink-0 pl-1">
            <InboxCard
              mobile
              expanded
              form={form}
              status={status}
              onOpen={() => setInboxOpen(true)}
              onClose={() => setInboxOpen(false)}
              onSubmit={handleSubmit}
              updateField={updateField}
            />
          </div>
        </div>
      </div>

      {/* Desktop：雙卡片，右邊預設收合 */}
      <div className="hidden gap-6 lg:grid lg:grid-cols-2 lg:items-stretch">
  <SupportCard mobile={false} onOpenInbox={() => setInboxOpen(true)} />

  <InboxCard
    mobile={false}
    expanded={inboxOpen}
    form={form}
    status={status}
    onOpen={() => setInboxOpen(true)}
    onClose={() => setInboxOpen(false)}
    onSubmit={handleSubmit}
    updateField={updateField}
        />
      </div>
    </SecondaryPage>
  )
  }

function SupportCard({
  mobile,
  onOpenInbox,
}: {
  mobile: boolean
  onOpenInbox: () => void
}) {
  return (
    <div className={`${cymCardClassName} flex h-full flex-col p-7 sm:p-9`}>
      <p className="mb-4 text-xs font-medium uppercase tracking-[0.28em] text-crystal">
        Milk Tea Fund
      </p>

      <h3 className="font-serif text-[2rem] font-light leading-[1.12] tracking-tight text-foreground sm:text-4xl">
        🧋 請我喝奶茶
      </h3>

      <div className="font-tc mt-6 space-y-3 text-[0.95rem] font-light leading-[1.9] tracking-[0.02em] text-muted-foreground sm:text-base">
        <p>
          如果這些小工具曾經幫助過你，歡迎請我喝一杯奶茶。
        </p>

        <p>
          你的支持，會成為下一個小工具慢慢長出來的動力。
        </p>
      </div>

      <div className="mt-8 flex flex-wrap gap-3">
        {SUPPORT_LINKS.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="font-tc inline-flex h-10 items-center justify-center rounded-full border border-border bg-background/80 px-5 text-sm text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-secondary"
          >
            {link.label}
          </a>
        ))}
      </div>

      <div className="mt-auto pt-8">
        {mobile && (
          <button
            type="button"
            onClick={onOpenInbox}
            className="font-tc inline-flex h-10 items-center justify-center rounded-full bg-primary px-6 text-sm text-primary-foreground transition-all duration-300 hover:-translate-y-0.5"
          >
            打開小麻煩收集箱
          </button>
        )}

        <p className="font-tc mt-5 text-xs leading-relaxed text-muted-foreground/60">
          目前金流先保留為 placeholder，之後可以替換成實際贊助連結。
        </p>
      </div>
    </div>
  )
}

function InboxCard({
  mobile,
  expanded,
  form,
  status,
  onOpen,
  onClose,
  onSubmit,
  updateField,
}: {
  mobile: boolean
  expanded: boolean
  form: FormState
  status: 'idle' | 'sending' | 'success' | 'error'
  onOpen: () => void
  onClose: () => void
  onSubmit: (event: FormEvent<HTMLFormElement>) => void
  updateField: <K extends keyof FormState>(key: K, value: FormState[K]) => void
}) {
  return (
    <div className={`${cymCardClassName} flex h-full flex-col p-7 sm:p-9`}>
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.28em] text-crystal">
            Little Things Inbox
          </p>

          <h3 className="font-serif text-[2rem] font-light leading-[1.12] tracking-tight text-foreground sm:text-4xl">
  💭 小麻煩收集箱
</h3>
        </div>

        {mobile && (
          <button
            type="button"
            onClick={onClose}
            className="font-tc inline-flex h-9 shrink-0 items-center justify-center rounded-full border border-border bg-background/70 px-4 text-xs text-muted-foreground transition-colors duration-300 hover:bg-secondary hover:text-foreground"
          >
            回到支持
          </button>
        )}

        {!mobile && expanded && (
          <button
            type="button"
            onClick={onClose}
            className="font-tc inline-flex h-9 shrink-0 items-center justify-center rounded-full border border-border bg-background/70 px-4 text-xs text-muted-foreground transition-colors duration-300 hover:bg-secondary hover:text-foreground"
          >
            收起
          </button>
        )}
      </div>

      <p className="font-tc mt-6 text-[0.95rem] font-light leading-[1.9] tracking-[0.02em] text-muted-foreground sm:text-base">
        告訴我生活裡有哪些小事讓你覺得麻煩、混亂，或是一直佔著腦袋。
        它不一定會被完整開發，但有些困擾可能會慢慢變成 CyM 的下一個小工具。
      </p>

      {!expanded && (
        <div className="mt-8 rounded-[26px] border border-border bg-background/55 p-6">
          <p className="font-tc text-base font-medium leading-relaxed text-foreground">
            有一件小事一直卡在腦袋裡嗎？
          </p>

          <p className="font-tc mt-3 text-[0.95rem] font-light leading-[1.9] tracking-[0.02em] text-muted-foreground">
            可以不用想得很完整。只要告訴我「哪件事很煩」、
            「現在怎麼處理」和「希望工具幫你省掉什麼麻煩」就好。
          </p>

          <button
            type="button"
            onClick={onOpen}
            className="font-tc mt-6 inline-flex h-10 items-center justify-center rounded-full bg-primary px-5 text-sm text-primary-foreground transition-all duration-300 hover:-translate-y-0.5"
          >
            展開填寫
          </button>
        </div>
      )}

      {expanded && (
        <form onSubmit={onSubmit} className="font-tc mt-7 space-y-4">
          <FormField
            label="你遇到的小麻煩是什麼？"
            required
            value={form.problem}
            onChange={(value) => updateField('problem', value)}
            placeholder="例如：我常常忘記公司到底欠我多少代墊款。"
          />

          <FormField
            label="這件事通常發生在什麼情境？"
            value={form.context}
            onChange={(value) => updateField('context', value)}
            placeholder="例如：上班、照顧家人、看醫生、租屋、買東西……"
          />

          <FormField
            label="你現在都怎麼解決它？"
            value={form.current_solution}
            onChange={(value) => updateField('current_solution', value)}
            placeholder="例如：備忘錄、Excel、截圖、LINE 訊息，或是腦袋硬記。"
          />

          <FormField
            label="最煩人的地方是哪裡？"
            required
            value={form.pain_point}
            onChange={(value) => updateField('pain_point', value)}
            placeholder="描述那個最讓你覺得卡住、麻煩或心累的地方。"
          />

          <FormField
            label="如果它變成小工具，你希望它幫你做什麼？"
            required
            value={form.ideal_tool}
            onChange={(value) => updateField('ideal_tool', value)}
            placeholder="不用寫完整功能，說出你希望它幫你省掉什麼麻煩就好。"
          />

          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block">
              <span className="mb-2 block text-sm text-foreground">
                發生頻率
              </span>
              <select
                value={form.frequency}
                onChange={(event) => updateField('frequency', event.target.value)}
                className="h-11 w-full rounded-2xl border border-border bg-background/80 px-4 text-sm text-foreground outline-none transition-colors focus:border-crystal"
              >
                <option value="">選填</option>
                <option value="每天">每天</option>
                <option value="每週幾次">每週幾次</option>
                <option value="每個月幾次">每個月幾次</option>
                <option value="偶爾">偶爾</option>
                <option value="特定情境">只有特定情境才會發生</option>
              </select>
            </label>

            <label className="block">
              <span className="mb-2 block text-sm text-foreground">
                困擾程度
              </span>
              <select
                value={form.frustration_level}
                onChange={(event) =>
                  updateField('frustration_level', event.target.value)
                }
                className="h-11 w-full rounded-2xl border border-border bg-background/80 px-4 text-sm text-foreground outline-none transition-colors focus:border-crystal"
              >
                <option value="">選填</option>
                <option value="1">1｜還好，只是有點麻煩</option>
                <option value="2">2</option>
                <option value="3">3｜有點困擾</option>
                <option value="4">4</option>
                <option value="5">5｜很煩，真的想解決</option>
              </select>
            </label>
          </div>

          <FormField
            label="願意留下聯絡方式嗎？"
            value={form.contact}
            onChange={(value) => updateField('contact', value)}
            placeholder="選填。Email、Threads、IG 或其他你願意被聯絡的方式。"
            singleLine
          />

          <p className="text-xs leading-relaxed text-muted-foreground/60">
            請不要填寫帳號密碼、身分證字號、完整個資、醫療診斷或過於私密的內容。
          </p>

          <button
            type="submit"
            disabled={status === 'sending'}
            className="inline-flex h-10 items-center justify-center rounded-full bg-primary px-6 text-sm text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {status === 'sending' ? '送出中…' : '送出小麻煩'}
          </button>

          {status === 'success' && (
            <p className="text-sm text-crystal">
              已收到，謝謝你把這件小麻煩交給 CyM。
            </p>
          )}

          {status === 'error' && (
            <p className="text-sm text-muted-foreground">
              送出失敗，請確認必填欄位都有填寫，或稍後再試一次。
            </p>
          )}
        </form>
      )}
    </div>
  )
}

function FormField({
  label,
  value,
  onChange,
  placeholder,
  required = false,
  singleLine = false,
}: {
  label: string
  value: string
  onChange: (value: string) => void
  placeholder?: string
  required?: boolean
  singleLine?: boolean
}) {
  const inputClassName =
    'w-full rounded-2xl border border-border bg-background/80 px-4 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/45 focus:border-crystal'

  return (
    <label className="block">
      <span className="mb-2 block text-sm text-foreground">
        {label}
        {required && <span className="ml-1 text-crystal">*</span>}
      </span>

      {singleLine ? (
        <input
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder={placeholder}
          className={`${inputClassName} h-11`}
        />
      ) : (
        <textarea
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder={placeholder}
          rows={3}
          className={`${inputClassName} min-h-[86px] resize-none py-3 leading-relaxed`}
        />
      )}
    </label>
  )
}

