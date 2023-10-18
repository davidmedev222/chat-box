'use client'
import { signIn } from 'next-auth/react'
import { Button, GithubIcon, GoogleIcon } from '../index'

function SocialAuth() {
  return (
    <div className='grid gap-y-4'>
      <Button onClick={async () => await signIn('google')} variant='google' iconLeft={<GoogleIcon size={24} />}>
        Continue with Google
      </Button>
      <Button onClick={async () => await signIn('github')} variant='github' iconLeft={<GithubIcon size={24} />}>
        Continue with Github
      </Button>
    </div>
  )
}

export default SocialAuth
