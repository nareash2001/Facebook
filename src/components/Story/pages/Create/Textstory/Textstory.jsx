import React from 'react'
import "./Textstory.css"
import { useState } from 'react'
import { Storybackgroundtheme1,Storybackgroundtheme2} from '../../../../../Assert/List/List'
import { store } from "../../../../../Mobx"
import { observer } from 'mobx-react'
import { Textstory } from '../../../../../Util/Function/Function'
 export  const Textstorybody = observer(() => {
  let arrfont=["facebook sans app","acebook narrow","facebook script app light","acebook stencil","facebook sans app heavy italic"]
  return (
    <div className='textstorybodyouter'>
    <div className='textstorybody'>
      <div><h3>
        Preview
      </h3>
      </div>
      <div className='textstorybodycontent displayflexcenter'>
        <div className='textstorybodycontent2 displayflexcenter'
        style={{
          backgroundImage:`${store.textstorybackground>16?(Storybackgroundtheme2[store.textstorybackground -17].image):(Storybackgroundtheme1[store.textstorybackground -1].image)}`,
          fontFamily:`${arrfont[store.textstorystyle]}`
        }}
        id="textstoryimg"
        >
            <div className='dispalyflexcenter'>
                {
                    !store.textstorycontent.length?<span className='textstorybodycontent2span'>Start typing</span>:store.textstorycontent
                }
            </div>
        </div>
      </div>
    </div>
    </div>
  )
}
 )

export const Textstorynavi=observer(()=>{
    const [inputfiledfocus,setInputfiledfocus]=useState(0)
    const [inputfiledletter,setInputfiledletter]=useState(0)
    const [backgroundtheme,setBackgroundtheme]=useState(1)
return(
    <div className='textstorynavi'>
        <div className={`textstorynaviinputcontainerselect ${inputfiledfocus?"textstorynaviinputcontainerselected":""}`}>
            <div className='textstorynaviinputcontainerselect1'
            onClick={()=>setInputfiledfocus(1)}
            >
          {(inputfiledletter || inputfiledfocus)?( <> <div className={inputfiledfocus?"textstorynaviinputcontainerselected":""}>Text</div>
            <textarea autoFocus={1}  
            row="7" placeholder='Start typing' 
            className="textstorynaviinputfield"
            onChange={(e)=>store.textstorycontent=e.target.value}
            onFocus={()=>setInputfiledfocus(1)}
            onBlur={()=>{setInputfiledfocus(0);setInputfiledletter(store.textstorycontent.length)}}
            ></textarea>
            </>)
            :( <div className='textstoryplaceholder'>Start typing</div> )
}
            </div>
        </div>
       
       <div className='textstorystylesetcontainer'>
        <div className='textstorystylesetcontent displayflexalign'><i className='textstoryfonticon'/>
          <i className='textstorydownarrowicon'/>
        </div>
        <select className='clusor' onChange={(e)=>{store.textstorystyle=e.target.value}}>
          <option value={0}>Simple</option>
          <option value={1}>Clean</option>
          <option value={2}>Casual</option>
          <option value={3}>Fancy</option>
          <option value={4}>Headline</option>
        </select>
       </div>
       <div className='textstorybackgroundthemecontainer'>
        <div className='textstorybackgroundthemeheader'>
          Backgrounds
        </div>
        <div className='textstorybackgroundthemebody1'>
          {Storybackgroundtheme1.map((item)=><div className='storybackgroundthemeicon displayflexcenter clusor'onClick={()=>store.textstorybackground=item.id} key={item.id}><img id={store.textstorybackground===item.id?"textstorybackgroundthemeactive":""} src={item.icon} alt=""/></div>)}
        </div>
        {
          backgroundtheme ?<div className='textstorybackgroundthemeseemorebutton displayflexcenter clusor' onClick={()=>setBackgroundtheme(0)}> <i/></div>
       :<>
       <div className='textstorybackgroundthemebody1'>
       {Storybackgroundtheme2.map((item)=><div className='storybackgroundthemeicon displayflexcenter clusor'onClick={()=>store.textstorybackground=item.id} key={item.id}><img id={store.textstorybackground===item.id?"textstorybackgroundthemeactive":""} src={item.icon} alt=""/></div>)}
       </div>
       <div className='textstorybackgroundthemeseelessbutton displayflexcenter clusor' onClick={()=>setBackgroundtheme(1)}>
        <i/>
       </div>
       </>}
       </div>
       <div className='textstorypostcontainer displayflexcenter'>
           <button className='storypostcancel displayflexcenter clusor ' onClick={()=>store.createstoryrouter=0}>Discard</button>
           <button className='storypostok displayflexcenter clusor' onClick={()=>{Textstory()}}>Share to story</button> 
       </div>
  </div >
    
)
})