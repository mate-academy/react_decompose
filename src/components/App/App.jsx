import React from 'react';
import './App.css';

import Article from '../Article/Article';
import Header from '../Header/Header';
import Welcome from '../Welcome/Welcome';

function App() {
  return (
    <main className="app">
      <Welcome />
      <Header />
      <Article />
    </main>
  );
}

export default App;
