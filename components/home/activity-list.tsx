import Image from 'next/image'
import { CalendarDays, Flame } from 'lucide-react'
import { cn } from '@/lib/utils'
import { activities } from './data'
import { SectionHeading } from './section-heading'

export function ActivityList({ onAction }: { onAction: (label: string) => void }) {
  return (
    <section aria-labelledby="activities-title" className="bg-panel-wash -mx-1 flex flex-col gap-3 rounded-[28px] px-3 pt-4 pb-3">
      <SectionHeading
        id="activities-title"
        title="社区活动"
        subtitle="邻里一起来"
        actionLabel="全部"
        onAction={() => onAction('全部活动')}
      />
      <ul className="flex flex-col gap-2.5">
        {activities.map((activity) => (
          <li key={activity.title}>
            <button
              type="button"
              onClick={() => onAction(`报名：${activity.title}`)}
              className="press flex w-full items-center gap-3 rounded-2xl bg-surface p-2.5 text-left shadow-card"
            >
              <span className="relative h-[68px] w-[88px] shrink-0 overflow-hidden rounded-xl bg-brand-soft">
                <Image src={activity.image} alt={activity.title} fill sizes="88px" className="object-cover" />
                {activity.hot && (
                  <span className="absolute top-0 left-0 flex items-center gap-0.5 rounded-br-lg bg-danger px-1.5 py-0.5 text-[10px] font-semibold text-surface">
                    <Flame className="size-3" aria-hidden="true" />
                    热门
                  </span>
                )}
              </span>
              <span className="flex min-w-0 flex-1 flex-col gap-1.5">
                <span className="truncate text-[15px] font-semibold text-ink">{activity.title}</span>
                <span className="flex w-fit items-center gap-1 rounded-full bg-brand-mist px-1.5 py-0.5 text-[11px] whitespace-nowrap text-ink-2 tabular-nums">
                  <CalendarDays className="size-3 shrink-0 text-brand-deep" aria-hidden="true" />
                  {activity.period}
                </span>
              </span>
              <span
                className={cn(
                  'shrink-0 rounded-full px-2.5 py-1 text-xs font-semibold',
                  activity.hot ? 'bg-brand-gradient text-surface' : 'bg-brand-soft text-brand-deep',
                )}
              >
                报名
              </span>
            </button>
          </li>
        ))}
      </ul>
    </section>
  )
}
