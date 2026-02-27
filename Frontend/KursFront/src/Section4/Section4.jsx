import React from 'react';
import styles from './Section4.module.scss';

import face1 from '../assets/face1.png';
import face2 from '../assets/face2.png';

const Section4 = () => {
  const blocks = [
    {
      id: 1,
      image: face1,
      title: 'Face masks',
      services: [
        { name: 'Full body massage', price: '$48.00', description: 'The versions have evolved over the sometimes by accident.' },
        { name: 'Geothermal spa', price: '$54.00', description: 'The versions have evolved over the sometimes by accident.' },
        { name: 'Sauna relax', price: '$73.00', description: 'The versions have evolved over the sometimes by accident.' }
      ]
    },
    {
      id: 2,
      image: null,
      title: 'Face masks',
      services: [
        { name: 'Full body massage', price: '$48.00', description: 'The versions have evolved over the sometimes by accident.' },
        { name: 'Geothermal spa', price: '$54.00', description: 'The versions have evolved over the sometimes by accident.' },
        { name: 'Sauna relax', price: '$73.00', description: 'The versions have evolved over the sometimes by accident.' }
      ]
    },
    {
      id: 3,
      image: null,
      title: 'Face masks',
      services: [
        { name: 'Full body massage', price: '$48.00', description: 'The versions have evolved over the sometimes by accident.' },
        { name: 'Geothermal spa', price: '$54.00', description: 'The versions have evolved over the sometimes by accident.' },
        { name: 'Sauna relax', price: '$73.00', description: 'The versions have evolved over the sometimes by accident.' }
      ]
    },
    {
      id: 4,
      image: face2,
      title: 'Face masks',
      services: [
        { name: 'Full body massage', price: '$48.00', description: 'The versions have evolved over the sometimes by accident.' },
        { name: 'Geothermal spa', price: '$54.00', description: 'The versions have evolved over the sometimes by accident.' },
        { name: 'Sauna relax', price: '$73.00', description: 'The versions have evolved over the sometimes by accident.' }
      ]
    }
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.mainTitle}>OUR SERVICES</h2>
        <p className={styles.subtitle}>We are Experienced in making you very Beautiful</p>

        <div className={styles.grid}>
          {blocks.map(block => (
            <div key={block.id} className={styles.block}>
              {block.image && (
                <div className={styles.imageWrapper}>
                  <img src={block.image} alt={block.title} className={styles.image} />
                </div>
              )}
              <div className={styles.content}>
                <h3 className={styles.blockTitle}>{block.title}</h3>
                <div className={styles.servicesList}>
                  {block.services.map((service, idx) => (
                    <div key={idx} className={styles.serviceItem}>
                      <div className={styles.serviceHeader}>
                        <span className={styles.serviceName}>{service.name}</span>
                        <span className={styles.serviceDots}>......</span>
                        <span className={styles.servicePrice}>{service.price}</span>
                      </div>
                      <p className={styles.serviceDescription}>{service.description}</p>
                    </div>
                  ))}
                </div>
                <button className={styles.appointmentBtn}>GET AN APPOINTMENT</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section4;