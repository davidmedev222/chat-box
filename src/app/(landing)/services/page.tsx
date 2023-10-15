import { Faqs, Hero, ServiceList, StatList } from './components'

function ServicesPage() {
  return (
    <main className='px-main container-base grid gap-y-16 py-32 lg:pt-40'>
      <Hero />
      <ServiceList />
      <StatList />
      <Faqs />
    </main>
  )
}

export default ServicesPage
