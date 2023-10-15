import { BackgroundImage } from '@/components'
import '../../styles/globals.css'
import { LinkBack } from './components'

export const metadata = {
  title: 'Chat Box - Authentication',
  description: 'Generated by create next app'
}

interface Props {
  form: React.ReactNode
}

function AuthLayout({ form }: Props) {
  return (
    <html lang='en'>
      <body className='text-sm text-black'>
        <main className='lg:grid lg:grid-cols-2'>
          <LinkBack />
          <BackgroundImage />
          {form}
        </main>
      </body>
    </html>
  )
}

export default AuthLayout
