import React from 'react'
import "./Postcontainer.css"
import Storycontainer from '../../Storycontainer/Storycontainer'
import Postcreate from '../Postcreate/Postcreate'
import { useEffect, useState } from 'react'
import { Storylist} from '../../../Util/Getdata/getdata'
import { Postarr } from '../../../Util/Home/Home'
import InfiniteScroll from 'react-infinite-scroll-component'
import Postcomponent from '../../Postcomponent/Postcomponent'
import { store } from '../../../Mobx'
import { observer } from 'mobx-react'
const Postcontainer = () => {
  // const [postarr, setPostarr] = useState({
  //   arr: [],
  //   hasMore: true
  // })
  // const [post,setPost]=useState(0)
  const [story, setStory] = useState(0)
  useEffect(() => {
    Storylist(setStory)
    
  }, [])
  return (

    <InfiniteScroll
      dataLength={store.post.arr.length}
      next={() => { Postarr(store) }}
      hasMore={store.post.hasMore}
      endMessage={<h4>not found</h4>}
    >
      <div className='postcontainer'>
        <Storycontainer storylist={story} />
        <Postcreate/>
        
        {store.post.arr.map((item,i) => (
          // console.log(item)
          <Postcomponent key={i} obj={item} />
        ))
        }
      </div>
    </InfiniteScroll>
  )
}

export default observer(Postcontainer)
