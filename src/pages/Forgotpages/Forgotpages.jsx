import React from 'react'
import "./Forgotpages.css"
import Fotter from "../../components/Fotter/Fotter"
import Findaccount from '../../components/Forgotpages/Findaccount/Findaccount'
import Forgotpagetop from '../../components/Forgotpages/Forgotpagetop/Forgotpagetop'
import Otp from '../../components/Forgotpages/Otp/Otp'
import Newpassword from '../../components/Forgotpages/Newpassword/Newpassword'
const Forgotpages = (props) => {
  document.title = "Forgotten Password | Can't Log In | Facebook";
  return (
    <div className='forgotpages'>
      <Forgotpagetop top={props.top} />

      <div className='forgotpagecenter'>

        {
          props.otp === 0 && <Findaccount />
        }
        {
          props.otp === 1 && <Otp />
        }
        {
          props.otp === 2 && <Newpassword />
        }
      </div>
      <div className='forgotpagefotter'>
        <Fotter />
      </div>

    </div>
  )
}

export default Forgotpages
