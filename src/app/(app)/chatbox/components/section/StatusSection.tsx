import { StatusPreviewList, UserStatusPreview, Widget } from '../index'

function StatusSection() {
  return (
    <section className='grid gap-y-6'>
      <UserStatusPreview />
      <StatusPreviewList title='Recent updates' />
      <StatusPreviewList title='Viewed updates' />
      <StatusPreviewList title='Muted updates' />
      <Widget icon='edit' position='two' />
      <Widget icon='camera' position='one' />
    </section>
  )
}

export default StatusSection
