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
      <OptionDropwdown className='option-dropdown'>
        <SearchIcon className='h-6 w-6 fill-current' /> Search
      </OptionDropwdown>
      <OptionDropwdown className='option-dropdown'>
        <NotificationIcon className='fill-current' /> Mute Notification
      </OptionDropwdown>
      <OptionDropwdown className='option-dropdown'>
        <ScheduleIcon className='fill-current' /> Disappearing Messages
      </OptionDropwdown>
      <OptionDropwdown className='option-dropdown'>
        <WallpaperIcon className='fill-current' /> Wallpaper
      </OptionDropwdown>
      <OptionDropwdown className='option-dropdown'>
        <InfoIcon className='h-6 w-6 fill-current' /> Report
      </OptionDropwdown>
      <OptionDropwdown className='option-dropdown'>
        <BlockIcon className='fill-current' /> Block
      </OptionDropwdown>
      <OptionDropwdown className='option-dropdown'>
        <TrashIcon className='fill-current' /> Clear Chat
      </OptionDropwdown>
      <OptionDropwdown className='option-dropdown'>
        <ExportIcon className='fill-current' /> Export Chat
      </OptionDropwdown>
    </OptionsDropdown>
  )
}

export default ChatOptionList
