import { Heading } from '@/components'
import { Routes } from '@/utils'
import Link from 'next/link'
import { SignUpForm } from './components'

function RegisterPage() {
  return (
    <section className='mx-auto flex min-h-screen max-w-lg flex-col justify-center gap-y-4 px-4 py-20 text-center'>
      <Heading>
        Join the Community of <span className='text-orange-400'>Chat Box!</span>
      </Heading>
      <p>
        Create your free account to enjoy all the features and benefits we offer. It's time to connect in a more
        meaningful way!
      </p>
      <SignUpForm />
      <p className='space-x-2 text-base'>
        <span>Already have an account?</span>
        <Link className='font-medium underline' href={Routes.Login}>
          Log In
        </Link>
      </p>
    </section>
  )
}

export default RegisterPage
