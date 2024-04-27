import React from 'react'
import Comment from './Comment'

const CommentList = ({ comments }) => {
  return (
    <div className="mt-4  ">
      {comments?.map((comment, index) => (
        <>
          <Comment comment={comment} key={index} />

          <div className="pl-5 ml-5 border-0 border-l-2 ">
            <CommentList comments={comment.replies} key={index} />
          </div>
        </>
      ))}
    </div>
  )
}

export default CommentList
