import { PropsWithChildren } from "react"
import { Link } from "react-router-dom"

type ButtonProps = {
  variant: 'button' | 'link' | 'hyperlink',
  to?: any,
  className?: string,
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void,
}

const Button = (props: ButtonProps & PropsWithChildren) => {
  switch (props.variant) {
    case 'button':
      return (
        <button className={`transition-all duration-300 ease-in-out font-semibold rounded-full ${props.className}`} onClick={props.onClick}>
          {props.children}
        </button>
      )
    case 'link':
      return (
        <Link className={`transition-all duration-300 ease-in-out font-semibold rounded-full ${props.className}`} to={props.to}>
          {props.children}
        </Link>
      )
    case 'hyperlink':
      return (
        <a className={`transition-all duration-300 ease-in-out font-semibold rounded-full ${props.className}`} href={props.to} target="_blank">
          {props.children}
        </a>
      )
    default:
      return null
  }
}

export default Button