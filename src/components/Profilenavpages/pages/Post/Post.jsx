import React from 'react'
import "./Post.css"
import { useSearchParams } from 'react-router-dom'
const Post = () => {
  const {id}= useSearchParams();
  console.log(id)
  return (
    <div>
      post
    </div>
  )
}

export default Post
