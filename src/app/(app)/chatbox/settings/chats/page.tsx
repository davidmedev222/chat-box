import { ExportIcon, PageHeader, ScheduleIcon, Switch, VisibilityIcon, WallpaperIcon } from '@/chatbox/components'
import { ArrowBackIcon } from '@/components'
import Link from 'next/link'

function ChatsPage() {
  return (
    <div>
      <PageHeader title='Chats' />
      <ul className='font-medium'>
        <li>
          <Link href='#' className='option-dropdown'>
            <WallpaperIcon className='fill-current' /> Wallpaper
            <ArrowBackIcon className='h-6 w-6 rotate-180 fill-current' />
          </Link>
        </li>
        <li>
          <Link href='#' className='option-dropdown'>
            <ScheduleIcon className='fill-current' /> Chat History
            <ArrowBackIcon className='h-6 w-6 rotate-180 fill-current' />
          </Link>
        </li>
        <li>
          <ul className='py-2'>
            <li className='px-4 py-2 text-base'>Chats Settings</li>
            <li>
              <button className='option-dropdown w-full'>
                <ArrowBackIcon className='h-6 w-6 -rotate-90 fill-current' /> Enter is Send
                <Switch />
              </button>
            </li>
            <li>
              <button className='option-dropdown w-full'>
                <VisibilityIcon className='fill-current' /> Media Visibility
                <Switch />
              </button>
            </li>
          </ul>
        </li>
        <li>
          <ul className='py-2'>
            <li className='px-4 py-2 text-base'>Archived Chats</li>
            <li>
              <button className='option-dropdown w-full'>
                <ExportIcon className='fill-current' /> Keep Chats Archived
                <Switch />
              </button>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  )
}

export default ChatsPage
