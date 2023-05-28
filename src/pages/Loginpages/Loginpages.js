import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Loginform from '../../components/Loginform/Loginform';
import Fotter from '../../components/Fotter/Fotter';
import Signup from '../../components/Signupdialogbox/Signup';
import "./Loginpages.css";
const Loginpages = () => {
  const [signup, setSignup] = useState(true);
  const dialogbox = () => {
    setSignup(signup===true?false:true);
  }
  return (
    <div className='loginpage' >
      <div className='loginpage-gray'>
        <div className='loginpage-left'>
          <div className='loginpage-left-logo'>
            <img src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg" alt='' />
          </div>
          <h2>Facebook helps you connect and share with the people in your life.</h2>
        </div>
        <div>
          <Loginform  dialogbox={dialogbox} />
          <div className='createpage-login'>
            <Link to="" className="underlinehover-+63+">Create a Page</Link> for a celebrity, brand or business.
          </div>
        </div>
      </div>
      <Fotter />
      <Signup signup={signup} dialogbox={dialogbox} />
    </div>
  )
}

export default Loginpages
