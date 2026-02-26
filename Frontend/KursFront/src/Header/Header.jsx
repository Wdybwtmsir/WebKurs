import React from 'react';
import styles from './Header.module.scss';

import logoImage from '../assets/logo.png';
import phoneIcon from '../assets/phone.png';
import facebookIcon from '../assets/facebook.png';
import twitterIcon from '../assets/twitter.png';
import linkedinIcon from '../assets/in.png'; 

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>

        <div className={styles.logo}>
          <img src={logoImage} alt="Beautyness logo" className={styles.logoImage} />
        </div>
        
        <div className={styles.contact}>
          <img src={phoneIcon} alt="Phone" className={styles.phoneIcon} />
          <span>Call Us - (+22) 123 456 7890</span>
        </div>
        
        <nav className={styles.nav}>
          <ul>
            <li><a href="/">Home</a></li>
            <li className={styles.dropdown}>
              <a href="/pages">Pages ▼</a>
            </li>
            <li><a href="/about">About</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>
        <div className={styles.social}>
          <a href="#" className={styles.socialIcon}>
            <img src={facebookIcon} alt="Facebook" />
          </a>
          <a href="#" className={styles.socialIcon}>
            <img src={twitterIcon} alt="Twitter" />
          </a>
          <a href="#" className={styles.socialIcon}>
            <img src={linkedinIcon} alt="LinkedIn" />
          </a>
        </div>
        
        <button className={styles.reservationBtn}>
          RESERVATION
        </button>
      </div>
    </header>
  );
};

export default Header;