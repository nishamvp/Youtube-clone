import React from 'react'
import ExploreList from './ExploreList'
import MainList from './MainList'

const SideBar = () => {
  return (
    <div className="col-span-2">
      <div className="mx-5">
        <MainList/>
        <ExploreList/>
      </div>
    </div>
  )
}

export default SideBar
