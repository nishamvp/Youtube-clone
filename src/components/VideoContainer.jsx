import React from 'react'
import VideoCard, { AdCard } from './VideoCard'
import useGetVideos from '../hooks/useGetVideos'
import { useSelector } from 'react-redux'

const VideoContainer = () => {
  const videos = useSelector((store) => store.app.popularVideos)
  console.log(videos)
  const { isLoading } = useGetVideos()
  return !isLoading ? (
    <div className="mt-6 flex flex-wrap gap-2 px-4 ">
      {videos && <AdCard adVideo={videos[0]} />}
      {videos?.map((video) => (
        <VideoCard key={video.id} video={video} />
      ))}
    </div>
  ) : (
    'Loading...'
  )
}

export default VideoContainer
