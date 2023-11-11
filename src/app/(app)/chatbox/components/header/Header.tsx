'use client'
import { Routes as ChatboxRoutes } from '@/chatbox/utils/const'
import { PersonGroupIcon } from '@/components'
import { useToggle } from '@/hooks'
import { Routes } from '@/utils'
import Link from 'next/link'
import {
  OptionDropwdown,
  OptionsDropdown,
  OptionsMoreIcon,
  SearchIcon,
  SettingIcon,
  SmileIcon,
  StarIcon
} from '../index'

function Header() {
  const [showOptionsMore, toggleShowOptionsMore] = useToggle(false)

  return (
    <header className='flex items-center gap-x-2 bg-orange-400 p-4 text-white'>
      <Link href={Routes.Chatbox} className='mr-auto flex items-center gap-x-2 text-lg font-medium'>
        <SmileIcon className='fill-current' />
        Chatbox
      </Link>
      <button>
        <SearchIcon className='fill-current' />
      </button>
      <button onClick={toggleShowOptionsMore} className='relative'>
        <OptionsMoreIcon className='fill-current' />
        {showOptionsMore && (
          <OptionsDropdown>
            <OptionDropwdown>
              <Link className='grid grid-cols-[auto_1fr] items-center gap-x-4' href={ChatboxRoutes.NewGroup}>
                <PersonGroupIcon className='h-6 w-6 fill-current' /> New Group
              </Link>
            </OptionDropwdown>
            <OptionDropwdown>
              <Link className='grid grid-cols-[auto_1fr] items-center gap-x-4' href={ChatboxRoutes.StarredMessages}>
                <StarIcon className='fill-current' /> Starred Messages
              </Link>
            </OptionDropwdown>
            <OptionDropwdown>
              <Link className='grid grid-cols-[auto_1fr] items-center gap-x-4' href={ChatboxRoutes.Settings}>
                <SettingIcon className='fill-current' /> Settings
              </Link>
            </OptionDropwdown>
          </OptionsDropdown>
        )}
      </button>
    </header>
  )
}

export default Header
