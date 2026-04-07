import React from 'react';
import styles from './Section8.module.scss';

import jopa1 from '../assets/jopa1.png';
import jopa2 from '../assets/jopa2.png';
import jopa3 from '../assets/jopa3.png';

const blogPosts = [
  {
    id: 1,
    date: '11TH AUGUST 2021',
    author: 'PETER BEROSON',
    title: 'The energy efficiency of the hydrotherapy or swim',
    desc: 'The point of using Lorem Ipsum hiter that using making it look like others readable will get end.',
    image: jopa1
  },
  {
    id: 2,
    date: '11TH AUGUST 2021',
    author: 'PETER BEROSON',
    title: 'Tips to improve your body via cleansing',
    desc: 'The point of using Lorem Ipsum hiter that using making it look like others readable will get end.',
    image: jopa2
  },
  {
    id: 3,
    date: '11TH AUGUST 2021',
    author: 'PETER BEROSON',
    title: 'Experience the beauty at our beauty spa',
    desc: 'The point of using Lorem Ipsum hiter that using making it look like others readable will get end.',
    image: jopa3
  }
];

const Section8 = () => {
  return (
    <section className={styles.blogSection}>
      <div className={styles.container}>
        <span className={styles.tag}>OUR BLOG</span>
        <h2 className={styles.title}>Latest Updates</h2>

        <div className={styles.grid}>
          {blogPosts.map(post => (
            <article key={post.id} className={styles.card}>
              <div className={styles.imageWrapper}>
                <img src={post.image} alt={post.title} className={styles.image} />
              </div>
              
              <div className={styles.content}>
                <div className={styles.meta}>
                  <span className={styles.date}>{post.date}</span>
                  <span className={styles.separator}>—</span>
                  <span className={styles.author}>BY {post.author}</span>
                </div>
                
                <h3 className={styles.cardTitle}>{post.title}</h3>
                <p className={styles.cardDesc}>{post.desc}</p>
              </div>
            </article>
          ))}
        </div>

        <button className={styles.viewMoreBtn}>VIEW MORE STORIES</button>
      </div>
    </section>
  );
};

export default Section8;