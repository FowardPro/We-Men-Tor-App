import React from 'react';
import { FaHome, FaBook, FaCalendarAlt, FaFileAlt, FaCommentAlt, FaRobot, FaCog, FaSignOutAlt } from 'react-icons/fa';
import styles from './Sidebar.module.css'; // Import the CSS module

const Sidebar = ({ isSidebarOpen, onMenuItemClick }) => {
  return (
    <aside className={`${styles.sidebar} ${isSidebarOpen ? styles.open : ''}`}>
      <nav className={styles.menu}>
        <ul>
          <li className={styles.menuItem} onClick={() => onMenuItemClick('home')}>
            <FaHome /> <span>Home</span>
          </li>
          <li className={styles.menuItem} onClick={() => onMenuItemClick('modules')}>
            <FaBook /> <span>Modules</span>
          </li>
          <li className={styles.menuItem} onClick={() => onMenuItemClick('booking')}>
            <FaCalendarAlt /> <span>Booking</span>
          </li>
          <li className={styles.menuItem} onClick={() => onMenuItemClick('register')}>
            <FaFileAlt /> <span>Register</span>
          </li>
          <li className={styles.menuItem} onClick={() => onMenuItemClick('feedback')}>
            <FaCommentAlt /> <span>Feedback</span>
          </li>
          <li className={styles.menuItem} onClick={() => onMenuItemClick('useai')}>
            <FaRobot /> <span>Use AI</span>
          </li>
          <li className={styles.menuItem} onClick={() => onMenuItemClick('settings')}>
            <FaCog /> <span>Settings</span>
          </li>
          <li className={styles.menuItem} onClick={() => onMenuItemClick('logout')}>
            <FaSignOutAlt /> <span>Sign Out</span>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
