import React from 'react'
import { SIDEBAR_EXPLORE_LIST } from '../assets/constants'

const ExploreList = () => {
  return (
    <ul className="py-4">
      <h2 className="font-semibold text-xl p-2">Explore</h2>
      {SIDEBAR_EXPLORE_LIST.map((item, index) => (
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

export default ExploreList
