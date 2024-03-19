import { Link } from "react-router-dom";

type Button = {
  type: 'button' | 'hyperlink' | 'link',
  color: string,
  href?: string,
  children: string,
};

const Button = ({ color, type, href, children }: Button) => {
  if(type === 'button') {
    return (
      <button 
        className={'w-32 px-2 py-2 font-medium text-white transition-all duration-300 ease-in-out rounded-lg ' + color}>
          {children}
      </button>
    )
  } else if(type === 'hyperlink') {
    return (
      <a
        className={'inline-block text-center w-32 px-2 py-2 font-medium text-white transition-all duration-300 ease-in-out rounded-lg ' + color}
        href={href}
      >
        {children}
      </a>
    )
  } else if(type === 'link') {
    return (
      <Link
        className={'inline-block text-center w-32 px-2 py-2 font-medium text-white transition-all duration-300 ease-in-out rounded-lg ' + color}
        to={href}
      >
        {children}
      </Link>
    )
  }
}

export default Button;