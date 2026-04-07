import React from 'react';
import styles from './Section4.module.scss';

import img1 from '../assets/face1.png'; 
import img2 from '../assets/face2.png'; 
const Section4 = () => {
  const services = [
    { title: 'Face masks', price: '$48.00', desc: 'The versions have evolved over the sometimes by accident.' },
    { title: 'Full body massage', price: '$54.00', desc: 'The versions have evolved over the sometimes by accident.' },
    { title: 'Geothermal spa', price: '$54.00', desc: 'The versions have evolved over the sometimes by accident.' },
    { title: 'Sauna relax', price: '$73.00', desc: 'The versions have evolved over the sometimes by accident.' }
  ];

  return (
    <section className={styles.servicesSection}>
      <div className={styles.container}>
        
        {}
        <div className={styles.header}>
          <span className={styles.subtitle}>OUR SERVICES</span>
          <h2 className={styles.title}>We are Experienced in making<br/>you very Beautiful</h2>
        </div>

        {}
        <div className={styles.row}>
          <div className={styles.colImage}>
            <div className={styles.imageWrapper}>
              {}
              <img src={img1} alt="Spa" className={styles.mainImage} />
            </div>
          </div>
          
          <div className={styles.colContent}>
            <ul className={styles.list}>
              {services.map((item, index) => (
                <li key={index} className={styles.listItem}>
                  <div className={styles.itemTop}>
                    <span className={styles.serviceName}>{item.title}</span>
                    <span className={styles.dots}></span>
                    <span className={styles.servicePrice}>from {item.price}</span>
                  </div>
                  <p className={styles.serviceDesc}>{item.desc}</p>
                </li>
              ))}
            </ul>
            <button className={styles.btn}>GET AN APPOINTMENT</button>
          </div>
        </div>

        {}
        <div className={`${styles.row} ${styles.rowReverse}`}>
          <div className={styles.colContent}>
            <ul className={styles.list}>
              {services.map((item, index) => (
                <li key={index} className={styles.listItem}>
                  <div className={styles.itemTop}>
                    <span className={styles.serviceName}>{item.title}</span>
                    <span className={styles.dots}></span>
                    <span className={styles.servicePrice}>from {item.price}</span>
                  </div>
                  <p className={styles.serviceDesc}>{item.desc}</p>
                </li>
              ))}
            </ul>
            <button className={styles.btn}>GET AN APPOINTMENT</button>
          </div>

          <div className={styles.colImage}>
            <div className={styles.imageWrapper}>
              <img src={img2} alt="Facial" className={styles.mainImage} />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Section4;