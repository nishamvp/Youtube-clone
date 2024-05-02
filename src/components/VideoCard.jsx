import React from 'react'
import { Link } from 'react-router-dom'

const VideoCard = ({ video }) => {
  const truncateString = (string, length) => {
    if (string.length < length) return string
    else return `${string.slice(0, length)}...`
  }
  const publishedDate = new Date(video?.snippet?.publishedAt)
  const currentDate = new Date()
  const timeDifference = currentDate - publishedDate
  const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24))
  return (
    <div className="m-auto py-3 max-w-96 max-h-80 ">
      <Link to={`/watch?v=${video?.id}`}>
        <img
          className="rounded-lg"
          width={331}
          src={video?.snippet?.thumbnails?.medium?.url}
          alt="Video"
        />
        <h2 className="text-nowrap font-semibold mt-2">
          {truncateString(video?.snippet?.title, 32)}
        </h2>

        <p>{video?.snippet?.channelTitle}</p>
        <div className="flex justify-between font-light ">
          {video?.statistics?.viewCount && (
            <p>{video?.statistics?.viewCount} Views</p>
          )}
          <p>{daysDifference} days ago</p>
        </div>
      </Link>
    </div>
  )
}

export default VideoCard

export const AdCard = ({ adVideo }) => {
  return (
    <div>
      <div className="border border-neutral-500 p-2 mx  -2">
        <VideoCard video={adVideo} />
      </div>
      <h4 className="font-semibold text-lg text-red-400 ">This is an Ad.</h4>
    </div>
  )
}
