import {
  ButtonLink,
  OptionsMoreIcon,
  PageHeader,
  PersonAddIcon,
  SearchIcon,
  UserPreviewList
} from '@/chatbox/components'
import { Routes } from '@/chatbox/utils/const'
import { PersonGroupIcon } from '@/components'

function NewChatPage() {
  return (
    <div className='grid min-h-screen grid-rows-[auto_auto_auto_1fr]'>
      <PageHeader title='Select Contact'>
        <button>
          <SearchIcon className='fill-current' />
        </button>
        <button>
          <OptionsMoreIcon className='fill-current' />
        </button>
      </PageHeader>
      <ButtonLink href={Routes.NewGroup} icon={<PersonGroupIcon className='h-6 w-6 fill-white' />}>
        New Group
      </ButtonLink>
      <ButtonLink href='#' icon={<PersonAddIcon className='fill-white' />}>
        New Contact
      </ButtonLink>
      <UserPreviewList />
    </div>
  )
}

export default NewChatPage
