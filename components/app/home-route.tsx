'use client'

import { HomeScreen } from '@/components/home/home-screen'
import { activities, banners, featuredArticleTitle } from '@/components/home/data'
import { bannerRoutes, serviceRoutes, useRouter } from './screens'

const actionRoutes: Record<string, string> = {
  ...(serviceRoutes as Record<string, string>),
  消息通知: 'sysMsg',
  切换小区: 'communitySwitch',
  社区通知: 'noticeList',
  全部活动: 'communityList',
  更多内容: 'featuredList',
  [featuredArticleTitle]: 'articleDetail',
}

const tabRoutes: Record<string, string> = {
  社区: 'community',
  订单: 'orders',
  我的: 'profile',
}

export function HomeRoute() {
  const { go, reset } = useRouter()

  const handleAction = (label: string) => {
    if (label === '物业服务') return true
    if (tabRoutes[label]) {
      reset(tabRoutes[label])
      return true
    }
    const bannerIndex = banners.findIndex((banner) => banner.title === label)
    if (bannerIndex >= 0) {
      go((bannerRoutes as string[])[bannerIndex])
      return true
    }
    if (activities.some((activity) => label === `报名：${activity.title}` || label === activity.title)) {
      go('activityDetail')
      return true
    }
    const route = actionRoutes[label]
    if (route) {
      go(route)
      return true
    }
    return false
  }

  return <HomeScreen onNavigate={handleAction} />
}
