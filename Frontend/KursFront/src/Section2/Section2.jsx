import React from 'react';
import styles from './Section2.module.scss';

import spaIcon from '../assets/Spa.jpg';
import hairIcon from '../assets/Hair.png';
import bodyIcon from '../assets/Foots.png';

const Section2 = () => {
  const services = [
    {
      id: 1,
      title: 'Spa & Massage',
      description: 'If you are going to use a massage offer Lorem Ipsum, you need to be sure hidden in the middle of text.',
      icon: spaIcon
    },
    {
      id: 2,
      title: 'Hair & Beauty',
      description: 'If you are going to use a massage offer Lorem Ipsum, you need to be sure hidden in the middle of text.',
      icon: hairIcon
    },
    {
      id: 3,
      title: 'Body Treatments',
      description: 'If you are going to use a massage offer Lorem Ipsum, you need to be sure hidden in the middle of text.',
      icon: bodyIcon
    }
  ];

  return (
    <section className={styles.services}>
      <div className={styles.container}>
        <div className={styles.servicesGrid}>
          {services.map(service => (
            <div key={service.id} className={styles.serviceCard}>
              <div className={styles.iconWrapper}>
                <img src={service.icon} alt={service.title} className={styles.serviceIcon} />
              </div>
              <h3 className={styles.serviceTitle}>{service.title}</h3>
              <p className={styles.serviceDescription}>{service.description}</p>
              <a href="#" className={styles.readMore}>READ MORE →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section2;