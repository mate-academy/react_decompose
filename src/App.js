import React from 'react';
import Header from './components/Header/Header';
import Welcome from './components/Welcome/Welcome';
import Article from './components/Article/Article';
import './normalize.css';

function App() {
  return (
    <main className="app">
      <Header />
      <Welcome />
      <Article />
    </main>
  );
}

export default App;
