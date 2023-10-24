import logo from './logo.svg';
import './App.css';
import { Article } from './components/Article/Article';
import { Header } from './components/Header/Header';
import { Welcome } from './components/Welcome';

function App() {
  return (
    <div className="App">
      <Header />
      {/* <header className="App-header"> */}
        <img src={logo} className="App-logo" alt="logo" />
        <Welcome />
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
        <Article />
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      {/* </header> */}
    </div>
  );
}

export default App;
