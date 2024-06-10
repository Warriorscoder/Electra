import React from 'react'
import Navbar from './Navbar'
import donestyle from "../../styles/donestyle.module.css";

function Done() {
  return (
    <>
    <Navbar/>
    <div className={donestyle.main} >
      <h1>Your ride has been booked</h1>
    </div>
    </>
  )
}

export default Done