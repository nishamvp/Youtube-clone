import React from 'react'
import { useSelector } from 'react-redux'
import CommentList from './CommentList'

const CommentContainer = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen)
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
    <div className="my-1 max-w-screen-md">
      <h2 className="font-bold text-2xl ">Comments</h2>
      <CommentList comments={dummyData} />
    </div>
  )
}

export default CommentContainer
