import React, { useState } from 'react'
import Reaction from "../Reaction/Reaction"
import "./Postcomponent.css"
import { useEffect } from 'react'
import { PostLike } from '../../Util/Getdata/getdata'
const Postcomponent = (props) => {
  const [reactionview, setReactionview] = useState({
    value: null,
    img: "",
    name: "Like",
    color: "gray"
  })
  const [post_id,setPost_id]=useState(props.obj.post_id)
  const [like, setLike] = useState(0);
  const [user_like,setUser_like]=useState([])
  useEffect(() => {
    PostLike(setLike, post_id,setUser_like,setReactionview,setPost_id,)
  },[post_id])
  const [postdelete, setPostdelete] = useState(0)
  // console.log("hi")
  // console.log(user_like,post_id)
  return (
    <>{
      postdelete ?
        (<div className='postcomponent postcomponentdelete'>
          <div className='postcomponentdeletebody'>
            <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yK/r/l36ouVTLKY-.png" alt="" />
            <div>
              <h5>Post hidden</h5>
              <span>You'll see fewer posts like this.</span>
            </div>
          </div>
          <div className='postdeletecomponentundo clusor' onClick={() => { setPostdelete(0) }}> Undo</div>
        </div>) :
        (<div className='postcomponent' >
          <div className='posttitle'>
            <div className='posttitledp displayflexcenter'>
              <span className='clusor displayflexcenter'><img src={props.obj.profile} alt="" /></span>
            </div>
            <div className='posttitleidname'>
              <div className='posttitleidnamefirst '>
                <h4 className='clusor underlinehover'>{props.obj.first_name} {props.obj.last_name}</h4>
                <i className='postverified clusor'></i>
              </div>
              <div className='posttitleidnamesecond'>
                <span className='clusor underlinehover'>8h</span>
                <span className='clusor'>.</span>
                <span className='posttitleidnamepublic clusor'><svg fill="currentColor" viewBox="0 0 16 16" width="1em" height="1em" title="Shared with Public"><title>Shared with Public</title><g fillRule="evenodd" transform="translate(-448 -544)"><g><path d="M109.5 408.5c0 3.23-2.04 5.983-4.903 7.036l.07-.036c1.167-1 1.814-2.967 2-3.834.214-1 .303-1.3-.5-1.96-.31-.253-.677-.196-1.04-.476-.246-.19-.356-.59-.606-.73-.594-.337-1.107.11-1.954.223a2.666 2.666 0 0 1-1.15-.123c-.007 0-.007 0-.013-.004l-.083-.03c-.164-.082-.077-.206.006-.36h-.006c.086-.17.086-.376-.05-.529-.19-.214-.54-.214-.804-.224-.106-.003-.21 0-.313.004l-.003-.004c-.04 0-.084.004-.124.004h-.037c-.323.007-.666-.034-.893-.314-.263-.353-.29-.733.097-1.09.28-.26.863-.8 1.807-.22.603.37 1.166.667 1.666.5.33-.11.48-.303.094-.87a1.128 1.128 0 0 1-.214-.73c.067-.776.687-.84 1.164-1.2.466-.356.68-.943.546-1.457-.106-.413-.51-.873-1.28-1.01a7.49 7.49 0 0 1 6.524 7.434" transform="translate(354 143.5)"></path><path d="M104.107 415.696A7.498 7.498 0 0 1 94.5 408.5a7.48 7.48 0 0 1 3.407-6.283 5.474 5.474 0 0 0-1.653 2.334c-.753 2.217-.217 4.075 2.29 4.075.833 0 1.4.561 1.333 2.375-.013.403.52 1.78 2.45 1.89.7.04 1.184 1.053 1.33 1.74.06.29.127.65.257.97a.174.174 0 0 0 .193.096" transform="translate(354 143.5)"></path><path fillRule="nonzero" d="M110 408.5a8 8 0 1 1-16 0 8 8 0 0 1 16 0zm-1 0a7 7 0 1 0-14 0 7 7 0 0 0 14 0z" transform="translate(354 143.5)"></path></g></g></svg></span>
              </div>
            </div>

            <div className='posttitlebuttonfirst clusor displayflexcenter'>
              <svg fill="currentColor" viewBox="0 0 20 20" width="1em" height="1em" ><g fillRule="evenodd" transform="translate(-446 -350)"><path d="M458 360a2 2 0 1 1-4 0 2 2 0 0 1 4 0m6 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0m-12 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0"></path></g></svg>
            </div>

            <div className='posttitlebuttonsecond clusor displayflexcenter' onClick={() => { setPostdelete(1) }}>
              <i></i>
            </div>

          </div>
          <div className='postcontent1'>
            {props.obj.caption !== null ? props.obj.caption : ""}
          </div>
          <div className='postcontent2'>
            <img src={props.obj.image} alt="" />

          </div>
          <div className='postemotion'>
            
              
              <div className='postemotionleft' id="gray">
               {((like.length - user_like.length)!==0 ||reactionview.value!==null)&& <>
                { ((like.length - user_like.length)!==0 && reactionview.value!=="Like") && <img src="https://res.cloudinary.com/dym5bpsql/image/upload/v1685083768/download_ioo2n4.svg" alt="" />}
                {
                  reactionview.value !== null && <img src={reactionview.img} alt="" />
                }
                <div className='postemotionleftspan underlinehover'>
                  {
                    reactionview.value !== null  ? <span> You  {(like.length - user_like.length)!==0?<>and {like.length - user_like.length } others</>:""}</span> : <span>{(like.length - user_like.length)!==0?`${like.length - user_like.length}`:""}</span>
                  }


                </div>
                </>}
              </div>
            
            <div className='postemotionright'>
              <div className='postcomment' id="gray">
                <span className="underlinehover">10</span>
                <i />
              </div>
              <div className='postshare' id="gray">
                <span className="underlinehover">2</span>
                <i />
              </div>
            </div>
          </div>
          <Reaction reactionview={reactionview} setReactionview={setReactionview} post_id={post_id} />

        </div>)}</>
  )
}

export default Postcomponent
