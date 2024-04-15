import React from 'react'
import ExploreList from './ExploreList'
import MainList from './MainList'
import ProfileList from './ProfileList'

const SideBar = () => {
  return (
    <div className="col-span-1">
      <div className="mx-5">
        <MainList/>
        <hr />
        <ExploreList/>
        <hr />
        <ProfileList/>
      </div>
    </div>
  )
}

export default SideBar
