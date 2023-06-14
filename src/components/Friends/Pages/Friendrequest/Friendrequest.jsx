import React from 'react'
import "./Friendrequest.css"
import { Link } from 'react-router-dom'
import Friendrequestlist from './Friendlrequestlist/Friendrequestlist'
import { useState } from 'react'
import { useEffect } from 'react'
import { FriendRequestlistcall } from '../../../../Util/Getdata/getdata'
const Friendrequest = () => {
  const [Requestlist,setRequestlist]=useState([])
  useEffect(()=>{
    FriendRequestlistcall(setRequestlist)
  },[])
  return (
    <div className='displayflex'>
     <div className='friendshomeleftnavigate'>
      <div className='leftnavigate'>
        <div className='request_leftnavi_header displayflexalign'>
          <div className='request_leftnavi_header_left displayflexcenter'><Link to="/friends"></Link></div>
          <div className='request_leftnavi_header_right displayflex'>
            <div> <Link  className="underlinehover" to="/friends">Friends</Link></div>
            <div>Friend Requests</div>
          </div>
        </div>
        <div className='friendsrequestlist'>
          <div className='friendsrequestlisttitle'>
           <h4> {Requestlist.length!==0?Requestlist.length:""} Friend Request{Requestlist.length<=1?"":"s"}</h4>
           <div> View sent requests</div>
          </div>
          <div className='friendsrequestlistbody'>
               {
               Requestlist.map((item,i)=><Friendrequestlist key={i} data={item}/>)
               }
          </div>
        </div>
      </div>
      </div>
      <div className='friendsrequestright displayflexcenter'>
           <div className='displayflexcenter'>
            <img src="https://res.cloudinary.com/dym5bpsql/image/upload/v1686718615/null_states_people_gray_wash_nfhj7p.svg" alt=""/>
            <h5>Select people's names to preview their profile.</h5>
            </div>  
      </div>
    </div>
  )
}

export default Friendrequest
