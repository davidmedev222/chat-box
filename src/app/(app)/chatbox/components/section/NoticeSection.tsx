import { Button } from '@/components'
import { BadIcon, CallIcon, SmileIcon } from '../index'

interface Props {
  icon: 'smile' | 'call' | 'bad'
  title: string
  description: string
  button?: string
}

function NoticeSection({ icon, title, description, button }: Props) {
  return (
    <section className='m-auto space-y-5 text-center'>
      {icon === 'smile' && <SmileIcon className='mx-auto h-28 w-28 fill-orange-400' />}
      {icon === 'call' && <CallIcon className='mx-auto h-28 w-28 fill-orange-400' />}
      {icon === 'bad' && <BadIcon className='mx-auto h-28 w-28 fill-orange-400' />}
      <p className='text-4xl font-medium text-orange-400'>{title}</p>
      <p className='mx-auto max-w-[288px]'>{description}</p>
      {button && <Button variant='orange'>{button}</Button>}
    </section>
  )
}

export default NoticeSection
