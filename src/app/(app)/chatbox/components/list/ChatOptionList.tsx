import { InfoIcon } from '@/components'
import {
  BlockIcon,
  ExportIcon,
  NotificationIcon,
  OptionDropwdown,
  OptionsDropdown,
  ScheduleIcon,
  SearchIcon,
  TrashIcon,
  WallpaperIcon
} from '../index'

function ChatOptionList() {
  return (
    <OptionsDropdown>
      <OptionDropwdown>
        <SearchIcon className='h-6 w-6 fill-current' /> Search
      </OptionDropwdown>
      <OptionDropwdown>
        <NotificationIcon className='fill-current' /> Mute Notification
      </OptionDropwdown>
      <OptionDropwdown>
        <ScheduleIcon className='fill-current' /> Disappearing Messages
      </OptionDropwdown>
      <OptionDropwdown>
        <WallpaperIcon className='fill-current' /> Wallpaper
      </OptionDropwdown>
      <OptionDropwdown>
        <InfoIcon className='h-6 w-6 fill-current' /> Report
      </OptionDropwdown>
      <OptionDropwdown>
        <BlockIcon className='fill-current' /> Block
      </OptionDropwdown>
      <OptionDropwdown>
        <TrashIcon className='fill-current' /> Clear Chat
      </OptionDropwdown>
      <OptionDropwdown>
        <ExportIcon className='fill-current' /> Export Chat
      </OptionDropwdown>
    </OptionsDropdown>
  )
}

export default ChatOptionList
