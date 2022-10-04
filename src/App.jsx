import React from 'react';

import Wellcome from './components/Welcome/Welcome';
import Header from './components/Header/Header';
import Article from './components/Article/Article';

import './App.css';
// Move each BEM block to a separate component (file) and import them here

function App() {
  return (
    <main className="app">

      <Wellcome />
      <Header />
      <Article />

    </main>
  );
}

export default App;
