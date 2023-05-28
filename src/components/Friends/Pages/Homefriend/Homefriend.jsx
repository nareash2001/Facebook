import React from 'react'
import "./Homefriend.css"
import {Link} from "react-router-dom"
import Homeleftnavigated from "../../Homefriendsleftnavigated/Homefriendsleftnavigated"
import Friendlistcomponent from './Friendlistcomponent/Friendlistcomponent'
import { useEffect } from 'react'
import { Friendlistsuggestion } from '../../../../Util/Getdata/getdata'
// import { useState } from 'react'
import {store} from "../../../../Mobx"
import { observer } from 'mobx-react'
const Homefriend = () => {
  useEffect(()=>{
    fun();
  },[])
  const fun=async()=>{
  store.friendlistsuggestion= await Friendlistsuggestion()
  }
  return (
  
    <div className='displayflex'>
      
    <div className='friendshomeleftnavigate'>
      <Homeleftnavigated/>
     </div>
     <div className='friendpagebody'>
      <div className='friendpagebodyheader displayflexalign'>
        <span>People You May Know</span>
        <Link to="/suggestion">See all</Link>
      </div>
      <div className='friendpagebodycontent displayflex'>
          {/* <Friendlistcomponent/>
          <Friendlistcomponent/>
          <Friendlistcomponent/>
          <Friendlistcomponent/>
          <Friendlistcomponent/> */}
          {
            store.friendlistsuggestion.map((item,i)=><Friendlistcomponent data={item} key={i}/>)
          }
      </div>
     </div>
     </div>
  )
}

export default observer(Homefriend)
