import { Dialog } from '@material-ui/core'
import React from 'react'
import "./Signup.css";
import Inbutbox from '../Inputbox/Inbutbox';
import { useState } from 'react';
import { Valueupdate } from '../../Util/Function/Function';
const Signup = (props) => {
  const [data,setData]=useState({
    first_name:"",
    last_name:"",
    email:"",
    password:"",

  })
  const Update=(e)=>{
       Valueupdate(e,data,setData)
  }
  return (
    <Dialog open={props.signup} className="outer">
        <div className='signup'>
        <img onClick={props.dialogbox} src="https://static.xx.fbcdn.net/rsrc.php/v3/yO/r/zgulV2zGm8t.png" draggable="false" alt="" />
        <div className='signup-top'>
          <div> Sign UP</div>
          <div>It's quick and easy.</div>
        </div>
        <div className='signup-body'>
          <div className='displayflex'>
          <Inbutbox  className="signup_firstname" value={data.first_name} placeholder="First name" onchange={Update} name="first_name" type="text" focus={1}/>
          <Inbutbox  className="signup_lastname" value={data.last_name} placeholder="Surname" onchange={Update} name="last_name" type="text"/>
          </div>
          <Inbutbox  className="signup_email" value={data.email} placeholder="Mobile number or email address" onchange={Update} name="email" type="text"/>
          <Inbutbox  className="signup_email" value={data.password} placeholder="New password" onchange={Update} name="password" type="password"/>           
        </div>
        </div>

    </Dialog>
  )
}

export default Signup
