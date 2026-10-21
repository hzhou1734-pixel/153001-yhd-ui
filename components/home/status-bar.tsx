import { BatteryFull, Signal, Wifi } from 'lucide-react'

export function StatusBar({ solid = false }: { solid?: boolean }) {
  return (
    <div
      className={`sticky top-0 z-20 flex h-12 shrink-0 items-center justify-between px-7 text-ink transition-colors duration-200 ${
        solid ? 'bg-surface/90 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <span className="text-[15px] font-semibold tabular-nums">9:41</span>
      <div className="flex items-center gap-1.5" aria-hidden="true">
        <Signal className="size-4" strokeWidth={2.2} />
        <Wifi className="size-4" strokeWidth={2.2} />
        <BatteryFull className="size-5" strokeWidth={1.8} />
      </div>
    </div>
  )
}
