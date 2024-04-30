import React from 'react'
import AvatarIcon from '../assets/Icons/AvatarIcon'

const LiveMessage = ({ message }) => {
  return (
    <div className="flex  items-center w-full gap-2 px-2 py-1 my-1 bg-white rounded-lg flex-wrap ">
      <AvatarIcon />
      <p className="text-sm font-semibold">{message?.name}</p>
      <p className="text-sm">{message?.text}</p>
    </div>
  )
}

export default LiveMessage
