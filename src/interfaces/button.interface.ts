import { ReactNode } from 'react'

 interface IButton{
  className?: string;
  onClick?:(event:any)=>void;
  children?: ReactNode
}
export default IButton;