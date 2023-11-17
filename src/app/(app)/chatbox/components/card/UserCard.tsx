'use client'
import { useSession } from 'next-auth/react'
import { UserAvatar } from '../index'

function UserCard() {
  const { data: session } = useSession()
  const user = session?.user

  return (
    <article className='grid grid-cols-[auto_1fr] items-center gap-x-4 px-4 py-2'>
      <UserAvatar src={user?.image ?? '/assets/user-default.webp'} priority className='h-16 w-16' size={64} />
      <header className='grid text-xl font-medium'>
        <p className='line-clamp-1'>{user?.name}</p>
        <p className='line-clamp-1 text-sm text-gray-600 dark:text-gray-400'>{user?.email}</p>
      </header>
    </article>
  )
}

export default UserCard
