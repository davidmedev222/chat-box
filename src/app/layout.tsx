import '../styles/globals.css'
import Providers from './providers'

interface Props {
  children: React.ReactNode
}

function RootLayout({ children }: Props) {
  return (
    <html lang='en'>
      <body className='scroll-orange text-sm text-black'>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}

export default RootLayout
