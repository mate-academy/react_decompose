import React from 'react';
import Article from './components/Article/Article';
import Header from './components/Header/Header';
import Welcome from './components/Welcome/Welcome';

import './App.css';

function App() {
  return (
    <main className="app">
      <Welcome
        classWrapper="welcome"
        classText="welcome__text"
        text="Sticky Header!"
      />
      <Header />
      <Article />
    </main>
  );
}

export default App;
