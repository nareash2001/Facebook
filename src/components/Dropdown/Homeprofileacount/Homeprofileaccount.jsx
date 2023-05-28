import React from 'react'
import "./Homeprofileaccount.css"
import { Link } from "react-router-dom";
import Fotterpagehome from "../../Fotterpagehome/Fotterpagehome";
import { observer } from 'mobx-react';
import {store} from "../../../Mobx"
import {Logout}from "../../../Util/Home/Home"
const Homeprofileaccount = () => {
  return (
    <>
      <div className='homeprofilecontainer'>
                        <Link to="profile">
                            <img src={store.Profile !== 0 ? store.Profile.profile : null} alt="" />
                            <div>{store.Profile.first_name} {store.Profile.last_name}</div>
                        </Link>
                    
                    <div className='homeprofileline'>
                    </div>
                    <div className='homeprofilelink'>See all profiles</div>
                </div>
                <div className="homeprofilesettingbutton">
                    <div className="homeprofilesettingicon"><i className="homeprofilesettingiconimg homeprofileiconcommon"></i></div>
                    <div className="homeprofilearrowicon"><span>Settings & privacy</span>
                        <i></i>
                    </div>
                </div>
                <div className="homeprofilesettingbutton">
                    <div className="homeprofilesettingicon"><i className="homeprofilehelpiconimg homeprofileiconcommon"></i></div>
                    <div className="homeprofilearrowicon">
                        <span>Help & support</span>
                        <i></i>
                    </div>
                </div>
                <div className="homeprofilesettingbutton">
                    <div className="homeprofilesettingicon"><i className="homeprofiledisplayiconimg homeprofileiconcommon"></i></div>
                    <div className="homeprofilearrowicon">
                        <span>Display & accessibility</span>
                        <i></i>
                    </div>
                </div>
                <div className="homeprofilesettingbutton">
                    <div className="homeprofilesettingicon"><i className="homeprofilefeedbackiconimg homeprofileiconcommon"></i></div>
                    <div className="homeprofilearrowicon">
                        <span>Give feedback</span>
                    </div>
                </div>
                <div className="homeprofilesettingbutton" onClick={()=>{Logout(store)}}>
                    <div className="homeprofilesettingicon"><i className="homeprofilelogiconimg homeprofileiconcommon"></i></div>
                    <div className="homeprofilearrowicon">
                        <span>Log Out</span>
                    </div>
                </div>
                <Fotterpagehome/>
    </>
  )
}

export default observer(Homeprofileaccount)
