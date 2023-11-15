interface Props {
  children: React.ReactNode
}

function OptionsDropdown({ children }: Props) {
  return <ul className='options-dropdown'>{children}</ul>
}

export default OptionsDropdown
