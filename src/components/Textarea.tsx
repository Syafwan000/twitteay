type TextareaProps =  {
  name: string,
  placeholder?: string,
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
}

const Textarea = (props: TextareaProps) => {
  return (
    <div className="space-y-1">
      <label className="font-semibold" htmlFor={props.name}>{props.name}</label>
      <textarea id={props.name} placeholder={props.placeholder} onChange={props.onChange} className="block w-full h-32 outline-none py-2.5 px-3 rounded-lg border-2 border-black/15 focus:ring focus:ring-black/15 focus:ring-offset-1 focus:ring-offset-black/15"></textarea>
    </div>
  )
}

export default Textarea