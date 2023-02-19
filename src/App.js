import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
          className='App-link2'
          href="https://www.w3schools.com"
          rel="noopener noreferrer"
          target="_blank">W3 school link</a>

        <a className='App-link2' href="/images/myw3schoolsimage.jpg" download="w3logo">
          Download w3logo
        </a>
      </header>
    </div>
  );
}

export default App;
