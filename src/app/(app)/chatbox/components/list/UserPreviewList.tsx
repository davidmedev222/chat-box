import { Routes } from '@/chatbox/utils/const'
import Link from 'next/link'
import { UserContactPreview } from '../index'

function UserPreviewList() {
  return (
    <ul>
      <li>
        <Link href={`${Routes.Chats}/1`}>
          <UserContactPreview />
        </Link>
      </li>
      <li>
        <Link href={`${Routes.Chats}/2`}>
          <UserContactPreview />
        </Link>
      </li>
      <li>
        <Link href={`${Routes.Chats}/3`}>
          <UserContactPreview />
        </Link>
      </li>
      <li>
        <Link href={`${Routes.Chats}/4`}>
          <UserContactPreview />
        </Link>
      </li>
      <li>
        <Link href={`${Routes.Chats}/5`}>
          <UserContactPreview />
        </Link>
      </li>
      <li>
        <Link href={`${Routes.Chats}/6`}>
          <UserContactPreview />
        </Link>
      </li>
      <li>
        <Link href={`${Routes.Chats}/7`}>
          <UserContactPreview />
        </Link>
      </li>
      <li>
        <Link href={`${Routes.Chats}/8`}>
          <UserContactPreview />
        </Link>
      </li>
      <li>
        <Link href={`${Routes.Chats}/9`}>
          <UserContactPreview />
        </Link>
      </li>
      <li>
        <Link href={`${Routes.Chats}/10`}>
          <UserContactPreview />
        </Link>
      </li>
      <li>
        <Link href={`${Routes.Chats}/11`}>
          <UserContactPreview />
        </Link>
      </li>
      <li>
        <Link href={`${Routes.Chats}/12`}>
          <UserContactPreview />
        </Link>
      </li>
    </ul>
  )
}

export default UserPreviewList
