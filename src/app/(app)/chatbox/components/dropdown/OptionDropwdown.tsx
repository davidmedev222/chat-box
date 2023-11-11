interface Props {
  children: React.ReactNode
}

function OptionDropwdown({ children }: Props) {
  return <li className='grid grid-cols-[auto_1fr] items-center gap-x-4 py-4'>{children}</li>
}

export default OptionDropwdown
