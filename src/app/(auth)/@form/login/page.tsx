import { Heading } from '@/components'
import { Routes } from '@/utils'
import Link from 'next/link'
import { SignInForm } from './components'

function LoginPage() {
  return (
    <section className='mx-auto flex min-h-screen max-w-lg flex-col justify-center gap-y-4 px-4 py-20 text-center'>
      <Heading>
        Log in to <span className='text-orange-400'>Chat Box!</span>
      </Heading>
      <p>
        Welcome back to Chat Box. Sign in to continue your conversations, access your favorite groups and enjoy a unique
        chat experience.
      </p>
      <SignInForm />
      <p className='space-x-2 text-base'>
        <span>Don't have an account?</span>
        <Link className='font-medium underline' href={Routes.Register}>
          Create Account
        </Link>
      </p>
    </section>
  )
}

export default LoginPage
