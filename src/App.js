import React from 'react';
import Welcome from './components/welcome/welcome';
import Header from './components/header/header';
import Article from './components/article/article';
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
