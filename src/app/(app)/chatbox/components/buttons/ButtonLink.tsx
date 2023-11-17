import Link, { LinkProps } from 'next/link'

interface Props extends LinkProps {
  children: React.ReactNode
  icon: JSX.Element
}

function ButtonLink({ children, icon, ...rest }: Props) {
  return (
    <Link
      className='grid grid-cols-[auto_1fr] items-center gap-x-4 px-4 py-2 text-base font-medium hover:bg-gray-100 dark:hover:bg-gray-600'
      {...rest}
    >
      <span className='grid h-12 w-12 items-center justify-center rounded-full bg-orange-400'>{icon}</span>
      {children}
    </Link>
  )
}

export default ButtonLink
