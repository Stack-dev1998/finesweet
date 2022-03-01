import React from "react";
import Link from 'next/link'
import styles from "../styles/header.module.css";
function header(props) {
  return (
    <div className={styles.header}>
      <div
        className={
          "container mx-auto flex flex-row justify-between items-center  " +
          styles.navContainer
        }
      >
        <div className="flex flex-row items-center  divide-x" style={{height:"100%"}}>
           <img src={'images/logo.svg'} className={"pr-20 "+styles.logo}/>
          <nav className={"flex flex-row items-center  " + styles.nav}>
            <li role={'button'} className="px-8"><Link href={'/'}>HOME</Link></li>
            <li  role={'button'} className="px-8"> <Link href={'/about-us'}>ABOUT US</Link></li>
            <li  role={'button'} className="px-8"> <Link href={'/sermon'}>SERMON</Link></li>
            <li  role={'button'} className="px-8"> <Link href={'/blog'}>BLOG</Link></li>
          </nav>
        </div>

        <Link href={'/contact'}><button className={" btn_primary"}>CONTACT US</button></Link>  
      </div>
    </div>
  );
}

export default header;
