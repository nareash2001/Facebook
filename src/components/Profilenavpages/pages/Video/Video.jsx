import React from 'react'
import "./Video.css"
import { useSearchParams } from 'react-router-dom'

const Videos = () => {
  const {id}= useSearchParams();
  console.log(id)
  return (
    <div>
      video
    </div>
  )
}

export default Videos
