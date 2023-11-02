import { CallPreviewList, Widget } from '../index'

function CallsSection() {
  // if (condition) {
  //   return (
  //     <WelcomeSection
  //        icon='call'
  //        title="You haven't call yet"
  //        description='Call together with your friends and family with Chatbox right now!'
  //        button='Start New Call'
  //      />
  //   )
  // }

  return (
    <section>
      <CallPreviewList />
      <Widget icon='call' position='one' />
    </section>
  )
}

export default CallsSection
