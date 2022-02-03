import React from 'react'
import Charts from '../charts/Charts';
import FeatureInfo from '../featureInfo/FeatureInfo';
import "./homePage.css";
import { userData } from '../../dummyData';
import WidgetLg from '../widgetLg/WidgetLg';
import WidgetSm from '../widgetSm/WidgetSm';

export default function Homepage() {
  return (
    <div className='home'>
      <FeatureInfo/>
      <Charts data={userData} title="User Analytics" dataKey="Active User"/>
      <div className="homeWidgets">
        <WidgetSm/>
        <WidgetLg/>
       
      </div>
    </div>
  )
}
