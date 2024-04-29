import React, { useEffect } from 'react'
import LiveMessage from './LiveMessage'

const LiveChatContainer = () => {
  useEffect(() => {
    // setInterval(() => {
    //   console.log('api calling')
    // }, 1000)
  }, [])
  return (
    <div className="bg-gray-100 h-[420px] w-full p-3 mr-3 rounded-lg overflow-y-scroll">
      <LiveMessage />
    </div>
  )
}

export default LiveChatContainer
