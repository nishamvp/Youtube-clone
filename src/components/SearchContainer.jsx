import React from 'react'
import SearchIcon from '../assets/Icons/SearchIcon'

const SearchContainer = () => {
  return (
    <div className="grid grid-cols-11 w-full ">
      <div className="col-span-12 flex    ">
        <input className="border w-full rounded-l-full px-5 placeholder:text-xl" type="text"  placeholder="Search"  />
        <div className='rounded-r-full border px-6 py-1.5 bg-gray-100  '>
          <SearchIcon />
        </div>
      </div>
    </div>
  )
}

export default SearchContainer
