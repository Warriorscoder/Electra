import React from "react";
import contactstyle from "../../styles/contactstyle.module.css";

function Contact() {
  return (
    <>
      <div className={contactstyle.main}>

        <div className={contactstyle.d2} >
            <p className={contactstyle.font} > Electra &copy;</p>

            
        </div>

        <div>
          <h1 className={contactstyle.heading}>We’d love to hear from you</h1>

          <div className={contactstyle.main2}>

            <div className={contactstyle.d}>

              <h1 className={contactstyle.heading2}>electra123@gmail.com</h1>
              
            </div>
            <div className={contactstyle.d}>

              <h1 className={contactstyle.heading2}>+917984651555</h1>

            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
