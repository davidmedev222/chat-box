import Image from 'next/image'

interface Props {
  priority?: boolean
}

function BackgroundImage({ priority }: Props) {
  return (
    <div className='relative hidden bg-[#f0ece9] lg:block'>
      <Image
        src='/assets/banner-chatbox.webp'
        className='object-cover object-top'
        quality={100}
        priority={priority}
        fill
        sizes='100vw'
        alt='Image of an arm with a cell phone and chat stickers'
      />
    </div>
  )
}

export default BackgroundImage
