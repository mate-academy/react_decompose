// eslint-disable-next-line no-unused-vars
import React from 'react';
// eslint-disable-next-line no-unused-vars
import Article from './components/Article/Article';
import './App.css';
import Welcome from './components/Welcome/Welcome';
import Header from './components/Header/Header';

function App() {
  return (
    <main className="app">
      <Header />
      <Article />
      <Welcome />
    </main>
  );
}

export default App;
