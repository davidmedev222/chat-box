import { BackgroundImage, CallToAction, Header } from '@/components'

function HomePage() {
  return (
    <>
      <Header />
      <main className='lg:grid lg:grid-cols-2'>
        <CallToAction />
        <BackgroundImage />
      </main>
    </>
  )
}

export default HomePage
