import { PropsWithChildren } from "react"
import { PlacesType, Tooltip } from 'react-tooltip'
import { Link } from "react-router-dom"
import 'react-tooltip/dist/react-tooltip.css'

type ButtonProps = {
  variant: 'button' | 'link' | 'hyperlink',
  to?: any,
  className?: string,
  tooltipID?: string | undefined,
  tooltipContent?: string | null | undefined,
  tooltipPlace?: PlacesType | undefined,
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void,
}

const Button = (props: ButtonProps & PropsWithChildren) => {
  switch (props.variant) {
    case 'button':
      return (
        <button data-tooltip-id={props.tooltipID} data-tooltip-content={props.tooltipContent} data-tooltip-place={props.tooltipPlace} className={`transition-all duration-300 ease-in-out font-semibold rounded-full ${props.className}`} onClick={props.onClick}>
          <Tooltip className="z-50" id={props.tooltipID} />
          {props.children}
        </button>
      )
    case 'link':
      return (
        <Link data-tooltip-id={props.tooltipID} data-tooltip-content={props.tooltipContent} data-tooltip-place={props.tooltipPlace} className={`transition-all duration-300 ease-in-out font-semibold rounded-full ${props.className}`} to={props.to}>
          <Tooltip className="z-50" id={props.tooltipID} />
          {props.children}
        </Link>
      )
    case 'hyperlink':
      return (
        <a data-tooltip-id={props.tooltipID} data-tooltip-content={props.tooltipContent} data-tooltip-place={props.tooltipPlace} className={`transition-all duration-300 ease-in-out font-semibold rounded-full ${props.className}`} href={props.to} target="_blank">
          <Tooltip className="z-50" id={props.tooltipID} />
          {props.children}
        </a>
      )
    default:
      return null
  }
}

export default Button