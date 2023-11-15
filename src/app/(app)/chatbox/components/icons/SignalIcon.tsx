interface Props {
  className?: string
}

function SignalIcon({ className }: Props) {
  return (
    <svg className={className} xmlns='http://www.w3.org/2000/svg' height='24' viewBox='0 -960 960 960' width='24'>
      <path d='M200-160v-240h120v240H200Zm240 0v-440h120v440H440Zm240 0v-640h120v640H680Z' />
    </svg>
  )
}

export default SignalIcon
