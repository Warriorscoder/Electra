import React from 'react';
import Navbar from './Navbar';
import bookstyle from "../../styles/bookstyle.module.css";
import Image from 'next/image';
import Done from './Done';
import Link from 'next/link';
function Book() {

  return (
    <>
    <Navbar/>

    <div className={bookstyle.hero} id="hero">
        
        <div className={bookstyle.text} id="text">

          <h1 className={bookstyle.heading}>Book your ride</h1>

          <h3 className={bookstyle.heading2} >fill the suitable information</h3>

        
            <Image width={600} height={350} src={"/map.jpg"}></Image>

            <div>

              <div className={bookstyle.indiv} >

                <input  className={bookstyle.in} placeholder='From' type='text' >
                </input>
                <input className={bookstyle.in}  placeholder='to' type='text' >
                </input>

              </div>

              <p className={bookstyle.p}>
                Car - 200/-
              </p>
              <p className={bookstyle.p} >
                Bike - 80/-
              </p>
              <p className={bookstyle.p} >
                Auto - 100/-
              </p>


            </div>

            <div  className={bookstyle.button}>

            <Link href={"../components/Done"} >
                <button className={bookstyle.temp} role="button">
                  Book
                </button>
            </Link>

            </div>
        </div>
          
      </div>
    </>
  )
}

export default Book