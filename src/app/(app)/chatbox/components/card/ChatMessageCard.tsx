import { DoneAllIcon, StarIcon } from '../index'

interface Props {
  type: 'starred' | 'done'
}

function ChatMessageCard({ type }: Props) {
  return (
    <article className='grid max-w-screen-md grid-cols-[1fr_auto] items-center gap-2 rounded-2xl bg-orange-400 p-4 text-base text-white'>
      <p>
        Hi, good morning Jenny... 👋🦆 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, inventore nemo
        quidem temporibus sunt cupiditate itaque provident magni numquam tempora quia praesentium quae possimus impedit
        tenetur! Amet perferendis sapiente natus?
      </p>
      <div className='flex items-center gap-1 self-end'>
        <small>09:41</small>
        {type === 'starred' && <StarIcon className='h-3.5 w-3.5 fill-current' />}
        {type === 'done' && <DoneAllIcon className='h-3.5 w-3.5 fill-current' />}
      </div>
    </article>
  )
}

export default ChatMessageCard
