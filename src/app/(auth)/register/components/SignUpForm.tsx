import { Button } from '@/components'

function SignUpForm() {
  return (
    <form className='grid gap-y-6 py-4'>
      <input type='text' placeholder='Enter your first name' />
      <input type='text' placeholder='Enter your last name' />
      <input type='email' placeholder='Enter your email' />
      <input type='password' placeholder='Enter your password' />
      <label className='flex items-center gap-x-2' htmlFor='tyc'>
        <input type='checkbox' id='tyc' />I agree to the Terms & Conditions
      </label>
      <Button className='mt-3' variant='normal'>
        Create Account
      </Button>
    </form>
  )
}

export default SignUpForm
