import React from 'react'
import CommentList from './CommentList'

const CommentContainer = () => {
  const dummyData = [
    {
      name: 'Nisham Muhammed',
      text:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet alias ab eum non possimus? In sed quis reprehenderit ducimus soluta incidunt',
      replies: [
        {
          name: 'Nisham Muhammed',
          text:
            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet alias ab eum non possimus? In sed quis reprehenderit ducimus soluta incidunt',
          replies: [
            {
              name: 'Nisham Muhammed',
              text:
                'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet alias ab eum non possimus? In sed quis reprehenderit ducimus soluta incidunt',
              replies: [
                {
                  name: 'Nisham Muhammed',
                  text:
                    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet alias ab eum non possimus? In sed quis reprehenderit ducimus soluta incidunt',
                  replies: [
                    {
                      name: 'Nisham Muhammed',
                      text:
                        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet alias ab eum non possimus? In sed quis reprehenderit ducimus soluta incidunt',
                      replies: [],
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: 'Nisham Muhammed',
          text:
            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet alias ab eum non possimus? In sed quis reprehenderit ducimus soluta incidunt',
          replies: [{
            name: 'Nisham Muhammed',
            text:
              'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet alias ab eum non possimus? In sed quis reprehenderit ducimus soluta incidunt',
            replies: [{
              name: 'Nisham Muhammed',
              text:
                'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet alias ab eum non possimus? In sed quis reprehenderit ducimus soluta incidunt',
              replies: [{
                name: 'Nisham Muhammed',
                text:
                  'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet alias ab eum non possimus? In sed quis reprehenderit ducimus soluta incidunt',
                replies: [],
              },],
            },],
          },],
        },
      ],
    },
    {
      name: 'Nisham Muhammed',
      text:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet alias ab eum non possimus? In sed quis reprehenderit ducimus soluta incidunt',
      replies: [],
    },
    {
      name: 'Nisham Muhammed',
      text:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet alias ab eum non possimus? In sed quis reprehenderit ducimus soluta incidunt',
      replies: [],
    },
  ]

  return (
    <div className="max-w-screen-md my-1">
      <h2 className="text-2xl font-bold ">Comments</h2>
      <CommentList comments={dummyData} />
    </div>
  )
}

export default CommentContainer
