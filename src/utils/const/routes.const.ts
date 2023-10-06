export const enum Routes {
  Home = '/',
  About = '/about',
  Company = '/company',
  Services = '/services',
  Pricing = '/pricing'
}

export const LinkRoutes = [
  { id: crypto.randomUUID(), href: Routes.About, title: 'About' },
  { id: crypto.randomUUID(), href: Routes.Company, title: 'Company' },
  { id: crypto.randomUUID(), href: Routes.Services, title: 'Services' },
  { id: crypto.randomUUID(), href: Routes.Pricing, title: 'Pricing' }
]
