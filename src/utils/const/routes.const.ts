export const enum Routes {
  Home = '/',
  About = '/about',
  Services = '/services',
  Register = '/register',
  Login = '/login'
}

export const LinkRoutes = [
  { id: crypto.randomUUID(), href: Routes.About, title: 'About Us' },
  { id: crypto.randomUUID(), href: Routes.Services, title: 'Services' }
]
