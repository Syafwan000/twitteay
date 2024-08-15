import { PropsWithChildren } from "react"

type CheckboxProps = {
  id: string,
  name: string,
  color?: string,
  checked?: boolean,
  onClick?: (e: React.MouseEvent<HTMLInputElement>) => void
}

const Checkbox = (props: CheckboxProps & PropsWithChildren) => {
  let colorClass

  switch (props.color) {
    case 'red':
      colorClass = 'bg-[#f91880]/10 text-[#f91880]/50 hover:bg-[#f91880]/15 peer-checked:bg-[#f91880] peer-checked:text-white'
      break
    case 'blue':
      colorClass = 'bg-blue-500/10 text-blue-500/50 hover:bg-blue-500/15 peer-checked:bg-blue-500 peer-checked:text-white'
      break
    case 'green':
      colorClass = 'bg-[#00ba7c]/10 text-[#00ba7c]/50 hover:bg-[#00ba7c]/15 peer-checked:bg-[#00ba7c] peer-checked:text-white'
      break
    default:
      colorClass = 'bg-black/10 text-black/50 hover:bg-black/15 peer-checked:bg-black peer-checked:text-white'
      break
  }

  return (
    <div className="w-full">
      <input type="checkbox" name={props.name} id={props.id} value={props.id} className="peer hidden" onClick={props.onClick} />
      <label htmlFor={props.id} className={`transition-all duration-300 ease-in-out flex justify-center items-center cursor-pointer select-none font-semibold rounded-xl py-2.5 text-center peer-checked:font-bold ${colorClass}`}>
        {props.children}
      </label>
    </div>
  )
}

export default Checkbox