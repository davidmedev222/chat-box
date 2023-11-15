import { ChatMessageCard } from '../index'

const messages = Array.from({ length: 13 })

function ChatMessageList() {
  return (
    <ul className='scroll-orange grid justify-items-end gap-y-4 overflow-y-auto bg-white p-4'>
      <li className='justify-self-center'>
        <small className='rounded-2xl bg-gray-50 px-4 py-1 font-medium text-gray-400'>Today</small>
      </li>
      {messages.map((_, i) => (
        <li key={i}>
          <ChatMessageCard type='done' />
        </li>
      ))}
    </ul>
  )
}

export default ChatMessageList
