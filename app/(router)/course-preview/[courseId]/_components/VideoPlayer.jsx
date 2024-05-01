import React from 'react'

function VideoPlayer({videoUrl, poster}) {
  return (
    <div>
      <video poster={poster} width={1000} height={250} controls className='rounded-sm'>
        <source src={videoUrl} type='video/mp4' />
      </video>
      
    </div>
  )
}

export default VideoPlayer
