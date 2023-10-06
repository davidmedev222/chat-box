import Image from 'next/image'

function BackgroundImage() {
  return (
    <div className='relative hidden min-h-screen bg-[#f0ece9] lg:block'>
      <Image
        src='/assets/banner-chatbox.webp'
        className='object-contain'
        priority
        quality={100}
        fill
        sizes='100vw'
        alt='Image of an arm with a cell phone and chat stickers'
      />
    </div>
  )
}

export default BackgroundImage
