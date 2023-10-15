import { Heading } from '@/components'
import Image from 'next/image'

function AboutUsSection() {
  return (
    <section className='mx-auto grid min-h-screen max-w-screen-md items-center justify-items-center gap-y-8 text-center lg:max-w-none lg:grid-cols-2 lg:text-left'>
      <div className='space-y-4 pt-32 lg:pt-0'>
        <Heading>
          Out Story: <span className='text-orange-400'>Connections</span> that Transform.
        </Heading>
        <p className='grid gap-y-2'>
          At the heart of our web-based chat and messaging application is a unique story. We are more than a platform,we
          are the reason conversations come alive, relationships are strengthened and distances are shortened.
        </p>
      </div>
      <Image
        className='self-end'
        width={400}
        height={400}
        priority
        src='/assets/about.webp'
        alt='mujer con un celular en la mano'
      />
    </section>
  )
}

export default AboutUsSection
