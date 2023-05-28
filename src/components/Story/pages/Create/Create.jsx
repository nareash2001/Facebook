import React from 'react'
import "./Create.css"
import { store } from "../../../../Mobx"
import { observer } from 'mobx-react'
import { useEffect } from 'react'
import Home from "./Home/Home"
import {Textstorybody,Textstorynavi} from './Textstory/Textstory'
const Create = () => {
  useEffect(() => {
    store.createstorymessageicon = 0;
    return () => {
      store.createstorymessageicon = 1
    }
  }, [])
  document.title = "Create Stories | Facebook"

  return (
    <div className='storycreatepage displayflex'>
      <div className='storycreatepageleftnavi'>
        <div className='leftnavigate '>
          <div className='storycreatepageleftnaviheader displayflex'>
            <div>
              Your story
            </div>
            <div className='storycreatenaviheadersettingicon displayflexcenter clusor'>
              <i />
            </div>

          </div>
          <div className='storycreatenaviscroll'>
          <div className='storycreatenaviprofile displayflexalign'>
            <img src={store.Profile.profile} alt="" />
            <div>{store.Profile.first_name} {store.Profile.last_name}</div>
          </div>
              {
                store.createstoryrouter===2 &&<Textstorynavi/>
              }
          </div>
        </div>
      </div>

      {
        store.createstoryrouter === 0 && <Home />
      }
      {/* {
        store.createstoryrouter === 1 && <div> k</div>
      } */}
      {
        store.createstoryrouter === 2 && <Textstorybody />
      }
    </div>

  )
}

export default observer(Create)
