import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import { closeMenu } from '../utils/appSlice'

const WatchPage = () => {
  const [params] = useSearchParams()
  const dispatch = useDispatch()
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen)
  const id = params.get('v')

  useEffect(() => {
    dispatch(closeMenu())
  }, [])

  return (
    <div className="w-screen">
      <iframe
        className={!isMenuOpen && `flex m-auto`}
        width="1024"
        height="576"
        src={`https://www.youtube.com/embed/${id}`}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>
  )
}

export default WatchPage
