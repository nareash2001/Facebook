import React from 'react'
import "./Friendrequest.css"
import { Link } from 'react-router-dom'
const Friendrequest = () => {
  return (
    <div className='displayflex'>
     <div className='friendshomeleftnavigate'>
      <div className='leftnavigate'>
        <div className='request_leftnavi_header displayflexalign'>
          <div className='request_leftnavi_header_left displayflexcenter'><Link to="/friends"></Link></div>
          <div className='request_leftnavi_header_right displayflex'>
            <div> <Link  className="underlinehover" to="/friends">Friends</Link></div>
            <div >Friend Requests</div>
          </div>
        </div>
      </div>
      </div>
      <div></div>
    </div>
  )
}

export default Friendrequest
