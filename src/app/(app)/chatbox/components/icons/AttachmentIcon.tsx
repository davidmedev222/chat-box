interface Props {
  className: string
}

function AttachmentIcon({ className }: Props) {
  return (
    <svg className={className} xmlns='http://www.w3.org/2000/svg' height='24' viewBox='0 -960 960 960' width='24'>
      <path d='M300-260q-92 0-156-64T80-480q0-92 64-156t156-64h420q66 0 113 47t47 113q0 66-47 113t-113 47H340q-42 0-71-29t-29-71q0-42 29-71t71-29h380v60H340q-17 0-28.5 11.5T300-480q0 17 11.5 28.5T340-440h380q42 0 71-29t29-71q0-42-29-71t-71-29H300q-66 0-113 47t-47 113q0 66 47 113t113 47h420v60H300Z' />
    </svg>
  )
}

export default AttachmentIcon
