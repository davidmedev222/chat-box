import { Button } from '@/components'

function CallToAction() {
  return (
    <section className='relative flex min-h-screen flex-col items-start justify-center gap-y-8 px-4 lg:px-16'>
      <h1 className='text-5xl font-medium text-black lg:text-6xl'>
        Stay <span className='text-orange-400'>cool!</span> With Social Chat
      </h1>
      <p>Anyone willing to get acquainted and communicate can install it for free and use without limits.</p>
      <Button variant='normal'>Try for free</Button>
      <p className='absolute bottom-0 left-0 px-4 py-8 font-normal lg:px-16'>
        © 2023 by Chat Box. All rights received.
      </p>
    </section>
  )
}

export default CallToAction
