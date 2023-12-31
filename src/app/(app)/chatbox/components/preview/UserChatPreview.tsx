import { UserAvatar } from '../index'

function UserChatPreview() {
  return (
    <article className='grid grid-cols-[auto_1fr_auto] items-center gap-x-4 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600'>
      <UserAvatar src='/assets/about.webp' badge='status' />
      <div className='grid'>
        <p className='line-clamp-1 text-base font-medium'>Jenny Wilson</p>
        <p className='line-clamp-1 text-gray-500 dark:text-gray-300'>Can't wait to try it out! 🦆🦆</p>
      </div>
      <div className='grid justify-items-end'>
        <span className='rounded-full bg-orange-400 px-1 py-0.5 text-xs text-white'>2</span>
        <span className='text-gray-500 dark:text-gray-300'>Dec 18, 2024</span>
      </div>
    </article>
  )
}

export default UserChatPreview
