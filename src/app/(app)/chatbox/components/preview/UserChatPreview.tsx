import { UserAvatar } from '../index'

function UserChatPreview() {
  return (
    <article className='grid grid-cols-[auto_1fr_auto] items-center gap-x-4 rounded-lg hover:bg-gray-100'>
      <UserAvatar badge='status' />
      <div className='grid'>
        <p className='line-clamp-1 text-base font-medium'>Jenny Wilson</p>
        <p className='line-clamp-1 text-gray-500'>Can't wait to try it out! 🦆🦆</p>
      </div>
      <div className='grid justify-items-end'>
        <span className='rounded-full bg-orange-400 px-1 py-0.5 text-xs text-white'>2</span>
        <span className='text-gray-500'>Dec 18, 2024</span>
      </div>
    </article>
  )
}

export default UserChatPreview
