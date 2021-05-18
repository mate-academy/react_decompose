import React from 'react';
import './app.css';
import Welcome from '../welcome/welcome';
import Header from '../header/header';
import Article from '../article/article';

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
