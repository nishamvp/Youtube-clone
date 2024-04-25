import React, { useState } from 'react'
import SearchIcon from '../assets/Icons/SearchIcon'
import useGetSuggestions from '../hooks/useGetSuggestions'

const SearchContainer = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [searchBlur, setSearchBlur] = useState(false)
  const { suggestions } = useGetSuggestions(searchQuery)

  return (
      <div className="grid grid-cols-10 ">
        <div className="col-span-12 flex    ">
          <input
            className="border w-full rounded-l-full px-5 placeholder:text-xl"
            type="text"
            placeholder="Search"
            onChange={(e) => setSearchQuery(e.target.value)}
            onBlur={() => setSearchBlur(true)}
          />

          <div className="rounded-r-full border px-6 py-1.5 bg-gray-100  ">
            <SearchIcon />
          </div>
        </div>
      </div>
      
  )
}

export default SearchContainer
