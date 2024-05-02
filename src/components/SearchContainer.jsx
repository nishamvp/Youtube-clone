import React, { useState } from 'react'
import SearchIcon from '../assets/Icons/SearchIcon'
import useGetSuggestions from '../hooks/useGetSuggestions'
import { YOUTUBE_SEARCH_VIDEOS_API } from '../assets/constants'
import { useDispatch, useSelector } from 'react-redux'
import { setSearchedVideos } from '../utils/appSlice'
import { useNavigate } from 'react-router-dom'

const SearchContainer = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [searchBlur, setSearchBlur] = useState(false)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { suggestions } = useGetSuggestions(searchQuery)
  const search = useSelector((store) => store.search)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const response = await fetch(YOUTUBE_SEARCH_VIDEOS_API + suggestions)
    const json = await response.json()
    dispatch(setSearchedVideos(json))
    navigate(`/results?search_query=${searchQuery}`)
  }

  return (
    <div>
      <div className="grid grid-cols-10 ">
        <form className="flex col-span-12" onSubmit={handleSubmit}>
          <input
            id="input"
            className="w-full px-5 border rounded-l-full placeholder:text-xl"
            type="text"
            placeholder="Search"
            onChange={(e) => setSearchQuery(e.target.value)}
            onBlur={() => setSearchBlur(false)}
            onFocus={() => setSearchBlur(true)}
            value={searchQuery}
          />

          <button className="rounded-r-full border px-6 py-1.5 bg-gray-100">
            <SearchIcon />
          </button>
        </form>
      </div>
      {searchBlur && (
        <div className="absolute flex flex-col z-10 w-[rem] bg-gray-50 px-2 py-2 rounded-lg shadow-sm border border-gray-50">
          <ul>
            {suggestions &&
              suggestions.map((s, index) => (
                <li key={index} className="p-2 hover:bg-white">
                  {s}
                </li>
              ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default SearchContainer
