import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Loginpages from './Loginpages';
import Forgotpages from "../Forgotpages/Forgotpages";
const Loginpagesrouter = () => {
  return (
   <Routes>
    <Route path="/" element={<Loginpages/>}/>
    <Route path="forgotpage" element={<Forgotpages  top={1} otp={0}/>}/>
    <Route path="otp" element={<Forgotpages top={0} otp={1}/>}/>
    <Route path="otpverifier" element={<Forgotpages top={0} otp={2}/>}/>
   </Routes>

  )
}

export default Loginpagesrouter
