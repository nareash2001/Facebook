import React from 'react'
import "./Watchpage.css"
import Leftnavigate from '../../components/Leftnavigate/Leftnavigate'
import { useParams } from 'react-router-dom';
import Homewatch from "../../components/Watchnavpages/Pages/Homewatch/Homewatch"
import Livepage from "../../components/Watchnavpages/Pages/Livepage/Livepage"
import Music from "../../components/Watchnavpages/Pages/Musicpages/Music"
import Saved from "../../components/Watchnavpages/Pages/Savedpage/Saved"
import Show from "../../components/Watchnavpages/Pages/Showspage/Show"
const Watchpage = () => {
  const { id } = useParams();
  return (
    <div className='watchpage'>
      <div className='leftnavwatch'>
        <Leftnavigate />
      </div>
      <div className='watchpagerightside'>
      {
        id===undefined &&<Homewatch/>
      }
      {
        id==="live" && <Livepage/>
      }
       {
        id==="music" && <Music/>
      }
       {
        id==="shows" && <Show/>
      }
       {
        id==="saved" && <Saved/>
      }
      </div>
    </div>
  )
}

export default Watchpage
