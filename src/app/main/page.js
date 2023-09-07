"use client"
import React from 'react'
import "./main.css"
import Slider from '../maincomp'
import { SliderData } from '../sliderdata'
import Link from 'next/link'

const Main = () => {
    
  return (
    <div className='main'>
  <Slider slides={SliderData} />;
  <div className="header-container">
        <div className="header2">
            <h1>H-Cart</h1>
        </div>
        <div className="gradient-line"></div>
        <div className="header1">
            <h2>Shop Smart, Live Stylishly: Your One-Stop: H-Cart!</h2>
        </div>
    </div>
    <center><Link href="/product">
    <button className='button'>Go to Shopping</button>
    </Link>
    </center>
    </div>
 
  )
}

export default Main

