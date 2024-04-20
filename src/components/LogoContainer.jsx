import React from 'react'
import HamburgerIcon from '../assets/Icons/HamburgerIcon'
import { YOUTUBE_LOGO } from '../assets/constants'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../utils/appSlice'

const LogoContainer = () => {
  const dispatch = useDispatch()
  const handleClick = () => {
    dispatch(toggleMenu())
  }
  return (
    <div className="grid grid-cols-1">
      <div className=" flex gap-8 mx-2 items-center ">
          <HamburgerIcon   onClick={handleClick} />
        <Link to="/">
          <img
            className="w-28 aspect-auto cursor-pointer"
            src={YOUTUBE_LOGO}
            alt="YouTube Logo"
          />
        </Link>
      </div>
    </div>
  )
}

export default LogoContainer
