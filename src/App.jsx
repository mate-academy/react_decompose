import './App.css';
import Header from './components/Header/Header';

import Welcome from './components/Welcome/Welcome';
import Article from './components/Article/Article';
import Navigation from './components/Navigation/Navigation';
// Move each BEM block to a separate component (fand import them here);

function App() {
  return (
    <main className="app">
      <Welcome />
      <Header />
      <Article />
      <Navigation />

    </main>
  );
}

export default App;
