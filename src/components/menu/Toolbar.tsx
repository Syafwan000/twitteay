import AdditionalContent from "@/components/menu/submenu/AdditionalContent"
import MainContent from "@/components/menu/submenu/MainContent"
import Appearance from "@/components/menu/submenu/Appearance"
import Button from "@/components/input/Button"
import { Icon } from '@iconify/react'
import { useState } from "react"

const Toolbar = () => {
  const [menu, setMenu] = useState<number>(1)

  return (
    <div className="w-full h-max lg:p-5 lg:h-dvh">
      <div className="flex flex-col h-full gap-3 lg:gap-5 lg:flex-row">
        <div className="flex flex-row justify-between px-3 lg:px-0 lg:flex-col">
          <div className="relative flex flex-row gap-3 z-50 lg:flex-col">
            <Button onClick={() => setMenu(1)} variant="button" className={`${menu == 1 ? 'bg-black text-white before:h-full' : 'bg-[#e5e5e5] text-black before:h-3 hover:bg-[#d9d9d9] hover:before:h-8'} w-12 h-12 flex justify-center items-center p-2.5 relative before:hidden before:transition-all before:duration-300 before:ease-in-out before:absolute before:-left-16 before:w-12 before:bg-black before:rounded-xl lg:before:block`}>
              <Icon className="text-4xl" icon="fluent:content-view-24-filled" />
            </Button>
            <Button onClick={() => setMenu(2)} variant="button" className={`${menu == 2 ? 'bg-black text-white before:h-full' : 'bg-[#e5e5e5] text-black before:h-3 hover:bg-[#d9d9d9] hover:before:h-8'} w-12 h-12 flex justify-center items-center p-2.5 relative before:hidden before:transition-all before:duration-300 before:ease-in-out before:absolute before:-left-16 before:w-12 before:bg-black before:rounded-xl lg:before:block`}>
              <Icon className="text-4xl" icon="fluent:color-line-24-filled" />
            </Button>
            <Button onClick={() => setMenu(3)} variant="button" className={`${menu == 3 ? 'bg-black text-white before:h-full' : 'bg-[#e5e5e5] text-black before:h-3 hover:bg-[#d9d9d9] hover:before:h-8'} w-12 h-12 flex justify-center items-center p-2.5 relative before:hidden before:transition-all before:duration-300 before:ease-in-out before:absolute before:-left-16 before:w-12 before:bg-black before:rounded-xl lg:before:block`}>
              <Icon className="text-4xl" icon="fluent:image-24-filled" />
            </Button>
          </div>
          <Button variant="link" to="/" className="w-12 h-12 bg-black flex justify-center items-center p-2.5 z-50 hover:bg-black/80">
            <Icon className="text-4xl text-white" icon="fluent:home-24-filled" />
          </Button>
        </div>
        <div className="w-full h-full lg:relative">
          <div className={`${menu == 1 ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'} absolute transition-all duration-1000 ease-in-out bg-black/10 w-full h-auto px-3 py-5 rounded-t-3xl md:px-4 lg:h-full lg:rounded-2xl lg:p-5`}>
            <MainContent />
          </div>
          <div className={`${menu == 2 ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'} absolute transition-all duration-1000 ease-in-out bg-black/10 w-full h-auto px-3 py-5 rounded-t-3xl md:px-4 lg:h-full lg:rounded-2xl lg:p-5`}>
            <Appearance />
          </div>
          <div className={`${menu == 3 ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'} absolute transition-all duration-1000 ease-in-out bg-black/10 w-full h-auto px-3 py-5 rounded-t-3xl md:px-4 lg:h-full lg:rounded-2xl lg:p-5`}>
            <AdditionalContent />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Toolbar