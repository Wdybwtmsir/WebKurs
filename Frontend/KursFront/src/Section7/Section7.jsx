import React, { useState } from 'react';
import styles from './Section7.module.scss';

const UserIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>;
const MailIcon = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>;
const PhoneIcon = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>;
const BookIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>;
const EditIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"/></svg>;

const Section7 = () => {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', service: '', note: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Спасибо! Мы свяжемся с вами.');
    setFormData({ name: '', email: '', phone: '', service: '', note: '' });
  };

  return (
    <section className={styles.discountSection}>
      <div className={styles.container}>
        <div className={styles.grid}>
          
          {/* ЛЕВАЯ КОЛОНКА: Текст + Контакты */}
          <div className={styles.content}>
            <span className={styles.tag}>FLAT DISCOUNT</span>
            <h2 className={styles.title}>Claim upto 50% offer on the most popular services...</h2>
            <p className={styles.desc}>
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, buying to injected humour, or randomised words.
            </p>

            <div className={styles.contactBox}>
              <div className={styles.contactInfo}>
                <div className={styles.contactRow}>
                  <MailIcon />
                  <div>
                    <span className={styles.label}>MAIL US :</span>
                    <span className={styles.value}>info@beautyiness.com</span>
                  </div>
                </div>
                <div className={styles.contactRow}>
                  <PhoneIcon />
                  <div>
                    <span className={styles.label}>CALL US :</span>
                    <span className={styles.value}>(+22) 123 4568 009</span>
                  </div>
                </div>
              </div>

              <div className={styles.discountBadge}>
                <span>GET FLAT</span>
                <strong>50%</strong>
                <span>Discount</span>
              </div>
            </div>
          </div>

          {/* ПРАВАЯ КОЛОНКА: Форма */}
          <div className={styles.formCard}>
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.inputGroup}>
                <UserIcon />
                <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
              </div>
              
              <div className={styles.inputGroup}>
                <MailIcon />
                <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
              </div>
              
              <div className={styles.inputGroup}>
                <PhoneIcon />
                <input type="tel" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} required />
              </div>
              
              <div className={styles.inputGroup}>
                <BookIcon />
                <input type="text" name="service" placeholder="Service You Need" value={formData.service} onChange={handleChange} />
              </div>
              
              <div className={styles.inputGroup}>
                <EditIcon />
                <textarea name="note" placeholder="Any Note For Us" value={formData.note} onChange={handleChange} />
              </div>

              <button type="submit" className={styles.submitBtn}>GET AN APPOINTMENT</button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Section7;