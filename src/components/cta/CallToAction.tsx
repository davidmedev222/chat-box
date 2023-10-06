function CallToAction() {
  return (
    <section className='relative flex min-h-screen flex-col items-start justify-center gap-y-8 px-4 lg:px-16'>
      <h1 className='text-5xl font-medium lg:text-6xl'>
        Stay <span className='text-orange-400'>cool!</span> With Social Chat
      </h1>
      <p>Anyone willing to get acquainted and communicate can install it for free and use without limits.</p>
      <button className='rounded-2xl bg-black px-8 py-3 text-white'>Try for free</button>
      <p className='absolute bottom-0 left-0 px-4 py-8 font-normal lg:px-16'>
        © 2023 by Chat Box. All rights received.
      </p>
    </section>
  )
}

export default CallToAction
