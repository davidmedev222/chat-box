import { CloseIcon } from '@/components'
import clsx from 'clsx'
import Image from 'next/image'

interface Props {
  badge?: 'status' | 'add'
  border?: boolean
}

function UserAvatar({ badge, border }: Props) {
  const classes = {
    avatar: clsx(
      'relative',
      border && 'rounded-full outline outline-orange-400',
      badge === 'status' &&
        'before:absolute before:bottom-0 before:right-0 before:block before:h-3 before:w-3 before:rounded-full before:bg-orange-400 before:outline before:outline-white'
    ),
    image: clsx('h-12 w-12 rounded-full object-cover')
  }

  return (
    <div className={classes.avatar}>
      {badge === 'add' && (
        <CloseIcon className='absolute bottom-0 right-0 h-3 w-3 rotate-45 rounded-full bg-orange-400 fill-white p-0.5 outline outline-white' />
      )}
      <Image className={classes.image} src='/assets/about.webp' width={48} height={48} alt='User profile avatar' />
    </div>
  )
}

export default UserAvatar
