import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header = ({ cartItemCount }) => {
  const [scrolled, setScrolled] = useState(false);
  const [hideHeader, setHideHeader] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Add scrolled class when page is scrolled
      if (currentScrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Hide header when scrolling down, show when scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setHideHeader(true);
      } else {
        setHideHeader(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''} ${hideHeader ? styles.hideHeader : ''}`}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo}>
          Plant Paradise
        </Link>
        <nav className={styles.nav}>
          <Link to="/products" className={styles.navLink}>
            Shop Plants
          </Link>
          <Link to="/cart" className={styles.cartLink}>
            <span className={styles.cartIcon}>🛒</span>
            {cartItemCount > 0 && (
              <span className={styles.cartCount}>{cartItemCount}</span>
            )}
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
