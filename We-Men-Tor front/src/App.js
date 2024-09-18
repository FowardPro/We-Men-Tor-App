import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './component/Landing/LandingPage.js';
import LoginPage from './component/Login/LoginPage.js';
import AboutPage from './component/about/AboutPage.js'; 
import RegisterPage from './component/Register/RegisterPage.js'; 
import MenteeDashboard from './Mentee/MenteeDashboard.js';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/aboutPage" element={<AboutPage />} /> 
        <Route path="/RegisterPage" element={<RegisterPage />} />
        <Route path="/MenteeDashboard/*" element={<MenteeDashboard />} /> 
      </Routes>
    </Router>
  );
};

export default App;
