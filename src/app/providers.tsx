'use client'
import { SessionProvider } from 'next-auth/react'
import { ThemeProvider } from 'next-themes'

interface Props {
  children: React.ReactNode
}

function Providers({ children }: Props) {
  return (
    <SessionProvider>
      <ThemeProvider
        storageKey='theme'
        defaultTheme='light'
        enableSystem={false}
        enableColorScheme={false}
        themes={['light', 'dark']}
        attribute='class'
      >
        {children}
      </ThemeProvider>
    </SessionProvider>
  )
}

export default Providers
