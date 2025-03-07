import { Icon } from '@iconify/react'
import { Link, useLocation } from 'react-router-dom'

const Navigation = () => {
  const location = useLocation()
  
  return (
    <nav className="flex justify-between items-center py-6">
      <div className="w-10 h-10 bg-black rounded-full text-white font-bold flex justify-center items-center cursor-default">T</div>
      <div className="flex gap-3">
        <Link to="/" className={`${location.pathname == '/' ? 'after:w-1/3 font-bold' : 'after:w-[2px] font-semibold'} w-16 text-center relative transition-all duration-300 ease-in-out hover:font-bold hover:after:w-1/3 after:absolute after:transition-all after:duration-300 after:ease-in-out after:-bottom-2 after:left-1/2 after:-translate-x-1/2 after:h-[2px] after:rounded-full after:ring-2 after:ring-black after:flex after:justify-center after:items-center`}>Home</Link>
        <Link to="/about" className={`${location.pathname == '/about' ? 'after:w-1/3 font-bold' : 'after:w-[2px] font-semibold'} w-16 text-center relative transition-all duration-300 ease-in-out hover:font-bold hover:after:w-1/3 after:absolute after:transition-all after:duration-300 after:ease-in-out after:-bottom-2 after:left-1/2 after:-translate-x-1/2 after:h-[2px] after:rounded-full after:ring-2 after:ring-black after:flex after:justify-center after:items-center`}>About</Link>
      </div>
      <a href="https://github.com/Syafwan000/twitteay" target="_blank">
        <Icon className="text-2xl" icon="bi:github" />
      </a>
    </nav>
  )
}

export default Navigation