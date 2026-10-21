import { HomeScreen } from '@/components/home/home-screen'

export default function Page() {
  return (
    <div className="flex min-h-dvh items-center justify-center bg-background md:py-10">
      <div className="relative h-dvh w-full max-w-[430px] overflow-hidden bg-surface md:h-[812px] md:w-[375px] md:rounded-[42px] md:shadow-[0_0_0_10px_var(--color-shell),0_30px_60px_-20px_rgba(28,28,30,0.45)]">
        <HomeScreen />
      </div>
    </div>
  )
}
