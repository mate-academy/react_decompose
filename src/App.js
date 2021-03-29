import React from 'react';
import './App.css';
import Article from './components/article/article';
import Header from './components/header/header';
import Welcome from './components/welcome/welcom';

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
