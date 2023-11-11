import { ArrowBackIcon } from '@/components'
import { CallIcon, UserAvatar } from '../index'

function UserCallPreview() {
  return (
    <article className='grid grid-cols-[auto_1fr_auto] items-center gap-x-4 px-4 py-2 hover:bg-gray-100'>
      <UserAvatar />
      <div className='grid'>
        <p className='line-clamp-1 text-base font-medium'>Elmer Lavertly</p>
        <div className='grid grid-cols-[auto_1fr] items-center gap-x-1'>
          <ArrowBackIcon className='h-3.5 w-3.5 rotate-90 rounded-2xl bg-green-400 fill-white p-0.5' />
          <p className='line-clamp-1 text-gray-500'>Incoming | Yesterday 16:25</p>
        </div>
      </div>
      <button>
        <CallIcon className='fill-orange-400' />
      </button>
    </article>
  )
}

export default UserCallPreview
