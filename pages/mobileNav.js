import React from "react";
import styles from "../styles/mobileNav.module.css";
export function Mobilenav(props) {
  return (
    <>
      <div
        className={
          props.mobileNav
            ? "mobileNavContainer Show"
            : "mobileNavContainer"
        }
      >
        <div className={styles.close} onClick={() => props.toggleNav()}>
          +
        </div>
        <div className={styles.navList}>
          <div className={styles.navItem} >Home</div>
          <div className={styles.navItem} onClick={() => props.toggleForm()}>
            Contact
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .mobileNavContainer{
            position: fixed;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            background: #fff;
            color: black;
            z-index: -22;
            opacity:0;
            transform: translateY(-100%);
            transition:all .5s ;
          }
          .Show{
            z-index: 22;
            opacity:1;
            transition:all .5s ;
            transform: translateY(0);
          }
        `}
      </style>
    </>
  );
}
