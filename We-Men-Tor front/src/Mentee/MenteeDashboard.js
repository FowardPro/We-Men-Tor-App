import React, { useState } from 'react';
import Navbar from './component/Navbar';  
import Sidebar from './component/Sidebar'; 
import styles from '../Mentee/MenteeDashboard.module.css'; // Import the CSS module

// Import your page components
import Home from './pages/Home';  
import Modules from './pages/Modules';  
import Booking from './pages/Booking';  
import Register from './pages/Register';  
import Feedback from './pages/Feedback';  
import UseAi from './pages/UseAi';  
import Settings from './pages/Settings';  

const MenteeDashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeContent, setActiveContent] = useState('home'); // Default content

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const renderContent = () => {
    switch (activeContent) {
      case 'home':
        return <Home />;
      case 'modules':
        return <Modules />;
      case 'booking':
        return <Booking />;
      case 'register':
        return <Register />;
      case 'feedback':
        return <Feedback />;
      case 'useai':
        return <UseAi />;
      case 'settings':
        return <Settings />;
      default:
        return <Home />;
    }
  };

  return (
    <>
      <header>
        <Navbar toggleSidebar={toggleSidebar} />
      </header>
      <main className={styles['dashboard-container']}>
        <aside className={`${styles.sidebar} ${isSidebarOpen ? styles.open : ''}`}>
          <Sidebar
            isSidebarOpen={isSidebarOpen}
            onMenuItemClick={setActiveContent} // Pass a function to handle menu clicks
          />
        </aside>
        <section className={styles.content}>
          {renderContent()}
        </section>
      </main>
    </>
  );
};

export default MenteeDashboard;
