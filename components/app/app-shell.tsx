'use client'

import type { ComponentType } from 'react'
import {
  BottomNav,
  PhoneFrame,
  RouterProvider,
  ScreenDirectory,
  StatusBar,
  screenGroups,
  screens,
  tabRoutes,
  useRouter,
} from './screens'
import { HomeRoute } from './home-route'

const screenMap = screens as Record<string, ComponentType>
const totalScreens = (screenGroups as { ids: string[] }[]).reduce((sum, group) => sum + group.ids.length, 0)

function Phone() {
  const { cur, toastMsg } = useRouter()
  const isHome = cur === 'home'
  const Screen = isHome ? HomeRoute : (screenMap[cur] ?? HomeRoute)

  return (
    <PhoneFrame label="顾好家 APP">
      {isHome ? null : <StatusBar />}
      <div key={cur} className="screen-in absolute inset-0">
        <Screen />
      </div>
      {!isHome && cur in tabRoutes ? <BottomNav /> : null}
      {toastMsg ? (
        <div role="status" className="pointer-events-none absolute inset-x-0 top-1/2 z-40 flex justify-center">
          <span className="rounded-full bg-shell/85 px-4 py-2 text-sm text-surface backdrop-blur">{toastMsg}</span>
        </div>
      ) : null}
    </PhoneFrame>
  )
}

export function AppShell() {
  return (
    <RouterProvider>
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 lg:flex-row lg:items-start lg:justify-center">
        <div className="lg:sticky lg:top-10">
          <Phone />
        </div>
        <aside className="flex w-full max-w-md flex-col gap-5">
          <header className="flex flex-col gap-2">
            <p className="w-fit rounded-full bg-brand-soft px-3 py-1 text-xs font-semibold text-brand-ink">
              顾好家 · 用户端
            </p>
            <h1 className="text-2xl font-bold text-balance text-ink">全部页面高保真 UI</h1>
            <p className="text-sm leading-relaxed text-pretty text-ink-2">
              {`共 ${totalScreens} 个页面，沿用原型的功能与跳转流程。可直接在手机中点击操作，也可通过下方目录快速跳转。`}
            </p>
          </header>
          <ScreenDirectory />
        </aside>
      </div>
    </RouterProvider>
  )
}
