import clsx from 'clsx'
import { CallIcon, CameraIcon, EditIcon, MessageIcon } from '../index'

interface Props {
  icon: 'message' | 'call' | 'edit' | 'camera' | 'arrow' | 'check'
  position: 'one' | 'two'
}

function Widget({ icon, position }: Props) {
  const classes = clsx(
    'fixed right-4 rounded-full bg-orange-400 p-2.5 transition-colors duration-300 hover:bg-orange-600',
    position === 'one' && 'bottom-[4%]',
    position === 'two' && 'bottom-[12%]'
  )

  return (
    <button className={classes}>
      {icon === 'message' && <MessageIcon />}
      {icon === 'camera' && <CameraIcon />}
      {icon === 'edit' && <EditIcon />}
      {icon === 'call' && <CallIcon className='fill-white' />}
    </button>
  )
}

export default Widget
