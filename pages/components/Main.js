import React from "react";
import mainstyle from "../../styles/mainstyle.module.css";
import Image from "next/image";

function Main() {
  return (
    <>
      <div className={mainstyle.hero} id="hero">
        
        <div className={mainstyle.text} id="text">

          <h1 className={mainstyle.heading}>A smarter last mile</h1>

          <h3 className={mainstyle.heading2} >We believe the future is autonomous and sustainable</h3>

            <Image width={600} height={350} src={"/auto.png"}></Image>

            <div  className={mainstyle.button}>

            <button className={mainstyle.temp} role="button">
                Learn More 
            </button>

            </div>
        </div>
          
      </div>
    </>
  );
}

export default Main;




