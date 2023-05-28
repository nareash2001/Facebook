import React from 'react'
import "./Findaccount.css"
import Inbutbox from '../../Inputbox/Inbutbox'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Findaccountvaluechecker,Valueupdate} from '../../../Util/Function/Function'
import {store} from "../../../Mobx"
import { observer } from 'mobx-react'
const Findaccount = () => {
  const [data, setData] = useState({
    findaccount: ""
  });
  const navigate=useNavigate();
  const [inputwarning, setInputwarning] = useState({
    view: 0,
    title: "",
    message: "",
    status:0
  });
  if(inputwarning.status===1){
    navigate("/otp");
  }
  
  const valueupdate=(e)=>{
    Valueupdate(e,data,setData)
    store.Findaccount=e.target.value
  }
  return (
    <div className='findaccount'>
      <div className='findaccounttitle'>
        Find Your Account
      </div>
      <div className='findaccountbody'>
        {
          inputwarning.view ? (
            <div className='inputwarning'>
              <div className='inputwarningheading'>
                {inputwarning.title}
              </div>
              <div className='inputwarningbody'>
                {
                  inputwarning.message
                }          </div>
            </div>) : ""}
        <div className='findaccountcontent1'>
          Please enter your email address or mobile number to search
          for your account.
        </div>
        <Inbutbox placeholder="Email address or mobile number" className="findaccountcontent2" type="text" name="findaccount" value={data.findaccount} onchange={valueupdate} />
        <div className='findaccountcontent3'>
          <button className='cancelbutton clusor' onClick={()=>window.location.pathname="./"}>Cancel</button>
          <button className='searchbutton clusor' onClick={() => Findaccountvaluechecker(data,setData,inputwarning,setInputwarning)}>Search</button>
        </div>
      </div>
    </div>
  )
}

export default observer(Findaccount)
