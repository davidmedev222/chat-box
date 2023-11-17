import { AttachmentIcon, CameraIcon, MicIcon, SmileIcon } from '../index'

function ChatFooter() {
  return (
    <footer className='flex items-center gap-x-4 p-4'>
      <form className='grid grow grid-cols-[auto_1fr_auto_auto] items-center gap-x-2 rounded-2xl bg-gray-50 px-4 py-2 text-gray-400 focus-within:bg-gray-100 focus-within:text-orange-400 focus-within:ring-1 focus-within:ring-orange-400 dark:bg-gray-950 dark:focus-within:text-orange-400'>
        <SmileIcon className='h-6 w-6 fill-current' />
        <input type='text' placeholder='Type a message' />
        <AttachmentIcon className='-rotate-45 fill-current' />
        <CameraIcon className='fill-current' />
      </form>
      <button className='rounded-full bg-orange-400 p-2'>
        <MicIcon className='fill-white' />
      </button>
    </footer>
  )
}

export default ChatFooter
