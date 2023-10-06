'use client'
import { HamburgerMenu, LogoIcon, MenuIcon } from '@/components'
import { useToggle } from '@/hooks'
import { LinkRoutes, Routes } from '@/utils'
import Link from 'next/link'

function Header() {
  const [isMenuOpen, toggleMenuOpen] = useToggle()

  return (
    <header className='fixed z-10 flex w-full items-center justify-between gap-x-16 p-4 lg:px-16 lg:py-8'>
      <Link href={Routes.Home}>
        <LogoIcon className='h-12 w-12' />
      </Link>
      <nav className='hidden lg:block'>
        <ul className='flex items-center gap-x-16'>
          {LinkRoutes.map((link) => (
            <li key={link.id}>
              <Link href={link.href}>{link.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <button onClick={toggleMenuOpen} className='ml-auto'>
        <MenuIcon className='h-12 w-12' />
      </button>
      <HamburgerMenu isOpen={isMenuOpen} onClose={toggleMenuOpen} />
    </header>
  )
}

export default Header
