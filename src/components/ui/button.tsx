import { ButtonHTMLAttributes, ReactNode } from "react"

 interface Iprops extends ButtonHTMLAttributes<HTMLElement>{
   children : ReactNode;
   className?: string
 }

const Button = ({children, className, ...rest}:Iprops) => {
  return (
    
    <button className={`text-white p-2 rounded w-full font-bold block mx-auto mt-4  w-2/3 md:w-full lg:w-full  md:mt-5 lg:mt-5 ${className}`} {...rest}>
        {children}
    </button>
  )
}

export default Button
