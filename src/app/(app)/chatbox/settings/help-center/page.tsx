import { MessageIcon, PageHeader, SecurityIcon } from '@/chatbox/components'
import { ArrowBackIcon, InfoIcon } from '@/components'
import Link from 'next/link'

function HelpCenterPage() {
  return (
    <div>
      <PageHeader title='Help Center' />
      <ul className='font-medium'>
        <li>
          <Link href='#' className='option-dropdown'>
            <SecurityIcon className='h-6 w-6 fill-current' />
            FAQ
            <ArrowBackIcon className='h-6 w-6 rotate-180 fill-current' />
          </Link>
        </li>
        <li>
          <Link href='#' className='option-dropdown'>
            <MessageIcon className='h-6 w-6 fill-current' />
            Contact Us
            <ArrowBackIcon className='h-6 w-6 rotate-180 fill-current' />
          </Link>
        </li>
        <li>
          <Link href='#' className='option-dropdown'>
            <MessageIcon className='h-6 w-6 fill-current' />
            Terms & Privacy Policy
            <ArrowBackIcon className='h-6 w-6 rotate-180 fill-current' />
          </Link>
        </li>
        <li>
          <Link href='#' className='option-dropdown'>
            <InfoIcon className='h-6 w-6 fill-current' />
            App Info
            <ArrowBackIcon className='h-6 w-6 rotate-180 fill-current' />
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default HelpCenterPage
