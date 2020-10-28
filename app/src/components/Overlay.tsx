import React from 'react'

interface Props {
  isVisible: boolean
}

const Overlay = ({ isVisible }: Props) => {
  if (!isVisible) {
    return null
  }
  return (
    <div className="fixed top-0 left-0 bg-gray-300 opacity-50 w-screen h-screen z-50 flex justify-center items-center">
      <h1 className="font-bold text-xl text-blue-600">Loading</h1>
    </div>
  )
}

export default Overlay
