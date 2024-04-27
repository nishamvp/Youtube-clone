import React, { useState } from 'react'
import SearchIcon from '../assets/Icons/SearchIcon'
import useGetSuggestions from '../hooks/useGetSuggestions'

const SearchContainer = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [searchBlur, setSearchBlur] = useState(false)
  const { suggestions } = useGetSuggestions(searchQuery)

  return (
    <div>
      <div className="grid grid-cols-10 "> 
        <div className="col-span-12 flex    ">
          <input
            className="border w-full rounded-l-full px-5 placeholder:text-xl"
            type="text"
            placeholder="Search"
            onChange={(e) => setSearchQuery(e.target.value)}
            onBlur={() => setSearchBlur(true)}
            onFocus={()=>setSearchBlur(false)}
          />

          <div className="rounded-r-full border px-6 py-1.5 bg-gray-100  ">
            <SearchIcon />
          </div>
        </div>
      </div>
      {!searchBlur && (
        <div className="absolute flex flex-col z-10 w-[rem]  bg-gray-50 px-2 py-2 rounded-lg shadow-sm border border-gray-50">
          <ul>
            {suggestions &&
              suggestions.map((s, index) => <li key={index}>{s}</li>)}
          </ul>
        </div>
      )}
    </div>
  )
}

export default SearchContainer
