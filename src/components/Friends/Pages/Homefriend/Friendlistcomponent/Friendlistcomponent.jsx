import React from 'react'
import "./Friendlistcomponent.css"
import { Link } from 'react-router-dom'
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import { useState } from 'react';
import {Removefriendlistsuggestion,Addfriendlistsuggestion, Cancelfriendrequestsent} from "../../../../../Util/Getdata/getdata"
const Friendlistcomponent = (props) => {
  const [state,setState]=useState({
    remove:1,
    request:1,
    id:props.data.id
  })
  
  return (
    <>
    {  
      state.remove ?
    <div className='friendlistcomponent'>
      <div className='friendlistbody'>
        <Link to="">
          <img src={props.data.profile} alt=""/>
          {/* <img src="https://scontent.fmaa2-1.fna.fbcdn.net/v/t39.30808-1/274308843_7102362976472926_2145790235096999698_n.jpg?stp=dst-jpg_p160x160&_nc_cat=101&ccb=1-7&_nc_sid=7206a8&_nc_ohc=CnaEbuj7JvYAX8k8v1P&_nc_ht=scontent.fmaa2-1.fna&oh=00_AfD1Ku-K3ZbYTVHidrQ2gQRWaVE9k_j4rLMK_N3439Dd4w&oe=64724BA4" alt="" /> */}
        </Link>
        <div className='friendlisttitle clusor underlinehover'>
        {props.data.first_name} {props.data.last_name}
        </div>
       { 
       state.request?
       <>
         <div className='friendlisttitle1 displayflexalign'>
           <div className='friendlisttitle1left'>
           <AvatarGroup max={2}>
  <Avatar alt="" src="https://res.cloudinary.com/dym5bpsql/image/upload/v1684922239/avathar_fiz3it.jpg" />
  <Avatar alt="" src="https://res.cloudinary.com/dym5bpsql/image/upload/v1684922239/avathar_fiz3it.jpg" />
</AvatarGroup>
           </div>
           <div className='friendlisttitle1right'>3 mutual friends</div> 
        </div>
        <div className='friendlisttitle2 displayflexalign'>
          <button className='clusor addfriendbutton' onClick={()=>{setState({...state,request:0});Addfriendlistsuggestion({id:state.id})}}>Add Friend</button>
          <button className='clusor removefriendbutton'onClick={()=>{setState({...state,remove:0});Removefriendlistsuggestion({id:state.id})}}>Remove</button>
        </div> 
        </>:
        <>
        <div className='friendlistrequest'>Request sent</div>
        <div className='friendlistcancelrequestcontainer'>
          <button  className='clusor removefriendbutton' onClick={()=>{setState({...state,request:1});Cancelfriendrequestsent({id:state.id})}}> Cancel</button>
        </div>
        </>
}
      </div>
    </div>
    :
    ""
}
</>
  )
}

export default Friendlistcomponent
