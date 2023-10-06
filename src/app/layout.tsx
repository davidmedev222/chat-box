import '../styles/globals.css'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
}

interface Props {
  children: React.ReactNode
}

function RootLayout({ children }: Props) {
  return (
    <html lang='en'>
      <body className='text-sm font-medium text-gray-500'>{children}</body>
    </html>
  )
}

export default RootLayout
