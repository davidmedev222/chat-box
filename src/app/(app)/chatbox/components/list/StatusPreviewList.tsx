import Link from 'next/link'
import { UserStatusPreview } from '../index'

interface Props {
  title: string
}

function StatusPreviewList({ title }: Props) {
  return (
    <ul>
      <li className='px-4 py-2 font-medium text-gray-600 dark:text-gray-400'>{title}</li>
      <li>
        <Link href='#'>
          <UserStatusPreview />
        </Link>
      </li>
      <li>
        <Link href='#'>
          <UserStatusPreview />
        </Link>
      </li>
      <li>
        <Link href='#'>
          <UserStatusPreview />
        </Link>
      </li>
    </ul>
  )
}

export default StatusPreviewList
