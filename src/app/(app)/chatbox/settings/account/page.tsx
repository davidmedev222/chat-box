import { ExportIcon, MailIcon, PageHeader, PersonIcon, SecurityIcon, TrashIcon } from '@/chatbox/components'
import { ArrowBackIcon } from '@/components'
import Link from 'next/link'

function AccountPage() {
  return (
    <div>
      <PageHeader title='Account' />
      <ul className='font-medium'>
        <li>
          <Link href='#' className='option-dropdown'>
            <SecurityIcon className='fill-current' /> Privacy
            <ArrowBackIcon className='h-6 w-6 rotate-180 fill-current' />
          </Link>
        </li>
        <li>
          <Link href='#' className='option-dropdown'>
            <PersonIcon className='fill-current' /> Change Name
            <ArrowBackIcon className='h-6 w-6 rotate-180 fill-current' />
          </Link>
        </li>
        <li>
          <Link href='#' className='option-dropdown'>
            <MailIcon className='fill-current' /> Change Email
            <ArrowBackIcon className='h-6 w-6 rotate-180 fill-current' />
          </Link>
        </li>
        <li>
          <Link href='#' className='option-dropdown'>
            <ExportIcon className='fill-current' /> Download Account Info
            <ArrowBackIcon className='h-6 w-6 rotate-180 fill-current' />
          </Link>
        </li>
        <li>
          <button className='option-dropdown w-full text-red-500'>
            <TrashIcon className='fill-current' /> Delete My Account
            <ArrowBackIcon className='h-6 w-6 rotate-180 fill-current' />
          </button>
        </li>
      </ul>
    </div>
  )
}

export default AccountPage
