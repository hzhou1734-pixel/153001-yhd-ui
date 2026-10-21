import { Bell, ChevronRight, MapPin, Search } from 'lucide-react'

export function HomeHeader({ onAction }: { onAction: (label: string) => void }) {
  return (
    <header className="bg-header-wash -mt-12 flex flex-col gap-4 px-5 pt-16 pb-12">
      <div className="flex items-center justify-between gap-3">
        <h1>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/brand-logo.png"
            alt="顾好家"
            width={880}
            height={320}
            className="-ml-2 h-10 w-auto mix-blend-multiply"
          />
        </h1>
        <button
          type="button"
          aria-label="消息通知，3 条未读"
          onClick={() => onAction('消息通知')}
          className="press relative flex size-10 items-center justify-center rounded-full bg-surface shadow-card"
        >
          <Bell className="size-5 text-ink" aria-hidden="true" />
          <span className="absolute -top-0.5 -right-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-danger px-1 text-[10px] font-semibold text-surface">
            3
          </span>
        </button>
      </div>

      <div className="flex items-center gap-2.5">
        <p className="shrink-0 whitespace-nowrap text-[21px] leading-tight font-bold text-ink">
          你好，<span className="text-brand-deep">欢迎回家</span>
        </p>
        <button
          type="button"
          onClick={() => onAction('切换小区')}
          className="press flex min-w-0 items-center gap-1 whitespace-nowrap rounded-full bg-surface/70 py-1.5 pr-1.5 pl-2 text-xs text-ink-2"
        >
          <MapPin className="size-3.5 text-brand-deep" aria-hidden="true" />
          阳光花园 · 3栋2单元
          <ChevronRight className="size-3.5 text-ink-3" aria-hidden="true" />
        </button>
      </div>

      <form
        role="search"
        onSubmit={(e) => {
          e.preventDefault()
          onAction('搜索')
        }}
        className="flex h-11 items-center gap-2 rounded-full bg-surface pr-1 pl-4 shadow-card"
      >
        <Search className="size-[18px] shrink-0 text-brand-deep" aria-hidden="true" />
        <label htmlFor="home-search" className="sr-only">
          搜索
        </label>
        <input
          id="home-search"
          type="search"
          placeholder="搜服务、搜活动、找管家"
          className="w-full bg-transparent text-sm text-ink outline-none placeholder:text-ink-3"
        />
        <button
          type="submit"
          className="press bg-brand-gradient shrink-0 rounded-full px-4 py-1.5 text-[13px] font-semibold text-surface"
        >
          搜索
        </button>
      </form>
    </header>
  )
}
