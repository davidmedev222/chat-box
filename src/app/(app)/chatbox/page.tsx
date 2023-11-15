'use client'
import { CallsSection, ChatsSection, Header, StatusSection, Tab } from '@/chatbox/components'
import { useState } from 'react'

function ChatboxPage() {
  const [tab, setTab] = useState(0)
  const changeTab = (number: number) => () => setTab((state) => number)

  return (
    <div className='grid max-h-screen min-h-screen grid-rows-[auto_auto_1fr]'>
      <Header />
      <Tab tab={tab} changeTab={changeTab} />
      <footer className='scroll-orange grid overflow-y-auto'>
        {tab === 0 && <ChatsSection />}
        {tab === 1 && <StatusSection />}
        {tab === 2 && <CallsSection />}
      </footer>
    </div>
  )
}

export default ChatboxPage
