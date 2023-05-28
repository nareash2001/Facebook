import React from 'react'
import Homeleftnav from '../../components/Homeleftnav/Homeleftnav'
import "./Homecontent.css"
import Homecontact from '../../components/Homecontact/Homecontact'
import {useEffect } from 'react'
import { Contactlist} from '../../Util/Getdata/getdata'
import Postcontainer from '../../components/Postcontainer/PostContainer/Postcontainer'
import { observer } from 'mobx-react'
import {store} from "../../Mobx"
const Homecontent = () => {
  useEffect(() => {
    Contactlist(store);
  }, [])
  return (
    <div className='homecontent'>

      <div className='homeleftnav-outer'>
        <Homeleftnav/> 
      </div>
      <div className='homepostcontainerouter'>
        <Postcontainer/>
      </div>
      <div className='homecontactlist'>
        <Homecontact/>
      </div>

    </div>
  )
}

export default observer(Homecontent)
