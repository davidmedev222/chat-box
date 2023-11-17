'use client'
import clsx from 'clsx'
import Link, { LinkProps } from 'next/link'

interface Props extends LinkProps {
  children: React.ReactNode
  variant: 'normal' | 'google' | 'github'
  iconLeft?: JSX.Element
}

function ButtonLink({ children, variant, iconLeft, ...rest }: Props) {
  const classes = clsx(
    'rounded-2xl px-12 py-4 text-center text-base shadow-xl transition duration-300 hover:scale-105',
    variant === 'normal' && 'bg-black text-white hover:bg-black/70 dark:bg-gray-600',
    variant === 'google' && 'bg-white text-black hover:bg-white/70',
    variant === 'github' && 'bg-black text-white hover:bg-black/70',
    iconLeft && 'flex items-center gap-x-4'
  )

  return (
    <Link {...rest} className={classes}>
      {iconLeft && iconLeft}
      {children}
    </Link>
  )
}

export default ButtonLink
