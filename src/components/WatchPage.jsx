import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import { closeMenu } from '../utils/appSlice'
import CommentContainer from './CommentContainer'

const WatchPage = () => {
  const [params] = useSearchParams()
  const dispatch = useDispatch()
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen)
  const id = params.get('v')

  useEffect(() => {
    dispatch(closeMenu())
  }, [])

  return (
    <div
      className={`flex flex-col   items-center gap-2 flex-wrap w-screen  mt-4 ${
        !isMenuOpen ? 'content-center' : 'content-start'
      } `}
    >
      <iframe
        className={`w-[760px] h-[420px] rounded-lg   `}
        src={`https://www.youtube.com/embed/${id}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
      <CommentContainer />
    </div>
  )
}

export default WatchPage
