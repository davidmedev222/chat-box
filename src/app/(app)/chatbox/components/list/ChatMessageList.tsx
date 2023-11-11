import { ChatMessageCard } from '../index'

function ChatMessageList() {
  return (
    <ul className='scroll-orange flex flex-col items-end gap-y-4 overflow-y-auto bg-white p-4'>
      <li className='self-center'>
        <small className='rounded-2xl bg-gray-50 px-4 py-1 font-medium text-gray-400'>Today</small>
      </li>
      <li>
        <ChatMessageCard />
      </li>
      <li>
        <ChatMessageCard />
      </li>
      <li>
        <ChatMessageCard />
      </li>
      <li>
        <ChatMessageCard />
      </li>
      <li>
        <ChatMessageCard />
      </li>
      <li>
        <ChatMessageCard />
      </li>
      <li>
        <ChatMessageCard />
      </li>
      <li>
        <ChatMessageCard />
      </li>
      <li>
        <ChatMessageCard />
      </li>
      <li>
        <ChatMessageCard />
      </li>
      <li>
        <ChatMessageCard />
      </li>
    </ul>
  )
}

export default ChatMessageList
