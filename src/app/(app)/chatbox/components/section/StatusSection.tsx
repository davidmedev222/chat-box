import { StatusPreviewList, UserStatusPreview, Widget } from '../index'

function StatusSection() {
  return (
    <section className='grid gap-y-2'>
      <UserStatusPreview />
      <StatusPreviewList title='Recent updates' />
      <StatusPreviewList title='Viewed updates' />
      <StatusPreviewList title='Muted updates' />
      <Widget href='#' icon='edit' position='two' />
      <Widget href='#' icon='camera' position='one' />
    </section>
  )
}

export default StatusSection
