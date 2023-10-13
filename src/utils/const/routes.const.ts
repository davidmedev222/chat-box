export const enum Routes {
  Home = '/',
  About = '/about',
  Services = '/services',
  Pricing = '/pricing'
}

export const LinkRoutes = [
  { id: crypto.randomUUID(), href: Routes.About, title: 'About Us' },
  { id: crypto.randomUUID(), href: Routes.Services, title: 'Services' },
  { id: crypto.randomUUID(), href: Routes.Pricing, title: 'Pricing' }
]
