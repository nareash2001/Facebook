import React,{useRef} from 'react'
import "./Postcreatedialogimg.css"
import { Postcreatedata, Postimg } from '../../../Util/Function/Function'
import { store } from "../../../Mobx"
import { observer } from 'mobx-react'
const Postcreatedialogimg = (props) => {
  const divref = useRef(null)
 
  return (
    <div className='postcreatedialogcontainer'>
      <div className='displayflex postcreatecaptioncontainer'>
        <div
          className="postcreatecaption"
          onInput={() => Postcreatedata(props.data, props.setData, divref,props.setValuelength)}
          suppressContentEditableWarning
          contentEditable
          ref={divref}
          role="textbox" 
          spellCheck="true">
          {
            !props.data.value ?
              (<p>
                What's on your mind, {store.Profile.first_name}?
              </p>) :props.data.view
          }
        </div>
        <div className='postcreatecaptionemoji'><i className='clusor' /></div>
      </div>
      <div className='postcreatedialogimgcontainer'>
      <div className='postcreatedialogimgclose displayflex'>
            <span onClick={()=>props.setPosttype(1)}className='displayflexcenter clusor'><i /></span>
            </div>
        {
          props.img.view?
          <>
          <img className='postcreatedialogimgview' src={props.img.file}alt=""/>
          </>
        :
        <div onClick={() =>Postimg(props.setImg,props.setValuelength)} className='postcreatedialogimg clusor displayflexcenter' >
          
          <div className='postcreatedialogimgicon displayflexcenter '>
            <span className='displayflexcenter'><i /></span>
          </div>
          <div className='displayflexcenter postcreatedialogimgcontent'>
            <div> Add Photos/Videos</div>
            <div className='postcreatedialogimgcontent2'>or drag and drop</div>
          </div>
        </div>
        }
        <div className='postcreatedialogimg2 displayflexalign'>
          <div className='displayflexalign'>
            <div className='postcreatedialogimg2mobileicon'>
              <span className='displayflexcenter '><i /></span>
            </div>
            <div>Add photos and videos from your mobile device.</div>
          </div>
          <button className='postcreatedialogimg2button clusor'>Add</button>
        </div>
      </div>
    </div>
  )
}

export default observer(Postcreatedialogimg)
