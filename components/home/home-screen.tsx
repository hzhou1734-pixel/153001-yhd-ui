'use client'

import { useCallback, useRef, useState } from 'react'
import { StatusBar } from './status-bar'
import { HomeHeader } from './home-header'
import { ServiceGrid } from './service-grid'
import { BannerCarousel } from './banner-carousel'
import { ActivityList } from './activity-list'
import { FeaturedContent } from './featured-content'
import { BottomNav } from './bottom-nav'

export function HomeScreen({ onNavigate }: { onNavigate?: (label: string) => boolean }) {
  const [toast, setToast] = useState<string | null>(null)
  const [scrolled, setScrolled] = useState(false)
  const timerRef = useRef<ReturnType<typeof setTimeout>>(undefined)

  const showToast = useCallback(
    (label: string) => {
      if (onNavigate?.(label)) return
      clearTimeout(timerRef.current)
      setToast(label === '严选商城' ? '严选商城敬请期待' : label)
      timerRef.current = setTimeout(() => setToast(null), 1800)
    },
    [onNavigate],
  )

  return (
    <div className="relative h-full bg-surface text-ink">
      <main
        onScroll={(e) => setScrolled(e.currentTarget.scrollTop > 8)}
        className="no-scrollbar absolute inset-0 overflow-y-auto pb-[84px]"
      >
        <StatusBar solid={scrolled} />
        <h1 className="sr-only">顾好家首页</h1>
        <HomeHeader onAction={showToast} />
        <div className="relative -mt-8 flex flex-col gap-6 px-4">
          <ServiceGrid onAction={showToast} />
          <BannerCarousel onAction={showToast} />
          <ActivityList onAction={showToast} />
          <FeaturedContent onAction={showToast} />
          <p className="py-2 text-center text-xs text-ink-3">顾好家 · 邻里有温度</p>
        </div>
      </main>

      <BottomNav onAction={showToast} />

      <div
        role="status"
        aria-live="polite"
        className="pointer-events-none absolute inset-x-0 bottom-24 z-30 flex justify-center px-6"
      >
        {toast && (
          <p className="animate-in fade-in zoom-in-95 rounded-full bg-ink/90 px-4 py-2 text-sm text-surface shadow-float duration-200">
            {toast}
          </p>
        )}
      </div>
    </div>
  )
}
