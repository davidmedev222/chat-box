interface Props {
  children: React.ReactNode
  className?: string
}

function OptionDropwdown({ children, className }: Props) {
  return <li className={className}>{children}</li>
}

export default OptionDropwdown
