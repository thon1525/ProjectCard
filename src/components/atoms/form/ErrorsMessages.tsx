import React from 'react'

interface ErrorsMessagesProps {
    className?: string;
    children?: React.ReactNode;
}

const ErrorsMessages: React.FC <ErrorsMessagesProps> = ({
    className,
    children,
}) => {
  return (
    <p className={`text-red-600  ${className}`}>
        {children}
    </p>
  )
}

export  {ErrorsMessages}
