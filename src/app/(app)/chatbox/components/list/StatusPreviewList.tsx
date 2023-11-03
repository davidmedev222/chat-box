import Link from 'next/link'
import { UserStatusPreview } from '../index'

interface Props {
  title: string
}

function StatusPreviewList({ title }: Props) {
  return (
    <ul className='grid gap-y-4'>
      <li className='font-medium text-gray-600'>{title}</li>
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
