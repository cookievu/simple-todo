import React from 'react'

interface Props {
  isVisible: boolean
}

const Overlay = ({ isVisible }: Props) => {
  if (!isVisible) {
    return null
  }
  return (
    <div className="fixed bg-gray-300 opacity-50 w-screen h-screen z-50 flex justify-center items-center">
      <h1>Loading</h1>
    </div>
  )
}

export default Overlay