import Image from 'next/image'
import { featuredArticleTitle } from './data'
import { SectionHeading } from './section-heading'

export function FeaturedContent({ onAction }: { onAction: (label: string) => void }) {
  return (
    <section aria-labelledby="content-title" className="flex flex-col gap-3">
      <SectionHeading
        id="content-title"
        title="精彩内容"
        subtitle="生活小贴士"
        actionLabel="更多"
        onAction={() => onAction('更多内容')}
      />
      <button
        type="button"
        onClick={() => onAction(featuredArticleTitle)}
        className="press relative h-44 w-full overflow-hidden rounded-3xl bg-brand-soft text-left shadow-float"
      >
        <Image src="/images/ref/article-recycle.webp" alt={featuredArticleTitle} fill sizes="343px" className="object-cover" />
        <span
          className="absolute inset-0 bg-gradient-to-t from-[#3a230c]/75 via-[#3a230c]/10 to-transparent"
          aria-hidden="true"
        />
        <span className="absolute top-3 left-3 rounded-full bg-surface/90 px-2 py-0.5 text-[11px] font-semibold text-brand-deep backdrop-blur">
          物业指南
        </span>
        <span className="absolute inset-x-4 bottom-3.5 flex flex-col gap-1">
          <span className="truncate text-base font-bold text-surface">{featuredArticleTitle}</span>
          <span className="text-xs text-surface/85">09-03 · 物业服务中心</span>
        </span>
      </button>
    </section>
  )
}
