import logo from './logo.png';
import logos from './logos.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logos} className="App-logos" alt="logos" />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          I'm Yasiru Nandasiri - 644.
        </p>
        <a
            className="App-link"
            href="https://www.facebook.com/YN.RHYNN/"
            target="_blank"
            rel="noopener noreferrer"
        >
          Follow Me on FB
        </a>
      </header>
    </div>
  );
}

export default App;
