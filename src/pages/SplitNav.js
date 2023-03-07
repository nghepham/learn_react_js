import React from 'react';
import './SplitNav.css';

export default function SplitNav() {
  return (
    <div className='container'>
      <nav>
        <ul className='main-nav'>
          <li><a href='#'>Home</a></li>
          <li><a href='#'>Products</a></li>
          <li><a href='#'>Our Teams</a></li>
          <li id='left-nav'>
            <ul className='main-nav'>
              <li><a href='#'>Demo</a></li>
              <li><a href='#'>Contact</a></li>
              <li><a href='#'>Helps</a></li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  )
}
