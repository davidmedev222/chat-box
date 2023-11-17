import { ArrowBackIcon } from '@/components'
import { Routes } from '@/utils'
import Link from 'next/link'

function LinkBack() {
  return (
    <Link
      href={Routes.Home}
      className='absolute left-4 top-4 z-10 rounded-full border border-orange-400 p-1 transition-colors duration-300 hover:text-orange-400'
    >
      <ArrowBackIcon className='fill-black' />
    </Link>
  )
}

export default LinkBack
