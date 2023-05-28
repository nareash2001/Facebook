import React from 'react'
import "./Ruledialog.css"
const Ruledialog = (props) => {
  return (
    <div className='ruledialog'>
      <div className='ruledialogtitle'>
        <div className="postcreatedialogtitle ruledialogtitlename">
          Create a strong password
        </div>
        <div className='postcreatedialogclose'>
            <span onClick={()=>props.setOpen(false)}><i/></span>
        </div>
      </div>
      <div className='ruledialogbody'>
        <div className='ruledialogbody1'>
            As you create your password, remember the following:
            <ul>
                <li>It <strong>should not</strong> contain your name.</li>
                <li>It <strong>should not</strong> contain a common dictionary word.</li>
                <li>It <strong>should</strong> contain one or more numbers.</li>
                <li>It <strong>should</strong> have both uppercase and lowercase characters.</li>
                <li>It <strong>should</strong>be at least six characters long.</li>
            </ul>
        </div>
        <div className='ruledialogbody2'><button className="clusor" onClick={()=>props.setOpen(false)}>OK</button></div>
      </div>
    </div>
  )
}

export default Ruledialog
