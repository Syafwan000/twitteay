import useScrollToTop from '@/hooks/use-scroll-to-top'
import Navigation from '@/components/display/Navigation'
import Footer from '@/components/display/Footer'
import Button from '@/components/input/Button'
import { Icon } from '@iconify/react'
import { useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import 'react-tooltip/dist/react-tooltip.css'

const Layout = () => {
  const location = useLocation()
  const [scroll, setScroll] = useState<number>(0)
  
  window.onscroll = () => setScroll(window.scrollY)

  return (
    <main className="max-w-screen-lg mx-auto px-4 md:px-6 xl:px-0">
      <Navigation />
      <Outlet />
      <Button variant="button" onClick={useScrollToTop} className={`${scroll > 50 ? 'bottom-14' : '-bottom-24'} fixed flex justify-center items-center right-6 bg-black w-10 h-10 z-50 hover:bg-black/80`}>
        <Icon className="text-2xl text-white" icon="fluent:arrow-up-24-filled" />
      </Button>
      {location.pathname === '/' && (
        <Footer />
      )}
    </main>
  )
}

export default Layout