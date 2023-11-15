import { UserAvatar } from '../index'

interface Props {
  actions?: JSX.Element
}

function UserContactPreview({ actions }: Props) {
  return (
    <article className='grid grid-cols-[auto_1fr_auto] items-center gap-x-4 px-4 py-2 hover:bg-gray-100'>
      <UserAvatar src='/assets/about.webp' />
      <div className='grid'>
        <p className='line-clamp-1 text-base font-medium'>Florencio Darrance</p>
        <p className='line-clamp-1 text-gray-500'>florenciodarrance@gmail.com</p>
      </div>
      {actions && actions}
    </article>
  )
}

export default UserContactPreview
