import { ArrowBackIcon } from '@/components'
import clsx from 'clsx'
import Link, { LinkProps } from 'next/link'
import { CallIcon, CameraIcon, EditIcon, MessageIcon } from '../index'

interface Props extends LinkProps {
  icon: 'message' | 'call' | 'edit' | 'camera' | 'arrow' | 'check' | 'next'
  position: 'one' | 'two'
}

function Widget({ icon, position, ...rest }: Props) {
  const classes = clsx(
    'absolute right-4 rounded-full bg-orange-400 p-2.5 transition-colors duration-300 hover:bg-orange-600',
    position === 'one' && 'bottom-[4%]',
    position === 'two' && 'bottom-[12%]'
  )

  return (
    <Link className={classes} {...rest}>
      {icon === 'message' && <MessageIcon className='fill-white' />}
      {icon === 'camera' && <CameraIcon className='fill-white' />}
      {icon === 'edit' && <EditIcon />}
      {icon === 'call' && <CallIcon className='h-6 w-6 fill-white' />}
      {icon === 'next' && <ArrowBackIcon className='h-6 w-6 rotate-180 fill-white' />}
    </Link>
  )
}

export default Widget
