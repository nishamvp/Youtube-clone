import React from 'react'
import VideoCard, { AdCard } from './VideoCard'
import useGetVideos from '../hooks/useGetVideos'
import { useSelector } from 'react-redux'

const VideoContainer = () => {
  const videos = useSelector((store) => store.app.popularVideos)
  const { isLoading } = useGetVideos()
  return !isLoading ? (
    <div className="mt-6 flex gap-5 flex-wrap  px-4 relative">
      {videos &&  <AdCard adVideo={videos[0]} /> }
      {videos?.map((video) => (
        <VideoCard key={video.id} video={video} />
      ))}
    </div>
  ) : (
    'Loading...'
  )
}

export default VideoContainer
