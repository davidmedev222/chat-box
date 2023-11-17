'use client'
import { HamburgerMenu, LogoIcon, MenuIcon } from '@/components'
import { useToggle } from '@/hooks'
import { LinkRoutes, Routes } from '@/utils'
import clsx from 'clsx'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const minScroll = 25

function Header() {
  const [scrolling, setScrolling] = useState(false)
  const [isMenuOpen, toggleMenuOpen] = useToggle()
  const classes = clsx(
    'fixed z-10 flex w-full items-center justify-between gap-x-16 p-4 lg:px-16 lg:py-8',
    scrolling && 'bg-white'
  )

  useEffect(() => {
    const handleScroll = () => {
      const isScrolling = window.scrollY > minScroll
      setScrolling(isScrolling)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={classes}>
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
