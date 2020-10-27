import React, { PropsWithChildren } from 'react'
import Container from './Container'

interface Props extends PropsWithChildren<any> {
  className?: string
}

const Toolbar = ({ children, className }: Props) => {
  return (
    <div className={`flex bg-white border-b border-gray-200 fixed top-0 inset-x-0 z-100 h-16 items-center ${className || ''}`}>
      <Container>{children}</Container>
    </div>
  )
}

export default Toolbar
