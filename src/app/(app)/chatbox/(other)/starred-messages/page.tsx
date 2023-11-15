import { ChatMessageCard, OptionsMoreIcon, PageHeader, SearchIcon } from '@/chatbox/components'

const messages = Array.from({ length: 13 })

function StarredMessagesPage() {
  return (
    <div>
      <PageHeader title='Starred Messages'>
        <button>
          <SearchIcon className='fill-current' />
        </button>
        <button>
          <OptionsMoreIcon className='fill-current' />
        </button>
      </PageHeader>
      <ul className='scroll-orange grid justify-items-end gap-y-4 overflow-y-auto p-4'>
        {messages.map((_, i) => (
          <li key={i}>
            <ChatMessageCard type='starred' />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default StarredMessagesPage
