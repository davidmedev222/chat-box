import clsx from 'clsx'

interface Props {
  children: React.ReactNode
  variant: 'normal' | 'google' | 'github'
  iconLeft?: JSX.Element
}

function Button({ children, variant, iconLeft }: Props) {
  const classes = clsx(
    'rounded-2xl px-12 py-4 text-base shadow-xl transition duration-300 hover:scale-105',
    variant === 'normal' && 'bg-black text-white hover:bg-black/70',
    variant === 'google' && 'bg-white text-black hover:bg-white/70',
    variant === 'github' && 'bg-black text-white hover:bg-black/70',
    iconLeft && 'flex items-center gap-x-4'
  )

  return (
    <button className={classes}>
      {iconLeft && iconLeft}
      {children}
    </button>
  )
}

export default Button
