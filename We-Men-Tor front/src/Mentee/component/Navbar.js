import React from 'react';
import styles from './Navbar.module.css';
import TUTLogo from '../assets/TUT_Logo_Trans.png';

const Navbar = ({ toggleSidebar }) => {
  // Replace this with the actual account holder data
  const accountHolder = {
    name: 'A Baleni',
    profilePicture: 'https://via.placeholder.com/150', // Replace with the actual image URL
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContainer}>
        {/* Logo */}
        <div className={styles.navbarLogo}>
          <a href="/">
          <img src={TUTLogo} alt='LOGO' width="200px" />
          </a>
        </div>

        {/* Account Holder Picture and Name */}
        <div className={styles.accountHolder}>
          <img
            src={accountHolder.profilePicture}
            alt={accountHolder.name}
            className={styles.profilePicture}
            width="80px"
            height="80px"
          />
          <p className={styles.accountName}>{accountHolder.name}</p>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className={styles.hamburgerIcon} onClick={toggleSidebar}>
          <span className={styles.line}></span>
          <span className={styles.line}></span>
          <span className={styles.line}></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
