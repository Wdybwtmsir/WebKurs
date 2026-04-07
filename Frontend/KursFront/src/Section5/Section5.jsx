import React from 'react';
import styles from './Section5.module.scss';


import avatar1 from '../assets/avatar1.png';
import avatar2 from '../assets/avatar2.png';

const testimonialsData = [
  {
    id: 1,
    text: "It is a long established fact that a reader will be tracked distracted by the readable content of a page is when looking at its layout. The point of using Lorem of distribution it took like readable English.",
    avatar: avatar1,
    stars: 5,
    name: "James Williams",
    location: "United States"
  },
  {
    id: 2,
    text: "It is a long established fact that a reader will be tracked distracted by the readable content of a page is when looking at its layout. The point of using Lorem of distribution it took like readable English.",
    avatar: avatar2,
    stars: 5,
    name: "Lico Jessica",
    location: "United Kingdom"
  }
];

const Section5 = () => {
  return (
    <section className={styles.testimonials}>
      <div className={styles.container}>
        <span className={styles.tag}>TESTIMONIALS</span>
        <h2 className={styles.title}>What our Customers says...</h2>

        <div className={styles.cardsGrid}>
          {testimonialsData.map(item => (
            <article key={item.id} className={styles.card}>
              {}
              <div className={styles.cardBody}>
                <p className={styles.cardText}>"{item.text}"</p>
              </div>

              {}
              <div className={styles.cardFooter}>
                <img src={item.avatar} alt={item.name} className={styles.avatar} />
                
                <div className={styles.authorInfo}>
                  <div className={styles.stars}>{'★'.repeat(item.stars)}</div>
                  <h4 className={styles.name}>{item.name}</h4>
                  <span className={styles.location}>{item.location}</span>
                </div>

                {}
                <div className={styles.quoteIcon}>❝</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section5;