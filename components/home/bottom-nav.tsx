'use client'

import { useState } from 'react'
import { ClipboardList, House, User, Users, type LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

const tabs: { label: string; icon: LucideIcon; dot?: boolean }[] = [
  { label: '首页', icon: House },
  { label: '社区', icon: Users },
  { label: '订单', icon: ClipboardList, dot: true },
  { label: '我的', icon: User },
]

export function BottomNav({ onAction }: { onAction: (label: string) => void }) {
  const [current, setCurrent] = useState('首页')

  return (
    <nav
      aria-label="底部导航"
      className="absolute inset-x-0 bottom-0 z-20 flex h-[68px] items-start rounded-t-[22px] bg-surface/95 pt-2 shadow-dock backdrop-blur-xl"
    >
      {tabs.map(({ label, icon: Icon, dot }) => {
        const active = current === label
        return (
          <button
            key={label}
            type="button"
            aria-current={active ? 'page' : undefined}
            onClick={() => {
              setCurrent(label)
              if (label !== '首页') onAction(label)
            }}
            className={cn('press flex flex-1 flex-col items-center gap-1', active ? 'text-brand-deep' : 'text-ink-3')}
          >
            <span
              className={cn(
                'relative flex h-7 items-center justify-center rounded-full transition-all',
                active ? 'w-12 bg-brand-soft' : 'w-7',
              )}
            >
              <Icon className="size-6" aria-hidden="true" />
              {dot && <span className="absolute -top-0.5 right-1 size-2 rounded-full bg-danger ring-2 ring-surface" />}
            </span>
            <span className={cn('text-[10px] leading-none', active && 'font-semibold')}>{label}</span>
          </button>
        )
      })}
    </nav>
  )
}
