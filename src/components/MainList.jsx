import React from 'react'
import { SIDEBAR_MAIN_LIST } from '../assets/constants'

const MainList = () => {
    return (
        <ul className="py-2">
          {SIDEBAR_MAIN_LIST.map((item, index) => (
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

export default MainList