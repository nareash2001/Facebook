import React from 'react'
import {Link} from "react-router-dom"
import "./Homenavlist.css"
const Homenavlist = (props) => {
  return (
    <Link to={`/story/${props.id}`}>
    <div className='displayflex storyhomenavlisthover clusor'>
     
          <div className='storyhomenavlistimg displayflexcenter'>
            <img src={props.obj[0]} alt=""/>
          </div> 
          <div className='displayflex storyhomenavlisthoverright'>
          <div className='storyhomenavilistheading1'>{props.obj[2]} {props.obj[3]}</div>  
          <div className='storyhomenavilistheading3'>{(props.obj.length -4)/2} new <span>6h</span></div>
          </div>
        
    </div>  </Link>
  )
}

export default Homenavlist
