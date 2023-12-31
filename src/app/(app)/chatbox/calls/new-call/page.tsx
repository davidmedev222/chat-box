'use client'
import {
  ButtonLink,
  CallIcon,
  OptionDropwdown,
  OptionsDropdown,
  OptionsMoreIcon,
  PageHeader,
  PersonAddIcon,
  SearchIcon,
  UserContactPreview,
  VideoCamIcon
} from '@/chatbox/components'
import { Routes } from '@/chatbox/utils/const'
import { InfoIcon, PersonGroupIcon } from '@/components'
import { useToggle } from '@/hooks'
import Link from 'next/link'

const users = Array.from({ length: 13 })

function NewCallPage() {
  const [showOptionsMore, toggleShowOptionsMore] = useToggle(false)

  return (
    <div className='grid min-h-screen grid-rows-[auto_auto_auto_1fr]'>
      <PageHeader title='Select Contact'>
        <button>
          <SearchIcon className='fill-current' />
        </button>
        <button onClick={toggleShowOptionsMore} className='relative'>
          <OptionsMoreIcon className='fill-current' />
          {showOptionsMore && (
            <OptionsDropdown>
              <OptionDropwdown className='option-dropdown'>
                <PersonAddIcon className='fill-current' /> Invite a friend
              </OptionDropwdown>
              <OptionDropwdown className='option-dropdown'>
                <PersonGroupIcon className='h-6 w-6 fill-current' /> Contacts
              </OptionDropwdown>
              <OptionDropwdown className='option-dropdown'>
                <InfoIcon className='h-6 w-6 fill-current' /> Help
              </OptionDropwdown>
            </OptionsDropdown>
          )}
        </button>
      </PageHeader>
      <ButtonLink href='#' icon={<PersonGroupIcon className='h-6 w-6 fill-white' />}>
        New Group Call
      </ButtonLink>
      <ButtonLink href='#' icon={<PersonAddIcon className='fill-white' />}>
        New Contact
      </ButtonLink>
      <ul>
        {users.map((_, i) => (
          <li key={i}>
            <Link href={`${Routes.CallInfo}/${i}`}>
              <UserContactPreview
                actions={
                  <div className='flex items-center gap-x-4 text-orange-400'>
                    <button>
                      <CallIcon className='fill-current' />
                    </button>
                    <button>
                      <VideoCamIcon className='fill-current' />
                    </button>
                  </div>
                }
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default NewCallPage
