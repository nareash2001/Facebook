import React, { useState, useEffect } from 'react'
import "./Profilepage.css";
import { Link, NavLink, useParams} from 'react-router-dom';
import { Profile } from '../../Util/Getdata/getdata'
import Profiledialog from "../../components/Profiledialog/Profiledialog"
import { Mutualfrilist } from '../../Util/Profilepage/Profilepage';
import { mutalfri } from "../../Assert/List/List"
import Post from '../../components/Profilenavpages/pages/Post/Post';
import Photo from "../../components/Profilenavpages/pages/Photo/Photo"
import About from '../../components/Profilenavpages/pages/About/About';
import Friend from '../../components/Profilenavpages/pages/Friend/Friend';
import Videos from '../../components/Profilenavpages/pages/Video/Video';
import Sports from '../../components/Profilenavpages/pages/Sports/Sports';
import {store} from "../../Mobx"
import { observer } from 'mobx-react';
const Profilepage = () => {
  const {id}=useParams();
  const [profile, setProfile] = useState(0)
  const [open, setOpen] = useState(false);
  useEffect(() => {
    Profile(setProfile);
  }, [])
  document.title = (profile !== 0 ? profile.first_name + " | Facebook" : "Facebook")
  return (
    <>
      <div className="profilebackgroundouter">
        <div className="profilebackground">
          <Link to=""><img src="https://scontent.fixm4-3.fna.fbcdn.net/v/t1.6435-9/44551258_1119319811588109_3937047304489402368_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=e3f864&_nc_ohc=lb6KsvgTjuUAX9cXtcJ&_nc_ht=scontent.fixm4-3.fna&oh=00_AfCM5_tGHrBjQ10kws1DOBbi8gmT4YMnxLglj4FuzISYTA&oe=645B2A8D" alt="" />
          </Link>
          <div className="profilebackgroundedit">
            <div className="profilebackgroundediticon"></div>
            <div>Edit cover photo</div>
          </div>
        </div>
        <div className="profileviewcontainer">
          <div className="profileviewleft">
            <img src={store.Profile !== 0 ? store.Profile.profile : null} alt="" />
            <div className="profileviewchangeicon" onClick={() => setOpen(true)}>
              <span></span>
            </div>
          </div>
          <div className="profileviewright">
            <div className="profileviewrightleft">
              <h1>{store.Profile.first_name} {store.Profile.last_name}</h1>
              <Link to="">600 friends</Link>
              <div>{Mutualfrilist(mutalfri)}</div>
            </div>
            <div className="profileviewrightright">
              <Link to="../story/create">
                <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yz/r/AqoGWewwdNN.png" alt="" />
                Add to story
              </Link>
              <div className="profileeditbutton">
                <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yW/r/OR6SzrfoMFg.png" alt="" />
                Edit profile
              </div>
            </div>
          </div>
        </div>
        <div className="profilenav">
          <div>
            <NavLink to="/profile/">Posts</NavLink>
            <NavLink to="/profile/about">About</NavLink>
            <NavLink to="/profile/friends">Friends</NavLink>
            <NavLink to="/profile/photos">Photos</NavLink>
            <NavLink to="/profile/videos">Videos</NavLink>
            <NavLink to="/profile/sports">Sports</NavLink>
            <span>More <span><svg fill="currentColor" viewBox="0 0 20 20" width="1em" height="1em"><path d="M10 14a1 1 0 0 1-.755-.349L5.329 9.182a1.367 1.367 0 0 1-.205-1.46A1.184 1.184 0 0 1 6.2 7h7.6a1.18 1.18 0 0 1 1.074.721 1.357 1.357 0 0 1-.2 1.457l-3.918 4.473A1 1 0 0 1 10 14z"></path></svg></span></span>
          </div>
        </div>
      </div>
      <Profiledialog open={open} setOpen={setOpen} />
      {
        id===undefined &&<Post/>
      }
      {
       id==='about'&&<About/>
      } 
       {
       id==='friends'&&<Friend/>
      }
      {
       id==='photos'&&<Photo/>
      }
      {
       id==='videos'&&<Videos/>
      }
      {
       id==='sports'&&<Sports/>
      }
    </>
  )
}

export default observer(Profilepage)
