'use client'
import { CloseIcon } from '@/components'
import { useToggle } from '@/hooks'
import clsx from 'clsx'

interface Props {
  question: string
  answer: string
}

function FaqItem({ question, answer }: Props) {
  const [isOpen, toggleState] = useToggle(false)
  const classes = {
    question: clsx(
      'flex w-full cursor-pointer items-center justify-between gap-x-4 rounded-2xl border p-4 text-base font-medium',
      isOpen && 'border-orange-400'
    ),
    icon: clsx('h-4 w-4 rotate-45 transition-transform duration-300', isOpen && 'rotate-180'),
    answer: clsx('grid grid-rows-[0] overflow-hidden', isOpen && 'grid-rows-[1fr] p-4')
  }

  return (
    <li>
      <button onClick={toggleState} className={classes.question}>
        {question} <CloseIcon className={classes.icon} />
      </button>
      <p className={classes.answer}>{answer}</p>
    </li>
  )
}

export default FaqItem
