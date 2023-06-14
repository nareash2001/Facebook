import React from 'react'
import "./Friendrequestlist.css"
const Friendrequestlist = (props) => {
    return (
        <div className='friendrequestlistbodylist displayflex clusor'>
            <div className='friendrequestlistleft'>
                    <img src={props.data.profile} alt=''/>
            </div>
            <div className='friendrequestlistright'>
                <div className='friendrequestlistrighttitle displayflex'>
                    <h4>{props.data.first_name} {props.data.last_name}</h4>
                    <span>4w</span>
                </div>
                <div className='friendrequestlistrightbutton'>
                    <button className='friendrequestconfirmbutton'>Confirm</button>
                    <button>Delete</button>
                </div>
            </div>
        </div>
    )
}

export default Friendrequestlist
