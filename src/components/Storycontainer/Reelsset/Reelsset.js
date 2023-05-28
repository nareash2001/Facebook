import React from 'react'
import "./Reelsset.css"
import {Reels} from "../../../Util/Storycontainer/Storycontainer"
const Reelsset = () => {
  return (
    <div className='storycontainerset'>
      {
        Reels()
      }
    </div>
  )
}

export default Reelsset
