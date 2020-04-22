import React from 'react';
import './app.css';
import Welcome from '../welcome';
import Header from '../header';
import Article from '../article';

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
