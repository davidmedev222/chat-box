import { ArchiveIcon } from '../index'

function ArchivedChatPreview() {
  return (
    <article className='flex items-center gap-x-4'>
      <ArchiveIcon className='mx-1.5 rounded-full bg-orange-400 fill-white p-2' />
      <p className='grow text-base font-medium'>Archived</p>
      <span className='rounded-2xl bg-orange-400 px-1 py-0.5 text-xs text-white'>82</span>
    </article>
  )
}

export default ArchivedChatPreview
