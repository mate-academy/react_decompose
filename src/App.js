import React from 'react';
import './App.css';
import Article from './components/article/article';
import './components/header/header';
import Header from './components/header/header';
import Welcome from './components/welcome/welcome';

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
