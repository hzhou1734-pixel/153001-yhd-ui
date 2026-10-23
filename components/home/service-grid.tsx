import {
  Baby,
  Building2,
  CalendarHeart,
  ChevronRight,
  HeartPulse,
  Megaphone,
  Salad,
  ShoppingBag,
  Wallet,
  Wrench,
  type LucideIcon,
} from 'lucide-react'
import { services, type ServiceIcon, type ServiceTone } from './data'

const icons: Record<ServiceIcon, LucideIcon> = {
  health: HeartPulse,
  care: Baby,
  meal: Salad,
  property: Building2,
  helper: Wrench,
  event: CalendarHeart,
  mall: ShoppingBag,
  wallet: Wallet,
}

const tones: Record<ServiceTone, { tile: string; dot: string; icon: string }> = {
  orange: { tile: 'from-[#FFF4E6] to-[#FFE6C7]', dot: 'bg-[#FFB45C]/35', icon: 'text-[#E8821E]' },
  teal: { tile: 'from-[#EAFAF6] to-[#CFF1E8]', dot: 'bg-[#3CC3A5]/30', icon: 'text-[#16A085]' },
  sky: { tile: 'from-[#EDF6FF] to-[#D6EAFF]', dot: 'bg-[#5AA9F5]/30', icon: 'text-[#2F86DE]' },
  rose: { tile: 'from-[#FFF0F0] to-[#FFDCDC]', dot: 'bg-[#FF8A8A]/30', icon: 'text-[#E35D5D]' },
}

export function ServiceGrid({ onAction }: { onAction: (label: string) => void }) {
  return (
    <section aria-label="社区服务" className="flex flex-col gap-4 rounded-3xl bg-surface p-3 pt-4 shadow-float">
      <div className="grid grid-cols-4 gap-y-4">
        {services.map((service) => {
          const Icon = icons[service.icon]
          const tone = tones[service.tone]
          const content = (
            <>
              <span
                className={`relative flex size-[50px] items-center justify-center overflow-hidden rounded-[18px] bg-gradient-to-br ring-1 ring-white/80 ring-inset ${tone.tile}`}
              >
                <span aria-hidden="true" className={`absolute -top-2 -right-2 size-6 rounded-full ${tone.dot}`} />
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/60 to-transparent"
                />
                <Icon className={`relative size-6 ${tone.icon}`} strokeWidth={1.9} aria-hidden="true" />
              </span>
              <span className="text-xs whitespace-nowrap text-ink">{service.name}</span>
            </>
          )
          if (service.inert) {
            return (
              <div key={service.name} className="flex flex-col items-center gap-2">
                {content}
              </div>
            )
          }
          return (
            <button
              key={service.name}
              type="button"
              onClick={() => onAction(service.name)}
              className="press flex flex-col items-center gap-2"
            >
              {content}
            </button>
          )
        })}
      </div>

      <button
        type="button"
        onClick={() => onAction('社区通知')}
        className="press bg-panel-wash flex items-center gap-2.5 rounded-2xl px-3 py-2.5 text-left"
      >
        <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-danger-soft">
          <Megaphone className="size-3.5 text-danger" aria-hidden="true" />
        </span>
        <span className="min-w-0 flex-1 truncate text-[13px] text-ink">本周六小区供水检修，请提前储水…</span>
        
        <ChevronRight className="size-3.5 shrink-0 text-ink-3" aria-hidden="true" />
      </button>
    </section>
  )
}
