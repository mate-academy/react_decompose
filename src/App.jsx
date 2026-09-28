import React from 'react';
import './App.css';

import Welcome from './components/Welcome/Welcome';
import Article from './components/Article/Article';
import Header from './components/Header/Header';

function App() {
  return (
    <>
      <Welcome />
      <main className="app">
        <Header />
        <Article />
      </main>
    </>
  );
}

export default App;
