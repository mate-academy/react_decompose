import React from 'react';
import '../App.css';
import Welcome from '../welcome/Welcome';
import Article from '../article/Article';
import Header from '../header/Header';

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
