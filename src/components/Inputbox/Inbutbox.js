import React from 'react'
import "./Inbutbox.css"
const Inbutbox = (props) => {
  return (
    <div className={props.className}>
      <input 
      type={props.type}  
      value={props.value} 
      placeholder={props.placeholder} 
      autoFocus={props.focus} 
      onChange={(e)=>props.onchange(e)} 
      name={props.name} 
      onClick={props.onclick}
      />
    </div>
  )
}

export default Inbutbox
