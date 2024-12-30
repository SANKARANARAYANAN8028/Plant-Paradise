import React from 'react';
import { Link } from 'react-router-dom';
import styles from './LandingPage.module.css';

const LandingPage = () => {
  return (
   <div className={styles.landing}>
      <div className={styles.content}>
        <h1 className={styles.title}>Welcome to Plant Paradise</h1>
        <p className={styles.description}>
          Discover our carefully curated collection of beautiful houseplants. 
          Whether you're a beginner or a plant enthusiast, we have the perfect 
          green companion for your space. Our plants are sourced from the best 
          growers and come with care instructions to ensure they thrive in their new home.
        </p>
        <Link to="/products" className={styles.button}>
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
