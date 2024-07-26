import { Icon } from '@iconify/react'
import { useState } from 'react'
import { Tooltip } from 'react-tooltip'
import { Link, Outlet, useLocation } from 'react-router-dom'
import Button from '@components/Button'
import 'react-tooltip/dist/react-tooltip.css'

const Layout = () => {
  const [scroll, setScroll] = useState<number>(0)
  const location = useLocation()

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  window.onscroll = () => {
    setScroll(window.scrollY)
  }

  return (
    <>
      <nav className="max-w-screen-lg mx-auto">
        <div className="flex justify-between items-center py-6">
          <div className="w-10 h-10 bg-black rounded-full text-white font-bold flex justify-center items-center">T</div>
          <div className="flex gap-3">
            <Link to="/" className={`${location.pathname == '/' ? 'after:w-1/3 font-bold' : 'after:w-[2px] font-semibold'} w-16 text-center relative transition-all duration-300 ease-in-out hover:font-bold hover:after:w-1/3 after:absolute after:transition-all after:duration-300 after:ease-in-out after:-bottom-2 after:left-1/2 after:-translate-x-1/2 after:h-[2px] after:rounded-full after:ring-2 after:ring-black after:flex after:justify-center after:items-center`}>Home</Link>
            <Link to="/about" className={`${location.pathname == '/about' ? 'after:w-1/3 font-bold' : 'after:w-[2px] font-semibold'} w-16 text-center relative transition-all duration-300 ease-in-out hover:font-bold hover:after:w-1/3 after:absolute after:transition-all after:duration-300 after:ease-in-out after:-bottom-2 after:left-1/2 after:-translate-x-1/2 after:h-[2px] after:rounded-full after:ring-2 after:ring-black after:flex after:justify-center after:items-center`}>About</Link>
          </div>
          <a data-tooltip-id="project-github" data-tooltip-content="Give a star ⭐" data-tooltip-place="right" href="https://github.com/Syafwan000/twitteay" target="_blank">
            <Tooltip id="project-github" />
            <Icon className="text-2xl" icon="bi:github" />
          </a>
        </div>
      </nav>
      <Outlet />
      <Button variant="button" onClick={scrollToTop} className={`${scroll > 50 ? 'bottom-10' : '-bottom-24'} fixed flex justify-center items-center right-8 bg-black w-10 h-10`}>
        <Icon className="text-2xl text-white" icon="fluent:arrow-up-24-filled" />
      </Button>
      <footer className="max-w-screen-lg mx-auto py-6">
        <p className="text-center text-sm text-black/75">Crafted By Muhammad Syafwan Ardiansyah</p>
      </footer>
    </>
  )
}

export default Layout