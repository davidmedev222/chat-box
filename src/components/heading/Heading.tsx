interface Props {
  children: React.ReactNode
}

function Heading({ children }: Props) {
  return <h1 className='text-5xl font-medium text-black lg:text-6xl'>{children}</h1>
}

export default Heading
