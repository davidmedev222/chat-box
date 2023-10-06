interface Props {
  className: string
}

function MenuIcon({ className }: Props) {
  return (
    <svg className={className} xmlns='http://www.w3.org/2000/svg' viewBox='0 -960 960 960'>
      <path d='M160-360v-80h640v80H160Zm0-160v-80h640v80H160Z' />
    </svg>
  )
}

export default MenuIcon
