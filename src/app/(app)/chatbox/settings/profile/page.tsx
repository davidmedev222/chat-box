'use client'
import { PageHeader, UserAvatar } from '@/chatbox/components'
import { useSession } from 'next-auth/react'

function ProfilePage() {
  const { data: session } = useSession()
  const user = session?.user

  return (
    <div className='grid'>
      <PageHeader title='Profile' />
      <UserAvatar
        src={user?.image ?? '/assets/user-default.webp'}
        className='m-4 h-28 w-28 justify-self-center'
        size={112}
        badge='edit'
        priority
      />
      <form className='mx-auto grid w-full max-w-md gap-y-2 px-4 py-2'>
        <input className='bg-gray-100 placeholder:text-black' disabled type='text' placeholder={user?.name ?? ''} />
        <input className='bg-gray-100 placeholder:text-black' disabled type='email' placeholder={user?.email ?? ''} />
      </form>
    </div>
  )
}

export default ProfilePage
