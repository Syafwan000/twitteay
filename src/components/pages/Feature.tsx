import { PropsWithChildren } from "react"

type FeatureProps = {
  title: string,
  icon: JSX.Element
}

const Feature = (props: FeatureProps & PropsWithChildren) => {
  return (
    <div className="flex flex-col gap-5">
      <div className="inline-flex justify-center items-center w-12 h-12 p-3 bg-black rounded-2xl">
        {props.icon}
      </div>
      <div className="space-y-1">
        <h3 className="font-semibold text-lg">{props.title}</h3>
        <p>{props.children}</p>
      </div>
    </div>
  )
}

export default Feature