import { Link, useLocation } from "react-router-dom";
import Dropdown from "./Dropdown";

const Navigation = () => {
  const location = useLocation();

  return (
    <>    
      <header className="mx-auto twy-container">
        <nav className="flex items-center justify-center h-[80px]">
          <ul className="flex items-center justify-center gap-2">
            <li>
              <Link className={location.pathname == '/' ? 'inline-block text-center w-[105px] px-5 py-2 font-medium text-white transition-all duration-300 ease-in-out rounded-lg bg-slate-800' : 'inline-block text-center w-[105px] px-5 py-2 font-medium text-white transition-all duration-300 ease-in-out rounded-lg hover:bg-slate-800'} to="/">Home</Link>
            </li>
            <li>
              <Link className={location.pathname == '/guide-to-read' ? 'inline-block text-center w-[105px] px-5 py-2 font-medium text-white transition-all duration-300 ease-in-out rounded-lg bg-slate-800' : 'inline-block text-center w-[105px] px-5 py-2 font-medium text-white transition-all duration-300 ease-in-out rounded-lg hover:bg-slate-800'} to="/guide-to-read">Guide</Link>
            </li>
            <li>
              <Dropdown />
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default Navigation;