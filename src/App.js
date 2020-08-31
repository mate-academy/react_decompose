import React from 'react';
import './App.css';
import Welcome from './components/script/welcome';
import Header from './components/script/header';
import Article from './components/script/article';

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
