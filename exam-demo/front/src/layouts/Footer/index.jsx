import React from 'react';
import styles from './index.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.newsletter}>
        <h2>Newsletter</h2>
        <p>Subscribe to our newsletter and get 20% off your first purchase</p>
        <div className={styles.subscribe}>
          <input type="email" placeholder="Your email" />
          <button>SUBSCRIBE</button>
        </div>
      </div>
      <div className={styles.links}>
        <a href="/blog">Blog</a>
        <a href="/faqs">FAQs</a>
        <a href="/contact">Contact us</a>
      </div>
      <div className={styles.copyright}>
        <p>©2018 All Rights Reserved. This template is made with <span role="img" aria-label="love">❤️</span> by Colorlib</p>
      </div>
      <div className={styles.social}>
        <a href="https://facebook.com" aria-label="Facebook"><i className="fa fa-facebook"></i></a>
        <a href="https://twitter.com" aria-label="Twitter"><i className="fa fa-twitter"></i></a>
        <a href="https://instagram.com" aria-label="Instagram"><i className="fa fa-instagram"></i></a>
        <a href="https://skype.com" aria-label="Skype"><i className="fa fa-skype"></i></a>
        <a href="https://pinterest.com" aria-label="Pinterest"><i className="fa fa-pinterest"></i></a>
      </div>
    </footer>
  );
};

export default Footer;
