import React, { useEffect, useState } from 'react'
import AvatarIcon from '../assets/Icons/AvatarIcon'

const Comment = ({comment}) => {
  const [isComment, setIsComment] = useState(false)
  useEffect(() => {
    setIsComment(true)
  }, [])

  return (
    <div className="flex gap-2   ">
      <AvatarIcon isComment={isComment} />
      <div>
        <p className="font-medium">{comment.name}</p>
        <p className="font-normal ">
          {comment.text}
        </p>
      </div>
    </div>
  )
}

export default Comment
