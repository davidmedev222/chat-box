import { LogoIcon, MenuIcon } from '@/components'
import Link from 'next/link'

function Header() {
  return (
    <header className='fixed z-10 flex w-full items-center justify-between gap-x-16 p-4 lg:px-16 lg:py-8'>
      <Link href='/'>
        <LogoIcon className='h-12 w-12' />
      </Link>
      <nav className='hidden lg:block'>
        <ul className='flex items-center gap-x-16'>
          <li>
            <Link href='#'>About</Link>
          </li>
          <li>
            <Link href='#'>Company</Link>
          </li>
          <li>
            <Link href='#'>Services</Link>
          </li>
          <li>
            <Link href='#'>Pricing</Link>
          </li>
        </ul>
      </nav>
      <button className='ml-auto'>
        <MenuIcon className='h-12 w-12' />
      </button>
    </header>
  )
}

export default Header
