import { PageHeader, Switch } from '@/chatbox/components'
import { ArrowBackIcon } from '@/components'
import Link from 'next/link'

function NotificationsPage() {
  return (
    <div>
      <PageHeader title='Notifications' />
      <ul className='font-medium'>
        <li>
          <button className='option-dropdown w-full grid-cols-[1fr_auto]'>
            Conversation Tones
            <Switch />
          </button>
        </li>
        <li>
          <ul className='py-2'>
            <li className='px-4 py-2 text-base'>Messages</li>
            <li>
              <Link href='#' className='option-dropdown grid-cols-[1fr_auto]'>
                Notifications Tones
                <ArrowBackIcon className='h-6 w-6 rotate-180 fill-current' />
              </Link>
            </li>
            <li>
              <Link href='#' className='option-dropdown grid-cols-[1fr_auto]'>
                Vibrate
                <ArrowBackIcon className='h-6 w-6 rotate-180 fill-current' />
              </Link>
            </li>
            <li>
              <button className='option-dropdown w-full grid-cols-[1fr_auto]'>
                Reaction Notifications
                <Switch />
              </button>
            </li>
          </ul>
        </li>
        <li>
          <ul className='py-2'>
            <li className='px-4 py-2 text-base'>Groups</li>
            <li>
              <Link href='#' className='option-dropdown grid-cols-[1fr_auto]'>
                Notifications Tones
                <ArrowBackIcon className='h-6 w-6 rotate-180 fill-current' />
              </Link>
            </li>
            <li>
              <Link href='#' className='option-dropdown grid-cols-[1fr_auto]'>
                Vibrate
                <ArrowBackIcon className='h-6 w-6 rotate-180 fill-current' />
              </Link>
            </li>
            <li>
              <button className='option-dropdown w-full grid-cols-[1fr_auto]'>
                Reaction Notifications
                <Switch />
              </button>
            </li>
          </ul>
        </li>
        <li>
          <ul className='py-2'>
            <li className='px-4 py-2 text-base'>Calls</li>
            <li>
              <Link href='#' className='option-dropdown grid-cols-[1fr_auto]'>
                Notifications Tones
                <ArrowBackIcon className='h-6 w-6 rotate-180 fill-current' />
              </Link>
            </li>
            <li>
              <Link href='#' className='option-dropdown grid-cols-[1fr_auto]'>
                Vibrate
                <ArrowBackIcon className='h-6 w-6 rotate-180 fill-current' />
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  )
}

export default NotificationsPage
