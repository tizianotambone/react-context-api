import React from 'react'

function PostCard({post}) {
  return (
    <div className='card col-12 col-md-6'>
      {post.title}
    </div>
  )
}

export default PostCard
