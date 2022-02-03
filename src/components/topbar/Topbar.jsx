import React from 'react'
import girl from "../images/girl.jpg";
import "./topbar.css"
import {NotificationsNone, Language, Settings} from "@material-ui/icons";



export default function Topbar() {
    return (
    <div className='topbar'>
        <div className='topbarWrapper'>
            <div className='topLeft'>
                <span className='logo'>FIRST LOVE NORTH AMERICA</span>
            </div>
            <div className='topRight'>
                <div className='topbarIconContainer'>
                <NotificationsNone/>
                <span className="topIconBadge">2</span>
                </div>
                <div className='topbarIconContainer'>
                <Language/>
                <span className="topIconBadge">1</span>
                </div>
                <div className='topbarIconContainer'>
                <Settings/>
                </div>
                <img src={girl} alt="" className="topAvater" />
                
            </div>
        </div>
      </div> 
    
    )
}
