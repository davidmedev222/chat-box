import { PageHeader, Switch } from '@/chatbox/components'
import { ArrowBackIcon, Button } from '@/components'
import Link from 'next/link'

function SecurityPage() {
  return (
    <div>
      <PageHeader title='Security' />
      <ul className='font-medium'>
        <li>
          <button className='option-dropdown w-full grid-cols-[1fr_auto]'>
            Remember me
            <Switch />
          </button>
        </li>
        <li>
          <button className='option-dropdown w-full grid-cols-[1fr_auto]'>
            Face ID
            <Switch />
          </button>
        </li>
        <li>
          <button className='option-dropdown w-full grid-cols-[1fr_auto]'>
            Biometric ID
            <Switch />
          </button>
        </li>
        <li>
          <Link href='#' className='option-dropdown grid-cols-[1fr_auto]'>
            Google Authenticator
            <ArrowBackIcon className='h-6 w-6 rotate-180 fill-current' />
          </Link>
        </li>
        <li className='grid p-4'>
          <Button className='mx-auto' variant='orange'>
            Change Pin
          </Button>
        </li>
      </ul>
    </div>
  )
}

export default SecurityPage
