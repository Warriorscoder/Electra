import Image from "next/image";
import React from "react";
import navstyle from "../../styles/navstyle.module.css";
import Link from "next/link";

function Navbar() {

  return (
    <>
      <div className={navstyle.main}>
        <span className={navstyle.span} >
          <Image
            className={navstyle.img}
            width={100}
            height={100}
            src="/navimg.png"
          />
          <Link className={navstyle.link2} href={"/"}> <h1>Electra</h1></Link>
        </span>
        <ul className={navstyle.ul} >
           <Link className={navstyle.link}  href={"/"} >Home</Link>
           <Link className={navstyle.link} href={"/"} >About Us</Link>
           <Link className={navstyle.link} href={"/"} >Contact Us</Link>
        </ul>

        <div className={navstyle.button} >
          <Link href={"../components/Book"}>

            <button className={navstyle.temp} role="button">
                  Book Now
            </button>
          </Link>
        </div>

      </div>
    </>
  );
}

export default Navbar;
