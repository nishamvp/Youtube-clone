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
    <div className=" max-w-96 max-h-80 my-2 mt-3">
      <Link>
        <img
          className="rounded-lg"
          width={331}
          src={video?.snippet?.thumbnails?.medium?.url}
          alt=""
          srcset=""
        />
        <h2 className="text-nowrap font-semibold mt-2">
          {truncateString(video?.snippet?.title, 32)}
        </h2>

        <p>{video?.snippet?.channelTitle}</p>
        <div className="flex justify-between font-light ">
          <p>{video?.statistics?.viewCount} Views</p>
          <p>{daysDifference} days ago</p>
        </div>
      </Link>
    </div>
  )
}

export default VideoCard
