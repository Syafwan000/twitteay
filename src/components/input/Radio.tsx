import { PropsWithChildren } from "react"

type RadioProps = {
  id: string,
  name: string,
  value: string,
  checked?: boolean,
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Radio = (props: RadioProps & PropsWithChildren) => {
  return (
    <div className="w-full">
      <input type="radio" name={props.name} id={props.id} value={props.value} checked={props.checked} onChange={props.onChange} readOnly={props.checked !== undefined && !props.onChange} className="peer hidden" />
      <label htmlFor={props.id} className="transition-all duration-300 ease-in-out flex justify-center items-center cursor-pointer select-none font-medium rounded-xl py-2.5 text-center bg-black/10 text-black/50 hover:bg-black/15 peer-checked:bg-black peer-checked:font-bold peer-checked:text-white">
        {props.children}
      </label>
    </div>
  )
}

export default Radio