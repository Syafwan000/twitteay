type InputfieldProps = {
  name: string,
  type: string,
  placeholder?: string,
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Inputfield = (props: InputfieldProps) => {
  return (
    <div className="space-y-1">
      <label className="font-semibold" htmlFor={props.name}>{props.name}</label>
      <input type={props.type} id={props.name} onChange={props.onChange} placeholder={props.placeholder} className="block w-full outline-none py-2.5 px-3 rounded-lg border-2 border-black/15 focus:ring focus:ring-black/15 focus:ring-offset-1 focus:ring-offset-black/15" />
    </div>
  )
}

export default Inputfield