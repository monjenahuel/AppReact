import logo from './UNAHUR-1.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Bienvenido a Hurlintech
        </p>
        <a
          className="App-link"
          href="https://unahur.edu.ar"
          target="_blank"
          rel="noopener noreferrer"
        >
          Sitio oficial UNAHUR
        </a>
      </header>
    </div>
  );
}

export default App;
