import { InputHTMLAttributes } from "react"
interface IProps extends InputHTMLAttributes<HTMLInputElement>{
   
}

const Input = ({onChange  ,   ...rest}: IProps) => {

    return (
         
             <input className="border" type="text" onChange={onChange}     {...rest} />
     )
}

export default Input














// interface IProps{

// }

// const input = ({}:IProps)=>{

// }

// export default input


















