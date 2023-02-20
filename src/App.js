
import React, { useState, useEffect } from 'react';
import logo from './assets/logo.svg';
import logo1 from './assets/logo1.svg';
import './App.css';
import { DarkModeSwitch } from 'react-toggle-dark-mode';


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
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" unselectable="on" />
        <h1>Hello World</h1>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <a
          style={{ margin: '20px' }}
          className='App-link2'
          href="https://www.w3schools.com"
          rel="noopener noreferrer"
          target="_blank">W3 school link</a>

        <a style={{ margin: '20px' }} className='App-link2' href="/images/myw3schoolsimage.jpg" download="w3logo">Download w3logo</a>
        <p>This is <b>paragraph</b>.<br />This is example content for <i>paragraph</i> on the web page, which I try to learn a new thinks and new languages</p>
        <img className='App-img' src={logo1} alt='Saforus' />
        <ul style={{ listStyleType: 'square' }}>
          <li>Teacher</li>
          <li>Artificial Intelligent - AI</li>
          <li>Logistics</li>
          <li>Robot</li>
          <li>Rabbit</li>
          <li>The window</li>
        </ul>
      </header>
    </div>
  );
}

export default App;
