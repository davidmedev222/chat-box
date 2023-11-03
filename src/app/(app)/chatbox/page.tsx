'use client'
import { useState } from 'react'
import { CallsSection, ChatsSection, StatusSection, Tab } from './components'

function ChatboxPage() {
  const [tab, setTab] = useState(0)
  const changeTab = (number: number) => () => setTab((state) => number)

  return (
    <>
      <Tab tab={tab} changeTab={changeTab} />
      <main className='scroll-orange grid overflow-y-auto p-4'>
        {tab === 0 && <ChatsSection />}
        {tab === 1 && <StatusSection />}
        {tab === 2 && <CallsSection />}
      </main>
    </>
  )
}

export default ChatboxPage
