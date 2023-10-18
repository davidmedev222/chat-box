import { ButtonLink, CloseIcon, SocialAuth } from '@/components'
import { LinkRoutes, Routes } from '@/utils'
import clsx from 'clsx'
import Link from 'next/link'
import { MouseEvent } from 'react'

interface Props {
  isOpen: boolean
  onClose: () => void
}

function HamburgerMenu({ isOpen, onClose }: Props) {
  const handleOnClose = (ev: MouseEvent<HTMLDivElement>) => {
    ev.target === ev.currentTarget && onClose()
  }

  const classes = {
    backdrop: clsx(
      'pointer-events-none fixed left-0 top-0 h-full w-full transition-colors duration-300',
      isOpen && 'pointer-events-auto overflow-auto bg-black/50'
    ),
    menu: clsx(
      'clip-right-0 absolute right-0 top-0 flex min-h-screen flex-col gap-y-8 bg-white px-8 py-14 transition-clip-path duration-150',
      isOpen && 'clip-0'
    )
  }

  return (
    <div onClick={handleOnClose} className={classes.backdrop}>
      <div className={classes.menu}>
        <button onClick={onClose} className='absolute right-0 top-0 mx-8 mt-2'>
          <CloseIcon className='h-10 w-10' />
        </button>
        <ul className='mb-auto grid gap-y-8 text-base lg:text-sm'>
          {LinkRoutes.map((link) => (
            <li key={link.id}>
              <Link href={link.href} onClick={onClose}>
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
        <ButtonLink variant='normal' href={Routes.Register}>
          Create Account
        </ButtonLink>
        <p className='text-center'>Or log in with</p>
        <SocialAuth />
      </div>
    </div>
  )
}

export default HamburgerMenu
