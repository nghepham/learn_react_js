import React from 'react'
import app from '../assets/apps.svg';


export default function Google() {
  return (
    <div className='container'>
      <header id='g-header'>
        <ul className='menu'>
          <li><a href='#'>Gmail</a></li>
          <li><a href='#'>Images</a></li>
          <li>
            <a href='#'>
              <img src={app} width={20} height={20} />
            </a>
          </li>
          <li>
            <a href='#'>
              <img src={app} width={20} height={20} />
            </a>
          </li>
        </ul>
      </header>
      <main>

      </main>
      <footer>
        
      </footer>
    </div>
  )
}
