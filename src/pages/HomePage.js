
import React from 'react';
import logo from '../assets/logo.svg';
import '../App.css';

function HomePage() {
  return (
    <div className={`dark`}>
      <header id="header">
        <div className='App-setting'>
          <nav>
            <ui className='header-menu'>
              <li className='menu-item'><a href='#test'>Product</a></li>
              <li className='menu-item'>Features</li>
              <li className='menu-item'>Customers</li>
              <li className='menu-item'>Pricing</li>
              <li className='menu-item'>Log In</li>
            </ui>
          </nav>
        </div>
        <img src={logo} className="App-logo" alt="logo" unselectable="on" />
      </header>
      <main id='main'>
        <div className='div-container'>
          <div className='div-table'>
            <table>
              <caption><h1>My time table</h1></caption>
              <tr>
                <td rowSpan={7}>
                  Hours
                </td>
                <th>Mon</th>
                <th>Tue</th>
                <th>Wed</th>
                <th>Thu</th>
                <th>Fri</th>
                <th>Sat</th>
                <th>Sun</th>
              </tr>
              <tr>
                <td>C++</td>
                <td>C#</td>
                <td>Python</td>
                <td>Java</td>
                <td>Kotlin</td>
                <td>Dart</td>
                <td>Switf</td>
              </tr>
              <tr>
                <td>C++</td>
                <td>C#</td>
                <td>Python</td>
                <td>Java</td>
                <td>Kotlin</td>
                <td>Dart</td>
                <td>Switf</td>
              </tr>
              <tr>
                <td>C++</td>
                <td>C#</td>
                <td>Python</td>
                <td>Java</td>
                <td>Kotlin</td>
                <td>Dart</td>
                <td>Switf</td>
              </tr>
              <tr>
                <td colSpan={7}>Lunch break</td>
              </tr>
              <tr>
                <td>C++</td>
                <td>C#</td>
                <td>Python</td>
                <td>Java</td>
                <td>Kotlin</td>
                <td>Dart</td>
                <td>Switf</td>
              </tr>
              <tr>
                <td>C++</td>
                <td>C#</td>
                <td>Python</td>
                <td>Java</td>
                <td>Kotlin</td>
                <td>Dart</td>
                <td>Switf</td>
              </tr>
            </table>

          </div>
          <header>
            <h2>Inner Solar System</h2>
          </header>
          <section id='session'>
            <article className='article'>
              <header>
                <h3>Mercury</h3>
                <a href='https://en.wikipedia.org/wiki/Mercury_(planet)' hrefLang='en' target={'_blank'} rel="noreferrer">
                  <img srcSet='https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Mercury_in_true_color.jpg/800px-Mercury_in_true_color.jpg' src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Mercury_in_true_color.jpg/800px-Mercury_in_true_color.jpg' alt="planet" className='session_image' />
                </a>
              </header>
              <p className='session_desc'>
                Mercury is the closest planet to the Sun. The smallest planet in the Solar System, Mercury has no natural satellites. The dominant geological features are impact craters or basins with ejecta blankets, the remains of early volcanic activity including magma flows, and lobed ridges or rupes that were probably produced by a period of contraction early in the planet's history. Mercury's very tenuous atmosphere consists of solar-wind particles trapped by Mercury's magnetic field, as well as atoms blasted off its surface by the solar wind. Its relatively large iron core and thin mantle have not yet been adequately explained. Hypotheses include that its outer layers were stripped off by a giant impact, or that it was prevented from fully accreting by the young Sun's energy.<br />There have been searches for "Vulcanoids", asteroids in stable orbits between Mercury and the Sun, but none have been discovered.
              </p>
            </article>
            <article className='article'>
              <h3>Venus</h3>
              <img srcSet='https://media.npr.org/assets/img/2021/06/02/venus_sq-c4e92edf0b03a9fc7d844429ea07b9df42ac7350-s1100-c50.jpg' src='https://media.npr.org/assets/img/2021/06/02/venus_sq-c4e92edf0b03a9fc7d844429ea07b9df42ac7350-s1100-c50.jpg' alt="venus" className='session_image' />
              <p className='session_desc'>
                Mercury is the closest planet to the Sun. The smallest planet in the Solar System, Mercury has no natural satellites. The dominant geological features are impact craters or basins with ejecta blankets, the remains of early volcanic activity including magma flows, and lobed ridges or rupes that were probably produced by a period of contraction early in the planet's history. Mercury's very tenuous atmosphere consists of solar-wind particles trapped by Mercury's magnetic field, as well as atoms blasted off its surface by the solar wind. Its relatively large iron core and thin mantle have not yet been adequately explained. Hypotheses include that its outer layers were stripped off by a giant impact, or that it was prevented from fully accreting by the young Sun's energy.<br />There have been searches for "Vulcanoids", asteroids in stable orbits between Mercury and the Sun, but none have been discovered.
              </p>
            </article>
            <article className='article'>
              <h3>Earth</h3>
              <img srcSet='https://cdn.mos.cms.futurecdn.net/yCPyoZDQBBcXikqxkeW2jJ-1200-80.jpg' src='https://cdn.mos.cms.futurecdn.net/yCPyoZDQBBcXikqxkeW2jJ-1200-80.jpg' alt="earth" className='session_image' />
              <p className='session_desc'>
                Mercury is the closest planet to the Sun. The smallest planet in the Solar System, Mercury has no natural satellites. The dominant geological features are impact craters or basins with ejecta blankets, the remains of early volcanic activity including magma flows, and lobed ridges or rupes that were probably produced by a period of contraction early in the planet's history. Mercury's very tenuous atmosphere consists of solar-wind particles trapped by Mercury's magnetic field, as well as atoms blasted off its surface by the solar wind. Its relatively large iron core and thin mantle have not yet been adequately explained. Hypotheses include that its outer layers were stripped off by a giant impact, or that it was prevented from fully accreting by the young Sun's energy.<br />There have been searches for "Vulcanoids", asteroids in stable orbits between Mercury and the Sun, but none have been discovered.
              </p>
            </article>

            <article className='article' id='test'>
              <h3>Earth</h3>
              <img srcSet='https://cdn.mos.cms.futurecdn.net/yCPyoZDQBBcXikqxkeW2jJ-1200-80.jpg' src='https://cdn.mos.cms.futurecdn.net/yCPyoZDQBBcXikqxkeW2jJ-1200-80.jpg' alt="earth" className='session_image' />
              <p className='session_desc'>
                Mercury is the closest planet to the Sun. The smallest planet in the Solar System, Mercury has no natural satellites. The dominant geological features are impact craters or basins with ejecta blankets, the remains of early volcanic activity including magma flows, and lobed ridges or rupes that were probably produced by a period of contraction early in the planet's history. Mercury's very tenuous atmosphere consists of solar-wind particles trapped by Mercury's magnetic field, as well as atoms blasted off its surface by the solar wind. Its relatively large iron core and thin mantle have not yet been adequately explained. Hypotheses include that its outer layers were stripped off by a giant impact, or that it was prevented from fully accreting by the young Sun's energy.<br />There have been searches for "Vulcanoids", asteroids in stable orbits between Mercury and the Sun, but none have been discovered.
              </p>
            </article>
          </section>
        </div>
      </main>
      <footer id='footer'>
        <div>
          <p>This is footer</p>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;
