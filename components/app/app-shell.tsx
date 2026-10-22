'use client'

import type { ComponentType } from 'react'
import { BottomNav, PhoneFrame, RouterProvider, StatusBar, screens, tabRoutes, useRouter } from './screens'
import { HomeRoute } from './home-route'

const screenMap = screens as Record<string, ComponentType>

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
      <div className="mx-auto flex max-w-6xl justify-center">
        <h1 className="sr-only">顾好家 用户端</h1>
        <Phone />
      </div>
    </RouterProvider>
  )
}
