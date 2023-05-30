import React,{useState} from 'react'
import "./Otpverification.css"
import { store } from '../../Mobx'
import { observer } from 'mobx-react'
import { Valueupdate } from '../../Util/Function/Function'
import Inbutbox from '../../components/Inputbox/Inbutbox'
import { Signupotpcall, Signupotpverifer } from '../../Util/Getdata/getdata'
const Otpverification = (props) => {
  document.title="Facebook"
  const [data,setData]=useState({
    email:store.email,
    otp:""
  })

  console.log(store.email)
  console.log("hi")
  const Update=(e)=>
  {
    Valueupdate(e,data,setData)
  }
  return (
  <div className='otpverification_body displayflexalign'>
  <div className='otpverification_top displayflexalign'>
    <i/>
    <span/>
  </div>
  <div className='otpverification_form'>
       <div className='otpverification_heading'>
        Enter Confirmation code
       </div>
       <div className='otpverification_heading2'>
        To confirm your account, enter the 5-digit code that we sent to: {store.email}.
       </div>
      <Inbutbox className="otpverification_code" value={data.otp} name="otp" focus={1} onchange={Update} placeholder="Code"/>
       <div className='otpverification_sent'>
        <span  onClick={()=>Signupotpcall({email:store.email})}className='clusor underlinehover'>Sent Again</span>
       </div>
       <div className='otpverification_formbutton displayflex'>
        <button>
          Update Contact Info
        </button>
        <button  onClick={()=>Signupotpverifer(data,store)}className={data.otp.length===0?'otpverification_continuebutton':"otpverification_activebutton"}>
          Continue
        </button>
       </div>
   </div>
   
  </div>
  )
}

export default observer(Otpverification)
