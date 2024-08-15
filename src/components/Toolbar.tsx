import AdditionalContent from "@/components/menus/AdditionalContent"
import MainContent from "@/components/menus/MainContent"
import Appearance from "@components/menus/Appearance"
import Button from "@components/Button"
import { Icon } from '@iconify/react'
import { useState } from "react"

const Toolbar = () => {
  const [menu, setMenu] = useState<number>(1)

  return (
    <>
      <div className="w-full h-dvh p-5">
        <div className="flex h-full gap-5">
          <div className="flex flex-col justify-between">
            <div className="relative space-y-3 z-50">
              <Button onClick={() => setMenu(1)} tooltipID="menu-1" tooltipContent="Main Content" tooltipPlace="right" variant="button" className={`${menu == 1 ? 'bg-black text-white before:h-full' : 'bg-[#e5e5e5] text-black before:h-3 hover:bg-[#d9d9d9] hover:before:h-8'} w-12 h-12 flex justify-center items-center p-2.5 relative before:transition-all before:duration-300 before:ease-in-out before:absolute before:-left-16 before:w-12 before:bg-black before:rounded-xl`}>
                <Icon className="text-4xl" icon="fluent:content-view-24-filled" />
              </Button>
              <Button onClick={() => setMenu(2)} tooltipID="menu-2" tooltipContent="Appearance & Attributes" tooltipPlace="right" variant="button" className={`${menu == 2 ? 'bg-black text-white before:h-full' : 'bg-[#e5e5e5] text-black before:h-3 hover:bg-[#d9d9d9] hover:before:h-8'} w-12 h-12 flex justify-center items-center p-2.5 relative before:transition-all before:duration-300 before:ease-in-out before:absolute before:-left-16 before:w-12 before:bg-black before:rounded-xl`}>
                <Icon className="text-4xl" icon="fluent:color-line-24-filled" />
              </Button>
              <Button onClick={() => setMenu(3)} tooltipID="menu-3" tooltipContent="Additional Content" tooltipPlace="right" variant="button" className={`${menu == 3 ? 'bg-black text-white before:h-full' : 'bg-[#e5e5e5] text-black before:h-3 hover:bg-[#d9d9d9] hover:before:h-8'} w-12 h-12 flex justify-center items-center p-2.5 relative before:transition-all before:duration-300 before:ease-in-out before:absolute before:-left-16 before:w-12 before:bg-black before:rounded-xl`}>
                <Icon className="text-4xl" icon="fluent:image-24-filled" />
              </Button>
            </div>
            <Button tooltipID="back-to-home" tooltipContent="Return to home" tooltipPlace="right" variant="link" to="/" className="w-12 h-12 bg-black flex justify-center items-center p-2.5 z-50">
              <Icon className="text-4xl text-white" icon="fluent:home-24-filled" />
            </Button>
          </div>
          <div className="relative w-full">
            <div className={`${menu == 1 ? 'left-0 opacity-100' : '-left-[120%] opacity-0'} absolute transition-all duration-1000 ease-in-out bg-black/10 w-full h-full rounded-2xl p-5`}>
              <MainContent />
            </div>
            <div className={`${menu == 2 ? 'left-0 opacity-100' : '-left-[120%] opacity-0'} absolute transition-all duration-1000 ease-in-out bg-black/10 w-full h-full rounded-2xl p-5`}>
              <Appearance />
            </div>
            <div className={`${menu == 3 ? 'left-0 opacity-100' : '-left-[120%] opacity-0'} absolute transition-all duration-1000 ease-in-out bg-black/10 w-full h-full rounded-2xl p-5`}>
              <AdditionalContent />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Toolbar