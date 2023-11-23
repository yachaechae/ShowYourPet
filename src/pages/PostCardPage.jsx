import React from 'react'
import PostCard from 'components/PostCard'

function PostCardPage({ postCards }) {
  return (
    <>
        <PostCard postCards={postCards}/>
    </>
  )
}

export default PostCardPage;