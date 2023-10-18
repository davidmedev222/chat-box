'use client'

import { Button } from '@/components'
import { signOut, useSession } from 'next-auth/react'
import Image from 'next/image'

function ChatboxPage() {
  const { data: session, status } = useSession()

  if (status === 'loading') {
    return <div>Authenticating...</div>
  }

  return (
    <main>
      <h1>Name : {session?.user?.name}</h1>
      <h1>Email : {session?.user?.email}</h1>
      <h1>ID : {session?.user.id}</h1>
      <Image src={session?.user?.image ?? ''} alt='profile' width={200} height={200} />
      <p>{JSON.stringify(session, null, 2)}</p>
      <Button onClick={async () => await signOut()} variant='normal'>
        Cerrar sesion
      </Button>
    </main>
  )
}

export default ChatboxPage
