import '../../../styles/globals.css'
import { Header } from './components'

export const metadata = {
  title: 'Chat Box - App',
  description: 'Generated by create next app'
}

interface Props {
  children: React.ReactNode
}

function ChatboxLayout({ children }: Props) {
  return (
    <div className='grid max-h-screen min-h-screen grid-rows-[auto_auto_1fr]'>
      <Header />
      {children}
    </div>
  )
}

export default ChatboxLayout
