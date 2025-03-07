type InputfieldProps = {
  type: string,
  value: string | number,
  id?: string,
  placeholder?: string,
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Inputfield = (props: InputfieldProps) => {
  return (
    <input type={props.type} id={props.id} onChange={props.onChange} placeholder={props.placeholder} value={props.value} className="block w-full outline-none py-2.5 px-3 rounded-lg border-2 border-black/15 focus:ring focus:ring-black/15 focus:ring-offset-1 focus:ring-offset-black/15" />
  )
}

export default Inputfield