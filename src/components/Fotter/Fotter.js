import React from 'react'
import "./Fotter.css";
import { Link } from 'react-router-dom';
const Fotter = () => {
    
  return (
    <div className='loginpage-bottom'>
        <ul>
          <li className="loginpage-bottom-ul-li-one">English (UK)</li>
          <li> <Link to="">தமிழ்</Link></li>
          <li> <Link to="">తెలుగు</Link></li>
          <li> <Link to="">ಕನ್ನಡ</Link></li>
          <li> <Link to="">اردو</Link></li>
          <li> <Link to="">हिन्दी</Link></li>
          <li> <Link to="">മലയാളം</Link></li>
          <li> <Link to="">සිංහල</Link></li>
          <li> <Link to="">ਪੰਜਾਬੀ</Link></li>
          <li> <Link to="">বাংলা</Link></li>
          <li> <Link to="">ગુજરાતી</Link></li>
          <li> <Link to=""><i></i></Link></li>
        </ul>
        <div className='loginpage-bottom-line'></div>
        <div className='loginpage-bottom-link'>
          <ul>
            <li><Link to=""> Sign Up</Link></li>
            <li><Link to=""> Log in</Link></li>
            <li><Link to=""> Messenger</Link></li>
            <li><Link to=""> Facebook Lite</Link></li>
            <li><Link to=""> Watch</Link></li>
            <li><Link to=""> Places</Link></li>
            <li><Link to="">Games</Link></li>
            <li><Link to="">Marketplace</Link></li>
            <li><Link to=""> Meta Pay</Link></li>
            <li><Link to=""> Meta Store</Link></li>
            <li><Link to=""> Meta Quest</Link></li>
            <li><Link to=""> Instagram</Link></li>
            <li><Link to=""> Bulletin</Link></li>
            <li><Link to=""> Fundraisers</Link></li>
            <li><Link to=""> Services</Link></li>
            <li><Link to=""> Voting Information Centre</Link></li>
            <li><Link to=""> Privacy Policy</Link></li>
            <li><Link to=""> Privacy Centre</Link></li>
            <li><Link to=""> Groups</Link></li>
            <li><Link to="">About</Link></li>
            <li><Link to="">Create ad</Link></li>
            <li><Link to="">Create Page</Link></li>
            <li><Link to="">Developers</Link></li>
            <li><Link to="">Careers</Link></li>
            <li><Link to="">Cookies</Link></li>
            <li><Link to="">AdChoices</Link></li>
            <li><Link to="">Terms</Link></li>
            <li><Link to="">Help</Link></li>
            <li><Link to="">Contact uploading and non-users</Link></li>
          </ul>
        </div>
        <div className='loginpage-bottom-last'>
        <span> Meta © 2023</span>
        </div>
      </div>
  )
}

export default Fotter
