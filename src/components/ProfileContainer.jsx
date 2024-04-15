import React from 'react'
import BellIcon from '../assets/Icons/BellIcon'
import AvatarIcon from '../assets/Icons/AvatarIcon'

const ProfileContainer = () => {
  return (
    <div className='grid grid-cols-1 '>
      <div className='flex justify-end items-center gap-4 mr-7 '>
        <BellIcon/>
        <AvatarIcon/>
      </div>
    </div>
  )
}

export default ProfileContainer