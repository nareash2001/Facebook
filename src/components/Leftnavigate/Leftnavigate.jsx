import React from 'react'
import "./Leftnavigate.css"
import Leftnavigatetop from './Leftnavigatetop/Leftnavigatetop'
import { Leftnavigatelist } from '../../Util/Leftnavigate/Leftnavigate'
import { Leftnavigatewatch } from '../../Assert/List/List'
const Leftnavigate = () => {
  return (
    <div className='leftnavigate'>
      <Leftnavigatetop name="Watch" search="videos" input={1}/>
      <div className='leftnavigatecontent'>
{
  Leftnavigatelist(Leftnavigatewatch)
}
      </div>
    </div>
  )
}

export default Leftnavigate