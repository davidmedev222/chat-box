import Image from 'next/image'

interface Props {
  priority?: boolean
}

function BackgroundImage({ priority }: Props) {
  return (
    <div className='hidden max-h-screen bg-[#f0ece9] lg:block'>
      <Image
        src='/assets/banner-chatbox.webp'
        className='h-full w-full object-contain object-bottom'
        quality={100}
        width={425}
        height={588}
        priority={priority}
        alt='Image of an arm with a cell phone and chat stickers'
      />
    </div>
  )
}

export default BackgroundImage
