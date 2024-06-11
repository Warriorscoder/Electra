import React from 'react'
import Navbar from './Navbar'
import donestyle from "../../styles/donestyle.module.css";
import Image from 'next/image';

function Done() {
  return (
    <>
    <Navbar/>
    <div className={donestyle.main} >
      <h1>Your ride has been booked</h1>
    </div>
    
      <div  className={donestyle.img} >
        <Image width={200} height={150} src={"/tick.png"} ></Image>
      </div>
    </>
  )
}

export default Done