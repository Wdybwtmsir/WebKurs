import React from 'react';
import styles from './Footer.module.scss';


const Facebook = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>;
const Twitter = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/></svg>;
const Linkedin = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>;
const Instagram = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>;

const Footer = () => {
  const navLinks = ['Home', 'About Us', 'Services', 'Appointments', 'Blog', 'Contact Us'];
  const utilityLinks = ['Start here', 'Style guide', '404 not found', 'Password protected', 'Licenses', 'Changelog'];
  
  const workingHours = [
    'Mon to Fri: 7am - 6pm',
    'Sat: 9am - 7pm',
    'Sun: 9am - 6pm'
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        
        {/* Верхняя часть: Лого + Соцсети */}
        <div className={styles.topBar}>
          <div className={styles.logo}>
            {/* Логотип-иконка */}
            <div className={styles.logoIcon}>
               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"/><line x1="16" y1="8" x2="2" y2="22"/><line x1="17.5" y1="15" x2="9" y2="15"/></svg>
            </div>
            <span>Beautyness</span>
          </div>

          <div className={styles.socials}>
            <a href="#" className={styles.socialLink}><Facebook/></a>
            <a href="#" className={styles.socialLink}><Twitter/></a>
            <a href="#" className={styles.socialLink}><Linkedin/></a>
            <a href="#" className={styles.socialLink}><Instagram/></a>
          </div>
        </div>

        {/* Основная сетка с колонками */}
        <div className={styles.grid}>
          
          {/* Колонка 1: Explore */}
          <div className={styles.column}>
            <h4>Explore</h4>
            <ul>
              {navLinks.map((link, index) => (
                <li key={index}><a href="#">{link}</a></li>
              ))}
            </ul>
          </div>

          {/* Колонка 2: Utility Pages */}
          <div className={styles.column}>
            <h4>Utility Pages</h4>
            <ul>
              {utilityLinks.map((link, index) => (
                <li key={index}><a href="#">{link}</a></li>
              ))}
            </ul>
          </div>

          {/* Колонка 3: Keep in Touch */}
          <div className={styles.column}>
            <h4>Keep in Touch</h4>
            <div className={styles.contactBlock}>
              <p><strong>Address:</strong> 24A Kingston St, Los Vegas NC 28202. USA.</p>
              <p><strong>Mail:</strong> support@ddoctors.com</p>
              <p><strong>Phone:</strong> (+22) 123 - 4567 - 900</p>
            </div>
          </div>

          {/* Колонка 4: Working Hours */}
          <div className={styles.column}>
            <h4>Working Hours</h4>
            <ul className={styles.hoursList}>
              {workingHours.map((hour, index) => (
                <li key={index}>{hour}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Нижняя полоса с копирайтом */}
        <div className={styles.bottomBar}>
          <p>© Copyright 2021. Drafted by Victor Themes.</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;