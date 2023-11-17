import { PersonGroupIcon } from '@/components'
import { AdvancedQueryIcon, FolderIcon, PhoneTalkIcon, RecordVoiceIcon, TuneIcon } from '../index'

function ServiceList() {
  return (
    <ul className='grid auto-rows-fr gap-6 sm:grid-cols-2 lg:grid-cols-3'>
      <li className='rounded-2xl bg-white p-8 shadow-xl shadow-orange-100 dark:bg-black/90 dark:shadow-orange-900'>
        <div className='space-y-2'>
          <RecordVoiceIcon className='fill-orange-400' />
          <div className='text-xl font-medium'>Voice Messaging</div>
          <p>It allows users to send voice messages, which adds a more personal element to conversations.</p>
        </div>
      </li>
      <li className='rounded-2xl bg-white p-8 shadow-xl shadow-orange-100 dark:bg-black/90 dark:shadow-orange-900'>
        <div className='space-y-2'>
          <PersonGroupIcon className='fill-orange-400' />
          <div className='text-xl font-medium'>Group Chats</div>
          <p>
            Allows users to create and join group conversations with friends, colleagues or communities of interest.
          </p>
        </div>
      </li>
      <li className='rounded-2xl bg-white p-8 shadow-xl shadow-orange-100 dark:bg-black/90 dark:shadow-orange-900'>
        <div className='space-y-2'>
          <PhoneTalkIcon className='fill-orange-400' />
          <div className='text-xl font-medium'>Voice and Video Calls</div>
          <p>It offers the ability to make high quality voice and video calls within the application.</p>
        </div>
      </li>
      <li className='rounded-2xl bg-white p-8 shadow-xl shadow-orange-100 dark:bg-black/90 dark:shadow-orange-900'>
        <div className='space-y-2'>
          <FolderIcon className='fill-orange-400' />
          <div className='text-xl font-medium'>File Integration</div>
          <p>
            Allows users to share and view files, such as images, documents, videos and more, directly from the
            conversation.
          </p>
        </div>
      </li>
      <li className='rounded-2xl bg-white p-8 shadow-xl shadow-orange-100 dark:bg-black/90 dark:shadow-orange-900'>
        <div className='space-y-2'>
          <TuneIcon className='fill-orange-400' />
          <div className='text-xl font-medium'>Customization</div>
          <p>
            It allows users to customize the appearance of the application, including a night mode for a more
            comfortable chat experience.
          </p>
        </div>
      </li>
      <li className='rounded-2xl bg-white p-8 shadow-xl shadow-orange-100 dark:bg-black/90 dark:shadow-orange-900'>
        <div className='space-y-2'>
          <AdvancedQueryIcon className='fill-orange-400' />
          <div className='text-xl font-medium'>Advanced Search</div>
          <p>
            It offers an advanced search function that allows users to find old messages and archives quickly and
            easily.
          </p>
        </div>
      </li>
    </ul>
  )
}

export default ServiceList
