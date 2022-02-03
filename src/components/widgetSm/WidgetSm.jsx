import React from 'react'
import "./widgetSm.css"
import girlImg from '../images/girl.jpg';
import { Visibility } from '@material-ui/icons';
export default function WidgetSm() {
  return (
    <div className='widgetSm'>
      <span className="widgetSmTitle">New Join Gathering Service</span>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <img src={girlImg} alt="" className='widgetSmImg'/>
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Daniel Odinta</span>
            <span className="widgetSmJobTitle">FLC New Jersey</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className='widgetIcon'/>
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img src={girlImg} alt="" className='widgetSmImg'/>
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Sandra Odinta</span>
            <span className="widgetSmJobTitle">FLC New Calvin</span>
          </div>
          <button className="widgetSmButton">
          <Visibility className='widgetIcon'/>
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img src={girlImg} alt="" className='widgetSmImg'/>
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Christina Rose</span>
            <span className="widgetSmJobTitle">FLC New Chicago</span>
          </div>
          <button className="widgetSmButton">
          <Visibility className='widgetIcon'/>
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img src={girlImg} alt="" className='widgetSmImg'/>
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Mark Owen</span>
            <span className="widgetSmJobTitle">FLC New NY</span>
          </div>
          <button className="widgetSmButton">
          <Visibility className='widgetIcon'/>
            Display
          </button>
        </li>
      </ul>
    </div>
  )
}
