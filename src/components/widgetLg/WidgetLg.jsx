 import React from 'react'
 import "./widgetLg.css"
 import girlImg from '../images/girl.jpg';


 export default function WidgetLg() {
   const Button = ({type}) =>{
     return <button className={"widgetLgButton " + type}>{type}</button>
   };
   return (
     <div className='widgetLg'>
       <span className="widgetLgTitle">Latest Transactions</span>
       <table className="widgetLgTable">
         <tr className="widgetLgTr">
           <th className="widgetLgTh">Customer</th>
           <th className="widgetLgTh">Date</th>
           <th className="widgetLgTh">Attendance</th>
           <th className="widgetLgTh">Status</th>
         </tr>
         <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src={girlImg} alt="" className="widgetLgImg" />
            <span className="widgetLgName">Oscar Ramson</span>
          </td>
            <td className="widgetLgDate">3 June 2022</td>
            <td className="widgetLgAmount">10</td>
            <td className="widgetLgStatus">
             <Button type="Approved"/>
         </td>
         </tr>

         <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src={girlImg} alt="" className="widgetLgImg" />
            <span className="widgetLgName">Oscar Ramson</span>
          </td>
            <td className="widgetLgDate">3 June 2022</td>
            <td className="widgetLgAmount">7</td>
            <td className="widgetLgStatus">
             <Button type="Pending"/>
         </td>
         </tr>

         <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src={girlImg} alt="" className="widgetLgImg" />
            <span className="widgetLgName">Oscar Ramson</span>
          </td>
            <td className="widgetLgDate">3 June 2022</td>
            <td className="widgetLgAmount">16</td>
            <td className="widgetLgStatus">
             <Button type="Approved"/>
         </td>
         </tr>

         <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src={girlImg} alt="" className="widgetLgImg" />
            <span className="widgetLgName">Oscar Ramson</span>
          </td>
            <td className="widgetLgDate">3 June 2022</td>
            <td className="widgetLgAmount">3</td>
            <td className="widgetLgStatus">
             <Button type="Declined"/>
         </td>
         </tr>
       </table>
     </div>
   )
 }
 