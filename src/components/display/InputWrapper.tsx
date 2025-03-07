import { PropsWithChildren, cloneElement } from "react"

type InputWrapperProps = {
  label: string,
  id?: string
}

const InputWrapper = (props: InputWrapperProps & PropsWithChildren) => {
  return (
    <div className="space-y-1">
      <label className="font-semibold" htmlFor={props.id}>{props.label}</label>
      {cloneElement(props.children as React.ReactElement, { id: props.id })}
    </div>
  )
}

export default InputWrapper