import { ChevronRight } from 'lucide-react'

type SectionHeadingProps = {
  id: string
  title: string
  subtitle: string
  actionLabel: string
  onAction: () => void
}

export function SectionHeading({ id, title, subtitle, actionLabel, onAction }: SectionHeadingProps) {
  return (
    <div className="flex items-end justify-between px-1">
      <div className="flex items-baseline gap-2">
        <h2 id={id} className="text-[17px] font-bold text-ink">
          {title}
        </h2>
        <span className="pl-1 text-xs text-ink-3">{subtitle}</span>
      </div>
      <button
        type="button"
        onClick={onAction}
        className="press flex items-center rounded-full bg-surface/70 py-0.5 pr-1.5 pl-2.5 text-xs text-ink-2"
      >
        {actionLabel}
        <ChevronRight className="size-3.5" aria-hidden="true" />
      </button>
    </div>
  )
}
