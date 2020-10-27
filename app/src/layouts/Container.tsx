import React, {PropsWithChildren} from 'react'

interface Props extends PropsWithChildren<any> {}

const Container = ({children}: Props) => {
  return (
    <div className="w-full max-w-screen-lg relative mx-auto px-6">{children}</div>
  )
}

export default Container
