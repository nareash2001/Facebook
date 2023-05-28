import React from 'react'
import "./Fotterpagehome.css"
import {Footerlist} from '../../Util/Homeleftnav.js/Homeleftnav';

const Fotterpagehome = () => {
  return (
    <div className='fotterpagehome'>
    {Footerlist()}
    <li>More <span>.</span></li>
    <li>Meta © 2023</li>
  </div>
  )
}

export default Fotterpagehome
