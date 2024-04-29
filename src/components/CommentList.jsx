import React from 'react'
import Comment from './Comment'

const CommentList = ({ comments }) => {
  return (
    <div className="mt-4 ">
      {comments?.map((comment, index) => (
        <div key={index}>
          <Comment comment={comment} />
          <div className="pl-5 ml-5 border-0 border-l-2 ">
            <CommentList comments={comment.replies} />
          </div>
        </div>
      ))}
    </div>
  )
}

export default CommentList
