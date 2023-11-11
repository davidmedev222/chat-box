'use client'
import { CallLogList } from '@/chatbox/calls/call-info/[id]/components'
import {
  BlockIcon,
  CallIcon,
  OptionDropwdown,
  OptionsDropdown,
  OptionsMoreIcon,
  PageHeader,
  TrashIcon,
  UserContactPreview,
  VideoCamIcon
} from '@/chatbox/components'
import { useToggle } from '@/hooks'

function CallInfoPage() {
  const [showOptionsMore, toggleShowOptionsMore] = useToggle(false)

  return (
    <div>
      <PageHeader title='Call Info'>
        <button onClick={toggleShowOptionsMore} className='relative'>
          <OptionsMoreIcon className='fill-current' />
          {showOptionsMore && (
            <OptionsDropdown>
              <OptionDropwdown>
                <TrashIcon className='fill-current' /> Remove from Call Log
              </OptionDropwdown>
              <OptionDropwdown>
                <BlockIcon className='fill-current' /> Block
              </OptionDropwdown>
            </OptionsDropdown>
          )}
        </button>
      </PageHeader>
      <UserContactPreview
        actions={
          <div className='flex items-center gap-x-4 text-orange-400'>
            <button>
              <CallIcon className='fill-current' />
            </button>
            <button>
              <VideoCamIcon className='fill-current' />
            </button>
          </div>
        }
      />
      <CallLogList date='Today, December 22, 2024' />
      <CallLogList date='Wednesday, November 23, 2024' />
    </div>
  )
}

export default CallInfoPage
