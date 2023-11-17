import '../styles/globals.css'
import Providers from './providers'

interface Props {
  children: React.ReactNode
}

function RootLayout({ children }: Props) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className='scroll-orange text-sm text-black/90 dark:bg-black/90 dark:text-white'>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}

export default RootLayout
