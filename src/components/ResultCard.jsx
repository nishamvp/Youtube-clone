import React from 'react'

const ResultCard = ({result}) => {
    const {snippet} =result
  return (
    <div className='w-full'>
{snippet.channelTitle}
    </div>
  )
}

export default ResultCard