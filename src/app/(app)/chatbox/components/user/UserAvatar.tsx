import { CloseIcon } from '@/components'
import clsx from 'clsx'
import Image from 'next/image'
import { EditIcon } from '../index'

interface Props {
  badge?: 'status' | 'add' | 'edit'
  border?: boolean
  size?: number
  className?: string
  priority?: boolean
  src: string
}

function UserAvatar({ badge, border, priority, src, size = 48, className }: Props) {
  const classes = {
    avatar: clsx(
      'relative h-12 w-12',
      border && 'rounded-full outline outline-orange-400',
      badge === 'status' &&
        'before:absolute before:bottom-0 before:right-0 before:block before:h-3 before:w-3 before:rounded-full before:bg-orange-400 before:outline before:outline-white',
      className
    )
  }

  return (
    <div className={classes.avatar}>
      {badge === 'add' && (
        <CloseIcon className='absolute bottom-0 right-0 h-3 w-3 rotate-45 rounded-full bg-orange-400 fill-white p-0.5 outline outline-white' />
      )}
      {badge === 'edit' && (
        <EditIcon className='absolute bottom-0 right-2 h-6 w-6 rounded-full bg-orange-400 fill-white p-0.5 outline outline-white' />
      )}
      <Image
        className='h-full w-full rounded-full object-cover'
        src={src}
        width={size}
        height={size}
        priority={priority}
        alt='User profile avatar'
      />
    </div>
  )
}

export default UserAvatar
