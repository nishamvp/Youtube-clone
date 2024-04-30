import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import { closeMenu } from '../utils/appSlice'
import CommentContainer from './CommentContainer'
import LiveChatContainer from './LiveChatContainer'

const WatchPage = () => {
  const [params] = useSearchParams()
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen)
  const dispatch = useDispatch()
  const id = params.get('v')

  useEffect(() => {
    dispatch(closeMenu())
  }, [])

  return (
    <div className={`${isMenuOpen ? 'w-full' : 'w-dvw'} flex gap-2 mt-4`}>
      <div
        className={
          isMenuOpen
            ? `w-4/12 ms-3`
            : `flex flex-col flex-wrap items-center content-start gap-2 ms-10`
        }
      >
        <iframe
          className="w-[760px] h-[420px] rounded-lg"
          src={`https://www.youtube.com/embed/${id}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        <CommentContainer />
      </div>
      <LiveChatContainer />
    </div>
  )
}

export default WatchPage
