import React from 'react'


interface LebelProps {
    className?: string;
    children?: React.ReactNode;
    htmlFor?: string;

}

const Label:React.FC <LebelProps> = ({
    className,
    children,
    htmlFor
}) => {
  return (
     <label className={className} htmlFor={htmlFor}>
         {children}
     </label>
  )
}

export  {Label}
