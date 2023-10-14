import FaqItem from './FaqItem'

function DropwdownList() {
  return (
    <ul className='mx-auto grid max-w-screen-md gap-y-6'>
      <FaqItem
        question='How can I create an account in the application?'
        answer="To create an account simply open the menu and select 'Create Account' or login with Email, Google or Github - it's quick and easy!"
      />
      <FaqItem
        question='How can I start a group conversation?'
        answer='To start a group conversation, go to your contact list, select "New Group" or a similar option, choose the contacts you want to add and set up the group preferences. Then, start the conversation!'
      />
      <FaqItem
        question='Is it possible to make video calls in the application?'
        answer='Yes! We offer high quality video calls. Simply open a conversation with the desired contact and select the video call icon. Make sure the camera and microphone are enabled.'
      />
      <FaqItem
        question='How can I customize my profile?'
        answer='To customize your profile, go to the account settings and select "Edit Profile". You can add a profile picture, change the theme and many more.'
      />
      <FaqItem
        question='Can I use the application on multiple devices?'
        answer='Yes, you can use the application on multiple devices. Log in with the same account on all your devices and your conversations will be synchronized in real time.'
      />
      <FaqItem
        question='Does the application consume a lot of battery or mobile data?'
        answer='We have optimized the application to minimize battery and mobile data consumption. However, data usage will depend on the amount of multimedia content you share.'
      />
    </ul>
  )
}

export default DropwdownList
