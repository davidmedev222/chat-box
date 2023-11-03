import { ArchivedChatPreview, ChatPreviewList, Widget } from '../index'

function ChatsSection() {
  // if (condition) {
  //   return (
  //     <WelcomeSection
  //       icon='smile'
  //       title='Welcome! 👋'
  //       description='Chatbox connects you with family and friends. Start chatting now!'
  //       button='Start New Chat'
  //     />
  //   )
  // }

  return (
    <section className='grid gap-y-4'>
      <ArchivedChatPreview />
      <ChatPreviewList />
      <Widget icon='message' position='one' />
    </section>
  )
}

export default ChatsSection
