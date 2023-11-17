'use client'
import {
  AttachmentIcon,
  NoticeSection,
  PriorityIcon,
  SearchIcon,
  VideoCamIcon,
  WallpaperIcon
} from '@/chatbox/components'
import { ArrowBackIcon } from '@/components'
import { useRouter } from 'next/navigation'

function SearchPage() {
  const router = useRouter()

  return (
    <div className='grid min-h-screen grid-rows-[auto_auto_1fr]'>
      <header className='flex items-center gap-x-4 p-4'>
        <button onClick={() => router.back()}>
          <ArrowBackIcon className='h-6 w-6 fill-current' />
        </button>
        <form className='grid grow grid-cols-[auto_1fr] items-center gap-x-2 rounded-2xl bg-gray-50 px-4 py-2 text-gray-400 focus-within:text-orange-400 focus-within:ring-1 focus-within:ring-orange-400 dark:bg-gray-950'>
          <SearchIcon className='h-6 w-6 fill-current' />
          <input type='search' placeholder='Type a search' />
        </form>
      </header>
      <ul className='scroll-orange flex snap-x scroll-px-4 items-center gap-x-2 overflow-x-auto px-4 py-2 text-orange-400'>
        <li className='flex shrink-0 snap-start items-center gap-x-1 rounded-2xl border border-orange-400 bg-orange-400 px-4 py-1 text-white'>
          <PriorityIcon className='h-4 w-4 fill-current' /> All
        </li>
        <li className='flex shrink-0 snap-start items-center gap-x-1 rounded-2xl border border-orange-400 px-4 py-1'>
          <AttachmentIcon className='h-4 w-4 -rotate-45 fill-current' /> Links
        </li>
        <li className='flex shrink-0 snap-start items-center gap-x-1 rounded-2xl border border-orange-400 px-4 py-1'>
          <WallpaperIcon className='h-4 w-4 fill-current' /> Photos
        </li>
        <li className='flex shrink-0 snap-start items-center gap-x-1 rounded-2xl border border-orange-400 px-4 py-1'>
          <VideoCamIcon className='h-4 w-4 fill-current' /> Videos
        </li>
      </ul>
      <NoticeSection
        icon='bad'
        title='Not Found'
        description='Sorry, the keyword you entered cannot be found, please check again or search with another keyword.'
      />
    </div>
  )
}

export default SearchPage
