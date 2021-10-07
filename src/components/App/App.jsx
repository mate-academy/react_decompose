import React from 'react';
import './App.css';
// Move each BEM block to a separate component (file) and import them here

import Header from '../Header/Header';
import Article from '../Article/Article';
import Welcome from '../Welcome/Welcome/Welcome';

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
