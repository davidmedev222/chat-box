import { PageHeader, UserContactPreview } from '@/chatbox/components'
import { Button } from '@/components'

const users = Array.from({ length: 10 })

function InviteFriendsPage() {
  return (
    <div>
      <PageHeader title='Invite Friends' />
      <ul>
        {users.map((_, i) => (
          <li key={i}>
            <UserContactPreview
              actions={
                <Button className='!py-1 px-4 text-sm' variant='orange'>
                  Invite
                </Button>
              }
            />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default InviteFriendsPage
