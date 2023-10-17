import { Button } from '@/components'

function SignInForm() {
  return (
    <form className='grid gap-y-6 py-4'>
      <input type='email' placeholder='Enter your email' />
      <input type='password' placeholder='Enter your password' />
      <Button className='mt-3' variant='normal'>
        Sign In
      </Button>
    </form>
  )
}

export default SignInForm
