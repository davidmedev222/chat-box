import Link from 'next/link'
import { Routes } from '../../utils/const'
import { UserCallPreview } from '../index'

const users = Array.from({ length: 13 })

function CallPreviewList() {
  return (
    <ul>
      {users.map((_, i) => (
        <li key={i}>
          <Link href={`${Routes.CallInfo}/${i}`}>
            <UserCallPreview />
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default CallPreviewList
