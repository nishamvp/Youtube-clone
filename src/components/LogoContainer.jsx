import React from 'react'
import HamburgerIcon from '../assets/Icons/HamburgerIcon'
import { YOUTUBE_LOGO } from '../assets/constants'

const LogoContainer = () => {
  return (
    <div className="grid grid-cols-1">
      <div className=" flex gap-8 mx-2 items-center ">
        <HamburgerIcon />
        <img
          className="w-28 aspect-auto cursor-pointer"
          src={YOUTUBE_LOGO}
          alt="YouTube Logo"
        />
      </div>
    </div>
  )
}

export default LogoContainer
