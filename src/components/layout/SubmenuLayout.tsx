import { PropsWithChildren } from "react"

type SubmenuLayoutProps = {
  title: string,
  description: string
}

const SubmenuLayout = (props: SubmenuLayoutProps & PropsWithChildren) => {
  return (
    <div className="flex flex-col gap-5 w-full h-full">
      <div className="bg-black/15 space-y-px p-6 rounded-2xl lg:rounded-xl">
        <h3 className="text-xl font-bold">{props.title}</h3>
        <p>{props.description}</p>
      </div>
      <div className="space-y-3 py-2 px-0 lg:p-2 lg:overflow-y-auto">
        {props.children}
      </div>
    </div>
  )
}

export default SubmenuLayout