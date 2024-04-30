import React, { useState } from 'react'
import LiveMessage from './LiveMessage'
import { useDispatch, useSelector } from 'react-redux'
import useGetLiveChats from '../hooks/useGetLiveChats'
import { addMessage } from '../utils/liveChatSlice'

const LiveChatContainer = () => {
  const [liveChat, setLiveChat] = useState('')
  const dispatch = useDispatch()
  const chatMessages = useSelector((store) => store.livechat.chatMessages)
  useGetLiveChats()

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(addMessage({ name: 'Nisham', text: liveChat }))
    setLiveChat('')
  }

  return (
    <div className="w-full">
      <div className="flex flex-col-reverse h-[420px] w-full p-3 mr-3 rounded-lg overflow-y-scroll">
        {chatMessages?.map((chatMessage, index) => (
          <LiveMessage key={index} message={chatMessage} />
        ))}
      </div>
      <form
        className="flex flex-wrap gap-3 border border-b-2 w-full p-2  bg-gray-100"
        onSubmit={handleSubmit}
      >
        <input
          className=" p-2 w-8/12"
          type="text"
          placeholder="Your message"
          onChange={(e) => setLiveChat(e.target.value)}
          value={liveChat}
        />
        <button className="py-2 px-4 w-3/12 bg-green-500 rounded-lg text-white">
          Send
        </button>
      </form>
    </div>
  )
}

export default LiveChatContainer
