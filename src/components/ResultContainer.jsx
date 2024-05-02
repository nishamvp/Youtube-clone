import React from 'react'
import { useSelector } from 'react-redux'
import VideoCard from './VideoCard'

const ResultContainer = () => {
  const searchedVideos = useSelector((store) => store.app.searchedVideos)
  return (
    <div className="flex flex-wrap mt-4">
      {searchedVideos?.items?.map((video) => (
        <VideoCard key={video.id.videoId} video={video} />
      ))}
    </div>
  )
}

export default ResultContainer
