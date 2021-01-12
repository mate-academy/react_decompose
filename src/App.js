import React from 'react';
import './App.css';
import Header from './components/js/Header';
import Article from './components/js/Article';
import Welcome from './components/js/Welcome';

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
