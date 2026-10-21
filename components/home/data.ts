export type ServiceIcon =
  | 'health'
  | 'care'
  | 'meal'
  | 'property'
  | 'helper'
  | 'event'
  | 'mall'
  | 'wallet'

export type ServiceTone = 'orange' | 'teal' | 'sky' | 'rose'

export const services: { name: string; icon: ServiceIcon; tone: ServiceTone }[] = [
  { name: '健康小屋', icon: 'health', tone: 'rose' },
  { name: '托管服务', icon: 'care', tone: 'sky' },
  { name: '健康膳食', icon: 'meal', tone: 'teal' },
  { name: '物业服务', icon: 'property', tone: 'orange' },
  { name: '生活帮手', icon: 'helper', tone: 'sky' },
  { name: '社区活动', icon: 'event', tone: 'orange' },
  { name: '严选商城', icon: 'mall', tone: 'rose' },
  { name: '小区钱袋子', icon: 'wallet', tone: 'teal' },
]

export const banners = [
  {
    title: '社区便民服务升级',
    subtitle: '家政、维修、代办一站式直达',
    image: '/images/ref/banner-1.webp',
    tint: '#C9740F',
  },
  {
    title: '健康小屋义诊活动',
    subtitle: '专业医生驻点，免费健康咨询',
    image: '/images/ref/banner-2.webp',
    tint: '#B8441A',
  },
  {
    title: '周末托管开放预约',
    subtitle: '单日托管，随约随托',
    image: '/images/ref/banner-3.webp',
    tint: '#C9740F',
  },
  {
    title: '适老营养餐上线',
    subtitle: '低油低盐，每日新鲜配送',
    image: '/images/ref/banner-4.webp',
    tint: '#A8740F',
  },
  {
    title: '生活帮手随时响应',
    subtitle: '管家上门，需求快速跟进',
    image: '/images/ref/banner-5.webp',
    tint: '#B8441A',
  },
]

export const activities: { title: string; period: string; image: string; hot?: boolean }[] = [
  {
    title: '中秋邻里联欢会',
    period: '报名 09-05 至 09-26',
    image: '/images/ref/act-midautumn.webp',
    hot: true,
  },
  { title: '少儿阅读营', period: '报名 09-01 至 09-12', image: '/images/ref/act-reading.webp' },
  { title: '邻里跳蚤市场', period: '报名 09-02 至 09-10', image: '/images/ref/act-market.webp' },
  { title: '秋季健步走', period: '报名 09-08 至 09-23', image: '/images/ref/act-walk.webp' },
]

export const featuredArticleTitle = '垃圾分类新指南来了'
