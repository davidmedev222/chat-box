import { PageHeader, SearchIcon, UserAvatar, UserContactPreview, Widget } from '@/chatbox/components'

const userSelected = Array.from({ length: 13 })

function NewGroupPage() {
  return (
    <div className='grid max-h-screen grid-rows-[auto_auto_1fr]'>
      <PageHeader title='New Group'>
        <button>
          <SearchIcon className='fill-current' />
        </button>
      </PageHeader>
      <article className='grid gap-y-2 px-4 py-2'>
        <p className='font-medium text-black/70'>44 of 1152 selected</p>
        <footer className='scroll-orange flex snap-x snap-mandatory gap-x-2 overflow-x-scroll py-1'>
          {userSelected.map((_, i) => (
            <UserAvatar key={i} className='shrink-0 snap-start' />
          ))}
        </footer>
      </article>
      <ul className='scroll-orange overflow-y-auto'>
        {userSelected.map((_, i) => (
          <li key={i}>
            <UserContactPreview />
          </li>
        ))}
      </ul>
      <Widget href='#' icon='next' position='one' />
    </div>
  )
}

export default NewGroupPage
