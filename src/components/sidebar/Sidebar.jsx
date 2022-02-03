import React from 'react'
import {LineStyle, Timeline, TrendingUp, Person, Category, AttachMoney, Email, Feedback, Message} from "@material-ui/icons";
import "./siderbar.css"
import "../app.css";
import { Link } from 'react-router-dom';



export const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className='sideWrapper'>
               <div className='sideMenu'>
                   <h3 className="sidebarTitle">Dashboard</h3>
                   <ul className="sidebarList">
                   <Link to='/' className='link'>
                       <li className="sidebarListItem active">
                        <LineStyle className='sidebarIcon'/>
                        Home
                       </li>
                    </Link>
                       <li className="sidebarListItem">
                        <Timeline className='sidebarIcon'/>
                        Analytics
                       </li>

                       <li className="sidebarListItem">
                        <TrendingUp className='sidebarIcon'/>
                        Sales
                       </li>
                   </ul>
                </div> 

                <div className='sideMenu'>
                   <h3 className="sidebarTitle">Quick Menu</h3>
                   <ul className="sidebarList">
                       <Link to='/users' className='link'>
                       <li className="sidebarListItem">
                        <Person className='sidebarIcon'/>
                        Users
                       </li>
                       </Link>
                       <Link to='/product' className='link'>
                       <li className="sidebarListItem">
                        <Category className='sidebarIcon'/>
                        product
                       </li>
                       </Link>
                       <li className="sidebarListItem">
                        <AttachMoney className='sidebarIcon'/>
                        Transaction
                       </li>
                   </ul>
                </div> 

                <div className='sideMenu'>
                   <h3 className="sidebarTitle">Notification</h3>
                   <ul className="sidebarList">
                       <li className="sidebarListItem">
                        <Email className='sidebarIcon'/>
                        Mail
                       </li>

                       <li className="sidebarListItem">
                        <Feedback className='sidebarIcon'/>
                        Analytics
                       </li>

                       <li className="sidebarListItem">
                        <Message className='sidebarIcon'/>
                        Sales
                       </li>
                   </ul>
                </div> 
            </div>
        </div>
    )
}
