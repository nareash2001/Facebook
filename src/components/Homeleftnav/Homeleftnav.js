import React, { useState } from 'react';
import "./Homeleftnav.css";
import { Leftnavlist} from '../../Util/Homeleftnav.js/Homeleftnav';
import { Homeleftnavlist } from '../../Assert/Homeleftnav/Homeleftnav';
import Fotterpagehome from '../Fotterpagehome/Fotterpagehome';
import { observer } from 'mobx-react';
import {store} from "../../Mobx"
const Homeleftnav = () => {
  Homeleftnavlist[0].img=store.Profile.profile;
  Homeleftnavlist[0].name=`${store.Profile.first_name} ${store.Profile.last_name}`;
  const [leftnav, setLeftnav] = useState(0);
  return (
    <div className='homeleftnav'>
      <div className='homeleftnavlist'> {
        Leftnavlist(0, 10,Homeleftnavlist)
      }

        <div className='leftnav-seemore' onClick={()=>setLeftnav(1)} id={leftnav===0?"displayid":"displaynoneid"}>
          <div><svg fill="currentColor" viewBox="0 0 16 16" width="1em" height="1em" ><g fillRule="uevenodd" transform="translate(-448 -544)"><path fillRule="nonzero" d="M452.707 549.293a1 1 0 0 0-1.414 1.414l4 4a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L456 552.586l-3.293-3.293z"></path></g></svg></div>
          <span>See more</span>
        </div>
      </div>
      <div className='homeleftnavlist homeleftnavlist-extra' id={leftnav===1?"displayid":"displaynoneid"}>
        {
          Leftnavlist(10, 24,Homeleftnavlist)
        }
        <div className='leftnav-seemore'onClick={()=>setLeftnav(0)}>
          <div><svg fill="currentColor" viewBox="0 0 20 20" width="1em" height="1em" ><path d="M15.47 12.2 10 6.727 4.53 12.2a.75.75 0 0 1-1.06-1.061l6-6a.751.751 0 0 1 1.06 0l6 6a.75.75 0 0 1-1.06 1.061z"></path></svg></div>
          <span>See less</span>
        </div>
      </div>
      <div className='homeleftnavline'></div>
      <div className='homeleftnavfotter'>
      <Fotterpagehome/>
</div>
    </div>


  )
}

export default observer(Homeleftnav)

