type TextareaProps =  {
  value: string,
  id?: string,
  placeholder?: string,
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
}

const Textarea = (props: TextareaProps) => {
  return (
    <textarea id={props.id} placeholder={props.placeholder} value={props.value} onChange={props.onChange} className="block w-full h-32 outline-none py-2.5 px-3 rounded-lg border-2 border-black/15 focus:ring focus:ring-black/15 focus:ring-offset-1 focus:ring-offset-black/15"></textarea>
  )
}

export default Textarea