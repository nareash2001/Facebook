import React from 'react'
import "./Homefriendsleftnavigated.css"
import Leftnavigatetop from "../../Leftnavigate/Leftnavigatetop/Leftnavigatetop"
import { Leftnavigatefriend  } from '../../../Assert/List/List'
import { Leftnavigatelistfriend } from '../../../Util/Leftnavigate/Leftnavigate'
const Homefriendsleftnavigated = () => {
  return (
    <div className='leftnavigate'>
        <Leftnavigatetop name="Friends" input={0} />
         <div className='friendslistnavigatenext'>
          {Leftnavigatelistfriend(Leftnavigatefriend)}
         </div>
      </div>
  )
}

export default Homefriendsleftnavigated
