import React from 'react'
import "./Home.css";
import {store} from "../../../../../Mobx"
import { observer } from 'mobx-react';
import { Photocreatestoryfun } from '../../../../../Util/Function/Function'
const Home = () => {
  return (
    <div className='storycreatepagebody displayflexcenter'>
  
    <div onClick={()=>{store.createstoryrouter=0;Photocreatestoryfun()}} className='photostorycreatepagebody storycreatepagebodycontent clusor displayflexcenter'>
      <div className='storycreatepagebodycontent1 displayflexcenter'>
        <div className='createstoryphotoicon displayflexcenter'>
          <i />
        </div>
        <h5>Create a photo story</h5>
      </div>
    </div>

    <div onClick={()=>store.createstoryrouter=2} className='textstorycreatepagebody storycreatepagebodycontent clusor displayflexcenter'>
      <div className='storycreatepagebodycontent1 displayflexcenter'>
        <div className='createstorytexticon displayflexcenter'>
          <i />
        </div>
        <h5>Create a text story</h5>
      </div>
    </div>
  </div>
  )
}

export default observer(Home)
