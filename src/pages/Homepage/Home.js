import React,{useEffect}from 'react'
import "./Home.css";
import { Route, Routes } from 'react-router-dom';
import { observer } from 'mobx-react'
import {store} from "../../Mobx"
import {Profile} from "../../Util/Getdata/getdata"
import Hometopnav from '../../components/Hometopnav/Hometopnav'
import Homecontent from '../Homecontent/Homecontent';
import Watchpage from '../Watchpages/Watchpage';
import Marketpage from '../Marketpage/Marketpage';
import Groupspage from "../Groupspages/Groupspage"
import Gamespage from "../Gamespage/Gamepage"
import Profilepage from '../Profilepage/Profilepage';
import Friends from "../Friendspage/Friends";
import Story from "../Story/Story"

const Home = () => {
  useEffect(() => {
    Profile(store);
  }, [])
  return (
    <div>
      <Hometopnav />

      <div className='body'>
        <Routes>
          <Route path='/' element={<Homecontent />} />
          <Route path="/watch" element={<Watchpage />} />
          <Route path="/watch/:id" element={<Watchpage/>}/>
          <Route path="/marketplace" element={<Marketpage />} />
          <Route path="/groups" element={<Groupspage />} />
          <Route path="/gaming" element={<Gamespage />} />
          <Route path="/profile" element={<Profilepage/>}/>
          <Route path="/profile/:id" element={<Profilepage/>}/>
          <Route path="/friends" element={<Friends/>}/>           
          <Route path="/friends/:id" element={<Friends/>}/>           
          <Route path="/story" element={<Story/>}/>
          <Route path="/story/:id" element={<Story/>}/>
        </Routes>
      </div>
    </div>

  )
}

export default observer(Home)
