import React ,{useState}from 'react'
import "./Friendrequestlist.css"
import { FriendRequestaccept } from '../../../../../Util/Getdata/getdata';
const Friendrequestlist = (props) => {
    const [requestaccept,setRequestaccept]=useState(0);
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
                { requestaccept===0? 
                <div className='friendrequestlistrightbutton'>
                    <button className='friendrequestconfirmbutton' onClick={()=>FriendRequestaccept(setRequestaccept,props.data.id)}>Confirm</button>
                    <button onClick={()=>setRequestaccept(2)}>Delete</button>
                </div>:
                <div className='friendrequestlistaccept'>Request {requestaccept===1?"accept":"cancel"}</div>
                 }
            </div>
        </div>
    ) 
}

export default Friendrequestlist
