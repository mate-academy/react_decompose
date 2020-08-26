import React from 'react';
import './App.css';
import Article from './components/article';
import Header from './components/header';
import Welcome from './components/welcome';

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
