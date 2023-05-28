import React from 'react'
import "./Postcreate.css"
import Postdialog from "../Postdialog/Postdialog"
import { Link } from 'react-router-dom'
import { observer } from 'mobx-react'
import {store} from "../../../Mobx"
const Postcreate = () => {
  return (
    <div className='postcreatecontainer'>
       <div className='postcreatecontainertop'>
        <Link to="profile" className="postcreateprofile">
            <img src={store.Profile!==0?store.Profile.profile:null}alt=""/>
        </Link>
        <div className='postcreateline' onClick={()=>store.createpostdialog=true}> What's on your mind, {store.Profile.first_name} {store.Profile.last_name}?</div>
       </div>
       <div className='postline' ></div>
       <div className='postcreatecontainerbottom'>
        <div><Link to=""><img src="https://static.xx.fbcdn.net/rsrc.php/v3/yr/r/c0dWho49-X3.png" alt=""/>Live video</Link></div>
        <div onClick={()=>store.createpostdialog=true}><img src="https://static.xx.fbcdn.net/rsrc.php/v3/y7/r/Ivw7nhRtXyo.png" alt=""/> Photo/video</div>
        <div onClick={()=>{store.createpostdialog=true}}><img src="https://static.xx.fbcdn.net/rsrc.php/v3/yd/r/Y4mYLVOhTwq.png" alt=""/>Feeling/activity</div>
       </div>
       <Postdialog  />
    </div>
  )
}

export default observer(Postcreate)
