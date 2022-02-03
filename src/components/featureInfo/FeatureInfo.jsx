import React from 'react'
import "./featureInfo.css";
import { ArrowDownward, ArrowUpward } from '@material-ui/icons';


export default function FeatureInfo() {
  return (
    <div className='feature'>
        <div className="test">
        <div className='featureItem'>
            <span className='featureTitle'>Gathering Service</span>
            <div className="featureMoneyContainer">
                <span className="featureMoney">2,415</span>
                <span className="featureMoneyRate">-100.4 <ArrowDownward className='featureIcon negative'/></span>
            </div>
            <span className="featureSub">Compared to Last Month</span>
        </div>

        <div className='featureItem1'>
            <span className='featureTitle'>Impartation</span>
            <div className="featureMoneyContainer">
                <span className="featureMoney">4,415</span>
                <span className="featureMoneyRate">-10.4 <ArrowDownward className='featureIcon negative'/></span>
            </div>
            <span className="featureSub">Compared to Last Month</span>
        </div>

        <div className='featureItem2'>
            <span className='featureTitle'>Flow Prayer</span>
            <div className="featureMoneyContainer">
                <span className="featureMoney">1422</span>
                <span className="featureMoneyRate">14.4 <ArrowUpward className='featureIcon'/></span>
            </div>
            <span className="featureSub">Compared to Last Month</span>
        </div>

        <div className='featureItem2'>
            <span className='featureTitle'>Unity Service</span>
            <div className="featureMoneyContainer">
                <span className="featureMoney">5822</span>
                <span className="featureMoneyRate">14.4 <ArrowUpward className='featureIcon'/></span>
            </div>
            <span className="featureSub">Compared to Last Month</span>
        </div>

        <div className='featureItem2'>
            <span className='featureTitle'>Total Bacenter</span>
            <div className="featureMoneyContainer">
                <span className="featureMoney">522</span>
                <span className="featureMoneyRate">14.4 <ArrowUpward className='featureIcon'/></span>
            </div>
            <span className="featureSub">Compared to Last Month</span>
        </div>

        <div className='featureItem2'>
            <span className='featureTitle'>Total Gathering</span>
            <div className="featureMoneyContainer">
                <span className="featureMoney">5,22</span>
                <span className="featureMoneyRate">14.4 <ArrowUpward className='featureIcon'/></span>
            </div>
            <span className="featureSub">Compared to Last Month</span>
        </div>

        <div className='featureItem2'>
            <span className='featureTitle'>Tithe</span>
            <div className="featureMoneyContainer">
                <span className="featureMoney">100,242</span>
                <span className="featureMoneyRate">14.4 <ArrowUpward className='featureIcon'/></span>
            </div>
            <span className="featureSub">Compared to Last Month</span>
        </div>
        </div>
    </div>

    
  )
}
