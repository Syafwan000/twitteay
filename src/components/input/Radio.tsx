import { PropsWithChildren } from "react"

type RadioProps = {
  id: string,
  name: string,
  checked?: boolean,
  onClick?: (e: React.MouseEvent<HTMLInputElement>) => void
}

const Radio = (props: RadioProps & PropsWithChildren) => {
  return (
    <div className="w-full">
      <input type="radio" name={props.name} id={props.id} value={props.id} className="peer hidden" defaultChecked={props.checked} onClick={props.onClick} />
      <label htmlFor={props.id} className="transition-all duration-300 ease-in-out flex justify-center items-center cursor-pointer select-none font-medium rounded-xl py-2.5 text-center bg-black/10 text-black/50 hover:bg-black/15 peer-checked:bg-black peer-checked:font-bold peer-checked:text-white">
        {props.children}
      </label>
    </div>
  )
}

export default Radio