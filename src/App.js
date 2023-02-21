
import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import './App.css';
import Header from './components/Header'
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import Dashboard from './pages/dashboard/Dashboard';
import PageNotFound from './pages/PageNotFound';


function App() {
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') || 'light'
  );

  const toggleDarkMode = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.body.className = theme;
  }, [theme]);

  return (
    <div className={`${theme}`}>
      <div className='App-setting'>
        <DarkModeSwitch
          style={{ margin: '1rem' }}
          checked={theme === 'dark'}
          onChange={toggleDarkMode}
          size={20}
        />
      </div>
      <Router>
        <Header />
        <div className='div-container'>
          <Routes>
            <Route path="/home" element={<HomePage />} />
            <Route path="/" element={<Navigate replace to="/home" />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
