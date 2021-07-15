import React from 'react';
import './App.css';
import Header from './components/header/header';
import Welcome from './components/Welcome/welcome';
import Article from './components/article/article';

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
