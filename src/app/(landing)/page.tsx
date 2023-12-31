import { BackgroundImage, CallToAction } from '@/components'

function HomePage() {
  return (
    <main className='lg:grid lg:grid-cols-2'>
      <CallToAction />
      <BackgroundImage priority />
    </main>
  )
}

export default HomePage
