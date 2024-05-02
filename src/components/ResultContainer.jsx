import React from 'react'
import ResultCard from './ResultCard'
import { useSelector } from 'react-redux'
import VideoCard from './VideoCard'

const ResultContainer = () => {
  const searchedVideos = useSelector((store) => store.app.searchedVideos)
  console.log(searchedVideos)
  return (
    <div className="flex flex-col content-start mt-4">
      {searchedVideos?.items?.map((video) => (
        <VideoCard video={video} />
      ))}
    </div>
  )
}

export default ResultContainer
