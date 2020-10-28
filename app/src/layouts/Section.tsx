import React, {PropsWithChildren} from 'react'

interface Props extends PropsWithChildren<any> {

}

const Section = ({children}: Props) => {
  return (
    <div className="my-6">{children}</div>
  )
}

export default Section
