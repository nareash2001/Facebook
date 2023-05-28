import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Topcenternav.css";
import { Home, Activehome, Watch, Activewatch, Bookmark, Marketplace, Activemarketplace, Groups, Activegroups, Game, Activegame } from "../../../Assert/Svg/Svg"
const Topcenternav = () => {

  
    return (
        <div className='topnav-2'>
            <NavLink to="" >
                {({ isActive }) => isActive ? <span>{Home()}</span> : <span>{Activehome()}</span>}

            </NavLink>

            <NavLink to="watch"  >
                {({ isActive }) => isActive ? <span>{Watch()}</span> : <span>{Activewatch()}</span>}
            </NavLink>

            <NavLink to="marketplace" >
                {({ isActive }) => isActive ? <span>{Marketplace()}</span> : <span>{Activemarketplace()}</span>}
            </NavLink>

            <NavLink to="groups" >
                {({ isActive }) => isActive ? <span>{Groups()}</span> : <span>{Activegroups()}</span>}
            </NavLink>

            <NavLink className="topnav-game" to="gaming" >
                {({ isActive }) => isActive ? <span>{Game()}</span> : <span>{Activegame()}</span>}
            </NavLink>
            <NavLink to="bookmark" className="topnav-menu">
                <span>{
                    Bookmark()}
                </span>
            </NavLink>
        </div>
    )
}

export default Topcenternav
