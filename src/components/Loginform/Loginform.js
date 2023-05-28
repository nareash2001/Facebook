import { observer } from 'mobx-react';
import {store} from "../../Mobx"
import React,{useState} from 'react';
import "./Loginform.css";
import { Link} from 'react-router-dom';
import Inbutbox from "../Inputbox/Inbutbox"
import {Callapi} from "../../Util/Getdata/getdata"
import { Valueupdate } from '../../Util/Function/Function';
const Loginform = (props) => {
  const [logindata,setLogindata]=useState({
    email:"",
    password:""
  })
  const valueupdate=(e)=>{
    Valueupdate(e,logindata,setLogindata)
  }
  const callapi=()=>{
Callapi(logindata,store)
  }  
  return (
    <div className='loginpage-right'>
    <Inbutbox placeholder="Email address or phone number" className={"login-id"} type={"text"} focus="1" onchange={valueupdate} name="email" value={logindata.email} />
    <Inbutbox placeholder="Password" className="login-id" type="password"onchange={valueupdate} name="password" value={logindata.password}/>
    <Inbutbox className="login-button" type="button" value="Log in" onclick={callapi}/>
    <div className='forgot-container'>
      <Link to="/forgotpage" className="underlinehover"> Forgotten password?</Link>
    </div>
    <div className='login-line'></div>
     <div  className='create-button'>
     <button onClick={props.dialogbox}>Create new account </button>
     </div>
   </div>
 
  )
}

export default observer(Loginform)
