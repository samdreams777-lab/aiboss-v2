import { Outlet } from 'react-router'
import { Header } from './ui/Header'
import { Footer } from './ui/Footer'

export function RootLayout() {
  return (
    <div className="flex min-h-dvh flex-col bg-bg-base text-text-primary font-sans antialiased">
      <Header />
      <main className="flex-1 pt-[3.5rem]">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
