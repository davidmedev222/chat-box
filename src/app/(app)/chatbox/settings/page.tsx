import { PageHeader, UserCard } from '@/chatbox/components'
import { Routes } from '@/chatbox/utils/const'
import Link from 'next/link'
import { OptionList } from './components'

function SettingsPage() {
  return (
    <div>
      <PageHeader title='Settings' />
      <Link href={Routes.SettingsProfile}>
        <UserCard />
      </Link>
      <OptionList />
    </div>
  )
}

export default SettingsPage
