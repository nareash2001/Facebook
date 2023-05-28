import React, { useState } from 'react'
import "./Postdialog.css"
import { Dialog } from '@material-ui/core'
import { observer } from 'mobx-react'
import { store } from "../../../Mobx"
import Postcreatedialogimg from '../Postcreatedialogimg/Postcreatedialogimg'
import Postcreatedialogwrtter from '../Postcreatedialogwriter/Postcreatedialogwrtter'
import { Postcreate } from '../../../Util/Function/Function'
const Postdialog = () => {
  const [data, setData] = useState({
    value: "",
  })
  const [img,setImg]=useState({
    view:0,
    file:""
  })
  const [posttype, setPosttype] = useState(1)
  const [valuelength, setValuelength] = useState(0)

  return (
    <Dialog open={store.createpostdialog}>
      <div className='postcreatedialog'>
        <div>
          <div className='postcreatedialogtitle postcreatedialogtitlefont'>
            Create post
          </div>
          <div className='postcreatedialogclose clusor'>
            <span onClick={() => store.createpostdialog = 0}><i /></span>
          </div>
        </div>
        <div className='postcreatedialogbody1'>
          <img className="clusor" src={store.Profile.profile} alt="" />
          <div className='postcreatedialognamecontent'>
            <h4>{store.Profile.first_name} {store.Profile.last_name}</h4>
            <div className='clusor'>
              <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yV/r/AmAoxUvBtdU.png" alt="" />
              <span>Public</span>
              <i />
            </div>
          </div>
        </div>
        {posttype ?
          <Postcreatedialogwrtter data={data} setData={setData} valuelength={valuelength} setValuelength={setValuelength} />
          :
          <Postcreatedialogimg data={data} setData={setData} valuelength={valuelength} setValuelength={setValuelength}
            setPosttype={setPosttype} img={img} setImg={setImg}
          />
        }
        <div className='postcreatecontentbelow'>
          <div className='postcreateaddpost'>
            <div className='postcreateaddpostleft'>
              Add to your post
            </div>
            <div className='postcreateaddpostright'>
              <div className={posttype?"":"postcreatedaddpostrightdiv"}
               onClick={() => setPosttype(0)}><img src="https://static.xx.fbcdn.net/rsrc.php/v3/y7/r/Ivw7nhRtXyo.png" alt="" /></div>
              <div><img src="https://static.xx.fbcdn.net/rsrc.php/v3/yq/r/b37mHA1PjfK.png" alt="" /></div>
              <div><img src="https://static.xx.fbcdn.net/rsrc.php/v3/yd/r/Y4mYLVOhTwq.png" alt="" /></div>
              <div><img src="https://static.xx.fbcdn.net/rsrc.php/v3/y1/r/8zlaieBcZ72.png" alt="" /></div>
              <div><img src="https://static.xx.fbcdn.net/rsrc.php/v3/yT/r/q7MiRkL7MLC.png" alt="" /></div>
              <div><i /></div>
            </div>
          </div>
          <div className='postcreatepostsubmit'
            id={valuelength !== 0 ? "postcreatepostsubmitwork" : "postcreatepostsubmitnotwork"}
            onClick={() => valuelength !== 0 ? Postcreate(data,img) : ""}> Post</div>
        </div>
      </div>
    </Dialog>
  )
}
export default observer(Postdialog)