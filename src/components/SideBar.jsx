import React from 'react'
import ExploreList from './ExploreList'
import MainList from './MainList'
import ProfileList from './ProfileList'
import { useSelector } from 'react-redux'

const SideBar = () => {
  const isMenuOpen = useSelector(store => store.app.isMenuOpen)
  
  return isMenuOpen  ? (
    <div className="col-span-2  ">
      <div className="px-5 ">
        <MainList/>
        <hr />
        <ExploreList/>
        <hr />
        <ProfileList/>
      </div>
    </div>
  ) : null
}

export default SideBar
