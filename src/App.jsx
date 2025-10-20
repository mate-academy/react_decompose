/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import React from 'react';
import './App.css';
import Welcome from './components/Welcome/Welcome';
// eslint-disable-next-line import/named
import Header from './components/Header/Header';
import Article from './components/Article/Article';
// Move each BEM block to a separate component (file) and import them here

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
