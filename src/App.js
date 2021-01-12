import React from 'react';
import Welcome from './components/welcom';
import Header from './components/header';
import Article from './components/article';
import './App.css';

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
