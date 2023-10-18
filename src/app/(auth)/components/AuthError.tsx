'use client'
import { InfoIcon } from '@/components'
import { useSearchParams } from 'next/navigation'
import { ERROR_CODES, ErrorCodes } from '../utils'

function AuthError() {
  const searchParams = useSearchParams()
  const hasError = searchParams.get('error') !== null
  const error = searchParams.get('error') as ErrorCodes

  return (
    hasError && (
      <div className='grid grid-cols-[auto_1fr] items-center justify-center gap-x-2 rounded-2xl bg-red-400 px-12 py-4 text-base text-white shadow-xl'>
        <InfoIcon className='fill-current' />
        <p>{ERROR_CODES[error] ?? ERROR_CODES.Default}</p>
      </div>
    )
  )
}

export default AuthError
