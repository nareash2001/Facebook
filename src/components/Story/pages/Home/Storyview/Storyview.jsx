import React from 'react'
import "./Storyview.css"
const Storyview = () => {
    return (
        <div className='storyviewbody'> 
            <div className='storyviewbody2 displayflex'>
                <div className='storyviewbodyleft displayflexalign'>
                    <span className='displayflexcenter clusor'>
                    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" ><path d="M14.791 5.207 8 12l6.793 6.793a1 1 0 1 1-1.415 1.414l-7.5-7.5a1 1 0 0 1 0-1.414l7.5-7.5a1 1 0 1 1 1.415 1.414z"></path></svg>
                    </span>
                    </div>
                <div className='storyviewbodycenter'>
                    {/* <img src="https://scontent.fmaa2-2.fna.fbcdn.net/v/t39.30808-6/350673738_1599679377222287_3314693236186900618_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5b7eaf&_nc_ohc=VmPiIEfMpxsAX8WjO90&_nc_ht=scontent.fmaa2-2.fna&oh=00_AfC5nE4Q7Ve0AuDxhzHjNWj1OmOWG4K8V9Y_N6P7h5wAVA&oe=647B634C" alt=""/> */}
                    <div className='storyviewbodycenter2'>
                        <div className='storyviewbodycenter2listouter'></div>
                    </div>
                </div>
                <div className='storyviewbodyright displayflexalign'>
                    <span className='displayflexcenter clusor'>
                    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" ><path d="M9.209 5.207 16 12l-6.791 6.793a1 1 0 1 0 1.415 1.414l7.5-7.5a1 1 0 0 0 0-1.414l-7.5-7.5a1 1 0 1 0-1.415 1.414z"></path></svg>
                    </span>
                    </div>
            </div>
        </div>

    )
}

export default Storyview
