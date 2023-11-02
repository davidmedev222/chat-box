import { Routes } from '@/utils'
import Link from 'next/link'
import { OptionsMoreIcon, SearchIcon, SmileIcon } from '../index'

function Header() {
  return (
    <header className='flex items-center gap-x-2 bg-orange-400 p-4 text-white'>
      <Link href={Routes.Chatbox} className='mr-auto flex items-center gap-x-2 text-lg font-medium'>
        <SmileIcon className='fill-current' />
        Chatbox
      </Link>
      <button>
        <SearchIcon className='fill-current' />
      </button>
      <button>
        <OptionsMoreIcon className='fill-current' />
      </button>
    </header>
  )
}

export default Header
