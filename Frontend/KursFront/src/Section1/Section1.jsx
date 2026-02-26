import React from 'react';
import styles from './Section1.module.scss';
import womanImage from '../assets/Woman.jpg';

const Section1 = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.contentWrapper}>
          <div className={styles.content}>
            <span className={styles.welcome}>WELCOME TO BEAUTYNESS</span>
            <h1 className={styles.title}>
              Beauty is power<br />
              a smile is its<br />
              sword.
            </h1>
            <p className={styles.description}>
              There are many variation of passages are lpsum available,<br />
              majority have suffered alteration in some form.
            </p>
            <button className={styles.reservationBtn}>
              MAKE A RESERVATION
            </button>
          </div>
        </div>
        
        <div className={styles.imageWrapper}>
          <img src={womanImage} alt="Beauty treatment" className={styles.heroImage} />
        </div>
      </div>
    </section>
  );
};

export default Section1;