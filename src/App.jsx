import './App.css';
import Head from './components/Header/Header';
import Welc from './components/Welcome/Welcome';
import Navigat from './components/Navigation/Navigation';
import Articl from './components/Article/Article';

export function App() {
  return (
    <main className="App">
      <Welc />
      <Head>
        <Navigat />
      </Head>
      <Articl />
    </main>
  );
}

export default App;
