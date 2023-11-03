import { Button } from '@/components'
import { CallIcon, SmileIcon } from '../index'

interface Props {
  icon: 'smile' | 'call'
  title: string
  description: string
  button: string
}

function WelcomeSection({ icon, title, description, button }: Props) {
  return (
    <section className='m-auto space-y-5 text-center'>
      {icon === 'smile' && <SmileIcon className='mx-auto h-28 w-28 fill-orange-400' />}
      {icon === 'call' && <CallIcon className='mx-auto h-28 w-28 fill-orange-400' />}
      <p className='text-4xl font-medium text-orange-400'>{title}</p>
      <p className='max-w-[288px]'>{description}</p>
      <Button variant='orange'>{button}</Button>
    </section>
  )
}

export default WelcomeSection
