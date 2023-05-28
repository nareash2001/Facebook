import React,{useState} from 'react'
import "./Homewatch.css"
import { Postarr } from '../../../../Util/Home/Home'
import InfiniteScroll from 'react-infinite-scroll-component'
import Video from "./Videocomponent/Video"
const Homewatch = () => {
  const [postarr, setPostarr] = useState({
    arr: [],
    hasMore: true
  })
  return (
    <InfiniteScroll
    dataLength={postarr.arr.length}
    next={() => { Postarr(postarr, setPostarr) }}
    hasMore={postarr.hasMore}
    endMessage={<h4>not found</h4>}
    className='homewatchinfintescroll'
  >
      <div className='homewatch'>

      {postarr.arr.map((i) => (
          <Video key={i} />
        ))
        }
            </div>

    </InfiniteScroll>
  )
}

export default Homewatch
