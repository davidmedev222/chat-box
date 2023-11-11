'use client'
import {
  CallIcon,
  ChatFooter,
  ChatMessageList,
  ChatOptionList,
  OptionsMoreIcon,
  PageHeader,
  VideoCamIcon
} from '@/chatbox/components'
import { useToggle } from '@/hooks'

interface Props {
  params: { id: string }
}

function ChatPage({ params }: Props) {
  const [showOptionsMore, toggleShowOptionsMore] = useToggle(false)

  return (
    <div className='grid max-h-screen min-h-screen grid-rows-[auto_1fr_auto]'>
      <PageHeader title='Mattew Anderson'>
        <button>
          <CallIcon className='fill-current' />
        </button>
        <button>
          <VideoCamIcon className='fill-current' />
        </button>
        <button onClick={toggleShowOptionsMore} className='relative'>
          <OptionsMoreIcon className='fill-current' />
          {showOptionsMore && <ChatOptionList />}
        </button>
      </PageHeader>
      <ChatMessageList />
      <ChatFooter />
    </div>
  )
}

export default ChatPage
