import { UserAvatar } from '../index'

function UserStatusPreview() {
  return (
    <article className='grid grid-cols-[auto_1fr] items-center gap-x-4 px-4 py-2 hover:bg-gray-100 dark:bg-gray-900'>
      <UserAvatar src='/assets/about.webp' border />
      <div className='grid'>
        <p className='line-clamp-1 text-base font-medium'>Darron Kulikowski</p>
        <p className='line-clamp-1 text-gray-500 dark:text-gray-300'>Today, 16:38</p>
      </div>
    </article>
  )
}

export default UserStatusPreview
