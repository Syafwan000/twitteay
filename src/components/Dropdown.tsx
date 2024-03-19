import { ChevronDownIcon, PaintBrushIcon, UserGroupIcon } from '@heroicons/react/24/outline';
import { Menu, Transition } from '@headlessui/react'
import { Link, useLocation } from 'react-router-dom';
import useDropdownStore from '../stores/dropdown-store';

const Dropdown = () => {
  const location = useLocation();
  const { show, setShow } = useDropdownStore();

  return (
    <Menu>
      <Menu.Button 
        onClick={() => setShow()}
        onMouseEnter={() => setShow()}
        onMouseLeave={() => setShow()}
        className={show ? 
          'flex items-center gap-2 px-5 py-2 font-medium text-white rounded-lg bg-slate-800' 
          : 
          'flex items-center gap-2 px-5 py-2 font-medium text-white rounded-lg hover:bg-slate-800'}>
        About
        <ChevronDownIcon
          className="w-3 h-3 stroke-[4]"  
        />
      </Menu.Button>
      <Transition
        show={show}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95">
        <Menu.Items 
          onMouseEnter={() => setShow()}
          onMouseLeave={() => setShow()}
          className="absolute flex flex-col gap-2 p-3 mt-2 font-medium text-white rounded-lg fi bg-slate-800 w-[150px]">
          <Menu.Item>
              <Link
                className="flex items-center gap-2 px-2 py-1 transition-all duration-300 ease-in-out rounded-md hover:text-slate-800 hover:bg-white"
                to="/about"
              >
                <PaintBrushIcon
                  className="w-3.5 h-3.5 stroke-[2]"
                />
                Project
              </Link>
          </Menu.Item>
          <Menu.Item>
              <Link
                className="flex items-center gap-2 px-2 py-1 transition-all duration-300 ease-in-out rounded-md hover:text-slate-800 hover:bg-white"
                to="/about"
              >
                <UserGroupIcon
                  className="w-3.5 h-3.5 stroke-[2]"
                />
                Author
              </Link>
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}

export default Dropdown;