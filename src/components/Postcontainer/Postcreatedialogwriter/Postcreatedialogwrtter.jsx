import React,{useRef,useState} from 'react'
import "./Postcreatedialogwritter.css"
import { Postcreatedata } from '../../../Util/Function/Function'
import { store } from "../../../Mobx"

const Postcreatedialogwrtter = (props) => {
    const divref = useRef(null)
    const [theme, setTheme] = useState(0);

    return (
    <div className='postcreatedialogwriter'>
          <div id='postcreatedialogwriterarea'
          className={props.valuelength===2?"lengthabove":"lengthbelow"}
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

          <div className='postcreatetheme'>
            {theme?
            (<div>
             <div className="themeoff"> <i/></div>

            </div>)
            :(<img  onClick={()=>{setTheme(1)}}className="clusor" src="https://www.facebook.com/images/composer/SATP_Aa_square-2x.png" alt="" />)
            
          }
            <i className='clusor' />
          </div>
          </div> 
  )
}

export default Postcreatedialogwrtter
