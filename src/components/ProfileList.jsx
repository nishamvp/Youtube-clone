import React from 'react'
import { SIDEBAR_PROFILE_LIST } from '../assets/constants'

const ProfileList = () => {
    return (
        <ul className="py-4">
          <h2 className="font-semibold text-xl">You</h2>
          {SIDEBAR_PROFILE_LIST.map((item, index) => (
            <li
              key={index}
              className="flex px-2 py-3 justify-start items-center gap-3"
            >
              {<item.Icon />}
              <span className="ml-2 text-xl">{item.text}</span>
            </li>
          ))}
        </ul>
      )
}

export default ProfileList