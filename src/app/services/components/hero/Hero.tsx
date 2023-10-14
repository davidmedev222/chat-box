import { Heading } from '@/components'

function Hero() {
  return (
    <section className='mx-auto grid max-w-screen-md gap-y-8 text-center'>
      <Heading>
        Our Services: <span className='text-orange-400'>Empowering</span> your Experience.
      </Heading>
      <p>
        Here, we offer you a glimpse of the tools and features we have designed to make your communication experience
        more fluid, secure and enriching. Discover how our services transform the way you connect with the world through
        online messaging.
      </p>
    </section>
  )
}

export default Hero
