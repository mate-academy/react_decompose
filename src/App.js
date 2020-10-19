import React from 'react';
import './App.css';
import Header from './components/header';
import Welcome from './components/welcome';
import Article from './components/article';

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
