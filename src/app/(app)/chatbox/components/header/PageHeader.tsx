'use client'
import { ArrowBackIcon } from '@/components'
import { useRouter } from 'next/navigation'

interface Props {
  title: string
  children?: React.ReactNode
}
function PageHeader({ title, children }: Props) {
  const router = useRouter()

  return (
    <header className='flex items-center gap-x-4 bg-orange-400 p-4 text-white'>
      <button onClick={() => router.back()}>
        <ArrowBackIcon className='h-6 w-6 fill-current' />
      </button>
      <p className='line-clamp-1 grow text-lg font-medium'>{title}</p>
      {children}
    </header>
  )
}

export default PageHeader
