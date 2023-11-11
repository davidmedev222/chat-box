interface Props {
  children: React.ReactNode
}

function OptionsDropdown({ children }: Props) {
  return (
    <ul className='absolute right-0 top-[calc(100%+8px)] w-max divide-y rounded-2xl bg-white px-4 text-left font-medium text-black shadow-xl'>
      {children}
    </ul>
  )
}

export default OptionsDropdown
