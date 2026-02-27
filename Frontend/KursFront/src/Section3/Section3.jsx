import React from 'react';
import styles from './Section3.module.scss';

import woman2Image from '../assets/woman2.png';
import headIcon from '../assets/head.png';
import leafsIcon from '../assets/leafs.png';
import soapIcon from '../assets/soap.png';

const Section3 = () => {
  const benefits = [
    { id: 1, icon: headIcon, line1: 'Beauty', line2: 'Experts' },
    { id: 2, icon: leafsIcon, line1: 'Great', line2: 'Services' },
    { id: 3, icon: soapIcon, line1: '100%', line2: 'Genuine' }
  ];

  return (
    <section className={styles.about}>
      <div className={styles.container}>
        <div className={styles.content}>
          <span className={styles.aboutTag}>ABOUT US</span>
          <h2 className={styles.title}>
            The Beauty is about being<br />Comfortable in your own skin!
          </h2>
          <p className={styles.description}>
            There are many variations of passages of Lorem Ipsum available, but the majority have 
            suffered alteration in some form, buying to injected humour, or randomised words which 
            don't look even many desktop publishing packages.
          </p>

          <div className={styles.benefits}>
            {benefits.map(item => (
              <div key={item.id} className={styles.benefitCard}>
                <div className={styles.iconWrapper}>
                  <img src={item.icon} alt={`${item.line1} ${item.line2}`} className={styles.benefitIcon} />
                </div>
                <div className={styles.benefitText}>
                  <div className={styles.benefitLine}>{item.line1}</div>
                  <div className={styles.benefitLine}>{item.line2}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.imageWrapper}>
          <img src={woman2Image} alt="Woman" className={styles.womanImage} />
        </div>
      </div>
    </section>
  );
};

export default Section3;