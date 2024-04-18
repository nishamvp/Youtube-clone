import React from 'react'
import { Link } from 'react-router-dom'

const VideoCard = ({ video }) => {
  const truncateString = (string, length) => {
    if (string.length < length) return string
    else return `${string.slice(0, length)}...`
  }
  return (
    <div className=" max-w-96 max-h-80 my-2 mt-3">
      <Link to={'https://www.youtube.com/watch?v=29ECwExc-_M'}>
        <img
          className="rounded-lg"
          width={331}
          src={video?.snippet?.thumbnails?.medium?.url}
          alt=""
          srcset=""
        />
        <h2 className="text-nowrap font-semibold mt-2">
          {truncateString(video?.snippet?.title,40)}
        </h2>
      </Link>
    </div>
  )
}

export default VideoCard
