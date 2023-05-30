import { Dialog } from '@material-ui/core'
import React from 'react'
import "./Signup.css";
import Inbutbox from '../Inputbox/Inbutbox';
import { useState } from 'react';
import { Conformemail, Valueupdate } from '../../Util/Function/Function';
import { Date1, Month1, Year1 } from "./Selection/Selection"
import { Signupcall } from '../../Util/Getdata/getdata';
import { store } from '../../Mobx';
import { observer } from 'mobx-react';
import { useNavigate } from 'react-router-dom';
const Signup = (props) => {
  let day = new Date().getDate();
  let month = new Date().getMonth();
  month++;
  let year = new Date().getFullYear();
  const [data, setData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    conform_email:"",
    password: "",
    date: `${year}-${month}-${day}`,
    gender: "",

  })
  const navigate=useNavigate()
const [conformemail,setConformemail]=useState(false);
  const Handlerdate = (e) => {

    if (e.target.name === "day") {
      day = e.target.value;
    }
    else if (e.target.name === "month") {
      month = e.target.value;
    }
    else if (e.target.name === "year") {
      year = e.target.value;
    }

    setData({ ...data, date: `${year}-${month}-${day}` });
  }
  const Update = (e) => {
    Valueupdate(e, data, setData)
    if(e.target.name==="email"){
      Conformemail(e.target.value,setConformemail)
    }

  }
  return (
   
    <Dialog open={props.signup} className="outer">
      <div className='signup'>
        <img onClick={props.dialogbox} src="https://static.xx.fbcdn.net/rsrc.php/v3/yO/r/zgulV2zGm8t.png" draggable="false" alt="" />
        <div className='signup-top'>
          <div> Sign Up</div>
          <div>It's quick and easy.</div>
        </div>
        <div className='signup-body'>
          <div className='displayflex'>
            <Inbutbox className="signup_firstname" value={data.first_name} placeholder="First name" onchange={Update} name="first_name" type="text" focus={1} />
            <Inbutbox className="signup_lastname" value={data.last_name} placeholder="Surname" onchange={Update} name="last_name" type="text" />
          </div>
          <Inbutbox className="signup_email" value={data.email} placeholder="Mobile number or email address" onchange={Update} name="email" type="text" />
{          conformemail?
<Inbutbox className="signup_email" value={data.conform_email} placeholder="Re enter email address" onchange={Update} name="conform_email" type="text" />
:""
}          <Inbutbox className="signup_email" value={data.password} placeholder="New password" onchange={Update} name="password" type="password" />

          <div className='signup_dateheading displayflexalign'>Date of birth <i /></div>
          <div className='displayflexcenter signup_date'>
            <Date1 handler={Handlerdate} />
            <Month1 handler={Handlerdate} />
            <Year1 handler={Handlerdate} />
          </div>
          <div className='signup_genderheading displayflexalign'>
            Gender <i />
          </div>
          <div className='displayflexcenter signup_date'>
            <label className='displayflexcenter'>
              Female
              <Inbutbox type="radio" name="gender" value="Female" onchange={Update} />
            </label>
            <label className='displayflexcenter'>
              Male
              <Inbutbox type="radio" name="gender" value="Male" onchange={Update} />
            </label>
            <label className='displayflexcenter'>
              Custom
              <Inbutbox type="radio" name="gender" value="Custom" onchange={Update} />
            </label>
          </div>
          <div className='signup_para'>
            People who use our service may have uploaded your contact information to Facebook. <span>Learn more</span>.
          </div>
          <div className='signup_para'>

            By clicking Sign Up, you agree to our <span>Terms,</span> <span>Privacy Policy</span> and <span>Cookies Policy.</span> You may receive SMS notifications from us and can opt out at any time.
          </div>
          <div className='displayflexcenter signup_button'>
            <button onClick={()=>Signupcall(data,store,navigate)}>Sign Up</button>
          </div>
        </div>
      </div>

    </Dialog>
  
  )
}

export default observer(Signup)
