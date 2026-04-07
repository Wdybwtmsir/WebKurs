import React from 'react';
import styles from './Section6.module.scss';

const Section6 = () => {
  const benefits = [
    {
      id: 1,
      title: 'Optimised Energy Efficiency',
      text: 'The point of using Lorem Ipsum is that using making it look like readable.'
    },
    {
      id: 2,
      title: 'Multi-faceted Water Filtration',
      text: 'The point of using Lorem Ipsum is that using making it look like readable.'
    },
    {
      id: 3,
      title: 'Uncompromising Quality and Durability',
      text: 'The point of using Lorem Ipsum is that using making it look like readable.'
    },
    {
      id: 4,
      title: 'An Ultra-Pampering Spa Experience',
      text: 'The point of using Lorem Ipsum is that using making it look like readable.'
    },
    {
      id: 5,
      title: 'Easy Care for Unparalleled Enjoyment',
      text: 'The point of using Lorem Ipsum is that using making it look like readable.'
    },
    {
      id: 6,
      title: 'Optimised Energy Efficiency',
      text: 'The point of using Lorem Ipsum is that using making it look like readable.'
    }
  ];

  return (
    <section className={styles.benefitsSection}>
      <div className={styles.container}>
        <span className={styles.tag}>OUR AWESOME BENEFITS</span>
        <h2 className={styles.title}>Actually what you'll get from</h2>

        <div className={styles.grid}>
          {benefits.map((item) => (
            <div key={item.id} className={styles.card}>
              {/* Блок иконки (пунктир + сплошной фон + галочка) */}
              <div className={styles.iconWrapper}>
                <div className={styles.iconSolid}>
                  {/* SVG Галочка (вектор, не требует картинки) */}
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12L10 17L20 7" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
              
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardText}>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section6;