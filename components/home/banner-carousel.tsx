'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { banners } from './data'

export function BannerCarousel({ onAction }: { onAction: (label: string) => void }) {
  const trackRef = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      const track = trackRef.current
      if (!track) return
      const current = Math.round(track.scrollLeft / track.clientWidth)
      track.scrollTo({ left: ((current + 1) % banners.length) * track.clientWidth, behavior: 'smooth' })
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  const goTo = (index: number) => {
    const track = trackRef.current
    if (track) track.scrollTo({ left: index * track.clientWidth, behavior: 'smooth' })
  }

  return (
    <div className="overflow-hidden rounded-3xl shadow-card">
      <section aria-roledescription="carousel" aria-label="活动推荐" className="relative h-[130px] overflow-hidden rounded-[14px]">
        <div
          ref={trackRef}
          onScroll={(e) => {
            const t = e.currentTarget
            setActive(Math.round(t.scrollLeft / t.clientWidth))
          }}
          className="no-scrollbar flex h-full snap-x snap-mandatory overflow-x-auto"
        >
          {banners.map((banner, index) => (
            <div
              key={banner.title}
              role="group"
              aria-roledescription="slide"
              aria-label={`${index + 1} / ${banners.length}：${banner.title}`}
              className="relative flex h-full w-full shrink-0 snap-start items-center px-5 text-surface"
            >
              <Image
                src={banner.image}
                alt=""
                fill
                priority={index === 0}
                sizes="343px"
                draggable={false}
                className="pointer-events-none object-cover"
              />
              <span
                aria-hidden="true"
                className="absolute inset-0"
                style={{
                  backgroundImage: `linear-gradient(90deg, ${banner.tint}E6 0%, ${banner.tint}99 45%, transparent 80%)`,
                }}
              />
              <div className="relative flex max-w-[62%] min-w-0 flex-col gap-1.5">
                <p className="text-lg leading-tight font-bold text-balance">{banner.title}</p>
                <p className="text-[13px] leading-snug text-surface/90">{banner.subtitle}</p>
                <button
                  type="button"
                  onClick={() => onAction(banner.title)}
                  className="press mt-1 inline-flex w-fit items-center gap-0.5 rounded-full bg-surface/95 py-1 pr-2 pl-3 text-xs font-semibold text-ink"
                >
                  去看看
                  <ChevronRight className="size-3.5" aria-hidden="true" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="absolute right-4 bottom-3 flex items-center gap-1.5">
          {banners.map((banner, index) => (
            <button
              key={banner.title}
              type="button"
              aria-label={`切换到第 ${index + 1} 张`}
              aria-current={index === active}
              onClick={() => goTo(index)}
              className={cn(
                'h-1.5 rounded-full transition-all duration-300',
                index === active ? 'w-4 bg-surface' : 'w-1.5 bg-surface/45',
              )}
            />
          ))}
        </div>
      </section>
    </div>
  )
}
