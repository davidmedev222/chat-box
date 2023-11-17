import { ArrowBackIcon } from '@/components'
const calls = Array.from({ length: 6 })

interface Props {
  date: string
}

function CallLogList({ date }: Props) {
  return (
    <ul className='grid gap-y-4 px-4 py-2'>
      <li>
        <p className='font-medium text-black/70 dark:text-gray-300'>{date}</p>
      </li>
      {calls.map((_, i) => (
        <li key={i}>
          <article className='grid grid-cols-[auto_1fr] items-center gap-x-2'>
            <ArrowBackIcon className='row-start-1 row-end-3 h-5 w-5 rotate-90 rounded-2xl bg-green-400 fill-white p-0.5 dark:fill-black' />
            <header className='flex justify-between font-medium'>
              <span>Incoming</span> <span className='text-black/90 dark:text-gray-100'>08:29 mins</span>
            </header>
            <footer className='flex justify-between font-medium text-black/50 dark:text-gray-400'>
              <small>16:25</small>
              <small>12.8 MB</small>
            </footer>
          </article>
        </li>
      ))}
    </ul>
  )
}

export default CallLogList
