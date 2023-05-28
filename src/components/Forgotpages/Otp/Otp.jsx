import React from 'react'
import "./Otp.css"
import Inbutbox from '../../Inputbox/Inbutbox'
import { useState } from 'react'
import { Otpverfication, Valueupdate } from '../../../Util/Function/Function'
import { store } from '../../../Mobx'
import { observer } from 'mobx-react'
import { useNavigate } from 'react-router-dom'
const Otp = () => {
    const [otp, setOtp] = useState(
        {
            otpcode: "",
            mail:store.Findaccount
        }
    )
    const [otpwarning,setOtpwarning]=useState({
        view:0,
        message:"",
        status:0
    })
    const navigate=useNavigate();
    if(otpwarning.status===1){
        navigate("/otpverifier");
      }
    const valueupdate = (e) => {
        Valueupdate(e, otp, setOtp)
    }
    return (
        <div className='findaccount'>
            <div className='findaccounttitle'>
                Enter security code
            </div>
            <div className='findaccountbody'>
                {otpwarning.view?(<div className='otpwarning'>
                    <div className='otpwarningicon'><img src="https://static.xx.fbcdn.net/rsrc.php/v3/yX/r/b1StE9EpZe2.png" alt=""/></div>
                    <div className='otpwarningmessage'>{otpwarning.message}</div>
                </div>):""}
                <div className='otpcontent1'>
                    Please check your emails for a message with your code. Your code is 6 numbers long.
                </div>
                <div className='otpcontent2'>
                    <Inbutbox placeholder="Enter code" type="text" className="otpinputbox" name="otpcode" value={otp.otpcode} onchange={valueupdate} />
                    <div className='otpcontent2right'>
                        <div className='otpcontent2rightfirst'>We sent your code to:</div>
                        <div className='otpcontent2rightsecond'>{store.Findaccount}</div>
                    </div>
                </div>
                <div className='otpcontent3'>
                    <div className='otpcontent3left clusor underlinehover'>Didn't get a code?</div>
                    <div>
                        <button className="cancelbutton clusor" onClick={()=>window.location.pathname="/forgotpage"}>Cancel</button>
                        <button className="searchbutton clusor" onClick={()=>Otpverfication(otp,setOtp,otpwarning,setOtpwarning)}>Continue</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default observer(Otp)
