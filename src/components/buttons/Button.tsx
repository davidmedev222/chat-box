'use client'
import clsx from 'clsx'
import { MouseEventHandler } from 'react'

interface Props {
  children: React.ReactNode
  variant: 'normal' | 'google' | 'github' | 'orange'
  iconLeft?: JSX.Element
  className?: string
  onClick?: MouseEventHandler<HTMLButtonElement>
}

function Button({ children, variant, iconLeft, className, onClick }: Props) {
  const classes = clsx(
    'rounded-2xl px-12 py-4 text-base shadow-xl transition duration-300 hover:scale-105',
    variant === 'normal' && 'bg-black text-white hover:bg-black/70 dark:bg-gray-600',
    variant === 'orange' && 'bg-orange-400 text-white hover:bg-orange-600',
    variant === 'google' && 'bg-white text-black hover:bg-white/70',
    variant === 'github' && 'bg-black text-white hover:bg-black/70',
    iconLeft && 'flex items-center justify-center gap-x-4',
    className
  )

  return (
    <button onClick={onClick} className={classes}>
      {iconLeft && iconLeft}
      {children}
    </button>
  )
}

export default Button
