//import React, { PureComponent } from 'react'
import "./charts.css"

import { LineChart, Line, XAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function Charts({title, data, dataKey }) {
    
  return (
    <div className='chart'>
      <h3 className='chartTitle'>{title}</h3>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
          <LineChart data ={data}>
              <XAxis dataKey="name" stroke='#5550bd'/>
              <Line type="monotone" dataKey={dataKey} stroke='#5550bd'/>
              <Tooltip/>
              <Legend/>
              <CartesianGrid stroke='#e0dfdf'/>
          </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
