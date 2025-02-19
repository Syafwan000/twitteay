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
      colorClass = 'bg-twitteay-red/10 text-twitteay-red/50 hover:bg-twitteay-red/15 peer-checked:bg-twitteay-red peer-checked:text-white'
      break
    case 'blue':
      colorClass = 'bg-blue-500/10 text-blue-500/50 hover:bg-blue-500/15 peer-checked:bg-blue-500 peer-checked:text-white'
      break
    case 'green':
      colorClass = 'bg-twitteay-green/10 text-twitteay-green/50 hover:bg-twitteay-green/15 peer-checked:bg-twitteay-green peer-checked:text-white'
      break
    default:
      colorClass = 'bg-black/10 text-black/50 hover:bg-black/15 peer-checked:bg-black peer-checked:text-white'
      break
  }

  return (
    <div className="w-full">
      <input className="peer hidden" type="checkbox" name={props.name} id={props.id} onClick={props.onClick} />
      <label className={`transition-all duration-300 ease-in-out flex justify-center items-center cursor-pointer select-none font-semibold rounded-xl py-2.5 text-center peer-checked:font-bold ${colorClass}`} htmlFor={props.id}>
        {props.children}
      </label>
    </div>
  )
}

export default Checkbox