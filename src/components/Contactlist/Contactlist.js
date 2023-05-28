import React from 'react'
import "./Contactlist.css"
import { HomeContactlist } from '../../Util/Contactlist/Contactlist'
import {store}from "../../Mobx"
import { observer} from 'mobx-react'
const Contactlist =() => {

  return (
    <div>
      {
        HomeContactlist(store.Contactlist)
      }
    </div>
  )
}

export default observer(Contactlist)
