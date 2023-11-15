'use client'
import { FolderIcon } from '@/app/(landing)/services/components'
import {
  DarkModeIcon,
  LogoutIcon,
  MessageIcon,
  NotificationIcon,
  PersonIcon,
  SecurityIcon,
  Switch
} from '@/chatbox/components'
import { Routes } from '@/chatbox/utils/const'
import { ArrowBackIcon, Button, InfoIcon, PersonGroupIcon } from '@/components'
import { useToggle } from '@/hooks'
import clsx from 'clsx'
import { signOut } from 'next-auth/react'
import Link from 'next/link'

function OptionList() {
  const [showLogout, toggleShowLogout] = useToggle(false)

  const classes = {
    bottomsheet: clsx(
      'transition-position absolute -bottom-full grid w-full justify-items-center gap-y-6 rounded-t-2xl border-t border-gray-200 bg-white px-4 py-8 duration-300',
      showLogout && '!bottom-0'
    )
  }

  return (
    <ul className='font-medium text-black'>
      <li>
        <Link href={Routes.SettingsAccount} className='option-dropdown'>
          <PersonIcon className='fill-current' /> Account
          <ArrowBackIcon className='h-6 w-6 rotate-180 fill-current' />
        </Link>
      </li>
      <li>
        <Link href={Routes.SettingsChats} className='option-dropdown'>
          <MessageIcon className='fill-current' /> Chats
          <ArrowBackIcon className='h-6 w-6 rotate-180 fill-current' />
        </Link>
      </li>
      <li>
        <Link href={Routes.SettingsNotifications} className='option-dropdown'>
          <NotificationIcon className='fill-current' /> Notifications
          <ArrowBackIcon className='h-6 w-6 rotate-180 fill-current' />
        </Link>
      </li>
      <li>
        <Link href={Routes.SettingsStorageData} className='option-dropdown'>
          <FolderIcon className='h-6 w-6 fill-current' /> Storage & Data
          <ArrowBackIcon className='h-6 w-6 rotate-180 fill-current' />
        </Link>
      </li>
      <li>
        <Link href={Routes.SettingsSecurity} className='option-dropdown'>
          <SecurityIcon className='fill-current' /> Security
          <ArrowBackIcon className='h-6 w-6 rotate-180 fill-current' />
        </Link>
      </li>
      <li>
        <button className='option-dropdown w-full'>
          <DarkModeIcon className='fill-current' /> Dark Mode
          <Switch />
        </button>
      </li>
      <li>
        <Link href={Routes.SettingsHelpCenter} className='option-dropdown'>
          <InfoIcon className='h-6 w-6 fill-current' /> Help Center
          <ArrowBackIcon className='h-6 w-6 rotate-180 fill-current' />
        </Link>
      </li>
      <li>
        <Link href={Routes.SettingsInviteFriends} className='option-dropdown'>
          <PersonGroupIcon className='h-6 w-6 fill-current' /> Invite Friends
          <ArrowBackIcon className='h-6 w-6 rotate-180 fill-current' />
        </Link>
      </li>
      <li>
        <button onClick={toggleShowLogout} className='option-dropdown w-full text-red-500'>
          <LogoutIcon className='fill-current' /> Logout
        </button>
        <div className={classes.bottomsheet}>
          <span className='text-xl font-medium text-red-400'>Logout</span>
          <p className='text-base font-medium'>Are you sure you want to log out?</p>
          <div className='grid gap-2 justify-self-stretch min-[426px]:grid-cols-2'>
            <Button onClick={toggleShowLogout} variant='normal'>
              Cancel
            </Button>
            <Button onClick={async () => await signOut()} variant='orange'>
              Yes, Logout
            </Button>
          </div>
        </div>
      </li>
    </ul>
  )
}

export default OptionList
