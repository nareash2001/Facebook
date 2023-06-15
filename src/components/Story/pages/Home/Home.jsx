import React, { useEffect, useState } from 'react'
import "./Home.css"
import { Link, useParams } from 'react-router-dom'
import Homenavlist from './Homenavlist/Homenavlist'
import { Storylist } from '../../../../Util/Getdata/getdata'
import Homedefaultbody from './Homedefaultbody/Homedefaultbody'
import Storyview from './Storyview/Storyview'
const Home = () => {
    document.title = "Facebook"
    const [story, setStory] = useState([])
    useEffect(() => {
        Storylist(setStory)
    }, [])
    const { id } = useParams();
    return (
        <div className='storycreatepage displayflex'>
            <div className='storycreatepageleftnavi'>
                <div className='leftnavigate storyhomenavi'>
                    <div className='storyhomenaviheader'>
                        Stories
                    </div>
                    <div className='storyhomenaviheader2 displayflex'>
                        <Link to="">Archive</Link>
                        <Link to="">Settings</Link>
                    </div>
                    <div className='storyhomenaviheading3'>
                        Your Story
                    </div>
                    <div className='storyhomenavilist'>
                        <Link to="../story/create">
                            <div className='displayflexalign'>
                                <span className="displayflexcenter">
                                    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em"><path d="M18 11h-5V6a1 1 0 0 0-2 0v5H6a1 1 0 0 0 0 2h5v5a1 1 0 0 0 2 0v-5h5a1 1 0 0 0 0-2z"></path></svg>
                                </span>
                                <div className='displayflex storyhomenavlistright'>
                                    <div className='storyhomenavilistheading1'>Create a Story</div>
                                    <div className='storyhomenavilistheading2'>Share a photo or write something.</div>
                                </div>
                            </div></Link>
                    </div>
                    <div className='storyhomenaviheading3'>
                        All Stories
                    </div>
                    <>
                        {
                            story.map((item, i) => <Homenavlist key={i} obj={item} id={i} />)
                        }
                    </>
                </div>
            </div>
            <div className='storyviewpagebody'>
                {
                    id ===undefined &&<Homedefaultbody/>
                }
                {
                    id !== undefined && <Storyview/>
                }
            </div>
        </div>
    )
}

export default Home
