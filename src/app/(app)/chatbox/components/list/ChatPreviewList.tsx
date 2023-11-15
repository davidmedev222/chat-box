import { Routes } from '@/chatbox/utils/const'
import Link from 'next/link'
import { UserChatPreview } from '../index'

function ChatPreviewList() {
  return (
    <ul>
      <li>
        <Link href={`${Routes.Chats}/1`}>
          <UserChatPreview />
        </Link>
      </li>
      <li>
        <Link href={`${Routes.Chats}/2`}>
          <UserChatPreview />
        </Link>
      </li>
      <li>
        <Link href={`${Routes.Chats}/3`}>
          <UserChatPreview />
        </Link>
      </li>
      <li>
        <Link href={`${Routes.Chats}/4`}>
          <UserChatPreview />
        </Link>
      </li>
      <li>
        <Link href={`${Routes.Chats}/5`}>
          <UserChatPreview />
        </Link>
      </li>
      <li>
        <Link href={`${Routes.Chats}/6`}>
          <UserChatPreview />
        </Link>
      </li>
      <li>
        <Link href={`${Routes.Chats}/7`}>
          <UserChatPreview />
        </Link>
      </li>
      <li>
        <Link href={`${Routes.Chats}/8`}>
          <UserChatPreview />
        </Link>
      </li>
      <li>
        <Link href={`${Routes.Chats}/9`}>
          <UserChatPreview />
        </Link>
      </li>
      <li>
        <Link href={`${Routes.Chats}/10`}>
          <UserChatPreview />
        </Link>
      </li>
    </ul>
  )
}

export default ChatPreviewList
