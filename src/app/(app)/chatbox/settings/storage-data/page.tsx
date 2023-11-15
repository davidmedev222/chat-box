import { FolderIcon } from '@/app/(landing)/services/components'
import { CallIcon, PageHeader, SignalIcon, Switch } from '@/chatbox/components'
import { ArrowBackIcon } from '@/components'
import Link from 'next/link'

function StorageDataPage() {
  return (
    <div>
      <PageHeader title='Storage And Data' />
      <ul className='font-medium'>
        <li>
          <Link href='#' className='option-dropdown w-full'>
            <FolderIcon className='h-6 w-6 fill-current' />
            Manage Storage
            <ArrowBackIcon className='h-6 w-6 rotate-180 fill-current' />
          </Link>
        </li>
        <li>
          <Link href='#' className='option-dropdown w-full'>
            <SignalIcon className='fill-current' />
            Network Usage
            <ArrowBackIcon className='h-6 w-6 rotate-180 fill-current' />
          </Link>
        </li>
        <li>
          <button className='option-dropdown w-full'>
            <CallIcon className='h-6 w-6 fill-current' />
            Use Less Data for Calls
            <Switch />
          </button>
        </li>
        <li>
          <ul className='py-2'>
            <li className='px-4 py-2 text-base'>Media Auto-Download</li>
            <li>
              <Link href='#' className='option-dropdown grid-cols-[1fr_auto]'>
                When Using Mobile Data
                <ArrowBackIcon className='h-6 w-6 rotate-180 fill-current' />
              </Link>
            </li>
            <li>
              <Link href='#' className='option-dropdown grid-cols-[1fr_auto]'>
                When Connected on Wi-Fi
                <ArrowBackIcon className='h-6 w-6 rotate-180 fill-current' />
              </Link>
            </li>
            <li>
              <Link href='#' className='option-dropdown grid-cols-[1fr_auto]'>
                When Roaming
                <ArrowBackIcon className='h-6 w-6 rotate-180 fill-current' />
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <ul className='py-2'>
            <li className='px-4 py-2 text-base'>Media Upload Quality</li>
            <li>
              <Link href='#' className='option-dropdown grid-cols-[1fr_auto]'>
                Photo Upload Quality
                <ArrowBackIcon className='h-6 w-6 rotate-180 fill-current' />
              </Link>
            </li>
            <li>
              <Link href='#' className='option-dropdown grid-cols-[1fr_auto]'>
                Video Upload Quality
                <ArrowBackIcon className='h-6 w-6 rotate-180 fill-current' />
              </Link>
            </li>
            <li>
              <Link href='#' className='option-dropdown grid-cols-[1fr_auto]'>
                Document Upload Quality
                <ArrowBackIcon className='h-6 w-6 rotate-180 fill-current' />
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  )
}

export default StorageDataPage
