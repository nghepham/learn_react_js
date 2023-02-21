
import React from 'react';
import logo from '../assets/logo.svg';
import '../App.css';

function HomePage() {
  return (
    <div className={`dark`}>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" unselectable="on" />
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
      </header>
      <div className='div-container'>
        <h2>Inner Solar System</h2>
        <div className='session'>
          <h3>Mercury</h3>
          <a href='https://en.wikipedia.org/wiki/Mercury_(planet)' hrefLang='en' target={'_blank'} rel="noreferrer">
            <img srcSet='https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Mercury_in_true_color.jpg/800px-Mercury_in_true_color.jpg' src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Mercury_in_true_color.jpg/800px-Mercury_in_true_color.jpg' alt="planet" className='session_image' />
          </a>
          <p className='session_desc'>
            Mercury is the closest planet to the Sun. The smallest planet in the Solar System, Mercury has no natural satellites. The dominant geological features are impact craters or basins with ejecta blankets, the remains of early volcanic activity including magma flows, and lobed ridges or rupes that were probably produced by a period of contraction early in the planet's history. Mercury's very tenuous atmosphere consists of solar-wind particles trapped by Mercury's magnetic field, as well as atoms blasted off its surface by the solar wind. Its relatively large iron core and thin mantle have not yet been adequately explained. Hypotheses include that its outer layers were stripped off by a giant impact, or that it was prevented from fully accreting by the young Sun's energy.<br />There have been searches for "Vulcanoids", asteroids in stable orbits between Mercury and the Sun, but none have been discovered.
          </p>
        </div>
        <div className='session'>
          <h3>Venus</h3>
          <img srcSet='https://media.npr.org/assets/img/2021/06/02/venus_sq-c4e92edf0b03a9fc7d844429ea07b9df42ac7350-s1100-c50.jpg' src='https://media.npr.org/assets/img/2021/06/02/venus_sq-c4e92edf0b03a9fc7d844429ea07b9df42ac7350-s1100-c50.jpg' alt="venus" className='session_image' />
          <p className='session_desc'>
            Mercury is the closest planet to the Sun. The smallest planet in the Solar System, Mercury has no natural satellites. The dominant geological features are impact craters or basins with ejecta blankets, the remains of early volcanic activity including magma flows, and lobed ridges or rupes that were probably produced by a period of contraction early in the planet's history. Mercury's very tenuous atmosphere consists of solar-wind particles trapped by Mercury's magnetic field, as well as atoms blasted off its surface by the solar wind. Its relatively large iron core and thin mantle have not yet been adequately explained. Hypotheses include that its outer layers were stripped off by a giant impact, or that it was prevented from fully accreting by the young Sun's energy.<br />There have been searches for "Vulcanoids", asteroids in stable orbits between Mercury and the Sun, but none have been discovered.
          </p>
        </div>
        <div className='session'>
          <h3>Earth</h3>
          <img srcSet='https://cdn.mos.cms.futurecdn.net/yCPyoZDQBBcXikqxkeW2jJ-1200-80.jpg' src='https://cdn.mos.cms.futurecdn.net/yCPyoZDQBBcXikqxkeW2jJ-1200-80.jpg' alt="earth" className='session_image' />
          <p className='session_desc'>
            Mercury is the closest planet to the Sun. The smallest planet in the Solar System, Mercury has no natural satellites. The dominant geological features are impact craters or basins with ejecta blankets, the remains of early volcanic activity including magma flows, and lobed ridges or rupes that were probably produced by a period of contraction early in the planet's history. Mercury's very tenuous atmosphere consists of solar-wind particles trapped by Mercury's magnetic field, as well as atoms blasted off its surface by the solar wind. Its relatively large iron core and thin mantle have not yet been adequately explained. Hypotheses include that its outer layers were stripped off by a giant impact, or that it was prevented from fully accreting by the young Sun's energy.<br />There have been searches for "Vulcanoids", asteroids in stable orbits between Mercury and the Sun, but none have been discovered.
          </p>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
